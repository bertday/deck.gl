// deck.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

export default /* wgsl */`\
// Project module mock

fn project_size_to_pixel(size: f32, units: i32) -> f32 {
  return size;
}

fn project_position_to_clipspace(position: vec3<f32>, position64Low: vec3<f32>, offset: vec3<f32>, result: vec4<f32>) -> vec4<f32> {
  return result;
}

fn project_pixel_size_to_clipspace(pixelSize: vec2<f32>) -> vec2<f32> {
  return pixelSize;
}

fn project_pixel_size(size: f32) -> vec3<f32> {
  return vec3<f32>(size, size, 0.0);
}

// Layer uniforms

struct LayerUniforms {
  opacity: f32,
};

@group(0) @binding(1) var<uniform> layer: LayerUniforms;

// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

struct ConstantAttributeUniforms {
 instancePositions: vec3<f32>,
 instancePositions64Low: vec3<f32>,
 instanceRadius: f32,
 instanceLineWidths: f32,
 instanceFillColors: vec4<f32>,
 instanceLineColors: vec4<f32>,
 instancePickingColors: vec3<f32>,

 instancePositionsConstant: i32,
 instancePositions64LowConstant: i32,
 instanceRadiusConstant: i32,
 instanceLineWidthsConstant: i32,
 instanceFillColorsConstant: i32,
 instanceLineColorsConstant: i32,
 instancePickingColorsConstant: i32
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;
// @group(0) @binding(1) var<uniform> constantAttributes: ConstantAttributeUniforms;

struct ConstantAttributes {
  instancePositions: vec3<f32>,
  instancePositions64Low: vec3<f32>,
  instanceRadius: f32,
  instanceLineWidths: f32,
  instanceFillColors: vec4<f32>,
  instanceLineColors: vec4<f32>,
  instancePickingColors: vec3<f32>
};

const constants = ConstantAttributes(
  vec3<f32>(0.0),
  vec3<f32>(0.0),
  0.0,
  0.0,
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec3<f32>(0.0)
);

struct Attributes {
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePickingColors: vec3<f32>
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;
  // var geometry: Geometry;
  // geometry.worldPosition = instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  let edgePadding = select(
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels, 
    1.0, 
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = attributes.instancePickingColors;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, vec3<f32>(0.0), geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    let offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position.x = clipPixels.x;
    varyings.position.y = clipPixels.y;
  } else {
    let offset = edgePadding * attributes.positions * project_pixel_size(varyings.outerRadiusPixels);
    // DECKGL_FILTER_SIZE(offset, geometry);
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, offset, geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  // let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  // let inCircle = select(
  //   smoothedge(distToCenter, varyings.outerRadiusPixels),
  //   step(distToCenter, varyings.outerRadiusPixels),
  //   scatterplot.antialiasing != 0
  // );

  // if (inCircle == 0.0) {
  //   discard;
  // }

  // var fragColor: vec4<f32>;

  // if (scatterplot.stroked != 0) {
  //   let isLine = select(
  //     smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
  //     step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
  //     scatterplot.antialiasing != 0
  //   );

  //   if (scatterplot.filled != 0) {
  //     fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
  //   } else {
  //     if (isLine == 0.0) {
  //       discard;
  //     }
  //     fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
  //   }
  // } else if (scatterplot.filled == 0) {
  //   discard;
  // } else {
  //   fragColor = varyings.vFillColor;
  // }

  // fragColor.a *= inCircle;
  // // DECKGL_FILTER_COLOR(fragColor, geometry);

  // return fragColor;
  return vec4<f32>(0, 0, 255, 1);
}
`;

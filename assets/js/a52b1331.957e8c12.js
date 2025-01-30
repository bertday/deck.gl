"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2101],{22:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"api-reference/core/project","title":"project (Shader Module)","description":"The project shader module is part of the core of deck.gl. It makes it easy to write shaders that support all of deck.gl\'s projection modes and it supports some advanced rendering techniques such as pixel space rendering etc.","source":"@site/../docs/api-reference/core/project.md","sourceDirName":"api-reference/core","slug":"/api-reference/core/project","permalink":"/docs/api-reference/core/project","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/project.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"DeckGL (Scripting Interface)","permalink":"/docs/api-reference/core/deckgl"},"next":{"title":"project32 (Shader Module)","permalink":"/docs/api-reference/core/project32"}}');var t=s(74848),n=s(28453);const c={},r="project (Shader Module)",l={},d=[{value:"Usage",id:"usage",level:2},{value:"getUniforms",id:"getuniforms",level:2},{value:"GLSL Uniforms",id:"glsl-uniforms",level:2},{value:"GLSL Functions",id:"glsl-functions",level:2},{value:"project_position",id:"project_position",level:3},{value:"project_size",id:"project_size",level:3},{value:"project_size_to_pixel",id:"project_size_to_pixel",level:3},{value:"project_pixel_size",id:"project_pixel_size",level:3},{value:"project_pixel_size_to_clipspace",id:"project_pixel_size_to_clipspace",level:3},{value:"project_normal",id:"project_normal",level:3},{value:"project_common_position_to_clipspace",id:"project_common_position_to_clipspace",level:3},{value:"project_get_orientation_matrix",id:"project_get_orientation_matrix",level:3},{value:"Remarks",id:"remarks",level:2}];function a(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"project-shader-module",children:"project (Shader Module)"})}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"project"})," shader module is part of the core of deck.gl. It makes it easy to write shaders that support all of deck.gl's projection modes and it supports some advanced rendering techniques such as pixel space rendering etc."]}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"project"})," module has two extensions:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/docs/api-reference/core/project32",children:"project32"})," shorthand functions for projecting directly from worldspace to clipspace."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/docs/api-reference/core/project64",children:"project64"})," counterpart of ",(0,t.jsx)(o.code,{children:"project32"})," that enables 64 bit projections, providing an increase in precision, at the cost of performance."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o.p,{children:"Projects worldspace coordinates to clipspace coordinates."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"// instanced geometry\nin vec3 positions;\n// instance attributes\nin vec3 instanceCenter;\nin float instanceSize;\n\nvoid main(void) {\n  vec3 center = project_position(instanceCenter);\n  vec3 vertex = positions * project_size(instanceSize);\n  gl_Position = project_common_position_to_clipspace(center + vertex);\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"getuniforms",children:"getUniforms"}),"\n",(0,t.jsx)(o.p,{children:"The JavaScript uniforms are extracted from both contextual and per-layer props. The following information are used:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.code,{children:"viewport"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.code,{children:"devicePixelRatio"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.code,{children:"coordinateSystem"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.code,{children:"coordinateOrigin"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.code,{children:"modelMatrix"})}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"glsl-uniforms",children:"GLSL Uniforms"}),"\n",(0,t.jsx)(o.p,{children:"Uniforms are considered private to each shader module. They may change in between patch releases. Always use documented functions instead of accessing module uniforms directly."}),"\n",(0,t.jsxs)(o.p,{children:["The uniforms of the ",(0,t.jsx)(o.code,{children:"project"})," shader module are prefixed with ",(0,t.jsx)(o.code,{children:"project_"})," in their names."]}),"\n",(0,t.jsx)(o.h2,{id:"glsl-functions",children:"GLSL Functions"}),"\n",(0,t.jsxs)(o.p,{children:["The projection module enables you to write vertex shaders that support deck.gl's coordinate systems and projection methods. Using the projection module ensures that you layer will be able accept position coordinates in the various formats supported by deck.gl, such as ",(0,t.jsx)(o.code,{children:"[longitude, latitude, altitude]"})," or ",(0,t.jsx)(o.code,{children:"[metersX, metersY, metersZ]"}),". To support the basic features expected of a deck.gl layer, such as various viewport types and coordinate systems, your own shaders should always use the built-in projection functions."]}),"\n",(0,t.jsx)(o.p,{children:"The functions converts positions/vectors between 4 coordinate spaces:"}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Name"}),(0,t.jsx)(o.th,{children:"Short Name"}),(0,t.jsx)(o.th,{children:"Description"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"World space"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.code,{children:"world"})}),(0,t.jsxs)(o.td,{children:["The ",(0,t.jsx)(o.a,{href:"/docs/developer-guide/coordinate-systems",children:"coordinate system"})," defined by the layer, not necessarily linear or uniform."]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Common space"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.code,{children:"common"})}),(0,t.jsx)(o.td,{children:"A normalized intermediate 3D space that deck.gl uses for consistent processing of geometries, guaranteed to be linear and uniform. Therefore, it is safe to add/rotate/scale positions and vectors in this space."})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Screen space"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.code,{children:"pixel"})}),(0,t.jsxs)(o.td,{children:["Top-left coordinate system runs from ",(0,t.jsx)(o.code,{children:"[0, 0]"})," to ",(0,t.jsx)(o.code,{children:"[viewportWidth, viewportHeight]"})," (see remarks below)."]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#Clip_space",children:"Clip space"})}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.code,{children:"clipspace"})}),(0,t.jsx)(o.td,{children:"Output of the vertex shader."})]})]})]}),"\n",(0,t.jsxs)(o.p,{children:["More detailed explanation of each coordinate space can be found in the ",(0,t.jsx)(o.a,{href:"/docs/developer-guide/coordinate-systems",children:"coordinate systems guide"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["The GLSL functions of the ",(0,t.jsx)(o.code,{children:"project"})," shader module uses the following naming convention:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"project_[<source_space>]_<object_type>_[to_<target_space>]\n"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"source_space"}),": the short name of the coordinate space of the input. If not specified, the input is always in the ",(0,t.jsx)(o.code,{children:"world"})," space."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"object_type"}),": one of the following","\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"position"}),": absolute position of a point"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"offset"}),": the delta between two positions"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"normal"}),": the normal vector of a surface"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"size"}),": the measurement of a geometry. This is different from ",(0,t.jsx)(o.code,{children:"offset"})," in that ",(0,t.jsx)(o.code,{children:"size"})," is uniform on all axes (e.g. [x, y, z] in meters in ",(0,t.jsx)(o.code,{children:"LNGLAT"})," world space) and ",(0,t.jsx)(o.code,{children:"offset"})," may not be (e.g. [dLon, dLat, dAlt] in degrees, degrees, and meters respectively in ",(0,t.jsx)(o.code,{children:"LNGLAT"})," world space)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"target_space"}),": the short name of the coordinate space of the output. If not specified, the output is always in the ",(0,t.jsx)(o.code,{children:"common"})," space."]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"project_position",children:"project_position"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"vec2 project_position(vec2 position)\nvec3 project_position(vec3 position)\nvec3 project_position(vec3 position, vec3 position64Low)\nvec4 project_position(vec4 position)\nvec4 project_position(vec4 position, vec3 position64Low)\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Converts the coordinates of a point from the world space to the common space. The coordinates are interpreted according to ",(0,t.jsx)(o.code,{children:"coordinateSystem"})," and ",(0,t.jsx)(o.code,{children:"modelMatrix"})," is applied."]}),"\n",(0,t.jsx)(o.h3,{id:"project_size",children:"project_size"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"float project_size(float meters)\nvec2 project_size(vec2 meters)\nvec3 project_size(vec3 meters)\nvec4 project_size(vec4 meters)\n"})}),"\n",(0,t.jsx)(o.p,{children:"Converts the size of a geometry from the world space (meters if geospatial, and absolute units otherwise) to the common space."}),"\n",(0,t.jsx)(o.h3,{id:"project_size_to_pixel",children:"project_size_to_pixel"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"float project_size_to_pixel(float size)\nfloat project_size_to_pixel(float size, int units)\n"})}),"\n",(0,t.jsx)(o.p,{children:"Converts the size of a geometry from the given units in the world space to the common space. If unspecified, units is meters. The result corresponds to the number of screen pixels when the given size is viewed with a top-down camera."}),"\n",(0,t.jsx)(o.h3,{id:"project_pixel_size",children:"project_pixel_size"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"float project_pixel_size(float pixels)\nfloat project_pixel_size(vec2 pixels)\n"})}),"\n",(0,t.jsx)(o.p,{children:"Converts the size of a geometry from the screen space to the common space."}),"\n",(0,t.jsx)(o.h3,{id:"project_pixel_size_to_clipspace",children:"project_pixel_size_to_clipspace"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"vec2 project_pixel_size_to_clipspace(vec2 pixels)\n"})}),"\n",(0,t.jsx)(o.p,{children:"Converts the size of a geometry from the screen space to the clip space."}),"\n",(0,t.jsx)(o.h3,{id:"project_normal",children:"project_normal"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"vec3 project_normal(vec3 vector)\n"})}),"\n",(0,t.jsx)(o.p,{children:"Converts position deltas from the world space to normalized vector in the common space."}),"\n",(0,t.jsx)(o.h3,{id:"project_common_position_to_clipspace",children:"project_common_position_to_clipspace"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"vec4 project_common_position_to_clipspace(vec4 position)\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Converts the coordinates of a point from the common space to the clip space, which can be assigned to ",(0,t.jsx)(o.code,{children:"gl_Position"}),' as the "return value" from the vertex shader.']}),"\n",(0,t.jsx)(o.h3,{id:"project_get_orientation_matrix",children:"project_get_orientation_matrix"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"mat3 project_get_orientation_matrix(vec3 up)\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Returns a matrix that rotates any vector defined in the default common space to a new orientation, such that ",(0,t.jsx)(o.code,{children:"vec3(0, 0, 1)"})," is aligned with ",(0,t.jsx)(o.code,{children:"up"}),". ",(0,t.jsx)(o.code,{children:"up"})," is a normal in common space."]}),"\n",(0,t.jsx)(o.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["For consistent results, the screen space pixels are logical pixels, not device pixels, i.e. functions in the project module multiply ",(0,t.jsx)(o.code,{children:"pixels"})," with ",(0,t.jsx)(o.code,{children:"project.devicePixelRatio"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["The pixels offsets will be divided by the ",(0,t.jsx)(o.code,{children:"w"})," coordinate of ",(0,t.jsx)(o.code,{children:"gl_Position"}),". This is simply the GPUs standard treatment of any coordinate. This means that there will be more pixels closer to the camera and less pixels further away from the camer. Setting the ",(0,t.jsx)(o.code,{children:"focalDistance"})," uniform controls this."]}),"\n",(0,t.jsxs)(o.li,{children:["To avoid pixel sizes scaling with distance from camera, simply set ",(0,t.jsx)(o.code,{children:"focalDistance"})," to 1 and multiply clipspace offset with ",(0,t.jsx)(o.code,{children:"gl_Position.w"})]}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>c,x:()=>r});var i=s(96540);const t={},n=i.createContext(t);function c(e){const o=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);
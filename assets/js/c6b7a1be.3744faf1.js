"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[228],{70187:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api-reference/core/composite-layer","title":"CompositeLayer Class","description":"The CompositeLayer class is a subclass of the Layer Class, that customizes various layer lifecycle methods to help create sublayers and handle events from those layers.","source":"@site/../docs/api-reference/core/composite-layer.md","sourceDirName":"api-reference/core","slug":"/api-reference/core/composite-layer","permalink":"/docs/api-reference/core/composite-layer","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/composite-layer.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Layer Class","permalink":"/docs/api-reference/core/layer"},"next":{"title":"ArcLayer","permalink":"/docs/api-reference/layers/arc-layer"}}');var i=s(74848),l=s(28453);const o={},d="CompositeLayer Class",a={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>_subLayerProps</code> (object) <strong>EXPERIMENTAL</strong>",id:"_sublayerprops",level:4},{value:"Members",id:"members",level:2},{value:"<code>isComposite</code> (boolean)",id:"iscomposite",level:4},{value:"<code>isLoaded</code> (boolean)",id:"isloaded",level:4},{value:"<code>parent</code> (Layer | null)",id:"parent",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>draw</code>",id:"draw",level:4},{value:"<code>renderLayers</code>",id:"renderlayers",level:4},{value:"<code>filterSubLayer</code>",id:"filtersublayer",level:4},{value:"<code>getPickingInfo</code>",id:"getpickinginfo",level:4},{value:"<code>getSubLayerProps</code>",id:"getsublayerprops",level:4},{value:"<code>shouldRenderSubLayer</code>",id:"shouldrendersublayer",level:4},{value:"<code>getSubLayerClass</code>",id:"getsublayerclass",level:4},{value:"<code>getSubLayerRow</code>",id:"getsublayerrow",level:4},{value:"<code>getSubLayerAccessor</code>",id:"getsublayeraccessor",level:4},{value:"Source",id:"source",level:2}];function t(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"compositelayer-class",children:"CompositeLayer Class"})}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"CompositeLayer"})," class is a subclass of the ",(0,i.jsx)(r.a,{href:"/docs/api-reference/core/layer",children:"Layer Class"}),", that customizes various ",(0,i.jsx)(r.a,{href:"/docs/developer-guide/custom-layers/layer-lifecycle",children:"layer lifecycle methods"})," to help create sublayers and handle events from those layers."]}),"\n",(0,i.jsx)(r.p,{children:"If you intend to implement a layer that generates other layers, you should extend this class."}),"\n",(0,i.jsxs)(r.p,{children:["For more information consult the ",(0,i.jsx)(r.a,{href:"/docs/developer-guide/custom-layers/composite-layers",children:"Composite Layers"})," article."]}),"\n",(0,i.jsx)(r.h2,{id:"constructor",children:"Constructor"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"new CompositeLayer(...props);\n"})}),"\n",(0,i.jsx)(r.p,{children:"Parameters:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"props"})," (object) - ",(0,i.jsx)(r.code,{children:"Layer"})," properties."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(r.p,{children:["Inherits from all ",(0,i.jsx)(r.a,{href:"/docs/api-reference/core/layer",children:"Base Layer"})," properties."]}),"\n",(0,i.jsxs)(r.h4,{id:"_sublayerprops",children:[(0,i.jsx)(r.code,{children:"_subLayerProps"})," (object) ",(0,i.jsx)(r.strong,{children:"EXPERIMENTAL"})]}),"\n",(0,i.jsxs)(r.p,{children:["Key is the id of a sublayer and value is an object used to override the props of the sublayer. For a list of ids rendered by each composite layer, consult the ",(0,i.jsx)(r.em,{children:"Sub Layers"})," section in each layer's documentation."]}),"\n",(0,i.jsxs)(r.p,{children:["Example: make only the ",(0,i.jsx)(r.a,{href:"../layers/geojson-layer#sub-layers",children:"point features"})," in a GeoJsonLayer respond to hover and click"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import {GeoJsonLayer} from '@deck.gl/layers';\n\nconst layer = new GeoJsonLayer({\n  // ...\n  pickable: false,\n  _subLayerProps: {\n    'points-circle': {\n      pickable: true\n    }\n  }\n});\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Example: use ",(0,i.jsx)(r.code,{children:"ColumnLayer"})," instead of ",(0,i.jsx)(r.code,{children:"ScatterplotLayer"})," to render the point features in a GeoJsonLayer"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import {ColumnLayer, GeoJsonLayer} from '@deck.gl/layers';\n\nconst layer = new GeoJsonLayer({\n  // ...other props\n  _subLayerProps: {\n    points: {\n      type: ColumnLayer,\n      diskResolution: 12,\n      radius: 50,\n      extruded: true,\n      getElevation: d => d.sourceFeature.feature.properties.value\n    }\n  }\n});\n"})}),"\n",(0,i.jsx)(r.h2,{id:"members",children:"Members"}),"\n",(0,i.jsxs)(r.h4,{id:"iscomposite",children:[(0,i.jsx)(r.code,{children:"isComposite"})," (boolean)"]}),"\n",(0,i.jsxs)(r.p,{children:["Always ",(0,i.jsx)(r.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(r.h4,{id:"isloaded",children:[(0,i.jsx)(r.code,{children:"isLoaded"})," (boolean)"]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"true"})," if all asynchronous assets are loaded, and all sublayers are also loaded."]}),"\n",(0,i.jsxs)(r.h4,{id:"parent",children:[(0,i.jsx)(r.code,{children:"parent"})," (Layer | null)"]}),"\n",(0,i.jsxs)(r.p,{children:["A ",(0,i.jsx)(r.code,{children:"Layer"})," instance if this layer is rendered by a ",(0,i.jsx)(r.a,{href:"/docs/api-reference/core/composite-layer",children:"CompositeLayer"})]}),"\n",(0,i.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(r.h4,{id:"draw",children:(0,i.jsx)(r.code,{children:"draw"})}),"\n",(0,i.jsxs)(r.p,{children:["A composite layer does not render directly into the WebGL2/WebGPU context. The ",(0,i.jsx)(r.code,{children:"draw"})," method inherited from the base class is therefore never called."]}),"\n",(0,i.jsx)(r.h4,{id:"renderlayers",children:(0,i.jsx)(r.code,{children:"renderLayers"})}),"\n",(0,i.jsx)(r.p,{children:'Allows a layer to "render" or insert one or more deck.gl layers after itself.\nCalled after a layer has been updated.'}),"\n",(0,i.jsx)(r.p,{children:"Returns:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"null"}),", a single ",(0,i.jsx)(r.code,{children:"Layer"})," instance, or a (nested) array of layers."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["The default implementation of ",(0,i.jsx)(r.code,{children:"renderLayers"})," returns ",(0,i.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"renderLayers"})," can return a nested arrays with ",(0,i.jsx)(r.code,{children:"null"})," values. deck.gl will automatically flatten and filter the array. See usage above."]}),"\n",(0,i.jsx)(r.h4,{id:"filtersublayer",children:(0,i.jsx)(r.code,{children:"filterSubLayer"})}),"\n",(0,i.jsx)(r.p,{children:"Allows a layer to dynamically show/hide sub layers based on the render context."}),"\n",(0,i.jsx)(r.p,{children:"Receives arguments:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"layer"})," (Layer) - the sub layer to be drawn"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"viewport"})," (Viewport) - the current viewport"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"isPicking"})," (boolean) - whether this is a picking pass"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"renderPass"})," (string) - the name of the current render pass. See ",(0,i.jsx)(r.a,{href:"/docs/api-reference/core/deck#layerfilter",children:"layerFilter"})," for possible values."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Returns:"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"true"})," if the layer should be drawn."]}),"\n",(0,i.jsxs)(r.p,{children:["This method achieves the same result as toggling sub layers' ",(0,i.jsx)(r.code,{children:"visible"})," prop in ",(0,i.jsx)(r.code,{children:"renderLayers"}),". The difference is that, ",(0,i.jsx)(r.code,{children:"renderLayers"})," is only called when the layer is updated due to props or state change, and will recursively create new instances of all decendant layers, therefore is more expensive to invoke. ",(0,i.jsx)(r.code,{children:"filterSubLayer"})," is evaluated before every redraw, and is intended to be a more performant solution to setting ",(0,i.jsx)(r.code,{children:"visible"})," props dynamically during continuous viewport updates. Generally speaking, ",(0,i.jsx)(r.code,{children:"filterSubLayer"})," is favorable if the visibilities of sub layers change frequently, and the logic to determine visibility is very cheap to compute."]}),"\n",(0,i.jsx)(r.p,{children:"An example of leveraging this method is to switch sub layers on viewport change:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",metastring:'title="Implementation A"',children:"class LODLayer extends CompositeLayer {\n  \n  // Force update layer and re-render sub layers when viewport changes\n  shouldUpdateState({changeFlags}) {\n    return changeFlags.somethingChanged;\n  }\n\n  renderSubLayers() {\n    const {lowResData, hiResData} = this.props;\n    const {zoom} = this.context.viewport;\n    return [\n      new ScatterplotLayer({\n        id: 'points-low-zoom',\n        data: lowResData,\n        visible: zoom < 8\n      }),\n      new ScatterplotLayer({\n        id: 'points-high-zoom',\n        data: highResData,\n        visible: zoom >= 8\n      })\n    ]\n  }\n}\n"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",metastring:'title="Implementation B"',children:"class LODLayer extends CompositeLayer {\n  renderSubLayers() {\n    const {lowResData, hiResData} = this.props;\n    return [\n      new ScatterplotLayer({\n        id: 'points-low-zoom'\n        data: lowResData,\n      }),\n      new ScatterplotLayer({\n        id: 'points-high-zoom',\n        data: highResData\n      })\n    ]\n  }\n\n  filterSubLayer({layer, viewport}) {\n    if (viewport.zoom < 8) {\n      return layer.id === 'points-low-zoom';\n    } else {\n      return layer.id === 'points-high-zoom';\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(r.h4,{id:"getpickinginfo",children:(0,i.jsx)(r.code,{children:"getPickingInfo"})}),"\n",(0,i.jsxs)(r.p,{children:["Called when a sublayer is being hovered or clicked, after the ",(0,i.jsx)(r.code,{children:"getPickingInfo"}),"\nof the sublayer has been called.\nThe composite layer can override or add additional fields to the ",(0,i.jsx)(r.code,{children:"info"})," object\nthat will be passed to the callbacks."]}),"\n",(0,i.jsx)(r.p,{children:"Parameters:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"pickParams"})," (object)","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"info"})," (",(0,i.jsx)(r.a,{href:"/docs/developer-guide/interactivity#the-pickinginfo-object",children:"PickingInfo"}),")"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"mode"})," (string) - the reason for picking, e.g. ",(0,i.jsx)(r.code,{children:"'hover'"}),", ",(0,i.jsx)(r.code,{children:"'click'"})," or ",(0,i.jsx)(r.code,{children:"'query'"})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"sourceLayer"})," (Layer) - the sublayer instance where this event originates from."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Returns:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["An updated ",(0,i.jsx)(r.code,{children:"info"})," object with optional fields about what was picked. This object will be passed to the layer's ",(0,i.jsx)(r.code,{children:"onHover"})," or ",(0,i.jsx)(r.code,{children:"onClick"})," callbacks."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"null"}),", if the corresponding event should be cancelled with no callback functions called."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["The default implementation returns ",(0,i.jsx)(r.code,{children:"pickParams.info"})," without any change."]}),"\n",(0,i.jsx)(r.h4,{id:"getsublayerprops",children:(0,i.jsx)(r.code,{children:"getSubLayerProps"})}),"\n",(0,i.jsxs)(r.p,{children:["This utility method helps create sublayers that properly inherit a composite layer's basic props. For example, it creates a unique id for the sublayer, and makes sure the sublayer's ",(0,i.jsx)(r.code,{children:"coordinateSystem"})," is set to be the same as the parent."]}),"\n",(0,i.jsx)(r.p,{children:"Parameters:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"subLayerProps"})," (object)","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"id"})," (string, required) - an id that is unique among all the sublayers generated by this composite layer."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"updateTriggers"})," (object) - the sublayer's update triggers."]}),"\n",(0,i.jsx)(r.li,{children:"Any additional props are optional."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Returns a properties object used to generate a sublayer, with the following keys:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"id"})," - a unique id for the sublayer, by prepending the parent layer id to the sublayer id."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"updateTriggers"})," - merged object of the parent layer update triggers and the sublayer update triggers."]}),"\n",(0,i.jsxs)(r.li,{children:["Base layer props that are directly forwarded from the base layer:","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"opacity"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"pickable"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"visible"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"parameters"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"getPolygonOffset"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"highlightedObjectIndex"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"autoHighlight"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"highlightColor"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"coordinateSystem"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"coordinateOrigin"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"wrapLongitude"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"positionFormat"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"modelMatrix"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.li,{children:"Any other additional props from the input parameter are directly forwarded."}),"\n",(0,i.jsxs)(r.li,{children:["Any overriding props specified in ",(0,i.jsx)(r.code,{children:"_subLayerProps"}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"shouldrendersublayer",children:(0,i.jsx)(r.code,{children:"shouldRenderSubLayer"})}),"\n",(0,i.jsx)(r.p,{children:"Called to determine if a sublayer should be rendered.\nA composite layer can override this method to change the default behavior."}),"\n",(0,i.jsx)(r.p,{children:"Parameters:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"id"})," (string) - the sublayer id"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"data"})," (object[]) - the sublayer data"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Returns ",(0,i.jsx)(r.code,{children:"true"})," if the sublayer should be rendered. The base class implementation returns ",(0,i.jsx)(r.code,{children:"true"})," if ",(0,i.jsx)(r.code,{children:"data"})," is not empty."]}),"\n",(0,i.jsx)(r.h4,{id:"getsublayerclass",children:(0,i.jsx)(r.code,{children:"getSubLayerClass"})}),"\n",(0,i.jsx)(r.p,{children:"Called to retrieve the constructor of a sublayer.\nA composite layer can override this method to change the default behavior."}),"\n",(0,i.jsx)(r.p,{children:"Parameters:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"id"})," (string) - the sublayer id"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"DefaultLayerClass"})," - the default constructor used for this sublayer."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Returns:"}),"\n",(0,i.jsxs)(r.p,{children:["Constructor for this sublayer. The base class implementation checks if ",(0,i.jsx)(r.code,{children:"type"})," is specified for the sublayer in ",(0,i.jsx)(r.code,{children:"_subLayerProps"}),", otherwise returns the default."]}),"\n",(0,i.jsx)(r.h4,{id:"getsublayerrow",children:(0,i.jsx)(r.code,{children:"getSubLayerRow"})}),"\n",(0,i.jsxs)(r.p,{children:["Used by ",(0,i.jsx)(r.a,{href:"/docs/developer-guide/custom-layers/composite-layers#transforming-data",children:"adapter layers"}),") to decorate transformed data with a reference to the original object."]}),"\n",(0,i.jsx)(r.p,{children:"Parameters:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"row"})," (object) - a custom data object to pass to a sublayer."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"sourceObject"})," (object) - the original data object provided by the user"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"sourceObjectIndex"})," (object) - the index of the original data object provided by the user"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Returns:"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"row"})," object, decorated with a reference."]}),"\n",(0,i.jsx)(r.h4,{id:"getsublayeraccessor",children:(0,i.jsx)(r.code,{children:"getSubLayerAccessor"})}),"\n",(0,i.jsxs)(r.p,{children:["Used by ",(0,i.jsx)(r.a,{href:"/docs/developer-guide/custom-layers/composite-layers#transforming-data",children:"adapter layers"}),") to allow user-provided accessors to read the original objects from transformed data."]}),"\n",(0,i.jsx)(r.p,{children:"Parameters:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"accessor"})," (any) - the accessor provided to the current layer."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Returns:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["If ",(0,i.jsx)(r.code,{children:"accessor"})," is a function, returns a new accessor function."]}),"\n",(0,i.jsxs)(r.li,{children:["If ",(0,i.jsx)(r.code,{children:"accessor"})," is a constant value, returns it as is."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/modules/core/src/lib/composite-layer.ts",children:"modules/core/src/lib/composite-layer.ts"})})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>d});var n=s(96540);const i={},l=n.createContext(i);function o(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);
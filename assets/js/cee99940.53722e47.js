"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6371],{89145:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"api-reference/mapbox/mapbox-layer","title":"MapboxLayer","description":"MapboxLayer is an implementation of Mapbox GL JS\'s CustomLayerInterface API. By adding a MapboxLayer instance to an mapbox map, one can render any deck.gl layer inside the mapbox canvas / WebGL2 context. This is in contrast to the traditional deck.gl/mapbox integration where the deck.gl layers are rendered into a separate canvas over the base map.","source":"@site/../docs/api-reference/mapbox/mapbox-layer.md","sourceDirName":"api-reference/mapbox","slug":"/api-reference/mapbox/mapbox-layer","permalink":"/docs/api-reference/mapbox/mapbox-layer","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/mapbox/mapbox-layer.md","tags":[],"version":"current","frontMatter":{}}');var o=r(74848),t=r(28453);const s={},c="MapboxLayer",d={},i=[{value:"Example",id:"example",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"setProps(props)",id:"setpropsprops",level:5}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"mapboxlayer",children:"MapboxLayer"})}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"MapboxLayer"})," is an implementation of ",(0,o.jsx)(a.a,{href:"https://www.npmjs.com/package/mapbox-gl",children:"Mapbox GL JS"}),"'s ",(0,o.jsx)(a.a,{href:"https://docs.mapbox.com/mapbox-gl-js/api/properties/#customlayerinterface",children:"CustomLayerInterface"})," API. By adding a ",(0,o.jsx)(a.code,{children:"MapboxLayer"})," instance to an mapbox map, one can render any deck.gl layer inside the mapbox canvas / WebGL2 context. This is in contrast to the traditional deck.gl/mapbox integration where the deck.gl layers are rendered into a separate canvas over the base map."]}),"\n",(0,o.jsxs)(a.p,{children:["See the Mapbox ",(0,o.jsx)(a.a,{href:"https://www.mapbox.com/mapbox-gl-js/api/#map#addlayer",children:(0,o.jsx)(a.code,{children:"map.addLayer(layer, before?)"})})," API for how to add a layer to an existing layer stack."]}),"\n",(0,o.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"import {MapboxLayer} from '@deck.gl/mapbox';\nimport {ScatterplotLayer} from '@deck.gl/layers';\n\nconst map = new mapboxgl.Map({...});\n\nconst myScatterplotLayer = new MapboxLayer({\n  id: 'my-scatterplot',\n  type: ScatterplotLayer,\n  data: [\n      {position: [-74.5, 40], size: 100}\n  ],\n  getPosition: d => d.position,\n  getRadius: d => d.size,\n  getColor: [255, 0, 0]\n});\n\n// wait for map to be ready\nmap.on('load', () => {\n  // insert before the mapbox layer \"waterway_label\"\n  map.addLayer(myScatterplotLayer, 'waterway_label');\n\n  // update the layer\n  myScatterplotLayer.setProps({\n    getColor: [0, 0, 255]\n  });\n});\n"})}),"\n",(0,o.jsx)(a.h2,{id:"constructor",children:"Constructor"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"import {MapboxLayer} from '@deck.gl/mapbox';\nnew MapboxLayer(props);\n"})}),"\n",(0,o.jsx)(a.p,{children:"Parameters:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"props"})," (object)","\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"props.id"})," (string) - an unique id is required for each layer."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"props.type"})," (",(0,o.jsx)(a.code,{children:"Layer"}),", optional) - a class that extends deck.gl's base ",(0,o.jsx)(a.code,{children:"Layer"})," class. Required if ",(0,o.jsx)(a.code,{children:"deck"})," is not provided."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"props.deck"})," (",(0,o.jsx)(a.code,{children:"Deck"}),", optional) - a ",(0,o.jsx)(a.code,{children:"Deck"})," instance that controls the rendering of this layer. If provided, the layer will be looked up from its layer stack by ",(0,o.jsx)(a.code,{children:"id"})," at render time, and all other props are ignored. It's recommended that you use the ",(0,o.jsx)(a.a,{href:"/docs/api-reference/mapbox/mapbox-overlay",children:"MapboxOverlay"})," class where a ",(0,o.jsx)(a.code,{children:"Deck"})," instance is automatically managed."]}),"\n",(0,o.jsxs)(a.li,{children:["Optional: any other prop needed by this type of layer. See deck.gl's ",(0,o.jsx)(a.a,{href:"/docs/api-reference/layers/",children:"layer catalog"})," for documentation and examples on how to create layers."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(a.h5,{id:"setpropsprops",children:"setProps(props)"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"const layer = new MapboxLayer({\n    id: 'my-scatterplot',\n    type: ScatterplotLayer,\n    ...\n});\n\nmap.addLayer(layer);\n\nlayer.setProps({\n    radiusScale: 2\n});\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Update a layer after it's added. Has no effect if ",(0,o.jsx)(a.code,{children:"props.deck"})," is provided."]})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>s,x:()=>c});var n=r(96540);const o={},t=n.createContext(o);function s(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);
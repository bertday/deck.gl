"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6735],{46257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api-reference/extensions/terrain-extension","title":"TerrainExtension (Experimental)","description":"This extension is experimental, which means it does not provide the compatibility and stability that one would typically expect from other features. Use with caution and report any issues that you find on GitHub.","source":"@site/../docs/api-reference/extensions/terrain-extension.md","sourceDirName":"api-reference/extensions","slug":"/api-reference/extensions/terrain-extension","permalink":"/docs/api-reference/extensions/terrain-extension","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/extensions/terrain-extension.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"PathStyleExtension","permalink":"/docs/api-reference/extensions/path-style-extension"},"next":{"title":"@deck.gl/json","permalink":"/docs/api-reference/json/overview"}}');var i=t(74848),s=t(28453);const o={},a="TerrainExtension (Experimental)",l={},c=[{value:"Installation",id:"installation",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Layer Properties",id:"layer-properties",level:2},{value:"<code>terrainDrawMode</code> (&#39;offset&#39; | &#39;drape&#39;)",id:"terraindrawmode",level:4},{value:"Source",id:"source",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"terrainextension-experimental",children:"TerrainExtension (Experimental)"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This extension is experimental, which means it does not provide the compatibility and stability that one would typically expect from other features. Use with caution and report any issues that you find on GitHub."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"TerrainExtension"})," renders otherwise 2D data along a 3D surface. For example, a GeoJSON of city streets and building footprints can be overlaid on top of a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Digital_elevation_model",children:"elevation model"}),". It is useful when viewing a mixture of 2D and 3D data sources. The re-positioning of geometries is performed on the GPU."]}),"\n",(0,i.jsxs)(n.p,{children:["To use this extension, first define a terrain source with the prop ",(0,i.jsx)(n.code,{children:"operation: 'terrain'"})," or ",(0,i.jsx)(n.code,{children:"operation: 'terrain+draw'"}),". A terrain source provides the 3D surface to fit other data on to."]}),"\n",(0,i.jsxs)(n.p,{children:["For each layer that should be fitted to the terrain surface, add the ",(0,i.jsx)(n.code,{children:"TerrainExtension"})," to its ",(0,i.jsx)(n.code,{children:"extensions"})," prop."]}),"\n",(0,i.jsx)("div",{style:{position:"relative",height:450}}),"\n",(0,i.jsx)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0},children:(0,i.jsx)("iframe",{height:"450",style:{width:"100%"},scrolling:"no",title:"deck.gl TerrainExtension",src:"https://codepen.io/vis-gl/embed/VwGLLeR?height=450&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true",children:(0,i.jsxs)(n.p,{children:["See the Pen ",(0,i.jsx)("a",{href:"https://codepen.io/vis-gl/pen/VwGLLeR",children:"deck.gl TerrainExtension"})," by vis.gl\n(",(0,i.jsx)("a",{href:"https://codepen.io/vis-gl",children:"@vis-gl"}),") on ",(0,i.jsx)("a",{href:"https://codepen.io",children:"CodePen"}),"."]})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import {GeoJsonLayer} from '@deck.gl/layers';\nimport {TerrainLayer} from '@deck.gl/geo-layers';\nimport {_TerrainExtension as TerrainExtension} from '@deck.gl/extensions';\n\nconst layers = [\n  new TerrainLayer({\n      id: 'terrain',\n      minZoom: 0,\n      maxZoom: 23,\n      strategy: 'no-overlap',\n      elevationDecoder: {\n        rScaler: 6553.6,\n        gScaler: 25.6,\n        bScaler: 0.1,\n        offset: -10000\n      },\n      elevationData: `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.png?access_token=${MAPBOX_TOKEN}`,\n      texture: `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=${MAPBOX_TOKEN}`,\n      operation: 'terrain+draw'\n    }),\n    new GeoJsonLayer({\n      data,\n      getFillColor: [0, 160, 180, 200],\n      getLineColor: [220, 80, 0],\n      getLineWidth: 50,\n      getPointRadius: 150,\n      extensions: [new TerrainExtension()]\n    })\n];\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"To install the dependencies from NPM:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/extensions\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import {_TerrainExtension as TerrainExtension} from '@deck.gl/extensions';\nnew TerrainExtension();\n"})}),"\n",(0,i.jsx)(n.p,{children:"To use pre-bundled scripts:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script src="https://unpkg.com/deck.gl@^9.0.0/dist.min.js"><\/script>\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/extensions@^9.0.0/dist.min.js"><\/script>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"new deck._TerrainExtension();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"new TerrainExtension();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"layer-properties",children:"Layer Properties"}),"\n",(0,i.jsxs)(n.p,{children:["When added to a layer via the ",(0,i.jsx)(n.code,{children:"extensions"})," prop, the ",(0,i.jsx)(n.code,{children:"TerrainExtension"})," adds the following properties to the layer:"]}),"\n",(0,i.jsxs)(n.h4,{id:"terraindrawmode",children:[(0,i.jsx)(n.code,{children:"terrainDrawMode"})," ('offset' | 'drape')"]}),"\n",(0,i.jsx)(n.p,{children:"How data should be fitted to the terrain surface. If not specified, will be automatically determined from the layer type."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"offset"}),": each object is translated vertically by the elevation at its anchor (usually defined by an accessor called ",(0,i.jsx)(n.code,{children:"getPosition"}),", e.g. icon, scatterplot). This is the desired behavior for layers that render 3D objects."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"drape"}),": each object is overlaid as a texture over the terrain surface. All altitude and extrusion in the layer will be ignored."]}),"\n"]}),"\n",(0,i.jsx)("table",{style:{border:0},align:"center",children:(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("img",{style:{maxHeight:216},src:"https://raw.githubusercontent.com/visgl/deck.gl-data/master/images/docs/terrain-fit-offset.jpg"}),(0,i.jsx)("p",{children:(0,i.jsx)("i",{children:"terrainDrawMode: offset"})})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)("img",{style:{maxHeight:216},src:"https://raw.githubusercontent.com/visgl/deck.gl-data/master/images/docs/terrain-fit-drape.jpg"}),(0,i.jsx)("p",{children:(0,i.jsx)("i",{children:"terrainDrawMode: drape"})})]})]})})}),"\n",(0,i.jsx)(n.h2,{id:"source",children:"Source"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/visgl/deck.gl/tree/8.6-release/modules/extensions/src/terrain",children:"modules/extensions/src/terrain"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
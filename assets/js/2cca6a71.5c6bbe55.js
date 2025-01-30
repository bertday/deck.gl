"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7893],{48545:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>n,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"get-started/using-with-map","title":"Base Maps","description":"While deck.gl works independently without any map component, when visualizing geospatial datasets, a base map can offer invaluable context for understanding the overlay layers.","source":"@site/../docs/get-started/using-with-map.md","sourceDirName":"get-started","slug":"/get-started/using-with-map","permalink":"/docs/get-started/using-with-map","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/get-started/using-with-map.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Using deck.gl with TypeScript","permalink":"/docs/get-started/using-with-typescript"},"next":{"title":"Learning Resources","permalink":"/docs/get-started/learning-resources"}}');var a=s(74848),i=s(28453);const n={},d="Base Maps",l={},h=[{value:"Base Maps Renderers",id:"base-maps-renderers",level:2},{value:"Overlaid",id:"overlaid",level:3},{value:"Interleaved",id:"interleaved",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"base-maps",children:"Base Maps"})}),"\n",(0,a.jsx)(t.p,{children:"While deck.gl works independently without any map component, when visualizing geospatial datasets, a base map can offer invaluable context for understanding the overlay layers."}),"\n",(0,a.jsx)(t.h2,{id:"base-maps-renderers",children:"Base Maps Renderers"}),"\n",(0,a.jsx)(t.p,{children:"deck.gl has been designed to work in tandem with popular JavaScript base map providers. Depending on your tech stack, deck.gl's support for a particular base map solution may come with different level of compatibility and limitations."}),"\n",(0,a.jsx)(t.p,{children:"There are two types of integration between deck.gl and a base map renderer:"}),"\n",(0,a.jsx)(t.h3,{id:"overlaid",children:"Overlaid"}),"\n",(0,a.jsx)(t.p,{children:"The Deck canvas is rendered over the base map as a separate DOM element. Deck's camera and the camera of the base map are synchronized so they pan/zoom together. This is the more robust option since the two libraries manage their renderings independently from each other. It is usually sufficient if the base map is 2D."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://miro.medium.com/max/1600/0*K3DVssEhnv5VaDCp",alt:"Deck as overlay on top of the base map"})}),"\n",(0,a.jsx)(t.h3,{id:"interleaved",children:"Interleaved"}),"\n",(0,a.jsx)(t.p,{children:"Deck renders into the WebGL2 context of the base map. This allows for occlusion between deck.gl layers and the base map's labels and/or 3D features. The availability of this option depends on whether the base map solution exposes certain developer APIs, and may subject the user to bugs/limitations associated with such APIs."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Note: Deck cannot render into a WebGL1 context. Check your base map solution for WebGL2 compatibility."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://miro.medium.com/max/1600/0*faYL1UbVD4af5qzy",alt:"Deck interleaved with base map layers"})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Library"}),(0,a.jsx)(t.th,{children:"Pure JS"}),(0,a.jsx)(t.th,{children:"React"}),(0,a.jsx)(t.th,{children:"Overlaid"}),(0,a.jsx)(t.th,{children:"Interleaved"}),(0,a.jsx)(t.th,{children:"Docs"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://developers.arcgis.com/javascript/latest/",children:"ArcGIS API for JavaScript"})}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/get-started/pure-js/arcgis",children:"example"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/developer-guide/base-maps/using-with-arcgis",children:"link"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://developers.google.com/maps/documentation/javascript/deckgl-overlay-view",children:"Google Maps JavaScript API"})}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/get-started/pure-js/google-maps",children:"example"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://developers.google.com/maps/documentation/javascript/examples/deckgl-tripslayer",children:"example"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/developer-guide/base-maps/using-with-google-maps",children:"link"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/heremaps/harp.gl",children:"harp.gl"})}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/get-started/pure-js/harp.gl",children:"example"})}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://leafletjs.com/",children:"Leaflet"})}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/get-started/pure-js/leaflet",children:"example"})}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://docs.mapbox.com/mapbox-gl-js/api/",children:"Mapbox GL JS"})}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/get-started/pure-js/mapbox",children:"example"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://deck.gl/gallery/mapbox-overlay",children:"example"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/developer-guide/base-maps/using-with-mapbox",children:"link"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://maplibre.org/maplibre-gl-js/docs/API/",children:"MapLibre GL JS"})}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/get-started/pure-js/maplibre",children:"example"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://deck.gl/gallery/maplibre-overlay",children:"example"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/docs/developer-guide/base-maps/using-with-maplibre",children:"link"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://openlayers.org/",children:"OpenLayers"})}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/get-started/pure-js/openlayers",children:"example"})}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://developer.apple.com/documentation/mapkitjs",children:"Apple Maps"})}),(0,a.jsx)(t.td,{children:"\u2713"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/get-started/pure-js/apple-maps",children:"example"})}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"It is also important to understand the difference between the JS library that renders the map and the map data provider. For example, you can use Mapbox GL JS with the Mapbox service, but also with any other service that hosts Mapbox Vector Tiles. When using a base map, be sure to follow the terms and conditions, as well as the attribution requirements of both the JS library and the data provider."})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>d});var r=s(96540);const a={},i=r.createContext(a);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
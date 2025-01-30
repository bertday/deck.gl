"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9482],{31692:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"developer-guide/base-maps/using-with-mapbox","title":"Using with Mapbox","description":"| Pure JS | React | Overlaid | Interleaved |","source":"@site/../docs/developer-guide/base-maps/using-with-mapbox.md","sourceDirName":"developer-guide/base-maps","slug":"/developer-guide/base-maps/using-with-mapbox","permalink":"/docs/developer-guide/base-maps/using-with-mapbox","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/base-maps/using-with-mapbox.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Using with Google Maps Platform","permalink":"/docs/developer-guide/base-maps/using-with-google-maps"},"next":{"title":"Using with MapLibre","permalink":"/docs/developer-guide/base-maps/using-with-maplibre"}}');var r=n(74848),o=n(28453),l=n(11470),s=n(19365);const i={},c="Using with Mapbox",d={},p=[{value:"Integration Modes",id:"integration-modes",level:2},{value:"Interleaved",id:"interleaved",level:3},{value:"Overlaid",id:"overlaid",level:3},{value:"Reverse Controlled",id:"reverse-controlled",level:3},{value:"Examples",id:"examples",level:2},{value:"Example: interleaved or overlaid",id:"example-interleaved-or-overlaid",level:3},{value:"Example: reverse controlled",id:"example-reverse-controlled",level:3},{value:"Additional Information",id:"additional-information",level:2},{value:"react-map-gl",id:"react-map-gl",level:3},{value:"Mapbox Token",id:"mapbox-token",level:3},{value:"Alternatives to Mapbox basemap sevice",id:"alternatives-to-mapbox-basemap-sevice",level:3}];function u(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"using-with-mapbox",children:"Using with Mapbox"})}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Pure JS"}),(0,r.jsx)(a.th,{children:"React"}),(0,r.jsx)(a.th,{children:"Overlaid"}),(0,r.jsx)(a.th,{children:"Interleaved"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"\u2713"}),(0,r.jsx)(a.td,{children:"\u2713"}),(0,r.jsx)(a.td,{children:(0,r.jsx)(a.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/get-started/pure-js/mapbox",children:"example"})}),(0,r.jsx)(a.td,{children:(0,r.jsx)(a.a,{href:"https://deck.gl/gallery/mapbox-overlay",children:"example"})})]})})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:"https://raw.github.com/visgl/deck.gl-data/master/images/whats-new/mapbox-layers.jpg",alt:"deck.gl interleaved with Mapbox layers"})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://github.com/mapbox/mapbox-gl-js",children:"Mapbox GL JS"})," is a popular JavaScript library from ",(0,r.jsx)(a.a,{href:"https://mapbox.com",children:"Mapbox"})," for building web map applications. deck.gl's ",(0,r.jsx)(a.code,{children:"MapView"})," can sync perfectly with the camera of Mapbox, at every zoom level and rotation angle."]}),"\n",(0,r.jsx)(a.h2,{id:"integration-modes",children:"Integration Modes"}),"\n",(0,r.jsx)(a.p,{children:"When using deck.gl and Mapbox, there are three options you can choose from: interleaved, overlaid, and reverse-controlled."}),"\n",(0,r.jsx)(a.h3,{id:"interleaved",children:"Interleaved"}),"\n",(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.a,{href:"/docs/get-started/using-with-map#interleaved",children:"interleaved"})," mode renders deck.gl layers into the WebGL2 context created by Mapbox. If you need to mix deck.gl layers with Mapbox layers, e.g. having deck.gl surfaces below text labels, or objects occluding each other correctly in 3D, then you have to use this option."]}),"\n",(0,r.jsxs)(a.p,{children:["Interleaving is supported by using ",(0,r.jsx)(a.a,{href:"/docs/api-reference/mapbox/mapbox-overlay",children:"MapboxOverlay"})," with ",(0,r.jsx)(a.code,{children:"interleaved: true"}),". It requires WebGL2 and therefore only works with ",(0,r.jsx)(a.code,{children:"mapbox-gl@>2.13"}),". See ",(0,r.jsx)(a.a,{href:"../../api-reference/mapbox/overview#interleaved-renderer-compatibility",children:"compatibility"})," and ",(0,r.jsx)(a.a,{href:"/docs/api-reference/mapbox/overview#limitations",children:"limitations"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"overlaid",children:"Overlaid"}),"\n",(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.a,{href:"/docs/get-started/using-with-map#overlaid",children:"overlaid"})," mode renders deck.gl in a separate canvas inside the Mapbox's controls container. If your use case does not require interleaving, but you still want to use certain features of mapbox-gl, such as mapbox-gl controls (e.g. ",(0,r.jsx)(a.code,{children:"NavigationControl"}),", ",(0,r.jsx)(a.code,{children:"Popup"}),") or plugins (e.g. ",(0,r.jsx)(a.a,{href:"https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-directions/",children:"navigation directions"}),", ",(0,r.jsx)(a.a,{href:"https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-draw/",children:"mapbox-gl-draw"}),"), then you should use this option."]}),"\n",(0,r.jsxs)(a.p,{children:["This is supported by using ",(0,r.jsx)(a.a,{href:"/docs/api-reference/mapbox/mapbox-overlay",children:"MapboxOverlay"})," with ",(0,r.jsx)(a.code,{children:"interleaved: false"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"reverse-controlled",children:"Reverse Controlled"}),"\n",(0,r.jsxs)(a.p,{children:["The reverse-controlled mode renders deck.gl above the Mapbox container and blocks any interaction to the base map. If your use case does not require interleaving, but you need to implement your own ",(0,r.jsx)(a.a,{href:"/docs/api-reference/core/controller",children:"pointer input handling"}),", have multiple maps or a map that does not fill the whole canvas (with Deck's ",(0,r.jsx)(a.a,{href:"/docs/developer-guide/views#using-multiple-views",children:"multi-view feature"}),"), you need this to allow deck.gl manage the map's size and camera."]}),"\n",(0,r.jsxs)(a.p,{children:["You cannot use mapbox-gl controls and plugins with this option. Instead, use the components from ",(0,r.jsx)(a.code,{children:"@deck.gl/widgets"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(a.h3,{id:"example-interleaved-or-overlaid",children:"Example: interleaved or overlaid"}),"\n",(0,r.jsxs)(a.p,{children:["Both the interleaved and the overlaid options are supported in by the ",(0,r.jsx)(a.a,{href:"/docs/api-reference/mapbox/overview",children:"@deck.gl/mapbox"})," module. This is recommended approach for developers coming from the Mapbox ecosystem, as it can easily switch between interleaved and overlaid rendering, as well as being compatible with other Mapbox controls and plugins."]}),"\n","\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-ts",children:"import {MapboxOverlay} from '@deck.gl/mapbox';\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport mapboxgl from 'mapbox-gl';\nimport 'mapbox-gl/dist/mapbox-gl.css';\n\nconst map = new mapboxgl.Map({\n  container: 'map',\n  style: 'mapbox://styles/mapbox/light-v9',\n  accessToken: '<mapbox_access_token>',\n  center: [0.45, 51.47],\n  zoom: 11\n});\n\nmap.once('load', () => {\n  const deckOverlay = new MapboxOverlay({\n    interleaved: true,\n    layers: [\n      new ScatterplotLayer({\n        id: 'deckgl-circle',\n        data: [\n          {position: [0.45, 51.47]}\n        ],\n        getPosition: d => d.position,\n        getFillColor: [255, 0, 0, 100],\n        getRadius: 1000,\n        beforeId: 'waterway-label' // In interleaved mode render the layer under map labels\n      })\n    ]\n  });\n\n  map.addControl(deckOverlay);\n});\n"})})}),(0,r.jsx)(s.A,{value:"react",label:"React",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-tsx",children:"import React from 'react';\nimport {Map, useControl} from 'react-map-gl';\nimport {MapboxOverlay} from '@deck.gl/mapbox';\nimport {DeckProps} from '@deck.gl/core';\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport 'mapbox-gl/dist/mapbox-gl.css';\n\nfunction DeckGLOverlay(props: DeckProps) {\n  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props));\n  overlay.setProps(props);\n  return null;\n}\n\nfunction App() {\n  const layers: [\n    new ScatterplotLayer({\n      id: 'deckgl-circle',\n      data: [\n        {position: [0.45, 51.47]}\n      ],\n      getPosition: d => d.position,\n      getFillColor: [255, 0, 0, 100],\n      getRadius: 1000,\n      beforeId: 'waterway-label' // In interleaved mode render the layer under map labels\n    })\n  ];\n\n  return (\n    <Map\n      initialViewState={{\n        longitude: 0.45,\n        latitude: 51.47,\n        zoom: 11\n      }}\n      mapStyle=\"mapbox://styles/mapbox/light-v9\"\n      mapboxAccessToken=\"<mapbox_access_token>\"\n    >\n      <DeckGLOverlay layers={layers} interleaved />\n    </Map>\n  );\n}\n"})})})]}),"\n",(0,r.jsxs)(a.p,{children:["You can find full project setups in the ",(0,r.jsx)(a.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/get-started/react/mapbox/",children:"react get-started example"})," and ",(0,r.jsx)(a.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/get-started/pure-js/mapbox/",children:"pure js get-started example"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"example-reverse-controlled",children:"Example: reverse controlled"}),"\n",(0,r.jsxs)(a.p,{children:["The reverse-controlled option is supported by the pre-built scripting bundle, and in React when used with the ",(0,r.jsx)(a.code,{children:"react-map-gl"})," library. There is currently no easy way to do it under Vanilla JS."]}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"scripting",label:"Scripting",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:'<script src="https://unpkg.com/deck.gl@^9.0.0/dist.min.js"><\/script>\n<script src="https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.js"><\/script>\n<link href="https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.css" rel="stylesheet" />\n<script type="text/javascript">\n  const {DeckGL, ScatterplotLayer} = deck;\n\n  mapboxgl.accessToken = \'<mapbox_access_token>\';\n\n  new DeckGL({\n    mapStyle: \'mapbox://styles/mapbox/light-v9\',\n    initialViewState: {\n      longitude: 0.45,\n      latitude: 51.47,\n      zoom: 11\n    },\n    controller: true,\n    layers: [\n      new ScatterplotLayer({\n        id: \'deckgl-circle\',\n        data: [\n          {position: [0.45, 51.47]}\n        ],\n        getPosition: d => d.position,\n        getFillColor: [255, 0, 0, 100],\n        getRadius: 1000\n      })\n    ]\n  });\n<\/script>\n'})})}),(0,r.jsx)(s.A,{value:"react",label:"React",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-tsx",children:"import React from 'react';\nimport {Map} from 'react-map-gl';\nimport DeckGL from '@deck.gl/react';\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport 'mapbox-gl/dist/mapbox-gl.css';\n\nfunction App() {\n  const layers: [\n    new ScatterplotLayer({\n      id: 'deckgl-circle',\n      data: [\n        {position: [0.45, 51.47]}\n      ],\n      getPosition: d => d.position,\n      getFillColor: [255, 0, 0, 100],\n      getRadius: 1000,\n    })\n  ];\n\n  return (\n    <DeckGL\n      initialViewState={{\n        longitude: 0.45,\n        latitude: 51.47,\n        zoom: 11\n      }}\n      controller\n      layers={layers}\n    >\n      <Map\n        mapStyle=\"mapbox://styles/mapbox/light-v9\"\n        mapboxAccessToken=\"<mapbox_access_token>\"\n      />\n    </DeckGL>\n  );\n}\n"})})})]}),"\n",(0,r.jsx)(a.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,r.jsx)(a.h3,{id:"react-map-gl",children:"react-map-gl"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://github.com/visgl/react-map-gl",children:"react-map-gl"})," is a React wrapper around mapbox-gl maintained by the vis.gl community. If you'd like to use deck.gl together with mapbox-gl and React, this library is the recommended companion."]}),"\n",(0,r.jsxs)(a.p,{children:["All the ",(0,r.jsx)(a.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/examples/website",children:"examples on this website"})," are implemented using the React integration."]}),"\n",(0,r.jsxs)(a.p,{children:["When you choose the interleaved or overlaid option, the react-map-gl ",(0,r.jsx)(a.a,{href:"https://visgl.github.io/react-map-gl/docs/api-reference/map",children:"Map"})," React component acts as the root component, and ",(0,r.jsx)(a.a,{href:"../../api-reference/mapbox/mapbox-overlay#example",children:"MapboxOverlay"})," is used with react-map-gl's ",(0,r.jsx)(a.code,{children:"useControl"})," hook."]}),"\n",(0,r.jsxs)(a.p,{children:["When you choose the reverse-controlled option, the ",(0,r.jsx)(a.code,{children:"DeckGL"})," React component acts as the root component, and the react-map-gl ",(0,r.jsx)(a.a,{href:"https://visgl.github.io/react-map-gl/docs/api-reference/map",children:"Map"})," is a child. In this case, ",(0,r.jsx)(a.code,{children:"Map"})," will automatically interpret the deck.gl view state (i.e. latitude, longitude, zoom etc), so that deck.gl layers will render as a synchronized geospatial overlay over the underlying map."]}),"\n",(0,r.jsx)(a.h3,{id:"mapbox-token",children:"Mapbox Token"}),"\n",(0,r.jsxs)(a.p,{children:["To use Mapbox, you will need to register on their website in order to retrieve an ",(0,r.jsx)(a.a,{href:"https://docs.mapbox.com/help/how-mapbox-works/access-tokens/",children:"access token"})," required by the map component, which will be used to identify you and start serving up map tiles. The service will be free until a ",(0,r.jsx)(a.a,{href:"https://www.mapbox.com/pricing/",children:"certain level"})," of traffic is exceeded."]}),"\n",(0,r.jsxs)(a.p,{children:["If you are using mapbox-gl without React, check out ",(0,r.jsx)(a.a,{href:"https://docs.mapbox.com/mapbox-gl-js/api/#accesstoken",children:"Mapbox GL JS API"})," for how to apply the token."]}),"\n",(0,r.jsx)(a.p,{children:"If you are using react-map-gl, there are several ways to provide a token to your app:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Set the ",(0,r.jsx)(a.code,{children:"MapboxAccessToken"})," environment variable. You may need to add additional set up to the bundler (",(0,r.jsx)(a.a,{href:"https://webpack.js.org/plugins/environment-plugin/",children:"example"}),") so that ",(0,r.jsx)(a.code,{children:"process.env.MapboxAccessToken"})," is accessible at runtime."]}),"\n",(0,r.jsxs)(a.li,{children:["Provide it in the URL, e.g ",(0,r.jsx)(a.code,{children:"?access_token=TOKEN"})]}),"\n",(0,r.jsxs)(a.li,{children:["Pass it as a prop to the react-map-gl ",(0,r.jsx)(a.code,{children:"Map"})," component ",(0,r.jsx)(a.code,{children:"<Map mapboxAccessToken={TOKEN} />"})]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"alternatives-to-mapbox-basemap-sevice",children:"Alternatives to Mapbox basemap sevice"}),"\n",(0,r.jsxs)(a.p,{children:["As of v2.0, Mapbox GL JS ",(0,r.jsx)(a.a,{href:"https://github.com/mapbox/mapbox-gl-js/blob/main/CHANGELOG.md#200",children:"went proprietary"})," and requires a Mapbox account to use even if you don't load tiles from the Mapbox server. If you do not wish to use the Mapbox service, you may also consider:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"mapbox-gl v1.13, the last release before the license change. Interleaving is not supported by this version."}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"https://maplibre.org",children:"MapLibre GL JS"}),", a community-supported WebGL map library. maplibre-gl can generally be used as a drop-in replacement of mapbox-gl, with some of its own features and APIs. More information can be found in ",(0,r.jsx)(a.a,{href:"/docs/developer-guide/base-maps/using-with-maplibre",children:"using with MapLibre"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>l});n(96540);var t=n(34164);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function l(e){let{children:a,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:n,children:a})}},11470:(e,a,n)=>{n.d(a,{A:()=>w});var t=n(96540),r=n(34164),o=n(23104),l=n(56347),s=n(205),i=n(57485),c=n(31682),d=n(70679);function p(e){var a,n;return null!=(a=null==(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}function u(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=null!=a?a:function(e){return p(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,i.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace(Object.assign({},r.location,{search:a.toString()}))}),[o,r])]}function x(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,o=u(e),[l,i]=(0,t.useState)((()=>function(e){var a;let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(a=t.find((e=>e.default)))?a:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:o}))),[c,p]=m({queryString:n,groupId:r}),[x,b]=function(e){let{groupId:a}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(a),[r,o]=(0,d.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=null!=c?c:x;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),p(e),b(e)}),[p,b,o]),tabValues:o}}var b=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function f(e){let{className:a,block:n,selectedValue:t,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const a=e.currentTarget,n=i.indexOf(a),r=s[n].value;r!==t&&(c(a),l(r))},p=e=>{var a;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const a=i.indexOf(e.currentTarget)+1;n=null!=(t=i[a])?t:i[0];break}case"ArrowLeft":{var r;const a=i.indexOf(e.currentTarget)-1;n=null!=(r=i[a])?r:i[i.length-1];break}}null==(a=n)||a.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:s.map((e=>{let{value:a,label:n,attributes:o}=e;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>i.push(e),onKeyDown:p,onClick:d},o,{className:(0,r.A)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===a}),children:null!=n?n:a}),a)}))})}function j(e){let{lazy:a,children:n,selectedValue:o}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==o})))})}function y(e){const a=x(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(f,Object.assign({},a,e)),(0,v.jsx)(j,Object.assign({},a,e))]})}function w(e){const a=(0,b.A)();return(0,v.jsx)(y,Object.assign({},e,{children:p(e.children)}),String(a))}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>s});var t=n(96540);const r={},o=t.createContext(r);function l(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);
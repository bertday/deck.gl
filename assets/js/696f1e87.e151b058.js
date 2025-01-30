"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4517],{72406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"developer-guide/using-effects","title":"Using Effects","description":"Effects are part of the render pipeline that affect the visuall of all layers. Deck.gl by default uses a LightingEffect to render its 3D geometries. Other effects can be found in core and extensions modules. Applications may also implement the Effect interface to create custom effects.","source":"@site/../docs/developer-guide/using-effects.md","sourceDirName":"developer-guide","slug":"/developer-guide/using-effects","permalink":"/docs/developer-guide/using-effects","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/using-effects.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Loading Data","permalink":"/docs/developer-guide/loading-data"},"next":{"title":"Performance Optimization","permalink":"/docs/developer-guide/performance"}}');var r=n(74848),i=n(28453),l=n(11470),a=n(19365);const o={},c="Using Effects",d={},h=[{value:"Lighting",id:"lighting",level:2},{value:"Light Settings",id:"light-settings",level:3},{value:"Shadows",id:"shadows",level:4},{value:"Material Settings",id:"material-settings",level:3},{value:"Post-Processing",id:"post-processing",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"using-effects",children:"Using Effects"})}),"\n",(0,r.jsxs)(t.p,{children:["Effects are part of the render pipeline that affect the visuall of all layers. Deck.gl by default uses a ",(0,r.jsx)(t.code,{children:"LightingEffect"})," to render its 3D geometries. Other effects can be found in ",(0,r.jsx)(t.code,{children:"core"})," and ",(0,r.jsx)(t.code,{children:"extensions"})," modules. Applications may also implement the ",(0,r.jsx)(t.code,{children:"Effect"})," interface to create custom effects."]}),"\n",(0,r.jsx)(t.p,{children:"The effect system is part of deck.gl's highly extensible architecture. It allows users to choose from a wide variety of features without adding excessive weight to the bundle size."}),"\n",(0,r.jsx)(t.h2,{id:"lighting",children:"Lighting"}),"\n",(0,r.jsx)(t.p,{children:"A lighting effect is a visual approximation of environment illumination based on simplified models to make rendering appear more realistic."}),"\n",(0,r.jsx)("div",{style:{position:"relative",height:450}}),"\n",(0,r.jsx)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0},children:(0,r.jsx)("iframe",{height:"450",width:"100%",scrolling:"no",title:"deck.gl LightingEffect Demo",src:"https://codepen.io/vis-gl/embed/ZZwrZz/?height=450&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true",children:(0,r.jsxs)(t.p,{children:["See the Pen ",(0,r.jsx)("a",{href:"https://codepen.io/vis-gl/pen/ZZwrZz/",children:"deck.gl LightingEffect Demo"})," by vis.gl\n(",(0,r.jsx)("a",{href:"https://codepen.io/vis-gl",children:"@vis-gl"}),") on ",(0,r.jsx)("a",{href:"https://codepen.io",children:"CodePen"}),"."]})})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Interactive demo of LightingEffect"})}),"\n",(0,r.jsx)(t.h3,{id:"light-settings",children:"Light Settings"}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"/docs/api-reference/core/lighting-effect",children:"LightingEffect"})," can be instantiated with one or more light instances:"]}),"\n","\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import {Deck, AmbientLight, SunLight, LightingEffect} from '@deck.gl/core';\n\n// create an ambient light\nconst ambientLight = new AmbientLight({\n  color: [255, 255, 255],\n  intensity: 1.0\n});\n// create directional light from the sun\nconst directionalLight = new SunLight({\n  timestamp: Date.UTC(2024, 7, 1, 22),\n  color: [255, 255, 255],\n  intensity: 1.0,\n});\n// create lighting effect with light sources\nconst lightingEffect = new LightingEffect({ambientLight, directionalLight});\n\nconst deckInstance = new Deck({\n  initialViewState: {\n    longitude: -122.4,\n    latitude: 37.8,\n    zoom: 11,\n    pitch: 45\n  },\n  controller: true,\n  // Add lighting effect to deck\n  effects: [lightingEffect]\n});\n"})})}),(0,r.jsx)(a.A,{value:"react",label:"React",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import React from 'react';\nimport DeckGL from '@deck.gl/react';\nimport {AmbientLight, SunLight, LightingEffect} from '@deck.gl/core';\n\n// create an ambient light\nconst ambientLight = new AmbientLight({\n  color: [255, 255, 255],\n  intensity: 1.0\n});\n// create directional light from the sun\nconst directionalLight = new SunLight({\n  timestamp: Date.UTC(2024, 7, 1, 22),\n  color: [255, 255, 255],\n  intensity: 1.0,\n});\n// create lighting effect with light sources\nconst lightingEffect = new LightingEffect({ambientLight, directionalLight});\n\nconst INITIAL_VIEW_STATE: MapViewState = {\n  longitude: -122.4,\n  latitude: 27.8,\n  zoom: 11,\n  pitch: 45\n};\n\nfunction App() {\n  return <DeckGL\n    initialViewState={INITIAL_VIEW_STATE}\n    controller\n    effects={[lightingEffect]}\n  />;\n}\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"lights"})," has all the light sources that the lighting effect uses to build the visualization. Users typically specify the following types of light sources:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/api-reference/core/ambient-light",children:"AmbientLight"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/api-reference/core/point-light",children:"PointLight"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/api-reference/core/directional-light",children:"DirectionalLight"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/api-reference/core/camera-light",children:"CameraLight"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/api-reference/core/sun-light",children:"SunLight"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"If no LightingEffect is supplied by the user, a default LightingEffect is used."}),"\n",(0,r.jsx)(t.h4,{id:"shadows",children:"Shadows"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"DirectionalLight"})," and ",(0,r.jsx)(t.code,{children:"SunLight"})," have an experimental option ",(0,r.jsx)(t.code,{children:"_shadow"}),". If enabled, geometries rendered by layers will cast shadows on each other. A layer can opt-out by setting a prop ",(0,r.jsx)(t.code,{children:"shadowEnabled: false"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"material-settings",children:"Material Settings"}),"\n",(0,r.jsxs)(t.p,{children:["Lighting is only applied to 2.5D (e.g. extruded ",(0,r.jsx)(t.code,{children:"HexagonLayer"})," or ",(0,r.jsx)(t.code,{children:"PolygonLayer"}),") or 3D (e.g. ",(0,r.jsx)(t.code,{children:"PointCloudLayer"}),", ",(0,r.jsx)(t.code,{children:"SimpleMeshLayer"}),") layers.\nMost of these layers support a ",(0,r.jsx)(t.code,{children:"material"})," prop that defines how the layer interacts with the global lighting."]}),"\n",(0,r.jsx)(t.p,{children:"A material is a plain JavaScript object with the following fiields:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ambient"})," (number) Between 0-1. Default ",(0,r.jsx)(t.code,{children:"0.35"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"diffuse"})," (number) Between 0-1. Default ",(0,r.jsx)(t.code,{children:"0.6"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"shininess"})," (number) Larger than 0. Default ",(0,r.jsx)(t.code,{children:"32"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"specularColor"})," (number[3]). RGB color, each channel in 0-1 range. Default ",(0,r.jsx)(t.code,{children:"[0.15, 0.15, 0.15]"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Setting a material property to the value ",(0,r.jsx)(t.code,{children:"true"})," will set all properties to their defaults."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"new GeoJsonLayer({\n  id: 'geojson-layer',\n  data: '/path/to/data.geo.json',\n  // lighting only applies to extruded polygons\n  extruded: true,\n  getElevation: f => f.properties.height,\n  material: {\n    ambient: 0.8,\n    specularColor: [0.3, 0.1, 0.2]\n  }\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Some layers, such as ",(0,r.jsx)(t.code,{children:"ScenegraphLayer"})," and ",(0,r.jsx)(t.code,{children:"Tile3DLayer"}),", uses materials defined inside the glTF format. Refer to the documentation of each layer to see what settings are supported."]}),"\n",(0,r.jsx)(t.h2,{id:"post-processing",children:"Post-Processing"}),"\n",(0,r.jsx)(t.p,{children:"The post-processing effect applies screen space pixel manipulation effects to the deck.gl canvas."}),"\n",(0,r.jsx)("div",{style:{position:"relative",height:450}}),"\n",(0,r.jsx)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0},children:(0,r.jsx)("iframe",{height:"450",width:"100%",scrolling:"no",title:"deck.gl PostProcessEffect Demo",src:"https://codepen.io/vis-gl/embed/YbRGvv/?height=450&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true",children:(0,r.jsxs)(t.p,{children:["See the Pen ",(0,r.jsx)("a",{href:"https://codepen.io/vis-gl/pen/YbRGvv/",children:"deck.gl PostProcessEffect Demo"})," by vis.gl\n(",(0,r.jsx)("a",{href:"https://codepen.io/vis-gl",children:"@vis-gl"}),") on ",(0,r.jsx)("a",{href:"https://codepen.io",children:"CodePen"}),"."]})})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Interactive demo of PostProcessEffect"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@luma.gl/shadertools"})," provides a collection of ",(0,r.jsx)(t.a,{href:"https://luma.gl/docs/api-reference/shadertools/shader-passes/image-processing",children:"shader modules"})," that implements some common image processing algorithms. You may also refer to their source code to see how to implement your own."]}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import {brightnessContrast} from '@luma.gl/shadertools';\nimport {Deck, PostProcessEffect} from '@deck.gl/core';\n\nconst postProcessEffect = new PostProcessEffect(brightnessContrast, {\n  brightness: 1.0,\n  contrast: 1.0\n});\n\nconst deckInstance = new Deck({\n  initialViewState: {\n    longitude: -122.4,\n    latitude: 37.8,\n    zoom: 11\n  },\n  controller: true,\n  // add post-processing effect to deck\n  effects: [postProcessEffect]\n});\n"})})}),(0,r.jsx)(a.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import {brightnessContrast, BrightnessContrastProps} from '@luma.gl/shadertools';\nimport {Deck, PostProcessEffect} from '@deck.gl/core';\n\nconst postProcessEffect = new PostProcessEffect(brightnessContrast, {\n  brightness: 1.0,\n  contrast: 1.0\n} as BrightnessContrastProps);\n\nconst deckInstance = new Deck({\n  // ...\n  effects: [postProcessEffect]\n});\n"})})}),(0,r.jsx)(a.A,{value:"react",label:"React",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import React from 'react';\nimport DeckGL from '@deck.gl/react';\nimport {brightnessContrast, BrightnessContrastProps} from '@luma.gl/shadertools';\nimport {PostProcessEffect} from '@deck.gl/core';\n\nconst postProcessEffect = new PostProcessEffect(brightnessContrast, {\n  brightness: 1.0,\n  contrast: 1.0\n} as BrightnessContrastProps);\n\nfunction App() {\n  return <DeckGL\n    // ...\n    effects={[postProcessEffect]}\n  />;\n}\n"})})})]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(96540),r=n(34164),i=n(23104),l=n(56347),a=n(205),o=n(57485),c=n(31682),d=n(70679);function h(e){var t,n;return null!=(t=null==(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}),[i,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=u(e),[l,o]=(0,s.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=s.find((e=>e.default)))?t:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,h]=g({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,i]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),x=(()=>{const e=null!=c?c:p;return f({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);o(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function j(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),r=a[n].value;r!==s&&(c(t),l(r))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const t=o.indexOf(e.currentTarget)+1;n=null!=(s=o[t])?s:o[0];break}case"ArrowLeft":{var r;const t=o.indexOf(e.currentTarget)-1;n=null!=(r=o[t])?r:o[o.length-1];break}}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:h,onClick:d},i,{className:(0,r.A)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t}),children:null!=n?n:t}),t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,Object.assign({},t,e)),(0,b.jsx)(v,Object.assign({},t,e))]})}function w(e){const t=(0,m.A)();return(0,b.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
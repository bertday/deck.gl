"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8111],{55397:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api-reference/core/globe-viewport","title":"GlobeViewport (Experimental)","description":"The GlobeViewport class takes globe view states (latitude, longitude, and zoom), and performs projections between world and screen coordinates. It is a helper class for visualizing the earth as a 3D globe.","source":"@site/../docs/api-reference/core/globe-viewport.md","sourceDirName":"api-reference/core","slug":"/api-reference/core/globe-viewport","permalink":"/docs/api-reference/core/globe-viewport","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/globe-viewport.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Viewport","permalink":"/docs/api-reference/core/viewport"},"next":{"title":"WebMercatorViewport","permalink":"/docs/api-reference/core/web-mercator-viewport"}}');var o=i(74848),t=i(28453);const s={},l="GlobeViewport (Experimental)",c={},d=[{value:"Usage",id:"usage",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>project</code>",id:"project",level:4},{value:"<code>unproject</code>",id:"unproject",level:4},{value:"Source",id:"source",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"globeviewport-experimental",children:"GlobeViewport (Experimental)"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"GlobeViewport"})," class takes globe view states (",(0,o.jsx)(n.code,{children:"latitude"}),", ",(0,o.jsx)(n.code,{children:"longitude"}),", and ",(0,o.jsx)(n.code,{children:"zoom"}),"), and performs projections between world and screen coordinates. It is a helper class for visualizing the earth as a 3D globe."]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"GlobeViewport"})," instance is created under the hood by a ",(0,o.jsx)(n.a,{href:"/docs/api-reference/core/globe-view",children:"GlobeView"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import {_GlobeViewport as GlobeViewport} from '@deck.gl/core';\n\nconst viewport = new GlobeViewport({\n  width: 600,\n  height: 400,\n  longitude: -122.45,\n  latitude: 37.78,\n  zoom: 12\n});\n\nviewport.project([-122.45, 37.78]);\n// [300,200]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"new GlobeViewport({width, height, longitude, latitude, zoom});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Parameters:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"opts"})," (object) - Globe viewport options"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"width"})," (number) - Width of the viewport."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"height"})," (number) - Height of the viewport."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"geospatial arguments:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"latitude"})," (number, optional) - Latitude of the viewport center on map. Default to ",(0,o.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"longitude"})," (number, optional) - Longitude of the viewport center on map. Default to ",(0,o.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"zoom"})," (number, optional) - Map zoom (scale is calculated as ",(0,o.jsx)(n.code,{children:"2^zoom"}),"). Default to ",(0,o.jsx)(n.code,{children:"11"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"altitude"})," (number, optional) - Altitude of camera, 1 unit equals to the height of the viewport. Default to ",(0,o.jsx)(n.code,{children:"1.5"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"projection matrix arguments:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"nearZMultiplier"})," (number, optional) - Scaler for the near plane, 1 unit equals to the height of the viewport. Default to ",(0,o.jsx)(n.code,{children:"0.1"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"farZMultiplier"})," (number, optional) - Scaler for the far plane, 1 unit equals to the distance from the camera to the top edge of the screen. Default to ",(0,o.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Remarks:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"width"})," and ",(0,o.jsx)(n.code,{children:"height"})," are forced to 1 if supplied as 0, to avoid division by zero. This is intended to reduce the burden of apps to check values before instantiating a ",(0,o.jsx)(n.code,{children:"Viewport"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Per cartographic tradition, longitudes and latitudes are specified as degrees."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Inherits all ",(0,o.jsx)(n.a,{href:"/docs/api-reference/core/viewport#methods",children:"Viewport methods"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsxs)(n.p,{children:["Inherits all methods from ",(0,o.jsx)(n.a,{href:"/docs/api-reference/core/viewport",children:"Viewport"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"project",children:(0,o.jsx)(n.code,{children:"project"})}),"\n",(0,o.jsx)(n.p,{children:"Projects world coordinates to pixel coordinates on screen."}),"\n",(0,o.jsx)(n.p,{children:"Parameters:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"coordinates"})," (number[]) - ",(0,o.jsx)(n.code,{children:"[longitude, latitude, altitude]"}),". ",(0,o.jsx)(n.code,{children:"altitude"})," is in meters and default to ",(0,o.jsx)(n.code,{children:"0"})," if not supplied."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"opts"})," (object)","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"topLeft"})," (boolean, optional) - Whether projected coords are top left. Default to ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Returns:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"[x, y]"})," or ",(0,o.jsx)(n.code,{children:"[x, y, z]"})," in pixels coordinates. ",(0,o.jsx)(n.code,{children:"z"})," is pixel depth.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If input is ",(0,o.jsx)(n.code,{children:"[longitude, latitude]"}),": returns ",(0,o.jsx)(n.code,{children:"[x, y]"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If input is ",(0,o.jsx)(n.code,{children:"[longitude, latitude: altitude]"}),": returns ",(0,o.jsx)(n.code,{children:"[x, y, z]"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"unproject",children:(0,o.jsx)(n.code,{children:"unproject"})}),"\n",(0,o.jsx)(n.p,{children:"Unproject pixel coordinates on screen into world coordinates."}),"\n",(0,o.jsx)(n.p,{children:"Parameters:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"pixels"})," (number[]) - ",(0,o.jsx)(n.code,{children:"[x, y, z]"})," in pixel coordinates. Passing a ",(0,o.jsx)(n.code,{children:"z"})," is optional."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"opts"})," (object)","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"topLeft"})," (boolean, optional) - Whether projected coords are top left. Default to ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"targetZ"})," (number, optional) - If pixel depth ",(0,o.jsx)(n.code,{children:"z"})," is not specified in ",(0,o.jsx)(n.code,{children:"pixels"}),", this is used as the elevation plane to unproject onto. Default ",(0,o.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Returns:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"[longitude, latitude]"})," or ",(0,o.jsx)(n.code,{children:"[longitude, latitude, altitude]"})," in world coordinates. ",(0,o.jsx)(n.code,{children:"altitude"})," is in meters.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If input is ",(0,o.jsx)(n.code,{children:"[x, y]"})," without specifying ",(0,o.jsx)(n.code,{children:"opts.targetZ"}),": returns ",(0,o.jsx)(n.code,{children:"[longitude, latitude]"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If input is ",(0,o.jsx)(n.code,{children:"[x, y]"})," with ",(0,o.jsx)(n.code,{children:"opts.targetZ"}),": returns ",(0,o.jsx)(n.code,{children:"[longitude, latitude, targetZ]"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If input is ",(0,o.jsx)(n.code,{children:"[x, y, z]"}),": returns ",(0,o.jsx)(n.code,{children:"[longitude, latitude, altitude]"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"source",children:"Source"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/modules/core/src/viewports/globe-viewport.ts",children:"modules/core/src/viewports/globe-viewport.ts"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(96540);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
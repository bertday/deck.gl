"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[523],{57114:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"developer-guide/building-apps","title":"Building Apps","description":"This article discusses considerations in building and deploying applications that contain deck.gl.","source":"@site/../docs/developer-guide/building-apps.md","sourceDirName":"developer-guide","slug":"/developer-guide/building-apps","permalink":"/docs/developer-guide/building-apps","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/building-apps.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Tips and Tricks","permalink":"/docs/developer-guide/tips-and-tricks"},"next":{"title":"Debugging","permalink":"/docs/developer-guide/debugging"}}');var t=i(74848),d=i(28453);const r={},l="Building Apps",o={},c=[{value:"Package Format",id:"package-format",level:2},{value:"Known issues",id:"known-issues",level:3},{value:"Bundle Size",id:"bundle-size",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"building-apps",children:"Building Apps"})}),"\n",(0,t.jsx)(s.p,{children:"This article discusses considerations in building and deploying applications that contain deck.gl."}),"\n",(0,t.jsx)(s.h2,{id:"package-format",children:"Package Format"}),"\n",(0,t.jsxs)(s.p,{children:["Starting from v9.0, deck.gl is fully ",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/packages.html",children:"ES module"})," compliant with support for both ESM-style ",(0,t.jsx)(s.code,{children:"import"})," and CommonJS-style ",(0,t.jsx)(s.code,{children:"require()"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"When installed from npm, each submodule provides the following entry points:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Entry"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"dist/index.js"})}),(0,t.jsx)(s.td,{children:"ESM (import)"}),(0,t.jsx)(s.td,{children:"Code is only lightly transpiled to target ES2020. Tree-shakable."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"dist/index.cjs"})}),(0,t.jsx)(s.td,{children:"CommonJS (require)"}),(0,t.jsx)(s.td,{children:"Code is bundled without dependencies, and transpiled to target Node16. Not tree-shakable."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"dist.min.js"})}),(0,t.jsx)(s.td,{children:"UMD (script tag)"}),(0,t.jsxs)(s.td,{children:["Code is bundled with dependencies, and transpiled to target ",(0,t.jsx)(s.code,{children:"['chrome110', 'firefox110', 'safari15']"})," then minified."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"dist/dist.dev.js"})}),(0,t.jsx)(s.td,{children:"UMD (script tag)"}),(0,t.jsx)(s.td,{children:"Same as above, but not minified."})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"Although the packages are designed to work with the widest range of use cases, it's going to be much easier if you work with an up-to-date development framework."}),"\n",(0,t.jsx)(s.h3,{id:"known-issues",children:"Known issues"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Some older bundlers may not support the latest syntax featuers (e.g. Webpack 4 does not recognize optional chaining). You need to use a Babel plugin  and tell it to include ",(0,t.jsx)(s.code,{children:"node_modules"})," with ",(0,t.jsx)(s.code,{children:"@babel/preset-ev"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Frameworks such as ",(0,t.jsx)(s.code,{children:"Next.js"})," and ",(0,t.jsx)(s.code,{children:"Gatsby"})," leverage Server Side Rendering to improve page loading performance. For projects that do not use ",(0,t.jsx)(s.code,{children:'type: "module"'})," in their package.json, SSR may fail with an error message ",(0,t.jsx)(s.code,{children:"Error: require() of ES Module 'xxx'"}),". This is because some of deck.gl's upstream dependencies, such as ",(0,t.jsx)(s.code,{children:"d3"}),", have opted to become ESM-only and no longer support ",(0,t.jsx)(s.code,{children:"require()"}),". See ",(0,t.jsx)(s.a,{href:"https://github.com/visgl/deck.gl/issues/7735",children:"possible solutions"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Although enormous efforts have been put into converting the deck.gl and its upstream libraries' code base into TypeScript, some part of the legacy code paths may not meet strict type requirements, such as ",(0,t.jsx)(s.code,{children:"noImplicitAny"})," and ",(0,t.jsx)(s.code,{children:"strictNullChecks"}),". You may need to set ",(0,t.jsx)(s.code,{children:"skipLibCheck: true"})," in your project's ",(0,t.jsx)(s.code,{children:"tsconfig"})," to unblock compilation."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"bundle-size",children:"Bundle Size"}),"\n",(0,t.jsx)(s.p,{children:"deck.gl provides a lot of functionality and the amount of code these libraries contain will unsurprisingly impact the size of your application bundle and your startup load time."}),"\n",(0,t.jsx)(s.p,{children:"deck.gl is designed from the ground up to be highly extensible. Visualization types are supported by different layers; additional layer features can be added by layer extensions; more data formats can be supported by loaders.gl submodules. The core is fairly lean, and each functionality is self-contained, so that applications do not have to bundle things that they don't need. Because modern build tools support tree shaking, most new features added do not have a visible size impact on existing applications."}),"\n",(0,t.jsx)(s.p,{children:"deck.gl maintainers are conscious about how design decisions and code changes impact bundle size. The test harness has a script that evaluates the size of a minified bundle after each build. The following numbers are offered for your reference."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Imports"}),(0,t.jsx)(s.th,{children:"Bundle size"}),(0,t.jsx)(s.th,{children:"Compressed"}),(0,t.jsx)(s.th,{children:"Comments"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Deck + Layer"}),(0,t.jsx)(s.td,{children:"501.2 kb"}),(0,t.jsx)(s.td,{children:"145.3 kb"}),(0,t.jsx)(s.td,{children:"Minimal core; baseline"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DeckGL (React)"}),(0,t.jsx)(s.td,{children:"10.9 kb"}),(0,t.jsx)(s.td,{children:"3.84 kb"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"HexagonLayer"}),(0,t.jsx)(s.td,{children:"39.1 kb"}),(0,t.jsx)(s.td,{children:"11.3 kb"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"GeoJsonLayer"}),(0,t.jsx)(s.td,{children:"97.9 kb"}),(0,t.jsx)(s.td,{children:"27.7 kb"}),(0,t.jsxs)(s.td,{children:["Includes the most commonly used primitive layers:",(0,t.jsx)("br",{})," ScatterplotLayer, IconLayer, TextLayer, PathLayer, PolygonLayer"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MVTLayer"}),(0,t.jsx)(s.td,{children:"180.9 kb"}),(0,t.jsx)(s.td,{children:"52.6 kb"}),(0,t.jsx)(s.td,{children:"GeoJsonLayer + TileLayer + MVT loader"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Tile3DLayer"}),(0,t.jsx)(s.td,{children:"253.9 kb"}),(0,t.jsx)(s.td,{children:"75.1 kb"}),(0,t.jsx)(s.td,{children:"ScenegraphLayer + SimpleMeshLayer + GLTF loader + 3D tiles loader"})]})]})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Numbers measured using v9.0.1"}),"\n",(0,t.jsx)(s.li,{children:"Bundled and minified by esbuild targeting evergreen browsers."}),"\n",(0,t.jsx)(s.li,{children:"All rows after the first are incremental impact on top of the minimal core"}),"\n",(0,t.jsxs)(s.li,{children:["Compressed bundle sizes are calculated using ",(0,t.jsx)(s.code,{children:"gzip -9"}),". Consider using slower ",(0,t.jsx)(s.code,{children:"brotli"})," compression for static assets, it typically provides an additional 20% reduction."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>l});var n=i(96540);const t={},d=n.createContext(t);function r(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);
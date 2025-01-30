"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1524],{3158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"api-reference/core/transition-interpolator","title":"TransitionInterpolator","description":"Base interpolator class that provides common functionality required to interpolate between two View States. This class is not intended to be used directly. See View State Transitions for backgrounds.","source":"@site/../docs/api-reference/core/transition-interpolator.md","sourceDirName":"api-reference/core","slug":"/api-reference/core/transition-interpolator","permalink":"/docs/api-reference/core/transition-interpolator","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/transition-interpolator.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"FlyToInterpolator","permalink":"/docs/api-reference/core/fly-to-interpolator"},"next":{"title":"LightingEffect","permalink":"/docs/api-reference/core/lighting-effect"}}');var r=n(74848),s=n(28453);const o={},a="TransitionInterpolator",l={},d=[{value:"Example",id:"example",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Interface",id:"interface",level:2},{value:"<code>getDuration</code>",id:"getduration",level:4},{value:"<code>initializeProps</code>",id:"initializeprops",level:4},{value:"<code>interpolateProps</code>",id:"interpolateprops",level:4},{value:"Source",id:"source",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"transitioninterpolator",children:"TransitionInterpolator"})}),"\n",(0,r.jsxs)(t.p,{children:["Base interpolator class that provides common functionality required to interpolate between two ",(0,r.jsx)(t.a,{href:"/docs/developer-guide/views",children:"View States"}),". This class is not intended to be used directly. See ",(0,r.jsx)(t.a,{href:"/docs/developer-guide/animations-and-transitions#camera-transitions",children:"View State Transitions"})," for backgrounds."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import {TransitionInterpolator} from '@deck.gl/core';\n\n// Interpolate between two values\nfunction lerp(from, to, t) {\n  return from + (to - from) * t;\n}\n\n/*\n * This interpolator moves the camera along a straight path on the Web Mercator map\n * Horizontally it moves in the direction that is shorter\n */\nclass SphericalLinearInterpolator extends TransitionInterpolator {\n  constructor({speed = 100} = {}) {\n    super(['longitude', 'latitude']);\n\n    // degrees per second\n    this.speed = speed;\n  }\n\n  getDuration(startViewState, endViewState) {\n    const deltaLat = Math.abs(startViewState.latitude - endViewState.latitude);\n    let deltaLng = Math.abs(startViewState.longitude - endViewState.longitude);\n    // Transition to the destination longitude along the smaller half of the circle\n    if (deltaLng > 180) deltaLng = 360 - deltaLng;\n    return Math.max(deltaLng, deltaLat) / this.speed * 1000;\n  }\n\n  initializeProps(startViewState, endViewState) {\n    const fromLng = startViewState.longitude;\n    let toLng = endViewState.longitude;\n    // Transition to the destination longitude along the smaller half of the latitude circle\n    if (toLng > fromLng + 180) toLng -= 360;\n    if (toLng < fromLng - 180) toLng += 360;\n\n    return {\n      start: {longitude: fromLng, latitude: startViewState.latitude},\n      end: {longitude: toLng, latitude: endViewState.latitude}\n    };\n  }\n\n  interpolateProps(start, end, t) {\n    const latitude = lerp(start.latitude, end.latitude, t);\n    let longitude = lerp(start.longitude, end.longitude, t);\n    // Put longitude back into the [-180, 180] range\n    if (longitude > 180) longitude -= 360;\n    if (longitude < -180) longitude += 360;\n\n    return {longitude, latitude};\n  }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"constructor",children:"Constructor"}),"\n",(0,r.jsx)(t.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"opts"})," (object | string[])","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If an object is provided, it should contain the following fields:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"compare"})," (string[]) - prop names used in equality check. Transition is triggered if some of the ",(0,r.jsx)(t.code,{children:"compare"})," props are not deeply equal."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"extract"})," (string[]) - prop names needed for interpolation. See ",(0,r.jsx)(t.code,{children:"initializeProps"})," below."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"required"})," (string[]) - prop names that must be supplied. See ",(0,r.jsx)(t.code,{children:"initializeProps"})," below."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"If an array is provided, the same list of prop names is used for all three above."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.h4,{id:"getduration",children:(0,r.jsx)(t.code,{children:"getDuration"})}),"\n",(0,r.jsxs)(t.p,{children:["This method can be optionally implemented by a subclass. If implemented, the user can specify ",(0,r.jsx)(t.code,{children:"transitionDuration: 'auto'"})," when using this interpolator, and the duration will be dynamically computed using this method."]}),"\n",(0,r.jsx)(t.p,{children:"Receives the following arguments:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"startViewState"})," (object) - the view state that is transitioning from."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"endViewState"})," (object) - the view state that is transitioning to."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Returns:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A number in milliseconds representing the target duration of the transition. If ",(0,r.jsx)(t.code,{children:"0"}),", transition is disabled."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"initializeprops",children:(0,r.jsx)(t.code,{children:"initializeProps"})}),"\n",(0,r.jsxs)(t.p,{children:["Called when a transition is about to be triggered. This can be used to preprocess values for use in every transition frame by ",(0,r.jsx)(t.code,{children:"interpolateProps"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Receives the following arguments:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"startViewState"})," (object) - the view state that is transitioning from."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"endViewState"})," (object) - the view state that is transitioning to."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Returns:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["An object in the shape of ",(0,r.jsx)(t.code,{children:"{start, end}"})," that will be passed to ",(0,r.jsx)(t.code,{children:"interpolateProps"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The default implementation takes all values of the ",(0,r.jsx)(t.code,{children:"extract"})," prop names from the start and end view states."]}),"\n",(0,r.jsxs)(t.p,{children:["If some ",(0,r.jsx)(t.code,{children:"required"})," prop names are missing from the view state, an error will be thrown."]}),"\n",(0,r.jsx)(t.h4,{id:"interpolateprops",children:(0,r.jsx)(t.code,{children:"interpolateProps"})}),"\n",(0,r.jsx)(t.p,{children:"This method must be implemented by a subclasses."}),"\n",(0,r.jsx)(t.p,{children:"Receives the following arguments:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"start"})," (object) - descriptor of the state that is transitioning from, generated by ",(0,r.jsx)(t.code,{children:"initializeProps"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"end"})," (object) - descriptor of the state that is transitioning to, generated by ",(0,r.jsx)(t.code,{children:"initializeProps"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"t"})," (number) - current time into the transition, between ",(0,r.jsx)(t.code,{children:"0"})," and ",(0,r.jsx)(t.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Returns:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"An object that contains the interpolated view state fields."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"source",children:"Source"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/visgl/deck.gl/tree/9.1-release/modules/core/src/transitions/transition-interpolator.ts",children:"modules/core/src/transitions/transition-interpolator.ts"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
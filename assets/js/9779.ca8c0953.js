"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9779],{25337:(t,e,i)=>{i.d(e,{V:()=>r});var n=i(4500);class r{id;topology;vertexCount;indices;attributes;userData={};constructor(t){const{attributes:e={},indices:i=null,vertexCount:r=null}=t;this.id=t.id||(0,n.L)("geometry"),this.topology=t.topology,i&&(this.indices=ArrayBuffer.isView(i)?{value:i,size:1}:i),this.attributes={};for(const[n,s]of Object.entries(e)){const t=ArrayBuffer.isView(s)?{value:s}:s;if(!ArrayBuffer.isView(t.value))throw new Error(`${this._print(n)}: must be typed array or object with value as typed array`);if("POSITION"!==n&&"positions"!==n||t.size||(t.size=3),"indices"===n){if(this.indices)throw new Error("Multiple indices detected");this.indices=t}else this.attributes[n]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,e){return this}_calculateVertexCount(t,e){if(e)return e.value.length;let i=1/0;for(const n of Object.values(t)){const{value:t,size:e,constant:r}=n;!r&&t&&void 0!==e&&e>=1&&(i=Math.min(i,t.length/e))}return i}}},49042:(t,e,i)=>{i.d(e,{q:()=>n});const n={props:{},uniforms:{},name:"picking",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:"uniform pickingUniforms {\n  float isActive;\n  float isAttribute;\n  float isHighlightActive;\n  float useFloatColors;\n  vec3 highlightedObjectColor;\n  vec4 highlightColor;\n} picking;\n\nout vec4 picking_vRGBcolor_Avalid;\n\n// Normalize unsigned byte color to 0-1 range\nvec3 picking_normalizeColor(vec3 color) {\n  return picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\n\n// Normalize unsigned byte color to 0-1 range\nvec4 picking_normalizeColor(vec4 color) {\n  return picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\n\nbool picking_isColorZero(vec3 color) {\n  return dot(color, vec3(1.0)) < 0.00001;\n}\n\nbool picking_isColorValid(vec3 color) {\n  return dot(color, vec3(1.0)) > 0.00001;\n}\n\n// Check if this vertex is highlighted \nbool isVertexHighlighted(vec3 vertexColor) {\n  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);\n  return\n    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));\n}\n\n// Set the current picking color\nvoid picking_setPickingColor(vec3 pickingColor) {\n  pickingColor = picking_normalizeColor(pickingColor);\n\n  if (bool(picking.isActive)) {\n    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable\n    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));\n\n    if (!bool(picking.isAttribute)) {\n      // Stores the picking color so that the fragment shader can render it during picking\n      picking_vRGBcolor_Avalid.rgb = pickingColor;\n    }\n  } else {\n    // Do the comparison with selected item color in vertex shader as it should mean fewer compares\n    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));\n  }\n}\n\nvoid picking_setPickingAttribute(float value) {\n  if (bool(picking.isAttribute)) {\n    picking_vRGBcolor_Avalid.r = value;\n  }\n}\n\nvoid picking_setPickingAttribute(vec2 value) {\n  if (bool(picking.isAttribute)) {\n    picking_vRGBcolor_Avalid.rg = value;\n  }\n}\n\nvoid picking_setPickingAttribute(vec3 value) {\n  if (bool(picking.isAttribute)) {\n    picking_vRGBcolor_Avalid.rgb = value;\n  }\n}\n",fs:"uniform pickingUniforms {\n  float isActive;\n  float isAttribute;\n  float isHighlightActive;\n  float useFloatColors;\n  vec3 highlightedObjectColor;\n  vec4 highlightColor;\n} picking;\n\nin vec4 picking_vRGBcolor_Avalid;\n\n/*\n * Returns highlight color if this item is selected.\n */\nvec4 picking_filterHighlightColor(vec4 color) {\n  // If we are still picking, we don't highlight\n  if (picking.isActive > 0.5) {\n    return color;\n  }\n\n  bool selected = bool(picking_vRGBcolor_Avalid.a);\n\n  if (selected) {\n    // Blend in highlight color based on its alpha value\n    float highLightAlpha = picking.highlightColor.a;\n    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);\n    float highLightRatio = highLightAlpha / blendedAlpha;\n\n    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);\n    return vec4(blendedRGB, blendedAlpha);\n  } else {\n    return color;\n  }\n}\n\n/*\n * Returns picking color if picking enabled else unmodified argument.\n */\nvec4 picking_filterPickingColor(vec4 color) {\n  if (bool(picking.isActive)) {\n    if (picking_vRGBcolor_Avalid.a == 0.0) {\n      discard;\n    }\n    return picking_vRGBcolor_Avalid;\n  }\n  return color;\n}\n\n/*\n * Returns picking color if picking is enabled if not\n * highlight color if this item is selected, otherwise unmodified argument.\n */\nvec4 picking_filterColor(vec4 color) {\n  vec4 highlightColor = picking_filterHighlightColor(color);\n  return picking_filterPickingColor(highlightColor);\n}\n",getUniforms:function(t={},e){const i={};if(void 0===t.highlightedObjectColor);else if(null===t.highlightedObjectColor)i.isHighlightActive=!1;else{i.isHighlightActive=!0;const e=t.highlightedObjectColor.slice(0,3);i.highlightedObjectColor=e}if(t.highlightColor){const e=Array.from(t.highlightColor,(t=>t/255));Number.isFinite(e[3])||(e[3]=1),i.highlightColor=e}void 0!==t.isActive&&(i.isActive=Boolean(t.isActive),i.isAttribute=Boolean(t.isAttribute));void 0!==t.useFloatColors&&(i.useFloatColors=Boolean(t.useFloatColors));return i}}},28453:(t,e,i)=>{i.d(e,{R:()=>o,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function o(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),n.createElement(s.Provider,{value:e},t.children)}},92269:(t,e,i)=>{i.d(e,{A:()=>c,C:()=>u});var n=i(6946),r=i(3081),s=i(99065),o=i(1631),a=i(47235);var h=i(2199);function p(t,e,i,r){var s,p=(0,n.sG)(t,e,i);switch((r=(0,o.A)(null==r?",f":r)).type){case"s":var u=Math.max(Math.abs(t),Math.abs(e));return null!=r.precision||isNaN(s=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,a.A)(e)/3)))-(0,a.A)(Math.abs(t)))}(p,u))||(r.precision=s),(0,h.s)(r,u);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(s=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,(0,a.A)(e)-(0,a.A)(t))+1}(p,Math.max(Math.abs(t),Math.abs(e))))||(r.precision=s-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(s=function(t){return Math.max(0,-(0,a.A)(Math.abs(t)))}(p))||(r.precision=s-2*("%"===r.type))}return(0,h.GP)(r)}function u(t){var e=t.domain;return t.ticks=function(t){var i=e();return(0,n.Ay)(i[0],i[i.length-1],null==t?10:t)},t.tickFormat=function(t,i){var n=e();return p(n[0],n[n.length-1],null==t?10:t,i)},t.nice=function(i){null==i&&(i=10);var r,s,o=e(),a=0,h=o.length-1,p=o[a],u=o[h],c=10;for(u<p&&(s=p,p=u,u=s,s=a,a=h,h=s);c-- >0;){if((s=(0,n.lq)(p,u,i))===r)return o[a]=p,o[h]=u,e(o);if(s>0)p=Math.floor(p/s)*s,u=Math.ceil(u/s)*s;else{if(!(s<0))break;p=Math.ceil(p*s)/s,u=Math.floor(u*s)/s}r=s}return t},t}function c(){var t=(0,r.Ay)();return t.copy=function(){return(0,r.C)(t,c())},s.C.apply(t,arguments),u(t)}},62016:(t,e,i)=>{i.d(e,{iX:()=>qt});var n="INUMBER",r="IOP1",s="IOP2",o="IOP3",a="IVAR",h="IVARNAME",p="IFUNCALL",u="IFUNDEF",c="IEXPR",l="IEXPREVAL",f="IMEMBER",v="IENDSTATEMENT",g="IARRAY";function d(t,e){this.type=t,this.value=null!=e?e:0}function y(t){return new d(r,t)}function x(t){return new d(s,t)}function b(t){return new d(o,t)}function k(t,e,i,p,u){for(var l,v,y,x,b=[],A=[],w=0;w<t.length;w++){var m=t[w],M=m.type;if(M===n||M===h)Array.isArray(m.value)?b.push.apply(b,k(m.value.map((function(t){return new d(n,t)})).concat(new d(g,m.value.length)),e,i,p,u)):b.push(m);else if(M===a&&u.hasOwnProperty(m.value))m=new d(n,u[m.value]),b.push(m);else if(M===s&&b.length>1)v=b.pop(),l=b.pop(),x=i[m.value],m=new d(n,x(l.value,v.value)),b.push(m);else if(M===o&&b.length>2)y=b.pop(),v=b.pop(),l=b.pop(),"?"===m.value?b.push(l.value?v.value:y.value):(x=p[m.value],m=new d(n,x(l.value,v.value,y.value)),b.push(m));else if(M===r&&b.length>0)l=b.pop(),x=e[m.value],m=new d(n,x(l.value)),b.push(m);else if(M===c){for(;b.length>0;)A.push(b.shift());A.push(new d(c,k(m.value,e,i,p,u)))}else if(M===f&&b.length>0)l=b.pop(),b.push(new d(n,l.value[m.value]));else{for(;b.length>0;)A.push(b.shift());A.push(m)}}for(;b.length>0;)A.push(b.shift());return A}function A(t,e,i){for(var n=[],h=0;h<t.length;h++){var p=t[h],u=p.type;if(u===a&&p.value===e)for(var l=0;l<i.tokens.length;l++){var f,v=i.tokens[l];f=v.type===r?y(v.value):v.type===s?x(v.value):v.type===o?b(v.value):new d(v.type,v.value),n.push(f)}else u===c?n.push(new d(c,A(p.value,e,i))):n.push(p)}return n}function w(t,e,i){var d,y,x,b,k,A,E=[];if(M(t))return C(t,i);for(var O=t.length,T=0;T<O;T++){var _=t[T],N=_.type;if(N===n||N===h)E.push(_.value);else if(N===s)y=E.pop(),d=E.pop(),"and"===_.value?E.push(!!d&&!!w(y,e,i)):"or"===_.value?E.push(!!d||!!w(y,e,i)):"="===_.value?(b=e.binaryOps[_.value],E.push(b(d,w(y,e,i),i))):(b=e.binaryOps[_.value],E.push(b(C(d,i),C(y,i))));else if(N===o)x=E.pop(),y=E.pop(),d=E.pop(),"?"===_.value?E.push(w(d?y:x,e,i)):(b=e.ternaryOps[_.value],E.push(b(C(d,i),C(y,i),C(x,i))));else if(N===a)if(_.value in e.functions)E.push(e.functions[_.value]);else if(_.value in e.unaryOps&&e.parser.isOperatorEnabled(_.value))E.push(e.unaryOps[_.value]);else{var I=i[_.value];if(void 0===I)throw new Error("undefined variable: "+_.value);E.push(I)}else if(N===r)d=E.pop(),b=e.unaryOps[_.value],E.push(b(C(d,i)));else if(N===p){for(A=_.value,k=[];A-- >0;)k.unshift(C(E.pop(),i));if(!(b=E.pop()).apply||!b.call)throw new Error(b+" is not a function");E.push(b.apply(void 0,k))}else if(N===u)E.push(function(){for(var t=E.pop(),n=[],r=_.value;r-- >0;)n.unshift(E.pop());var s=E.pop(),o=function(){for(var r=Object.assign({},i),s=0,o=n.length;s<o;s++)r[n[s]]=arguments[s];return w(t,e,r)};return Object.defineProperty(o,"name",{value:s,writable:!1}),i[s]=o,o}());else if(N===c)E.push(m(_,e));else if(N===l)E.push(_);else if(N===f)d=E.pop(),E.push(d[_.value]);else if(N===v)E.pop();else{if(N!==g)throw new Error("invalid Expression");for(A=_.value,k=[];A-- >0;)k.unshift(E.pop());E.push(k)}}if(E.length>1)throw new Error("invalid Expression (parity)");return 0===E[0]?0:C(E[0],i)}function m(t,e,i){return M(t)?t:{type:l,value:function(i){return w(t.value,e,i)}}}function M(t){return t&&t.type===l}function C(t,e){return M(t)?t.value(e):t}function E(t,e){for(var i,l,d,y,x,b,k=[],A=0;A<t.length;A++){var w=t[A],m=w.type;if(m===n)"number"==typeof w.value&&w.value<0?k.push("("+w.value+")"):Array.isArray(w.value)?k.push("["+w.value.map(O).join(", ")+"]"):k.push(O(w.value));else if(m===s)l=k.pop(),i=k.pop(),y=w.value,e?"^"===y?k.push("Math.pow("+i+", "+l+")"):"and"===y?k.push("(!!"+i+" && !!"+l+")"):"or"===y?k.push("(!!"+i+" || !!"+l+")"):"||"===y?k.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+i+"),("+l+")))"):"=="===y?k.push("("+i+" === "+l+")"):"!="===y?k.push("("+i+" !== "+l+")"):"["===y?k.push(i+"[("+l+") | 0]"):k.push("("+i+" "+y+" "+l+")"):"["===y?k.push(i+"["+l+"]"):k.push("("+i+" "+y+" "+l+")");else if(m===o){if(d=k.pop(),l=k.pop(),i=k.pop(),"?"!==(y=w.value))throw new Error("invalid Expression");k.push("("+i+" ? "+l+" : "+d+")")}else if(m===a||m===h)k.push(w.value);else if(m===r)i=k.pop(),"-"===(y=w.value)||"+"===y?k.push("("+y+i+")"):e?"not"===y?k.push("(!"+i+")"):"!"===y?k.push("fac("+i+")"):k.push(y+"("+i+")"):"!"===y?k.push("("+i+"!)"):k.push("("+y+" "+i+")");else if(m===p){for(b=w.value,x=[];b-- >0;)x.unshift(k.pop());y=k.pop(),k.push(y+"("+x.join(", ")+")")}else if(m===u){for(l=k.pop(),b=w.value,x=[];b-- >0;)x.unshift(k.pop());i=k.pop(),e?k.push("("+i+" = function("+x.join(", ")+") { return "+l+" })"):k.push("("+i+"("+x.join(", ")+") = "+l+")")}else if(m===f)i=k.pop(),k.push(i+"."+w.value);else if(m===g){for(b=w.value,x=[];b-- >0;)x.unshift(k.pop());k.push("["+x.join(", ")+"]")}else if(m===c)k.push("("+E(w.value,e)+")");else if(m!==v)throw new Error("invalid Expression")}return k.length>1&&(k=e?[k.join(",")]:[k.join(";")]),String(k[0])}function O(t){return"string"==typeof t?JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):t}function T(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return!0;return!1}function _(t,e,i){for(var n=!!(i=i||{}).withMembers,r=null,s=0;s<t.length;s++){var o=t[s];o.type===a||o.type===h?n||T(e,o.value)?null!==r?(T(e,r)||e.push(r),r=o.value):r=o.value:e.push(o.value):o.type===f&&n&&null!==r?r+="."+o.value:o.type===c?_(o.value,e,i):null!==r&&(T(e,r)||e.push(r),r=null)}null===r||T(e,r)||e.push(r)}function N(t,e){this.tokens=t,this.parser=e,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.functions=e.functions}d.prototype.toString=function(){switch(this.type){case n:case r:case s:case o:case a:case h:case v:return this.value;case p:return"CALL "+this.value;case u:return"DEF "+this.value;case g:return"ARRAY "+this.value;case f:return"."+this.value;default:return"Invalid Instruction"}},N.prototype.simplify=function(t){return t=t||{},new N(k(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,t),this.parser)},N.prototype.substitute=function(t,e){return e instanceof N||(e=this.parser.parse(String(e))),new N(A(this.tokens,t,e),this.parser)},N.prototype.evaluate=function(t){return t=t||{},w(this.tokens,this,t)},N.prototype.toString=function(){return E(this.tokens,!1)},N.prototype.symbols=function(t){t=t||{};var e=[];return _(this.tokens,e,t),e},N.prototype.variables=function(t){t=t||{};var e=[];_(this.tokens,e,t);var i=this.functions;return e.filter((function(t){return!(t in i)}))},N.prototype.toJSFunction=function(t,e){var i=this,n=new Function(t,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+E(this.simplify(e).tokens,!0)+"; }");return function(){return n.apply(i,arguments)}};var I="TEOF",R="TOP",S="TNUMBER",F="TSTRING",P="TPAREN",j="TBRACKET",B="TCOMMA",L="TNAME",G="TSEMICOLON";function V(t,e,i){this.type=t,this.value=e,this.index=i}function U(t,e){this.pos=0,this.current=null,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.consts=t.consts,this.expression=e,this.savedPosition=0,this.savedCurrent=null,this.options=t.options,this.parser=t}V.prototype.toString=function(){return this.type+": "+this.value},U.prototype.newToken=function(t,e,i){return new V(t,e,null!=i?i:this.pos)},U.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current},U.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent},U.prototype.next=function(){return this.pos>=this.expression.length?this.newToken(I,"EOF"):this.isWhitespace()||this.isComment()?this.next():this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName()?this.current:void this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')},U.prototype.isString=function(){var t=!1,e=this.pos,i=this.expression.charAt(e);if("'"===i||'"'===i)for(var n=this.expression.indexOf(i,e+1);n>=0&&this.pos<this.expression.length;){if(this.pos=n+1,"\\"!==this.expression.charAt(n-1)){var r=this.expression.substring(e+1,n);this.current=this.newToken(F,this.unescape(r),e),t=!0;break}n=this.expression.indexOf(i,n+1)}return t},U.prototype.isParen=function(){var t=this.expression.charAt(this.pos);return("("===t||")"===t)&&(this.current=this.newToken(P,t),this.pos++,!0)},U.prototype.isBracket=function(){var t=this.expression.charAt(this.pos);return!("["!==t&&"]"!==t||!this.isOperatorEnabled("["))&&(this.current=this.newToken(j,t),this.pos++,!0)},U.prototype.isComma=function(){return","===this.expression.charAt(this.pos)&&(this.current=this.newToken(B,","),this.pos++,!0)},U.prototype.isSemicolon=function(){return";"===this.expression.charAt(this.pos)&&(this.current=this.newToken(G,";"),this.pos++,!0)},U.prototype.isConst=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var i=this.expression.charAt(e);if(i.toUpperCase()===i.toLowerCase()&&(e===this.pos||"_"!==i&&"."!==i&&(i<"0"||i>"9")))break}if(e>t){var n=this.expression.substring(t,e);if(n in this.consts)return this.current=this.newToken(S,this.consts[n]),this.pos+=n.length,!0}return!1},U.prototype.isNamedOp=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var i=this.expression.charAt(e);if(i.toUpperCase()===i.toLowerCase()&&(e===this.pos||"_"!==i&&(i<"0"||i>"9")))break}if(e>t){var n=this.expression.substring(t,e);if(this.isOperatorEnabled(n)&&(n in this.binaryOps||n in this.unaryOps||n in this.ternaryOps))return this.current=this.newToken(R,n),this.pos+=n.length,!0}return!1},U.prototype.isName=function(){for(var t=this.pos,e=t,i=!1;e<this.expression.length;e++){var n=this.expression.charAt(e);if(n.toUpperCase()===n.toLowerCase()){if(e===this.pos&&("$"===n||"_"===n)){"_"===n&&(i=!0);continue}if(e===this.pos||!i||"_"!==n&&(n<"0"||n>"9"))break}else i=!0}if(i){var r=this.expression.substring(t,e);return this.current=this.newToken(L,r),this.pos+=r.length,!0}return!1},U.prototype.isWhitespace=function(){for(var t=!1,e=this.expression.charAt(this.pos);!(" "!==e&&"\t"!==e&&"\n"!==e&&"\r"!==e||(t=!0,this.pos++,this.pos>=this.expression.length));)e=this.expression.charAt(this.pos);return t};var q=/^[0-9a-f]{4}$/i;function H(t,e,i){this.parser=t,this.tokens=e,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=!1!==i.allowMemberAccess}U.prototype.unescape=function(t){var e=t.indexOf("\\");if(e<0)return t;for(var i=t.substring(0,e);e>=0;){var n=t.charAt(++e);switch(n){case"'":i+="'";break;case'"':i+='"';break;case"\\":i+="\\";break;case"/":i+="/";break;case"b":i+="\b";break;case"f":i+="\f";break;case"n":i+="\n";break;case"r":i+="\r";break;case"t":i+="\t";break;case"u":var r=t.substring(e+1,e+5);q.test(r)||this.parseError("Illegal escape sequence: \\u"+r),i+=String.fromCharCode(parseInt(r,16)),e+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+n+'"')}++e;var s=t.indexOf("\\",e);i+=t.substring(e,s<0?t.length:s),e=s}return i},U.prototype.isComment=function(){return"/"===this.expression.charAt(this.pos)&&"*"===this.expression.charAt(this.pos+1)&&(this.pos=this.expression.indexOf("*/",this.pos)+2,1===this.pos&&(this.pos=this.expression.length),!0)},U.prototype.isRadixInteger=function(){var t,e,i=this.pos;if(i>=this.expression.length-2||"0"!==this.expression.charAt(i))return!1;if(++i,"x"===this.expression.charAt(i))t=16,e=/^[0-9a-f]$/i,++i;else{if("b"!==this.expression.charAt(i))return!1;t=2,e=/^[01]$/i,++i}for(var n=!1,r=i;i<this.expression.length;){var s=this.expression.charAt(i);if(!e.test(s))break;i++,n=!0}return n&&(this.current=this.newToken(S,parseInt(this.expression.substring(r,i),t)),this.pos=i),n},U.prototype.isNumber=function(){for(var t,e=!1,i=this.pos,n=i,r=i,s=!1,o=!1;i<this.expression.length&&((t=this.expression.charAt(i))>="0"&&t<="9"||!s&&"."===t);)"."===t?s=!0:o=!0,i++,e=o;if(e&&(r=i),"e"===t||"E"===t){i++;for(var a=!0,h=!1;i<this.expression.length;){if(t=this.expression.charAt(i),!a||"+"!==t&&"-"!==t){if(!(t>="0"&&t<="9"))break;h=!0,a=!1}else a=!1;i++}h||(i=r)}return e?(this.current=this.newToken(S,parseFloat(this.expression.substring(n,i))),this.pos=i):this.pos=r,e},U.prototype.isOperator=function(){var t=this.pos,e=this.expression.charAt(this.pos);if("+"===e||"-"===e||"*"===e||"/"===e||"%"===e||"^"===e||"?"===e||":"===e||"."===e)this.current=this.newToken(R,e);else if("\u2219"===e||"\u2022"===e)this.current=this.newToken(R,"*");else if(">"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(R,">="),this.pos++):this.current=this.newToken(R,">");else if("<"===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(R,"<="),this.pos++):this.current=this.newToken(R,"<");else if("|"===e){if("|"!==this.expression.charAt(this.pos+1))return!1;this.current=this.newToken(R,"||"),this.pos++}else if("="===e)"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(R,"=="),this.pos++):this.current=this.newToken(R,e);else{if("!"!==e)return!1;"="===this.expression.charAt(this.pos+1)?(this.current=this.newToken(R,"!="),this.pos++):this.current=this.newToken(R,e)}return this.pos++,!!this.isOperatorEnabled(this.current.value)||(this.pos=t,!1)},U.prototype.isOperatorEnabled=function(t){return this.parser.isOperatorEnabled(t)},U.prototype.getCoordinates=function(){var t,e=0,i=-1;do{e++,t=this.pos-i,i=this.expression.indexOf("\n",i+1)}while(i>=0&&i<this.pos);return{line:e,column:t}},U.prototype.parseError=function(t){var e=this.getCoordinates();throw new Error("parse error ["+e.line+":"+e.column+"]: "+t)},H.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()},H.prototype.tokenMatches=function(t,e){return void 0===e||(Array.isArray(e)?T(e,t.value):"function"==typeof e?e(t):t.value===e)},H.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()},H.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken},H.prototype.accept=function(t,e){return!(this.nextToken.type!==t||!this.tokenMatches(this.nextToken,e))&&(this.next(),!0)},H.prototype.expect=function(t,e){if(!this.accept(t,e)){var i=this.tokens.getCoordinates();throw new Error("parse error ["+i.line+":"+i.column+"]: Expected "+(e||t))}},H.prototype.parseAtom=function(t){var e=this.tokens.unaryOps;if(this.accept(L)||this.accept(R,(function(t){return t.value in e})))t.push(new d(a,this.current.value));else if(this.accept(S))t.push(new d(n,this.current.value));else if(this.accept(F))t.push(new d(n,this.current.value));else if(this.accept(P,"("))this.parseExpression(t),this.expect(P,")");else{if(!this.accept(j,"["))throw new Error("unexpected "+this.nextToken);if(this.accept(j,"]"))t.push(new d(g,0));else{var i=this.parseArrayList(t);t.push(new d(g,i))}}},H.prototype.parseExpression=function(t){var e=[];this.parseUntilEndStatement(t,e)||(this.parseVariableAssignmentExpression(e),this.parseUntilEndStatement(t,e)||this.pushExpression(t,e))},H.prototype.pushExpression=function(t,e){for(var i=0,n=e.length;i<n;i++)t.push(e[i])},H.prototype.parseUntilEndStatement=function(t,e){return!!this.accept(G)&&(!this.nextToken||this.nextToken.type===I||this.nextToken.type===P&&")"===this.nextToken.value||e.push(new d(v)),this.nextToken.type!==I&&this.parseExpression(e),t.push(new d(c,e)),!0)},H.prototype.parseArrayList=function(t){for(var e=0;!this.accept(j,"]");)for(this.parseExpression(t),++e;this.accept(B);)this.parseExpression(t),++e;return e},H.prototype.parseVariableAssignmentExpression=function(t){for(this.parseConditionalExpression(t);this.accept(R,"=");){var e=t.pop(),i=[],n=t.length-1;if(e.type!==p){if(e.type!==a&&e.type!==f)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(i),t.push(new d(h,e.value)),t.push(new d(c,i)),t.push(x("="))}else{if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var r=0,s=e.value+1;r<s;r++){var o=n-r;t[o].type===a&&(t[o]=new d(h,t[o].value))}this.parseVariableAssignmentExpression(i),t.push(new d(c,i)),t.push(new d(u,e.value))}}},H.prototype.parseConditionalExpression=function(t){for(this.parseOrExpression(t);this.accept(R,"?");){var e=[],i=[];this.parseConditionalExpression(e),this.expect(R,":"),this.parseConditionalExpression(i),t.push(new d(c,e)),t.push(new d(c,i)),t.push(b("?"))}},H.prototype.parseOrExpression=function(t){for(this.parseAndExpression(t);this.accept(R,"or");){var e=[];this.parseAndExpression(e),t.push(new d(c,e)),t.push(x("or"))}},H.prototype.parseAndExpression=function(t){for(this.parseComparison(t);this.accept(R,"and");){var e=[];this.parseComparison(e),t.push(new d(c,e)),t.push(x("and"))}};var z=["==","!=","<","<=",">=",">","in"];H.prototype.parseComparison=function(t){for(this.parseAddSub(t);this.accept(R,z);){var e=this.current;this.parseAddSub(t),t.push(x(e.value))}};var $=["+","-","||"];H.prototype.parseAddSub=function(t){for(this.parseTerm(t);this.accept(R,$);){var e=this.current;this.parseTerm(t),t.push(x(e.value))}};var D=["*","/","%"];function X(t,e){return Number(t)+Number(e)}function J(t,e){return t-e}function W(t,e){return t*e}function Y(t,e){return t/e}function Z(t,e){return t%e}function K(t,e){return Array.isArray(t)&&Array.isArray(e)?t.concat(e):""+t+e}function Q(t,e){return t===e}function tt(t,e){return t!==e}function et(t,e){return t>e}function it(t,e){return t<e}function nt(t,e){return t>=e}function rt(t,e){return t<=e}function st(t,e){return Boolean(t&&e)}function ot(t,e){return Boolean(t||e)}function at(t,e){return T(e,t)}function ht(t){return(Math.exp(t)-Math.exp(-t))/2}function pt(t){return(Math.exp(t)+Math.exp(-t))/2}function ut(t){return t===1/0?1:t===-1/0?-1:(Math.exp(t)-Math.exp(-t))/(Math.exp(t)+Math.exp(-t))}function ct(t){return t===-1/0?t:Math.log(t+Math.sqrt(t*t+1))}function lt(t){return Math.log(t+Math.sqrt(t*t-1))}function ft(t){return Math.log((1+t)/(1-t))/2}function vt(t){return Math.log(t)*Math.LOG10E}function gt(t){return-t}function dt(t){return!t}function yt(t){return t<0?Math.ceil(t):Math.floor(t)}function xt(t){return Math.random()*(t||1)}function bt(t){return wt(t+1)}H.prototype.parseTerm=function(t){for(this.parseFactor(t);this.accept(R,D);){var e=this.current;this.parseFactor(t),t.push(x(e.value))}},H.prototype.parseFactor=function(t){var e=this.tokens.unaryOps;if(this.save(),this.accept(R,(function(t){return t.value in e}))){if("-"!==this.current.value&&"+"!==this.current.value){if(this.nextToken.type===P&&"("===this.nextToken.value)return this.restore(),void this.parseExponential(t);if(this.nextToken.type===G||this.nextToken.type===B||this.nextToken.type===I||this.nextToken.type===P&&")"===this.nextToken.value)return this.restore(),void this.parseAtom(t)}var i=this.current;this.parseFactor(t),t.push(y(i.value))}else this.parseExponential(t)},H.prototype.parseExponential=function(t){for(this.parsePostfixExpression(t);this.accept(R,"^");)this.parseFactor(t),t.push(x("^"))},H.prototype.parsePostfixExpression=function(t){for(this.parseFunctionCall(t);this.accept(R,"!");)t.push(y("!"))},H.prototype.parseFunctionCall=function(t){var e=this.tokens.unaryOps;if(this.accept(R,(function(t){return t.value in e}))){var i=this.current;this.parseAtom(t),t.push(y(i.value))}else for(this.parseMemberExpression(t);this.accept(P,"(");)if(this.accept(P,")"))t.push(new d(p,0));else{var n=this.parseArgumentList(t);t.push(new d(p,n))}},H.prototype.parseArgumentList=function(t){for(var e=0;!this.accept(P,")");)for(this.parseExpression(t),++e;this.accept(B);)this.parseExpression(t),++e;return e},H.prototype.parseMemberExpression=function(t){for(this.parseAtom(t);this.accept(R,".")||this.accept(j,"[");){var e=this.current;if("."===e.value){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(L),t.push(new d(f,this.current.value))}else{if("["!==e.value)throw new Error("unexpected symbol: "+e.value);if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(t),this.expect(j,"]"),t.push(x("["))}}};var kt=4.7421875,At=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function wt(t){var e,i;if(function(t){return isFinite(t)&&t===Math.round(t)}(t)){if(t<=0)return isFinite(t)?1/0:NaN;if(t>171)return 1/0;for(var n=t-2,r=t-1;n>1;)r*=n,n--;return 0===r&&(r=1),r}if(t<.5)return Math.PI/(Math.sin(Math.PI*t)*wt(1-t));if(t>=171.35)return 1/0;if(t>85){var s=t*t,o=s*t,a=o*t,h=a*t;return Math.sqrt(2*Math.PI/t)*Math.pow(t/Math.E,t)*(1+1/(12*t)+1/(288*s)-139/(51840*o)-571/(2488320*a)+163879/(209018880*h)+5246819/(75246796800*h*t))}--t,i=At[0];for(var p=1;p<At.length;++p)i+=At[p]/(t+p);return e=t+kt+.5,Math.sqrt(2*Math.PI)*Math.pow(e,t+.5)*Math.exp(-e)*i}function mt(t){return Array.isArray(t)?t.length:String(t).length}function Mt(){for(var t=0,e=0,i=0;i<arguments.length;i++){var n,r=Math.abs(arguments[i]);e<r?(t=t*(n=e/r)*n+1,e=r):t+=r>0?(n=r/e)*n:r}return e===1/0?1/0:e*Math.sqrt(t)}function Ct(t,e,i){return t?e:i}function Et(t,e){return void 0===e||0==+e?Math.round(t):(t=+t,e=-+e,isNaN(t)||"number"!=typeof e||e%1!=0?NaN:(t=t.toString().split("e"),+((t=(t=Math.round(+(t[0]+"e"+(t[1]?+t[1]-e:-e)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+e:e))))}function Ot(t,e,i){return i&&(i[t]=e),e}function Tt(t,e){return t[0|e]}function _t(t){return 1===arguments.length&&Array.isArray(t)?Math.max.apply(Math,t):Math.max.apply(Math,arguments)}function Nt(t){return 1===arguments.length&&Array.isArray(t)?Math.min.apply(Math,t):Math.min.apply(Math,arguments)}function It(t,e){if("function"!=typeof t)throw new Error("First argument to map is not a function");if(!Array.isArray(e))throw new Error("Second argument to map is not an array");return e.map((function(e,i){return t(e,i)}))}function Rt(t,e,i){if("function"!=typeof t)throw new Error("First argument to fold is not a function");if(!Array.isArray(i))throw new Error("Second argument to fold is not an array");return i.reduce((function(e,i,n){return t(e,i,n)}),e)}function St(t,e){if("function"!=typeof t)throw new Error("First argument to filter is not a function");if(!Array.isArray(e))throw new Error("Second argument to filter is not an array");return e.filter((function(e,i){return t(e,i)}))}function Ft(t,e){if(!Array.isArray(e)&&"string"!=typeof e)throw new Error("Second argument to indexOf is not a string or array");return e.indexOf(t)}function Pt(t,e){if(!Array.isArray(e))throw new Error("Second argument to join is not an array");return e.join(t)}function jt(t){return(t>0)-(t<0)||+t}var Bt=1/3;function Lt(t){return t<0?-Math.pow(-t,Bt):Math.pow(t,Bt)}function Gt(t){return Math.exp(t)-1}function Vt(t){return Math.log(1+t)}function Ut(t){return Math.log(t)/Math.LN2}function qt(t){this.options=t||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||ht,cosh:Math.cosh||pt,tanh:Math.tanh||ut,asinh:Math.asinh||ct,acosh:Math.acosh||lt,atanh:Math.atanh||ft,sqrt:Math.sqrt,cbrt:Math.cbrt||Lt,log:Math.log,log2:Math.log2||Ut,ln:Math.log,lg:Math.log10||vt,log10:Math.log10||vt,expm1:Math.expm1||Gt,log1p:Math.log1p||Vt,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||yt,"-":gt,"+":Number,exp:Math.exp,not:dt,length:mt,"!":bt,sign:Math.sign||jt},this.binaryOps={"+":X,"-":J,"*":W,"/":Y,"%":Z,"^":Math.pow,"||":K,"==":Q,"!=":tt,">":et,"<":it,">=":nt,"<=":rt,and:st,or:ot,in:at,"=":Ot,"[":Tt},this.ternaryOps={"?":Ct},this.functions={random:xt,fac:bt,min:Nt,max:_t,hypot:Math.hypot||Mt,pyt:Math.hypot||Mt,pow:Math.pow,atan2:Math.atan2,if:Ct,gamma:wt,roundTo:Et,map:It,fold:Rt,filter:St,indexOf:Ft,join:Pt},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}qt.prototype.parse=function(t){var e=[],i=new H(this,new U(this,t),{allowMemberAccess:this.options.allowMemberAccess});return i.parseExpression(e),i.expect(I,"EOF"),new N(e,this)},qt.prototype.evaluate=function(t,e){return this.parse(t).evaluate(e)};var Ht=new qt;qt.parse=function(t){return Ht.parse(t)},qt.evaluate=function(t,e){return Ht.parse(t).evaluate(e)};var zt={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};qt.prototype.isOperatorEnabled=function(t){var e=function(t){return zt.hasOwnProperty(t)?zt[t]:t}(t),i=this.options.operators||{};return!(e in i)||!!i[e]}}}]);
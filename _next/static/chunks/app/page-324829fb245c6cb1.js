(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4152:function(e,r,t){"use strict";r.NQ=o;var n=t(581);function o(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];if(u.props)return u.props.call(this,r);let[o,l]=(0,n.styleq)(r),i={};return null!=o&&""!==o&&(i.className=o),null!=l&&Object.keys(l).length>0&&(i.style=l),i}let l=e=>`stylex.types.${e} should be compiled away by @stylexjs/babel-plugin`;function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];let[o]=(0,n.styleq)(r);return o}i.props=o,i.create=function(e){if(null!=u.create)return(0,u.create)(e);throw Error("stylex.create should never be called. It should be compiled away.")},i.defineVars=function(e){if(u.defineVars)return u.defineVars(e);throw Error("stylex.defineVars should never be called. It should be compiled away.")},i.createTheme=(e,r)=>{if(u.createTheme)return u.createTheme(e,r);throw Error("stylex.createTheme should never be called. It should be compiled away.")},i.include=e=>{if(u.include)return u.include(e);throw Error("stylex.extends should never be called. It should be compiled away.")},i.keyframes=e=>{if(u.keyframes)return u.keyframes(e);throw Error("stylex.keyframes should never be called")},i.firstThatWorks=function(){if(u.firstThatWorks)return u.firstThatWorks(...arguments);throw Error("stylex.firstThatWorks should never be called.")},i.types={angle:e=>{throw Error(l("angle"))},color:e=>{throw Error(l("color"))},url:e=>{throw Error(l("url"))},image:e=>{throw Error(l("image"))},integer:e=>{throw Error(l("integer"))},lengthPercentage:e=>{throw Error(l("lengthPercentage"))},length:e=>{throw Error(l("length"))},percentage:e=>{throw Error(l("percentage"))},number:e=>{throw Error(l("number"))},resolution:e=>{throw Error(l("resolution"))},time:e=>{throw Error(l("time"))},transformFunction:e=>{throw Error(l("transformFunction"))},transformList:e=>{throw Error(l("transformList"))}};let u={}},128:function(e,r,t){Promise.resolve().then(t.bind(t,7124))},7124:function(e,r,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.r(r),t.d(r,{default:function(){return c}});var o=t(2265),l=t(4152),i={input:{backgroundColor:"x1f0ztbi",color:"xju2f9n",padding:"x119fht0",paddingInline:null,paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,paddingBlock:null,paddingTop:null,paddingBottom:null,$$css:!0},log:{whiteSpace:"x1sdyfia",$$css:!0}},u=t(7437);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach(function(r){!function(e,r,t){var o;o=function(e,r){if("object"!==n(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,r||"default");if("object"!==n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"),(r="symbol"===n(o)?o:String(o))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var c=function(){var e=(0,o.useState)(""),r=e[0],t=e[1],n=(0,o.useState)(""),s=n[0],c=n[1],f=(0,o.useRef)(null),p=function(e){if(!e.repeat){if(t(e.code),f.current.scrollHeight>window.innerHeight){var r=s.lastIndexOf("\n");c(e.code+"\n"+s.slice(0,r))}else c(e.code+"\n"+s);console.log(e.code)}},d=function(e){console.log(e.code)},y=function(){t("")};return(0,u.jsxs)("div",{children:[(0,u.jsx)("input",a(a({},l.NQ(i.input)),{},{value:r,onKeyDown:function(e){p(e)},onKeyUp:function(e){d(e)},onChange:function(){y()}})),(0,u.jsx)("div",a(a({},l.NQ(i.log)),{},{ref:f,children:s}))]})}},8166:function(e,r,t){"use strict";var n=t(2265),o=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,s={},a=null,c=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(c=r.ref),r)l.call(r,n)&&!u.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:c,props:s,_owner:i.current}}r.jsx=s,r.jsxs=s},7437:function(e,r,t){"use strict";e.exports=t(8166)},581:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.styleq=void 0;var t=new WeakMap;function n(e){var r,n,o;return null!=e&&(r=!0===e.disableCache,n=!0===e.disableMix,o=e.transform),function(){for(var e=[],l="",i=null,u=r?null:t,s=Array(arguments.length),a=0;a<arguments.length;a++)s[a]=arguments[a];for(;s.length>0;){var c=s.pop();if(null!=c&&!1!==c){if(Array.isArray(c)){for(var f=0;f<c.length;f++)s.push(c[f]);continue}var p=null!=o?o(c):c;if(p.$$css){var d="";if(null!=u&&u.has(p)){var y=u.get(p);null!=y&&(d=y[0],e.push.apply(e,y[1]),u=y[2])}else{var h=[];for(var b in p){var g=p[b];"$$css"===b||("string"==typeof g||null===g?e.includes(b)||(e.push(b),null!=u&&h.push(b),"string"==typeof g&&(d+=d?" "+g:g)):console.error("styleq: ".concat(b," typeof ").concat(String(g),' is not "string" or "null".')))}if(null!=u){var v=new WeakMap;u.set(p,[d,h,v]),u=v}}d&&(l=l?d+" "+l:d)}else if(n)null==i&&(i={}),i=Object.assign({},p,i);else{var m=null;for(var w in p){var O=p[w];void 0===O||e.includes(w)||(null!=O&&(null==i&&(i={}),null==m&&(m={}),m[w]=O),e.push(w),u=null)}null!=m&&(i=Object.assign(m,i))}}}return[l,i]}}var o=n();r.styleq=o,o.factory=n}},function(e){e.O(0,[971,584,744],function(){return e(e.s=128)}),_N_E=e.O()}]);
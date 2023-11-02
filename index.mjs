// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function o(e,r){if(!t(r))return new TypeError(s("0aD2V,FD",r));if(n(r,"iter")){if(e.iter=r.iter,!i(r.iter))return new TypeError(s("0aD2t,G9","iter",r.iter));if(r.iter>79)return new RangeError(s("0aD4T,GB","iter",r.iter))}return null}function d(t){var n,i,s,m,l,p,u,f;if(n={iter:79},arguments.length&&(m=o(n,t)))throw m;return l=0,p=1,u=0,f=0,e(i={},"next",j),e(i,"return",a),r&&e(i,r,h),i;function j(){return f+=1,s||f>n.iter?{done:!0}:(1===f?u=0:2===f?u=1:(u=l-p,l=p,p=u),{value:u,done:!1})}function a(e){return s=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return d(n)}}export{d as default};
//# sourceMappingURL=index.mjs.map

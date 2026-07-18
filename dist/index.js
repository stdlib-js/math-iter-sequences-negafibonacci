"use strict";var l=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var g=l(function(T,c){
var F=require('@stdlib/assert-is-plain-object/dist'),E=require('@stdlib/assert-has-own-property/dist'),N=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function P(i,r){if(!F(r))return new TypeError(o('0aD2V',r));if(E(r,"iter")){if(i.iter=r.iter,!N(r.iter))return new TypeError(o('0aD2t',"iter",r.iter));if(r.iter>79)return new RangeError(o('0aD4T',"iter",r.iter));}return null}c.exports=P
});var O=l(function(G,p){
var s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=require('@stdlib/symbol-iterator/dist'),j=g(),m=0,q=1;function b(i){var r,e,f,u,v,a,t,n;if(r={iter:79},arguments.length&&(u=j(r,i),u))throw u;return v=m,a=q,t=0,n=0,e={},s(e,"next",h),s(e,"return",w),d&&s(e,d,x),e;function h(){return n+=1,f||n>r.iter?{done:!0}:(n===1?t=m:n===2?t=q:(t=v-a,v=a,a=t),{value:t,done:!1})}function w(y){return f=!0,arguments.length?{value:y,done:!0}:{done:!0}}function x(){return b(r)}}p.exports=b
});var R=O();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

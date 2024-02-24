// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,v,"e"),n=s.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,u,f,l,s,p,g,d,b;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+m(b):m(b)+p)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var P,V=Object.prototype,A=V.toString,F=V.__defineGetter__,N=V.__defineSetter__,C=V.__lookupGetter__,$=V.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var R=P;function B(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=Object.prototype.hasOwnProperty;function L(r,e){return null!=r&&G.call(r,e)}var Z="function"==typeof Symbol?Symbol:void 0;var M="function"==typeof Z&&"symbol"==typeof Z("foo")&&L(Z,"iterator")&&"symbol"==typeof Z.iterator?Symbol.iterator:null;var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var X="function"==typeof Z?Z.toStringTag:"";var Y=W()?function(r){var e,t,n;if(null==r)return D.call(r);t=r[X],e=L(r,X);try{r[X]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[X]=t:delete r[X],n}:function(r){return D.call(r)};var z=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};var q=/./;function H(r){return"boolean"==typeof r}var J=Boolean,K=Boolean.prototype.toString;var Q=W();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function er(r){return H(r)||rr(r)}B(er,"isPrimitive",H),B(er,"isObject",rr);var tr="object"==typeof self?self:null,nr="object"==typeof window?window:null,ir="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},or="object"==typeof ir?ir:null,ar="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!H(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ar)return ar;if(tr)return tr;if(nr)return nr;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),ur=cr.document&&cr.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;function pr(r){return null!==r&&"object"==typeof r}function gr(r){var e,t,n,i;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return pr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(lr,"REGEXP",sr),B(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!z(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var dr="function"==typeof q||"object"==typeof fr||"function"==typeof ur?function(r){return gr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e};function br(r){return"function"===dr(r)}var yr,vr=Object,hr=Object.getPrototypeOf;yr=br(Object.getPrototypeOf)?hr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var wr=yr;var mr=Object.prototype;function jr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!z(r)}(r)&&(e=function(r){return null==r?null:(r=vr(r),wr(r))}(r),!e||!L(r,"constructor")&&L(e,"constructor")&&br(e.constructor)&&"[object Function]"===Y(e.constructor)&&L(e,"isPrototypeOf")&&br(e.isPrototypeOf)&&(e===mr||function(r){var e;for(e in r)if(!L(r,e))return!1;return!0}(r)))}function _r(r){return"number"==typeof r}var Er=Number,Or=Er.prototype.toString;var Sr=W();function xr(r){return"object"==typeof r&&(r instanceof Er||(Sr?function(r){try{return Or.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function Tr(r){return _r(r)||xr(r)}B(Tr,"isPrimitive",_r),B(Tr,"isObject",xr);var kr=Number.POSITIVE_INFINITY,Ir=Er.NEGATIVE_INFINITY,Pr=Math.floor;function Vr(r){return r<kr&&r>Ir&&Pr(e=r)===e;var e}function Ar(r){return _r(r)&&Vr(r)}function Fr(r){return xr(r)&&Vr(r.valueOf())}function Nr(r){return Ar(r)||Fr(r)}function Cr(r){return Ar(r)&&r>=0}function $r(r){return Fr(r)&&r.valueOf()>=0}function Rr(r){return Cr(r)||$r(r)}function Br(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}B(Nr,"isPrimitive",Ar),B(Nr,"isObject",Fr),B(Rr,"isPrimitive",Cr),B(Rr,"isObject",$r);function Gr(r){var e,t,n,i,o,a,c,u;if(e={iter:79},arguments.length&&(i=function(r,e){if(!jr(e))return new TypeError(Br("0aD2V",e));if(L(e,"iter")){if(r.iter=e.iter,!Cr(e.iter))return new TypeError(Br("0aD2t","iter",e.iter));if(e.iter>79)return new RangeError(Br("0aD4T","iter",e.iter))}return null}(e,r),i))throw i;return o=0,a=1,c=0,u=0,B(t={},"next",(function(){if(u+=1,n||u>e.iter)return{done:!0};1===u?c=0:2===u?c=1:(c=o-a,o=a,a=c);return{value:c,done:!1}})),B(t,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),M&&B(t,M,(function(){return Gr(e)})),t}export{Gr as default};
//# sourceMappingURL=mod.js.map

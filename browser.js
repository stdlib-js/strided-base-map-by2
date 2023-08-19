// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mapBy2=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,y,s;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,e,t.get),s&&a&&a.call(r,e,t.set),r};var l=e;function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y="function";function s(r){return typeof r.get===y&&typeof r.set===y}var h={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function p(r){var e=h[r];return"function"==typeof e?e:h.default}var m={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function g(r){var e=m[r];return"function"==typeof e?e:m.default}var b={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function w(r){var e=b[r];return"function"==typeof e?e:b.default}var v={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function d(r){var e=v[r];return"function"==typeof e?e:v.default}var E="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function A(){return E&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var T=Object.prototype.hasOwnProperty;function j(r,e){return null!=r&&T.call(r,e)}var x="function"==typeof Symbol?Symbol.toStringTag:"";var B=A()?function(r){var e,t,n;if(null==r)return _.call(r);t=r[x],e=j(r,x);try{r[x]=void 0}catch(e){return _.call(r)}return n=_.call(r),e?r[x]=t:delete r[x],n}:function(r){return _.call(r)};var L=Array.isArray?Array.isArray:function(r){return"[object Array]"===B(r)};function S(r){return null!==r&&"object"==typeof r}function V(r){return S(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function R(){return/^\s*function\s*([^(]*)/i}c(S,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!L(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(S));var k=/^\s*function\s*([^(]*)/i;function I(r){var e,t,n;if(("Object"===(t=B(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=k.exec(n.toString()))return e[1]}return V(r)?"Buffer":t}c(R,"REGEXP",k);var O={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},C="function"==typeof Float64Array;var M="function"==typeof Float64Array?Float64Array:null;var U="function"==typeof Float64Array?Float64Array:void 0;var N=function(){var r,e,t;if("function"!=typeof M)return!1;try{e=new M([1,3.14,-3.14,NaN]),t=e,r=(C&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")},F="function"==typeof Float32Array;var P=Number.POSITIVE_INFINITY,Y="function"==typeof Float32Array?Float32Array:null;var W="function"==typeof Float32Array?Float32Array:void 0;var G=function(){var r,e,t;if("function"!=typeof Y)return!1;try{e=new Y([1,3.14,-3.14,5e40]),t=e,r=(F&&t instanceof Float32Array||"[object Float32Array]"===B(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===P}catch(e){r=!1}return r}()?W:function(){throw new Error("not implemented")},J="function"==typeof Uint32Array;var X="function"==typeof Uint32Array?Uint32Array:null;var q="function"==typeof Uint32Array?Uint32Array:void 0;var z=function(){var r,e,t;if("function"!=typeof X)return!1;try{e=new X(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(J&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?q:function(){throw new Error("not implemented")},D="function"==typeof Int32Array;var H="function"==typeof Int32Array?Int32Array:null;var K="function"==typeof Int32Array?Int32Array:void 0;var Q=function(){var r,e,t;if("function"!=typeof H)return!1;try{e=new H([1,3.14,-3.14,2147483648]),t=e,r=(D&&t instanceof Int32Array||"[object Int32Array]"===B(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")},Z="function"==typeof Uint16Array;var $="function"==typeof Uint16Array?Uint16Array:null;var rr="function"==typeof Uint16Array?Uint16Array:void 0;var er=function(){var r,e,t;if("function"!=typeof $)return!1;try{e=new $(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Z&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")},tr="function"==typeof Int16Array;var nr="function"==typeof Int16Array?Int16Array:null;var ir="function"==typeof Int16Array?Int16Array:void 0;var or=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr([1,3.14,-3.14,32768]),t=e,r=(tr&&t instanceof Int16Array||"[object Int16Array]"===B(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")},ar="function"==typeof Uint8Array;var ur="function"==typeof Uint8Array?Uint8Array:null;var fr="function"==typeof Uint8Array?Uint8Array:void 0;var lr=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,256,257]),t=e,r=(ar&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")},cr="function"==typeof Uint8ClampedArray;var yr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var sr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var hr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr([-1,0,1,3.14,4.99,255,256]),t=e,r=(cr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===B(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")},pr="function"==typeof Int8Array;var mr="function"==typeof Int8Array?Int8Array:null;var gr="function"==typeof Int8Array?Int8Array:void 0;var br=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr([1,3.14,-3.14,128]),t=e,r=(pr&&t instanceof Int8Array||"[object Int8Array]"===B(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};function wr(r){return"number"==typeof r}var vr=Number,dr=vr.prototype.toString;var Er=A();function Ar(r){return"object"==typeof r&&(r instanceof vr||(Er?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function _r(r){return wr(r)||Ar(r)}c(_r,"isPrimitive",wr),c(_r,"isObject",Ar);var Tr=vr.NEGATIVE_INFINITY,jr=Math.floor;function xr(r){return jr(r)===r}function Br(r){return r<P&&r>Tr&&xr(r)}function Lr(r){return wr(r)&&Br(r)}function Sr(r){return Ar(r)&&Br(r.valueOf())}function Vr(r){return Lr(r)||Sr(r)}function Rr(r){return Lr(r)&&r>=0}function kr(r){return Sr(r)&&r.valueOf()>=0}function Ir(r){return Rr(r)||kr(r)}c(Vr,"isPrimitive",Lr),c(Vr,"isObject",Sr),c(Ir,"isPrimitive",Rr),c(Ir,"isObject",kr);function Or(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&xr(r.length)&&r.length>=0&&r.length<=4294967295}function Cr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&xr(r.length)&&r.length>=0&&r.length<=9007199254740991}var Mr="function"==typeof ArrayBuffer;function Ur(r){return Mr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===B(r)}function Nr(r){return"object"==typeof r&&null!==r&&!L(r)}var Fr=/./;function Pr(r){return"boolean"==typeof r}var Yr=Boolean.prototype.toString;var Wr=A();function Gr(r){return"object"==typeof r&&(r instanceof Boolean||(Wr?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===B(r)))}function Jr(r){return Pr(r)||Gr(r)}function Xr(){return new Function("return this;")()}c(Jr,"isPrimitive",Pr),c(Jr,"isObject",Gr);var qr="object"==typeof self?self:null,zr="object"==typeof window?window:null,Dr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Hr="object"==typeof Dr?Dr:null;var Kr=function(r){if(arguments.length){if(!Pr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Xr()}if(qr)return qr;if(zr)return zr;if(Hr)return Hr;throw new Error("unexpected error. Unable to resolve global object.")}(),Qr=Kr.document&&Kr.document.childNodes,Zr=Int8Array;var $r="function"==typeof Fr||"object"==typeof Zr||"function"==typeof Qr?function(r){return I(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?I(r).toLowerCase():e};function re(r){return"function"===$r(r)}function ee(r,e){if(!(this instanceof ee))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!wr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!wr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}c(ee,"BYTES_PER_ELEMENT",8),c(ee.prototype,"BYTES_PER_ELEMENT",8),c(ee.prototype,"byteLength",16),c(ee.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(ee.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var te="function"==typeof Math.fround?Math.fround:null,ne=new G(1);var ie="function"==typeof te?te:function(r){return ne[0]=r,ne[0]};function oe(r,e){if(!(this instanceof oe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!wr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!wr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ie(r)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ie(e)}),this}function ae(r){return r instanceof ee||r instanceof oe||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function ue(r){return xr(r/2)}function fe(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&j(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(oe,"BYTES_PER_ELEMENT",4),c(oe.prototype,"BYTES_PER_ELEMENT",4),c(oe.prototype,"byteLength",8),c(oe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(oe.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var le=fe()?Symbol.iterator:null;function ce(r,e,t){l(r,e,{configurable:!1,enumerable:!1,get:t})}function ye(r){return r.re}function se(r){return r.im}function he(r,e){return new G(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function pe(r,e){return new N(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function me(r,e){return r[e]}function ge(r,e){return r.get(e)}function be(r,e,t){r[e]=t}function we(r,e,t){r.set(t,e)}function ve(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?ge:me,setter:e?we:be}}function de(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Or(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!ae(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(ye(n),se(n))}return e}function Ee(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Or(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!ae(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(ye(o),se(o))}return n}function Ae(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!ae(n=e[i]))return null;r[o]=ye(n),r[o+1]=se(n),o+=2}return r}var _e=2*G.BYTES_PER_ELEMENT,Te=fe();function je(r){return r instanceof Se||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function xe(r){return r===Se||"Complex128Array"===r.name}function Be(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===_e}function Le(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*_e}function Se(){var r,e,t,n;if(e=arguments.length,!(this instanceof Se))return 0===e?new Se:1===e?new Se(arguments[0]):2===e?new Se(arguments[0],arguments[1]):new Se(arguments[0],arguments[1],arguments[2]);if(0===e)t=new G(0);else if(1===e)if(Rr(arguments[0]))t=new G(2*arguments[0]);else if(Cr(arguments[0]))if((n=(t=arguments[0]).length)&&L(t)&&ae(t[0])){if(null===(t=Ae(new G(2*n),t))){if(!ue(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new G(arguments[0])}}else{if(Be(t))t=he(t,0);else if(Le(t))t=pe(t,0);else if(!ue(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new G(t)}else if(Ur(arguments[0])){if(!xr((t=arguments[0]).byteLength/_e))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+_e+". Byte length: `"+t.byteLength+"`.");t=new G(t)}else{if(!Nr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Te)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!re(t[le]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!re((t=t[le]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=de(t))instanceof Error)throw t;t=new G(t)}else{if(!Ur(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Rr(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!xr(r/_e))throw new RangeError("invalid argument. Byte offset must be a multiple of "+_e+". Value: `"+r+"`.");if(2===e){if(!xr((n=t.byteLength-r)/_e))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+_e+". View byte length: `"+n+"`.");t=new G(t,r)}else{if(!Rr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*_e>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*_e+"`.");t=new G(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function Ve(r){return r.re}function Re(r){return r.im}function ke(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Or(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!ae(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(Ve(n),Re(n))}return e}function Ie(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Or(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!ae(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(Ve(o),Re(o))}return n}function Oe(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!ae(n=e[i]))return null;r[o]=Ve(n),r[o+1]=Re(n),o+=2}return r}c(Se,"BYTES_PER_ELEMENT",_e),c(Se,"name","Complex64Array"),c(Se,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,y;if(!re(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!re(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(je(r)){if(u=r.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(ae(l=n.call(e,r.get(c),c)))o[y]=ye(l),o[y+1]=se(l);else{if(!(Or(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(Cr(r)){if(n){for(u=r.length,a=ve(r),c=0;c<u;c++)if(!ae(a.getter(r,c))){f=!0;break}if(f){if(!ue(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(e,a.getter(r,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(ae(l=n.call(e,a.getter(r,c),c)))o[y]=ye(l),o[y+1]=se(l);else{if(!(Or(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(Nr(r)&&Te&&re(r[le])){if(!re((o=r[le]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Ee(o,n,e):de(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(Se,"of",(function(){var r,e;if(!re(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),ce(Se.prototype,"buffer",(function(){return this._buffer.buffer})),ce(Se.prototype,"byteLength",(function(){return this._buffer.byteLength})),ce(Se.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Se.prototype,"BYTES_PER_ELEMENT",Se.BYTES_PER_ELEMENT),c(Se.prototype,"copyWithin",(function(r,e){if(!je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(Se.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new oe(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),c(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),le&&c(t,le,(function(){return e.entries()})),t})),c(Se.prototype,"get",(function(r){var e;if(!je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Rr(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new oe((e=this._buffer)[r*=2],e[r+1])})),ce(Se.prototype,"length",(function(){return this._length})),c(Se.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Rr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(ae(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ye(r),void(n[t+1]=se(r))}if(je(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*_e,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new G(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Cr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!ae(r[f])){o=!0;break}if(o){if(!ue(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*_e,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new G(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ye(u),n[t+1]=se(u),t+=2}}));var Ce=2*N.BYTES_PER_ELEMENT,Me=fe();function Ue(r){return r instanceof Ye||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Ne(r){return r===Ye||"Complex64Array"===r.name}function Fe(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Ce/2}function Pe(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Ce}function Ye(){var r,e,t,n;if(e=arguments.length,!(this instanceof Ye))return 0===e?new Ye:1===e?new Ye(arguments[0]):2===e?new Ye(arguments[0],arguments[1]):new Ye(arguments[0],arguments[1],arguments[2]);if(0===e)t=new N(0);else if(1===e)if(Rr(arguments[0]))t=new N(2*arguments[0]);else if(Cr(arguments[0]))if((n=(t=arguments[0]).length)&&L(t)&&ae(t[0])){if(null===(t=Oe(new N(2*n),t))){if(!ue(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new N(arguments[0])}}else{if(Fe(t))t=he(t,0);else if(Pe(t))t=pe(t,0);else if(!ue(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new N(t)}else if(Ur(arguments[0])){if(!xr((t=arguments[0]).byteLength/Ce))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Ce+". Byte length: `"+t.byteLength+"`.");t=new N(t)}else{if(!Nr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Me)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!re(t[le]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!re((t=t[le]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ke(t))instanceof Error)throw t;t=new N(t)}else{if(!Ur(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Rr(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!xr(r/Ce))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Ce+". Value: `"+r+"`.");if(2===e){if(!xr((n=t.byteLength-r)/Ce))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Ce+". View byte length: `"+n+"`.");t=new N(t,r)}else{if(!Rr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Ce>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Ce+"`.");t=new N(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Ye,"BYTES_PER_ELEMENT",Ce),c(Ye,"name","Complex128Array"),c(Ye,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,y;if(!re(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ne(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!re(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(Ue(r)){if(u=r.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(ae(l=n.call(e,r.get(c),c)))o[y]=Ve(l),o[y+1]=Re(l);else{if(!(Or(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(Cr(r)){if(n){for(u=r.length,a=ve(r),c=0;c<u;c++)if(!ae(a.getter(r,c))){f=!0;break}if(f){if(!ue(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(e,a.getter(r,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(ae(l=n.call(e,a.getter(r,c),c)))o[y]=Ve(l),o[y+1]=Re(l);else{if(!(Or(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(Nr(r)&&Me&&re(r[le])){if(!re((o=r[le]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Ie(o,n,e):ke(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(Ye,"of",(function(){var r,e;if(!re(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ne(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),ce(Ye.prototype,"buffer",(function(){return this._buffer.buffer})),ce(Ye.prototype,"byteLength",(function(){return this._buffer.byteLength})),ce(Ye.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Ye.prototype,"BYTES_PER_ELEMENT",Ye.BYTES_PER_ELEMENT),c(Ye.prototype,"copyWithin",(function(r,e){if(!Ue(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(Ye.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Ue(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new ee(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),c(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),le&&c(t,le,(function(){return e.entries()})),t})),c(Ye.prototype,"get",(function(r){var e;if(!Ue(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Rr(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new ee((e=this._buffer)[r*=2],e[r+1])})),ce(Ye.prototype,"length",(function(){return this._length})),c(Ye.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Ue(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Rr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(ae(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Ve(r),void(n[t+1]=Re(r))}if(Ue(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Ce,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new N(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Cr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!ae(r[f])){o=!0;break}if(o){if(!ue(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Ce,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new N(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ve(u),n[t+1]=Re(u),t+=2}}));var We=[N,G,Q,z,or,er,br,lr,hr,Se,Ye],Ge=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Je=Ge.length;function Xe(r){var e;if(L(r))return"generic";if(V(r))return null;for(e=0;e<Je;e++)if(r instanceof We[e])return Ge[e];return O[I(r)]||null}function qe(r,e,t,n,i,o,a,u,f,l){var c,y,h;return s(e)&&(c=p(Xe(e))),s(n)&&(y=p(Xe(n))),s(o)&&(h=g(Xe(o))),c||y||h?function(r,e,t,n,i,o,a,u,f,l,c,y,s){var h,p,m,g,b;if(r<=0)return u;for((p=[0,0,0])[0]=t<0?(1-r)*t:0,p[1]=o<0?(1-r)*o:0,p[2]=f<0?(1-r)*f:0,m=[e,i,u],h=[0,0],b=0;b<r;b++)h[0]=n(e,p[0]),h[1]=a(i,p[1]),void 0!==(g=y.call(s,h,b,p,m))&&l(u,p[2],c(g[0],g[1])),p[0]+=t,p[1]+=o,p[2]+=f;return u}(r,e,t,c=c||w(Xe(e)),n,i,y=y||w(Xe(n)),o,a,h=h||d(Xe(o)),u,f,l):function(r,e,t,n,i,o,a,u,f,l){var c,y,s,h,p;if(r<=0)return o;for((y=[0,0,0])[0]=t<0?(1-r)*t:0,y[1]=i<0?(1-r)*i:0,y[2]=a<0?(1-r)*a:0,s=[e,n,o],c=[0,0],p=0;p<r;p++)c[0]=e[y[0]],c[1]=n[y[1]],void 0!==(h=f.call(l,c,p,y,s))&&(o[y[2]]=u(h[0],h[1])),y[0]+=t,y[1]+=i,y[2]+=a;return o}(r,e,t,n,i,o,a,u,f,l)}return c(qe,"ndarray",(function(r,e,t,n,i,o,a,u,f,l,c,y,h){var m,b,v;return s(e)&&(m=p(Xe(e))),s(i)&&(b=p(Xe(i))),s(u)&&(v=g(Xe(u))),m||b||v?function(r,e,t,n,i,o,a,u,f,l,c,y,s,h,p,m){var g,b,w,v,d;if(r<=0)return l;for(b=[n,u,y],w=[e,o,l],g=[0,0],d=0;d<r;d++)g[0]=i(e,b[0]),g[1]=f(o,b[1]),void 0!==(v=p.call(m,g,d,b,w))&&s(l,b[2],h(v[0],v[1])),b[0]+=t,b[1]+=a,b[2]+=c;return l}(r,e,t,n,m=m||w(Xe(e)),i,o,a,b=b||w(Xe(i)),u,f,l,v=v||d(Xe(u)),c,y,h):function(r,e,t,n,i,o,a,u,f,l,c,y,s){var h,p,m,g,b;if(r<=0)return u;for(p=[n,a,l],m=[e,i,u],h=[0,0],b=0;b<r;b++)h[0]=e[p[0]],h[1]=i[p[1]],void 0!==(g=y.call(s,h,b,p,m))&&(u[p[2]]=c(g[0],g[1])),p[0]+=t,p[1]+=o,p[2]+=f;return u}(r,e,t,n,i,o,a,u,f,l,c,y,h)})),qe}));
//# sourceMappingURL=browser.js.map

// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,i=o.__lookupGetter__,u=o.__lookupSetter__;function c(e,r,t,o,n,a,l,i,u,c){var _,f,p,b,d;if(e<=0)return a;for((f=[0,0,0])[0]=t<0?(1-e)*t:0,f[1]=n<0?(1-e)*n:0,f[2]=l<0?(1-e)*l:0,p=[r,o,a],_=[0,0],d=0;d<e;d++)_[0]=r[f[0]],_[1]=o[f[1]],void 0!==(b=u.call(c,_,d,f,p))&&(a[f[2]]=i(b[0],b[1])),f[0]+=t,f[1]+=n,f[2]+=l;return a}function _(e,r,t,o,n,a,l,i,u,c,_,f,p){var b,d,y,v,s;if(e<=0)return i;for(d=[o,l,c],y=[r,n,i],b=[0,0],s=0;s<e;s++)b[0]=r[d[0]],b[1]=n[d[1]],void 0!==(v=f.call(p,b,s,d,y))&&(i[d[2]]=_(v[0],v[1])),d[0]+=t,d[1]+=a,d[2]+=u;return i}r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(e,r)||u.call(e,r)?(c=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&l&&l.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_});export{c as default,_ as ndarray};
//# sourceMappingURL=mod.js.map
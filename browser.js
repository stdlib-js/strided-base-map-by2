// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,l=o.__lookupGetter__,u=o.__lookupSetter__;function c(e,t,r,o,n,a,i,l,u,c){var f,p,_,d,y;if(e<=0)return a;for((p=[0,0,0])[0]=r<0?(1-e)*r:0,p[1]=n<0?(1-e)*n:0,p[2]=i<0?(1-e)*i:0,_=[t,o,a],f=[0,0],y=0;y<e;y++)f[0]=t[p[0]],f[1]=o[p[1]],void 0!==(d=u.call(c,f,y,p,_))&&(a[p[2]]=l(d[0],d[1])),p[0]+=r,p[1]+=n,p[2]+=i;return a}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,_="set"in r,f&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e},e(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,o,n,a,i,l,u,c,f,p,_){var d,y,b,s,v;if(e<=0)return l;for(y=[o,i,c],b=[t,n,l],d=[0,0],v=0;v<e;v++)d[0]=t[y[0]],d[1]=n[y[1]],void 0!==(s=p.call(_,d,v,y,b))&&(l[y[2]]=f(s[0],s[1])),y[0]+=r,y[1]+=a,y[2]+=u;return l}}),c},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).mapBy2=t();
//# sourceMappingURL=browser.js.map

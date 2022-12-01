// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;function f(e,t){return e[t]}function c(e,t){return e.get(t)}function p(e,t,r){e[t]=r}function _(e,t,r){e.set(r,t)}function d(e,t,r,n,o,i,u,a,l,d){var s,v,y;return t.get&&t.set&&(s=c),n.get&&n.set&&(v=c),i.get&&i.set&&(y=_),s||v||y?function(e,t,r,n,o,i,u,a,l,f,c,p,_){var d,s,v,y,b;if(e<=0)return a;for((s=[0,0,0])[0]=r<0?(1-e)*r:0,s[1]=i<0?(1-e)*i:0,s[2]=l<0?(1-e)*l:0,v=[t,o,a],d=[0,0],b=0;b<e;b++)d[0]=n(t,s[0]),d[1]=u(o,s[1]),void 0!==(y=p.call(_,d,b,s,v))&&f(a,s[2],c(y[0],y[1])),s[0]+=r,s[1]+=i,s[2]+=l;return a}(e,t,r,s=s||f,n,o,v=v||f,i,u,y=y||p,a,l,d):function(e,t,r,n,o,i,u,a,l,f){var c,p,_,d,s;if(e<=0)return i;for((p=[0,0,0])[0]=r<0?(1-e)*r:0,p[1]=o<0?(1-e)*o:0,p[2]=u<0?(1-e)*u:0,_=[t,n,i],c=[0,0],s=0;s<e;s++)c[0]=t[p[0]],c[1]=n[p[1]],void 0!==(d=l.call(f,c,s,p,_))&&(i[p[2]]=a(d[0],d[1])),p[0]+=r,p[1]+=o,p[2]+=u;return i}(e,t,r,n,o,i,u,a,l,d)}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),p="get"in r,_="set"in r,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),_&&u&&u.call(e,t,r.set),e},e(d,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n,o,i,u,a,l,d,s,v,y){var b,g,m;return t.get&&t.set&&(b=c),o.get&&o.set&&(g=c),a.get&&a.set&&(m=_),b||g||m?function(e,t,r,n,o,i,u,a,l,f,c,p,_,d,s,v){var y,b,g,m,j;if(e<=0)return f;for(b=[n,a,p],g=[t,i,f],y=[0,0],j=0;j<e;j++)y[0]=o(t,b[0]),y[1]=l(i,b[1]),void 0!==(m=s.call(v,y,j,b,g))&&_(f,b[2],d(m[0],m[1])),b[0]+=r,b[1]+=u,b[2]+=c;return f}(e,t,r,n,b=b||f,o,i,u,g=g||f,a,l,d,m=m||p,s,v,y):function(e,t,r,n,o,i,u,a,l,f,c,p,_){var d,s,v,y,b;if(e<=0)return a;for(s=[n,u,f],v=[t,o,a],d=[0,0],b=0;b<e;b++)d[0]=t[s[0]],d[1]=o[s[1]],void 0!==(y=p.call(_,d,b,s,v))&&(a[s[2]]=c(y[0],y[1])),s[0]+=r,s[1]+=i,s[2]+=l;return a}(e,t,r,n,o,i,u,a,l,d,s,v,y)}}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).mapBy2=t();
//# sourceMappingURL=browser.js.map

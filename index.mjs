// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";function d(r,d,o,m,l,v,c,f,j,u){var p,h,b;return e(d)&&(p=t(a(d))),e(m)&&(h=t(a(m))),e(v)&&(b=s(a(v))),p||h||b?function(r,e,t,s,n,i,a,d,o,m,l,v,c){var f,j,u,p,h;if(r<=0)return d;for((j=[0,0,0])[0]=t<0?(1-r)*t:0,j[1]=i<0?(1-r)*i:0,j[2]=o<0?(1-r)*o:0,u=[e,n,d],f=[0,0],h=0;h<r;h++)f[0]=s(e,j[0]),f[1]=a(n,j[1]),void 0!==(p=v.call(c,f,h,j,u))&&m(d,j[2],l(p[0],p[1])),j[0]+=t,j[1]+=i,j[2]+=o;return d}(r,d,o,p=p||n(a(d)),m,l,h=h||n(a(m)),v,c,b=b||i(a(v)),f,j,u):function(r,e,t,s,n,i,a,d,o,m){var l,v,c,f,j;if(r<=0)return i;for((v=[0,0,0])[0]=t<0?(1-r)*t:0,v[1]=n<0?(1-r)*n:0,v[2]=a<0?(1-r)*a:0,c=[e,s,i],l=[0,0],j=0;j<r;j++)l[0]=e[v[0]],l[1]=s[v[1]],void 0!==(f=o.call(m,l,j,v,c))&&(i[v[2]]=d(f[0],f[1])),v[0]+=t,v[1]+=n,v[2]+=a;return i}(r,d,o,m,l,v,c,f,j,u)}function o(r,d,o,m,l,v,c,f,j,u,p,h,b){var y,g,x;return e(d)&&(y=t(a(d))),e(l)&&(g=t(a(l))),e(f)&&(x=s(a(f))),y||g||x?function(r,e,t,s,n,i,a,d,o,m,l,v,c,f,j,u){var p,h,b,y,g;if(r<=0)return m;for(h=[s,d,v],b=[e,i,m],p=[0,0],g=0;g<r;g++)p[0]=n(e,h[0]),p[1]=o(i,h[1]),void 0!==(y=j.call(u,p,g,h,b))&&c(m,h[2],f(y[0],y[1])),h[0]+=t,h[1]+=a,h[2]+=l;return m}(r,d,o,m,y=y||n(a(d)),l,v,c,g=g||n(a(l)),f,j,u,x=x||i(a(f)),p,h,b):function(r,e,t,s,n,i,a,d,o,m,l,v,c){var f,j,u,p,h;if(r<=0)return d;for(j=[s,a,m],u=[e,n,d],f=[0,0],h=0;h<r;h++)f[0]=e[j[0]],f[1]=n[j[1]],void 0!==(p=v.call(c,f,h,j,u))&&(d[j[2]]=l(p[0],p[1])),j[0]+=t,j[1]+=i,j[2]+=o;return d}(r,d,o,m,l,v,c,f,j,u,p,h,b)}r(d,"ndarray",o);export{d as default,o as ndarray};
//# sourceMappingURL=index.mjs.map

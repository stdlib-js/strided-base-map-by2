// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@esm/index.mjs";function o(r,e,s,t,n,i,d,a,o,m,j,l,c){var f,v,p,u,h;if(r<=0)return a;for(v=[t,d,m],p=[e,n,a],f=[0,0],h=0;h<r;h++)f[0]=e[v[0]],f[1]=n[v[1]],void 0!==(u=l.call(c,f,h,v,p))&&(a[v[2]]=j(u[0],u[1])),v[0]+=s,v[1]+=i,v[2]+=o;return a}function m(r,e,s,t,n,i,d,a,o,m,j,l,c,f,v,p){var u,h,b,y,g;if(r<=0)return m;for(h=[t,a,l],b=[e,i,m],u=[0,0],g=0;g<r;g++)u[0]=n(e,h[0]),u[1]=o(i,h[1]),void 0!==(y=v.call(p,u,g,h,b))&&c(m,h[2],f(y[0],y[1])),h[0]+=s,h[1]+=d,h[2]+=j;return m}function j(r,j,l,c,f,v,p,u,h,b){var y,g,x;return e(j)&&(y=s(d(j))),e(c)&&(g=s(d(c))),e(v)&&(x=t(d(v))),y||g||x?function(r,e,s,t,n,i,d,o,j,l,c,f,v){return m(r,e,s,a(r,s),t,n,i,a(r,i),d,o,j,a(r,j),l,c,f,v)}(r,j,l,y=y||n(d(j)),c,f,g=g||n(d(c)),v,p,x=x||i(d(v)),u,h,b):function(r,e,s,t,n,i,d,m,j,l){return o(r,e,s,a(r,s),t,n,a(r,n),i,d,a(r,d),m,j,l)}(r,j,l,c,f,v,p,u,h,b)}function l(r,a,j,l,c,f,v,p,u,h,b,y,g){var x,k,q;return e(a)&&(x=s(d(a))),e(c)&&(k=s(d(c))),e(p)&&(q=t(d(p))),x||k||q?m(r,a,j,l,x=x||n(d(a)),c,f,v,k=k||n(d(c)),p,u,h,q=q||i(d(p)),b,y,g):o(r,a,j,l,c,f,v,p,u,h,b,y,g)}r(j,"ndarray",l);export{j as default,l as ndarray};
//# sourceMappingURL=index.mjs.map

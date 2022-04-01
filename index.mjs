// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t,a,i,o,d,l,f){var u,s,v,c,m;if(r<=0)return i;for(u=n<0?(1-r)*n:0,s=a<0?(1-r)*a:0,v=o<0?(1-r)*o:0,m=0;m<r;m++)void 0!==(c=l.call(f,e[u],t[s],m,u,s,v,e,t,i))&&(i[v]=d(c[0],c[1])),u+=n,s+=a,v+=o;return i},n=function(r,e,n,t,a,i,o,d,l,f,u,s,v){var c,m,p,j,y;if(r<=0)return d;for(c=t,m=o,p=f,y=0;y<r;y++)void 0!==(j=s.call(v,e[c],a[m],y,c,m,p,e,a,d))&&(d[p]=u(j[0],j[1])),c+=n,m+=i,p+=l;return d};r(e,"ndarray",n);var t=e;export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map

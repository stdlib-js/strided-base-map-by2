// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,t,a,i,o,d,l,f){var s,u,c,m,p;if(r<=0)return i;for(s=e<0?(1-r)*e:0,u=a<0?(1-r)*a:0,c=o<0?(1-r)*o:0,p=0;p<r;p++)void 0!==(m=l.call(f,n[s],t[u],p,s,u,c,n,t,i))&&(i[c]=d(m[0],m[1])),s+=e,u+=a,c+=o;return i}function e(r,n,e,t,a,i,o,d,l,f,s,u,c){var m,p,v,y,j;if(r<=0)return d;for(m=t,p=o,v=f,j=0;j<r;j++)void 0!==(y=u.call(c,n[m],a[p],j,m,p,v,n,a,d))&&(d[v]=s(y[0],y[1])),m+=e,p+=i,v+=l;return d}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map

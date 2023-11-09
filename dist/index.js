"use strict";var y=function(v,a){return function(){return a||v((a={exports:{}}).exports,a),a.exports}};var D=y(function(tr,C){
function $(v,a,n,f,s,i,l,u,g,p){var o,e,q,t,r;if(v<=0)return i;for(e=[0,0,0],n<0?e[0]=(1-v)*n:e[0]=0,s<0?e[1]=(1-v)*s:e[1]=0,l<0?e[2]=(1-v)*l:e[2]=0,q=[a,f,i],o=[0,0],r=0;r<v;r++)o[0]=a[e[0]],o[1]=f[e[1]],t=g.call(p,o,r,e,q),t!==void 0&&(i[e[2]]=u(t[0],t[1])),e[0]+=n,e[1]+=s,e[2]+=l;return i}C.exports=$
});var F=y(function(sr,E){
function b(v,a,n,f,s,i,l,u,g,p,o,e,q){var t,r,B,m,c;if(v<=0)return u;for(r=[0,0,0],n<0?r[0]=(1-v)*n:r[0]=0,i<0?r[1]=(1-v)*i:r[1]=0,g<0?r[2]=(1-v)*g:r[2]=0,B=[a,s,u],t=[0,0],c=0;c<v;c++)t[0]=f(a,r[0]),t[1]=l(s,r[1]),m=e.call(q,t,c,r,B),m!==void 0&&p(u,r[2],o(m[0],m[1])),r[0]+=n,r[1]+=i,r[2]+=g;return u}E.exports=b
});var K=y(function(or,J){
var R=require('@stdlib/array-base-assert-is-accessor-array/dist'),H=require('@stdlib/array-base-accessor-getter/dist'),h=require('@stdlib/array-base-accessor-setter/dist'),I=require('@stdlib/array-base-getter/dist'),k=require('@stdlib/array-base-setter/dist'),A=require('@stdlib/array-dtype/dist'),x=D(),d=F();function X(v,a,n,f,s,i,l,u,g,p){var o,e,q;return R(a)&&(o=H(A(a))),R(f)&&(e=H(A(f))),R(i)&&(q=h(A(i))),o||e||q?(o=o||I(A(a)),e=e||I(A(f)),q=q||k(A(i)),d(v,a,n,o,f,s,e,i,l,q,u,g,p)):x(v,a,n,f,s,i,l,u,g,p)}J.exports=X
});var M=y(function(cr,L){
function Y(v,a,n,f,s,i,l,u,g,p,o,e,q){var t,r,B,m,c;if(v<=0)return u;for(r=[f,l,p],B=[a,s,u],t=[0,0],c=0;c<v;c++)t[0]=a[r[0]],t[1]=s[r[1]],m=e.call(q,t,c,r,B),m!==void 0&&(u[r[2]]=o(m[0],m[1])),r[0]+=n,r[1]+=i,r[2]+=g;return u}L.exports=Y
});var Q=y(function(nr,P){
function Z(v,a,n,f,s,i,l,u,g,p,o,e,q,t,r,B){var m,c,w,S,O;if(v<=0)return p;for(c=[f,u,e],w=[a,i,p],m=[0,0],O=0;O<v;O++)m[0]=s(a,c[0]),m[1]=g(i,c[1]),S=r.call(B,m,O,c,w),S!==void 0&&q(p,c[2],t(S[0],S[1])),c[0]+=n,c[1]+=l,c[2]+=o;return p}P.exports=Z
});var W=y(function(fr,V){
var j=require('@stdlib/array-base-assert-is-accessor-array/dist'),T=require('@stdlib/array-base-accessor-getter/dist'),N=require('@stdlib/array-base-accessor-setter/dist'),U=require('@stdlib/array-base-getter/dist'),z=require('@stdlib/array-base-setter/dist'),G=require('@stdlib/array-dtype/dist'),rr=M(),er=Q();function ar(v,a,n,f,s,i,l,u,g,p,o,e,q){var t,r,B;return j(a)&&(t=T(G(a))),j(s)&&(r=T(G(s))),j(u)&&(B=N(G(u))),t||r||B?(t=t||U(G(a)),r=r||U(G(s)),B=B||z(G(u)),er(v,a,n,f,t,s,i,l,r,u,g,p,B,o,e,q)):rr(v,a,n,f,s,i,l,u,g,p,o,e,q)}V.exports=ar
});var vr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=K(),ir=W();vr(_,"ndarray",ir);module.exports=_;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

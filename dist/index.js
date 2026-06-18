"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var O=d(function(or,F){
function x(e,r,i,v,t,u,n,a,o,s,q,f,p){var y,c,g,B,m;if(e<=0)return a;for(c=[v,n,s],g=[r,t,a],y=[0,0],m=0;m<e;m++)y[0]=r[c[0]],y[1]=t[c[1]],B=f.call(p,y,m,c,g),B!==void 0&&(a[c[2]]=q(B[0],B[1])),c[0]+=i,c[1]+=u,c[2]+=o;return a}F.exports=x
});var I=d(function(qr,H){
var R=require('@stdlib/strided-base-stride2offset/dist'),b=O();function h(e,r,i,v,t,u,n,a,o,s){return b(e,r,i,R(e,i),v,t,R(e,t),u,n,R(e,n),a,o,s)}H.exports=h
});var j=d(function(fr,J){
function k(e,r,i,v,t,u,n,a,o,s,q,f,p,y,c,g){var B,m,E,G,S;if(e<=0)return s;for(m=[v,a,f],E=[r,u,s],B=[0,0],S=0;S<e;S++)B[0]=t(r,m[0]),B[1]=o(u,m[1]),G=c.call(g,B,S,m,E),G!==void 0&&p(s,m[2],y(G[0],G[1])),m[0]+=i,m[1]+=n,m[2]+=q;return s}J.exports=k
});var L=d(function(pr,K){
var w=require('@stdlib/strided-base-stride2offset/dist'),X=j();function Y(e,r,i,v,t,u,n,a,o,s,q,f,p){return X(e,r,i,w(e,i),v,t,u,w(e,u),n,a,o,w(e,o),s,q,f,p)}K.exports=Y
});var T=d(function(mr,Q){
var C=require('@stdlib/array-base-assert-is-accessor-array/dist'),M=require('@stdlib/array-base-accessor-getter/dist'),Z=require('@stdlib/array-base-accessor-setter/dist'),P=require('@stdlib/array-base-getter/dist'),N=require('@stdlib/array-base-setter/dist'),l=require('@stdlib/array-dtype/dist'),z=I(),rr=L();function er(e,r,i,v,t,u,n,a,o,s){var q,f,p;return C(r)&&(q=M(l(r))),C(v)&&(f=M(l(v))),C(u)&&(p=Z(l(u))),q||f||p?(q=q||P(l(r)),f=f||P(l(v)),p=p||N(l(u)),rr(e,r,i,q,v,t,f,u,n,p,a,o,s)):z(e,r,i,v,t,u,n,a,o,s)}Q.exports=er
});var _=d(function(yr,W){
var D=require('@stdlib/array-base-assert-is-accessor-array/dist'),U=require('@stdlib/array-base-accessor-getter/dist'),ar=require('@stdlib/array-base-accessor-setter/dist'),V=require('@stdlib/array-base-getter/dist'),tr=require('@stdlib/array-base-setter/dist'),A=require('@stdlib/array-dtype/dist'),ur=O(),ir=j();function vr(e,r,i,v,t,u,n,a,o,s,q,f,p){var y,c,g;return D(r)&&(y=U(A(r))),D(t)&&(c=U(A(t))),D(a)&&(g=ar(A(a))),y||c||g?(y=y||V(A(r)),c=c||V(A(t)),g=g||tr(A(a)),ir(e,r,i,v,y,t,u,n,c,a,o,s,g,q,f,p)):ur(e,r,i,v,t,u,n,a,o,s,q,f,p)}W.exports=vr
});var sr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),$=T(),cr=_();sr($,"ndarray",cr);module.exports=$;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

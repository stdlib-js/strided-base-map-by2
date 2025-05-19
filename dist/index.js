"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var O=d(function(or,F){
function x(e,r,c,i,t,u,n,a,o,v,q,f,p){var y,s,g,B,m;if(e<=0)return a;for(s=[i,n,v],g=[r,t,a],y=[0,0],m=0;m<e;m++)y[0]=r[s[0]],y[1]=t[s[1]],B=f.call(p,y,m,s,g),B!==void 0&&(a[s[2]]=q(B[0],B[1])),s[0]+=c,s[1]+=u,s[2]+=o;return a}F.exports=x
});var I=d(function(qr,H){
var R=require('@stdlib/strided-base-stride2offset/dist'),b=O();function h(e,r,c,i,t,u,n,a,o,v){return b(e,r,c,R(e,c),i,t,R(e,t),u,n,R(e,n),a,o,v)}H.exports=h
});var j=d(function(fr,J){
function k(e,r,c,i,t,u,n,a,o,v,q,f,p,y,s,g){var B,m,E,G,S;if(e<=0)return v;for(m=[i,a,f],E=[r,u,v],B=[0,0],S=0;S<e;S++)B[0]=t(r,m[0]),B[1]=o(u,m[1]),G=s.call(g,B,S,m,E),G!==void 0&&p(v,m[2],y(G[0],G[1])),m[0]+=c,m[1]+=n,m[2]+=q;return v}J.exports=k
});var L=d(function(pr,K){
var w=require('@stdlib/strided-base-stride2offset/dist'),X=j();function Y(e,r,c,i,t,u,n,a,o,v,q,f,p){return X(e,r,c,w(e,c),i,t,u,w(e,u),n,a,o,w(e,o),v,q,f,p)}K.exports=Y
});var T=d(function(mr,Q){
var C=require('@stdlib/array-base-assert-is-accessor-array/dist'),M=require('@stdlib/array-base-accessor-getter/dist'),Z=require('@stdlib/array-base-accessor-setter/dist'),P=require('@stdlib/array-base-getter/dist'),N=require('@stdlib/array-base-setter/dist'),l=require('@stdlib/array-dtype/dist'),z=I(),rr=L();function er(e,r,c,i,t,u,n,a,o,v){var q,f,p;return C(r)&&(q=M(l(r))),C(i)&&(f=M(l(i))),C(u)&&(p=Z(l(u))),q||f||p?(q=q||P(l(r)),f=f||P(l(i)),p=p||N(l(u)),rr(e,r,c,q,i,t,f,u,n,p,a,o,v)):z(e,r,c,i,t,u,n,a,o,v)}Q.exports=er
});var _=d(function(yr,W){
var D=require('@stdlib/array-base-assert-is-accessor-array/dist'),U=require('@stdlib/array-base-accessor-getter/dist'),ar=require('@stdlib/array-base-accessor-setter/dist'),V=require('@stdlib/array-base-getter/dist'),tr=require('@stdlib/array-base-setter/dist'),A=require('@stdlib/array-dtype/dist'),ur=O(),ir=j();function vr(e,r,c,i,t,u,n,a,o,v,q,f,p){var y,s,g;return D(r)&&(y=U(A(r))),D(t)&&(s=U(A(t))),D(a)&&(g=ar(A(a))),y||s||g?(y=y||V(A(r)),s=s||V(A(t)),g=g||tr(A(a)),ir(e,r,c,i,y,t,u,n,s,a,o,v,g,q,f,p)):ur(e,r,c,i,t,u,n,a,o,v,q,f,p)}W.exports=vr
});var sr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),$=T(),cr=_();sr($,"ndarray",cr);module.exports=$;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

const __vite__fileDeps=["./Dc-fPgkJ.js","./B2hUoZAs.js","./entry.B8GgT5QA.css","./DEpWCId1.js","./CaxUP45y.js","./1orNHd0L.js","./BQQOEPN4.js","./R1pHeCcp.js","./BGKYJ52S.js","./C9qKCFvP.js","./Pagination.D7qN7qzC.css","./C-lc5-5u.js","./B_8aIjz8.js","./DCTfzikA.js","./B-HHpLTx.js","./fS-pjH0A.js","./boyBAVNN.js","./MeGaiume.js","./nk4tSM_m.js","./BXXS6TCz.js","./Cbc39be_.js","./CZHF7Hd-.js","./By21eAqY.js","./cvW-uYte.js","./fKrvpb1C.js","./DpNZ3ZQf.js","./DvEET9rW.js","./BWYzyVlv.js","./CwHJfKcC.js","./i4toF4kp.js","./kd0F6MQ0.js","./BAskgGqK.js","./m0P-hxAq.js","./OX0YKNjC.js","./UnLinkedItems.B3o594vW.css","./CzwxC7f4.js","./e4fIiYA_.js","./LinkRecordDropdown.wdjSyEoY.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as Z,bL as a,fH as q,dS as J,h$ as W,r as m,hx as X,hw as ee,aw as te,hf as oe,az as ne,it as se,L as ae,fl as le,g,H as w,o as c,c as T,b as h,w as L,P as e,U as V,Q as j,S as y,a as A,T as E,aF as re,Y as P,Z as U,a5 as D,$ as ie,_ as ue}from"./B2hUoZAs.js";import{_ as pe}from"./DA8YMWgl.js";import{a as me}from"./nk4tSM_m.js";import{u as ce}from"./C-lc5-5u.js";import{u as de}from"./CEs-fTPr.js";import"./BJXzzDZW.js";import"./B_8aIjz8.js";import"./MeGaiume.js";import"./BXXS6TCz.js";import"./B-HHpLTx.js";import"./fS-pjH0A.js";import"./boyBAVNN.js";import"./DCTfzikA.js";import"./Cbc39be_.js";import"./CZHF7Hd-.js";import"./By21eAqY.js";import"./cvW-uYte.js";import"./1orNHd0L.js";import"./C9qKCFvP.js";import"./fKrvpb1C.js";const fe=U(()=>D(()=>import("./Dc-fPgkJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]),import.meta.url).then(r=>r.default||r)),_e=U(()=>D(()=>import("./CzwxC7f4.js"),__vite__mapDeps([35,36,1,2,37]),import.meta.url).then(r=>r.default||r)),ve={class:"flex items-center w-full"},we=Z({__name:"BelongsTo",async setup(r){let x,k;const l=a(q),z=a(W,J()),i=a(X,m(null)),B=a(ee),C=a(te),O=a(oe,m(!1)),S=a(ne,m(!1)),I=a(se,m(!1)),{isUIAllowed:$}=ae(),n=m(!1),u=m(!1),{state:d,isNew:f,removeLTARRef:H}=me(),{relatedTableMeta:N,loadRelatedTableMeta:F,relatedTableDisplayValueProp:_,relatedTableDisplayValuePropId:b,unlink:K}=ce(l,B,f,z.trigger);[x,k]=le(()=>F()),await x,k();const s=g(()=>{var t;return i!=null&&i.value?i==null?void 0:i.value:f.value?(t=d==null?void 0:d.value)==null?void 0:t[l==null?void 0:l.value.title]:null}),M=async t=>{f.value?await H(t,l==null?void 0:l.value):await K(t)};de(C,t=>{switch(t.key){case"Enter":n.value=!0,t.stopPropagation();break}});const R=g(()=>{var t,o;return(o=(t=N.value)==null?void 0:t.columns)==null?void 0:o.find(v=>v.title===_.value)});return w(n,()=>{u.value=n.value}),w(u,t=>{t||(n.value=!1)},{flush:"post"}),w(s,t=>{t&&(u.value=!1)}),(t,o)=>{const v=pe,G=ie,Q=fe,Y=_e;return c(),T("div",{class:E(["flex w-full chips-wrapper items-center",{active:e(C)}])},[h(Y,{"is-open":e(u),"onUpdate:isOpen":o[4]||(o[4]=p=>j(u)?u.value=p:null)},{overlay:L(()=>[e(n)?(c(),V(Q,{key:0,modelValue:e(n),"onUpdate:modelValue":o[3]||(o[3]=p=>j(n)?n.value=p:null),column:e(R),"hide-back-btn":""},null,8,["modelValue","column"])):y("",!0)]),default:L(()=>[A("div",ve,[A("div",{class:E(["nc-cell-field chips flex items-center flex-1",{"max-w-[calc(100%_-_16px)]":!e(I)}])},[e(s)&&(e(_)||e(b))?(c(),V(v,{key:0,item:e(s),value:!Array.isArray(e(s))&&typeof e(s)=="object"?e(s)[e(_)]??e(s)[e(b)]:e(s),column:e(R),"show-unlink-button":!0,onUnlink:o[0]||(o[0]=p=>M(e(s)))},null,8,["item","value","column"])):y("",!0)],2),!e(O)&&(e($)("dataEdit")||e(S))&&!e(I)?(c(),T("div",{key:0,class:"flex-none flex group items-center min-w-4",tabindex:"0",onKeydown:o[2]||(o[2]=re(P(p=>n.value=!0,["stop"]),["enter"]))},[h(G,{icon:"plus",class:"flex-none select-none !text-md text-gray-700 nc-action-icon nc-plus invisible group-hover:visible group-focus:visible",onClick:o[1]||(o[1]=P(p=>n.value=!0,["stop"]))})],32)):y("",!0)])]),_:1},8,["is-open"])],2)}}}),Oe=ue(we,[["__scopeId","data-v-c4bb045d"]]);export{Oe as default};
const __vite__fileDeps=["./BUe6g5rB.js","./Cgw6cdOy.js","./entry.DxI7QTvq.css","./CZSp73nk.js","./D8rpj5Lr.js","./BcZAlRJW.js","./BQQOEPN4.js","./BohSct8s.js","./C8c9012h.js","./hvq8FVej.js","./Pagination.D7qN7qzC.css","./BStsc-2E.js","./CO8XXsKl.js","./MA4kh5_N.js","./vIgbYHAs.js","./DpDIhxXu.js","./boyBAVNN.js","./D7yS5JAk.js","./r2PN1Hfg.js","./BBXMuneh.js","./B1jnz4_u.js","./DCaZaUH5.js","./DpYA1Dpy.js","./dmcxUY_0.js","./LSbsNkd9.js","./BS-JicVa.js","./DnXfnYY7.js","./Bcy-XIkn.js","./DPaOlBFV.js","./BIsWr_mR.js","./BZz6iAla.js","./JRGWYtLw.js","./CHLXm8Ls.js","./cCmEAZwU.js","./UnLinkedItems.C1GPHhk-.css","./DwSgSB7j.js","./BR5dm4Ez.js","./LinkedItems.Cz86hlsq.css","./_MH4-1Tt.js","./CiTH7PYd.js","./LinkRecordDropdown.wdjSyEoY.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as oe,bN as i,fQ as ne,hP as ae,hO as le,dK as se,ic as re,aF as ie,r as m,hr as ue,iH as ce,L as me,fc as pe,g as L,aC as de,H as P,o as s,S as v,w as U,P as e,Q as g,T as d,a as O,c as y,aq as z,av as _e,d3 as ve,b as fe,Y as B,Z as R,a6 as V,$ as ye,_ as he}from"./Cgw6cdOy.js";import{_ as ke}from"./GoONWNvD.js";import{a as Ce}from"./r2PN1Hfg.js";import{u as we}from"./BStsc-2E.js";import{u as xe}from"./CnN16FGu.js";import"./CCkm5jiV.js";import"./CO8XXsKl.js";import"./D7yS5JAk.js";import"./BBXMuneh.js";import"./vIgbYHAs.js";import"./DpDIhxXu.js";import"./boyBAVNN.js";import"./MA4kh5_N.js";import"./B1jnz4_u.js";import"./DCaZaUH5.js";import"./DpYA1Dpy.js";import"./dmcxUY_0.js";import"./BcZAlRJW.js";import"./hvq8FVej.js";import"./LSbsNkd9.js";const Ie=R(()=>V(()=>import("./BUe6g5rB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]),import.meta.url).then(l=>l.default||l)),Le=R(()=>V(()=>import("./DwSgSB7j.js"),__vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,27,28,29,30,31,32,36,33,37]),import.meta.url).then(l=>l.default||l)),ge=R(()=>V(()=>import("./_MH4-1Tt.js"),__vite__mapDeps([38,39,1,2,40]),import.meta.url).then(l=>l.default||l)),Re={class:"nc-cell-field flex items-center gap-1 w-full chips-wrapper min-h-4"},Ve={class:"chips flex items-center img-container flex-1 hm-items flex-nowrap min-w-0 overflow-hidden"},be={key:0,class:"flex justify-end gap-1 min-h-4 items-center"},Ae=oe({__name:"HasMany",async setup(l){let b,A;const p=i(ne),u=i(ae),H=i(le),M=i(re,se()),S=i(ie),N=i(ue,m(!1)),h=i(ce,m(!1)),o=m(!1),a=m(!1),c=m(!1),f=m(!1),{isUIAllowed:F}=me(),{state:k,isNew:C,removeLTARRef:$}=Ce(),{relatedTableMeta:K,loadRelatedTableMeta:Q,relatedTableDisplayValueProp:w,unlink:q}=we(p,H,C,M.trigger);[b,A]=pe(()=>Q()),await b,A();const T=L(()=>{var t;return u!=null&&u.value?(u==null?void 0:u.value)??[]:C.value?((t=k==null?void 0:k.value)==null?void 0:t[p==null?void 0:p.value.title])??[]:[]}),j=L(()=>T.value.reduce((t,n)=>{if(!w.value)return t;const _=n[w.value];return[...t,{value:_,item:n}]},[])),G=async t=>{C.value?await $(t,p.value):await q(t)},x=L(()=>{var t,n;return(n=(t=K.value)==null?void 0:t.columns)==null?void 0:n.find(_=>_.title===w.value)}),Y=()=>{a.value=!1,o.value=!0,f.value=!1},Z=()=>{o.value=!1,a.value=!0},E=()=>{h.value||(a.value=!0,o.value=!1,c.value=!0,f.value=!1)},J=()=>{h.value||(o.value=!0,a.value=!1,c.value=!0,f.value=!0)};return xe(i(de,m(!1)),t=>{switch(t.key){case"Enter":o.value=!0,t.stopPropagation();break}}),P([a,o],()=>{c.value=a.value||o.value}),P(c,t=>{t||(o.value=!1,a.value=!1)},{flush:"post"}),(t,n)=>{const _=ke,D=ye,W=Ie,X=Le,ee=ge;return s(),v(ee,{"is-open":e(c),"onUpdate:isOpen":n[2]||(n[2]=r=>g(c)?c.value=r:null)},{overlay:U(()=>[e(o)?(s(),v(W,{key:0,modelValue:e(o),"onUpdate:modelValue":n[0]||(n[0]=r=>g(o)?o.value=r:null),column:e(x),"hide-back-btn":e(f),onAttachLinkedRecord:Z},null,8,["modelValue","column","hide-back-btn"])):d("",!0),e(a)?(s(),v(X,{key:1,modelValue:e(a),"onUpdate:modelValue":n[1]||(n[1]=r=>g(a)?a.value=r:null),"cell-value":e(T),column:e(x),onAttachRecord:Y},null,8,["modelValue","cell-value","column"])):d("",!0)]),default:U(()=>{var r;return[O("div",Re,[O("div",Ve,[e(j)?(s(),y(z,{key:0},[(s(!0),y(z,null,_e(e(j),(I,te)=>(s(),v(_,{key:te,item:I.item,value:I.value,column:e(x),"show-unlink-button":!0,onUnlink:Te=>G(I.item)},null,8,["item","value","column","onUnlink"]))),128)),((r=e(u))==null?void 0:r.length)===10?(s(),y("span",{key:0,class:"caption pointer ml-1 grey--text",onClick:E}," more... ")):d("",!0)],64)):d("",!0)]),!e(h)&&!e(ve)(e(p))?(s(),y("div",be,[fe(D,{icon:"expand",class:"select-none transform text-sm nc-action-icon text-gray-500/50 hover:text-gray-500 nc-arrow-expand",onClick:B(E,["stop"])}),!e(N)&&e(F)("dataEdit")||e(S)?(s(),v(D,{key:0,icon:"plus",class:"select-none text-sm nc-action-icon text-gray-500/50 hover:text-gray-500 nc-plus",onClick:B(J,["stop"])})):d("",!0)])):d("",!0)])]}),_:1},8,["is-open"])}}}),Je=he(Ae,[["__scopeId","data-v-47ddeda3"]]);export{Je as default};
const __vite__fileDeps=["./DjAw2yHx.js","./BLdk6lRf.js","./entry.B8GgT5QA.css","./BPK89SF_.js","./DTl_5Njz.js","./DoWzg9_J.js","./CSxPNiqH.js","./boyBAVNN.js","./CwqgNcWF.js","./CDfEp2AO.js","./lY7N86Qy.js","./DV47GYLy.js","./BQZLjQkv.js","./DD6KJAAC.js","./JCToPTxN.js","./BLwY008C.js","./CBNgcPSC.js","./BD_L_KCX.js","./wBAlULwF.js","./CdmoJR0j.js","./lVny1V8X.js","./-2RVoONQ.js","./By_HjLkt.js","./Da2OU9E7.js","./ItemChip.C-GWZZc3.css","./HasMany.DITjkTE6.css","./DW8y3UcO.js","./ManyToMany.7z3tRJ4C.css","./BAOoBdd_.js","./BelongsTo.9pelyoJZ.css","./B8heYVa6.js","./OneToOne.CIjUhkDL.css","./D-0BMhyt.js","./jIF28eZ3.js","./Cy6qSl_z.js","./BXT8I8c2.js","./DaX1N3Cw.js","./Barcode.CzGST0LJ.css","./S1jPURZq.js","./osMhK51o.js","./Lookup.D2VxXg6x.css","./DgsPIfj2.js","./Dqn-V0Ye.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as b,ab as u,av as _,fH as G,aw as K,hw as S,hx as U,hy as X,hf as Y,bL as y,r as c,ht as Z,az as $,gx as q,o as n,c as J,P as o,U as i,hz as W,hA as x,S as ee,T as oe,aF as L,Y as C,hB as V,Z as l,a5 as s,_ as te}from"./BLdk6lRf.js";import{f as ae,b as ne,c as ie,d as le,e as se,a as E,g as re,h as _e,j as me,k as ue,i as pe}from"./CSxPNiqH.js";import{C as de}from"./DV47GYLy.js";const ye=l(()=>s(()=>import("./DjAw2yHx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url).then(e=>e.default||e)),ce=l(()=>s(()=>import("./-2RVoONQ.js"),__vite__mapDeps([21,1,2,22,9,4,10,5,6,7,8,3,11,12,13,14,15,16,17,18,23,24,19,25]),import.meta.url).then(e=>e.default||e)),fe=l(()=>s(()=>import("./DW8y3UcO.js"),__vite__mapDeps([26,1,2,22,9,4,10,5,6,7,8,3,11,12,13,14,15,16,17,18,23,24,19,27]),import.meta.url).then(e=>e.default||e)),ve=l(()=>s(()=>import("./BAOoBdd_.js"),__vite__mapDeps([28,1,2,22,9,4,10,5,6,7,8,3,11,12,13,14,15,16,17,18,23,24,19,29]),import.meta.url).then(e=>e.default||e)),Le=l(()=>s(()=>import("./B8heYVa6.js"),__vite__mapDeps([30,1,2,22,9,4,10,5,6,7,8,3,11,12,13,14,15,16,17,18,23,24,19,31]),import.meta.url).then(e=>e.default||e)),Ce=l(()=>s(()=>import("./D-0BMhyt.js"),__vite__mapDeps([32,1,2,33,19,6]),import.meta.url).then(e=>e.default||e)),Ve=l(()=>s(()=>import("./Cy6qSl_z.js"),__vite__mapDeps([34,1,2,11,33,19]),import.meta.url).then(e=>e.default||e)),Ee=l(()=>s(()=>import("./BXT8I8c2.js"),__vite__mapDeps([35,1,2,33,19,11]),import.meta.url).then(e=>e.default||e)),ze=l(()=>s(()=>import("./DaX1N3Cw.js"),__vite__mapDeps([36,1,2,33,19,11,37]),import.meta.url).then(e=>e.default||e)),Ie=l(()=>s(()=>import("./S1jPURZq.js"),__vite__mapDeps([38,1,2]),import.meta.url).then(e=>e.default||e)),ke=l(()=>s(()=>import("./osMhK51o.js"),__vite__mapDeps([39,1,2,11,33,19,40]),import.meta.url).then(e=>e.default||e)),Oe=l(()=>s(()=>import("./DgsPIfj2.js"),__vite__mapDeps([41,1,2]),import.meta.url).then(e=>e.default||e)),Re=l(()=>s(()=>import("./Dqn-V0Ye.js"),__vite__mapDeps([42,1,2]),import.meta.url).then(e=>e.default||e)),he=b({__name:"VirtualCell",props:{column:{},modelValue:{},row:{},active:{type:Boolean},readOnly:{type:Boolean}},emits:["update:modelValue","navigate","save"],setup(e,{emit:z}){const m=e,f=z,a=u(m,"column"),I=u(m,"active",!1),k=u(m,"row"),O=u(m,"readOnly",!1);_(G,a),_(K,I),_(S,k),_(U,u(m,"modelValue")),_(X,()=>f("save")),_(Y,O);const R=y(Z,c(!1)),p=y($,c(!1)),h=y(q,c(!1));function v(t,r){f("navigate",t),p.value||r.stopImmediatePropagation()}return(t,r)=>{const P=ye,T=ce,D=fe,A=ve,B=Le,g=Ce,j=Ve,w=Ee,F=ze,M=Ie,N=ke,H=Oe,Q=Re;return n(),J("div",{class:oe(["nc-virtual-cell w-full flex items-center",[`nc-virtual-cell-${(o(a).uidt||"default").toLowerCase()}`,{"text-right justify-end":o(R)&&!o(p)&&("isRollup"in t?t.isRollup:o(E))(o(a))&&!o(h),"nc-display-value-cell":("isPrimary"in t?t.isPrimary:o(de))(o(a))&&!o(p)}]]),onKeydown:[r[0]||(r[0]=L(C(d=>v(("NavigateDir"in t?t.NavigateDir:o(V)).NEXT,d),["exact"]),["enter"])),r[1]||(r[1]=L(C(d=>v(("NavigateDir"in t?t.NavigateDir:o(V)).PREV,d),["shift","exact"]),["enter"]))]},[("isLink"in t?t.isLink:o(ae))(o(a))?(n(),i(P,{key:0})):("isHm"in t?t.isHm:o(ne))(o(a))?(n(),i(T,{key:1})):("isMm"in t?t.isMm:o(ie))(o(a))?(n(),i(D,{key:2})):("isBt"in t?t.isBt:o(le))(o(a))?(n(),i(A,{key:3})):("isOo"in t?t.isOo:o(se))(o(a))?(n(),i(B,{key:4})):("isRollup"in t?t.isRollup:o(E))(o(a))?(n(),i(g,{key:5})):("isFormula"in t?t.isFormula:o(re))(o(a))?(n(),i(j,{key:6})):("isQrCode"in t?t.isQrCode:o(_e))(o(a))?(n(),i(w,{key:7})):("isBarcode"in t?t.isBarcode:o(me))(o(a))?(n(),i(F,{key:8})):("isCount"in t?t.isCount:o(ue))(o(a))?(n(),i(M,{key:9})):("isLookup"in t?t.isLookup:o(pe))(o(a))?(n(),i(N,{key:10})):o(W)(o(a))?(n(),i(H,{key:11,"model-value":t.modelValue},null,8,["model-value"])):o(x)(o(a))?(n(),i(Q,{key:12,"model-value":t.modelValue},null,8,["model-value"])):ee("",!0)],34)}}}),Ae=te(he,[["__scopeId","data-v-625aa7a6"]]);export{Ae as default};
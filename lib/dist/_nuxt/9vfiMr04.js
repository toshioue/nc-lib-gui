const __vite__fileDeps=["./CJNyL6pj.js","./Cgw6cdOy.js","./entry.DxI7QTvq.css","./DpDIhxXu.js","./D7yS5JAk.js","./VirtualCell.DaTWCMZu.css","./CBOrWF0V.js","./Dqwep-0C.js","./BBXMuneh.js","./Cell.CE2XxAOg.css","./D51uA4Lq.js","./VirtualCell.BYk4C8Tn.css","./DQfYvTkb.js","./r2PN1Hfg.js","./CO8XXsKl.js","./vIgbYHAs.js","./boyBAVNN.js","./Cell.DUBzJZSm.css","./Bys73o5q.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as j,bN as _,r as d,da as z,d9 as A,gD as C,aB as p,aF as P,hL as D,i as S,ic as T,a7 as g,o as r,S as s,w as y,b as O,P as o,c,aq as B,av as M,a as f,fP as h,T as N,Z as l,a6 as i,ft as U}from"./Cgw6cdOy.js";import{a as F}from"./CrH1vpRf.js";import{u as H}from"./r2PN1Hfg.js";import{j as $}from"./D7yS5JAk.js";import{l as q}from"./DpDIhxXu.js";import"./DFiWgQ57.js";import"./CO8XXsKl.js";import"./vIgbYHAs.js";import"./boyBAVNN.js";const G=l(()=>i(()=>import("./CJNyL6pj.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(e=>e.default||e)),Z=l(()=>i(()=>import("./CBOrWF0V.js"),__vite__mapDeps([6,1,2,7,8,9]),import.meta.url).then(e=>e.default||e)),J=l(()=>i(()=>import("./D51uA4Lq.js"),__vite__mapDeps([10,1,2,3,8,11]),import.meta.url).then(e=>e.default||e)),K=l(()=>i(()=>import("./DQfYvTkb.js"),__vite__mapDeps([12,1,2,13,14,15,3,16,4,8,17]),import.meta.url).then(e=>e.default||e)),Q=l(()=>i(()=>import("./Bys73o5q.js"),__vite__mapDeps([18,13,14,1,2,15,3,16,4]),import.meta.url).then(e=>e.default||e)),W={key:0,class:"flex flex-col space-y-1 px-4 mb-6 bg-gray-50 rounded-lg w-full"},X={class:"flex flex-row w-full justify-start border-b-1 border-gray-100 py-2.5"},Y={class:"w-full text-gray-600"},ee={class:"flex flex-row w-full pb-3 pt-2 pl-2 items-center justify-start"},ue=j({__name:"SharedMapMarkerPopup",props:{fields:{},row:{}},setup(e){const V=e,v=_(z,d()),R=_(A,d()),m=_(C),{loadData:w}=F(v,R);p(P,d(!1)),p(D,d(!1)),m==null||m.on(async()=>{await w()}),S(async()=>{await w()}),p(T,m);const a=g(V,"row");return H(a),(n,te)=>{const L=G,E=Z,k=J,I=K,x=U,b=Q;return r(),s(b,{row:o(a)},{default:y(()=>[O(x,{hoverable:"",class:"!rounded-lg h-full overflow-hidden break-all max-w-[450px]","data-testid":`nc-shared-map-marker-popup-card-${o(a).row.id}`},{default:y(()=>[(r(!0),c(B,null,M(n.fields,t=>(r(),c("div",{key:`record-${o(a).row.id}-${t.id}`},[!("isRowEmpty"in n?n.isRowEmpty:o($))(o(a),t)||("isLTAR"in n?n.isLTAR:o(q))(t.uidt,n.colOptions)?(r(),c("div",W,[f("div",X,[f("div",Y,[o(h)(t)?(r(),s(L,{key:0,column:t,"hide-menu":!0},null,8,["column"])):(r(),s(E,{key:1,column:t,"hide-menu":!0},null,8,["column"]))])]),f("div",ee,[o(h)(t)?(r(),s(k,{key:0,modelValue:o(a).row[t.title],"onUpdate:modelValue":u=>o(a).row[t.title]=u,column:t,row:o(a)},null,8,["modelValue","onUpdate:modelValue","column","row"])):(r(),s(I,{key:1,modelValue:o(a).row[t.title],"onUpdate:modelValue":u=>o(a).row[t.title]=u,column:t,"edit-enabled":!1,"read-only":!0},null,8,["modelValue","onUpdate:modelValue","column"]))])])):N("",!0)]))),128))]),_:1},8,["data-testid"])]),_:1},8,["row"])}}});export{ue as default};
const __vite__fileDeps=["./Dtgb-V7U.js","./B2hUoZAs.js","./entry.B8GgT5QA.css","./nk4tSM_m.js","./B_8aIjz8.js","./B-HHpLTx.js","./fS-pjH0A.js","./boyBAVNN.js","./MeGaiume.js","./BXXS6TCz.js","./Cell.DV_4HH8i.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as D,av as M,r,hp as $,ac as y,i as I,H as S,P as t,o as c,c as V,b as p,w as B,a as s,t as m,Y as E,cU as l,U,V as N,W as P,S as R,Z as T,a5 as z,$ as L,a2 as A}from"./B2hUoZAs.js";import{u as Y}from"./nk4tSM_m.js";import"./B_8aIjz8.js";import"./B-HHpLTx.js";import"./fS-pjH0A.js";import"./boyBAVNN.js";import"./MeGaiume.js";const j=T(()=>z(()=>import("./Dtgb-V7U.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url).then(n=>n.default||n)),F={key:0},G={class:"flex items-center gap-2"},H={key:1},O={class:"w-full flex items-center gap-2 mb-2"},W={class:"text-small leading-[18px] flex-1 text-gray-700"},Z={class:"flex flex-row gap-2"},q={class:"nc-default-value-wrapper border-1 flex items-center w-full px-3 border-gray-300 rounded-lg sm:min-h-[32px] xs:min-h-13 flex items-center focus-within:border-brand-500 focus-within:shadow-selected focus-within:ring-0 transition-all duration-0.3s"},oe=D({__name:"DefaultValue",props:{value:{},isVisibleDefaultValueInput:{type:Boolean}},emits:["update:value","update:isVisibleDefaultValueInput"],setup(n,{emit:x}){var w;const f=n,v=x;M($,r(!0));const o=y(f,"value",v),_=y(f,"isVisibleDefaultValueInput",v),b=r({row:{},oldRow:{},rowMeta:{isUpdatedFromCopyNPaste:[(w=o.value)==null?void 0:w.title]}});Y(b);const u=r(null),h=r(!1),d=e=>{o.value={...o.value,cdf:e},u.value=e};return I(()=>{var e;d(((e=o.value)==null?void 0:e.cdf)??null)}),S(()=>o.value.cdf,e=>{u.value=e}),(e,a)=>{const g=L,C=A,k=j;return t(_)?(c(),V("div",H,[s("div",O,[s("div",W,m(e.$t("placeholder.defaultValue")),1)]),s("div",Z,[s("div",q,[p(k,{"edit-enabled":!0,"model-value":t(u),column:t(o),class:"!border-none h-auto my-auto","onUpdate:cdf":d,"onUpdate:editEnabled":a[1]||(a[1]=i=>h.value=i),onClick:a[2]||(a[2]=i=>h.value=!0)},null,8,["model-value","column"]),[t(l).Year,t(l).Date,t(l).Time,t(l).DateTime,t(l).SingleSelect,t(l).MultiSelect].includes(t(o).uidt)?R("",!0):(c(),U(N(("iconMap"in e?e.iconMap:t(P)).close),{key:0,class:"w-4 h-4 cursor-pointer rounded-full !text-black-500 text-gray-500 cursor-pointer hover:bg-gray-50",onClick:a[3]||(a[3]=i=>d(null))}))])])])):(c(),V("div",F,[p(C,{size:"small",type:"text",class:"!text-gray-500 !hover:text-gray-700","data-testid":"nc-show-default-value-btn",onClick:a[0]||(a[0]=E(i=>_.value=!0,["stop"]))},{default:B(()=>[s("div",G,[s("span",null,m(e.$t("general.set"))+" "+m(e.$t("placeholder.defaultValue").toLowerCase()),1),p(g,{icon:"plus",class:"flex-none h-4 w-4"})])]),_:1})]))}}});export{oe as default};
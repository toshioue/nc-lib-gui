import{f as W,bN as k,gC as F,r as c,d8 as L,N as O,g as D,d2 as Q,d1 as u,H as U,hI as j,af as E,i as z,o as i,c as h,P as o,S as v,w as b,b as m,U as I,a as g,t as G,T as $,V as H,W as P,Q as A,Y,b1 as J,$ as K,aV as X,_ as Z}from"./3QBYHahY.js";import{_ as ee}from"./BSmpAotj.js";import{_ as ae}from"./Kma333Sh.js";import{a as oe,b as te}from"./BteOdwRG.js";import"./kHOslGNR.js";import{I as re}from"./CmN9vPg3.js";import"./ISaCd8Ij.js";import"./BV5EkxN-.js";import"./DPqnb67u.js";import"./CtMydB5S.js";import"./D4iSzjWt.js";import"./BLIqcdwb.js";import"./WrawXyJR.js";import"./CfxEkdGP.js";import"./CSl6euFG.js";import"./DPgYHC40.js";import"./BsWDDIqE.js";import"./BQQOEPN4.js";import"./xnDaHwV-.js";import"./ceYq-xax.js";const se={key:0,class:"w-16 text-xs font-medium text-gray-400 truncate"},le={class:"xs:text-gray-600 group-hover:text-gray-700 sm:text-gray-400"},ie=W({__name:"SearchData",setup(ne){const q=k(F),{meta:C}=oe(),y=k(L,c()),{search:t,loadFieldQuery:V}=te(),s=c(!1),l=c(!1),_=c(),w=c(),{isMobileMode:M}=O(),f=D(()=>{var e,a;return((a=(e=C.value)==null?void 0:e.columns)==null?void 0:a.filter(r=>!Q(r)&&![u.Links,u.Rollup,u.DateTime,u.Date].includes(r==null?void 0:r.uidt)))??[]});U(()=>{var e;return(e=y.value)==null?void 0:e.id},(e,a)=>{var r;e!==a&&V((r=y.value)==null?void 0:r.id)},{immediate:!0});function x(){q.trigger({shouldShowLoading:!1,offset:0})}const S=D(()=>{var a,r,d;if(t.value.field)return(r=(a=f.value)==null?void 0:a.find(n=>n.id===t.value.field))==null?void 0:r.title;const e=(d=f.value)==null?void 0:d.find(n=>n.pv);return t.value.field=e==null?void 0:e.id,e==null?void 0:e.title});j(()=>t.value.query,()=>{x()},{debounce:500,maxWait:600});const R=e=>{t.value.field=e.id,s.value=!1},B=()=>{l.value=!0,J(()=>{var e;(e=_.value)==null||e.focus()})};return E(w,e=>{const a=e.target;t.value.query||a.closest(".nc-dropdown-toolbar-search-field-option")||(l.value=!1)}),z(()=>{t.value.query&&!l.value&&(l.value=!0)}),(e,a)=>{const r=K,d=X,n=ee,N=ae,T=re;return i(),h("div",{ref_key:"globalSearchWrapperRef",ref:w,class:"nc-global-search-wrapper"},[!o(t).query&&!o(l)?(i(),v(d,{key:0,class:"nc-toolbar-btn !rounded-lg !h-7 !px-1.5","data-testid":"nc-global-search-show-input",onClick:B},{default:b(()=>[m(r,{icon:"search",class:"h-4 w-4 text-gray-700 group-hover:text-black"})]),_:1})):(i(),h("div",{key:1,class:I(["flex flex-row border-1 rounded-lg h-7 xs:h-10 xs:ml-0 ml-1 border-gray-200 overflow-hidden focus-within:border-primary",{"border-primary":o(t).query.length!==0}])},[m(N,{visible:o(s),"onUpdate:visible":a[1]||(a[1]=p=>A(s)?s.value=p:null),trigger:["click"],"overlay-class-name":"nc-dropdown-toolbar-search-field-option"},{overlay:b(()=>[m(n,{"is-parent-open":o(s),"selected-option-id":o(t).field,"show-selected-option":"",options:o(f),"search-input-placeholder":e.$t("placeholder.searchFields"),"toolbar-menu":"globalSearch",onSelected:R},null,8,["is-parent-open","selected-option-id","options","search-input-placeholder"])]),default:b(()=>[g("div",{class:I(["flex items-center group px-2 cursor-pointer border-r-1 border-gray-200 hover:bg-gray-100",{"bg-gray-50 ":o(s)}]),onClick:a[0]||(a[0]=p=>s.value=!o(s))},[m(r,{icon:"search",class:"ml-1 mr-2 h-3.5 w-3.5 text-gray-500 group-hover:text-black"}),o(M)?$("",!0):(i(),h("div",se,G(o(S)??""),1)),g("div",le,[(i(),v(H(("iconMap"in e?e.iconMap:o(P)).arrowDown),{class:"text-sm text-inherit"}))])],2)]),_:1},8,["visible"]),g("form",{class:"p-0",onSubmit:a[3]||(a[3]=Y(()=>{},["prevent"]))},[o(t).query||o(l)?(i(),v(T,{key:0,ref_key:"globalSearchRef",ref:_,value:o(t).query,"onUpdate:value":a[2]||(a[2]=p=>o(t).query=p),name:"globalSearchQuery",size:"small",class:"text-xs w-40 h-full",placeholder:`${e.$t("general.searchIn")} ${o(S)??""}`,bordered:!1,"data-testid":"search-data-input",onPressEnter:x},null,8,["value","placeholder"])):$("",!0)],32)],2))],512)}}}),Ce=Z(ie,[["__scopeId","data-v-f10ad39d"]]);export{Ce as default};
import{e as F,bL as k,gT as N,r as c,d6 as O,L as W,f as D,d0 as Q,c$ as u,F as U,i0 as j,ad as E,g as z,o as i,c as h,N as o,Q as v,w as b,b as m,S as $,a as g,t as G,R as I,T as A,U as H,O as P,W as Y,a$ as J,Y as K,aT as X,_ as Z}from"./DZZ6t_j4.js";import{_ as ee}from"./CzKSHp3Z.js";import{_ as ae}from"./vK-WmZ7a.js";import{a as oe,b as te}from"./B05h-4V9.js";import"./DKN1hQ6S.js";import{I as re}from"./BQuyMdA-.js";import"./DC_VdAC1.js";import"./hZgTYrdl.js";import"./ByVBARmO.js";import"./37hePIet.js";import"./C4K5fdHe.js";import"./CR5b0rlC.js";import"./BVrX6sNU.js";import"./i4aLU0Nw.js";import"./GMLocJHP.js";import"./B5RRVMt5.js";import"./DGj1ycqW.js";import"./BQQOEPN4.js";import"./vll-Pnjv.js";import"./DyDFI6NE.js";const se={key:0,class:"w-16 text-xs font-medium text-gray-400 truncate"},le={class:"xs:text-gray-600 group-hover:text-gray-700 sm:text-gray-400"},ie=F({__name:"SearchData",setup(ne){const q=k(N),{meta:R}=oe(),y=k(O,c()),{search:t,loadFieldQuery:T}=te(),s=c(!1),l=c(!1),_=c(),w=c(),{isMobileMode:C}=W(),f=D(()=>{var e,a;return((a=(e=R.value)==null?void 0:e.columns)==null?void 0:a.filter(r=>!Q(r)&&![u.Links,u.Rollup,u.DateTime,u.Date].includes(r==null?void 0:r.uidt)))??[]});U(()=>{var e;return(e=y.value)==null?void 0:e.id},(e,a)=>{var r;e!==a&&T((r=y.value)==null?void 0:r.id)},{immediate:!0});function x(){q.trigger({shouldShowLoading:!1,offset:0})}const S=D(()=>{var a,r,d;if(t.value.field)return(r=(a=f.value)==null?void 0:a.find(n=>n.id===t.value.field))==null?void 0:r.title;const e=(d=f.value)==null?void 0:d.find(n=>n.pv);return t.value.field=e==null?void 0:e.id,e==null?void 0:e.title});j(()=>t.value.query,()=>{x()},{debounce:500,maxWait:600});const M=e=>{t.value.field=e.id,s.value=!1},B=()=>{l.value=!0,J(()=>{var e;(e=_.value)==null||e.focus()})};return E(w,e=>{const a=e.target;t.value.query||a.closest(".nc-dropdown-toolbar-search-field-option")||(l.value=!1)}),z(()=>{t.value.query&&!l.value&&(l.value=!0)}),(e,a)=>{const r=K,d=X,n=ee,L=ae,V=re;return i(),h("div",{ref_key:"globalSearchWrapperRef",ref:w,class:"nc-global-search-wrapper"},[!o(t).query&&!o(l)?(i(),v(d,{key:0,class:"nc-toolbar-btn !rounded-lg !h-7 !px-1.5","data-testid":"nc-global-search-show-input",onClick:B},{default:b(()=>[m(r,{icon:"search",class:"h-4 w-4 text-gray-700 group-hover:text-black"})]),_:1})):(i(),h("div",{key:1,class:$(["flex flex-row border-1 rounded-lg h-7 xs:h-10 xs:ml-0 ml-1 border-gray-200 overflow-hidden focus-within:border-primary",{"border-primary":o(t).query.length!==0}])},[m(L,{visible:o(s),"onUpdate:visible":a[1]||(a[1]=p=>P(s)?s.value=p:null),trigger:["click"],"overlay-class-name":"nc-dropdown-toolbar-search-field-option"},{overlay:b(()=>[m(n,{"is-parent-open":o(s),"selected-option-id":o(t).field,"show-selected-option":"",options:o(f),"search-input-placeholder":e.$t("placeholder.searchFields"),"toolbar-menu":"globalSearch",onSelected:M},null,8,["is-parent-open","selected-option-id","options","search-input-placeholder"])]),default:b(()=>[g("div",{class:$(["flex items-center group px-2 cursor-pointer border-r-1 border-gray-200 hover:bg-gray-100",{"bg-gray-50 ":o(s)}]),onClick:a[0]||(a[0]=p=>s.value=!o(s))},[m(r,{icon:"search",class:"ml-1 mr-2 h-3.5 w-3.5 text-gray-500 group-hover:text-black"}),o(C)?I("",!0):(i(),h("div",se,G(o(S)??""),1)),g("div",le,[(i(),v(A(("iconMap"in e?e.iconMap:o(H)).arrowDown),{class:"text-sm text-inherit"}))])],2)]),_:1},8,["visible"]),g("form",{class:"p-0",onSubmit:a[3]||(a[3]=Y(()=>{},["prevent"]))},[o(t).query||o(l)?(i(),v(V,{key:0,ref_key:"globalSearchRef",ref:_,value:o(t).query,"onUpdate:value":a[2]||(a[2]=p=>o(t).query=p),name:"globalSearchQuery",size:"small",class:"text-xs w-40 h-full",placeholder:`${e.$t("general.searchIn")} ${o(S)??""}`,bordered:!1,"data-testid":"search-data-input",onPressEnter:x},null,8,["value","placeholder"])):I("",!0)],32)],2))],512)}}}),Re=Z(ie,[["__scopeId","data-v-f10ad39d"]]);export{Re as default};
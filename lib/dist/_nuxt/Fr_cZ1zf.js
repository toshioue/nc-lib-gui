import{_ as G}from"./QHHXY-Ma.js";import{_ as M,o as n,c as p,e as P,ag as F,ab as J,L as Q,a5 as R,bL as q,r as j,io as H,f as d,ax as W,cO as X,cp as Y,jl as Z,a as b,a6 as ee,N as e,t as x,R as m,S as w,b as V,Q as k,O as z,w as te,T as ae,U as oe,aJ as se,V as ne,a8 as ie,aK as re}from"./DZZ6t_j4.js";import{S as le}from"./uskrw1rV.js";import"./DKN1hQ6S.js";import{I as pe}from"./BQuyMdA-.js";import"./D_MsYLkT.js";import"./BCJFTkwv.js";import"./BQQOEPN4.js";import"./CB1aB6F1.js";import"./B5RRVMt5.js";import"./vll-Pnjv.js";import"./DXQuLwNn.js";import"./BmtvKY7O.js";import"./BLzs_b5A.js";import"./DGj1ycqW.js";import"./DyDFI6NE.js";const ce={};function ue(B,I){return n(),p("span")}const de=M(ce,[["render",ue]]),me={key:0,class:"caption ml-2.5 text-gray-500 text-xs","data-testid":"grid-pagination"},ge={key:0,class:"nc-pagination-skeleton flex flex-row justify-center item-center min-h-10 min-w-42"},fe={key:2,class:"mx-auto flex items-center mt-n1",style:{"max-width":"250px"}},ye={key:1,class:"flex-1 flex justify-end items-center"},ve={class:"text-right"},xe={key:0,class:"caption nc-grid-row-count mr-2.5 text-gray-500 text-xs","data-testid":"grid-pagination"},we=P({__name:"Pagination",props:{paginationData:{},changePage:{type:Function},alignCountOnRight:{type:Boolean},hidePagination:{type:Boolean},hideSidebars:{type:Boolean},customLabel:{},fixedSize:{},extraStyle:{},showApiTiming:{type:Boolean},alignLeft:{type:Boolean},showSizeChanger:{type:Boolean}},emits:["update:paginationData"],setup(B,{emit:I}){const c=B,T=I,{locale:U}=F(),o=J(c,"paginationData",T),{isMobileMode:_}=Q(),{alignCountOnRight:L,customLabel:g,changePage:s}=c,C=R(c,"fixedSize"),O=R(c,"extraStyle"),f=q(H,j(!1)),S=d(()=>c.alignLeft??!1),{isViewDataLoading:A,isPaginationLoading:$}=W(X()),i=d(()=>{var t;return((t=o.value)==null?void 0:t.totalRows)??1/0}),r=d({get:()=>{var t;return((t=o==null?void 0:o.value)==null?void 0:t.page)??1},set:async t=>{$.value=!0;try{await(s==null?void 0:s(t)),$.value=!1}catch(a){if(Y.isCancel(a))return;$.value=!1}}}),h=d({get:()=>{var t;return((t=o.value)==null?void 0:t.pageSize)??25},set:t=>{var a,v;if(o.value){if((a=o.value)!=null&&a.pageSize&&((v=o.value)==null?void 0:v.pageSize)===t)return;o.value.pageSize=t,o.value.totalRows&&r.value*t<o.value.totalRows?s==null||s(r.value):s==null||s(1)}}}),D=d(()=>Z(U.value)),y=()=>re()?"⌥":"ALT",u=j(r.value);return(t,a)=>{const v=le,K=G,N=pe,E=de;return n(),p("div",{class:w(["flex items-center bg-white border-gray-200 nc-grid-pagination-wrapper",{"border-t-1":!e(f),"h-13":e(_),"h-10":!e(_)}]),style:ie(`${e(C)?`width: ${e(C)}px;`:""}${e(f)?"margin-top:1px; border-radius: 0 0 8px 8px !important;":""} ${e(O)}`)},[b("div",{class:w(["flex items-center",{"flex-1":!e(S),"left-0 sticky":e(S)}])},[ee(t.$slots,"add-record",{},void 0,!0),!e(L)&&e(i)!==null&&e(i)!==1/0?(n(),p("span",me,x(e(i))+" "+x(e(g)?e(g):e(i)!==1?t.$t("objects.records"):t.$t("objects.record")),1)):m("",!0)],2),t.hidePagination?m("",!0):(n(),p("div",{key:0,class:w(["transition-all ml-2 sticky left-0 duration-350",{"ml-8":e(S),"left-[159px]":e(f)&&t.$slots["add-record"],"left-[32px]":e(f)&&!t.$slots["add-record"]}])},[e(A)?(n(),p("div",ge,[V(v,{active:!0,title:!0,paragraph:!1,class:"-mt-1 max-w-60"})])):e(i)!==1/0?(n(),k(K,{key:1,current:e(r),"onUpdate:current":a[0]||(a[0]=l=>z(r)?r.value=l:null),"page-size":e(h),"onUpdate:pageSize":a[1]||(a[1]=l=>z(h)?h.value=l:null),class:w(["xs:mr-2",{"rtl-pagination":e(D)}]),total:+e(i),"entity-name":"grid","prev-page-tooltip":`${y()}+←`,"next-page-tooltip":`${y()}+→`,"first-page-tooltip":`${y()}+↓`,"last-page-tooltip":`${y()}+↑`,"show-size-changer":t.showSizeChanger},null,8,["current","page-size","class","total","prev-page-tooltip","next-page-tooltip","first-page-tooltip","last-page-tooltip","show-size-changer"])):(n(),p("div",fe,[a[6]||(a[6]=b("span",{class:"text-xs",style:{"white-space":"nowrap"}}," Change page:",-1)),V(N,{value:e(u),"onUpdate:value":a[3]||(a[3]=l=>z(u)?u.value=l:null),size:"small",class:"ml-1 !text-xs",type:"number",onKeydown:a[4]||(a[4]=se(l=>e(s)(e(u)),["enter"])),onBlur:a[5]||(a[5]=l=>u.value=e(r))},{suffix:te(()=>[(n(),k(ae(("iconMap"in t?t.iconMap:e(oe)).returnKey),{class:"mt-1",onClick:a[2]||(a[2]=l=>e(s)(e(r)))}))]),_:1},8,["value"])]))],2)),e(_)?m("",!0):(n(),p("div",ye,[("isEeUI"in t?t.isEeUI:e(ne))&&c.showApiTiming?(n(),k(E,{key:0,class:"m-1"})):m("",!0),b("div",ve,[e(L)&&e(i)!==1/0?(n(),p("span",xe,x(e(i))+" "+x(e(g)?e(g):e(i)!==1?t.$t("objects.records"):t.$t("objects.record")),1)):m("",!0)])]))],6)}}}),Ue=M(we,[["__scopeId","data-v-f7644920"]]);export{Ue as default};
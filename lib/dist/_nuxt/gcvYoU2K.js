const __vite__fileDeps=["./CufbkOJY.js","./DZZ6t_j4.js","./entry.DIDWwc7m.css","./B05h-4V9.js","./GMLocJHP.js","./uhBJvRY2.js","./CFvUUxCy.js","./eX8_g88K.js","./vll-Pnjv.js","./CDWovrGB.js","./DyDFI6NE.js","./BQuyMdA-.js","./BQQOEPN4.js","./CvNj_pzL.js","./9ZvwAtsX.js","./ABvOSKp8.js","./B8iX-Tu_.js","./D9tFZoTQ.js","./Cz_1GoV3.js","./K3POysmD.js","./D_MsYLkT.js","./BCJFTkwv.js","./CB1aB6F1.js","./B5RRVMt5.js","./View.BWVVEIch.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{o as t,c as l,a as i,e as M,L as S,ax as d,cP as z,cL as L,J as N,K as A,aE as D,aK as E,ds as K,M as P,N as e,P as I,Q as c,w as b,R as y,t as R,S as O,ao as f,b as u,d as j,X as U,a4 as G,y as H,Y as F,Z as J}from"./DZZ6t_j4.js";import{u as Q}from"./CvNj_pzL.js";const X={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Y=i("path",{fill:"currentColor",d:"M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm6-3q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z"},null,-1),Z=[Y];function W(o,n){return t(),l("svg",X,[...Z])}const ee={name:"material-symbols-lock-outline",render:W},se={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=i("path",{fill:"currentColor",d:"M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-1-2.05V18q-.825 0-1.412-.587T9 16v-1l-4.8-4.8q-.075.45-.137.9T4 12q0 3.025 1.988 5.3T11 19.95m6.9-2.55q.5-.55.9-1.187t.662-1.325t.4-1.413T20 12q0-2.45-1.363-4.475T15 4.6V5q0 .825-.587 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h6q.425 0 .713.288T15 13v3h1q.65 0 1.175.388T17.9 17.4"},null,-1),ae=[te];function oe(o,n){return t(),l("svg",se,[...ae])}const ne={name:"material-symbols-public",render:oe},le=U(()=>G(()=>import("./CufbkOJY.js").then(o=>o.V),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]),import.meta.url).then(o=>o.default||o)),ie=["data-sharetype"],re={key:0,class:"flex flex-row items-center w-full gap-x-1"},ce={class:"flex"},de={class:"flex flex-col justify-center h-full"},ue={class:"flex flex-row items-center w-full"},he=M({__name:"ShareProject",props:{disabled:{type:Boolean},isViewToolbar:{type:Boolean}},setup(o){const{isMobileMode:n,getMainUrl:T}=S(),{visibility:r,showShareModal:_}=d(Q()),{activeTable:v}=d(z()),{base:w,isSharedBase:m}=d(L()),{$e:x}=H(),{isUIAllowed:k}=N(),q=A();D(document,"keydown",async s=>{const a=E()?s.metaKey:s.ctrlKey;if(s.altKey&&!s.shiftKey&&!a)switch(s.keyCode){case 73:{K()||(x("c:shortcut",{key:"ALT + I"}),_.value=!0);break}}});const V=async()=>{const s=T();window.open(`${s||""}#/copy-shared-base?base=${q.params.baseId}`,"_blank","noopener,noreferrer")};return(s,a)=>{const g=ne,$=ee,p=F,h=J,B=le,C=P("e");return t(),l(f,null,[!e(m)&&e(k)("baseShare")&&e(r)!=="hidden"&&(e(v)||e(w))?(t(),l("div",{key:0,class:"nc-share-base-button flex flex-col justify-center","data-testid":"share-base-button","data-sharetype":e(r)},[I((t(),c(h,{size:e(n)?"medium":"small",class:O(["z-10 !rounded-lg",{"!px-2":!e(n),"!px-0 !max-w-8.5 !min-w-8.5":e(n)}]),type:"primary",disabled:s.disabled,onClick:a[0]||(a[0]=_e=>_.value=!0)},{default:b(()=>[e(n)?(t(),c(p,{key:1,icon:"mobileShare"})):(t(),l("div",re,[e(r)==="public"?(t(),c(g,{key:0,class:"h-3.5"})):e(r)==="private"?(t(),c($,{key:1,class:"h-3.5"})):y("",!0),i("div",ce,R(s.$t("activity.share")),1)]))]),_:1},8,["size","class","disabled"])),[[C,["c:share:open"]]])],8,ie)):e(m)?(t(),l(f,{key:1},[a[2]||(a[2]=i("div",{class:"flex-1"},null,-1)),i("div",de,[i("div",ue,[u(h,{class:"z-10 !rounded-lg !px-2 !bg-[#ff133e]",size:"small",type:"primary",disabled:s.disabled,onClick:V},{default:b(()=>[u(p,{class:"mr-1",icon:"duplicate"}),a[1]||(a[1]=j(" Copy Base "))]),_:1},8,["disabled"])])])],64)):y("",!0),u(B,{"is-view-toolbar":s.isViewToolbar},null,8,["is-view-toolbar"])],64)}}});export{he as default};
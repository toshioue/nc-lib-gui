const __vite__fileDeps=["./B2_HDijx.js","./DZZ6t_j4.js","./entry.DIDWwc7m.css","./BmNyaTYf.js","./Cy50pBgZ.js","./DKN1hQ6S.js","./BQuyMdA-.js","./BQQOEPN4.js","./vll-Pnjv.js","./B5RRVMt5.js","./DGj1ycqW.js","./DyDFI6NE.js","./links.C8uCzV-l.css","./C4K5fdHe.js","./Dwil3It4.js","./RichText.M7uMQ9pA.css","./DaRAoaed.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{e as ue,bL as v,g2 as de,r as a,aC as pe,h_ as me,i1 as ve,aD as ce,i2 as fe,i3 as ye,i4 as xe,hK as ge,L as we,ab as be,ha as he,f as A,F as N,ad as ke,o as u,c as g,a as H,N as e,S as w,b as M,O as C,a8 as S,aJ as c,P as Ee,dk as Le,W as d,t as P,Q as $,w as D,d as _e,T as Te,U as Ce,R as G,X as J,a4 as Q,Z as Ie,$ as He,ca as Me,_ as $e}from"./DZZ6t_j4.js";import Re from"./37hePIet.js";import{B as R}from"./C4K5fdHe.js";import{_ as ze}from"./DGj1ycqW.js";import"./BQuyMdA-.js";import"./BQQOEPN4.js";import"./vll-Pnjv.js";const Ve=J(()=>Q(()=>import("./B2_HDijx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url).then(b=>b.default||b)),je=J(()=>Q(()=>import("./DaRAoaed.js"),__vite__mapDeps([16,1,2]),import.meta.url).then(b=>b.default||b)),Be={key:0,class:"w-full"},Ne=["rows","disabled"],Se={key:3,class:"nc-null uppercase"},Pe={key:5},De={class:"flex max-w-38"},Ke={class:"truncate"},Oe={key:1,class:"p-3 pb-0 h-full"},Ue=ue({__name:"TextArea",props:{modelValue:{},isFocus:{type:Boolean},virtual:{type:Boolean}},emits:["update:modelValue"],setup(b,{emit:Z}){const X=b,ee=Z,p=v(de),k=v(pe,a(!1)),I=v(me,a(!1)),m=v(ve,a(1)),l=v(ce,a(!1)),K=v(fe,a(!1)),te=v(ye,a(!1)),ne=v(xe,a(!1)),y=v(ge,a(!1)),{showNull:oe}=we(),o=be(X,"modelValue",ee,{shouldEmit:()=>!y.value}),r=v(he,a(!1)),x=a(),E=a(),L=a(!1),le=t=>!r.value&&!I.value&&!l.value&&(t==null?void 0:t.focus()),O=A(()=>r.value?36*4:!m.value||m.value===1||I.value?36:m.value*36),_=A(()=>y.value&&!r.value&&(te.value||ne.value)?6:m.value),s=a(!1),U=a(null),Y=a(null);N(s,()=>{s.value&&setTimeout(()=>{var t;(t=Y.value)==null||t.focus()},100)}),ke(U,t=>{var n;(n=t.target)!=null&&n.className.includes("nc-long-text-toggle-expand")||(s.value=!1)});const ae=()=>{X.virtual&&(s.value=!0,k.value=!0)},z=A(()=>{var n,f,h;let t={};return typeof((n=p==null?void 0:p.value)==null?void 0:n.meta)=="string"?t=JSON.parse((f=p==null?void 0:p.value)==null?void 0:f.meta):t=((h=p==null?void 0:p.value)==null?void 0:h.meta)??{},t==null?void 0:t.richMode}),F=()=>{s.value=!0},q=t=>{var n,f,h,V,j,B;L.value&&(t.stopPropagation(),x.value={top:t.clientY-(((n=E.value)==null?void 0:n.top)||0)>0?t.clientY-(((f=E.value)==null?void 0:f.top)||0):((h=x.value)==null?void 0:h.top)||0,left:t.clientX-(((V=E.value)==null?void 0:V.left)||0)>-16?t.clientX-(((j=E.value)==null?void 0:j.left)||0):((B=x.value)==null?void 0:B.left)||0})},W=t=>{L.value&&(t.stopPropagation(),L.value=!1,x.value=void 0,E.value=void 0,document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",W))};N(x,()=>{const t=document.querySelector(".nc-long-text-expanded-modal .ant-modal-content");!t||!x.value||(t.style.transform="none",t.style.left=`${x.value.left}px`,t.style.top=`${x.value.top}px`)},{deep:!0});const se=t=>{if(I.value)return;const n=document.querySelector(".nc-long-text-expanded-modal .ant-modal-content");E.value={top:t.clientY-n.getBoundingClientRect().top,left:t.clientX-n.getBoundingClientRect().left+16},document.addEventListener("mousemove",q),document.addEventListener("mouseup",W),L.value=!0};N(k,()=>{k.value&&z.value&&(s.value=!0)});const T=t=>{t.stopPropagation()};return N(U,()=>{if(!I.value)return;const t=document.querySelector(".nc-long-text-expanded-modal");s.value&&(t!=null&&t.parentElement)?(t.parentElement.addEventListener("click",T),t.parentElement.addEventListener("mousedown",T),t.parentElement.addEventListener("mouseup",T)):t!=null&&t.parentElement&&(t.parentElement.removeEventListener("click",T),t.parentElement.removeEventListener("mousedown",T),t.parentElement.removeEventListener("mouseup",T))}),(t,n)=>{const f=Ve,h=je,V=Ie,j=He,B=Re,re=ze,ie=Me;return u(),g("div",null,[H("div",{class:w(["flex flex-row w-full long-text-wrapper items-center",{"min-h-10":e(m)!==1||e(r),"min-h-5.5":e(m)===1&&!e(r),"h-full w-full":e(l)}])},[e(l)&&e(z)?(u(),g("div",Be,[H("div",{class:w(["w-full relative w-full px-0",{"pt-11":!e(y)}])},[M(f,{value:e(o),"onUpdate:value":n[0]||(n[0]=i=>C(o)?o.value=i:null),class:w({"border-t-1 border-gray-100 allow-vertical-resize":!e(y)}),autofocus:!1,"show-menu":"","read-only":e(y)},null,8,["value","class","read-only"])],2)])):e(z)?(u(),g("div",{key:1,class:w(["w-full cursor-pointer nc-readonly-rich-text-wrapper",{"nc-readonly-rich-text-grid ":!e(r)&&!e(l),"nc-readonly-rich-text-sort-height":e(_)===1&&!e(r)&&!e(l)}]),style:S({maxHeight:e(l)?void 0:e(r)?`${e(O)}px`:`${21*("rowHeightTruncateLines"in t?t.rowHeightTruncateLines:e(R))(e(_))}px`,minHeight:e(l)?void 0:e(r)?`${e(O)}px`:`${21*("rowHeightTruncateLines"in t?t.rowHeightTruncateLines:e(R))(e(_))}px`}),onDblclick:F,onKeydown:c(F,["enter"])},[M(f,{value:e(o),"onUpdate:value":n[1]||(n[1]=i=>C(o)?o.value=i:null),"sync-value-change":"","read-only":""},null,8,["value"])],38)):e(k)&&!e(s)||e(l)?Ee((u(),g("textarea",{key:2,ref:le,"onUpdate:modelValue":n[2]||(n[2]=i=>C(o)?o.value=i:null),rows:e(l)?5:4,class:w(["h-full w-full outline-none border-none nc-longtext-scrollbar",{"p-2":e(k),"py-1 h-full":e(l),"px-2":e(r)}]),style:S({minHeight:e(l)?"117px":`${e(O)}px`,maxHeight:"min(800px, calc(100vh - 200px))"}),disabled:e(y),onBlur:n[3]||(n[3]=i=>k.value=!1),onKeydown:[n[4]||(n[4]=d(()=>{},["alt","stop"])),n[5]||(n[5]=c(d(()=>{},["alt","stop"]),["enter"])),n[6]||(n[6]=c(d(()=>{},["shift","stop"]),["enter"])),n[7]||(n[7]=c(d(()=>{},["stop"]),["down"])),n[8]||(n[8]=c(d(()=>{},["stop"]),["left"])),n[9]||(n[9]=c(d(()=>{},["stop"]),["right"])),n[10]||(n[10]=c(d(()=>{},["stop"]),["up"])),n[11]||(n[11]=c(d(()=>{},["stop"]),["delete"]))],onSelectstartCapture:n[12]||(n[12]=d(()=>{},["stop"])),onMousedown:n[13]||(n[13]=d(()=>{},["stop"]))},null,46,Ne)),[[Le,e(o)]]):e(o)===null&&e(oe)?(u(),g("span",Se,P(t.$t("general.null")),1)):e(m)?(u(),$(h,{key:4,value:e(o),lines:("rowHeightTruncateLines"in t?t.rowHeightTruncateLines:e(R))(e(_)),class:"nc-text-area-clamped-text",style:S({"word-break":"break-word","max-height":`${25*("rowHeightTruncateLines"in t?t.rowHeightTruncateLines:e(R))(e(_))}px`,"my-auto":("rowHeightTruncateLines"in t?t.rowHeightTruncateLines:e(R))(e(_))===1}),onClick:ae},null,8,["value","lines","style"])):(u(),g("span",Pe,P(e(o)),1)),!e(s)&&!e(l)?(u(),$(j,{key:6,placement:"bottom",class:w(["nc-action-icon !absolute !hidden nc-text-area-expand-btn group-hover:block z-3",{"right-1":e(l),"right-0":!e(l),"top-0":e(K)&&!e(r)&&!e(l)&&!(!e(m)||e(m)===1),"top-1":!(e(K)&&!e(r)&&!e(l))}]),style:S(e(K)&&!e(r)&&!e(l)&&(!e(m)||e(m)===1)?{top:"50%",transform:"translateY(-50%)"}:void 0)},{title:D(()=>[_e(P(t.$t("title.expand")),1)]),default:D(()=>[M(V,{type:"secondary",size:"xsmall","data-testid":"attachment-cell-file-picker-button",class:"!p-0 !w-5 !h-5 !min-w-[fit-content]",onClick:d(F,["stop"])},{default:D(()=>[(u(),$(Te(("iconMap"in t?t.iconMap:e(Ce)).expand),{class:"transform !group-hover:text-grey-800 text-gray-700 text-xs"}))]),_:1})]),_:1},8,["class","style"])):G("",!0)],2),e(s)?(u(),$(ie,{key:0,visible:e(s),"onUpdate:visible":n[19]||(n[19]=i=>C(s)?s.value=i:null),closable:!1,footer:null,"wrap-class-name":"nc-long-text-expanded-modal",mask:!0,"mask-closable":!1,"mask-style":{zIndex:1051},"z-index":1052},{default:D(()=>[H("div",{ref_key:"inputWrapperRef",ref:U,class:w(["flex flex-col py-3 w-full expanded-cell-input relative",{"cursor-move":e(L)}]),onKeydown:n[18]||(n[18]=c(d(()=>{},["stop"]),["enter"]))},[e(p)?(u(),g("div",{key:0,class:w(["flex flex-row gap-x-1 items-center font-medium pl-3 pb-2.5 border-b-1 border-gray-100 overflow-hidden",{"select-none":e(L),"cursor-move":!e(I)}]),onMousedown:se},[M(B,{class:"flex"}),H("div",De,[H("span",Ke,P(e(p).title),1)])],34)):G("",!0),e(z)?(u(),$(f,{key:2,value:e(o),"onUpdate:value":n[17]||(n[17]=i=>C(o)?o.value=i:null),"show-menu":"","full-mode":"","read-only":e(y)},null,8,["value","read-only"])):(u(),g("div",Oe,[M(re,{ref_key:"inputRef",ref:Y,value:e(o),"onUpdate:value":n[14]||(n[14]=i=>C(o)?o.value=i:null),class:"nc-text-area-expanded !py-1 !px-3 !text-black !cursor-text !min-h-[210px] !rounded-lg focus:border-brand-500 disabled:!bg-gray-50 nc-longtext-scrollbar",placeholder:t.$t("activity.enterText"),style:{resize:"both"},disabled:e(y),onKeydown:[n[15]||(n[15]=c(i=>s.value=!1,["escape"])),n[16]||(n[16]=d(()=>{},["alt","stop"]))]},null,8,["value","placeholder","disabled"])]))],34)]),_:1},8,["visible"])):G("",!0)])}}}),Je=$e(Ue,[["__scopeId","data-v-f1ccbcf7"]]);export{Je as default};
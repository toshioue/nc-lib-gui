const __vite__fileDeps=["./DMqpj0ud.js","./B2hUoZAs.js","./entry.B8GgT5QA.css","./D9EHdJGP.js","./Cy50pBgZ.js","./BWYzyVlv.js","./CwHJfKcC.js","./BQQOEPN4.js","./C9qKCFvP.js","./BGKYJ52S.js","./i4toF4kp.js","./kd0F6MQ0.js","./links.C8uCzV-l.css","./BXXS6TCz.js","./RichText.M7uMQ9pA.css","./BQZ0HS0P.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as ue,bL as m,fH as de,r as a,ay as pe,hp as ce,hs as me,az as ve,ht as fe,hu as ye,hv as xe,hf as ge,N as we,ac as he,gx as be,g as A,H as N,ae as ke,o as u,c as g,a as I,P as e,T as w,b as M,Q as H,a8 as S,aF as v,R as Ee,dd as _e,Y as c,t as P,U as R,w as U,d as Le,V as Te,W as He,S as G,Z as J,a5 as Q,a2 as Ce,ap as Ie,ca as Me,_ as Re}from"./B2hUoZAs.js";import $e from"./DSjSw5ad.js";import{B as $}from"./BXXS6TCz.js";import{_ as ze}from"./i4toF4kp.js";import"./CwHJfKcC.js";import"./BQQOEPN4.js";import"./C9qKCFvP.js";const Ve=J(()=>Q(()=>import("./DMqpj0ud.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url).then(h=>h.default||h)),je=J(()=>Q(()=>import("./BQZ0HS0P.js"),__vite__mapDeps([15,1,2]),import.meta.url).then(h=>h.default||h)),Be={key:0,class:"w-full"},Ne=["rows","disabled"],Se={key:3,class:"nc-null uppercase"},Pe={key:5},Ue={class:"flex max-w-38"},De={class:"truncate"},Ke={key:1,class:"p-3 pb-0 h-full"},Oe=ue({__name:"TextArea",props:{modelValue:{},isFocus:{type:Boolean},virtual:{type:Boolean}},emits:["update:modelValue"],setup(h,{emit:Z}){const Y=h,ee=Z,d=m(de),k=m(pe,a(!1)),C=m(ce,a(!1)),p=m(me,a(1)),l=m(ve,a(!1)),D=m(fe,a(!1)),te=m(ye,a(!1)),ne=m(xe,a(!1)),y=m(ge,a(!1)),{showNull:oe}=we(),o=he(Y,"modelValue",ee,{shouldEmit:()=>!y.value}),r=m(be,a(!1)),x=a(),E=a(),_=a(!1),le=t=>!r.value&&!C.value&&!l.value&&(t==null?void 0:t.focus()),K=A(()=>r.value?36*4:!p.value||p.value===1||C.value?36:p.value*36),L=A(()=>y.value&&!r.value&&(te.value||ne.value)?6:p.value),s=a(!1),O=a(null),q=a(null);N(s,()=>{s.value&&setTimeout(()=>{var t;(t=q.value)==null||t.focus()},100)}),ke(O,t=>{var n;(n=t.target)!=null&&n.className.includes("nc-long-text-toggle-expand")||(s.value=!1)});const ae=()=>{Y.virtual&&(s.value=!0,k.value=!0)},z=A(()=>{var n,f,b;let t={};return typeof((n=d==null?void 0:d.value)==null?void 0:n.meta)=="string"?t=JSON.parse((f=d==null?void 0:d.value)==null?void 0:f.meta):t=((b=d==null?void 0:d.value)==null?void 0:b.meta)??{},t==null?void 0:t.richMode}),F=()=>{s.value=!0},W=t=>{var n,f,b,V,j,B;_.value&&(t.stopPropagation(),x.value={top:t.clientY-(((n=E.value)==null?void 0:n.top)||0)>0?t.clientY-(((f=E.value)==null?void 0:f.top)||0):((b=x.value)==null?void 0:b.top)||0,left:t.clientX-(((V=E.value)==null?void 0:V.left)||0)>-16?t.clientX-(((j=E.value)==null?void 0:j.left)||0):((B=x.value)==null?void 0:B.left)||0})},X=t=>{_.value&&(t.stopPropagation(),_.value=!1,x.value=void 0,E.value=void 0,document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",X))};N(x,()=>{const t=document.querySelector(".nc-long-text-expanded-modal .ant-modal-content");!t||!x.value||(t.style.transform="none",t.style.left=`${x.value.left}px`,t.style.top=`${x.value.top}px`)},{deep:!0});const se=t=>{if(C.value)return;const n=document.querySelector(".nc-long-text-expanded-modal .ant-modal-content");E.value={top:t.clientY-n.getBoundingClientRect().top,left:t.clientX-n.getBoundingClientRect().left+16},document.addEventListener("mousemove",W),document.addEventListener("mouseup",X),_.value=!0};N(k,()=>{k.value&&z.value&&(s.value=!0)});const T=t=>{t.stopPropagation()};return N(O,()=>{if(!C.value)return;const t=document.querySelector(".nc-long-text-expanded-modal");s.value&&(t!=null&&t.parentElement)?(t.parentElement.addEventListener("click",T),t.parentElement.addEventListener("mousedown",T),t.parentElement.addEventListener("mouseup",T)):t!=null&&t.parentElement&&(t.parentElement.removeEventListener("click",T),t.parentElement.removeEventListener("mousedown",T),t.parentElement.removeEventListener("mouseup",T))}),(t,n)=>{const f=Ve,b=je,V=Ce,j=Ie,B=$e,re=ze,ie=Me;return u(),g("div",null,[I("div",{class:w(["flex flex-row w-full long-text-wrapper",{"min-h-10":e(p)!==1||e(r),"min-h-5.5":e(p)===1&&!e(r),"h-full w-full":e(l)}])},[e(l)&&e(z)?(u(),g("div",Be,[I("div",{class:w(["w-full relative w-full px-0",{"pt-11":!e(y)}])},[M(f,{value:e(o),"onUpdate:value":n[0]||(n[0]=i=>H(o)?o.value=i:null),class:w({"border-t-1 border-gray-100 allow-vertical-resize":!e(y)}),autofocus:!1,"show-menu":"","read-only":e(y)},null,8,["value","class","read-only"])],2)])):e(z)?(u(),g("div",{key:1,class:w(["w-full cursor-pointer nc-readonly-rich-text-wrapper",{"nc-readonly-rich-text-grid ":!e(r)&&!e(l),"nc-readonly-rich-text-sort-height":e(L)===1&&!e(r)&&!e(l)}]),style:S({maxHeight:e(l)?void 0:e(r)?`${e(K)}px`:`${21*("rowHeightTruncateLines"in t?t.rowHeightTruncateLines:e($))(e(L))}px`,minHeight:e(l)?void 0:e(r)?`${e(K)}px`:`${21*("rowHeightTruncateLines"in t?t.rowHeightTruncateLines:e($))(e(L))}px`}),onDblclick:F,onKeydown:v(F,["enter"])},[M(f,{value:e(o),"onUpdate:value":n[1]||(n[1]=i=>H(o)?o.value=i:null),"sync-value-change":"","read-only":""},null,8,["value"])],38)):e(k)&&!e(s)||e(l)?Ee((u(),g("textarea",{key:2,ref:le,"onUpdate:modelValue":n[2]||(n[2]=i=>H(o)?o.value=i:null),rows:e(l)?5:4,class:w(["h-full w-full outline-none border-none nc-longtext-scrollbar",{"p-2":e(k),"py-1 h-full":e(l),"px-2":e(r)}]),style:S({minHeight:e(l)?"117px":`${e(K)}px`,maxHeight:"min(800px, calc(100vh - 200px))"}),disabled:e(y),onBlur:n[3]||(n[3]=i=>k.value=!1),onKeydown:[n[4]||(n[4]=v(c(()=>{},["alt","stop"]),["enter"])),n[5]||(n[5]=v(c(()=>{},["shift","stop"]),["enter"])),n[6]||(n[6]=v(c(()=>{},["stop"]),["down"])),n[7]||(n[7]=v(c(()=>{},["stop"]),["left"])),n[8]||(n[8]=v(c(()=>{},["stop"]),["right"])),n[9]||(n[9]=v(c(()=>{},["stop"]),["up"])),n[10]||(n[10]=v(c(()=>{},["stop"]),["delete"]))],onSelectstartCapture:n[11]||(n[11]=c(()=>{},["stop"])),onMousedown:n[12]||(n[12]=c(()=>{},["stop"]))},null,46,Ne)),[[_e,e(o)]]):e(o)===null&&e(oe)?(u(),g("span",Se,P(t.$t("general.null")),1)):e(p)?(u(),R(b,{key:4,value:e(o),lines:("rowHeightTruncateLines"in t?t.rowHeightTruncateLines:e($))(e(L)),class:"nc-text-area-clamped-text",style:S({"word-break":"break-word","max-height":`${25*("rowHeightTruncateLines"in t?t.rowHeightTruncateLines:e($))(e(L))}px`,"my-auto":("rowHeightTruncateLines"in t?t.rowHeightTruncateLines:e($))(e(L))===1}),onClick:ae},null,8,["value","lines","style"])):(u(),g("span",Pe,P(e(o)),1)),!e(s)&&!e(l)?(u(),R(j,{key:6,placement:"bottom",class:w(["nc-action-icon !absolute !hidden nc-text-area-expand-btn group-hover:block z-3",{"right-1":e(l),"right-0":!e(l),"top-0":e(D)&&!e(r)&&!e(l)&&!(!e(p)||e(p)===1),"top-1":!(e(D)&&!e(r)&&!e(l))}]),style:S(e(D)&&!e(r)&&!e(l)&&(!e(p)||e(p)===1)?{top:"50%",transform:"translateY(-50%)"}:void 0)},{title:U(()=>[Le(P(t.$t("title.expand")),1)]),default:U(()=>[M(V,{type:"secondary",size:"xsmall","data-testid":"attachment-cell-file-picker-button",class:"!p-0 !w-5 !h-5 !min-w-[fit-content]",onClick:c(F,["stop"])},{default:U(()=>[(u(),R(Te(("iconMap"in t?t.iconMap:e(He)).expand),{class:"transform !group-hover:text-grey-800 text-gray-700 text-xs"}))]),_:1})]),_:1},8,["class","style"])):G("",!0)],2),e(s)?(u(),R(ie,{key:0,visible:e(s),"onUpdate:visible":n[17]||(n[17]=i=>H(s)?s.value=i:null),closable:!1,footer:null,"wrap-class-name":"nc-long-text-expanded-modal",mask:!0,"mask-closable":!1,"mask-style":{zIndex:1051},"z-index":1052},{default:U(()=>[I("div",{ref_key:"inputWrapperRef",ref:O,class:w(["flex flex-col py-3 w-full expanded-cell-input relative",{"cursor-move":e(_)}]),onKeydown:n[16]||(n[16]=v(c(()=>{},["stop"]),["enter"]))},[e(d)?(u(),g("div",{key:0,class:w(["flex flex-row gap-x-1 items-center font-medium pl-3 pb-2.5 border-b-1 border-gray-100 overflow-hidden",{"select-none":e(_),"cursor-move":!e(C)}]),onMousedown:se},[M(B,{class:"flex"}),I("div",Ue,[I("span",De,P(e(d).title),1)])],34)):G("",!0),e(z)?(u(),R(f,{key:2,value:e(o),"onUpdate:value":n[15]||(n[15]=i=>H(o)?o.value=i:null),"show-menu":"","full-mode":"","read-only":e(y)},null,8,["value","read-only"])):(u(),g("div",Ke,[M(re,{ref_key:"inputRef",ref:q,value:e(o),"onUpdate:value":n[13]||(n[13]=i=>H(o)?o.value=i:null),class:"nc-text-area-expanded !py-1 !px-3 !text-black !cursor-text !min-h-[210px] !rounded-lg focus:border-brand-500 disabled:!bg-gray-50 nc-longtext-scrollbar",placeholder:t.$t("activity.enterText"),style:{resize:"both"},disabled:e(y),onKeydown:n[14]||(n[14]=v(i=>s.value=!1,["escape"]))},null,8,["value","placeholder","disabled"])]))],34)]),_:1},8,["visible"])):G("",!0)])}}}),Je=Re(Oe,[["__scopeId","data-v-11052f39"]]);export{Je as default};
import{f as K,N as O,bN as i,fQ as T,r,aE as z,hH as Q,hr as U,ad as G,gV as H,aF as L,g,df as W,o as y,c as b,P as s,R as Y,f5 as J,Q as X,aL as p,Y as u,t as E,b as Z,U as ee,b1 as oe,_ as se}from"./Cgw6cdOy.js";import{_ as te}from"./Cd1fRcFb.js";import"./BohSct8s.js";const le=["tabindex"],ne=["type","placeholder"],ae={key:1,class:"nc-cell-field nc-null uppercase"},re={key:2,class:"px-2"},ue={key:3,class:"nc-cell-field"},ce=K({__name:"Percent",props:{modelValue:{},placeholder:{}},emits:["update:modelValue"],setup(S,{emit:k}){const M=S,q=k,{showNull:j}=O(),C=i(T),d=i(z,r(!1)),w=i(Q,r(!1)),F=i(U,r(!1)),a=G(M,"modelValue",q),x=r(),f=i(H,r(!1)),v=i(L),V=o=>!f.value&&!w.value&&!v.value&&(o==null?void 0:o.focus()),m=r(!1),c=r(!1),t=g({get:()=>v.value&&!w.value&&a.value&&!m.value&&!isNaN(Number(a.value))?`${a.value}%`:a.value,set:o=>{o===""?a.value=null:v.value&&!w.value?a.value=isNaN(Number(o))?o:Number(o):a.value=o}}),N=g(()=>{var o;return{is_progress:!1,...W((o=C.value)==null?void 0:o.meta)}}),P=g(()=>v.value&&!w.value?"text":"number"),R=()=>{d&&(d.value=!1),m.value=!1,c.value=!1},D=()=>{m.value=!0,d.value=!0,c.value=!0},$=()=>{m.value=!0,d.value=!0,c.value=!0,oe(()=>{var o,e,l,n;(e=(o=x.value)==null?void 0:o.querySelector("input"))==null||e.focus(),(n=(l=x.value)==null?void 0:l.querySelector("input"))==null||n.select()})},h=()=>{c.value=!0},A=()=>{m.value||(c.value=!1)},B=o=>{if(o.shiftKey&&(f.value||v.value)){o.preventDefault();const e=Array.from(document.querySelectorAll(`${f.value?".nc-expanded-form-row":".nc-form-wrapper"} .nc-data-cell`)).findIndex(l=>l.querySelector(".nc-filter-value-select")===x.value);if(e>=0){const l=document.querySelectorAll(`${f.value?".nc-expanded-form-row":".nc-form-wrapper"} .nc-data-cell`);for(let n=e-1;n>=0;n--){const _=l[n],I=_.querySelector('[tabindex="0"]')??_.querySelector("input")??_.querySelector("textarea")??_.querySelector("button");if(I){I.focus();break}}}}};return(o,e)=>{const l=te;return y(),b("div",{ref_key:"wrapperRef",ref:x,tabindex:s(F)?-1:0,class:ee(["nc-filter-value-select w-full focus:outline-transparent",s(F)?"cursor-not-allowed pointer-events-none":""]),onMouseover:h,onMouseleave:A,onFocus:$},[!s(F)&&s(d)&&(!s(f)||s(c)||!s(N).is_progress)?Y((y(),b("input",{key:0,ref:V,"onUpdate:modelValue":e[0]||(e[0]=n=>X(t)?t.value=n:null),class:"nc-cell-field w-full !border-none !outline-none focus:ring-0 py-1",type:s(P),placeholder:o.placeholder,onBlur:R,onFocus:D,onKeydown:[e[1]||(e[1]=p(u(()=>{},["stop"]),["down"])),e[2]||(e[2]=p(u(()=>{},["stop"]),["left"])),e[3]||(e[3]=p(u(()=>{},["stop"]),["right"])),e[4]||(e[4]=p(u(()=>{},["stop"]),["up"])),e[5]||(e[5]=p(u(()=>{},["stop"]),["delete"])),p(B,["tab"])],onSelectstartCapture:e[6]||(e[6]=u(()=>{},["stop"])),onMousedown:e[7]||(e[7]=u(()=>{},["stop"]))},null,40,ne)),[[J,s(t)]]):s(t)===null&&s(j)?(y(),b("span",ae,E(o.$t("general.null")),1)):s(N).is_progress===!0&&s(t)!==null&&s(t)!==void 0?(y(),b("div",re,[Z(l,{percent:Number(parseFloat(s(t).toString()).toFixed(2)),size:"small",status:"normal","stroke-color":"#3366FF","trail-color":"#E5E5E5","show-info":!1},null,8,["percent"])])):(y(),b("span",ue,E(s(t))+" "+E(s(t)?"":" "),1))],42,le)}}}),fe=se(ce,[["__scopeId","data-v-3fba2036"]]);export{fe as default};
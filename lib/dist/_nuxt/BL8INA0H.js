import{e as F,L as j,bL as a,aC as C,r as f,h_ as V,ab as g,f as B,ha as D,aD as O,N as l,P as K,dk as L,o as d,c as p,O as N,aJ as n,W as o,t as m,_ as S}from"./DZZ6t_j4.js";const $={key:1,class:"nc-cell-field nc-null uppercase"},G={key:2,class:"nc-cell-field"},J=F({__name:"Float",props:{modelValue:{}},emits:["update:modelValue"],setup(v,{emit:w}){const y=v,E=w,{showNull:I}=j(),i=a(C),M=a(V,f(!1)),u=g(y,"modelValue",E),t=B({get:()=>u.value,set:e=>{e===""?u.value=null:u.value=e}}),b=a(D,f(!1)),k=a(O),x=e=>!b.value&&!M.value&&!k.value&&(e==null?void 0:e.focus());return(e,s)=>l(i)?K((d(),p("input",{key:0,ref:x,"onUpdate:modelValue":s[0]||(s[0]=r=>N(t)?t.value=r:null),class:"nc-cell-field outline-none px-1 border-none w-full h-full",type:"number",step:"0.1",onBlur:s[1]||(s[1]=r=>i.value=!1),onKeydown:[s[2]||(s[2]=n(o(()=>{},["stop"]),["down"])),s[3]||(s[3]=n(o(()=>{},["stop"]),["left"])),s[4]||(s[4]=n(o(()=>{},["stop"]),["right"])),s[5]||(s[5]=n(o(()=>{},["stop"]),["up"])),s[6]||(s[6]=n(o(()=>{},["stop"]),["delete"])),s[7]||(s[7]=o(()=>{},["alt","stop"]))],onSelectstartCapture:s[8]||(s[8]=o(()=>{},["stop"])),onMousedown:s[9]||(s[9]=o(()=>{},["stop"]))},null,544)),[[L,l(t)]]):l(t)===null&&l(I)?(d(),p("span",$,m(e.$t("general.null")),1)):(d(),p("span",G,m(l(t)),1))}}),R=S(J,[["__scopeId","data-v-6571826d"]]);export{R as default};
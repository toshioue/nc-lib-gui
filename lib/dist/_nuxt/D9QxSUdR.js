import{f as K,N as S,bN as o,aE as F,r as d,hH as O,hr as R,gV as B,aF as L,fQ as P,ad as A,g as f,df as Q,P as s,R as U,f5 as $,o as m,c as y,Q as G,aL as r,Y as l,t as g,aM as H,_ as T}from"./Cgw6cdOy.js";const Y=["type"],q={key:1,class:"nc-cell-field nc-null uppercase"},z={key:2,class:"nc-cell-field"},J=K({__name:"Integer",props:{modelValue:{}},emits:["update:modelValue"],setup(b,{emit:w}){const N=b,I=w,{showNull:k}=S(),c=o(F),i=o(O,d(!1)),M=o(R,d(!1)),C=o(B,d(!1)),p=o(L),D=o(P,null),n=A(N,"modelValue",I),E=f(()=>n.value===null||isNaN(Number(n.value))?null:Q(D.value.meta).isLocaleString?Number(n.value).toLocaleString():Number(n.value)),u=f({get:()=>n.value,set:e=>{e===""?n.value=null:p.value&&!i.value?n.value=isNaN(Number(e))?e:Number(e):n.value=e}}),j=f(()=>p.value&&!i.value?"text":"number"),x=e=>!C.value&&!i.value&&!p.value&&(e==null?void 0:e.focus());function V(e){var a,v;if((H()?e.metaKey:e.ctrlKey)&&!e.altKey)switch(e.keyCode){case 90:{e.stopPropagation();break}}if(e.key===".")return e.preventDefault();e.key==="ArrowDown"?(e.preventDefault(),e.target.type="text",(a=e.target)==null||a.setSelectionRange(e.target.value.length,e.target.value.length),e.target.type="number"):e.key==="ArrowUp"&&(e.preventDefault(),e.target.type="text",(v=e.target)==null||v.setSelectionRange(0,0),e.target.type="number")}return(e,t)=>!s(M)&&s(c)?U((m(),y("input",{key:0,ref:x,"onUpdate:modelValue":t[0]||(t[0]=a=>G(u)?u.value=a:null),class:"nc-cell-field outline-none py-1 border-none w-full h-full",type:s(j),style:{"letter-spacing":"0.06rem"},onBlur:t[1]||(t[1]=a=>c.value=!1),onKeydown:[V,t[2]||(t[2]=r(l(()=>{},["stop"]),["down"])),t[3]||(t[3]=r(l(()=>{},["stop"]),["left"])),t[4]||(t[4]=r(l(()=>{},["stop"]),["right"])),t[5]||(t[5]=r(l(()=>{},["stop"]),["up"])),t[6]||(t[6]=r(l(()=>{},["stop"]),["delete"]))],onSelectstartCapture:t[7]||(t[7]=l(()=>{},["stop"])),onMousedown:t[8]||(t[8]=l(()=>{},["stop"]))},null,40,Y)),[[$,s(u)]]):s(u)===null&&s(k)?(m(),y("span",q,g(e.$t("general.null")),1)):(m(),y("span",z,g(s(E)),1))}}),X=T(J,[["__scopeId","data-v-99e6cbcf"]]);export{X as default};
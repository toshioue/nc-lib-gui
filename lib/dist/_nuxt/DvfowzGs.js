const __vite__fileDeps=["./DaRAoaed.js","./DZZ6t_j4.js","./entry.DIDWwc7m.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{e as M,bL as s,r as u,i1 as O,L as B,ag as D,aC as L,h_ as R,g2 as K,aD as S,hK as T,f as I,dc as g,ha as _,F as $,ah as z,N as n,P as A,dk as H,o as m,c as p,O as h,aJ as r,W as o,t as G,b as J,Q,X as U,a4 as W}from"./DZZ6t_j4.js";import{_ as f}from"./BCU2uY6p.js";import"./BDAIZopQ.js";import"./ByVBARmO.js";import"./C3jLTHF4.js";const X=U(()=>W(()=>import("./DaRAoaed.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(a=>a.default||a)),q={key:1,class:"nc-cell-field nc-null uppercase"},Y=["href","tabindex"],oe=M({__name:"PhoneNumber",props:{modelValue:{}},emits:["update:modelValue"],setup(a,{emit:C}){const E=C,v=s(O,u(void 0)),{showNull:V}=B(),{t:j}=D(),d=s(L,u(!1)),x=s(R,u(!1)),c=s(K),y=s(S),b=s(T,u(!1)),i=u(a.modelValue),t=I({get:()=>a.modelValue,set:l=>{var e;i.value=l,(!((e=g(c.value.meta))!=null&&e.validate)||l&&f(l)||!l||y.value)&&E("update:modelValue",l)}}),P=I(()=>t.value&&f(t.value)),N=s(_,u(!1)),F=l=>!N.value&&!x.value&&!y.value&&(l==null?void 0:l.focus());return $(()=>d.value,()=>{var l;if((l=g(c.value.meta))!=null&&l.validate&&!d.value&&i.value&&!f(i.value)){z.error(j("msg.invalidPhoneNumber")),i.value=void 0;return}i.value=a.modelValue}),(l,e)=>{const k=X;return!n(b)&&n(d)?A((m(),p("input",{key:0,ref:F,"onUpdate:modelValue":e[0]||(e[0]=w=>h(t)?t.value=w:null),class:"nc-cell-field w-full outline-none py-1",onBlur:e[1]||(e[1]=w=>d.value=!1),onKeydown:[e[2]||(e[2]=r(o(()=>{},["stop"]),["down"])),e[3]||(e[3]=r(o(()=>{},["stop"]),["left"])),e[4]||(e[4]=r(o(()=>{},["stop"]),["right"])),e[5]||(e[5]=r(o(()=>{},["stop"]),["up"])),e[6]||(e[6]=r(o(()=>{},["stop"]),["delete"])),e[7]||(e[7]=o(()=>{},["alt","stop"]))],onSelectstartCapture:e[8]||(e[8]=o(()=>{},["stop"])),onMousedown:e[9]||(e[9]=o(()=>{},["stop"]))},null,544)),[[H,n(t)]]):n(t)===null&&n(V)?(m(),p("span",q,G(l.$t("general.null")),1)):n(P)?(m(),p("a",{key:2,class:"py-1 underline inline-block nc-cell-field-link",href:`tel:${n(t)}`,target:"_blank",rel:"noopener noreferrer",tabindex:n(b)?-1:0},[J(k,{value:n(t),lines:n(v),class:"nc-cell-field"},null,8,["value","lines"])],8,Y)):(m(),Q(k,{key:3,value:n(t),lines:n(v),class:"nc-cell-field"},null,8,["value","lines"]))}}});export{oe as default};
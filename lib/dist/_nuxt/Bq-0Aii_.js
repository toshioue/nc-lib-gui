const __vite__fileDeps=["./BzKa-eOu.js","./Cgw6cdOy.js","./entry.DxI7QTvq.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as Q,g as w,P as e,o as r,c as v,a as b,f as G,ai as W,N as Y,bN as s,fQ as Z,aE as X,r as f,hH as ee,i7 as le,hK as te,hr as ne,gV as oe,aF as ae,df as H,gJ as V,H as se,aj as re,R as ue,dn as ie,Q as de,aL as g,Y as c,t as P,S as q,w as _,b as h,d as ce,T as me,Z as fe,a6 as ve,a3 as pe}from"./Cgw6cdOy.js";import{_ as ye}from"./P9ghmVPN.js";const ge=t=>{if(t)try{return Object.entries(JSON.parse(t)).map(([u,i])=>[new RegExp(u),i])}catch(u){console.error(u);return}};function he(t){const i=Q().currentRoute,o=w(()=>({behavior:i.value.query.url_behavior,overlay:i.value.query.url_overlay,rules:ge(i.value.query.url_rules)})),C=w(()=>{var a;const m={behavior:o.value.behavior,overlay:o.value.overlay};if(o.value.rules&&(!o.value.behavior||!o.value.overlay)){for(const[k,j]of o.value.rules)if((a=e(t))!=null&&a.match(k))return Object.assign(m,j)}return m});return{cellUrlConfig:o.value,cellUrlOptions:C}}const we={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},xe=b("g",{fill:"currentColor"},[b("path",{d:"M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12"}),b("path",{d:"M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1m-1.5 2.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"})],-1),Ve=[xe];function _e(t,u){return r(),v("svg",we,[...Ve])}const be={name:"mi-circle-warning",render:_e},Ce=fe(()=>ve(()=>import("./BzKa-eOu.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.default||t)),ke={class:"flex flex-row items-center justify-between w-full h-full"},je={key:1,class:"nc-cell-field nc-null uppercase"},Ie={key:4,class:"w-9/10 overflow-ellipsis overflow-hidden"},Re={key:5,class:"mr-1 w-1/10"},Ee={class:"flex flex-row items-center"},Me=G({__name:"Url",props:{modelValue:{}},emits:["update:modelValue"],setup(t,{emit:u}){const i=u,{t:o}=W(),{showNull:C}=Y(),m=s(Z),a=s(X),k=s(ee,f(!1)),j=s(le,f(!1)),I=s(te,f(void 0)),R=s(ne,f(!1)),z=s(oe,f(!1)),E=s(ae),d=n=>{var l;return(l=n==null?void 0:n.trim)==null?void 0:l.call(n)},p=f(t.modelValue),x=w({get:()=>t.modelValue,set:n=>{var l;p.value=n,(!((l=H(m.value.meta))!=null&&l.validate)||n&&V(d(n))||!n||E.value)&&i("update:modelValue",n)}}),O=w(()=>t.modelValue&&V(d(t.modelValue))),U=w(()=>!t.modelValue||!V(d(t.modelValue))?"":/^https?:\/\//.test(d(t.modelValue))?d(t.modelValue):`https://${d(t.modelValue)}`),{cellUrlOptions:y}=he(U),K=n=>!z.value&&!k.value&&!E.value&&(n==null?void 0:n.focus());return se(()=>a.value,()=>{var n;if(!E.value&&((n=H(m.value.meta))!=null&&n.validate)&&!a.value&&p.value&&!V(d(p.value))){re.error(o("msg.error.invalidURL")),p.value=void 0;return}p.value=t.modelValue}),(n,l)=>{var B,L,S,$,F,T;const M=Ce,N=ye,A=be,J=pe;return r(),v("div",ke,[!e(R)&&e(a)?ue((r(),v("input",{key:0,ref:K,"onUpdate:modelValue":l[0]||(l[0]=D=>de(x)?x.value=D:null),class:"nc-cell-field outline-none w-full py-1 bg-transparent h-full",onBlur:l[1]||(l[1]=D=>a.value=!1),onKeydown:[l[2]||(l[2]=g(c(()=>{},["stop"]),["down"])),l[3]||(l[3]=g(c(()=>{},["stop"]),["left"])),l[4]||(l[4]=g(c(()=>{},["stop"]),["right"])),l[5]||(l[5]=g(c(()=>{},["stop"]),["up"])),l[6]||(l[6]=g(c(()=>{},["stop"]),["delete"]))],onSelectstartCapture:l[7]||(l[7]=c(()=>{},["stop"])),onMousedown:l[8]||(l[8]=c(()=>{},["stop"]))},null,544)),[[ie,e(x)]]):e(x)===null&&e(C)?(r(),v("span",je,P(n.$t("general.null")),1)):e(O)&&!((B=e(y))!=null&&B.overlay)?(r(),q(N,{key:2,"no-prefetch":"","no-rel":"",class:"py-1 z-3 underline nc-cell-field-link max-w-full",to:e(U),target:((L=e(y))==null?void 0:L.behavior)==="replace"?void 0:"_blank",tabindex:e(R)?-1:0},{default:_(()=>[h(M,{value:t.modelValue,lines:e(I),class:"nc-cell-field"},null,8,["value","lines"])]),_:1},8,["to","target","tabindex"])):e(O)&&!e(j)&&((S=e(y))!=null&&S.overlay)?(r(),q(N,{key:3,"no-prefetch":"","no-rel":"",class:"py-1 z-3 w-full h-full text-center !no-underline nc-cell-field-link max-w-full",to:e(U),target:(($=e(y))==null?void 0:$.behavior)==="replace"?void 0:"_blank",tabindex:e(R)?-1:0},{default:_(()=>[h(M,{value:e(y).overlay,lines:e(I),class:"nc-cell-field"},null,8,["value","lines"])]),_:1},8,["to","target","tabindex"])):(r(),v("span",Ie,[h(M,{value:t.modelValue,lines:e(I),class:"nc-cell-field"},null,8,["value","lines"])])),(F=e(m).meta)!=null&&F.validate&&!e(O)&&((T=t.modelValue)!=null&&T.length)&&!e(a)?(r(),v("div",Re,[h(J,{placement:"top"},{title:_(()=>[ce(P(e(o)("msg.error.invalidURL")),1)]),default:_(()=>[b("div",Ee,[h(A,{class:"text-red-400 h-4"})])]),_:1})])):me("",!0)])}}});export{Me as default};
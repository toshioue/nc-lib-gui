import{o as n,c,a as o,e as E,ag as T,L as B,gf as f,U as p,r as R,aE as z,cA as N,F as P,P as V,aF as H,N as i,Q as r,T as v,t as u,b as g,w as m,ao as x,at as M,d as C,O as D,a8 as I,S,R as U,y as Z,a9 as j,_ as F}from"./DZZ6t_j4.js";import{R as O,_ as G}from"./CFvUUxCy.js";import"./eX8_g88K.js";import"./vll-Pnjv.js";const W={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Q=o("path",{fill:"currentColor",d:"M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m0-2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4M5 13.28l2.45 1.49l-.65-2.81L9 10.08l-2.89-.25L5 7.19L3.87 9.83L1 10.08l2.18 1.88l-.68 2.81z"},null,-1),X=[Q];function Y(d,l){return n(),c("svg",W,[...X])}const q={name:"mdi-account-star",render:Y},J={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},K=o("path",{fill:"currentColor",d:"M12 15c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4M8 9a4 4 0 0 0 4 4a4 4 0 0 0 4-4m-4.5-7c-.3 0-.5.21-.5.5v3h-1V3s-2.25.86-2.25 3.75c0 0-.75.14-.75 1.25h10c-.05-1.11-.75-1.25-.75-1.25C16.25 3.86 14 3 14 3v2.5h-1v-3c0-.29-.19-.5-.5-.5z"},null,-1),ee=[K];function te(d,l){return n(),c("svg",J,[...ee])}const ne={name:"mdi-account-hard-hat",render:te},oe={class:"nc-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ae=o("path",{fill:"currentColor",d:"M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29m-94 74.71h46.58l17.28 37.45A28 28 0 0 0 128 177.6a28 28 0 0 0-40.57-8.15Zm3.7-8L128 81.55L147.59 124ZM132 192a20 20 0 0 1 40 0v16.83a91.3 91.3 0 0 1-40 11.07Zm-48 0a20 20 0 0 1 40 0v27.9a91.3 91.3 0 0 1-40-11.07Zm109.05 1.05A92.4 92.4 0 0 1 180 203.9V176a4.1 4.1 0 0 0-.37-1.68l-48-104a4 4 0 0 0-7.26 0l-48 104A4.1 4.1 0 0 0 76 176v27.9a92.4 92.4 0 0 1-13-10.85a92 92 0 1 1 130.1 0Z"},null,-1),se=[ae];function ie(d,l){return n(),c("svg",oe,[...se])}const ce={name:"ph-pencil-circle-thin",render:ie},le={class:"nc-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},re=o("path",{fill:"currentColor",d:"M168 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h68a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h68a4 4 0 0 0 0-8m64-16a96.11 96.11 0 0 1-96 96H48a12 12 0 0 1-12-12v-84a96 96 0 0 1 192 0m-8 0a88 88 0 0 0-176 0v84a4 4 0 0 0 4 4h84a88.1 88.1 0 0 0 88-88"},null,-1),ue=[re];function de(d,l){return n(),c("svg",le,[...ue])}const pe={name:"ph-chat-teardrop-text-thin",render:de},ve={class:"pointer flex items-center gap-4"},me={class:"nc-workspace-menu-item group"},he={class:"nc-workspace-menu-item group"},_e={class:"text-capitalize text-xs whitespace-nowrap"},we=E({__name:"PreviewAs",props:{float:{type:Boolean}},setup(d){const{$e:l}=Z(),{t:h}=T(),{previewAs:a}=B(),$=[{value:f.EDITOR,label:h("objects.roleType.editor")},{value:f.COMMENTER,label:h("objects.roleType.commenter")},{value:f.VIEWER,label:h("objects.roleType.viewer")}],b={owner:q,creator:ne,editor:ce,viewer:p.eye,commenter:pe},_=R({y:`${window.innerHeight-100}px`,x:`${window.innerWidth/2-250}px`}),w=e=>{_.value={y:`${e.clientY-10}px`,x:`${e.clientX-18}px`}};z(window,"mouseup",()=>{window.removeEventListener("mousemove",w,!0)},!1);const k=()=>{window.addEventListener("mousemove",w,!0)};return N(()=>{window.removeEventListener("mousemove",w,!0)}),P(a,e=>{l("a:navdraw:preview",{role:e}),window.location.reload()}),(e,s)=>{const A=O,L=G,y=j;return e.float?V((n(),c("div",{key:0,class:"floating-reset-btn nc-floating-preview-btn p-4",style:I({top:i(_).y,left:i(_).x})},[(n(),r(v(("iconMap"in e?e.iconMap:i(p)).drag),{class:"cursor-move text-white",onMousedown:k},null,32)),s[4]||(s[4]=o("div",{class:"divider"},null,-1)),o("div",ve,[o("span",null,u(e.$t("activity.previewAs")),1),g(L,{value:i(a),"onUpdate:value":s[0]||(s[0]=t=>D(a)?a.value=t:null),name:"radioGroup"},{default:m(()=>[(n(),c(x,null,M($,t=>g(A,{key:t.value,class:"capitalize !text-white",value:t.value},{default:m(()=>[C(u(t.label),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"]),s[3]||(s[3]=o("div",{class:"divider -ml-4"},null,-1)),o("div",{class:"flex items-center gap-2 cursor-pointer nc-preview-btn-exit-to-app",onClick:s[1]||(s[1]=t=>a.value=null)},[(n(),r(v(("iconMap"in e?e.iconMap:i(p)).exit))),C(" "+u(e.$t("general.close")),1)])])],4)),[[H,i(a)]]):(n(),c(x,{key:1},[(n(),c(x,null,M($,t=>g(y,{key:t.value,class:"nc-role-preview-menu",onClick:ge=>a.value=t.value},{default:m(()=>[o("div",me,[(n(),r(v(b[t.value]),{class:"group-hover:text-accent"})),o("span",{class:S(["capitalize",{"x-active--text":t.value===i(a)}])},u(t.label),3)])]),_:2},1032,["onClick"])),64)),i(a)?(n(),r(y,{key:0,onClick:s[2]||(s[2]=t=>a.value=null)},{default:m(()=>[o("div",he,[(n(),r(v(("iconMap"in e?e.iconMap:i(p)).close),{class:"group-hover:text-accent"})),o("span",_e,u(e.$t("activity.resetReview")),1)])]),_:1})):U("",!0)],64))}}}),Ce=F(we,[["__scopeId","data-v-97b01517"]]);export{Ce as default};
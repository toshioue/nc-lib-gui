import{f as $,ac as L,M as D,g3 as E,r as _,g as U,cZ as m,o as g,c as w,b as t,w as o,a as c,d as p,t as d,P as a,cD as T,S as B,Q as P,T as F,al as M,ga as z,gb as G,an as K,$ as j,a2 as q,aI as H}from"./B2hUoZAs.js";import{F as O}from"./By21eAqY.js";import{_ as W}from"./kd0F6MQ0.js";import{_ as J}from"./cvW-uYte.js";import"./fKrvpb1C.js";import"./C9qKCFvP.js";import"./CwHJfKcC.js";import"./BQQOEPN4.js";import"./1orNHd0L.js";const v=""+new URL("grid.DUgR9AKo.png",import.meta.url).href,Q=""+new URL("gallery.Cd9ckno3.png",import.meta.url).href,X=""+new URL("kanban.C7eL09OH.png",import.meta.url).href,Y=""+new URL("calendar.XdsCSkJk.png",import.meta.url).href,Z={class:"flex flex-col gap-5"},ee={class:"flex flex-row items-center gap-x-2 text-base font-weight-700 text-gray-800"},se={key:0,class:"mb-2 text-sm text-red-500"},ae={class:"flex flex-row justify-end gap-x-2"},te=["src"],fe=$({__name:"AskPassword",props:{modelValue:{type:Boolean},viewType:{}},emits:["update:modelValue"],setup(b,{emit:h}){const u=b,r=L(u,"modelValue",h),y=D(),{loadSharedView:x}=E(),n=_({password:void 0}),l=_(null),f=async()=>{try{await x(y.params.viewId,n.value.password),r.value=!1}catch(e){const s=await z(e);console.error(s.message),s.error===G.INVALID_SHARED_VIEW_PASSWORD?l.value=s.message:K.error(s.message)}},R=e=>{var s;return e&&((s=e==null?void 0:e.focus)==null?void 0:s.call(e))},k=U(()=>{switch(u.viewType){case m.GRID:return v;case m.GALLERY:return Q;case m.KANBAN:return X;case m.CALENDAR:return Y;default:return v}});return(e,s)=>{const I=j,V=W,N=J,S=O,A=q,C=H;return g(),w(M,null,[t(C,{visible:a(r),"onUpdate:visible":s[2]||(s[2]=i=>P(r)?r.value=i:null),c:"",size:"small",class:F({active:a(r)}),"mask-closable":!1,"mask-style":{backgroundColor:"rgba(255, 255, 255, 0.64)",backdropFilter:"blur(8px)"}},{default:o(()=>[c("div",Z,[c("div",ee,[t(I,{icon:"ncKey",class:"!text-base w-5 h-5"}),p(" "+d(e.$t("msg.thisSharedViewIsProtected")),1)]),t(S,{ref:"formRef",model:a(n),name:"create-new-table-form",onFinish:f},{default:o(()=>[t(N,{name:"password",rules:[{required:!0,message:e.$t("msg.error.signUpRules.passwdRequired")}],class:"!mb-0"},{default:o(()=>[t(V,{ref:R,value:a(n).password,"onUpdate:value":s[0]||(s[0]=i=>a(n).password=i),class:"!rounded-lg !text-small","hide-details":"",placeholder:e.$t("msg.enterPassword"),onInput:s[1]||(s[1]=i=>l.value=null)},null,8,["value","placeholder"]),t(T,{name:"layout"},{default:o(()=>[a(l)?(g(),w("div",se,d(a(l)),1)):B("",!0)]),_:1})]),_:1},8,["rules"])]),_:1},8,["model"]),c("div",ae,[t(A,{disabled:!a(n).password,type:"primary",size:"small","html-type":"submit",class:"!px-2","data-testid":"nc-shared-view-password-submit-btn",onClick:f},{loading:o(()=>[p(d(e.$t("msg.verifyingPassword")),1)]),default:o(()=>[p(d(e.$t("objects.view"))+" ",1)]),_:1},8,["disabled"])])])]),_:1},8,["visible","class"]),c("img",{alt:"view image",src:a(k),class:"fixed inset-0 w-full h-full"},null,8,te)],64)}}});export{fe as default};
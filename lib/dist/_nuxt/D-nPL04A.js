import{f as E,M,ai as U,fl as L,av as l,r as b,fB as T,az as z,g3 as H,B as q,g4 as A,aj as G,H as J,o as d,c,b as t,w as r,P as s,U as K,S as u,Q,T as O,a as _,d as f,t as m,cD as W,a3 as X,$ as Y,a2 as Z,ca as ee,a4 as se,dS as ae,g5 as te,d0 as oe,_ as re}from"./DKhUGBot.js";import{u as ne}from"./DqUBg5CU.js";import{u as ie}from"./BTAX7aIF.js";import{u as le}from"./D-d1Vlq3.js";import{F as de}from"./DyY7ABnl.js";import{_ as me}from"./CxxuE4Yq.js";import{_ as pe}from"./BY49hpjj.js";import"./DGy9VVU7.js";import"./DO1hNe_j.js";import"./lyxpGZoZ.js";import"./boyBAVNN.js";import"./Ce4Hnuew.js";import"./DrSobHNn.js";import"./DFT4Rrrq.js";import"./P2GfGWnR.js";import"./u8rUVe3y.js";import"./DgXVCOuO.js";import"./CUg8TjpL.js";import"./GPQ-Eg6I.js";import"./BQQOEPN4.js";import"./DEJjMRn_.js";const ce=""+new URL("form.DESRCJtL.png",import.meta.url).href,ue={class:"flex flex-col gap-5"},_e={class:"flex flex-row items-center gap-x-2 text-base font-weight-700 text-gray-800"},fe={key:0,class:"mb-2 text-sm text-red-500"},we={class:"flex flex-row justify-end gap-x-2"},ge={key:1,alt:"view image",src:ce,class:"fixed inset-0 w-full h-full"},ve=E({__name:"[viewId]",async setup(he){let w,g;ne("nc-left-sidebar",{hasSidebar:!1});const x=M(),{t:y}=U(),{loadSharedView:p,sharedView:k,sharedViewMeta:I,meta:v,notFound:S,password:C,passwordDlg:o,passwordError:h}=ie(x.params.viewId);if([w,g]=L(()=>p()),await w,g(),!S.value)l(te,ae()),l(oe,v),l(T,b(!0)),l(z,b(!0)),le(k,v,!0),H(I.value.rtl?"rtl":"ltr");else throw q("/error/404"),A({statusCode:404,statusMessage:y("msg.pageNotFound")});const n=G({password:""});J(()=>n.password,()=>{C.value=n.password});const F=e=>{var a;return e&&((a=e==null?void 0:e.focus)==null?void 0:a.call(e))};return(e,a)=>{const V=X,$=Y,N=me,P=pe,j=de,B=Z,R=ee,D=se;return d(),c("div",null,[t(D,null,{default:r(()=>[s(o)?u("",!0):(d(),K(V,{key:0})),t(R,{visible:s(o),"onUpdate:visible":a[1]||(a[1]=i=>Q(o)?o.value=i:null),class:O({active:s(o)}),closable:!1,width:"min(100%, 450px)",centered:"",footer:null,"mask-closable":!1,"wrap-class-name":"nc-modal-shared-form-password-dlg","mask-style":{backgroundColor:"rgba(255, 255, 255, 0.64)",backdropFilter:"blur(8px)"},onClose:a[2]||(a[2]=i=>o.value=!1)},{default:r(()=>[_("div",ue,[_("div",_e,[t($,{icon:"ncKey",class:"!text-base w-5 h-5"}),f(" "+m(e.$t("msg.thisSharedViewIsProtected")),1)]),t(j,{model:s(n),onFinish:s(p)},{default:r(()=>[t(P,{name:"password",rules:[{required:!0,message:e.$t("msg.error.signUpRules.passwdRequired")}],class:"!mb-0"},{default:r(()=>[t(N,{ref:F,value:s(n).password,"onUpdate:value":a[0]||(a[0]=i=>s(n).password=i),class:"!rounded-lg !text-small","hide-details":"",placeholder:e.$t("msg.enterPassword")},null,8,["value","placeholder"]),t(W,{name:"layout"},{default:r(()=>[s(h)?(d(),c("div",fe,m(s(h)),1)):u("",!0)]),_:1})]),_:1},8,["rules"])]),_:1},8,["model","onFinish"]),_("div",we,[t(B,{disabled:!s(n).password,type:"primary",size:"small","html-type":"submit",class:"!px-2","data-testid":"nc-shared-view-password-submit-btn",onClick:s(p)},{loading:r(()=>[f(m(e.$t("msg.verifyingPassword")),1)]),default:r(()=>[f(m(e.$t("objects.view"))+" ",1)]),_:1},8,["disabled","onClick"])])])]),_:1},8,["visible","class"]),s(o)?(d(),c("img",ge)):u("",!0)]),_:1})])}}}),ze=re(ve,[["__scopeId","data-v-e4fe6d26"]]);export{ze as default};
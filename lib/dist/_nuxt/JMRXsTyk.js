import{e as J,ag as K,aq as X,ay as Z,r as k,gc as c,f as T,o as n,Q as m,w as i,a as t,b as l,d as ee,t as r,N as o,c as R,T as C,U,a7 as te,W as se,R as E,S as oe,ah as _,ai as ae,hR as le,ic as ie,aT as re,Y as ne,ca as ce,y as de,_ as me}from"./DZZ6t_j4.js";import{_ as ue}from"./DnSVh-oD.js";import{u as pe}from"./uhBJvRY2.js";import{h as _e}from"./C3jLTHF4.js";import{_ as ve}from"./Bd2huW26.js";import{F as I}from"./BYINaHrJ.js";import{T as fe}from"./DZw_XsHm.js";import"./DKN1hQ6S.js";import{I as xe}from"./BQuyMdA-.js";import{_ as ye}from"./CXD-Dj4T.js";import{_ as he}from"./dfem9Uc_.js";import{S as ge}from"./D_MsYLkT.js";import"./D9tFZoTQ.js";import"./vll-Pnjv.js";import"./DGj1ycqW.js";import"./BQQOEPN4.js";import"./CB1aB6F1.js";import"./B5RRVMt5.js";import"./DyDFI6NE.js";import"./BCJFTkwv.js";const we={class:"flex flex-col"},be={class:"flex flex-row justify-between items-center pb-1.5 mb-2 border-b-1 w-full"},$e={class:"px-2 mt-1.5"},ke={key:0,class:"flex flex-col mt-1 pb-5"},Te={class:"flex flex-row items-center pl-1.5 pb-1 h-[1.1rem]"},Re={class:"text-xs ml-0.5 mt-0.5","data-rec":"true"},Ce={class:"flex flex-row justify-between items-center py-1"},Ue={class:"flex pl-2 text-green-700 text-xs","data-rec":"true"},Ee={class:"flex text-xs text-gray-500 mt-2 justify-start ml-2","data-rec":"true"},Ie={class:"flex flex-row justify-end mt-4 ml-2"},Me={class:"flex flex-row justify-center items-center space-x-0.5"},je={class:"text-xs text-gray-600","data-rec":"true"},Ve={key:1,class:"flex flex-col pb-4"},Be={class:"border-1 py-3 px-4 rounded-md mt-1"},Se={class:"flex flex-row space-x-4"},Ne={class:"flex flex-col w-3/4"},De={class:"ml-1 mb-1 text-xs text-gray-500","data-rec":"true"},Fe={class:"flex flex-col w-2/4"},Le={class:"ml-1 mb-1 text-xs text-gray-500"},Oe={class:"flex items-center gap-1 justify-between"},We={"data-rec":"true"},qe={class:"text-gray-500 text-xs whitespace-normal","data-rec":"true"},Ae={class:"flex items-center gap-1 justify-between"},Pe={"data-rec":"true"},ze={class:"text-gray-500 text-xs whitespace-normal","data-rec":"true"},Ge={class:"flex flex-row justify-end"},Qe={class:"flex flex-row justify-center items-center space-x-1.5"},Ye={"data-rec":"true"},He=J({__name:"UsersModal",props:{show:{type:Boolean},selectedUser:{}},emits:["closed","reload"],setup(Je,{emit:M}){const v=M,{t:y}=K(),{$api:j,$e:f}=de(),{copy:V}=X(),{dashboardUrl:B}=pe(),{clearBasesUser:S}=Z(),s=k({emails:"",role:c.VIEWER,invitationToken:void 0}),h=k(),N=I.useForm,D=T(()=>({emails:[_e]})),{validateInfos:F}=N(s.value,D),L=async()=>{var e;f("a:org-user:invite",{role:s.value.role}),await((e=h.value)==null?void 0:e.validateFields());try{const a=await j.orgUsers.add({roles:s.value.role,email:s.value.emails});s.value.invitationToken=a.invite_token,v("reload"),_.success(y("msg.success.userAdded")),S()}catch(a){console.error(a),_.error(await ae(a))}},x=T(()=>s.value.invitationToken?`${B.value}#/signup/${s.value.invitationToken}`:null),O=async()=>{if(x.value){try{await V(x.value),_.success(y("msg.toast.inviteUrlCopy"))}catch(e){_.error(e.message)}f("c:shared-base:copy-url")}},W=()=>{f("c:user:invite-more"),s.value.invitationToken=void 0,s.value.role=c.VIEWER,s.value.emails=""},q=e=>e==null?void 0:e.focus(),A=e=>{var u;const a=((u=e.clipboardData)==null?void 0:u.getData("text"))??"";s.value.emails=le(a)||a};return(e,a)=>{const u=fe,P=ie,p=re,z=ye,g=ve,G=xe,w=he,b=ne,$=ge,Q=ue,Y=I,H=ce;return n(),m(H,{class:oe({active:e.show}),footer:null,centered:"",visible:e.show,closable:!1,width:"max(50vw, 44rem)","wrap-class-name":"nc-modal-invite-user",onCancel:a[3]||(a[3]=d=>v("closed"))},{default:i(()=>[t("div",we,[t("div",be,[l(u,{class:"select-none",level:4,"data-rec":"true"},{default:i(()=>[ee(r(e.$t("activity.inviteUser")),1)]),_:1}),l(p,{type:"text",class:"!rounded-md mr-1 -mt-1.5",onClick:a[0]||(a[0]=d=>v("closed"))},{icon:i(()=>[l(P,{"data-testid":"nc-root-user-invite-modal-close",class:"flex mx-auto"})]),_:1})]),t("div",$e,[o(s).invitationToken?(n(),R("div",ke,[t("div",Te,[(n(),m(C(("iconMap"in e?e.iconMap:o(U)).account))),t("div",Re,r(e.$t("activity.copyInviteURL")),1)]),l(z,{class:"!mt-2",type:"success","show-icon":""},{message:i(()=>[t("div",Ce,[t("div",Ue,r(o(x)),1),l(p,{type:"text",class:"!rounded-md -mt-0.5",onClick:O},{icon:i(()=>[(n(),m(C(("iconMap"in e?e.iconMap:o(U)).copy),{class:"flex mx-auto text-green-700 h-[1rem]"}))]),_:1})])]),_:1}),t("div",Ee,r(e.$t("msg.info.userInviteNoSMTP"))+" "+r(o(s).invitationToken&&o(s).emails),1),t("div",Ie,[l(p,{size:"middle",outlined:"",onClick:W},{default:i(()=>[t("div",Me,[l(g,{class:"flex mx-auto text-gray-600 h-[0.8rem]"}),t("div",je,r(e.$t("activity.inviteMore")),1)])]),_:1})])])):(n(),R("div",Ve,[t("div",Be,[l(Y,{ref_key:"formRef",ref:h,"validate-on-rule-change":!1,model:o(s),"validate-trigger":"onBlur",onFinish:L},{default:i(()=>[t("div",Se,[t("div",Ne,[l(w,te(o(F).emails,{"validate-trigger":"onBlur",name:"emails",rules:[{required:!0,message:e.$t("msg.plsInputEmail")}]}),{default:i(()=>[t("div",De,r(e.$t("datatype.Email"))+":",1),l(G,{ref:q,value:o(s).emails,"onUpdate:value":a[1]||(a[1]=d=>o(s).emails=d),size:"middle",class:"nc-input-sm","validate-trigger":"onBlur",placeholder:e.$t("labels.email"),onPaste:se(A,["prevent"])},null,8,["value","placeholder"])]),_:1},16,["rules"])]),t("div",Fe,[l(w,{name:"role",rules:[{required:!0,message:e.$t("msg.roleRequired")}]},{default:i(()=>[t("div",Le,r(e.$t("labels.selectUserRole")),1),l(Q,{value:o(s).role,"onUpdate:value":a[2]||(a[2]=d=>o(s).role=d),class:"w-55 nc-user-roles","dropdown-match-select-width":!1,"dropdown-class-name":"nc-dropdown-user-role max-w-64"},{default:i(()=>[l($,{class:"nc-role-option",value:o(c).CREATOR,label:e.$t("objects.roleType.orgLevelCreator")},{default:i(()=>[t("div",Oe,[t("div",We,r(e.$t("objects.roleType.orgLevelCreator")),1),o(s).role===o(c).CREATOR?(n(),m(b,{key:0,id:"nc-selected-item-icon",icon:"check",class:"w-4 h-4 text-primary"})):E("",!0)]),t("div",qe,r(e.$t("msg.info.roles.orgCreator")),1)]),_:1},8,["value","label"]),l($,{class:"nc-role-option",value:o(c).VIEWER,label:e.$t("objects.roleType.orgLevelViewer")},{default:i(()=>[t("div",Ae,[t("div",Pe,r(e.$t("objects.roleType.orgLevelViewer")),1),o(s).role===o(c).VIEWER?(n(),m(b,{key:0,id:"nc-selected-item-icon",icon:"check",class:"w-4 h-4 text-primary"})):E("",!0)]),t("div",ze,r(e.$t("msg.info.roles.orgViewer")),1)]),_:1},8,["value","label"])]),_:1},8,["value"])]),_:1},8,["rules"])])]),t("div",Ge,[l(p,{type:"primary",class:"!rounded-md","html-type":"submit"},{default:i(()=>[t("div",Qe,[l(g,{class:"flex h-[0.8rem]"}),t("div",Ye,r(e.$t("activity.invite")),1)])]),_:1})])]),_:1},8,["model"])])]))])])]),_:1},8,["class","visible"])}}}),xt=me(He,[["__scopeId","data-v-41f4dbf8"]]);export{xt as default};
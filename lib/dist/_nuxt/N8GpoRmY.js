import{f as y,ar as S,ai as k,r as w,O as b,o as C,c as $,b as n,w as o,a as t,t as r,R as A,P as _,aj as a,ak as l,$ as B,_ as D}from"./Cgw6cdOy.js";import{_ as I}from"./DgSeK08O.js";import{C as N}from"./KNudlHpk.js";import{_ as E}from"./dmcxUY_0.js";import"./CitraFSq.js";import"./hvq8FVej.js";import"./BcZAlRJW.js";const O={class:"flex flex-col"},P={"data-rec":"true"},R={class:"nc-content-max-w p-6 h-[calc(100vh_-_100px)] flex flex-col gap-6 overflow-auto nc-scrollbar-thin"},V={class:"flex flex-col items-center"},j={class:"flex items-center gap-2"},G={"data-rec":"true"},H=y({__name:"SignupSettings",setup(M){const{api:c}=S(),{t:p}=k(),s=w({invite_only_signup:!1}),u=async()=>{try{const e=await c.orgAppSettings.get();s.value=e}catch(e){a.error(await l(e))}},g=async()=>{try{await c.orgAppSettings.set(s.value),a.success(p("msg.success.settingsSaved"))}catch(e){a.error(await l(e))}};return u(),(e,i)=>{const m=B,d=I,f=N,v=E,h=b("e");return C(),$("div",O,[n(d,null,{icon:o(()=>[n(m,{icon:"settings",class:"flex-none text-[20px] text-gray-700 h-5 w-5"})]),title:o(()=>[t("span",P,r(e.$t("activity.settings")),1)]),_:1}),t("div",R,[t("div",V,[t("div",j,[n(v,null,{default:o(()=>[A(n(f,{checked:_(s).invite_only_signup,"onUpdate:checked":i[0]||(i[0]=x=>_(s).invite_only_signup=x),class:"nc-checkbox nc-invite-only-signup-checkbox !mt-6",name:"virtual",onChange:g},null,8,["checked"]),[[h,["c:account:enable-signup"]]])]),_:1}),t("span",G,r(e.$t("labels.inviteOnlySignup")),1)])])])])}}}),Q=D(H,[["__scopeId","data-v-5fce20f9"]]);export{Q as default};
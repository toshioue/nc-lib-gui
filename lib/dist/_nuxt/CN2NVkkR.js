const __vite__fileDeps=["./ClQ_NLIS.js","./3QBYHahY.js","./entry.Ic44fwRn.css","./kHOslGNR.js","./CmN9vPg3.js","./BQQOEPN4.js","./xnDaHwV-.js","./DPgYHC40.js","./BsWDDIqE.js","./ceYq-xax.js","./DAKhk9t6.js","./Bk0xUMNV.js","./CGxepfeV.js","./wEQwkVjR.js","./DD1BMgnW.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as F,ai as G,r as m,i as J,o as l,c as v,b as r,w as n,P as o,S as u,T as A,a9 as Q,Q as I,a,t as p,d as f,aq as W,av as Z,V as M,W as P,aa as H,U as K,Z as X,a6 as Y,aj as x,ak as z,cc as ee,a0 as te,$ as se,aV as ae,fs as le,p as ne,e as oe,A as ie,_ as ce}from"./3QBYHahY.js";import{_ as re}from"./x4yn_iAa.js";import{T as pe}from"./CrMlMZHm.js";import{_ as de}from"./CsJPQclb.js";import"./BsWDDIqE.js";import"./CmN9vPg3.js";import"./BQQOEPN4.js";import"./xnDaHwV-.js";import"./3ezdMRmZ.js";const ue=X(()=>Y(()=>import("./ClQ_NLIS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url).then(d=>d.default||d)),j=d=>(ne("data-v-b4a8d684"),d=d(),oe(),d),_e={class:"flex flex-col h-full"},fe={class:"flex flex-row justify-center mt-2 text-center w-full text-base"},me={class:"flex mt-6 justify-center space-x-2"},ve={class:"mb-5"},ge={class:"flex flex-row items-center gap-3"},we=j(()=>a("span",{class:"font-weight-bold"},"App Store Deprecation",-1)),ye=j(()=>a("span",{class:"text-gray-500 ml-9"}," App store will soon be removed. Email & Storage plugins are now available in Accounts/Setup page. Rest of the plugins here will be moved to integrations. ",-1)),he={class:"flex flex-wrap w-full gap-5"},xe={class:"install-btn flex flex-row justify-end space-x-1"},be={class:"flex flex-row justify-center items-center caption capitalize nc-app-store-card-edit"},ke={class:"flex flex-row justify-center items-center caption capitalize nc-app-store-card-reset"},Ce={class:"flex ml-0.5"},Se={class:"flex flex-row justify-center items-center caption capitalize nc-app-store-card-install"},$e={class:"flex flex-row space-x-2 items-center justify-start w-full"},Ae={class:"flex w-[68px]"},Ie=["src"],Me={key:1},Pe={class:"flex flex-col flex-1 w-3/5 pl-3"},ze=F({__name:"AppStore",setup(d){const{t:E}=G(),{$api:b,$e:g}=ie(),w=m(null),_=m(!1),c=m(!1),i=m(null),y=async()=>{try{const e=(await b.plugin.list()).list??[];w.value=e.filter(t=>!["email","storage"].includes(t.category.toLowerCase())).map(t=>({...t,tags:t.tags?t.tags.split(","):[],parsedInput:t.input&&JSON.parse(t.input)}))}catch(e){x.error(await z(e))}},N=async()=>{try{await b.plugin.update(i.value.id,{input:null,active:!1}),x.success(E("msg.success.pluginUninstalled")),_.value=!1,await y()}catch(e){x.error(await z(e))}g("a:appstore:reset",{app:i.value.title})},V=async()=>{c.value=!1,await y(),g("a:appstore:install",{app:i.value.title})},k=async e=>{c.value=!0,i.value=e,g("c:appstore:install",{app:e.title})},B=async e=>{_.value=!0,i.value=e};return J(async()=>{w.value===null&&await y()}),(e,t)=>{const R=ue,C=ee,S=te,T=se,D=de,U=re,h=ae,L=pe,O=le;return l(),v("div",null,[r(C,Q({visible:o(c),"onUpdate:visible":t[2]||(t[2]=s=>I(c)?c.value=s:null),class:{active:o(c)},closable:!1,centered:"","min-height":"300",footer:null,"wrap-class-name":"nc-modal-plugin-install"},e.$attrs),{default:n(()=>[o(i)&&o(c)?(l(),u(R,{key:0,id:o(i).id,onClose:t[0]||(t[0]=s=>c.value=!1),onSaved:t[1]||(t[1]=s=>V())},null,8,["id"])):A("",!0)]),_:1},16,["visible","class"]),r(C,{visible:o(_),"onUpdate:visible":t[4]||(t[4]=s=>I(_)?_.value=s:null),closable:!1,width:"24rem",centered:"",footer:null,"wrap-class-name":"nc-modal-plugin-uninstall"},{default:n(()=>[a("div",_e,[a("div",fe,p(`Click on confirm to reset ${o(i)&&o(i).title}`),1),a("div",me,[r(S,{type:"secondary",onClick:t[3]||(t[3]=s=>_.value=!1)},{default:n(()=>[f(p(e.$t("general.cancel")),1)]),_:1}),r(S,{type:"danger",onClick:N},{default:n(()=>[f(p(e.$t("general.confirm")),1)]),_:1})])])]),_:1},8,["visible"]),a("div",ve,[r(D,{type:"warning",border:""},{message:n(()=>[a("div",ge,[r(T,{icon:"ncAlertCircle",class:"text-orange-500 w-6 h-6"}),we])]),description:n(()=>[ye]),_:1})]),a("div",he,[(l(!0),v(W,null,Z(o(w),(s,q)=>(l(),u(O,{key:q,class:K(["sm:w-100 md:w-130",`relative flex overflow-x-hidden app-item-card !shadow-sm rounded-md w-full nc-app-store-card-${s.title}`])},{default:n(()=>[a("div",xe,[s.parsedInput?(l(),u(h,{key:0,size:"small",type:"primary",onClick:$=>k(s)},{default:n(()=>[a("div",be,[r(U,{class:"pr-0.5",height:12}),f(" "+p(e.$t("general.edit")),1)])]),_:2},1032,["onClick"])):A("",!0),s.parsedInput?(l(),u(h,{key:1,size:"small",outlined:"",onClick:$=>B(s)},{default:n(()=>[a("div",ke,[(l(),u(M(("iconMap"in e?e.iconMap:o(P)).closeCircle))),a("div",Ce,p(e.$t("general.reset")),1)])]),_:2},1032,["onClick"])):(l(),u(h,{key:2,size:"small",type:"primary",onClick:$=>k(s)},{default:n(()=>[a("div",Se,[(l(),u(M(("iconMap"in e?e.iconMap:o(P)).plus))),f(" "+p(e.$t("general.install")),1)])]),_:2},1032,["onClick"]))]),a("div",$e,[a("div",Ae,[s.title!=="SMTP"?(l(),v("img",{key:0,class:"avatar",alt:"logo",style:H({backgroundColor:s.title==="SES"?"#242f3e":""}),src:s.logo},null,12,Ie)):(l(),v("div",Me))]),a("div",Pe,[r(L,{level:5},{default:n(()=>[f(p(s.title),1)]),_:2},1024),f(" "+p(s.description),1)])])]),_:2},1032,["class"]))),128))])])}}}),Le=ce(ze,[["__scopeId","data-v-b4a8d684"]]);export{Le as default};
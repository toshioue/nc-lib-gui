const __vite__fileDeps=["./kbOJko4d.js","./uhBJvRY2.js","./DZZ6t_j4.js","./entry.DIDWwc7m.css","./CDWovrGB.js","./vll-Pnjv.js","./B05h-4V9.js","./GMLocJHP.js","./CFvUUxCy.js","./eX8_g88K.js","./DyDFI6NE.js","./BQuyMdA-.js","./BQQOEPN4.js","./CvNj_pzL.js","./9ZvwAtsX.js","./ABvOSKp8.js","./B8iX-Tu_.js","./D9tFZoTQ.js","./Cz_1GoV3.js","./K3POysmD.js","./D_MsYLkT.js","./BCJFTkwv.js","./CB1aB6F1.js","./B5RRVMt5.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{o as r,c as u,a as s,e as te,ab as Le,r as A,aq as _e,t as v,N as a,b as c,w as g,d as O,S as ee,Q as D,ao as q,$ as we,_ as de,L as Ve,cO as he,cW as Ne,aw as Pe,bL as Te,d8 as Ae,f as V,dc as ie,gY as me,d4 as P,ah as W,ai as K,D as Ie,M as je,P as G,O as Y,R as B,ce as Ee,V as Be,at as ye,y as ge,Y as Oe,ap as Re,ax as Q,cL as be,a7 as ze,dp as xe,aT as $e,m as De,bT as We,F as Je,T as He,is as fe,a8 as Ge,X as Ye,a4 as qe,aM as Ke,Z as Qe,ca as Xe}from"./DZZ6t_j4.js";import{a as ke}from"./B05h-4V9.js";import{u as Ce}from"./uhBJvRY2.js";import{R as Ze,_ as et}from"./CFvUUxCy.js";import{_ as tt}from"./CDWovrGB.js";import{_ as at}from"./DyDFI6NE.js";import{u as re}from"./CvNj_pzL.js";import{u as st}from"./GMLocJHP.js";import{W as ot}from"./9ZvwAtsX.js";import{A as lt}from"./ABvOSKp8.js";import{_ as nt}from"./D_MsYLkT.js";const it={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},rt=s("path",{fill:"currentColor",d:"M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z"},null,-1),dt=[rt];function ct(_,p){return r(),u("svg",it,[...dt])}const Se={name:"mdi-content-copy",render:ct},ut={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},vt=s("path",{fill:"currentColor",d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"},null,-1),pt=[vt];function mt(_,p){return r(),u("svg",ut,[...pt])}const Me={name:"mdi-check",render:mt},ft={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_t=s("path",{fill:"currentColor",d:"m14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6z"},null,-1),wt=[_t];function ht(_,p){return r(),u("svg",ft,[...wt])}const yt={name:"mdi-code-tags",render:ht},gt={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},bt=s("path",{fill:"currentColor",d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"},null,-1),xt=[bt];function $t(_,p){return r(),u("svg",gt,[...xt])}const kt={name:"ri-external-link-line",render:$t},Ct={class:"flex flex-row items-center justify-end text-gray-600 gap-x-1.5 py-1.5 px-1.5 bg-gray-50 rounded-md border-1 border-gray-200"},St={class:"overflow-hidden whitespace-nowrap text-gray-500"},Mt={class:"flex flex-row gap-x-1"},Ut={class:"flex text-xs",style:{fontWeight:500}},Ft=te({__name:"CopyUrl",props:{url:{}},emits:["update:url"],setup(_,{emit:p}){const M=Le(_,"url",p),S=A({link:!1,embed:!1}),{copy:N}=_e(),U=async()=>{window.open(M.value,"_blank","noopener,noreferrer")},m=async()=>{await N(`<iframe src="${M.value}" width="100%" height="100%" style="border: none;"></iframe>`),S.value.embed=!0},h=async()=>{S.value.link=!1,await N(M.value),setTimeout(()=>{S.value.link=!0},100)};return(x,f)=>{const t=kt,F=we,I=yt,z=Me,d=Se;return r(),u("div",Ct,[s("div",{class:"flex flex-row block flex-1 overflow-hidden pl-3 cursor-pointer",onClick:h},[s("div",St,v(a(M)),1)]),s("div",Mt,[c(F,null,{title:g(()=>[O(v(x.$t("activity.openInANewTab")),1)]),default:g(()=>[s("div",{class:"button",onClick:U},[c(t,{class:"h-3.75"})])]),_:1}),c(F,null,{title:g(()=>[O(v(x.$t("activity.copyIFrameCode")),1)]),default:g(()=>[s("div",{class:ee(["button",{"!text-gray-300 !border-gray-200 !cursor-not-allowed":a(S).embed}]),onClick:m},[c(I,{class:"h-4"})],2)]),_:1}),s("div",{class:"button","data-testid":"docs-share-page-copy-link",onClick:h},[a(S).link?(r(),D(z,{key:0,class:"h-3.5"})):(r(),D(d,{key:1,class:"h-3.5"})),s("div",Ut,[a(S).link?(r(),u(q,{key:0},[O(v(x.$t("activity.copiedLink")),1)],64)):(r(),u(q,{key:1},[O(v(x.$t("activity.copyUrl")),1)],64))])])])])}}}),Lt=de(Ft,[["__scopeId","data-v-59632fef"]]),Vt={class:"flex flex-col py-2 px-3 mb-1"},Nt={class:"flex flex-col w-full mt-2.5 px-3 py-2.5 border-gray-200 border-1 rounded-md gap-y-2"},Pt={class:"flex flex-row w-full justify-between py-0.5"},Tt={class:"text-gray-900 font-medium"},At={class:"mt-0.5 border-t-1 border-gray-100 pt-3"},It={class:"flex flex-col justify-between mt-1 py-2 px-3 bg-gray-50 rounded-md"},jt={class:"flex flex-row items-center justify-between"},Et={class:"flex text-black"},Bt={key:0,class:"flex gap-2 mt-2 w-2/3"},Ot={class:"flex flex-col justify-between gap-y-3 mt-1 py-2 px-3 bg-gray-50 rounded-md"},Rt={key:0,class:"flex flex-row items-center justify-between"},zt={class:"flex text-black"},Dt={class:"flex flex-row items-center justify-between"},Wt={class:"text-black flex items-center space-x-1"},Jt={key:0,class:"flex flex-row items-center justify-between"},Ht={class:"text-black"},Gt={key:0,class:"nc-pre-filled-mode-wrapper flex flex-col justify-between gap-y-3 mt-1 py-2 px-3 bg-gray-50 rounded-md"},Yt={class:"flex flex-row items-center justify-between"},qt={class:"text-black flex items-center space-x-1"},Kt={class:"text-center"},Qt={class:"flex-1"},Xt=te({__name:"SharePage",setup(_){const{view:p,$api:R}=ke(),{$e:b}=ge(),{getBaseUrl:M,appInfo:S}=Ve(),{dashboardUrl:N}=Ce(),U=he(),{metas:m}=Ne(),h=Pe(),x=Te(Ae,A(!1)),f=A({public:!1,password:!1,download:!1}),t=V({get:()=>{var e;return typeof((e=p.value)==null?void 0:e.meta)=="string"&&(p.value.meta=JSON.parse(p.value.meta)),p.value},set:e=>{var o;typeof((o=p.value)==null?void 0:o.meta)=="string"&&(p.value.meta=JSON.parse(p.value.meta)),typeof(e==null?void 0:e.meta)=="string"&&(e.meta=JSON.parse(e.meta)),p.value=e}}),F=V(()=>{var e;return!!((e=t.value)!=null&&e.uuid)}),I=V(()=>ae()??""),z=A(!1),d=V(()=>{var e;return!!((e=t.value)!=null&&e.password)||z.value}),i=V({get:()=>{var e;return d.value?((e=t.value)==null?void 0:e.password)??"":""},set:async e=>{t.value&&(t.value={...t.value,password:d.value?e:null},E())}}),l=V({get:()=>{var e;return!!((e=t.value)!=null&&e.meta.withTheme)},set:e=>{var o;(o=t.value)!=null&&o.meta&&(t.value.meta={...t.value.meta,withTheme:e},J())}}),n=async()=>{if(z.value=!d.value,!!t.value&&!f.value.password){f.value.password=!0;try{d.value?t.value={...t.value,password:null}:t.value={...t.value,password:""},await E()}finally{f.value.password=!1}}},w=V({get:()=>{var e,o,y,T;return(e=t.value)!=null&&e.meta?(typeof((o=t.value)==null?void 0:o.meta)=="string"&&(t.value.meta=JSON.parse(t.value.meta)),!!((T=(y=t.value)==null?void 0:y.meta)!=null&&T.rtl)):!1},set:e=>{var o,y;(o=t.value)!=null&&o.meta&&(typeof((y=t.value)==null?void 0:y.meta)=="string"&&(t.value.meta=JSON.parse(t.value.meta)),t.value.meta={...t.value.meta,rtl:e},E())}}),L=V({get:()=>{var e,o;return!!((o=(e=t.value)==null?void 0:e.meta)!=null&&o.allowCSVDownload)},set:async e=>{var o;if((o=t.value)!=null&&o.meta){f.value.download=!0;try{t.value.meta={...t.value.meta,allowCSVDownload:e},await X()}finally{f.value.download=!1}}}}),k=V({get:()=>{var e;return!!((e=t.value)!=null&&e.meta.surveyMode)},set:e=>{var o;(o=t.value)!=null&&o.meta&&(t.value.meta={...t.value.meta,surveyMode:e},le())}}),$=V({get:()=>{var e,o,y,T;return{preFillEnabled:((o=ie((e=t.value)==null?void 0:e.meta))==null?void 0:o.preFillEnabled)??!1,preFilledMode:((T=ie((y=t.value)==null?void 0:y.meta))==null?void 0:T.preFilledMode)||me.Default}},set:e=>{var o;(o=t.value)!=null&&o.meta&&($.value.preFillEnabled!==e.preFillEnabled&&b(`a:view:share:prefilled-mode-${e.preFillEnabled?"enabled":"disabled"}`),$.value.preFilledMode!==e.preFilledMode&&b(`a:view:share:${e.preFilledMode}-prefilled-mode`),t.value.meta={...t.value.meta,...e},Z())}}),j=e=>{$.value={...$.value,...e}};function ae(){var T;if(!t.value)return;let e;switch(t.value.type){case P.FORM:e="form";break;case P.KANBAN:e="kanban";break;case P.GALLERY:e="gallery";break;case P.MAP:e="map";break;case P.CALENDAR:e="calendar";break;default:e="view"}const o=M(h.activeWorkspaceId);let y=N.value;return o&&(y=`${o}${(T=S.value)==null?void 0:T.dashboardPath}`),`${encodeURI(`${y}#/nc/${e}/${t.value.uuid}${k.value?"/survey":""}`)}${U.preFillFormSearchParams&&$.value.preFillEnabled?`?${U.preFillFormSearchParams}`:""}`}const se=async()=>{var e,o;if((e=t.value)!=null&&e.id)if((o=t.value)!=null&&o.uuid)await R.dbViewShare.delete(t.value.id),t.value={...t.value,uuid:void 0,password:void 0};else{const y=await R.dbViewShare.create(t.value.id);if(t.value={...t.value,...y},t.value.type===P.KANBAN){const T=m.value[U.activeView.fk_model_id].columns.find(ne=>ne.id===U.activeView.view.fk_grp_col_id);t.value.meta={...t.value.meta,groupingFieldColumn:T},await E()}}},oe=async()=>{if(!f.value.public){f.value.public=!0;try{return await se()}catch(e){W.error(await K(e))}finally{f.value.public=!1}}};async function X(){f.value.download=!0;try{await E(),b(`a:view:share:${L.value?"enable":"disable"}-csv-download`)}catch(e){W.error(await K(e))}f.value.download=!1}async function le(){await E(),b(`a:view:share:${k.value?"enable":"disable"}-survey-mode`)}async function J(){await E(),b(`a:view:share:${l.value?"enable":"disable"}-theme`)}async function E(){var e;try{if(!((e=t.value)!=null&&e.meta))return;const o=t.value.meta;await R.dbViewShare.update(t.value.id,{meta:o,password:t.value.password})}catch(o){W.error(await K(o))}return!0}async function Z(){await E()}return Ie(()=>{}),(e,o)=>{var ve,pe;const y=tt,T=Lt,ne=at,ce=Oe,ue=we,Ue=Ze,Fe=et,H=je("e");return r(),u("div",Vt,[s("div",Nt,[s("div",Pt,[s("div",Tt,v(e.$t("activity.enabledPublicViewing")),1),G(c(y,{checked:a(F),disabled:a(x),loading:a(f).public,class:"share-view-toggle !mt-0.25","data-testid":"share-view-toggle",onClick:oe},null,8,["checked","disabled","loading"]),[[H,["c:share:view:enable:toggle"]]])]),a(F)?(r(),u(q,{key:0},[s("div",At,[c(T,{url:a(I),"onUpdate:url":o[0]||(o[0]=C=>Y(I)?I.value=C:null)},null,8,["url"])]),s("div",It,[s("div",jt,[s("div",Et,v(e.$t("activity.restrictAccessWithPassword")),1),G(c(y,{checked:a(d),loading:a(f).password,class:"share-password-toggle !mt-0.25","data-testid":"share-password-toggle",size:"small",onClick:n},null,8,["checked","loading"]),[[H,["c:share:view:password:toggle"]]])]),c(Ee,{mode:"out-in",name:"layout"},{default:g(()=>[a(d)?(r(),u("div",Bt,[c(ne,{value:a(i),"onUpdate:value":o[1]||(o[1]=C=>Y(i)?i.value=C:null),placeholder:e.$t("placeholder.password.enter"),class:"!rounded-lg !py-1 !bg-white","data-testid":"nc-modal-share-view__password",size:"small",type:"password"},null,8,["value","placeholder"])])):B("",!0)]),_:1})]),s("div",Ot,[a(t)&&[a(P).GRID,a(P).KANBAN,a(P).GALLERY,a(P).MAP,a(P).CALENDAR].includes(a(t).type)?(r(),u("div",Rt,[s("div",zt,v(e.$t("activity.allowDownload")),1),G(c(y,{checked:a(L),"onUpdate:checked":o[2]||(o[2]=C=>Y(L)?L.value=C:null),loading:a(f).download,class:"public-password-toggle !mt-0.25","data-testid":"share-download-toggle",size:"small"},null,8,["checked","loading"]),[[H,["c:share:view:allow-csv-download:toggle"]]])])):B("",!0),((ve=a(t))==null?void 0:ve.type)===a(P).FORM?(r(),u(q,{key:1},[s("div",Dt,[s("div",Wt,[s("div",null,v(e.$t("activity.surveyMode")),1),c(ue,{class:"flex items-center"},{title:g(()=>[O(v(e.$t("tooltip.surveyFormInfo")),1)]),default:g(()=>[c(ce,{icon:"info",class:"flex-none text-gray-600 cursor-pointer"})]),_:1})]),G(c(y,{checked:a(k),"onUpdate:checked":o[3]||(o[3]=C=>Y(k)?k.value=C:null),"data-testid":"nc-modal-share-view__surveyMode",size:"small"},null,8,["checked"]),[[H,["c:share:view:surver-mode:toggle"]]])]),("isEeUI"in e?e.isEeUI:a(Be))?B("",!0):(r(),u("div",Jt,[s("div",Ht,v(e.$t("activity.rtlOrientation")),1),G(c(y,{checked:a(w),"onUpdate:checked":o[4]||(o[4]=C=>Y(w)?w.value=C:null),"data-testid":"nc-modal-share-view__RTL",size:"small"},null,8,["checked"]),[[H,["c:share:view:rtl-orientation:toggle"]]])]))],64)):B("",!0)]),((pe=a(t))==null?void 0:pe.type)===a(P).FORM?(r(),u("div",Gt,[s("div",Yt,[s("div",qt,[s("div",null,v(e.$t("activity.preFilledFields.title")),1),c(ue,{class:"flex items-center"},{title:g(()=>[s("div",Kt,v(e.$t("tooltip.preFillFormInfo")),1)]),default:g(()=>[c(ce,{icon:"info",class:"flex-none text-gray-600 cursor-pointer"})]),_:1})]),G(c(y,{checked:a($).preFillEnabled,"data-testid":"nc-modal-share-view__preFill",size:"small","onUpdate:checked":o[5]||(o[5]=C=>j({preFillEnabled:C}))},null,8,["checked"]),[[H,["c:share:view:surver-mode:toggle"]]])]),a($).preFillEnabled?(r(),D(Fe,{key:0,value:a($).preFilledMode,class:"nc-modal-share-view-preFillMode","data-testid":"nc-modal-share-view__preFillMode","onUpdate:value":o[6]||(o[6]=C=>j({preFilledMode:C}))},{default:g(()=>[(r(!0),u(q,null,ye(Object.values("PreFilledMode"in e?e.PreFilledMode:a(me)),C=>(r(),D(Ue,{key:C,value:C},{default:g(()=>[s("div",Qt,v(e.$t(`activity.preFilledFields.${C}`)),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])):B("",!0)])):B("",!0)],64)):B("",!0)])])}}}),Zt={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ea=s("path",{fill:"currentColor",d:"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"},null,-1),ta=[ea];function aa(_,p){return r(),u("svg",Zt,[...ta])}const sa={name:"mdi-tick",render:aa},[oa,la]=st(()=>{const{api:_}=Re(),{base:p}=Q(be()),{$e:R}=ge(),{formStatus:b,invitationUsersData:M}=Q(re()),S=A(1),N=A(10),U=A(""),m=A(null),h=A(null),x=A(0),f=A(!1),t=V(()=>!m.value||!h.value?[]:m.value.filter(d=>{var l;const i=(l=h.value)==null?void 0:l.find(n=>n.id===d.id);return i?d.roles!==i.roles:!1})),F=async(d=S.value,i=N.value)=>{var l,n;try{if(!((l=p.value)!=null&&l.id))return;const w=await _.auth.baseUserList((n=p.value)==null?void 0:n.id,{query:{limit:i,offset:(d-1)*i,query:U.value}});if(!w.users)return;const L=w.users.list.filter(k=>!k.roles);x.value=(w.users.pageInfo.totalRows??0)-Number(L==null?void 0:L.length),m.value?m.value=[...m.value,...w.users.list.filter(k=>k.roles)]:m.value=w.users.list.filter(k=>k.roles),h.value=JSON.parse(JSON.stringify(m.value))}catch(w){W.error(await K(w))}};return{loadUsers:F,inviteUser:async d=>{var l;let i;b.value="base-collaborateSaving";try{if(!((l=p.value)!=null&&l.id))return;i=await _.auth.baseUserAdd(p.value.id,{...d,base_id:p.value.id,baseName:p.value.title}),M.value.invitationToken=i.invite_token,S.value=1,m.value=[],await F()}catch(n){W.error(await K(n)),b.value="collaborate";return}return b.value="base-collaborateSaved",R("a:user:add"),i},users:m,totalUsers:x,searchText:U,currentPage:S,currentLimit:N,editedUsers:t,updateEditedUsers:async d=>{var i,l;d=d||t.value,f.value=!0;try{await Promise.all(d.filter(n=>n.roles!=="No access").map(async n=>{var L;await _.auth.baseUserUpdate(p.value.id,n.id,{email:n.email,roles:n.roles,base_id:p.value.id,baseName:p.value.title});const w=(L=m.value)==null?void 0:L.find(k=>k.id===n.id);w&&(w.roles=n.roles)})),await Promise.all(d.filter(n=>n.roles==="No access").map(async n=>{await _.auth.baseUserRemove(p.value.id,n.id)})),m.value=((i=m.value)==null?void 0:i.filter(n=>n.roles!=="No access"))??[],x.value=((l=m.value)==null?void 0:l.length)??0,h.value=JSON.parse(JSON.stringify(m.value))}catch(n){W.error(await K(n))}finally{f.value=!1}},isBatchUpdating:f}},"useManageUsers");function na(){const _=la();return _||oa()}const ia={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ra=s("path",{fill:"currentColor",d:"M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"},null,-1),da=[ra];function ca(_,p){return r(),u("svg",ia,[...da])}const ua={name:"mdi-arrow-left",render:ca},va={class:"flex flex-col mx-4 h-112"},pa={key:0,class:"flex flex-row px-2 py-2 items-center gap-x-2 border-1 border-gray-100 rounded-md"},ma={class:"flex flex-col justify-center"},fa={class:"flex",style:{fontWeight:500}},_a={class:"flex flex-row mt-4 mb-2 pt-3 border-gray-100 border-t-1 gap-x-3 items-center text-xs"},wa={class:"bg-gray-50 border-gray-100 border-1 py-0.5 px-1.5 rounded-md","data-testid":"nc-manage-user-user-count"},ha={class:"flex flex-col mb-2 pr-0.5 h-96 overflow-y-auto users-list border-b-1 border-gray-100"},ya={key:0,class:"text-xs mt-2"},ga=["data-testid"],ba={class:"flex flex-row items-center gap-x-2"},xa={class:"flex flex-col justify-center"},$a={class:"flex",style:{fontWeight:500}},ka=["data-testid"],Ca={key:0,class:"flex"},Sa={key:1,class:"flex text-red-500",style:{fontWeight:500}},Ma={class:"flex flex-row w-full justify-center mt-2"},Ua={class:"flex flex-row justify-between pt-3 pb-2"},Fa=te({__name:"ManageUsers",emits:["close"],setup(_,{emit:p}){const R=p,{users:b,totalUsers:M,editedUsers:S,currentPage:N,loadUsers:U,updateEditedUsers:m,isBatchUpdating:h}=na(),x=V(()=>{var d;return(d=b.value)==null?void 0:d.find(i=>{var l;return(l=i.roles)==null?void 0:l.includes("owner")})}),f=V(()=>{var d;return((d=b.value)==null?void 0:d.filter(i=>{var l;return!((l=i.roles)!=null&&l.includes("owner"))}))||[]}),t=()=>{R("close",!1)},F=d=>!d.firstname&&!d.lastname,I=async d=>{var l,n,w;const i=((l=b.value)==null?void 0:l.length)||0;if(((n=b.value)==null?void 0:n.length)===M.value){d.complete();return}if(d.loading(),await U(),N.value+=1,i===((w=b.value)==null?void 0:w.length)){d.complete();return}d.loaded()},z=[{id:"Creator",name:"Creator",value:"creator"},{id:"Editor",name:"Editor",value:"editor"},{id:"Commenter",name:"Commenter",value:"commenter"},{id:"Viewer",name:"Viewer",value:"viewer"},{id:"None",name:"Remove",value:"No access"}];return(d,i)=>{const l=lt,n=nt,w=xe,L=ua,k=$e;return r(),u("div",va,[i[5]||(i[5]=s("div",{class:"flex mt-2.5 mb-2.5 border-b-1 border-gray-50 pb-1.5",style:{fontWeight:500}},"Manage Members",-1)),i[6]||(i[6]=s("div",{class:"flex mt-2.5 mb-2.5 text-xs font-bold"},"Base Owner",-1)),a(x)?(r(),u("div",pa,[c(l),s("div",ma,[s("div",fa,v(a(x).firstname)+" "+v(a(x).lastname),1),s("div",{class:ee(["flex text-xs",{"text-gray-500":!F(a(x))}])},v(a(x).email),3)])])):B("",!0),i[7]||(i[7]=s("div",{class:"flex flex-grow"},null,-1)),s("div",_a,[i[1]||(i[1]=s("div",{style:{fontWeight:500}},"People with access",-1)),s("div",wa,v(a(M)-1)+" users ",1)]),s("div",ha,[a(f).length===0?(r(),u("div",ya,"No users have access to this base")):B("",!0),(r(!0),u(q,null,ye(a(f),$=>(r(),u("div",{key:$.id,class:"flex flex-row mb-1.5 px-2 py-1.5 items-center border-1 border-gray-100 rounded-md justify-between","data-testid":`nc-manage-users-${$.email}`},[s("div",ba,[c(l),s("div",xa,[s("div",$a,v($.firstname)+" "+v($.lastname),1),s("div",{class:ee(["flex text-xs",{"text-gray-500":!F($)}])},v($.email),3)])]),c(n,{value:$.roles,"onUpdate:value":j=>$.roles=j,class:"flex !rounded-md p-0.5 !bg-white capitalize nc-dropdown-user-role-container !min-w-26","dropdown-class-name":"nc-dropdown-user-role !rounded-md",placeholder:"Select role",options:z},{option:g(j=>[s("div",{class:"flex flex-row items-center gap-x-2","data-testid":`nc-manage-users-role-${j.id!=="None"?j.name:"Remove"}`},[j.id!=="None"?(r(),u("div",Ca,v(j.name),1)):(r(),u("div",Sa,"Remove"))],8,ka)]),_:2},1032,["value","onUpdate:value"])],8,ga))),128)),c(a(ot),ze(d.$attrs,{onInfinite:I}),{spinner:g(()=>[s("div",Ma,[c(w)])]),complete:g(()=>i[2]||(i[2]=[s("span",null,null,-1)])),_:1},16)]),s("div",Ua,[s("div",{class:"flex flex-row items-center gap-x-2 px-2 rounded-md cursor-pointer hover:bg-gray-50",onClick:t},[c(L),i[3]||(i[3]=s("div",null,"Back to Share",-1))]),c(k,{type:"primary",class:"!rounded-md",disabled:a(S).length===0,loading:a(h),"data-testid":"nc-manage-users-submit",onClick:i[0]||(i[0]=()=>a(m)())},{default:g(()=>i[4]||(i[4]=[O(" Save Changes ")])),_:1},8,["disabled","loading"])])])}}}),La=de(Fa,[["__scopeId","data-v-17ab8da9"]]),Va=Ye(()=>qe(()=>import("./kbOJko4d.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]),import.meta.url).then(_=>_.default||_)),Na={key:0,class:"flex flex-row w-full px-5 justify-between items-center py-1"},Pa={key:1,class:"flex flex-col py-1.5"},Ta={class:"flex flex-row w-full px-5 justify-between items-center py-0.5"},Aa={class:"flex"},Ia={class:"flex flex-row mx-3 mt-2.5 pt-3.5 border-t-1 border-gray-100 justify-end gap-x-2"},ja={key:0,class:"flex flex-row items-center gap-x-1"},Ea={key:1,class:"flex flex-row items-center gap-x-1"},Ba={key:2},Oa={key:3,class:"flex flex-col px-1"},Ra={class:"flex flex-row justify-between items-center pb-1 mx-4 mt-3"},za={class:"flex text-base font-medium"},Da={key:0,class:"share-view"},Wa={class:"flex flex-row items-center gap-x-2 px-4 pt-3 pb-3 select-none"},Ja={class:"max-w-79/100 ml-2 px-2 py-0.5 rounded-md bg-gray-100 capitalize text-ellipsis overflow-hidden",style:{wordBreak:"keep-all",whiteSpace:"nowrap"}},Ha={key:0},Ga={key:1},Ya={class:"share-base"},qa={class:"flex flex-row items-center gap-x-2 px-4 pt-3 pb-3 select-none"},Ka={class:"max-w-79/100 ml-2 px-2 py-0.5 rounded-md bg-gray-100 capitalize text-ellipsis overflow-hidden",style:{wordBreak:"keep-all",whiteSpace:"nowrap"}},Qa={class:"flex flex-row justify-end mx-3 mt-1 mb-2 pt-4 gap-x-2"},Xa=te({__name:"View",props:{isViewToolbar:{type:Boolean}},setup(_){const{copy:p}=_e(),{dashboardUrl:R}=Ce(),b=be(),{base:M}=Q(b),{navigateToProjectPage:S}=b,{activeView:N}=Q(he());let U;if(_.isViewToolbar)try{U=ke().view}catch(l){console.error(l)}const{formStatus:m,showShareModal:h,invitationUsersData:x,isInvitationLinkCopied:f}=Q(re()),{resetData:t}=re(),F=A(!1),I=V(()=>x.value.invitationToken?`${R.value}#/signup/${x.value.invitationToken}`:null),z=De(We,{style:{fontSize:"24px"},spin:!0}),d=async()=>{await p(I.value),f.value=!0},i=async()=>{F.value=!0;try{await S({page:"collaborator"}),h.value=!1}catch(l){console.error(l),W.error("Failed to open manage access")}finally{F.value=!1}};return Je(h,l=>{l||setTimeout(()=>{t()},500)}),(l,n)=>{const w=xe,L=Me,k=$e,$=sa,j=Se,ae=Xt,se=Ke,oe=Va,X=Qe,le=Xe;return r(),D(le,{visible:a(h),"onUpdate:visible":n[3]||(n[3]=J=>Y(h)?h.value=J:null),class:ee(["!top-[1%]",{active:a(h)}]),"wrap-class-name":"nc-modal-share-collaborate",closable:!1,"mask-closable":a(m)!=="base-collaborateSaving","ok-button-props":{hidden:!0},"cancel-button-props":{hidden:!0},footer:null,width:a(m)==="manageCollaborators"?"60rem":"40rem"},{default:g(()=>{var J,E,Z,e;return[a(m)==="base-collaborateSaving"?(r(),u("div",Na,[n[4]||(n[4]=s("div",{class:"flex text-base font-bold"},"Adding Members",-1)),c(w,{indicator:a(z)},null,8,["indicator"])])):a(m)==="base-collaborateSaved"?(r(),u("div",Pa,[s("div",Ta,[n[5]||(n[5]=s("div",{class:"flex text-base font-medium"},"Members added",-1)),s("div",Aa,[c(L)])]),s("div",Ia,[c(k,{type:"text",class:"!border-1 !border-gray-200 !rounded-md",onClick:n[0]||(n[0]=o=>h.value=!1)},{default:g(()=>n[6]||(n[6]=[O("Close ")])),_:1}),c(k,{type:"text",class:"!border-1 !border-gray-200 !rounded-md","data-testid":"docs-share-invitation-copy","data-invite-link":a(I),onClick:d},{default:g(()=>[a(f)?(r(),u("div",ja,[c($,{class:"h-3.5"}),O(" "+v(l.$t("activity.copiedInviteLink")),1)])):(r(),u("div",Ea,[c(j,{class:"h-3.3"}),O(" "+v(l.$t("activity.copyInviteLink")),1)]))]),_:1},8,["data-invite-link"])])])):a(m)==="manageCollaborators"?(r(),u("div",Ba,[a(m)==="manageCollaborators"?(r(),D(La,{key:0,onClose:n[1]||(n[1]=o=>m.value="collaborate")})):B("",!0)])):(r(),u("div",Oa,[s("div",Ra,[s("div",za,v(l.$t("activity.share")),1)]),l.isViewToolbar&&a(N)?(r(),u("div",Da,[s("div",Wa,[(r(),D(He((E=("viewIcons"in l?l.viewIcons:a(fe))[(J=a(U))==null?void 0:J.type])==null?void 0:E.icon),{class:"nc-view-icon group-hover",style:Ge({color:(e=("viewIcons"in l?l.viewIcons:a(fe))[(Z=a(U))==null?void 0:Z.type])==null?void 0:e.color})},null,8,["style"])),s("div",null,v(l.$t("activity.shareView")),1),s("div",Ja,[a(N).is_default?(r(),u("span",Ha,v(l.$t("labels.defaultView")),1)):(r(),u("span",Ga,v(a(N).title),1))])]),c(ae)])):B("",!0),s("div",Ya,[s("div",qa,[c(se,{color:("parseProp"in l?l.parseProp:a(ie))(a(M).meta).iconColor,type:a(M).type,class:"nc-view-icon group-hover"},null,8,["color","type"]),s("div",null,v(l.$t("activity.shareBase.label")),1),s("div",Ka,v(a(M).title),1)]),c(oe)]),s("div",Qa,[c(X,{type:"secondary","data-testid":"docs-cancel-btn",onClick:n[2]||(n[2]=o=>h.value=!1)},{default:g(()=>[O(v(l.$t("general.close")),1)]),_:1}),c(X,{"data-testid":"docs-share-manage-access",type:"secondary",loading:a(F),onClick:i},{default:g(()=>[O(v(l.$t("activity.manageProjectAccess")),1)]),_:1},8,["loading"])])]))]}),_:1},8,["visible","class","mask-closable","width"])}}}),Za=de(Xa,[["__scopeId","data-v-3459860e"]]),us=Object.freeze(Object.defineProperty({__proto__:null,default:Za},Symbol.toStringTag,{value:"Module"}));export{us as V,Lt as _};
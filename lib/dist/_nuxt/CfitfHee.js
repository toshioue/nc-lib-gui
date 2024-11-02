import{_ as O}from"./CynerQ2m.js";import{e as Q,cL as U,ax as q,ag as H,r as w,g as K,M as X,o as n,c as d,a as l,N as m,P as N,Q as g,w as c,T,U as I,d as _,t as u,b as p,S as j,R as B,c_ as E,ah as x,ai as Y,aT as Z,$ as ee,y as R}from"./DZZ6t_j4.js";import{_ as te}from"./CY3l82lI.js";import{_ as ae}from"./CXD-Dj4T.js";const se={class:"h-full flex flex-col w-full"},ne={class:"h-full flex flex-col"},le={class:"flex flex-row justify-between items-center w-full mb-4"},oe={class:"flex"},ie={key:0},ce={class:"flex items-center gap-2"},me={key:1},ue={class:"flex items-center gap-2 text-gray-600 font-light"},fe={key:0,class:"flex items-center gap-2 max-w-full"},de={class:"min-w-5 flex items-center justify-center"},_e={key:1,class:"flex items-center gap-2 max-w-full"},ge=Q({__name:"Metadata",props:{sourceId:{}},emits:["baseSynced"],setup(L,{emit:V}){const S=L,A=V,{$api:k}=R(),C=U(),{loadTables:F}=C,{base:r}=q(C),{t:v}=H(),i=w(!1),y=w(!1),h=w([]);async function b(){var e,o,s;try{if(!((e=r.value)!=null&&e.id))return;i.value=!0,y.value=!1,h.value=await k.source.metaDiffGet((o=r.value)==null?void 0:o.id,S.sourceId);for(const a of h.value)((s=a.detectedChanges)==null?void 0:s.length)>0&&(a.syncState=a.detectedChanges.map(f=>f==null?void 0:f.msg).join(", "),y.value=!0)}catch(a){console.error(a)}finally{i.value=!1}}const{$poller:G}=R();async function P(){var e,o;try{if(!((e=r.value)!=null&&e.id)||!y.value)return;i.value=!0;const s=await k.source.metaDiffSync((o=r.value)==null?void 0:o.id,S.sourceId);G.subscribe({id:s.id},async a=>{a.status!=="close"&&(a.status===E.COMPLETED?(x.info(v("msg.info.metaDataRecreated")),await F(),await b(),A("baseSynced"),i.value=!1):status===E.FAILED&&(x.error("Failed to sync base metadata"),i.value=!1))})}catch(s){x.error(await Y(s))}}K(async()=>{h.value.length===0&&await b()});const W=[{title:v("labels.models"),key:"table_name",name:"table_name",minWidth:200,padding:"0px 12px"},{title:v("labels.syncState"),dataIndex:"syncState",key:"syncState",minWidth:200,padding:"0px 12px"}],z=e=>({class:`nc-metasync-row nc-metasync-row-${e.table_name}`});return(e,o)=>{const s=Z,a=ae,f=O,D=ee,J=te,M=X("e");return n(),d("div",se,[l("div",ne,[l("div",le,[l("div",oe,[m(y)?(n(),d("div",ie,[N((n(),g(s,{class:"nc-btn-metasync-sync-now",type:"primary",onClick:P},{default:c(()=>[l("div",ce,[(n(),g(T(("iconMap"in e?e.iconMap:m(I)).databaseSync))),_(" "+u(e.$t("activity.metaSync")),1)])]),_:1})),[[M,["a:proj-meta:meta-data:sync"]]])])):(n(),d("div",me,[l("span",null,[p(a,{message:e.$t("msg.info.tablesMetadataInSync"),type:"success","show-icon":"",class:"!rounded-md"},null,8,["message"])])]))]),N((n(),g(s,{class:"self-start !rounded-md nc-btn-metasync-reload",onClick:b},{default:c(()=>[l("div",ue,[(n(),g(T(("iconMap"in e?e.iconMap:m(I)).reload),{class:j({"animate-infinite animate-spin !text-success":m(i)})},null,8,["class"])),_(" "+u(e.$t("general.reload")),1)])]),_:1})),[[M,["a:proj-meta:meta-data:reload"]]])]),p(J,{columns:W,data:m(h)??[],"row-height":"44px","header-row-height":"44px","is-data-loading":m(i),"custom-row":z,class:"nc-metasync-table h-[calc(100%_-_58px)] w-full"},{bodyCell:c(({column:$,record:t})=>[$.key==="table_name"?(n(),d("div",fe,[l("div",de,[p(f,{meta:t,class:"text-gray-500"},null,8,["meta"])]),p(D,{class:"truncate","show-on-truncate-only":""},{title:c(()=>[_(u(t.title||t.table_name),1)]),default:c(()=>[_(" "+u(t.title||t.table_name),1)]),_:2},1024)])):B("",!0),$.key==="syncState"?(n(),d("div",_e,[p(D,{class:"truncate","show-on-truncate-only":""},{title:c(()=>[_(u((t==null?void 0:t.syncState)||e.$t("msg.info.metaNoChange")),1)]),default:c(()=>[l("span",{class:j({"text-red-500":t==null?void 0:t.syncState,"text-gray-500":!(t!=null&&t.syncState)})},u((t==null?void 0:t.syncState)||e.$t("msg.info.metaNoChange")),3)]),_:2},1024)])):B("",!0)]),_:1},8,["data","is-data-loading"])]),o[0]||(o[0]=l("div",{class:"flex place-content-center item-center"},null,-1))])}}});export{ge as default};
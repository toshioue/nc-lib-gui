import ae from"./Cj4l15BV.js";import le from"./Dqwep-0C.js";import{f as se,cN as oe,cZ as ne,bN as Y,r as _,da as ie,d9 as ce,bc as de,a7 as ue,ad as re,g2 as me,H as pe,d3 as fe,fs as ve,i as _e,o as b,S as $,w as r,a as i,V as I,P as l,W as j,d as m,t as u,b as f,Q as B,c as he,Y as be,A as ge,n as ke,fP as xe,d2 as ye,ip as we,a0 as $e,a1 as Ce,p as Me,e as Le,_ as Ne}from"./Cgw6cdOy.js";import{_ as Ie}from"./C6pnOEba.js";import{_ as Te}from"./ahvdY77A.js";import{D as Ae}from"./tqKkZMzS.js";import"./Bcy-XIkn.js";import{I as Ve}from"./DPaOlBFV.js";import"./DpDIhxXu.js";import"./BBXMuneh.js";import"./KNudlHpk.js";import"./CitraFSq.js";import"./hvq8FVej.js";import"./C8c9012h.js";import"./BIsWr_mR.js";import"./BQQOEPN4.js";import"./BZz6iAla.js";const je=g=>(Me("data-v-e4296839"),g=g(),Le(),g),Be={class:"flex flex-col gap-3"},Se={class:"text-base text-gray-800 font-semibold"},ze={class:"text-gray-500 text-[13px] leading-5"},Oe={class:"font-semibold"},Ue={class:"flex w-full gap-2 justify-between items-center"},Fe={class:"flex items-center gap-2"},Re={class:"border-1 rounded-md h-[300px] nc-scrollbar-md border-gray-200"},De=["data-testid","onClick"],Ee={class:"flex flex-row items-center w-full cursor-pointer truncate ml-1 py-[5px] pr-2"},He=je(()=>i("div",{class:"flex-1"},null,-1)),Pe={class:"flex w-full gap-2 justify-end"},We=se({__name:"AddLookups",props:{column:{},value:{type:Boolean}},setup(g){const S=g,{$api:z}=ge(),O=oe(),{getMeta:Z,metas:U}=ne(),p=Y(ie,_()),F=Y(ce,_()),{loadTables:G}=O,{tables:R}=de(O),D=ue(S,"column"),k=re(S,"value"),E=_(),T=_(!1),x=_(""),h=_([]),c=_({}),J=e=>ke(xe(e)?ae:le,{columnMeta:e}),d=me(async()=>{var t;const e=(t=D.value.colOptions)==null?void 0:t.fk_related_model_id;if(e){let n=R.value.find(s=>s.id===e);return n||(await G(),n=R.value.find(s=>s.id===e)),n}return null}),K=()=>{Object.keys(c.value).forEach(e=>c.value[e]=!1)},X=()=>{h.value.forEach(e=>c.value[e.id]=!0)},ee=async()=>{var e,t,n,s,C,M,L,v,y,a,w,H,P;try{T.value=!0;const N=[],W=((t=(e=p.value)==null?void 0:e.columns)==null?void 0:t.length)??0;for(const[A]of Object.entries(c.value).filter(([,o])=>o)){const o=U.value[(n=d.value)==null?void 0:n.id].columns.find(V=>V.id===A),q=h.value.findIndex(V=>V.id===A),Q={uidt:ye.Lookup,fk_lookup_column_id:A,fk_relation_column_id:D.value.id,lookupTableTitle:(s=d.value)==null?void 0:s.title,lookupColumnTitle:(o==null?void 0:o.title)||o.column_name,table_name:(C=p.value)==null?void 0:C.table_name,title:`${o==null?void 0:o.title} from ${(M=d.value)==null?void 0:M.title}`,view_id:(L=F.value)==null?void 0:L.id,order:W+q,column_name:`${o==null?void 0:o.title} from (${(v=d.value)==null?void 0:v.title})`,column_order:{order:W+q,view_id:(y=F.value)==null?void 0:y.id}},te=we({formState:Q,metaColumns:(a=d.value)==null?void 0:a.columns,tableExplorerColumns:(w=p.value)==null?void 0:w.columns});N.push({op:"add",column:{...Q,title:te}})}await z.dbTableColumn.bulk((H=p.value)==null?void 0:H.id,{hash:E.value,ops:N}),await Z((P=p==null?void 0:p.value)==null?void 0:P.id,!0),k.value=!1}catch(N){console.error(N)}finally{T.value=!1}};return pe([d,x],async()=>{if(d.value){const e=U.value[d.value.id].columns;h.value=e.filter(t=>!fe(t)&&!ve(t)).filter(t=>{var n,s;return(s=t==null?void 0:t.title)==null?void 0:s.toLowerCase().startsWith((n=x.value)==null?void 0:n.toLowerCase())})}}),_e(async()=>{var e;E.value=(await z.dbTableColumn.hash((e=p.value)==null?void 0:e.id)).hash}),(e,t)=>{const n=Ve,s=$e,C=Ce,M=Ie,L=Te;return b(),$(L,{visible:l(k),"onUpdate:visible":t[3]||(t[3]=v=>B(k)?k.value=v:null),size:"small"},{default:r(()=>{var v,y;return[i("div",Be,[i("div",null,[i("h1",Se,[(b(),$(I(("iconMap"in e?e.iconMap:l(j)).cellLookup),{class:"text-gray-500 pb-1"})),m(" "+u(e.$t("general.addLookupField")),1)]),i("div",ze,[m(u(e.$t("labels.addNewLookupHelperText1"))+" ",1),i("span",Oe,u(((v=l(d))==null?void 0:v.title)??((y=l(d))==null?void 0:y.table_name)),1),m(" "+u(e.$t("labels.addNewLookupHelperText2")),1)])]),i("div",Ue,[f(n,{value:l(x),"onUpdate:value":t[0]||(t[0]=a=>B(x)?x.value=a:null),class:"w-full h-8 flex-1",size:"small",placeholder:e.$t("placeholder.searchFields")},{prefix:r(()=>[(b(),$(I(("iconMap"in e?e.iconMap:l(j)).search),{class:"w-4 text-gray-500 h-4"}))]),_:1},8,["value","placeholder"]),i("div",Fe,[f(s,{size:"small",type:"text",class:"!text-xs",onClick:K},{default:r(()=>[m(u(e.$t("labels.clearAll")),1)]),_:1}),f(s,{size:"small",type:"text",class:"!text-xs",onClick:X},{default:r(()=>[m(u(e.$t("general.addAll")),1)]),_:1})])]),i("div",Re,[f(l(Ae),{modelValue:l(h),"onUpdate:modelValue":t[1]||(t[1]=a=>B(h)?h.value=a:null),"item-key":"id","ghost-class":"nc-lookup-menu-items-ghost"},{item:r(({element:a})=>[(b(),he("div",{key:a.id,"data-testid":`nc-lookup-add-menu-${a.title}`,class:"px-3 py-1 flex flex-row items-center rounded-md hover:bg-gray-100",onClick:be(w=>l(c)[a.id]=!l(c)[a.id],["stop"])},[(b(),$(I(("iconMap"in e?e.iconMap:l(j)).drag),{class:"cursor-move !h-3.75 text-gray-600 mr-1"})),i("div",Ee,[(b(),$(I(J(a)),{class:"!w-3.5 !h-3.5 !text-gray-500"})),f(C,{class:"flex-1 pl-1 pr-2 truncate","show-on-truncate-only":""},{title:r(()=>[m(u(a.title),1)]),default:r(()=>[m(u(a.title),1)]),_:2},1024),f(M,{checked:l(c)[a.id],"onUpdate:checked":w=>l(c)[a.id]=w,size:"default"},null,8,["checked","onUpdate:checked"])]),He],8,De))]),_:1},8,["modelValue"])]),i("div",Pe,[f(s,{type:"secondary",size:"small",onClick:t[2]||(t[2]=a=>k.value=!1)},{default:r(()=>[m(u(e.$t("general.cancel")),1)]),_:1}),f(s,{loading:l(T),disabled:!Object.values(l(c)).filter(Boolean).length,size:"small",onClick:ee},{default:r(()=>[m(u(e.$t("general.addLookupField",{count:Object.values(l(c)).filter(Boolean).length||""})),1)]),_:1},8,["loading","disabled"])])])]}),_:1},8,["visible"])}}}),dt=Ne(We,[["__scopeId","data-v-e4296839"]]);export{dt as default};

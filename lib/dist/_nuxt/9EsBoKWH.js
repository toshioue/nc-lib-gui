import Te from"./Cj4l15BV.js";import ze from"./Dqwep-0C.js";import{f as Ke,bN as j,r as L,d9 as Pe,da as He,hn as Qe,gD as qe,N as We,db as Ze,dB as Je,g as T,h$ as Xe,ai as ea,cZ as aa,c_ as sa,hk as Ie,d7 as d,ij as ve,df as fe,H as Ce,d2 as _e,O as ta,o as r,S as f,w as c,a as g,Y as E,P as a,c as A,t as h,b as w,Q as X,aq as ee,av as Ne,U as z,V as D,T as I,d as M,W as q,R as Le,A as la,aj as oa,ak as ia,n as na,fP as ra,$ as da,a0 as ca,a1 as ua,aN as pa,p as ma,e as va,_ as fa}from"./Cgw6cdOy.js";import{_ as _a}from"./DBOeGHNL.js";import{_ as wa}from"./Bxm040c6.js";import{_ as ga}from"./CiTH7PYd.js";import{_ as ya}from"./DQEz7g1o.js";import{a as ba}from"./BcpeJQoi.js";import{a as ha}from"./DFiWgQ57.js";import{i as xa}from"./BBXMuneh.js";import{u as ka}from"./LbdZxisI.js";import{_ as Aa}from"./C0xV_Bo1.js";import{D as Ia}from"./tqKkZMzS.js";import"./Bcy-XIkn.js";import{I as Ca}from"./DPaOlBFV.js";import{S as Na,_ as La}from"./D8rpj5Lr.js";import"./DpDIhxXu.js";import"./BiBN5Lxt.js";import"./hvq8FVej.js";import"./CO8XXsKl.js";import"./C8c9012h.js";import"./BIsWr_mR.js";import"./BQQOEPN4.js";import"./BZz6iAla.js";import"./BcZAlRJW.js";import"./BohSct8s.js";const Me=W=>(ma("data-v-c142a802"),W=W(),va(),W),Ma={class:"flex items-center gap-1"},Sa={class:"flex items-center gap-2"},$a={key:2,class:"text-capitalize !text-[13px] font-medium"},Oa={key:0,class:"bg-brand-50 text-brand-500 py-1 px-2 text-md rounded-md"},Ra={key:0,class:"flex items-center gap-2 px-2 mb-4 w-80"},Ea={class:"pl-2 flex text-sm select-none text-gray-600"},Fa={class:"flex-1 nc-dropdown-cover-image-wrapper flex items-stretch border-1 border-gray-200 rounded-lg transition-all duration-0.3s max-w-[206px]"},ja={class:"w-full flex gap-2 items-center justify-between max-w-[400px]"},Da={class:"flex items-center px-2 border-l-1 border-gray-200 cursor-pointer"},Va={class:"flex flex-col mt-2 pb-2 nc-scrollbar-thin max-h-[47vh] px-2"},Ba={class:"nc-fields-list"},Ua={key:0,class:"px-2 py-6 text-gray-500 flex flex-col items-center gap-6 text-center"},Ga=Me(()=>g("img",{src:Aa,class:"!w-[164px] flex-none",alt:"No search results found"},null,-1)),Ya=["data-testid"],Ta=["onClick"],za={key:0,class:"flex mr-2"},Ka=Me(()=>g("div",{class:"flex-1"},null,-1)),Pa={key:1,class:"flex px-2 gap-2 py-2"},Ha=Ke({__name:"FieldsMenu",setup(W){const l=j(Pe,L()),we=j(He,L()),V=j(Qe,void 0),ae=j(qe,void 0),{isMobileMode:Se}=We(),$e=j(Ze,L(!1)),ge=j(Je,L(!1)),Oe=j(Xe,T(()=>!1)),{$api:K,$e:ye}=la(),{t:be}=ea(),{metas:he,getMeta:Re}=aa(),{showSystemFields:Z,fields:p,filteredFieldList:se,numberOfHiddenFields:te,filterQuery:B,showAll:le,hideAll:oe,saveOrUpdate:Ee,metaColumnById:U,loadViewColumns:ie,toggleFieldStyles:ne,toggleFieldVisibility:Fe,isLocalMode:je}=ba(),{eventBus:De,isDefaultView:Ve}=ha(),{addUndo:G,defineViewScope:Y}=sa();De.on(e=>{(e===Ie.FIELD_RELOAD||e===Ie.MAPPED_BY_COLUMN_CHANGE)&&ie()});const Be=T(()=>{var t,o,n,u;if(((t=l.value)==null?void 0:t.type)!==d.GRID&&((o=l.value)==null?void 0:o.type)!==d.CALENDAR)return null;const e=(n=Object.values(U.value))==null?void 0:n.find(m=>m==null?void 0:m.pv);return(u=se.value)==null?void 0:u.find(m=>m.fk_column_id===(e==null?void 0:e.id))}),re=async(e,t=!1)=>{try{if(!p.value||(t||G({undo:{fn:()=>{if(!p.value)return;const o=p.value[e.moved.newIndex];p.value[e.moved.newIndex]=p.value[e.moved.oldIndex],p.value[e.moved.oldIndex]=o,re({moved:{newIndex:e.moved.oldIndex,oldIndex:e.moved.newIndex}},!0)},args:[]},redo:{fn:()=>{if(!p.value)return;const o=p.value[e.moved.oldIndex];p.value[e.moved.oldIndex]=p.value[e.moved.newIndex],p.value[e.moved.newIndex]=o,re(e,!0)},args:[]},scope:Y({view:l.value})}),p.value.length<2))return;await Promise.all(p.value.map(async(o,n)=>{o.order!==n+1&&(o.order=n+1,await Ee(o,n,!0,!!Ve.value))})),await ie(),ye("a:fields:reorder")}catch(o){oa.error(await ia(o))}},P=L([]),de=async e=>{var t,o,n,u,m,x,i,y,C,_,N,b,$;(((t=l.value)==null?void 0:t.type)===d.GALLERY||((o=l.value)==null?void 0:o.type)===d.KANBAN||((n=l.value)==null?void 0:n.type)===d.CALENDAR)&&((u=l.value)!=null&&u.id)&&((m=l.value)!=null&&m.view)&&(((x=l.value)==null?void 0:x.type)===d.GALLERY?(await K.dbView.galleryUpdate((i=l.value)==null?void 0:i.id,{fk_cover_image_col_id:e}),l.value.view.fk_cover_image_col_id=e):((y=l.value)==null?void 0:y.type)===d.KANBAN?(await K.dbView.kanbanUpdate((C=l.value)==null?void 0:C.id,{fk_cover_image_col_id:e}),l.value.view.fk_cover_image_col_id=e):((_=l.value)==null?void 0:_.type)===d.CALENDAR&&(await K.dbView.calendarUpdate((N=l.value)==null?void 0:N.id,{fk_cover_image_col_id:e}),l.value.view.fk_cover_image_col_id=e),await(V==null?void 0:V.trigger()),e&&!(($=(b=p.value)==null?void 0:b.find(k=>k.fk_column_id===e))!=null&&$.show)&&await(ae==null?void 0:ae.trigger({shouldShowLoading:!1})))},S=T({get:()=>{var t,o,n,u,m;const e=(((t=l.value)==null?void 0:t.type)===d.GALLERY||((o=l.value)==null?void 0:o.type)===d.KANBAN)&&((n=l.value)!=null&&n.view)?((u=l.value)==null?void 0:u.view).fk_cover_image_col_id:void 0;return(m=P.value)!=null&&m.find(x=>x.value===e)?e:e===null?null:void 0},set:async e=>{e!==S.value&&(G({undo:{fn:await de,args:[S.value]},redo:{fn:await de,args:[e]},scope:Y({view:l.value})}),await de(e))}}),ce=async e=>{var t,o,n,u,m,x,i,y,C,_,N;if(!(![d.GALLERY,d.KANBAN].includes((t=l.value)==null?void 0:t.type)||!((o=l.value)!=null&&o.id)||!((n=l.value)!=null&&n.view))){if(((u=l.value)==null?void 0:u.type)===d.GALLERY){const b={...fe((x=(m=l.value)==null?void 0:m.view)==null?void 0:x.meta),fk_cover_image_object_fit:e};await K.dbView.galleryUpdate((i=l.value)==null?void 0:i.id,{meta:b}),l.value.view.meta=b}else if(((y=l.value)==null?void 0:y.type)===d.KANBAN){const b={...fe((_=(C=l.value)==null?void 0:C.view)==null?void 0:_.meta),fk_cover_image_object_fit:e};await K.dbView.kanbanUpdate((N=l.value)==null?void 0:N.id,{meta:b}),l.value.view.meta=b}await(V==null?void 0:V.trigger())}},Ue=[{value:ve.FIT,label:be("labels.fitImage")},{value:ve.COVER,label:be("labels.coverImageArea")}],F=L({isOpen:!1,isSaving:null}),H=T({get:()=>{var e,t,o,n,u;return[d.GALLERY,d.KANBAN].includes((e=l.value)==null?void 0:e.type)&&((t=l.value)!=null&&t.view)?((u=fe((n=(o=l.value)==null?void 0:o.view)==null?void 0:n.meta))==null?void 0:u.fk_cover_image_object_fit)||ve.FIT:void 0},set:async e=>{e!==H.value&&(F.value.isSaving=e,G({undo:{fn:ce,args:[H.value]},redo:{fn:ce,args:[e]},scope:Y({view:l.value})}),await ce(e)),F.value.isSaving=null,F.value.isOpen=!1}}),Ge=()=>{G({undo:{fn:async()=>{await oe()},args:[]},redo:{fn:async()=>{await le()},args:[]},scope:Y({view:l.value})}),le()},Ye=()=>{G({undo:{fn:async()=>{await le()},args:[]},redo:{fn:async()=>{await oe()},args:[]},scope:Y({view:l.value})}),oe()},ue=T({get:()=>{var e;return(e=se.value)==null?void 0:e.every(t=>t.show)},set:async e=>{e?await Ge():await Ye()}}),xe=e=>na(ra(e)?Te:ze,{columnMeta:e}),Q=L(!1),pe=T({get:()=>Z.value,set:e=>{G({undo:{fn:t=>{Z.value=!t},args:[e]},redo:{fn:t=>{Z.value=t},args:[e]},scope:Y({view:l.value})}),Z.value=e}}),me=L(!1),ke=L();return Ce(Q,e=>{e&&(B.value="",setTimeout(()=>{var t;(t=ke.value)==null||t.focus()},100))}),Ce(p,async e=>{var x;if(!e||ge.value||![d.GALLERY,d.KANBAN].includes((x=l.value)==null?void 0:x.type))return;const t=e.filter(i=>i.fk_column_id&&U.value[i.fk_column_id].uidt===_e.Attachment).map(i=>({value:i.fk_column_id,label:i.title}))??[];P.value=[{value:null,label:"No Image"},...t];const o=e.filter(i=>i.fk_column_id&&U.value[i.fk_column_id].uidt===_e.Lookup).map(i=>U.value[i.fk_column_id]),n=new Set,u=async(i,y,C)=>{var N,b,$,k,O,R,s;const _=C||(N=we.value)!=null&&N.id?(k=($=he.value[C||((b=we.value)==null?void 0:b.id)])==null?void 0:$.columns)==null?void 0:k.find(v=>{var J;return v.id===((J=y==null?void 0:y.colOptions)==null?void 0:J.fk_relation_column_id)}):void 0;if((O=_==null?void 0:_.colOptions)!=null&&O.fk_related_model_id){await Re(_.colOptions.fk_related_model_id);const v=(s=(R=he.value[_.colOptions.fk_related_model_id])==null?void 0:R.columns)==null?void 0:s.find(J=>{var Ae;return J.id===((Ae=y==null?void 0:y.colOptions)==null?void 0:Ae.fk_lookup_column_id)});v&&xa(v)?n.add(i.id):v&&(v==null?void 0:v.uidt)===_e.Lookup&&await u(i,v,_.colOptions.fk_related_model_id)}};await Promise.allSettled(o.map(i=>u(i,i)));const m=o.filter(i=>n.has(i==null?void 0:i.id)).map(i=>({value:i.id,label:i.title}));P.value=[...P.value,...m]},{immediate:!0}),ka(Q),(e,t)=>{const o=da,n=ca,u=ua,m=Na,x=La,i=pa,y=_a,C=wa,_=ga,N=Ca,b=ya,$=ta("e");return r(),f(_,{visible:a(Q),"onUpdate:visible":t[14]||(t[14]=k=>X(Q)?Q.value=k:null),trigger:["click"],class:"!xs:hidden","overlay-class-name":"nc-dropdown-fields-menu nc-toolbar-dropdown"},{overlay:c(()=>{var k,O,R;return[g("div",{class:"pt-2 bg-white w-full min-w-72 max-w-80 rounded-lg nc-table-toolbar-menu","data-testid":"nc-fields-menu",onClick:t[13]||(t[13]=E(()=>{},["stop"]))},[!a(ge)&&(((k=a(l))==null?void 0:k.type)===a(d).GALLERY||((O=a(l))==null?void 0:O.type)===a(d).KANBAN)?(r(),A("div",Ra,[g("div",Ea,h(e.$t("labels.coverImageField")),1),g("div",Fa,[w(x,{value:a(S),"onUpdate:value":t[0]||(t[0]=s=>X(S)?S.value=s:null),class:"flex-1 max-w-[calc(100%_-_33px)]","dropdown-class-name":"nc-dropdown-cover-image !rounded-lg",bordered:!1,onClick:t[1]||(t[1]=E(()=>{},["stop"]))},{suffixIcon:c(()=>[w(o,{class:"text-gray-700",icon:"arrowDown"})]),default:c(()=>[(r(!0),A(ee,null,Ne(a(P),s=>(r(),f(m,{key:s.value,value:s.value},{default:c(()=>[g("div",ja,[g("div",{class:z(["flex-1 flex items-center gap-1",{"max-w-[calc(100%_-_20px)]":a(S)===s.value,"max-w-full":a(S)!==s.value}])},[s.value?(r(),f(D(xe(a(U)[s.value])),{key:0,class:"!w-3.5 !h-3.5 !text-gray-700 !ml-0"})):I("",!0),w(u,{class:"flex-1 max-w-[calc(100%_-_20px)] truncate","show-on-truncate-only":""},{title:c(()=>[M(h(s.label),1)]),default:c(()=>[M(h(s.label),1)]),_:2},1024)],2),a(S)===s.value?(r(),f(o,{key:0,id:"nc-selected-item-icon",icon:"check",class:"flex-none text-primary w-4 h-4"})):I("",!0)])]),_:2},1032,["value"]))),128))]),_:1},8,["value"]),a(H)?(r(),f(_,{key:0,visible:a(F).isOpen,"onUpdate:visible":t[2]||(t[2]=s=>a(F).isOpen=s),placement:"bottomRight"},{overlay:c(()=>[w(C,{class:"nc-cover-image-object-fit-dropdown-menu min-w-[168px]"},{default:c(()=>[(r(),A(ee,null,Ne(Ue,s=>w(y,{key:s.value,class:"!children:w-full",onClick:E(v=>H.value=s.value,["stop"])},{default:c(()=>[g("span",null,h(s.label),1),s.value===a(F).isSaving?(r(),f(i,{key:0,size:"regular",class:"flex-none"})):s.value===a(H)?(r(),f(o,{key:1,icon:"check",class:"flex-none text-primary w-4 h-4"})):I("",!0)]),_:2},1032,["onClick"])),64))]),_:1})]),default:c(()=>[g("button",Da,[w(o,{icon:"settings",class:z(["h-4 w-4",{"!text-brand-500":a(F).isOpen}])},null,8,["class"])])]),_:1},8,["visible"])):I("",!0)])])):I("",!0),g("div",{class:"px-2",onClick:t[4]||(t[4]=E(()=>{},["stop"]))},[w(N,{ref_key:"fieldsMenuSearchRef",ref:ke,value:a(B),"onUpdate:value":t[3]||(t[3]=s=>X(B)?B.value=s:null),placeholder:e.$t("placeholder.searchFields"),class:"nc-toolbar-dropdown-search-field-input"},{prefix:c(()=>[w(o,{icon:"search",class:"nc-search-icon h-3.5 w-3.5 mr-1"})]),_:1},8,["value","placeholder"])]),g("div",Va,[g("div",Ba,[(R=a(p))!=null&&R.filter(s=>s.title.toLowerCase().includes(a(B).toLowerCase())).length?I("",!0):(r(),A("div",Ua,[Ga,M(" "+h(e.$t("title.noResultsMatchedYourSearch")),1)])),w(a(Ia),{modelValue:a(p),"onUpdate:modelValue":t[7]||(t[7]=s=>X(p)?p.value=s:null),"item-key":"id","ghost-class":"nc-fields-menu-items-ghost",onChange:t[8]||(t[8]=s=>re(s)),onStart:t[9]||(t[9]=s=>me.value=!0),onEnd:t[10]||(t[10]=s=>me.value=!1)},{item:c(({element:s})=>[a(se).filter(v=>a(l).type!==a(d).CALENDAR?v!==a(Be):!0).includes(s)?(r(),A("div",{key:s.id,"data-testid":`nc-fields-menu-${s.title}`,class:"pl-2 flex flex-row items-center rounded-md hover:bg-gray-100",onClick:t[6]||(t[6]=E(()=>{},["stop"]))},[(r(),f(D(("iconMap"in e?e.iconMap:a(q)).drag),{class:"cursor-move !h-3.75 text-gray-600 mr-1"})),Le((r(),A("div",{class:"flex flex-row items-center w-full cursor-pointer truncate ml-1 py-[5px] pr-2",onClick:()=>{s.show=!s.show,a(Fe)(s.show,s)}},[(r(),f(D(xe(a(U)[s.fk_column_id])),{class:"!w-3.5 !h-3.5 !text-gray-500"})),w(u,{class:"flex-1 pl-1 pr-2 truncate","show-on-truncate-only":"",disabled:a(me)},{title:c(()=>[M(h(s.title),1)]),default:c(()=>[M(h(s.title),1)]),_:2},1032,["disabled"]),a(l).type===a(d).CALENDAR?(r(),A("div",za,[w(n,{class:z([{"!bg-gray-800 !text-white":s.bold},"!rounded-r-none !w-5 !h-5"]),size:"xxsmall",type:"secondary",onClick:E(v=>a(ne)(s,"bold",!s.bold),["stop"])},{default:c(()=>[(r(),f(D(("iconMap"in e?e.iconMap:a(q)).bold),{class:"!w-3 !h-3"}))]),_:2},1032,["class","onClick"]),w(n,{class:z([{"!bg-gray-800 !text-white":s.italic},"!rounded-x-none !border-x-0 !w-5 !h-5"]),size:"xxsmall",type:"secondary",onClick:E(v=>a(ne)(s,"italic",!s.italic),["stop"])},{default:c(()=>[(r(),f(D(("iconMap"in e?e.iconMap:a(q)).italic),{class:"!w-3 !h-3"}))]),_:2},1032,["class","onClick"]),w(n,{class:z([{"!bg-gray-800 !text-white":s.underline},"!rounded-l-none !w-5 !h-5"]),size:"xxsmall",type:"secondary",onClick:E(v=>a(ne)(s,"underline",!s.underline),["stop"])},{default:c(()=>[(r(),f(D(("iconMap"in e?e.iconMap:a(q)).underline),{class:"!w-3 !h-3"}))]),_:2},1032,["class","onClick"])])):I("",!0),w(b,{checked:s.show,disabled:s.isViewEssentialField,size:"xsmall",onChange:t[5]||(t[5]=v=>a(ye)("a:fields:show-hide"))},null,8,["checked","disabled"])],8,Ta)),[[$,["a:fields:show-hide"]]]),Ka],8,Ya)):I("",!0)]),_:1},8,["modelValue"])])]),a(B)?I("",!0):(r(),A("div",Pa,[w(n,{class:"nc-fields-show-all-fields",size:"small",type:"ghost",onClick:t[11]||(t[11]=s=>ue.value=!a(ue))},{default:c(()=>[M(h(a(ue)?e.$t("general.hideAll"):e.$t("general.showAll"))+" "+h(e.$t("objects.fields").toLowerCase()),1)]),_:1}),a(je)?I("",!0):(r(),f(n,{key:0,class:"nc-fields-show-system-fields",size:"small",type:"ghost",onClick:t[12]||(t[12]=s=>pe.value=!a(pe))},{default:c(()=>[M(h(a(pe)?e.$t("title.hideSystemFields"):e.$t("activity.showSystemFields")),1)]),_:1}))]))])]}),default:c(()=>[g("div",{class:z({"nc-active-btn":a(te)})},[Le((r(),f(n,{disabled:a($e),class:"nc-fields-menu-btn nc-toolbar-btn !h-7 !border-0",size:"small",type:"secondary"},{default:c(()=>{var k,O,R,s;return[g("div",Ma,[g("div",Sa,[((k=a(l))==null?void 0:k.type)===a(d).KANBAN||((O=a(l))==null?void 0:O.type)===a(d).GALLERY?(r(),f(o,{key:0,class:"h-4 w-4",icon:"creditCard"})):(r(),f(D(("iconMap"in e?e.iconMap:a(q)).fields),{key:1,class:"h-4 w-4"})),!a(Se)&&!a(Oe)?(r(),A("span",$a,[((R=a(l))==null?void 0:R.type)===a(d).KANBAN||((s=a(l))==null?void 0:s.type)===a(d).GALLERY?(r(),A(ee,{key:0},[M(h(e.$t("title.editCards")),1)],64)):(r(),A(ee,{key:1},[M(h(e.$t("objects.fields")),1)],64))])):I("",!0)]),a(te)?(r(),A("span",Oa,h(a(te)),1)):I("",!0)])]}),_:1},8,["disabled"])),[[$,["c:fields"]]])],2)]),_:1},8,["visible"])}}}),bs=fa(Ha,[["__scopeId","data-v-c142a802"]]);export{bs as default};
const __vite__fileDeps=["./DJdm2h3M.js","./BLdk6lRf.js","./entry.B8GgT5QA.css","./DGloOIJW.js","./CcZku21G.js","./DN8O6zVt.js","./LockType.ndmCgkkH.css","./CIBp-np2.js","./QYPbAW4m.js","./wY1y7Ha2.js","./BTZSPjiu.js","./DD6KJAAC.js","./JCToPTxN.js","./BLwY008C.js","./CBNgcPSC.js","./BD_L_KCX.js","./wBAlULwF.js","./JimKVLH8.js","./DWFLnnq8.js","./BQQOEPN4.js","./C-Z2v8Hi.js","./BTh9o-aK.js","./ETGzLqdt.js","./C9I3jrHo.js","./C0Si9_oy.js","./DlUxsCvA.js","./9nfE2yqV.js","./y7P9C4A6.js","./Cdzx44_6.js","./CpASSaD_.js","./DTv03lbO.js","./QXgsgnSx.js","./BrF0EXdL.js","./BaseLogo.BjMH04Ym.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as be,cI as ke,ac as Ie,ag as Ae,o as t,U as b,w as o,P as e,c,b as n,a as g,t as d,S as C,Q as Le,an as de,ao as Ne,c_ as De,A as Me,cP as je,at as we,cG as ge,ba as Ke,r as G,ai as Fe,g as X,cZ as r,aj as qe,eJ as Ye,H as He,eb as Qe,a_ as We,i as Ze,cU as N,fB as Je,O as Re,al as p,d as _,aF as Xe,am as le,V as Te,W as Se,R as ne,ap as Ee,$ as Ge,a2 as Be,aI as ea,p as Oe,e as Pe,_ as Ue,L as aa,bL as ta,fC as la,cB as oa,fD as j,ah as ia,T as sa,a9 as na,Z as he,a5 as $e}from"./BLdk6lRf.js";import{_ as da}from"./D1rFOljU.js";import{_ as ca}from"./CU4s23lZ.js";import{_ as ra}from"./iRN6wbuV.js";import{i as ua}from"./DV47GYLy.js";import"./JimKVLH8.js";import{I as _a}from"./DWFLnnq8.js";import{S as ma}from"./BrF0EXdL.js";import{F as pa}from"./JCToPTxN.js";import{_ as fa}from"./BLwY008C.js";import{_ as va}from"./xXPG6Rgs.js";import{_ as ya}from"./DMNHEWRT.js";import{_ as wa}from"./BnfvRRxP.js";import{_ as ga}from"./CsKtxyeB.js";import{u as ba}from"./ZMTPBx1J.js";const ka={key:0,class:"flex flex-row items-center py-2 px-3 bg-gray-50 rounded-lg text-gray-700"},ha={class:"capitalize text-ellipsis overflow-hidden select-none w-full pl-3",style:{wordBreak:"keep-all",whiteSpace:"nowrap",display:"inline"}},wt=be({__name:"ViewDelete",props:{modelValue:{type:Boolean},view:{}},emits:["update:modelValue","deleted"],setup(h,{emit:oe}){const f=h,S=oe,{refreshCommandPalette:B}=ke(),{view:W}=f,P=Ie(f,"modelValue",S),{api:ie}=Ae(),{$e:U}=Me();async function ee(){if(f.view)try{await ie.dbView.delete(f.view.id),P.value=!1,S("deleted"),U("a:view:delete",{view:f.view.type})}catch(y){de.error(await Ne(y))}finally{B()}}return(y,x)=>{const K=De,R=da;return t(),b(R,{visible:e(P),"onUpdate:visible":x[0]||(x[0]=ae=>Le(P)?P.value=ae:null),"entity-name":y.$t("objects.view"),"on-delete":ee},{"entity-preview":o(()=>[e(W)?(t(),c("div",ka,[n(K,{meta:f.view,class:"nc-view-icon w-4 min-h-4"},null,8,["meta"]),g("div",ha,d(e(W).title),1)])):C("",!0)]),_:1},8,["visible","entity-name"])}}}),ze=h=>(Oe("data-v-933d94cc"),h=h(),Pe(),h),$a={class:"flex w-full flex-row justify-between items-center"},xa={class:"flex font-bold text-base gap-x-3 items-center"},Ca=["href"],Va={class:"mt-1"},Ia=["title"],Aa={class:"flex-1 flex items-center gap-1 max-w-[calc(100%_-_24px)]"},La=["title"],Na={class:"flex-1 flex items-center gap-1 max-w-[calc(100%_-_24px)]"},Da={class:"text-gray-800"},Ma={class:"flex w-full gap-2 justify-between items-center"},Fa={class:"flex gap-2 items-center"},Ra=ze(()=>g("div",{class:"flex-1"},null,-1)),Ta={key:1,class:"flex flex-row p-4 border-gray-200 border-1 gap-x-4 rounded-lg w-full"},Sa={class:"text-gray-500 flex gap-4"},Ea={class:"flex flex-col gap-1"},Ga=ze(()=>g("h2",{class:"font-semibold text-sm mb-0 text-gray-800"},"Suitable fields not present",-1)),Ba={class:"text-gray-500 font-default text-sm"},Oa={class:"flex flex-row w-full justify-end gap-x-2 mt-5"},Pa=be({__name:"ViewCreate",props:{modelValue:{type:Boolean},type:{},title:{},selectedViewId:{default:void 0},groupingFieldColumnId:{default:void 0},geoDataFieldColumnId:{default:void 0},tableId:{},calendarRange:{default:void 0},coverImageColumnId:{default:void 0}},emits:["update:modelValue","created"],setup(h,{emit:oe}){const f=h,S=oe,{metas:B,getMeta:W}=je(),{viewsByTable:P}=we(ge()),{refreshCommandPalette:ie}=ke(),{selectedViewId:U,groupingFieldColumnId:ee,geoDataFieldColumnId:y,tableId:x,coverImageColumnId:K}=Ke(f),R=G(),ae=G(),ce=G(),Z=Ie(f,"modelValue",S),{t:I}=Fe(),{api:q}=Ae(),te=G(!1),se=X(()=>P.value.get(x.value)??[]),Y=G(!0),re={[r.KANBAN]:I("msg.warning.kanbanNoFields"),[r.MAP]:I("msg.warning.mapNoFields"),[r.CALENDAR]:I("msg.warning.calendarNoFields")},a=qe({title:f.title||"",type:f.type,copy_from_id:null,fk_grp_col_id:null,fk_geo_data_col_id:null,calendar_range:f.calendarRange||[],fk_cover_image_col_id:null}),k=G([]),ue=[{required:!0,message:`${I("labels.viewName")} ${I("general.required").toLowerCase()}`},{validator:(l,u)=>new Promise((v,D)=>{se.value.every(V=>V.title!==u)?v(!0):D(new Error("View name should be unique"))}),message:"View name should be unique"}],fe=[{required:!0,message:`${I("general.groupingField")} ${I("general.required")}`}],ve=[{required:!0,message:`${I("general.geoDataField")} ${I("general.required")}`}],_e=X(()=>({[r.GRID]:"grid",[r.GALLERY]:"gallery",[r.FORM]:"form",[r.KANBAN]:"kanban",[r.MAP]:"map",[r.CALENDAR]:"calendar"})[f.type]);Ye(ye),He(()=>f.type,l=>{a.type=l});function ye(){a.title=`${Qe(_e.value)}`;const l=se.value.filter(u=>u.title.startsWith(a.title)).length;l&&(a.title=`${a.title}-${l}`),U.value&&(a.copy_from_id=U==null?void 0:U.value),We(()=>{var v;const u=(v=ae.value)==null?void 0:v.$el;u&&(u.focus(),u.select())})}async function s(){var u;let l=null;try{l=await((u=ce.value)==null?void 0:u.validateFields())}catch(v){console.error(v)}if(a.title&&(a.title=a.title.trim()),l&&a.type){if(!x.value)return;try{let v=null;switch(te.value=!0,a.type){case r.GRID:v=await q.dbView.gridCreate(x.value,a);break;case r.GALLERY:v=await q.dbView.galleryCreate(x.value,a);break;case r.FORM:v=await q.dbView.formCreate(x.value,a);break;case r.KANBAN:v=await q.dbView.kanbanCreate(x.value,a);break;case r.MAP:v=await q.dbView.mapCreate(x.value,a);break;case r.CALENDAR:v=await q.dbView.calendarCreate(x.value,{...a,calendar_range:a.calendar_range.map(D=>({fk_from_column_id:D.fk_from_column_id,fk_to_column_id:D.fk_to_column_id}))});break}v&&S("created",v)}catch(v){de.error(v.message)}finally{await ie()}Z.value=!1,setTimeout(()=>{te.value=!1},500)}}const $=G(!1);return Ze(async()=>{var l,u,v,D,V,O;if([r.GALLERY,r.KANBAN,r.MAP,r.CALENDAR].includes(f.type)){$.value=!0;try{if(R.value=await W(x.value),f.type===r.MAP&&(k.value=R.value.columns.filter(m=>m.uidt===N.GeoData).map(m=>({value:m.id,label:m.title})),y.value?a.fk_geo_data_col_id=y.value:(l=k.value)!=null&&l.length?a.fk_geo_data_col_id=(v=(u=k.value)==null?void 0:u[0])==null?void 0:v.value:Y.value=!1),f.type===r.GALLERY){k.value=[{value:null,label:"No Image"},...(R.value.columns||[]).filter(w=>w.uidt===N.Attachment).map(w=>({value:w.id,label:w.title,uidt:w.uidt}))];const m=(D=R.value.columns||[])==null?void 0:D.filter(w=>w.uidt===N.Lookup),A=new Set,L=async(w,M,J)=>{var i,T,F,Q,me,xe,Ce;const E=J||(i=R.value)!=null&&i.id?(Q=(F=B.value[J||((T=R.value)==null?void 0:T.id)])==null?void 0:F.columns)==null?void 0:Q.find(z=>{var pe;return z.id===((pe=M==null?void 0:M.colOptions)==null?void 0:pe.fk_relation_column_id)}):void 0;if((me=E==null?void 0:E.colOptions)!=null&&me.fk_related_model_id){await W(E.colOptions.fk_related_model_id);const z=(Ce=(xe=B.value[E.colOptions.fk_related_model_id])==null?void 0:xe.columns)==null?void 0:Ce.find(pe=>{var Ve;return pe.id===((Ve=M==null?void 0:M.colOptions)==null?void 0:Ve.fk_lookup_column_id)});z&&ua(z)?A.add(w.id):z&&(z==null?void 0:z.uidt)===N.Lookup&&await L(w,z,E.colOptions.fk_related_model_id)}};await Promise.allSettled(m.map(w=>L(w,w)));const H=m.filter(w=>A.has(w==null?void 0:w.id)).map(w=>({value:w.id,label:w.title,uidt:w.uidt}));k.value=[...k.value,...H],K.value?a.fk_cover_image_col_id=K.value:k.value.length>1&&!a.copy_from_id?a.fk_cover_image_col_id=k.value[1].value:a.fk_cover_image_col_id=null}f.type===r.KANBAN&&(k.value=R.value.columns.filter(m=>m.uidt===N.SingleSelect).map(m=>({value:m.id,label:m.title,uidt:m.uidt})),ee.value?a.fk_grp_col_id=ee.value:(V=k.value)!=null&&V.length?a.fk_grp_col_id=k.value[0].value:Y.value=!1,K.value?a.fk_cover_image_col_id=K.value:k.value.length>1&&!a.copy_from_id?a.fk_cover_image_col_id=k.value[1].value:a.fk_cover_image_col_id=null),f.type===r.CALENDAR&&(k.value=R.value.columns.filter(m=>{var A,L;return[N.DateTime,N.Date,N.CreatedTime,N.LastModifiedTime].includes(m.uidt)||m.uidt===N.Formula&&((L=(A=m.colOptions)==null?void 0:A.parsed_tree)==null?void 0:L.dataType)===Je.DATE}).map(m=>({value:m.id,label:m.title,uidt:m.uidt})).sort((m,A)=>{const L={[N.DateTime]:1,[N.Date]:2,[N.Formula]:3,[N.CreatedTime]:4,[N.LastModifiedTime]:5};return(L[m.uidt]||6)-(L[A.uidt]||6)}),(O=k.value)!=null&&O.length?a.calendar_range.length===0&&(a.calendar_range=[{fk_from_column_id:k.value[0].value,fk_to_column_id:null}]):Y.value=!1)}catch(m){console.error(m)}finally{$.value=!1}}}),(l,u)=>{const v=De,D=_a,V=fa,O=ca,m=Ee,A=Ge,L=ma,H=ra,w=pa,M=Be,J=ea,E=Re("e");return t(),b(J,{visible:e(Z),"onUpdate:visible":u[5]||(u[5]=i=>Le(Z)?Z.value=i:null),class:"nc-view-create-modal","show-separator":!1,size:[e(r).MAP].includes(e(a).type)?"medium":"small"},{header:o(()=>[g("div",$a,[g("div",xa,[n(v,{meta:{type:e(a).type},class:"nc-view-icon !text-[24px] !leading-6 max-h-6 max-w-6"},null,8,["meta"]),e(a).type===e(r).GRID?(t(),c(p,{key:0},[e(a).copy_from_id?(t(),c(p,{key:0},[_(d(l.$t("labels.duplicateGridView")),1)],64)):(t(),c(p,{key:1},[_(d(l.$t("labels.createGridView")),1)],64))],64)):e(a).type===e(r).GALLERY?(t(),c(p,{key:1},[e(a).copy_from_id?(t(),c(p,{key:0},[_(d(l.$t("labels.duplicateGalleryView")),1)],64)):(t(),c(p,{key:1},[_(d(l.$t("labels.createGalleryView")),1)],64))],64)):e(a).type===e(r).FORM?(t(),c(p,{key:2},[e(a).copy_from_id?(t(),c(p,{key:0},[_(d(l.$t("labels.duplicateFormView")),1)],64)):(t(),c(p,{key:1},[_(d(l.$t("labels.createFormView")),1)],64))],64)):e(a).type===e(r).KANBAN?(t(),c(p,{key:3},[e(a).copy_from_id?(t(),c(p,{key:0},[_(d(l.$t("labels.duplicateKanbanView")),1)],64)):(t(),c(p,{key:1},[_(d(l.$t("labels.createKanbanView")),1)],64))],64)):e(a).type===e(r).CALENDAR?(t(),c(p,{key:4},[e(a).copy_from_id?(t(),c(p,{key:0},[_(d(l.$t("labels.duplicateCalendarView")),1)],64)):(t(),c(p,{key:1},[_(d(l.$t("labels.createCalendarView")),1)],64))],64)):(t(),c(p,{key:5},[e(a).copy_from_id?(t(),c(p,{key:0},[_(d(l.$t("labels.duplicateMapView")),1)],64)):(t(),c(p,{key:1},[_(d(l.$t("labels.duplicateView")),1)],64))],64))]),e(a).copy_from_id?C("",!0):(t(),c("a",{key:0,class:"text-sm !text-gray-600 !font-default !hover:text-gray-600",href:`https://docs.nocodb.com/views/view-types/${e(_e)}`,target:"_blank"}," Docs ",8,Ca))])]),default:o(()=>[g("div",Va,[e(Y)?(t(),b(w,{key:0,ref_key:"formValidator",ref:ce,model:e(a),layout:"vertical",class:"flex flex-col gap-y-5"},{default:o(()=>[n(V,{rules:ue,name:"title"},{default:o(()=>[n(D,{ref_key:"inputEl",ref:ae,value:e(a).title,"onUpdate:value":u[0]||(u[0]=i=>e(a).title=i),placeholder:l.$t("labels.viewName"),autofocus:"",class:"nc-input-sm nc-input-shadow",onKeydown:Xe(s,["enter"])},null,8,["value","placeholder"])]),_:1}),e(a).type===e(r).GALLERY&&!e(a).copy_from_id?(t(),b(V,{key:0,label:`${l.$t("labels.coverImageField")}`,name:"fk_cover_image_col_id"},{default:o(()=>[n(H,{value:e(a).fk_cover_image_col_id,"onUpdate:value":u[1]||(u[1]=i=>e(a).fk_cover_image_col_id=i),disabled:e($),loading:e($),"dropdown-match-select-width":"","not-found-content":l.$t("placeholder.selectGroupFieldNotFound"),placeholder:l.$t("placeholder.selectCoverImageField"),class:"nc-select-shadow w-full nc-gallery-cover-image-field-select"},{default:o(()=>[(t(!0),c(p,null,le(e(k),i=>(t(),b(L,{key:i.value,value:i.value},{default:o(()=>[g("div",{class:"w-full flex gap-2 items-center justify-between",title:i.label},[g("div",Aa,[i.value?(t(),b(O,{key:0,column:i,class:"!ml-0"},null,8,["column"])):C("",!0),n(m,{class:"flex-1 max-w-[calc(100%_-_20px)] truncate","show-on-truncate-only":""},{title:o(()=>[_(d(i.label),1)]),default:o(()=>[_(d(i.label),1)]),_:2},1024)]),e(a).fk_cover_image_col_id===i.value?(t(),b(A,{key:0,id:"nc-selected-item-icon",icon:"check",class:"flex-none text-primary w-4 h-4"})):C("",!0)],8,Ia)]),_:2},1032,["value"]))),128))]),_:1},8,["value","disabled","loading","not-found-content","placeholder"])]),_:1},8,["label"])):C("",!0),e(a).type===e(r).KANBAN&&!e(a).copy_from_id?(t(),b(V,{key:1,label:l.$t("general.groupingField"),rules:fe,name:"fk_grp_col_id"},{default:o(()=>[n(H,{value:e(a).fk_grp_col_id,"onUpdate:value":u[2]||(u[2]=i=>e(a).fk_grp_col_id=i),disabled:e($),loading:e($),"dropdown-match-select-width":"","not-found-content":l.$t("placeholder.selectGroupFieldNotFound"),placeholder:l.$t("placeholder.selectGroupField"),class:"nc-select-shadow w-full nc-kanban-grouping-field-select"},{default:o(()=>[(t(!0),c(p,null,le(e(k),i=>(t(),b(L,{key:i.value,value:i.value},{default:o(()=>[g("div",{class:"w-full flex gap-2 items-center justify-between",title:i.label},[g("div",Na,[n(O,{column:i,class:"!ml-0"},null,8,["column"]),n(m,{class:"flex-1 max-w-[calc(100%_-_20px)] truncate","show-on-truncate-only":""},{title:o(()=>[_(d(i.label),1)]),default:o(()=>[_(d(i.label),1)]),_:2},1024)]),e(a).fk_grp_col_id===i.value?(t(),b(A,{key:0,id:"nc-selected-item-icon",icon:"check",class:"flex-none text-primary w-4 h-4"})):C("",!0)],8,La)]),_:2},1032,["value"]))),128))]),_:1},8,["value","disabled","loading","not-found-content","placeholder"])]),_:1},8,["label"])):C("",!0),e(a).type===e(r).MAP?(t(),b(V,{key:2,label:l.$t("general.geoDataField"),rules:ve,name:"fk_geo_data_col_id"},{default:o(()=>[n(H,{value:e(a).fk_geo_data_col_id,"onUpdate:value":u[3]||(u[3]=i=>e(a).fk_geo_data_col_id=i),disabled:e($),loading:e($),"not-found-content":l.$t("placeholder.selectGeoFieldNotFound"),options:e(k),placeholder:l.$t("placeholder.selectGeoField"),class:"nc-select-shadow w-full"},null,8,["value","disabled","loading","not-found-content","options","placeholder"])]),_:1},8,["label"])):C("",!0),e(a).type===e(r).CALENDAR&&!e(a).copy_from_id?(t(!0),c(p,{key:3},le(e(a).calendar_range,(i,T)=>(t(),c("div",{key:`range-${T}`,class:"flex w-full items-center gap-2"},[g("span",Da,d(l.$t("labels.organiseBy")),1),n(H,{value:i.fk_from_column_id,"onUpdate:value":F=>i.fk_from_column_id=F,disabled:e($),loading:e($),class:"nc-select-shadow nc-from-select"},{default:o(()=>[(t(!0),c(p,null,le([...e(k)].filter(F=>{if(T===0)return!0;const Q=e(k).find(me=>me.value===e(a).calendar_range[0].fk_from_column_id);return(Q==null?void 0:Q.uidt)===F.uidt}),(F,Q)=>(t(),b(L,{key:Q,class:"w-40",value:F.value},{default:o(()=>[g("div",Ma,[g("div",Fa,[n(O,{column:F,class:"!ml-0"},null,8,["column"]),n(m,{class:"truncate flex-1 max-w-18",placement:"top","show-on-truncate-only":""},{title:o(()=>[_(d(F.label),1)]),default:o(()=>[_(" "+d(F.label),1)]),_:2},1024)]),Ra,F.value===i.fk_from_column_id?(t(),b(Te(("iconMap"in l?l.iconMap:e(Se)).check),{key:0,id:"nc-selected-item-icon",class:"text-primary min-w-4 h-4"})):C("",!0)])]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value","disabled","loading"])]))),128)):C("",!0)]),_:1},8,["model"])):e(Y)?C("",!0):(t(),c("div",Ta,[g("div",Sa,[n(A,{class:"min-w-6 h-6 text-orange-500",icon:"alertTriangle"}),g("div",Ea,[Ga,g("span",Ba,d(re[e(a).type]),1)])])])),g("div",Oa,[n(M,{type:"secondary",size:"small",onClick:u[4]||(u[4]=i=>Z.value=!1)},{default:o(()=>[_(d(l.$t("general.cancel")),1)]),_:1}),ne((t(),b(M,{disabled:!e(Y),loading:e(te),type:"primary",size:"small",onClick:s},{loading:o(()=>[_(d(l.$t("labels.creatingView")),1)]),default:o(()=>[_(d(l.$t("labels.createView"))+" ",1)]),_:1},8,["disabled","loading"])),[[E,[e(a).copy_from_id?"a:view:duplicate":"a:view:create"]]])])])]),_:1},8,["visible","size"])}}}),Ua=Ue(Pa,[["__scopeId","data-v-933d94cc"]]),za=he(()=>$e(()=>import("./DJdm2h3M.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(h=>h.default||h)),ja=he(()=>$e(()=>import("./DN8O6zVt.js"),__vite__mapDeps([5,1,2,6]),import.meta.url).then(h=>h.default||h)),Ka=he(()=>$e(()=>import("./CIBp-np2.js"),__vite__mapDeps([7,8,1,2,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]),import.meta.url).then(h=>h.default||h)),qa=h=>(Oe("data-v-5a69e7ea"),h=h(),Pe(),h),Ya={class:"flex text-xs font-bold text-gray-500 ml-1"},Ha={class:"nc-base-menu-item group"},Qa={class:"flex py-3 px-4 font-bold uppercase text-xs text-gray-500"},Wa={class:"nc-base-menu-item group nc-view-context-download-option"},Za={class:"flex flex-row items-center gap-x-3"},Ja={class:"nc-base-menu-item flex !flex-shrink group !py-1 !px-1 rounded-md bg-brand-50"},Xa=qa(()=>g("div",{class:"flex flex-grow"},null,-1)),et={class:"flex py-3 px-4 font-bold uppercase text-xs text-gray-500"},at={key:1},tt=be({__name:"ViewActionMenu",props:{view:{},table:{},inSidebar:{type:Boolean,default:!1}},emits:["rename","closeModal","delete"],setup(h,{emit:oe}){const f=h,S=oe,{isUIAllowed:B,isDataReadOnly:W}=aa(),P=ta(la,G(!1)),{$api:ie,$e:U}=Me(),{t:ee}=Fe(),y=X(()=>f.view),x=X(()=>f.table),{viewsByTable:K}=we(ge()),{loadViews:R,navigateToView:ae}=ge(),{base:ce}=we(oa()),{refreshCommandPalette:Z}=ke(),I=X(()=>{var s;return((s=y.value)==null?void 0:s.lock_type)||j.Collaborative}),q=X(()=>K.value.get(x.value.id)),te=G(!1),se=X(()=>{var s;return(s=x.value)==null?void 0:s.source_id}),Y=()=>{S("rename")},re=["csv","excel"],a=re.reduce((s,$)=>(s[$]=G(!1),s),{}),k=s=>{I.value!==j.Locked&&(S("closeModal"),s.value=!0)};async function ue(s){if(U("a:grid:lockmenu",{lockType:s,sidebar:f.inSidebar}),!!y.value){if(s==="personal")return de.info(ee("msg.toast.futureRelease"));try{y.value.lock_type=s,await ie.dbView.update(y.value.id,{lock_type:s}),de.success(`Successfully Switched to ${s} view`)}catch($){de.error(await Ne($))}S("closeModal")}}function fe(){S("closeModal");const s=G(!0),{close:$}=ba(Ua,{modelValue:s,title:y.value.title,type:y.value.type,tableId:x.value.id,selectedViewId:y.value.id,groupingFieldColumnId:y.value.view.fk_grp_col_id,views:q,calendarRange:y.value.view.calendar_range,coverImageColumnId:y.value.view.fk_cover_image_col_id,"onUpdate:modelValue":l,onCreated:async u=>{l(),Z(),await R({force:!0,tableId:x.value.id}),ae({view:u,tableId:x.value.id,baseId:ce.value.id,hardReload:u.type===r.FORM}),U("a:view:create",{view:u.type,sidebar:f.inSidebar})}});function l(){s.value=!1,$(1e3)}}const{copy:ve}=ia(),_e=async()=>{await ve(y.value.id),te.value=!0},ye=async()=>{S("delete")};return(s,$)=>{const l=Ge,u=Be,v=Ee,D=va,V=ya,O=wa,m=za,A=ja,L=na,H=Ka,w=ga,M=Re("e");return e(y)?(t(),b(w,{key:0,"data-testid":`view-sidebar-view-actions-${e(y).alias||e(y).title}`,class:"!min-w-70","data-id":"toolbar-actions"},{default:o(()=>{var J,E;return[n(v,null,{title:o(()=>[_(d(s.$t("labels.clickToCopyViewID")),1)]),default:o(()=>{var i;return[g("div",{class:"flex items-center justify-between p-2 mx-1.5 rounded-md cursor-pointer hover:bg-gray-100 group",onClick:_e},[g("div",Ya,d(s.$t("labels.viewIdColon",{viewId:(i=e(y))==null?void 0:i.id})),1),n(u,{class:"!group-hover:bg-gray-100",size:"xsmall",type:"secondary"},{default:o(()=>[e(te)?(t(),b(l,{key:0,class:"max-h-4 min-w-4",icon:"check"})):(t(),b(l,{key:1,class:"max-h-4 min-w-4",else:"",icon:"copy"}))]),_:1})])]}),_:1}),!((J=e(y))!=null&&J.is_default)&&e(B)("viewCreateOrEdit")?(t(),c(p,{key:0},[n(D),e(I)!==e(j).Locked?(t(),b(V,{key:0,onClick:Y},{default:o(()=>[n(l,{icon:"rename"}),_(" "+d(s.$t("activity.renameView")),1)]),_:1})):(t(),b(v,{key:1},{title:o(()=>[_(d(s.$t("msg.info.disabledAsViewLocked")),1)]),default:o(()=>[n(V,{class:"!cursor-not-allowed !text-gray-400"},{default:o(()=>[n(l,{icon:"rename"}),_(" "+d(s.$t("activity.renameView")),1)]),_:1})]),_:1})),n(V,{onClick:fe},{default:o(()=>[n(l,{class:"nc-view-copy-icon",icon:"duplicate"}),_(" "+d(s.$t("labels.duplicateView")),1)]),_:1})],64)):C("",!0),e(y).type!==e(r).FORM?(t(),c(p,{key:1},[n(D),e(B)("csvTableImport")&&!e(P)&&!e(W)?(t(),b(O,{key:"upload"},{title:o(()=>[ne((t(),c("div",Ha,[n(l,{icon:"upload"}),_(" "+d(s.$t("general.upload")),1)])),[[M,["c:navdraw:preview-as",{sidebar:f.inSidebar}]]])]),expandIcon:o(()=>[]),default:o(()=>[g("div",Qa,d(s.$t("activity.uploadData")),1),(t(!0),c(p,null,le(e(a),(i,T)=>(t(),c(p,null,[e(B)(`${T}TableImport`)&&!e(P)?(t(),b(V,{key:T,onClick:F=>k(i)},{default:o(()=>[ne((t(),c("div",{class:sa([{disabled:e(I)===e(j).Locked},"nc-base-menu-item"])},[(t(),b(Te(("iconMap"in s?s.iconMap:e(Se)).cloudUpload))),_(" "+d(`${s.$t("general.upload")} ${T.toUpperCase()}`),1)],2)),[[M,[`a:upload:${T}`,{sidebar:f.inSidebar}]]])]),_:2},1032,["onClick"])):C("",!0)],64))),256))]),_:1})):C("",!0),n(O,{key:"download"},{title:o(()=>[ne((t(),c("div",Wa,[n(l,{icon:"download"}),_(" "+d(s.$t("general.download")),1)])),[[M,["c:download",{sidebar:f.inSidebar}]]])]),expandIcon:o(()=>[]),default:o(()=>[n(m)]),_:1})],64)):C("",!0),e(B)("viewCreateOrEdit")?(t(),c(p,{key:2},[n(D),n(O,{key:"lock-type",class:"scrollbar-thin-dull max-h-90vh overflow-auto !py-0"},{title:o(()=>[ne((t(),c("div",Za,[g("div",null,d(s.$t("labels.viewMode")),1),g("div",Ja,[n(A,{type:e(I),class:"flex nc-view-actions-lock-type !text-brand-500 !flex-shrink","hide-tick":""},null,8,["type"])]),Xa])),[[M,["c:navdraw:preview-as",{sidebar:f.inSidebar}]]])]),expandIcon:o(()=>[]),default:o(()=>[g("div",et,d(s.$t("labels.viewMode")),1),n(L,{class:"!mx-1 !py-2 !rounded-md nc-view-action-lock-subaction"},{default:o(()=>[n(A,{type:e(j).Collaborative,onClick:$[0]||($[0]=i=>ue(e(j).Collaborative))},null,8,["type"])]),_:1}),n(L,{class:"!mx-1 !py-2 !rounded-md nc-view-action-lock-subaction"},{default:o(()=>[n(A,{type:e(j).Locked,onClick:$[1]||($[1]=i=>ue(e(j).Locked))},null,8,["type"])]),_:1})]),_:1})],64)):C("",!0),!e(y).is_default&&e(B)("viewCreateOrEdit")?(t(),c(p,{key:3},[n(D),e(I)===e(j).Locked?(t(),b(v,{key:0},{title:o(()=>[_(d(s.$t("msg.info.disabledAsViewLocked")),1)]),default:o(()=>[n(V,{class:"!cursor-not-allowed !text-gray-400"},{default:o(()=>[n(l,{class:"nc-view-delete-icon",icon:"delete"}),_(" "+d(s.$t("general.deleteEntity",{entity:s.$t("objects.view")})),1)]),_:1})]),_:1})):(t(),b(V,{key:1,class:"!hover:bg-red-50 !text-red-500",onClick:ye},{default:o(()=>[n(l,{class:"nc-view-delete-icon",icon:"delete"}),_(" "+d(s.$t("general.deleteEntity",{entity:s.$t("objects.view")})),1)]),_:1}))],64)):C("",!0),(E=e(x))!=null&&E.base_id&&e(se)?(t(),c(p,{key:4},le(re,i=>n(H,{key:i,modelValue:e(a)[i].value,"onUpdate:modelValue":T=>e(a)[i].value=T,"import-data-only":!0,"import-type":i,"base-id":e(x).base_id,"source-id":e(se)},null,8,["modelValue","onUpdate:modelValue","import-type","base-id","source-id"])),64)):C("",!0)]}),_:1},8,["data-testid"])):(t(),c("span",at))}}}),gt=Ue(tt,[["__scopeId","data-v-5a69e7ea"]]);export{Ua as _,gt as a,wt as b};
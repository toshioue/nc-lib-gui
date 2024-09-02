import{at as we,dD as ce,ai as ye,cZ as Te,cV as de,u as he,aA as xe,az as Q,cS as ee,cN as ue,cR as se,g as U,H as $e,d2 as oe,aj as j,ak as ie,cc as Ie,d3 as ke,n as Ce,d4 as pe,B as X,A as Me,dr as ne,f as De,ad as Pe,r as O,i as Se,b1 as Be,O as Ve,o as y,S as B,w as p,a as f,b as g,d as V,t as w,P as s,aL as Z,c$ as Le,d0 as Ne,a9 as Ee,T as J,c as W,U as je,Y as Re,R as ze,Q as Oe,$ as Ue,a0 as Ae,a3 as Fe,dE as Ge,_ as He}from"./Cgw6cdOy.js";import{_ as Ke}from"./ahvdY77A.js";import{u as fe}from"./B4oYR-Xl.js";import{g as qe}from"./DOBx3lw4.js";import{a as le}from"./DCaZaUH5.js";import{F as re}from"./DpYA1Dpy.js";import"./Bcy-XIkn.js";import{I as Ye}from"./DPaOlBFV.js";import{C as Qe,a as Xe}from"./KNudlHpk.js";import{_ as Ze}from"./dmcxUY_0.js";import{_ as Je}from"./BIsWr_mR.js";function We(C){const _=we({title:"",table_name:"",description:"",columns:ce,is_hybrid:!0}),{t:l}=ye(),{$e:M,$api:b}=Me(),{getMeta:D,removeMeta:$}=Te(),{closeTab:A}=fe(),{refreshCommandPalette:R}=de(),I=he().currentRoute,T=xe(),{bases:h}=Q(T),{baseTables:F}=Q(ee()),{loadProjectTables:G}=ee(),{loadTables:m,baseUrl:H,isXcdbBase:K}=ue(),{loadViews:q}=se(),{openedViewsTab:k,viewsByTable:Y}=Q(se()),x=U(()=>I.value.params.typeOrId),P=U(()=>F.value.get(C.baseId)||[]),z=U(()=>h.value.get(C.baseId)),L=async(a,c=!1)=>{if(!a.base_id)return;let e=h.value.get(a.base_id);if(!e&&(await T.loadProject(a.base_id),await G(a.base_id),e=h.value.get(a.base_id),!e))throw new Error("Base not found");let t=x.value??"nc";["nc","base"].includes(I.value.params.typeOrId)&&(t=I.value.params.typeOrId);let n=e.id;["base"].includes(I.value.params.typeOrId)&&(n=I.value.params.baseId);const d=async()=>{k.value==="view"&&await X(`${c?"#":""}/${t}/${n}/${a==null?void 0:a.id}`,c?{open:ne}:void 0),a.isViewsLoading=!0;try{await q({tableId:a.id});const i=Y.value.get(a.id)??[];if(k.value!=="view"&&i.length&&i[0].id){const v=i.find(S=>S.is_default)||i[0];await X(`${c?"#":""}/${t}/${n}/${a==null?void 0:a.id}/${v.id}/${k.value}`,c?{open:ne}:void 0)}}catch(i){console.error(i)}finally{a.isViewsLoading=!1}},r=async()=>{a.isMetaLoading=!0;try{await D(a.id)}catch(i){console.error(i)}finally{a.isMetaLoading=!1}};c?await d():await Promise.all([d(),r()])},N=async()=>{var r,i,v,S;const{onTableCreate:a,baseId:c}=C;_.title&&(_.title=_.title.trim());let{sourceId:e}=C;if(c in h.value||await T.loadProject(c),!e&&(e=(i=(r=h.value.get(c))==null?void 0:r.sources)==null?void 0:i[0].id,!e))throw new Error("Source not found");const t=await T.getSqlUi(c,e),n=(S=(v=h.value.get(c))==null?void 0:v.sources)==null?void 0:S.find(o=>o.id===e);if(!t)return;const d=t==null?void 0:t.getNewTableColumns().filter(o=>o.column_name==="id"&&_.columns.includes("id_ag")?(Object.assign(o,t==null?void 0:t.getDataTypeForUiType({uidt:oe.ID},"AG")),o.dtxp=t==null?void 0:t.getDefaultLengthForDatatype(o.dt),o.dtxs=t==null?void 0:t.getDefaultScaleForDatatype(o.dt),!0):_.columns.includes(o.column_name)).map(o=>(n&&n.inflection_column!=="camelize"&&(o.title=o.column_name),o));try{const o=await b.source.tableCreate(c,e,{..._,columns:d});M("a:table:create"),a==null||a(o),R(),await L(o)}catch(o){j.error(await ie(o))}};return $e(()=>_.title,a=>{_.table_name=`${a}`}),{table:_,tables:P,base:z,createTable:N,generateUniqueTitle:()=>{_.title=qe("Table",P.value,"title")},deleteTable:a=>{M("c:table:delete"),Ie.confirm({title:`${l("msg.info.deleteTableConfirmation")} : ${a.title}?`,wrapClassName:"nc-modal-table-delete",okText:l("general.yes"),okType:"danger",cancelText:l("general.no"),width:450,async onOk(){var c;try{const e=await D(a.id,!0),t=(c=e==null?void 0:e.columns)==null?void 0:c.filter(n=>n.uidt===oe.LinkToAnotherRecord&&!ke(n));if(t!=null&&t.length&&!K(a.source_id)){const n=await Promise.all(t.map(async(d,r)=>{var v;const i=await D((v=d==null?void 0:d.colOptions)==null?void 0:v.fk_related_model_id);return`${r+1}. ${d.title} is a LinkToAnotherRecord of ${i&&i.title||d.title}`}));j.info(Ce("div",{innerHTML:`<div style="padding:10px 4px">Unable to delete tables because of the following.
              <br><br>${n.join("<br>")}<br><br>
              Delete them & try again</div>`}));return}await b.dbTable.delete(a==null?void 0:a.id),await A({type:pe.TABLE,id:a.id,title:a.title}),await m(),$(a.id),R(),j.info(l("msg.info.tableDeleted")),M("a:table:delete"),P.value.length===0?await X(H({id:z.value.id,type:"database"})):await L(P.value[0])}catch(e){j.error(await ie(e))}}})},openTable:L}}const et={class:"flex justify-between w-full items-center"},tt={class:"flex flex-row items-center gap-x-2 text-base font-semibold text-gray-800"},at={href:"https://docs.nocodb.com/tables/create-table",target:"_blank",class:"text-[13px]"},st={class:"flex flex-col mt-1"},ot={class:"flex flex-col gap-5"},it={class:"flex gap-3 text-gray-800 h-7 mb-1 items-center justify-between"},nt={class:"text-[13px]"},lt={class:"mb-1"},rt={key:1,class:"flex"},ct={class:"flex flex-row justify-between gap-x-2"},dt={class:"flex !text-gray-700 items-center gap-2"},ut={class:"first-letter:capitalize"},pt={key:1},ft={class:"flex gap-2 items-center"},mt=De({__name:"TableCreate",props:{modelValue:{type:Boolean},sourceId:{},baseId:{}},emits:["update:modelValue","create"],setup(C,{emit:_}){const l=C,M=_,b=Pe(l,"modelValue",M),D=O(!1),$=O(),{addTab:A}=fe(),{isMysql:R,isMssql:te,isPg:I,isSnowflake:T}=ue(),{loadProjectTables:h,addTable:F}=ee(),{refreshCommandPalette:G}=de(),{table:m,createTable:H,generateUniqueTitle:K,tables:q,base:k}=We({async onTableCreate(e){await A({id:e.id,title:e.title,type:pe.TABLE,baseId:l.baseId}),F(l.baseId,e),await h(l.baseId,!0),M("create",e),b.value=!1},sourceId:l.sourceId,baseId:l.baseId}),Y=re.useForm,x=O(!1),P=()=>{m.description="",x.value=!1},z=U(()=>({title:[le,{validator:(e,t)=>new Promise((n,d)=>(q.value||[]).some(r=>r.title===(t||"")&&r.source_id===l.sourceId)?d(new Error("Duplicate table alias")):n(!0))},{validator:(e,t)=>new Promise((n,d)=>{var v;let r=255;if(R(l.sourceId)?r=64:I(l.sourceId)?r=63:te(l.sourceId)&&(r=128),((((v=k==null?void 0:k.value)==null?void 0:v.prefix)||"")+t).length>r)return d(new Error(`Table name exceeds ${r} characters`));n()})}],table_name:[le]})),{validate:L,validateInfos:N}=Y(m,z),ae=ce.map((e,t)=>({value:e,disabled:t===0})),E=O(!1),a=async()=>{if(!E.value)try{E.value=!0,await L(),await H(),b.value=!1}catch(e){if(console.error(e),e.errorFields.map(t=>j.error(t.errors.join(","))),e.errorFields.length)return}finally{setTimeout(()=>{E.value=!1},500),G()}},c=()=>{x.value?x.value=!1:(x.value=!0,setTimeout(()=>{var e;(e=$.value)==null||e.focus()},100))};return Se(()=>{K(),Be(()=>{var e,t;(e=$.value)==null||e.focus(),(t=$.value)==null||t.select()})}),(e,t)=>{const n=Ue,d=Ye,r=Ze,i=Ae,v=Je,S=Qe,o=Fe,me=Xe,_e=Ge,ve=re,be=Ke,ge=Ve("e");return y(),B(be,{visible:s(b),"onUpdate:visible":t[6]||(t[6]=u=>Oe(b)?b.value=u:null),"show-separator":!1,header:e.$t("activity.createTable"),size:"small",onKeydown:t[7]||(t[7]=Z(u=>b.value=!1,["esc"]))},{header:p(()=>[f("div",et,[f("div",tt,[g(n,{icon:"table",class:"!text-gray-600 w-5 h-5"}),V(" "+w(e.$t("activity.createTable")),1)]),f("a",at,w(e.$t("title.docs")),1)])]),default:p(()=>[f("div",st,[g(ve,{layout:"vertical",model:s(m),name:"create-new-table-form",class:"flex flex-col gap-5",onKeydown:[Z(a,["enter"]),t[5]||(t[5]=Z(u=>b.value=!1,["esc"]))]},{default:p(()=>[f("div",ot,[g(r,Le(Ne(s(N).title)),{default:p(()=>[g(d,{ref_key:"inputEl",ref:$,value:s(m).title,"onUpdate:value":t[0]||(t[0]=u=>s(m).title=u),class:"nc-input-sm nc-input-shadow","hide-details":"","data-testid":"create-table-title-input",placeholder:e.$t("msg.info.enterTableName")},null,8,["value","placeholder"])]),_:1},16),s(x)?(y(),B(r,Ee({key:0},s(N).description,{class:{"!mb-1":s(T)(l.sourceId),"!mb-0":!s(T)(l.sourceId)}}),{default:p(()=>[f("div",it,[f("span",nt,w(e.$t("labels.description")),1),g(i,{type:"text",class:"!h-6 !w-5",size:"xsmall",onClick:P},{default:p(()=>[g(n,{icon:"delete",class:"text-gray-700 w-3.5 h-3.5"})]),_:1})]),g(v,{ref_key:"inputEl",ref:$,value:s(m).description,"onUpdate:value":t[1]||(t[1]=u=>s(m).description=u),class:"nc-input-sm nc-input-text-area nc-input-shadow px-3 !text-gray-800 max-h-[150px] min-h-[100px]","hide-details":"","data-testid":"create-table-title-input",placeholder:e.$t("msg.info.enterTableDescription")},null,8,["value","placeholder"])]),_:1},16,["class"])):J("",!0),s(T)(l.sourceId)?(y(),B(S,{key:1,checked:s(m).is_hybrid,"onUpdate:checked":t[2]||(t[2]=u=>s(m).is_hybrid=u),class:"!flex flex-row items-center"},{default:p(()=>[V(" Hybrid Table ")]),_:1},8,["checked"])):J("",!0)]),s(D)?(y(),W("div",{key:0,class:je(["nc-table-advanced-options",{active:s(D)}])},[f("div",null,[f("div",lt,w(e.$t("msg.info.defaultColumns")),1),g(_e,null,{default:p(()=>[g(me,{value:s(m).columns,"onUpdate:value":t[3]||(t[3]=u=>s(m).columns=u),options:s(ae),class:"!flex flex-row justify-between w-full"},{label:p(({value:u})=>[u==="id"?(y(),B(o,{key:0,placement:"top",class:"!flex"},{title:p(()=>[f("span",null,w(e.$t("msg.idColumnRequired")),1)]),default:p(()=>[V(" "+w(e.$t("datatype.ID")),1)]),_:1})):(y(),W("div",rt,w(u),1))]),_:1},8,["value","options"])]),_:1})])],2)):J("",!0),f("div",ct,[s(x)?(y(),W("div",pt)):(y(),B(i,{key:0,size:"small",type:"text",onClick:Re(c,["stop"])},{default:p(()=>[f("div",dt,[g(n,{icon:"plus",class:"h-4 w-4"}),f("span",ut,w(e.$t("labels.addDescription").toLowerCase()),1)])]),_:1})),f("div",ft,[g(i,{type:"secondary",size:"small",onClick:t[4]||(t[4]=u=>b.value=!1)},{default:p(()=>[V(w(e.$t("general.cancel")),1)]),_:1}),ze((y(),B(i,{type:"primary",size:"small",disabled:s(N).title.validateStatus==="error",loading:s(E),onClick:a},{loading:p(()=>[V(w(e.$t("title.creatingTable")),1)]),default:p(()=>[V(w(e.$t("activity.createTable"))+" ",1)]),_:1},8,["disabled","loading"])),[[ge,["a:table:create"]]])])])]),_:1},8,["model"])])]),_:1},8,["visible","header"])}}}),kt=He(mt,[["__scopeId","data-v-45c352c8"]]);export{kt as _,We as u};
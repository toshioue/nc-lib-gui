import{f as Ft,ab as qt,r as A,av as Ne,fG as zt,ax as It,ay as Et,he as Ht,at as ot,cB as nt,g as q,cU as e,aw as Qt,az as Yt,P as a,o as i,U as _,Q as vt,c as T,a7 as Jt,V as K,T as Z,Y as H,_ as Dt,iO as ve,iP as Lt,hQ as Kt,d2 as Wt,bL as _e,g5 as Vt,fB as St,L as Xt,cP as Zt,cQ as ea,d0 as $t,c$ as Ut,cV as et,iQ as ta,iM as aa,H as Pe,an as We,ao as Xe,A as Ot,ac as ft,ba as la,ai as sa,hy as oa,as as na,iN as ia,i as ua,l as ra,a_ as da,O as ca,a as h,a6 as lt,b as de,w as k,X as yt,al as J,iL as _t,W as X,d as fe,t as E,S as C,am as je,R as Me,fF as st,$ as pa,a2 as ma,ap as va,Z as fa,a5 as ya,p as _a,e as ga}from"./DKhUGBot.js";import{_ as Ta}from"./Cx8swDhG.js";import{_ as ha}from"./CyGutrdy.js";import{_ as ba}from"./B5mlyM8k.js";import{_ as wa}from"./C600yAEI.js";import{_ as ka}from"./BtV7eYjf.js";import{x as gt,d as Tt,e as ht,n as bt,m as wt,j as xa,h as Ma,F as Ca,o as Fa,t as Da,u as La,s as Va,p as Sa,I as $a,y as Ua,k as Oa,w as Ba,J as Aa}from"./DFT4Rrrq.js";import Ra from"./BUmA83RI.js";import kt from"./COYnUPbb.js";import Na from"./8sUkqrB1.js";import ja from"./Dyq3XO_M.js";import Pa from"./CB-3FEW-.js";import Ga from"./BQtN66rY.js";import qa from"./BUFVivkI.js";import za from"./CAYVDp6l.js";import Ia from"./D5vu-8hY.js";import xt from"./CfYq_yPs.js";import Mt from"./CPFSWOd0.js";import Ea from"./PQ7fmm4f.js";import{_ as Ha}from"./BHcVgkAo.js";import Ct from"./B4STZUIT.js";import{_ as Qa,S as Ya}from"./CX4Cv_ut.js";import{a as Bt}from"./D-d1Vlq3.js";import{a as Ja}from"./BMlI7u7p.js";import{C as Ka}from"./BqRqK2Ui.js";const Wa=Ft({__name:"FilterInput",props:{column:{},filter:{}},emits:["updateFilterValue"],setup(d,{emit:ce}){var le,Te;const x=d,$=ce,M=qt(x,"column"),me=A(!0);Ne(zt,M),Ne(Et,It(me)),Ne(Ht,A(!1));const S={isSingleSelect:Ma,isMultiSelect:Ca,isDate:Tt,isYear:wt,isDateTime:ht,isTime:bt,isRating:Fa,isDuration:Da,isPercent:La,isCurrency:Va,isDecimal:Sa,isReadonlyDateTime:$a,isInt:gt,isFloat:Ua,isTextArea:Oa,isLinks:w=>w.uidt===e.Links,isUser:Ba,isReadonlyUser:Aa},{sqlUis:F}=ot(nt()),b=A((le=M.value)!=null&&le.source_id?F.value[(Te=M.value)==null?void 0:Te.source_id]:Object.values(F.value)[0]),j=q(()=>M.value&&b.value.getAbstractType(M.value)),W=w=>{const P=S[w];return!M.value||!P?!1:P(M.value,j.value)},D=q({get:()=>x.filter.value,set:w=>{$("updateFilterValue",w)}}),ee=[{value:!0,label:"true"},{value:!1,label:"false"},{value:null,label:"unset"}],ge=w=>["anyof","nanyof"].includes(w)?kt:Ra,R=w=>["daysAgo","daysFromNow","pastNumberOfDays","nextNumberOfDays"].includes(w)?xt:Na,U=q(()=>({isSingleSelect:ge(x.filter.comparison_op),isMultiSelect:kt,isDate:R(x.filter.comparison_sub_op),isYear:ja,isDateTime:R(x.filter.comparison_sub_op),isReadonlyDateTime:R(x.filter.comparison_sub_op),isTime:Pa,isRating:Ga,isDuration:qa,isPercent:za,isCurrency:Ia,isDecimal:xt,isInt:Mt,isFloat:Ea,isLinks:Mt,isUser:Ct,isReadonlyUser:Ct})),O=q(()=>Object.keys(U.value).find(w=>W(w))),z=q(()=>{switch(O.value){case"isSingleSelect":case"isMultiSelect":return{disableOptionCreation:!0};case"isPercent":case"isDecimal":case"isFloat":case"isLinks":case"isInt":return{class:"h-32px"};case"isDuration":return{showValidationError:!1};case"isUser":return{forceMulti:!0};case"isReadonlyUser":return["anyof","nanyof"].includes(x.filter.comparison_op)?{forceMulti:!0}:{};default:return{}}}),Ce=q(()=>{var w;return M.value&&(((w=M.value)==null?void 0:w.uidt)===e.Links||gt(M.value,j)||Tt(M.value,j)||ht(M.value,j)||bt(M.value,j)||wt(M.value,j))}),B=A(!1);return Ne(Qt,A(!0)),Ne(Yt,A(!0)),(w,P)=>{const we=Qa;return a(M)&&("isBoolean"in w?w.isBoolean:a(xa))(a(M),a(j))?(i(),_(we,{key:0,value:a(D),"onUpdate:value":P[0]||(P[0]=Q=>vt(D)?D.value=Q:null),disabled:w.filter.readOnly,options:ee},null,8,["value","disabled"])):(i(),T("div",{key:1,class:Z(["bg-white border-1 flex flex-grow min-h-4 h-full px-1 items-center nc-filter-input-wrapper !rounded-lg",{"px-2":a(Ce),"border-brand-500":a(B)}]),onMouseup:P[4]||(P[4]=H(()=>{},["stop"]))},[(i(),_(K(a(O)?a(U)[a(O)]:Ha),Jt({modelValue:a(D),"onUpdate:modelValue":P[1]||(P[1]=Q=>vt(D)?D.value=Q:null),disabled:w.filter.readOnly,placeholder:"Enter a value",column:a(M),class:"flex !rounded-lg"},a(z),{location:"filter",onFocus:P[2]||(P[2]=Q=>B.value=!0),onBlur:P[3]||(P[3]=Q=>B.value=!1)}),null,16,["modelValue","disabled","column"]))],34))}}}),Xa=Dt(Wa,[["__scopeId","data-v-f704e32c"]]),Za=d=>Lt(d)||d===e.Time?"=":[e.SingleSelect,e.Collaborator,e.LinkToAnotherRecord,e.Date,e.CreatedTime,e.LastModifiedTime,e.DateTime].includes(d)?"is":"is equal",el=d=>Lt(d)||d===e.Time?"!=":[e.SingleSelect,e.Collaborator,e.LinkToAnotherRecord,e.Date,e.CreatedTime,e.LastModifiedTime,e.DateTime].includes(d)?"is not":"is not equal",tl=d=>d===e.Attachment?"filenames contain":"is like",al=d=>d===e.Attachment?"filenames doesn't contain":"is not like",ll=d=>[e.Date,e.DateTime,e.CreatedTime,e.LastModifiedTime].includes(d)?"is after":">",sl=d=>[e.Date,e.DateTime,e.CreatedTime,e.LastModifiedTime].includes(d)?"is before":"<",ol=d=>[e.Date,e.DateTime,e.CreatedTime,e.LastModifiedTime].includes(d)?"is on or after":">=",nl=d=>[e.Date,e.DateTime,e.CreatedTime,e.LastModifiedTime].includes(d)?"is on or before":"<=",Ge=(d,ce)=>[{text:"is checked",value:"checked",ignoreVal:!0,includedTypes:[e.Checkbox]},{text:"is not checked",value:"notchecked",ignoreVal:!0,includedTypes:[e.Checkbox]},{text:Za(d),value:"eq",ignoreVal:!1,excludedTypes:[e.Checkbox,e.MultiSelect,e.Attachment,e.User,e.CreatedBy,e.LastModifiedBy]},{text:el(d),value:"neq",ignoreVal:!1,excludedTypes:[e.Checkbox,e.MultiSelect,e.Attachment,e.User,e.CreatedBy,e.LastModifiedBy]},{text:tl(d),value:"like",ignoreVal:!1,excludedTypes:[e.Checkbox,e.SingleSelect,e.MultiSelect,e.User,e.CreatedBy,e.LastModifiedBy,e.Collaborator,e.Date,e.DateTime,e.CreatedTime,e.LastModifiedTime,e.Time,...ve]},{text:al(d),value:"nlike",ignoreVal:!1,excludedTypes:[e.Checkbox,e.SingleSelect,e.MultiSelect,e.User,e.CreatedBy,e.LastModifiedBy,e.Collaborator,e.Date,e.DateTime,e.CreatedTime,e.LastModifiedTime,e.Time,...ve]},{text:"is empty",value:"empty",ignoreVal:!0,excludedTypes:[e.Checkbox,e.SingleSelect,e.MultiSelect,e.User,e.CreatedBy,e.LastModifiedBy,e.Collaborator,e.Attachment,e.LinkToAnotherRecord,e.Lookup,e.Date,e.DateTime,e.CreatedTime,e.LastModifiedTime,e.Time,...ve]},{text:"is not empty",value:"notempty",ignoreVal:!0,excludedTypes:[e.Checkbox,e.SingleSelect,e.MultiSelect,e.User,e.CreatedBy,e.LastModifiedBy,e.Collaborator,e.Attachment,e.LinkToAnotherRecord,e.Lookup,e.Date,e.DateTime,e.CreatedTime,e.LastModifiedTime,e.Time,...ve]},{text:"is null",value:"null",ignoreVal:!0,excludedTypes:[...ve,e.Checkbox,e.SingleSelect,e.MultiSelect,e.User,e.CreatedBy,e.LastModifiedBy,e.Collaborator,e.Attachment,e.LinkToAnotherRecord,e.Lookup,e.Date,e.DateTime,e.CreatedTime,e.LastModifiedTime,e.Time]},{text:"is not null",value:"notnull",ignoreVal:!0,excludedTypes:[...ve,e.Checkbox,e.SingleSelect,e.MultiSelect,e.User,e.CreatedBy,e.LastModifiedBy,e.Collaborator,e.Attachment,e.LinkToAnotherRecord,e.Lookup,e.Date,e.DateTime,e.CreatedTime,e.LastModifiedTime,e.Time]},{text:"contains all of",value:"allof",ignoreVal:!1,includedTypes:[e.MultiSelect,e.User,e.CreatedBy,e.LastModifiedBy]},{text:"contains any of",value:"anyof",ignoreVal:!1,includedTypes:[e.MultiSelect,e.SingleSelect,e.User,e.CreatedBy,e.LastModifiedBy]},{text:"does not contain all of",value:"nallof",ignoreVal:!1,includedTypes:[e.MultiSelect,e.User,e.CreatedBy,e.LastModifiedBy]},{text:"does not contain any of",value:"nanyof",ignoreVal:!1,includedTypes:[e.MultiSelect,e.SingleSelect,e.User,e.CreatedBy,e.LastModifiedBy]},{text:ll(d),value:"gt",ignoreVal:!1,includedTypes:[...ve,e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime,e.Time]},{text:sl(d),value:"lt",ignoreVal:!1,includedTypes:[...ve,e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime,e.Time]},{text:ol(d),value:"gte",ignoreVal:!1,includedTypes:[...ve,e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime,e.Time]},{text:nl(d),value:"lte",ignoreVal:!1,includedTypes:[...ve,e.Date,e.DateTime,e.Time,e.CreatedTime,e.LastModifiedTime]},{text:"is within",value:"isWithin",ignoreVal:!0,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]},{text:"is blank",value:"blank",ignoreVal:!0,excludedTypes:[e.Checkbox,e.Links,e.Rollup]},{text:"is not blank",value:"notblank",ignoreVal:!0,excludedTypes:[e.Checkbox,e.Links,e.Rollup]}],Ze=(d,ce)=>{const x=ce&&Kt(ce);return d==="isWithin"?[{text:"the past week",value:"pastWeek",ignoreVal:!0,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]},{text:"the past month",value:"pastMonth",ignoreVal:!0,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]},{text:"the past year",value:"pastYear",ignoreVal:!0,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]},{text:"the next week",value:"nextWeek",ignoreVal:!0,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]},{text:"the next month",value:"nextMonth",ignoreVal:!0,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]},{text:"the next year",value:"nextYear",ignoreVal:!0,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]},{text:"the next number of days",value:"nextNumberOfDays",ignoreVal:!1,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]},{text:"the past number of days",value:"pastNumberOfDays",ignoreVal:!1,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]}]:[{text:"today",value:"today",ignoreVal:!0,includedTypes:[...x?[]:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]]},{text:"tomorrow",value:"tomorrow",ignoreVal:!0,includedTypes:[...x?[]:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]]},{text:"yesterday",value:"yesterday",ignoreVal:!0,includedTypes:[...x?[]:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]]},{text:"one week ago",value:"oneWeekAgo",ignoreVal:!0,includedTypes:[...x?[]:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]]},{text:"one week from now",value:"oneWeekFromNow",ignoreVal:!0,includedTypes:[...x?[]:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]]},{text:"one month ago",value:"oneMonthAgo",ignoreVal:!0,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]},{text:"one month from now",value:"oneMonthFromNow",ignoreVal:!0,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]},{text:"number of days ago",value:"daysAgo",ignoreVal:!1,includedTypes:[...x?[]:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]]},{text:"number of days from now",value:"daysFromNow",ignoreVal:!1,includedTypes:[...x?[]:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]]},{text:x?"exact month":"exact date",value:"exactDate",ignoreVal:!1,includedTypes:[e.Date,e.DateTime,e.LastModifiedTime,e.CreatedTime]}]};function il(){return"default"}function ul(d,ce=500,x=il,$={}){const M=new Map;return(...me)=>{const S=x(...me);if(!M.has(S)){const b=Wt(d,ce,$);M.set(S,b)}return M.get(S)(...me)}}function rl(d,ce,x,$,M,me,S,F,b,j){const W={},D=A(ce),ee=A(M),ge=A({}),R=_e(Vt),{nestedFilters:U,allFilters:O}=Bt(),{baseMeta:z}=ot(nt()),Ce=_e(St,A(!1)),{$api:B,$e:le}=Ot(),{isUIAllowed:Te}=Xt(),{metas:w,getMeta:P}=Zt(),{addUndo:we,clone:Q,defineViewScope:Ve}=ea(),Se=A([...ee.value||[]]),ye=q(()=>Ce.value||!Te("filterSync")||!Te("filterChildrenRead")),r=q({get:()=>ye.value&&!F&&!S?ee.value:Se.value,set:o=>{if(ye.value){ee.value=o,!F&&!S&&(me||(U.value=o),U.value=[...U.value]),R==null||R.trigger();return}Se.value=o}}),$e=q(()=>r.value.filter(o=>o.status!=="delete")),he=_e($t,A()),se=_e(Ut,A()),{showSystemFields:ze,metaColumnById:Ue}=Ja(),Ie=q(()=>{var o,n;return(n=(o=he.value)==null?void 0:o.columns)==null?void 0:n.filter(u=>{var c;return et((c=Ue==null?void 0:Ue.value)==null?void 0:c[u.id])?ze.value:u.uidt===e.QrCode||u.uidt===e.Barcode||u.uidt===e.ID||u.system?!1:!(u.colOptions&&u.system)})}),Fe=q(()=>{var o,n,u,c;return(n=(o=he.value)==null?void 0:o.columns)!=null&&n.length?(c=(u=he.value)==null?void 0:u.columns)==null?void 0:c.reduce((f,m)=>{if(m.uidt===e.Formula){const g=ta({formulaColumn:m});f[m.id]=g||m.uidt}else ge.value[m.id]?f[m.id]=ge.value[m.id].uidt:f[m.id]=m.uidt;return f},{}):{}}),ke=A([]);aa(r,o=>{ke.value=Q(o)});const Ee=(o,n)=>Object.entries(n).filter(([u,c])=>o[u]!==c&&u in o).reduce((u,[c,f])=>({...u,[c]:f}),{}),He=(o,n)=>{const u=["empty","notempty","null","notnull"].includes(n.value),c=Fe.value[o.fk_column_id];return n.includedTypes?o.fk_column_id&&n.includedTypes.includes(c)?u?z.value.showNullAndEmptyInFilter:!0:!1:n.excludedTypes?o.fk_column_id&&!n.excludedTypes.includes(c)?u?z.value.showNullAndEmptyInFilter:!0:!1:u?z.value.showNullAndEmptyInFilter:!0},tt=(o,n)=>{const u=Fe.value[o.fk_column_id];if(n.includedTypes)return o.fk_column_id&&n.includedTypes.includes(u);if(n.excludedTypes)return o.fk_column_id&&!n.excludedTypes.includes(u)},Oe=()=>{var n,u,c,f,m,g;const o=new Set(r.value.slice(1).map(L=>L.logical_op));return{comparison_op:(c=(u=Ge((n=Ie.value)==null?void 0:n[0].uidt).filter(L=>{var N;return He({fk_column_id:(N=Ie.value)==null?void 0:N[0].id},L)}))==null?void 0:u[0])==null?void 0:c.value,value:null,status:"create",logical_op:o.size===1?o.values().next().value:"and",fk_column_id:((g=(m=(f=j==null?void 0:j.value)==null?void 0:f.filter(L=>!et(L)))==null?void 0:m[0])==null?void 0:g.id)??void 0}},oe=()=>{const o=new Set(r.value.slice(1).map(n=>n.logical_op));return{is_group:!0,status:"create",logical_op:o.size===1?o.values().next().value:"and"}},Be=async o=>{const n=[],u=[];for(const c of o)if(c.id&&c.is_group){const f=B.dbTableFilter.childrenRead(c.id).then(m=>{const g=m.list;return u.push(...g),Be(g)});n.push(f)}await Promise.all(n),!F&&!S&&O.value.push(...u)},De=async({hookId:o,isLink:n,isWebhook:u,loadAllFilters:c}={})=>{var f;if((f=d.value)!=null&&f.id&&!ye.value)try{u||o?D.value?r.value=(await B.dbTableFilter.childrenRead(D.value)).list:o&&!me&&(r.value=(await B.dbTableWebhookFilter.read(o)).list):n||b!=null&&b.value?D.value?r.value=(await B.dbTableFilter.childrenRead(D.value)).list:b!=null&&b.value&&!me&&(r.value=(await B.dbTableLinkFilter.read(b==null?void 0:b.value)).list):D.value?r.value=(await B.dbTableFilter.childrenRead(D.value)).list:(r.value=(await B.dbTableFilter.read(d.value.id)).list,c&&(O.value=[...r.value],await Be(O.value)))}catch(m){console.log(m),We.error(await Xe(m))}},Ae=async({hookId:o,linkId:n})=>{var u,c;try{for(const[f,m]of Object.entries(r.value))if(m.status==="delete")await B.dbTableFilter.delete(m.id),m.is_group?te(m):!F&&!S&&(O.value=O.value.filter(g=>g.id!==m.id));else if(m.status==="update")await B.dbTableFilter.update(m.id,{...m,fk_parent_id:D.value});else if(m.status==="create"){const g=(u=r.value[+f])==null?void 0:u.children;o?r.value[+f]=await B.dbTableWebhookFilter.create(o,{...m,children:void 0,fk_parent_id:D.value}):n||b!=null&&b.value?r.value[+f]=await B.dbTableLinkFilter.create(n||b.value,{...m,children:void 0,fk_parent_id:D.value}):r.value[+f]=await B.dbTableFilter.create((c=d==null?void 0:d.value)==null?void 0:c.id,{...m,fk_parent_id:D.value}),g&&(r.value[+f].children=g),!F&&!S&&O.value.push(r.value[+f])}!S&&!F&&($==null||$())}catch(f){console.log(f),We.error(await Xe(f))}},be=ul(pe,500,(o,n)=>n);async function pe(o,n,u=!1,c=!1,f=!1){var m,g;if(W[n])return be(o,n,u,c,f);if(Array.from({length:n}).some((L,N)=>W[N]))return be(o,n,u,c,f);if(W[n]=!0,!(!d.value&&!(b!=null&&b.value))){if(!c){const L=ke.value[n];if(L){const N=Q(Ee(o,L));Object.keys(N).length>0&&we({undo:{fn:(ne,Y)=>{const ie=r.value[n];ie&&(ie[ne]=Y,pe(ie,n,u,!0))},args:[Object.keys(N)[0],Object.values(N)[0]]},redo:{fn:(ne,Y)=>{const ie=r.value[n];ie&&(ie[ne]=Y,pe(ie,n,u,!0))},args:[Object.keys(N)[0],o[Object.keys(N)[0]]]},scope:Ve({view:se.value})})}}try{if(ye.value)r.value[n]={...o},r.value=[...r.value];else if(!(x!=null&&x.value)&&!u)o.status=o.id?"update":"create";else if((m=r.value[n])!=null&&m.id&&((g=r.value[n])==null?void 0:g.status)!=="create")await B.dbTableFilter.update(r.value[n].id,{...o,fk_parent_id:D.value}),le("a:filter:update",{logical:o.logical_op,comparison:o.comparison_op,link:!!F,webHook:!!S});else{if(b!=null&&b.value){const L=await B.dbTableLinkFilter.create(b.value,{...o,fk_parent_id:D.value});r.value[n]={...r.value[n],fk_parent_id:D.value,id:L.id,status:void 0}}else{const L=await B.dbTableFilter.create(d.value.id,{...o,fk_parent_id:D.value});r.value[n]={...r.value[n],fk_parent_id:D.value,id:L.id,status:void 0}}!F&&!S&&O.value.push(r.value[+n])}}catch(L){console.log(L),We.error(await Xe(L))}finally{W[n]=!1}ke.value=Q(r.value),!S&&!f&&!F&&($==null||$())}}function te(o){if(!F&&!S)return;O.value.filter(u=>u.fk_parent_id===o.id).forEach(u=>{u.is_group&&te(u)}),O.value=O.value.filter(u=>u.id!==o.id&&u.fk_parent_id!==o.id)}const Le=async(o,n,u=!1)=>{if(o.status="delete",!u&&!o.is_group&&we({undo:{fn:async c=>{c.status="create",r.value.splice(n,0,c),await pe(c,n,!1,!0)},args:[Q(o)]},redo:{fn:async c=>{await Le(r.value[c],c,!0)},args:[n]},scope:Ve({view:se.value})}),ye.value)r.value.splice(n,1),r.value=[...r.value],!S&&!F&&($==null||$());else{if(o.id)if(!(x!=null&&x.value))o.status="delete";else try{await B.dbTableFilter.delete(o.id),!S&&!F&&($==null||$());const c=r.value.findIndex(f=>f.id===o.id);c>-1&&r.value.splice(c,1)}catch(c){console.log(c),We.error(await Xe(c))}else r.value.splice(n,1);le("a:filter:delete",{length:$e.value.length,link:!!F,webHook:!!S})}o.is_group?te(o):!F&&!S&&(O.value=O.value.filter(c=>c.id!==o.id))},Qe=async(o=!1,n={})=>{r.value.push(n!=null&&n.fk_column_id?{...Oe(),...n}:Oe()),o||we({undo:{fn:async function(c){this.redo.args=[c,Q(r.value[c])],await Le(r.value[c],c,!0)},args:[r.value.length-1]},redo:{fn:async(u,c)=>{c.status="create",r.value.splice(u,0,c),await pe(c,u,!1,!0)},args:[]},scope:Ve({view:se.value})}),ke.value=Q(r.value),le("a:filter:add",{length:r.value.length,link:!!F,webHook:!!S})},Ye=async()=>{const o=Oe(),n=oe();ye.value&&(n.children=[o]),r.value.push(n);const u=r.value.length-1;await pe(r.value[u],u),ke.value=Q(r.value),le("a:filter:add",{length:r.value.length,group:!0,link:!!F,webHook:!!S})};return Pe(()=>{var o,n,u,c,f,m;return!(d!=null&&d.value)||!((n=w==null?void 0:w.value)!=null&&n[(o=d==null?void 0:d.value)==null?void 0:o.fk_model_id])?0:((m=(f=(c=w==null?void 0:w.value)==null?void 0:c[(u=d==null?void 0:d.value)==null?void 0:u.fk_model_id])==null?void 0:f.columns)==null?void 0:m.length)||0},async(o,n)=>{o&&o<n&&await De()}),{filters:r,nonDeletedFilters:$e,loadFilters:De,sync:Ae,deleteFilter:Le,saveOrUpdate:pe,addFilter:Qe,addFilterGroup:Ye,saveOrUpdateDebounced:be,isComparisonOpAllowed:He,isComparisonSubOpAllowed:tt,loadBtLookupTypes:async()=>{var n,u,c,f;const o={};try{for(const m of((n=he.value)==null?void 0:n.columns)||[]){if(m.uidt!==e.Lookup)continue;let g=m;for(;g&&g.uidt===e.Lookup;){const L=(c=(u=await P(g.fk_model_id))==null?void 0:u.columns)==null?void 0:c.find(ne=>ne.id===g.colOptions.fk_relation_column_id);if(!L)break;const N=await P((L==null?void 0:L.colOptions).fk_related_model_id);if(g=(f=N==null?void 0:N.columns)==null?void 0:f.find(ne=>ne.id===g.colOptions.fk_lookup_column_id),(g==null?void 0:g.id)===m.id)break}o[m.id]=g}ge.value=o}catch(m){console.error(m)}},btLookupTypesMap:ge,types:Fe}}const dl=fa(()=>ya(()=>Promise.resolve().then(()=>Hl),void 0,import.meta.url).then(d=>d.default||d)),qe=d=>(_a("data-v-50c8eb00"),d=d(),ga(),d),cl={key:0,class:"flex min-w-full w-min items-center mb-2"},pl=qe(()=>h("div",{class:"flex-grow"},null,-1)),ml={class:"flex items-center gap-1"},vl={class:"flex items-center gap-1"},fl={class:"flex items-center gap-1"},yl={class:"flex items-center gap-1"},_l={key:0,class:"flex flex-col min-w-full w-min gap-y-2"},gl={key:0,class:"flex items-center nc-filter-where-label ml-1"},Tl={class:"flex items-center w-full justify-between w-full gap-2"},hl={class:"truncate flex-1 capitalize"},bl={key:0,class:"flex items-center !min-w-18 !max-w-18 pl-3 nc-filter-where-label"},wl={class:"flex items-center w-full justify-between w-full gap-2"},kl={class:"truncate flex-1 capitalize"},xl={class:"flex items-center w-full justify-between w-full gap-2"},Ml={class:"truncate flex-1"},Cl={key:2,class:"flex flex-grow"},Fl={class:"flex items-center w-full justify-between w-full gap-2 max-w-40"},Dl={class:"flex items-center flex-grow"},Ll={key:0,class:"flex-grow"},Vl={key:2,class:"flex-grow"},Sl={class:"relative overflow-visible min-h-17 w-10"},$l=["onClick"],Ul={class:"flex flex-row items-center justify-between w-full"},Ol=qe(()=>h("div",{class:"flex flex-row items-center justify-start gap-x-3"},"Static condition",-1)),Bl=qe(()=>h("div",{class:"flex flex-row text-xs text-gray-400"},"Filter based on static value",-1)),Al=["onClick"],Rl={class:"flex flex-row items-center justify-between w-full"},Nl=qe(()=>h("div",{class:"flex flex-row items-center justify-start gap-x-2.5"},"Dynamic condition",-1)),jl=qe(()=>h("div",{class:"flex flex-row text-xs text-gray-400"},"Filter based on dynamic value",-1)),Pl={class:"flex items-center gap-1"},Gl={class:"flex items-center gap-1"},ql={class:"flex items-center gap-1"},zl={class:"flex items-center gap-1"},Il=Ft({__name:"ColumnFilter",props:{nestedLevel:{default:0},parentId:{default:void 0},autoSave:{type:Boolean,default:!0},hookId:{default:void 0},showLoading:{type:Boolean,default:!0},modelValue:{},webHook:{type:Boolean,default:!1},link:{type:Boolean,default:!1},draftFilter:{},isOpen:{type:Boolean},rootMeta:{},linkColId:{default:void 0}},emits:["update:filtersLength","update:draftFilter","update:modelValue"],setup(d,{expose:ce,emit:x}){var ct,pt;const $=d,M=x,me=$.modelValue,S=[e.QrCode,e.Barcode],F=ft($,"draftFilter",M),b=ft($,"modelValue",M),{nestedLevel:j,parentId:W,autoSave:D,hookId:ee,showLoading:ge,webHook:R,link:U,linkColId:O}=la($),z=q(()=>j.value>0),{t:Ce}=sa(),B=[{value:"and",text:Ce("general.and")},{value:"or",text:Ce("general.or")}],le=_e($t,A()),Te=_e(Ut,A()),w=_e(Vt),P=_e(St,A(!1)),{$e:we}=Ot(),{nestedFilters:Q}=Bt(),Ve=b.value||!U.value&&!R.value&&Q.value||[],Se=q(()=>{var t;return(t=le.value)==null?void 0:t.columns}),ye=q(()=>(Se.value||[]).filter(t=>U.value&&et(t)&&!t.pk&&!oa(t)?!1:!S.includes(t.uidt))),{filters:r,nonDeletedFilters:$e,deleteFilter:he,saveOrUpdate:se,loadFilters:ze,addFilter:Ue,addFilterGroup:Ie,sync:Fe,saveOrUpdateDebounced:ke,isComparisonOpAllowed:Ee,isComparisonSubOpAllowed:He,loadBtLookupTypes:tt,btLookupTypesMap:Oe,types:oe}=rl(Te,W,q(()=>D.value),()=>w.trigger({shouldShowLoading:ge.value,offset:0}),Ve,$.nestedLevel>0,R.value,U.value,O,ye),{getPlanLimit:Be}=na(),De=A(),Ae=A(),be=A(),pe=A(!1),te=t=>{var s;return Oe.value[t.fk_column_id]||((s=Se.value)==null?void 0:s.find(p=>p.id===t.fk_column_id))},Le=A({}),Qe=(t,s)=>{var p,V,y,I;return!(t.id||t.comparison_op&&((V=Ze(t.comparison_op,(p=s==null?void 0:s.meta)==null?void 0:p.date_format).find(ae=>ae.value===t.comparison_sub_op))!=null&&V.ignoreVal)||(I=Ge(oe.value[s.id],(y=s==null?void 0:s.meta)==null?void 0:y.date_format).find(ae=>ae.value===t.comparison_op))!=null&&I.ignoreVal||t.value)},Ye=(t,s)=>{var V;const p=te(t);p&&(p.uidt===e.SingleSelect&&["anyof","nanyof"].includes(Le.value[t.id])&&["eq","neq"].includes(t.comparison_op)?t.value=null:["blank","notblank","empty","notempty","null","notnull"].includes(t.comparison_op)?(t.value=null,t.comparison_sub_op=null):ne(oe.value[p.id])&&(t.value=null,Ze(t.comparison_op,(V=p==null?void 0:p.meta)==null?void 0:V.date_format).map(y=>y.value).includes(t.comparison_sub_op)||(t.comparison_op==="isWithin"?t.comparison_sub_op="pastNumberOfDays":t.comparison_sub_op="exactDate")),Qe(t,p)||se(t,s),Le.value[t.id]=t.comparison_op,we("a:filter:update",{logical:t.logical_op,comparison:t.comparison_op,comparison_sub_op:t.comparison_sub_op,link:!!U.value,webHook:!!R.value}))};Pe(()=>{var t;return(t=Te.value)==null?void 0:t.id},(t,s)=>{!z.value&&t!==s&&(ee!=null&&ee.value||!R.value)&&(O!=null&&O.value||!U.value)&&ze({hookId:ee.value,isWebhook:R.value,linkColId:a(O),isLink:U.value})});const Je=_e(ia,A({}));Pe(()=>$e.value.length,t=>{Je.value[(W==null?void 0:W.value)??"root"]=[...$e.value],M("update:filtersLength",t??0)});const o=q(()=>Object.values(Je.value).reduce((t,s)=>t+s.filter(p=>!p.is_group).length,0)),n=async(t,s=!1,p=!0)=>{var V;if(!p)for(let y=r.value.length-1;y>=0;y--)await he(r.value[y],y);if(U.value){if(!t&&!$.nestedLevel)return;await Fe({linkId:t,nested:s})}else await Fe({hookId:t,nested:s});if((V=De.value)!=null&&V.length)for(const y of De.value)y.parentId&&await y.applyChanges(t,!0)},u=(t,s)=>{var V,y;const p=te(t);p&&(st(p)?ut(t,s).catch(()=>{}):t.fk_value_col_id=null,t.comparison_op=(y=Ge(oe.value[p.id],(V=p==null?void 0:p.meta)==null?void 0:V.date_format).find(I=>Ee(t,I)))==null?void 0:y.value,ne(oe.value[p.id])&&!["blank","notblank"].includes(t.comparison_op)?t.comparison_op==="isWithin"?t.comparison_sub_op="pastNumberOfDays":t.comparison_sub_op="exactDate":t.comparison_sub_op=null,t.value=null,Qe(t,p)||se(t,s))},c=(t,s,p)=>{s.value=t,ke(s,p)};ce({applyChanges:n,parentId:W});const f=()=>{var t;(t=Ae.value)==null||t.scrollTo({top:Ae.value.scrollHeight,behavior:"smooth"})},m=()=>{var t;z.value&&((t=be==null?void 0:be.value)==null||t.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}))},g=async t=>{await Ue(!1,t),t&&u(r.value[r.value.length-1],r.value.length-1),z.value?m():f()},L=async()=>{await Ie(),z.value?m():f()},N=t=>{var p,V,y,I,ae;const s=te(t);return t.comparison_op?t.comparison_sub_op?!((y=Ze(t.comparison_op,(V=(p=te(t))==null?void 0:p.meta)==null?void 0:V.date_format).find(ue=>ue.value===t.comparison_sub_op))!=null&&y.ignoreVal):!((ae=Ge(oe.value[s==null?void 0:s.id],(I=s==null?void 0:s.meta)==null?void 0:I.date_format).find(ue=>ue.value===t.comparison_op))!=null&&ae.ignoreVal):!1};ua(async()=>{await Promise.all([(async()=>{me||await ze({hookId:ee==null?void 0:ee.value,isWebhook:R.value,linkColId:a(O),isLink:U.value})})(),tt()]),pe.value=!0}),ra(()=>{W.value&&delete Je.value[W.value]});function ne(t){return[e.Date,e.DateTime,e.CreatedTime,e.LastModifiedTime].includes(t)}Pe([F,pe],async()=>{var p,V;if(!pe.value||!((p=F.value)!=null&&p.fk_column_id))return;await g(F.value),await da(),f();const t=document.querySelectorAll(`.nc-filter-wrapper-${F.value.fk_column_id}`);if(F.value={},!t.length)return;const s=(V=t[t.length-1])==null?void 0:V.querySelector(".nc-filter-value-select input");s&&setTimeout(()=>{var y,I;(y=s==null?void 0:s.focus)==null||y.call(s),(I=s==null?void 0:s.click)==null||I.call(s)},100)},{deep:!0,immediate:!0});const Y=q(()=>r.value.filter(t=>t.status!=="delete")),ie=q(()=>new Set(Y.value.slice(1).map(t=>t.logical_op)).size>1),it=async(t,s)=>{s===1&&Y.value.slice(2).every(p=>p.logical_op!==t.logical_op)&&await Promise.all(Y.value.slice(2).map(async(p,V)=>{p.logical_op=t.logical_op,await se(p,V+2,!1,!1,!0)})),await se(t,s)};Pe(r,t=>{t&&t!==b.value&&(b.value=t)},{immediate:!0});async function ut(t,s){t.dynamic=!1,t.fk_value_col_id=null,await se(t,s)}const{sqlUis:rt}=ot(nt()),at=(ct=le.value)!=null&&ct.source_id?rt.value[(pt=le.value)==null?void 0:pt.source_id]:Object.values(rt.value)[0],dt=t=>{const s=te(t);if(st(s)||[e.Attachment,e.Rating,e.Checkbox,e.QrCode,e.Barcode,e.Collaborator,e.GeoData,e.SpecificDBType].includes(s.uidt))return!1;const p=at.getAbstractType(s);return["integer","float","text","string"].includes(p)?!t.comparison_op||["eq","lt","gt","lte","gte","like","nlike","neq"].includes(t.comparison_op):!1},At=t=>{var p,V;const s=te(t);return s?(V=(p=$.rootMeta)==null?void 0:p.columns)==null?void 0:V.filter(y=>{if(S.includes(y.uidt)||st(y)||et(y)&&!y.pk)return!1;const I=at.getAbstractType(y),ae=at.getAbstractType(s);return[I,ae].every(ue=>["float","integer"].includes(ue))||[I,ae].every(ue=>["text","string"].includes(ue))?!0:ae===I}):[]},Rt=async(t,s)=>{t.dynamic=dt(t)&&N(t),await se(t,s)};return(t,s)=>{const p=pa,V=Ta,y=ma,I=ha,ae=ba,ue=Ya,Ke=wa,Nt=dl,mt=ka,jt=va,Pt=Ka,Gt=Xa,xe=ca("e");return i(),T("div",{"data-testid":"nc-filter",class:Z(["menu-filter-dropdown w-min",{"max-h-[max(80vh,500px)] min-w-112 py-2 pl-4":!a(z),"min-w-full":a(z)}])},[a(z)?(i(),T("div",cl,[h("div",{class:Z([`nc-filter-logical-op-level-${a(j)}`])},[lt(t.$slots,"start",{},void 0,!0)],2),pl,de(ae,{trigger:["hover"],"overlay-class-name":"nc-dropdown-filter-group-sub-menu"},{overlay:k(()=>[de(I,null,{default:k(()=>[("isEeUI"in t?t.isEeUI:a(yt))&&!a(P)?(i(),T(J,{key:0},[a(o)<a(Be)(a(_t).FILTER_LIMIT)?(i(),T(J,{key:0},[de(V,{onClick:s[0]||(s[0]=H(l=>g(),["stop"]))},{default:k(()=>[h("div",ml,[(i(),_(K(("iconMap"in t?t.iconMap:a(X)).plus))),fe(" "+E(t.$t("activity.addFilter")),1)])]),_:1}),a(j)<5?(i(),_(V,{key:0,onClick:s[1]||(s[1]=H(l=>L(),["stop"]))},{default:k(()=>[h("div",vl,[(i(),_(K(("iconMap"in t?t.iconMap:a(X)).plusSquare))),fe(" "+E(t.$t("activity.addFilterGroup")),1)])]),_:1})):C("",!0)],64)):C("",!0)],64)):(i(),T(J,{key:1},[de(V,{onClick:s[2]||(s[2]=H(l=>g(),["stop"]))},{default:k(()=>[h("div",fl,[(i(),_(K(("iconMap"in t?t.iconMap:a(X)).plus))),fe(" "+E(t.$t("activity.addFilter")),1)])]),_:1}),!a(R)&&a(j)<5?(i(),_(y,{key:0,onClick:s[3]||(s[3]=H(l=>L(),["stop"]))},{default:k(()=>[h("div",yl,[(i(),_(K(("iconMap"in t?t.iconMap:a(X)).plusSquare))),fe(" "+E(t.$t("activity.addFilterGroup")),1)])]),_:1})):C("",!0)],64))]),_:1})]),default:k(()=>[de(p,{icon:"plus",class:"cursor-pointer"})]),_:1}),h("div",null,[lt(t.$slots,"end",{},void 0,!0)])])):C("",!0),a(Y)&&a(Y).length?(i(),T("div",{key:1,ref_key:"wrapperDomRef",ref:Ae,class:Z(["flex flex-col gap-y-1.5 nc-filter-grid min-w-full w-min",{"max-h-420px nc-scrollbar-thin nc-filter-top-wrapper pr-4 my-2 py-1":!a(z)}]),onClick:s[8]||(s[8]=H(()=>{},["stop"]))},[(i(!0),T(J,null,je(a(r),(l,G)=>(i(),T(J,{key:G},[l.status!=="delete"?(i(),T(J,{key:0},[l.is_group?(i(),T("div",_l,[h("div",{class:Z(["flex rounded-lg p-2 min-w-full w-min border-1",[`nc-filter-nested-level-${a(j)}`]])},[l.id||l.children||!a(D)?(i(),_(Nt,{key:G,ref_for:!0,ref_key:"localNestedFilters",ref:De,modelValue:l.children,"onUpdate:modelValue":v=>l.children=v,"nested-level":a(j)+1,"parent-id":l.id,"auto-save":a(D),"web-hook":a(R),link:a(U),"show-loading":!1,"root-meta":t.rootMeta,"link-col-id":a(O)},{start:k(()=>[a(Y).indexOf(l)?(i(),T("div",{key:`${G}nested`,class:"flex nc-filter-logical-op"},[Me((i(),_(Ke,{value:l.logical_op,"onUpdate:value":v=>l.logical_op=v,"dropdown-match-select-width":!1,class:Z(["min-w-18 max-w-18 capitalize",{"nc-disabled-logical-op":l.readOnly||G>1&&!a(ie)}]),placeholder:"Group op","dropdown-class-name":"nc-dropdown-filter-logical-op-group",disabled:G>1&&!a(ie),onClick:s[4]||(s[4]=H(()=>{},["stop"])),onChange:v=>it(l,G)},{default:k(()=>[(i(),T(J,null,je(B,v=>de(ue,{key:v.value,value:v.value},{default:k(()=>[h("div",Tl,[h("div",hl,E(v.value),1),l.logical_op===v.value?(i(),_(K(("iconMap"in t?t.iconMap:a(X)).check),{key:0,id:"nc-selected-item-icon",class:"text-primary w-4 h-4"})):C("",!0)])]),_:2},1032,["value"])),64))]),_:2},1032,["value","onUpdate:value","disabled","class","onChange"])),[[xe,["c:filter:logical-op:select"]]])])):(i(),T("span",gl,E(t.$t("labels.where")),1))]),end:k(()=>[l.readOnly?C("",!0):Me((i(),_(y,{key:G,type:"text",size:"small",class:"nc-filter-item-remove-btn cursor-pointer",onClick:H(v=>a(he)(l,G),["stop"])},{default:k(()=>[(i(),_(K(("iconMap"in t?t.iconMap:a(X)).deleteListItem)))]),_:2},1032,["onClick"])),[[xe,["c:filter:delete",{link:!!a(U),webHook:!!a(R)}]]])]),_:2},1032,["modelValue","onUpdate:modelValue","nested-level","parent-id","auto-save","web-hook","link","root-meta","link-col-id"])):C("",!0)],2)])):(i(),T("div",{key:1,class:Z(["flex flex-row gap-x-0 w-full nc-filter-wrapper",`nc-filter-wrapper-${l.fk_column_id}`])},[a(Y).indexOf(l)?Me((i(),_(Ke,{key:1,value:l.logical_op,"onUpdate:value":v=>l.logical_op=v,"dropdown-match-select-width":!1,class:Z(["h-full !min-w-18 !max-w-18 capitalize",{"nc-disabled-logical-op":l.readOnly||a(Y).indexOf(l)>1&&!a(ie)}]),"hide-details":"",disabled:l.readOnly||a(Y).indexOf(l)>1&&!a(ie),"dropdown-class-name":"nc-dropdown-filter-logical-op",onChange:v=>it(l,G),onClick:s[5]||(s[5]=H(()=>{},["stop"]))},{default:k(()=>[(i(),T(J,null,je(B,v=>de(ue,{key:v.value,value:v.value},{default:k(()=>[h("div",wl,[h("div",kl,E(v.value),1),l.logical_op===v.value?(i(),_(K(("iconMap"in t?t.iconMap:a(X)).check),{key:0,id:"nc-selected-item-icon",class:"text-primary w-4 h-4"})):C("",!0)])]),_:2},1032,["value"])),64))]),_:2},1032,["value","onUpdate:value","disabled","class","onChange"])),[[xe,["c:filter:logical-op:select",{link:!!a(U),webHook:!!a(R)}]]]):(i(),T("div",bl,E(t.$t("labels.where")),1)),(i(),_(mt,{key:`${G}_6`,modelValue:l.fk_column_id,"onUpdate:modelValue":v=>l.fk_column_id=v,class:"nc-filter-field-select min-w-32 max-w-32 max-h-8",columns:a(ye),disabled:l.readOnly,meta:a(le),onClick:s[6]||(s[6]=H(()=>{},["stop"])),onChange:v=>u(l,G)},null,8,["modelValue","onUpdate:modelValue","columns","disabled","meta","onChange"])),Me((i(),_(Ke,{value:l.comparison_op,"onUpdate:value":v=>l.comparison_op=v,"dropdown-match-select-width":!1,class:"caption nc-filter-operation-select !min-w-26.75 !max-w-26.75 max-h-8",placeholder:t.$t("labels.operation"),density:"compact",variant:"solo",disabled:l.readOnly,"hide-details":"","dropdown-class-name":"nc-dropdown-filter-comp-op !max-w-80",onChange:v=>Ye(l,G)},{default:k(()=>{var v,Re;return[(i(!0),T(J,null,je(("comparisonOpList"in t?t.comparisonOpList:a(Ge))(a(oe)[l.fk_column_id],(Re=(v=te(l))==null?void 0:v.meta)==null?void 0:Re.date_format),re=>(i(),T(J,{key:re.value},[a(Ee)(l,re)?(i(),_(ue,{key:0,value:re.value},{default:k(()=>[h("div",xl,[h("div",Ml,E(re.text),1),l.comparison_op===re.value?(i(),_(K(("iconMap"in t?t.iconMap:a(X)).check),{key:0,id:"nc-selected-item-icon",class:"text-primary w-4 h-4"})):C("",!0)])]),_:2},1032,["value"])):C("",!0)],64))),128))]}),_:2},1032,["value","onUpdate:value","placeholder","disabled","onChange"])),[[xe,["c:filter:comparison-op:select",{link:!!a(U),webHook:!!a(R)}]]]),["blank","notblank"].includes(l.comparison_op)?(i(),T("div",Cl)):ne(a(oe)[l.fk_column_id])?Me((i(),_(Ke,{key:3,value:l.comparison_sub_op,"onUpdate:value":v=>l.comparison_sub_op=v,"dropdown-match-select-width":!1,class:Z(["caption nc-filter-sub_operation-select min-w-28",{"flex-grow w-full":!N(l),"max-w-28":N(l)}]),placeholder:t.$t("labels.operationSub"),density:"compact",variant:"solo",disabled:l.readOnly,"hide-details":"","dropdown-class-name":"nc-dropdown-filter-comp-sub-op",onChange:v=>Ye(l,G)},{default:k(()=>{var v,Re;return[(i(!0),T(J,null,je(("comparisonSubOpList"in t?t.comparisonSubOpList:a(Ze))(l.comparison_op,(Re=(v=te(l))==null?void 0:v.meta)==null?void 0:Re.date_format),re=>(i(),T(J,{key:re.value},[a(He)(l,re)?(i(),_(ue,{key:0,value:re.value},{default:k(()=>[h("div",Fl,[de(jt,{"show-on-truncate-only":"",class:"truncate flex-1"},{title:k(()=>[fe(E(re.text),1)]),default:k(()=>[fe(" "+E(re.text),1)]),_:2},1024),l.comparison_sub_op===re.value?(i(),_(K(("iconMap"in t?t.iconMap:a(X)).check),{key:0,id:"nc-selected-item-icon",class:"text-primary w-4 h-4"})):C("",!0)])]),_:2},1032,["value"])):C("",!0)],64))),128))]}),_:2},1032,["value","onUpdate:value","class","placeholder","disabled","onChange"])),[[xe,["c:filter:sub-comparison-op:select",{link:!!a(U),webHook:!!a(R)}]]]):C("",!0),h("div",Dl,[a(U)&&(l.dynamic||l.fk_value_col_id)?(i(),T("div",Ll,[N(l)?(i(),_(mt,{key:0,modelValue:l.fk_value_col_id,"onUpdate:modelValue":v=>l.fk_value_col_id=v,class:"nc-filter-field-select min-w-32 w-full max-h-8",columns:At(l),meta:t.rootMeta,onChange:v=>a(se)(l,G)},null,8,["modelValue","onUpdate:modelValue","columns","meta","onChange"])):C("",!0)])):(i(),T(J,{key:1},[l.field&&a(oe)[l.field]==="boolean"?(i(),_(Pt,{key:0,checked:l.value,"onUpdate:checked":v=>l.value=v,dense:"",disabled:l.readOnly,onChange:v=>a(se)(l,G)},null,8,["checked","onUpdate:checked","disabled","onChange"])):C("",!0),N(l)?(i(),_(Gt,{key:1,class:"nc-filter-value-select rounded-md min-w-34",column:{...te(l),uidt:a(oe)[l.fk_column_id]},filter:l,onUpdateFilterValue:v=>c(v,l,G),onClick:s[7]||(s[7]=H(()=>{},["stop"]))},null,8,["column","filter","onUpdateFilterValue"])):ne(a(oe)[l.fk_column_id])?C("",!0):(i(),T("div",Vl))],64)),a(U)?(i(),_(ae,{key:2,class:"nc-settings-dropdown h-full flex items-center min-w-0 rounded-lg",trigger:["click"],placement:"bottom"},{overlay:k(()=>[h("div",Sl,[h("div",{class:Z(["absolute -top-21 flex flex-col min-h-34.5 w-70 p-1.5 bg-white rounded-lg border-1 border-gray-200 justify-start overflow-hidden",{"-left-32.5":!t.isAddNewRecordGridMode,"-left-21.5":t.isAddNewRecordGridMode}]),style:{"box-shadow":"0px 4px 6px -2px rgba(0, 0, 0, 0.06), 0px -12px 16px -4px rgba(0, 0, 0, 0.1)"}},[h("div",{class:"px-4 py-3 flex flex-col select-none gap-y-2 cursor-pointer rounded-md hover:bg-gray-100 text-gray-600 nc-new-record-with-grid group",onClick:v=>ut(l,G)},[h("div",Ul,[Ol,!l.dynamic&&!l.fk_value_col_id?(i(),_(p,{key:0,icon:"check",class:"w-4 h-4 text-primary"})):C("",!0)]),Bl],8,$l),Me((i(),T("div",{class:Z(["px-4 py-3 flex flex-col select-none gap-y-2 cursor-pointer rounded-md hover:bg-gray-100 text-gray-600 nc-new-record-with-form group",dt(l)&&N(l)?"cursor-pointer":"cursor-not-allowed"]),onClick:v=>Rt(l,G)},[h("div",Rl,[Nl,l.dynamic||l.fk_value_col_id?(i(),_(p,{key:0,icon:"check",class:"w-4 h-4 text-primary"})):C("",!0)]),jl],10,Al)),[[xe,["c:filter:dynamic-filter"]]])],2)])]),default:k(()=>[de(y,{type:"text",size:"small"},{default:k(()=>[de(p,{icon:"settings"})]),_:1})]),_:2},1024)):C("",!0)]),l.readOnly?C("",!0):Me((i(),_(y,{key:4,type:"text",size:"small",class:"nc-filter-item-remove-btn self-center",onClick:H(v=>a(he)(l,G),["stop"])},{default:k(()=>[(i(),_(K(("iconMap"in t?t.iconMap:a(X)).deleteListItem)))]),_:2},1032,["onClick"])),[[xe,["c:filter:delete",{link:!!a(U),webHook:!!a(R)}]]])],2))],64)):C("",!0)],64))),128))],2)):C("",!0),a(z)?C("",!0):(i(),T(J,{key:2},[("isEeUI"in t?t.isEeUI:a(yt))&&!a(P)?(i(),T(J,{key:0},[a(o)<a(Be)(a(_t).FILTER_LIMIT)?(i(),T("div",{key:0,class:Z(["flex gap-2",{"mt-1 mb-2":a(r).length}])},[de(y,{size:"small",type:"text",class:"nc-btn-focus",onClick:s[9]||(s[9]=H(l=>g(),["stop"]))},{default:k(()=>[h("div",Pl,[(i(),_(K(("iconMap"in t?t.iconMap:a(X)).plus))),fe(" "+E(t.$t("activity.addFilter")),1)])]),_:1}),a(j)<5?(i(),_(y,{key:0,class:"nc-btn-focus",type:"text",size:"small",onClick:s[10]||(s[10]=H(l=>L(),["stop"]))},{default:k(()=>[h("div",Gl,[(i(),_(K(("iconMap"in t?t.iconMap:a(X)).plus))),fe(" "+E(t.$t("activity.addFilterGroup")),1)])]),_:1})):C("",!0)],2)):C("",!0)],64)):(i(),T("div",{key:1,ref_key:"addFiltersRowDomRef",ref:be,class:Z(["flex gap-2",{"mt-1 mb-2":a(r).length}])},[de(y,{class:"nc-btn-focus",size:"small",type:"text",onClick:s[11]||(s[11]=H(l=>g(),["stop"]))},{default:k(()=>[h("div",ql,[(i(),_(K(("iconMap"in t?t.iconMap:a(X)).plus))),fe(" "+E(t.$t("activity.addFilter")),1)])]),_:1}),!a(U)&&!a(R)&&a(j)<5?(i(),_(y,{key:0,class:"nc-btn-focus",type:"text",size:"small",onClick:s[12]||(s[12]=H(l=>L(),["stop"]))},{default:k(()=>[h("div",zl,[(i(),_(K(("iconMap"in t?t.iconMap:a(X)).plus))),fe(" "+E(t.$t("activity.addFilterGroup")),1)])]),_:1})):C("",!0)],2))],64)),!a(Y)||!a(Y).length?(i(),T("div",{key:3,class:Z(["flex flex-row text-gray-400 mt-2",{"ml-1":a(z),"ml-0.5":!a(z)}])},E(t.$t("title.noFiltersAdded")),3)):C("",!0),lt(t.$slots,"default",{},void 0,!0)],2)}}}),El=Dt(Il,[["__scopeId","data-v-50c8eb00"]]),Hl=Object.freeze(Object.defineProperty({__proto__:null,default:El},Symbol.toStringTag,{value:"Module"}));export{Hl as C,El as _,rl as u};
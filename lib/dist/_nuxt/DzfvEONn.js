import{e as ot,ag as at,cW as st,bL as rt,r as L,d8 as nt,cO as dt,ax as ut,iy as ct,f as X,d0 as ft,J as pt,c$ as x,aE as mt,aK as ye,fY as ie,dr as Ae,cU as vt,iI as De,F as Ne,g as _t,ga as gt,iH as Ve,o as v,c as Q,a as h,N as i,b as f,ao as he,w as r,Q as b,R,O as yt,d as F,t as g,cm as ht,S as M,T as Me,U as je,W as ce,f$ as kt,aJ as Ee,ce as bt,y as wt,ig as xt,ih as Ct,ah as J,a$ as Ft,fE as $t,Y as Ot,Z as It,$ as Tt,hi as Lt,_ as St}from"./DZZ6t_j4.js";import{_ as At}from"./DfeSAprs.js";import Dt from"./hZgTYrdl.js";import Nt from"./37hePIet.js";import{_ as Vt}from"./B89oU1M4.js";import{_ as Mt}from"./sz1d3zjm.js";import{_ as jt}from"./BLgccLvp.js";import{_ as Et}from"./vK-WmZ7a.js";import{c as Re,_ as Rt}from"./CvFIzJau.js";import{a as Ut}from"./B05h-4V9.js";import{a as Bt}from"./i4aLU0Nw.js";import{l as zt}from"./BDAIZopQ.js";import{_ as Kt}from"./D_PA3yCW.js";import{d as Ue}from"./G4Pt-Lbf.js";import{D as Ht}from"./Dg0-TbNo.js";import{S as qt}from"./BmtvKY7O.js";import"./DKN1hQ6S.js";import{I as Wt}from"./BQuyMdA-.js";import"./DNgdBwTe.js";import"./eX8_g88K.js";import"./vll-Pnjv.js";import"./ByVBARmO.js";import"./C4K5fdHe.js";import"./DgixBgIx.js";import"./YB9ISZhn.js";import"./BVrX6sNU.js";import"./d-K880gs.js";import"./C3jLTHF4.js";import"./BYINaHrJ.js";import"./dfem9Uc_.js";import"./BCJFTkwv.js";import"./D9tFZoTQ.js";import"./3mkq4YHx.js";import"./9ZvwAtsX.js";import"./CwK0k4WN.js";import"./amsYJsUh.js";import"./DLDZbX8i.js";import"./oyD85nwD.js";import"./D_MsYLkT.js";import"./BQQOEPN4.js";import"./CB1aB6F1.js";import"./B5RRVMt5.js";import"./B8iX-Tu_.js";import"./Cz_1GoV3.js";import"./CJNscGy3.js";import"./CDWovrGB.js";import"./CFvUUxCy.js";import"./Ck-cgwga.js";import"./C9Sjn86N.js";import"./CXD-Dj4T.js";import"./CynerQ2m.js";import"./DnSVh-oD.js";import"./CR5b0rlC.js";import"./B4ZLG6hR.js";import"./CyRMlOXW.js";import"./Bdv7ru7D.js";import"./DGj1ycqW.js";import"./0azk-b-q.js";import"./BJrIHEse.js";import"./C3XbZq4f.js";import"./GMLocJHP.js";import"./t0mbNaqp.js";import"./DXQuLwNn.js";import"./DyDFI6NE.js";const Pt=""+new URL("multi-field-editor.DjOPELNE.png",import.meta.url).href,Qt={class:"nc-fields-wrapper w-full p-4"},Jt={class:"max-w-250 h-full w-full mx-auto"},Yt={key:0,class:"flex flex-row justify-between mt-2"},Gt={class:"flex flex-row gap-x-4"},Xt={class:"flex w-full justify-between py-2"},Zt={class:"flex gap-2"},el={class:"flex items-center gap-2"},tl={class:"flex flex-row rounded-lg border-1 overflow-clip border-gray-200"},ll=["data-testid","onClick"],il={class:"flex items-center flex-1 py-2.5 gap-1 w-2/6"},ol={"data-testid":"nc-field-title"},al={class:"flex items-center justify-end gap-1"},sl={class:"nc-field-status-wrapper flex items-center"},rl={class:"flex items-center text-xs gap-1"},nl=["onClick"],dl={class:"flex flex-row text-gray-500 text-xs items-baseline gap-x-1 font-bold","data-testid":"nc-field-item-id"},ul={class:"text-red-500"},cl=["data-testid"],fl={class:"flex items-center flex-1 py-2.5 gap-1 w-2/6"},pl={"data-testid":"nc-field-title"},ml={class:"flex items-center justify-end gap-1"},vl={class:"flex items-center"},_l={class:"flex items-center text-xs gap-1"},gl={class:"flex flex-row text-gray-500 text-xs items-baseline gap-x-1 font-bold","data-testid":"nc-field-item-id"},yl={key:1,class:"w-[25rem] flex flex-col justify-center p-4 items-center"},hl={class:"text-2xl text-gray-600 font-bold text-center pt-6"},kl={class:"text-center text-sm px-2 text-gray-500 pt-6"},bl=ot({__name:"Fields",setup(wl){const{t:P}=at(),{$api:oe}=wt(),{getMeta:Be}=st(),{meta:I,view:G}=Ut(),$=rt(nt,L(!1)),ke=dt(),{openedViewsTab:ae}=ut(ke),q=L([]),D=L([]),U=L([]),se=L(),{copy:ze}=ct(),{fields:fe,toggleFieldVisibility:Ke,loadViewColumns:He,isViewColumnsLoading:qe}=Bt(),W=L(!1),re=L(),j=L([]),ne=L(!1),u=(e,t)=>e!=null&&e.id&&(t!=null&&t.id)?e.id===t.id:e!=null&&e.temp_id&&(t!=null&&t.temp_id)?e.temp_id===t.temp_id:!1,de=X(()=>{const e={};if(fe.value)for(const t of fe.value)t.fk_column_id&&(e[t.fk_column_id]=t);return e}),Z=e=>{if(!e)return-1;const t=D.value.find(l=>u(l.column,e));if(t)return t.order;if(e.id){const l=de.value[e.id];if(l)return l.order}return-1},_=X({get:()=>(q.value??[]).filter(t=>!t.fk_column_id&&!ft(t)).concat(j.value).map(t=>Xe(t)).sort((t,l)=>Z(t)-Z(l)),set:e=>{var t;q.value=(t=q.value)==null?void 0:t.map(l=>{const a=e.find(m=>u(m,l));return a||l})}}),s=L(),Y=L(""),pe=(e,t=!1)=>{if(!fe.value)return-1;if(e<=0){const w=_.value.find(N=>N.pv);return w?w.order||0:-1}if(e>=_.value.length-1){const w=_.value.map(N=>Z(N));return Math.max(...w)+1}let l=-1,a=-1;const m=_.value[e+(t?-1:0)],d=_.value[e+(t?0:1)];return m&&(l=Z(m)),d&&(a=Z(d),a===-1&&(a=l+1)),(l+a)/2},n=L([]),We=L(0),me=L(!1),ee=L(),ue=L(),Pe=(e,t=!1)=>{const l=_.value.findIndex(a=>u(a,e));l!==-1&&(ee.value=t?l:l+1)},{isMetaReadOnly:Qe}=pt(),be=e=>!(Qe.value&&!xt.includes(e==null?void 0:e.uidt)&&!Ct.includes(e==null?void 0:e.uidt)),S=(e,t)=>{if(e!=null&&e.id&&(e!=null&&e.uidt)&&!be(e))return J.info(P("msg.info.schemaReadOnly"));if(e&&(e!=null&&e.pk)){J.info(P("msg.info.editingPKnotSupported"));return}t&&t.target instanceof HTMLElement&&t.target.closest(".no-action")||u(e,s.value)||e===void 0&&s.value===void 0||(me.value=!0,Ft(()=>{s.value=e,me.value=!1}))},te=(e,t=!1)=>{e&&Pe(e,t),S({}),setTimeout(()=>{!e&&!t&&se.value&&(se.value.scrollTop=se.value.scrollHeight)},100)},k=X(()=>{if(q.value)return q.value.find(e=>e.pv)}),Je=async e=>{var a,m;if(!q.value)return;const t=zt(`${e.title} copy`,[...q.value,...j.value]);let l={};switch(e.uidt){case x.LinkToAnotherRecord:case x.Links:case x.Lookup:case x.Rollup:case x.Formula:case x.Button:return J.info(P("msg.info.notAvailableAtTheMoment"));case x.SingleSelect:case x.MultiSelect:l={...e,title:t,column_name:t,id:void 0,order:void 0,pv:!1,colOptions:{options:((m=(a=e.colOptions)==null?void 0:a.options)==null?void 0:m.map(d=>({...d,id:void 0})))??[]}};break;default:l={...e,title:t,column_name:t,id:void 0,colOptions:void 0,order:void 0,pv:!1};break}te(e),ue.value=l},we=e=>{for(const t of e)if(t.status||t.is_group&&we(t.children||[]))return!0},ve=(e,t=!1)=>{var d,C,w,N,z,T;const l=_.value.find(c=>u(c,e));if(!l)return;e.colOptions&&[x.SingleSelect,x.MultiSelect].includes(l.uidt)&&(e={...e,colOptions:{...e.colOptions||{},options:(((d=e.colOptions)==null?void 0:d.options)||[]).map(c=>((c==null?void 0:c.index)!==void 0&&delete c.index,c))}});const a=Ue(l,e),m=Object.fromEntries(Object.entries(a).filter(([c,V])=>V!==void 0));if(Object.keys(m).length===0||Object.keys(m).length===1&&"custom"in m&&Object.keys(m.custom).length===0||Object.keys(m).length===1&&"altered"in m)n.value=n.value.filter(c=>c.op==="add"||!u(c.column,e));else{const c=n.value.find(p=>u(p.column,e)),V=D.value.find(p=>u(p.column,e));if(j.value.find(p=>u(p,e))){j.value=j.value.map(p=>u(p,e)?(n.value=n.value.filter(y=>y.op==="add"&&!u(y.column,e)),n.value=[...n.value,{op:"add",column:e}],e):p);return}c||c&&V?c.column=e:$t(e)&&!t?(["title","column_name","meta"].some(p=>p in m)||"childViewId"in m&&m.childViewId!==((C=l.colOptions)==null?void 0:C.fk_target_view_id)||we(m.filters||[]))&&(n.value=[...n.value,{op:"update",column:e}]):n.value=[...n.value,{op:"update",column:e}],s.value&&Object.keys(s.value).length&&(e!=null&&e.id&&((w=s.value)!=null&&w.id)&&(e==null?void 0:e.id)===((N=s.value)==null?void 0:N.id)||e!=null&&e.temp_id&&((z=s.value)!=null&&z.temp_id)&&(e==null?void 0:e.temp_id)===((T=s.value)==null?void 0:T.temp_id))&&(s.value=e)}},_e=e=>{const t=n.value.find(l=>u(l.column,e));t?t.op==="delete"?n.value=n.value.filter(l=>l.column.id!==e.id):t.op==="add"?(s.value&&u(s.value,e)&&S(),n.value=n.value.filter(l=>l.column.temp_id!==e.temp_id),j.value=j.value.filter(l=>l.temp_id!==e.temp_id)):(t.op="delete",t.column=e):n.value=[...n.value,{op:"delete",column:e}]},Ye=e=>{var t;ue.value&&(e=ue.value,ue.value=void 0),e.temp_id=`temp_${++We.value}`,e.view_id=(t=G.value)==null?void 0:t.id,n.value=[...n.value,{op:"add",column:e}],j.value=[...j.value,e],ee.value?(D.value.push({op:"move",column:e,index:ee.value,order:pe(ee.value)}),ee.value=void 0):D.value.push({op:"move",column:e,index:_.value.length,order:pe(_.value.length)}),S(e)},Ge=e=>{var d,C;const t=_.value[e.moved.oldIndex],l=pe(e.moved.newIndex,e.moved.newIndex<e.moved.oldIndex),a=n.value.find(w=>u(w.column,t));if((a==null?void 0:a.op)==="update"){const w=Ue(a.column,t);if(!(Object.keys(w).length===1&&"column_order"in w)){J.warning(P("msg.warning.multiField.moveEditedField"));return}}if((a==null?void 0:a.op)==="delete"){J.warning(P("msg.warning.multiField.moveDeletedField"));return}const m=D.value.find(w=>u(w.column,_.value[e.moved.oldIndex]));m?(m.index=e.moved.newIndex,m.order=l):D.value.push({op:"move",column:_.value[e.moved.oldIndex],index:e.moved.newIndex,order:l}),ve(a?{...a.column,column_order:{order:l,view_id:(d=G.value)==null?void 0:d.id}}:{...t,column_order:{order:l,view_id:(C=G.value)==null?void 0:C.id}},!0)},le=e=>{var a,m;const t=n.value.find(d=>u(e,d.column)&&d.op==="delete"),l=n.value.find(d=>u(e,d.column)&&d.op==="add");return t?!0:!(!e.title&&!l||(e.uidt===x.Links||e.uidt===x.LinkToAnotherRecord)&&l&&(!e.childColumn||!e.childTable||!e.childId)&&(!((a=e.custom)!=null&&a.ref_model_id)||!((m=e.custom)!=null&&m.ref_column_id))||e.uidt===x.Lookup&&l&&(!e.fk_relation_column_id||!e.fk_lookup_column_id)||e.uidt===x.Rollup&&l&&(!e.fk_relation_column_id||!e.fk_rollup_column_id||!e.rollup_function)||e.uidt===x.Formula&&l&&!e.formula_raw||e.uidt===x.Button&&l&&(e.type==="url"&&!e.formula_raw||e.type==="webhook"&&!e.fk_webhook_id))};function Xe(e){var t,l,a,m,d,C,w,N,z,T;if(e.uidt===x.QrCode&&((t=e.colOptions)!=null&&t.fk_qr_value_column_id)&&(e!=null&&e.fk_qr_value_column_id||(e.fk_qr_value_column_id=e.colOptions.fk_qr_value_column_id)),e.uidt===x.Barcode&&((l=e.colOptions)!=null&&l.fk_barcode_value_column_id)&&(e!=null&&e.fk_barcode_value_column_id||(e.fk_barcode_value_column_id=e.colOptions.fk_barcode_value_column_id)),e.uidt===x.Lookup&&((a=e==null?void 0:e.colOptions)!=null&&a.fk_lookup_column_id)&&((m=e==null?void 0:e.colOptions)!=null&&m.fk_relation_column_id)&&(e!=null&&e.fk_lookup_column_id||(e.fk_lookup_column_id=e.colOptions.fk_lookup_column_id),e!=null&&e.fk_relation_column_id||(e.fk_relation_column_id=e.colOptions.fk_relation_column_id)),e.uidt===x.Rollup&&((d=e==null?void 0:e.colOptions)!=null&&d.fk_relation_column_id)&&((C=e==null?void 0:e.colOptions)!=null&&C.fk_rollup_column_id)&&((w=e==null?void 0:e.colOptions)!=null&&w.rollup_function)&&(e!=null&&e.fk_relation_column_id||(e.fk_relation_column_id=e.colOptions.fk_relation_column_id),e!=null&&e.fk_rollup_column_id||(e.fk_rollup_column_id=e.colOptions.fk_rollup_column_id),e!=null&&e.rollup_function||(e.rollup_function=e.colOptions.rollup_function)),e.uidt===x.Formula&&((N=e.colOptions)!=null&&N.formula_raw)&&!(e!=null&&e.formula_raw)&&(e.formula_raw=(z=e.colOptions)==null?void 0:z.formula_raw),e.uidt===x.Button){const c=e.colOptions;e.type=c==null?void 0:c.type,e.theme=c==null?void 0:c.theme,e.label=c==null?void 0:c.label,e.color=c==null?void 0:c.color,e.fk_webhook_id=c==null?void 0:c.fk_webhook_id,e.icon=c==null?void 0:c.icon,e.formula_raw=(T=e.colOptions)==null?void 0:T.formula_raw}return e}const xe=e=>{const t=n.value.find(l=>u(l.column,e));t&&(t.op==="delete"?n.value=n.value.filter(l=>!u(l.column,e)):t.op==="update"&&(n.value=n.value.filter(l=>!u(l.column,e)),D.value=D.value.filter(l=>!u(l.column,e))),s.value=null,S(_.value.filter(l=>l.id===e.id)[0]))},B=e=>{const t=_.value.find(l=>u(l,e));if(t){const l=n.value.find(a=>u(a.column,t));if(l)return l.column}return null},Ce=X(()=>{const e={};for(const t of n.value)t.op==="add"?t.column.temp_id&&(e[t.column.temp_id]="add"):t.op==="update"?t.column.id&&(e[t.column.id]="update"):t.op==="delete"&&t.column.id&&(e[t.column.id]="delete");return e}),E=e=>{const t=(e==null?void 0:e.id)||(e==null?void 0:e.temp_id);return t?Ce.value[t]:""},Ze=X(()=>{const e={};for(const t of n.value)if(t!=null&&t.error){const l=t.column.id||t.column.temp_id;l&&(e[l]=t.error)}return e}),Fe=e=>{const t=(e==null?void 0:e.id)||(e==null?void 0:e.temp_id);return t?Ze.value[t]:""},et=()=>{n.value=[],D.value=[],j.value=[],U.value=[],S()},$e=X(()=>_.value.every(e=>le(e))),Oe=()=>{var e,t;q.value=(t=(e=I.value)==null?void 0:e.columns)==null?void 0:t.map(l=>(l.uidt&&l.uidt in Re&&(l.meta||(l.meta={}),l.meta={...Re[l.uidt],...l.meta||{}}),{...l}))},ge=async()=>{var e,t,l,a,m,d,C,w,N,z,T;if($e.value){if(!W.value&&n.value.length<1&&D.value.length<1&&U.value.length<1)return}else{J.error(P("msg.error.multiFieldSaveValidation"));return}try{if(!((e=I.value)!=null&&e.id))return;W.value=!0;const c=[];for(const p of D.value){const y=n.value.find(K=>u(K.column,p.column));if(y&&y.op==="add"){if(!((t=y.column)!=null&&t.userHasChangedTitle)&&!y.column.title){const K=Ve({formState:y.column,tableExplorerColumns:_.value||[],metaColumns:((l=I.value)==null?void 0:l.columns)||[],newFieldTitles:c});c.push(K),y.column.title=K,y.column.column_name=K}y.column.column_order={order:p.order,view_id:(a=G.value)==null?void 0:a.id}}y&&y.op==="update"&&(y.column.column_order={order:p.order,view_id:(m=G.value)==null?void 0:m.id}),y&&(y.column.view_id=(d=G.value)==null?void 0:d.id)}const V=new Set;for(const p of n.value)if(p.op==="add")s.value&&u(s.value,p.column)&&S();else if(p.op==="delete")V.add(p.column.id),s.value&&u(s.value,p.column)&&S();else if(p.op==="update"){const y=(w=(C=I.value)==null?void 0:C.columns)==null?void 0:w.find(K=>K.id===p.column.id);(y==null?void 0:y.uidt)===x.Attachment&&(y==null?void 0:y.uidt)!==p.column.uidt&&V.add(p.column.id)}for(const p of U.value)await Ke(p.visible,{...p.column,show:p.visible});n.value=n.value.map(({error:p,...y})=>y);const H=await oe.dbTableColumn.bulk((N=I.value)==null?void 0:N.id,{hash:re.value,ops:n.value});await He(),H&&(n.value=H.failedOps&&((z=H.failedOps)!=null&&z.length)?H.failedOps:[],j.value=j.value.filter(p=>!!(H.failedOps&&H.failedOps.find(K=>K.column.temp_id===p.temp_id))),D.value=[]);for(const p of n.value)V.has(p.column.id)&&(p.op==="delete"||p.op==="update")&&V.delete(p.column.id);await Be(I.value.id,!0),Oe(),ke.updateViewCoverImageColumnId({metaId:I.value.id,columnIds:V}),re.value=(await oe.dbTableColumn.hash((T=I.value)==null?void 0:T.id)).hash,U.value=[]}catch{J.error(P("msg.error.somethingWentWrong"))}finally{W.value=!1}},tt=async(e,t)=>{if(t.fk_column_id&&Ce.value[t.fk_column_id]){J.warning(P("msg.warning.multiField.fieldVisibility"));return}if(U.value.find(l=>l.column.fk_column_id===t.fk_column_id)){U.value=U.value.filter(l=>l.column.fk_column_id!==t.fk_column_id);return}U.value.push({visible:e,column:t})};mt(document,"keydown",async e=>{const t=ye()?e.metaKey:e.ctrlKey;if(!$.value){if(t&&e.key.toLowerCase()==="s"){if(ae.value!=="field")return;e.preventDefault();return}if(e.altKey&&e.key.toLowerCase()==="c"||e.altKey&&e.code==="KeyC"){if(ae.value!=="field")return;e.preventDefault(),te()}}});const lt=()=>ye()?"⌘":"Ctrl",it=()=>ye()?"⌥":"ALT";ie("ArrowDown",()=>{const e=_.value.findIndex(t=>u(t,s.value));e===-1||e===_.value.length-1?S(_.value[0]):S(_.value[e+1])}),ie("ArrowUp",()=>{const e=_.value.findIndex(t=>u(t,s.value));S(e===-1?_.value[0]:e===0?_.value[_.value.length-1]:_.value[e-1])}),ie("Delete",()=>{var t;if($.value||(t=s.value)!=null&&t.pv||Ae())return;!(E(s.value)==="delete")&&s.value&&_e(s.value)}),ie("Backspace",()=>{var t;if($.value||(t=s.value)!=null&&t.pv||Ae())return;!(E(s.value)==="delete")&&s.value&&_e(s.value)}),ie("ArrowRight",()=>{var e;if(((e=document.activeElement)==null?void 0:e.tagName)!=="TEXTAREA"&&s.value){const t=document.querySelector(".nc-fields-input");t&&t.focus()}});const Ie=async e=>{await ze(e.id),ne.value=!0},Te=vt();De(Te.meta_s,()=>{var e;$.value||(e=I.value)!=null&&e.id&&ae.value==="field"&&ge()}),De(Te.ctrl_s,()=>{var e;$.value||(e=I.value)!=null&&e.id&&ae.value==="field"&&ge()}),Ne(I,async e=>{e!=null&&e.id&&(re.value=(await oe.dbTableColumn.hash(e.id)).hash)},{deep:!0}),_t(async()=>{await gt(()=>{var e,t;return!!((e=I.value)!=null&&e.id&&((t=I.value)!=null&&t.columns))}).toBeTruthy(),I.value&&I.value.id&&(re.value=(await oe.dbTableColumn.hash(I.value.id)).hash),Oe()});const Le=()=>{setTimeout(()=>{ne.value=!1},200)};return Ne(()=>{var e;return(e=s.value)==null?void 0:e.temp_id},(e,t)=>{if(!t)return;const l=_.value.find(d=>d.temp_id===t);if(!l||l&&(l.title||!n.value.find(d=>d.op==="add"&&d.column.temp_id===l.temp_id)||l!=null&&l.userHasChangedTitle||!le(l)))return;const a=n.value.filter(d=>d.op==="add"&&d.column.title).map(d=>d.column.title).filter(d=>d),m=Ve({formState:l,tableExplorerColumns:_.value||[],metaColumns:q.value||[],newFieldTitles:a});l.title=m,l.column_name=m}),(e,t)=>{const l=qt,a=Ot,m=Wt,d=It,C=Tt,w=At,N=Dt,z=Nt,T=Vt,c=Lt,V=Mt,H=jt,p=Et,y=Kt,K=Rt;return v(),Q("div",Qt,[h("div",Jt,[i(qe)?(v(),Q("div",Yt,[f(l,{class:"!h-8 !w-68 !rounded !overflow-hidden",active:"",size:"small"}),h("div",Gt,[f(l,{class:"!h-8 !w-22 !rounded !overflow-hidden",active:"",size:"small"}),f(l,{class:"!h-8 !w-22 !rounded !overflow-hidden",active:"",size:"small"}),f(l,{class:"!h-8 !w-22 !rounded !overflow-hidden",active:"",size:"small"})])])):(v(),Q(he,{key:1},[h("div",Xt,[f(m,{value:i(Y),"onUpdate:value":t[1]||(t[1]=o=>yt(Y)?Y.value=o:null),"data-testid":"nc-field-search-input",class:"!h-8 !px-1 !rounded-lg !w-72",placeholder:e.$t("placeholder.searchFields")},{prefix:r(()=>[f(a,{icon:"search",class:"mx-1 h-3.5 w-3.5 text-gray-500 group-hover:text-black"})]),suffix:r(()=>[i(Y).length>0?(v(),b(a,{key:0,icon:"close",class:"mx-1 h-3.5 w-3.5 text-gray-500 group-hover:text-black","data-testid":"nc-field-clear-search",onClick:t[0]||(t[0]=o=>Y.value="")})):R("",!0)]),_:1},8,["value","placeholder"]),h("div",Zt,[f(C,{disabled:i($)},{title:r(()=>[F(g(`${it()} + C`),1)]),default:r(()=>[f(d,{"data-testid":"nc-field-add-new",type:"secondary",size:"small",class:"mr-1",disabled:i(W)||i($),onClick:t[2]||(t[2]=o=>te())},{default:r(()=>[h("div",el,[f(a,{icon:"plus",class:"w-3"}),F(" "+g(e.$t("labels.multiField.newField")),1)])]),_:1},8,["disabled"])]),_:1},8,["disabled"]),f(d,{"data-testid":"nc-field-reset",type:"secondary",size:"small",disabled:!i(W)&&i(n).length<1&&i(D).length<1&&i(U).length<1||i($),onClick:t[3]||(t[3]=o=>et())},{default:r(()=>[F(g(e.$t("general.reset")),1)]),_:1},8,["disabled"]),f(C,{disabled:i($)},{title:r(()=>[F(g(`${lt()} + S`),1)]),default:r(()=>[f(d,{"data-testid":"nc-field-save-changes",type:"primary",size:"small",loading:i(W),disabled:(i($e)?!i(W)&&i(n).length<1&&i(D).length<1&&i(U).length<1:!0)||i($),onClick:t[4]||(t[4]=o=>ge())},{default:r(()=>[F(g(e.$t("labels.multiField.saveChanges")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["disabled"])])]),h("div",tl,[h("div",{ref_key:"fieldsListWrapperDomRef",ref:se,class:"nc-scrollbar-md !overflow-auto flex-1 flex-grow-1 nc-fields-height"},[f(i(Ht),{"model-value":i(_),disabled:i($),"item-key":"id","data-testid":"nc-field-list-wrapper",onChange:t[10]||(t[10]=o=>Ge(o))},ht({item:r(({element:o})=>{var A,Se;return[o.title.toLowerCase().includes(i(Y).toLowerCase())&&!o.pv?(v(),Q("div",{key:0,class:M(["flex px-2 hover:bg-gray-100 first:rounded-t-lg border-b-1 last:rounded-b-none border-gray-200 pl-5 group",{selected:u(o,i(s)),"cursor-not-allowed":!be(o)}]),"data-testid":`nc-field-item-${((A=B(o))==null?void 0:A.title)||o.title}`,onClick:O=>S(o,O)},[h("div",il,[(v(),b(Me(("iconMap"in e?e.iconMap:i(je)).drag),{class:M(["cursor-move !h-3.75 text-gray-600 mr-1",{"opacity-0 !cursor-default":i($)}])},null,8,["class"])),o.id&&i(de)[o.id]?(v(),b(w,{key:0,disabled:i($),checked:((Se=i(U).find(O=>O.column.fk_column_id===o.id))==null?void 0:Se.visible)??i(de)[o.id].show,"data-testid":"nc-field-visibility-checkbox",onChange:O=>{tt(O.target.checked,i(de)[o.id])}},null,8,["disabled","checked","onChange"])):(v(),b(w,{key:1,disabled:!0,class:"opacity-0",checked:!0})),o&&i(kt)(B(o)||o)?(v(),b(N,{key:2,"column-meta":B(o)||o,class:M({"text-brand-500":u(o,i(s))})},null,8,["column-meta","class"])):(v(),b(z,{key:3,"column-meta":B(o)||o,class:M({"text-brand-500":u(o,i(s))})},null,8,["column-meta","class"])),f(C,{class:M([{"text-brand-500":u(o,i(s))},"truncate flex-1"]),"show-on-truncate-only":""},{title:r(()=>{var O;return[F(g(((O=B(o))==null?void 0:O.title)||o.title),1)]}),default:r(()=>{var O;return[h("span",ol,g(((O=B(o))==null?void 0:O.title)||o.title),1)]}),_:2},1032,["class"])]),h("div",al,[h("div",sl,[E(o)==="delete"?(v(),b(T,{key:0,color:"red",border:!1,class:"bg-red-50 text-red-700","data-testid":"nc-field-status-deleted-field"},{default:r(()=>[F(g(e.$t("labels.multiField.deletedField")),1)]),_:1})):le(o)&&E(o)==="add"?(v(),b(T,{key:1,color:"green",border:!1,class:"bg-green-50 text-green-700","data-testid":"nc-field-status-new-field"},{default:r(()=>[F(g(e.$t("labels.multiField.newField")),1)]),_:1})):E(o)==="update"?(v(),b(T,{key:2,color:"orange",border:!1,class:"bg-orange-50 text-orange-700","data-testid":"nc-field-status-updated-field"},{default:r(()=>[F(g(e.$t("labels.multiField.updatedField")),1)]),_:1})):R("",!0),le(o)?R("",!0):(v(),b(T,{key:3,color:"yellow",border:!1,class:"ml-1 bg-yellow-50 text-yellow-700","data-testid":"nc-field-status-incomplete-configuration"},{default:r(()=>[F(g(e.$t("labels.multiField.incompleteConfiguration")),1)]),_:1})),Fe(o)?(v(),b(C,{key:4,class:"cursor-pointer"},{title:r(()=>[F(g(Fe(o)),1)]),default:r(()=>[f(T,{color:"red",border:!1,class:"ml-1 bg-red-50 text-red-700","data-testid":"nc-field-status-error-configuration"},{default:r(()=>[f(a,{icon:"info",class:"!text-current"})]),_:1})]),_:2},1024)):R("",!0)]),E(o)==="delete"||E(o)==="update"?(v(),b(d,{key:0,type:"secondary",size:"small",class:"no-action mr-2",disabled:i(W),"data-testid":"nc-field-restore-changes",onClick:O=>xe(o)},{default:r(()=>[h("div",rl,[f(a,{icon:"reload"}),F(" "+g(e.$t("general.restore")),1)])]),_:2},1032,["disabled","onClick"])):(v(),b(p,{key:1,trigger:["click"],"overlay-class-name":"nc-field-item-action-dropdown nc-dropdown-table-explorer","onUpdate:visible":Le,onClick:t[5]||(t[5]=ce(()=>{},["stop"]))},{overlay:r(()=>[f(H,{style:{"padding-top":"0.45rem !important"}},{default:r(()=>[E(o)!=="add"?(v(),Q(he,{key:0},[f(C,{placement:"top"},{title:r(()=>[F(g(e.$t("msg.clickToCopyFieldId")),1)]),default:r(()=>[h("div",{class:"flex flex-row gap-2 w-[calc(100%_-_12px)] p-2 mx-1.5 rounded-md justify-between items-center group hover:bg-gray-100 cursor-pointer","data-testid":"nc-field-item-action-copy-id",onClick:O=>Ie(o)},[h("div",dl,g(e.$t("labels.idColon",{id:o.id})),1),f(d,{size:"xsmall",type:"secondary",class:"!group-hover:bg-gray-100"},{default:r(()=>[i(ne)?(v(),b(a,{key:0,icon:"check"})):(v(),b(a,{key:1,icon:"copy"}))]),_:1})],8,nl)]),_:2},1024),i($)?R("",!0):(v(),b(c,{key:0,class:"my-1.5"}))],64)):R("",!0),i($)?R("",!0):(v(),Q(he,{key:1},[f(V,{key:"table-explorer-duplicate","data-testid":"nc-field-item-action-duplicate",onClick:O=>Je(o)},{default:r(()=>[f(a,{icon:"duplicate",class:"text-gray-800"}),h("span",null,g(e.$t("general.duplicate"))+" "+g(e.$t("objects.field").toLowerCase()),1)]),_:2},1032,["onClick"]),o.pv?R("",!0):(v(),b(V,{key:"table-explorer-insert-above","data-testid":"nc-field-item-action-insert-above",onClick:O=>te(o,!0)},{default:r(()=>[f(a,{icon:"ncArrowUp",class:"text-gray-800"}),h("span",null,g(e.$t("general.insertAbove")),1)]),_:2},1032,["onClick"])),f(V,{key:"table-explorer-insert-below","data-testid":"nc-field-item-action-insert-below",onClick:O=>te(o)},{default:r(()=>[f(a,{icon:"ncArrowDown",class:"text-gray-800"}),h("span",null,g(e.$t("general.insertBelow")),1)]),_:2},1032,["onClick"]),f(c,{class:"my-1.5"}),f(V,{key:"table-explorer-delete",class:"!hover:bg-red-50","data-testid":"nc-field-item-action-delete",onClick:O=>_e(o)},{default:r(()=>[h("div",ul,[f(a,{icon:"delete",class:"group-hover:text-accent -ml-0.25 -mt-0.75 mr-0.5"}),F(" "+g(e.$t("general.delete"))+" "+g(e.$t("objects.field").toLowerCase()),1)])]),_:2},1032,["onClick"])],64))]),_:2},1024)]),default:r(()=>[f(d,{size:"xsmall",type:"text",class:M(["!opacity-0 !group-hover:opacity-100",{"!hover:text-brand-700 !hover:bg-brand-100 !group-hover:text-brand-500":u(o,i(s)),"!hover:text-gray-700 !hover:bg-gray-200 !group-hover:text-gray-500":!u(o,i(s))}]),"data-testid":"nc-field-item-action-button"},{default:r(()=>[f(a,{icon:"threeDotVertical",class:"no-action text-inherit"})]),_:2},1032,["class"])]),_:2},1024)),f(y,{class:M(["text-brand-500 opacity-0",{"opacity-100":u(o,i(s))}])},null,8,["class"])])],10,ll)):R("",!0)]}),_:2},[i(k)&&i(k).title&&i(k).title.toLowerCase().includes(i(Y).toLowerCase())?{name:"header",fn:r(()=>{var o;return[h("div",{class:M(["flex px-2 bg-white hover:bg-gray-100 border-b-1 border-gray-200 first:rounded-tl-lg last:border-b-1 pl-5 group",` ${u(i(k),i(s))?"selected":""}`]),"data-testid":`nc-field-item-${((o=B(i(k)))==null?void 0:o.title)||i(k).title}`,onClick:t[9]||(t[9]=A=>S(i(k),A))},[h("div",fl,[(v(),b(Me(("iconMap"in e?e.iconMap:i(je)).drag),{class:M(["cursor-move !h-3.75 text-gray-200 mr-1",{"opacity-0 !cursor-default":i($)}])},null,8,["class"])),f(w,{disabled:!0,checked:!0,"data-testid":"nc-field-visibility-checkbox"}),i(k)?(v(),b(z,{key:0,"column-meta":B(i(k))||i(k),class:M({"text-brand-500":u(i(k),i(s))})},null,8,["column-meta","class"])):R("",!0),f(C,{class:M(["truncate flex-1",{"text-brand-500":u(i(k),i(s))}]),"show-on-truncate-only":""},{title:r(()=>{var A;return[F(g(((A=B(i(k)))==null?void 0:A.title)||i(k).title),1)]}),default:r(()=>{var A;return[h("span",pl,g(((A=B(i(k)))==null?void 0:A.title)||i(k).title),1)]}),_:1},8,["class"])]),h("div",ml,[h("div",vl,[E(i(k))==="delete"?(v(),b(T,{key:0,color:"red",border:!1,class:"bg-red-50 text-red-700","data-testid":"nc-field-status-deleted-field"},{default:r(()=>[F(g(e.$t("labels.multiField.deletedField")),1)]),_:1})):E(i(k))==="update"?(v(),b(T,{key:1,color:"orange",border:!1,class:"bg-orange-50 text-orange-700","data-testid":"nc-field-status-updated-field"},{default:r(()=>[F(g(e.$t("labels.multiField.updatedField")),1)]),_:1})):R("",!0)]),E(i(k))==="delete"||E(i(k))==="update"?(v(),b(d,{key:0,type:"secondary",size:"small",class:"no-action mr-2",disabled:i(W),"data-testid":"nc-field-restore-changes",onClick:t[6]||(t[6]=A=>xe(i(k)))},{default:r(()=>[h("div",_l,[f(a,{icon:"reload"}),F(" "+g(e.$t("general.restore")),1)])]),_:1},8,["disabled"])):(v(),b(p,{key:1,trigger:["click"],"overlay-class-name":"nc-field-item-action-dropdown-display-column nc-dropdown-table-explorer-display-column","onUpdate:visible":Le,onClick:t[8]||(t[8]=ce(()=>{},["stop"]))},{overlay:r(()=>[f(H,null,{default:r(()=>[f(C,{placement:"top"},{title:r(()=>[F(g(e.$t("msg.clickToCopyFieldId")),1)]),default:r(()=>[h("div",{class:"flex flex-row gap-2 w-[calc(100%_-_12px)] p-2 mx-1.5 rounded-md justify-between items-center group hover:bg-gray-100 cursor-pointer","data-testid":"nc-field-item-action-copy-id",onClick:t[7]||(t[7]=A=>Ie(i(k)))},[h("div",gl,g(e.$t("labels.idColon",{id:i(k).id})),1),f(d,{size:"xsmall",type:"secondary",class:"!group-hover:bg-gray-100"},{default:r(()=>[i(ne)?(v(),b(a,{key:0,icon:"check"})):(v(),b(a,{key:1,icon:"copy"}))]),_:1})])]),_:1})]),_:1})]),default:r(()=>[f(d,{size:"xsmall",type:"text",class:M(["!opacity-0 !group-hover:opacity-100",{"!hover:text-brand-700 !hover:bg-brand-100 !group-hover:text-brand-500":u(i(k),i(s)),"!hover:text-gray-700 !hover:bg-gray-200 !group-hover:text-gray-500":!u(i(k),i(s))}]),"data-testid":"nc-field-item-action-button"},{default:r(()=>[f(a,{icon:"threeDotVertical",class:"no-action text-inherit"})]),_:1},8,["class"])]),_:1})),f(y,{class:M(["text-brand-500 opacity-0",{"opacity-100":u(i(k),i(s))}])},null,8,["class"])])],10,cl)]}),key:"0"}:void 0]),1032,["model-value","disabled"])],512),f(bt,{name:"slide-fade"},{default:r(()=>{var o,A;return[i(me)?R("",!0):(v(),Q("div",{key:0,class:"border-gray-200 border-l-1 nc-scrollbar-md nc-fields-height !overflow-y-auto",onKeydown:[t[11]||(t[11]=Ee(ce(()=>{},["stop"]),["up"])),t[12]||(t[12]=Ee(ce(()=>{},["stop"]),["down"]))]},[i(s)?(v(),b(K,{key:0,class:"p-4 w-[25rem]",column:i(s),preload:B(i(s)),"table-explorer-columns":i(_),"is-column-valid":le,"embed-mode":"",readonly:i($),"from-table-explorer":"","disable-title-focus":!!((o=i(s))!=null&&o.id)||!!((A=i(s))!=null&&A.title),onUpdate:ve,onAdd:Ye},null,8,["column","preload","table-explorer-columns","readonly","disable-title-focus"])):(v(),Q("div",yl,[t[13]||(t[13]=h("img",{src:Pt,class:"!w-[18rem]"},null,-1)),h("div",hl,g(e.$t("labels.multiField.selectField")),1),h("div",kl,g(e.$t("labels.multiField.selectFieldLabel")),1)]))],32))]}),_:1})])],64))])])}}}),Di=St(bl,[["__scopeId","data-v-51250d1e"]]);export{Di as default};
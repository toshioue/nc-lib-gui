import{u as x}from"./CSl6euFG.js";import{ai as E,az as P,cM as U,cY as j,aj as O,fr as L,fQ as _,gK as A,ak as M,P as u,A as B}from"./3QBYHahY.js";import{b as T,c as h,d as k,e as C}from"./DPqnb67u.js";import{d as Y}from"./boyBAVNN.js";import{e as p}from"./BYmqikBK.js";const[X,D]=x(n=>{const{$api:R}=B(),{t:S}=E(),{base:w}=P(U()),{metas:b}=j(),a=t=>(t.rowMeta||(t.rowMeta={}),t.rowMeta.ltarState||(t.rowMeta.ltarState={}),t.rowMeta.ltarState),H=async(t,e,s)=>{if(T(s)||h(s)){if(a(t)[s.title]||(a(t)[s.title]=[]),a(t)[s.title].find(i=>Y(i,e)))return O.info(S("msg.info.valueAlreadyInList"));Array.isArray(e)?a(t)[s.title].push(...e):a(t)[s.title].push(e)}else(k(s)||C(s))&&(a(t)[s.title]=e)},N=async(t,e,s)=>{var i,r;T(s)||h(s)?(r=a(t)[s.title])==null||r.splice((i=a(t)[s.title])==null?void 0:i.indexOf(e),1):(k(s)||C(s))&&(a(t)[s.title]=null)},I=async(t,e,s,i,{metaValue:r=n.value}={})=>{try{await R.dbTableRow.nestedAdd(A,w.value.id,r==null?void 0:r.id,encodeURIComponent(t),i,s.id,encodeURIComponent(e))}catch(d){O.error(await M(d))}};return{addLTARRef:H,removeLTARRef:N,syncLTARRefs:async(t,e,{metaValue:s=n.value}={})=>{var r,d,f,y;const i=p(e,s==null?void 0:s.columns);for(const o of(s==null?void 0:s.columns)??[]){if(!L(o))continue;const c=o.colOptions,l=(r=b.value)==null?void 0:r[c==null?void 0:c.fk_related_model_id];if(T(o)||h(o)){const v=((d=a(t))==null?void 0:d[o.title])??[];for(const g of v)await I(i,p(g,l.columns),o,c.type,{metaValue:s})}else(k(o)||C(o))&&((f=a(t))!=null&&f[o.title])&&await I(i,p((y=a(t))==null?void 0:y[o.title],l.columns),o,c.type,{metaValue:s});a(t)[o.title]=null}},loadRow:async t=>{var s,i,r;const e=await R.dbTableRow.read(A,(s=w.value)==null?void 0:s.id,(i=n.value)==null?void 0:i.title,encodeURIComponent(p(t.row,(r=n.value)==null?void 0:r.columns)));Object.assign(u(t),{row:e,oldRow:{...e},rowMeta:{}})},clearLTARCell:async(t,e)=>{var s,i,r,d,f,y,o,c;try{if(!e||!L(e))return;const l=(i=b.value)==null?void 0:i[(s=e==null?void 0:e.colOptions)==null?void 0:s.fk_related_model_id];if(t.rowMeta.new)a(t)[e.title]=null;else if([_.BELONGS_TO,_.ONE_TO_ONE].includes((r=e.colOptions)==null?void 0:r.type)){if(!t.row[e.title])return;await R.dbTableRow.nestedRemove(A,w.value.id,(d=n.value)==null?void 0:d.id,p(t.row,(f=n.value)==null?void 0:f.columns),(y=e.colOptions)==null?void 0:y.type,e.id,p(t.row[e.title],l==null?void 0:l.columns)),t.row[e.title]=null}else{for(const v of t.row[e.title]||[])await R.dbTableRow.nestedRemove(A,w.value.id,(o=n.value)==null?void 0:o.id,encodeURIComponent(p(t.row,(c=n.value)==null?void 0:c.columns)),(e==null?void 0:e.colOptions).type,e.id,encodeURIComponent(p(v,l==null?void 0:l.columns)));t.row[e.title]=[]}}catch(l){O.error(await M(l))}},cleaMMCell:async(t,e)=>{var s,i,r,d;try{if(!e||!L(e))return;if(t.rowMeta.new)a(t)[e.title]=null;else if(((s=e.colOptions)==null?void 0:s.type)===_.MANY_TO_MANY){if(!t.row[e.title])return;const f=await R.dbDataTableRow.nestedListCopyPasteOrDeleteAll((i=n.value)==null?void 0:i.id,e.id,[{operation:"deleteAll",rowId:p(t.row,(r=n.value)==null?void 0:r.columns),columnId:e.id,fk_related_model_id:(d=e.colOptions)==null?void 0:d.fk_related_model_id}]);return t.row[e.title]=null,Array.isArray(f.unlink)?f.unlink:[]}}catch(f){O.error(await M(f))}}}},"smartsheet-ltar-helpers");function Z(){const n=D();if(n==null)throw new Error("Please call `useSmartsheetLtarHelpers` on the appropriate parent component");return n}export{Z as a,X as u};
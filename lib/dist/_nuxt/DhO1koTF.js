const __vite__fileDeps=["./DQfYvTkb.js","./Cgw6cdOy.js","./entry.DxI7QTvq.css","./r2PN1Hfg.js","./CO8XXsKl.js","./vIgbYHAs.js","./DpDIhxXu.js","./boyBAVNN.js","./D7yS5JAk.js","./BBXMuneh.js","./Cell.DUBzJZSm.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as O,cZ as V,bN as m,hP as w,fQ as I,r as S,da as W,g as s,iI as R,d2 as j,o as i,c as u,P as l,t as _,S as A,Q as B,a as D,T as C,Z as P,a6 as L}from"./Cgw6cdOy.js";import{u as M}from"./0kk1xXLB.js";import{a as U}from"./DpDIhxXu.js";import"./CnN16FGu.js";const z=P(()=>L(()=>import("./DQfYvTkb.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url).then(d=>d.default||d)),Q={key:0},Z={key:0,class:"text-left text-wrap mt-2 text-[#e65100] text-xs"},$={key:1,class:"text-left text-wrap mt-2 text-[#e65100] text-xs"},K=O({__name:"Rollup",setup(d){const{metas:b}=V(),r=m(w),o=m(I),c=m(W,S()),{showEditNonEditableFieldWarning:h,showClearNonEditableFieldWarning:F,activateShowEditNonEditableFieldWarning:p}=M(),f=s(()=>{var e,t,n,a,g;return(t=(e=o==null?void 0:o.value)==null?void 0:e.colOptions)!=null&&t.fk_relation_column_id?(g=(a=(n=c==null?void 0:c.value)==null?void 0:n.columns)==null?void 0:a.find(N=>{var y,E;return N.id===((E=(y=o==null?void 0:o.value)==null?void 0:y.colOptions)==null?void 0:E.fk_relation_column_id)}))==null?void 0:g.colOptions:null}),v=s(()=>{var e,t,n;return((e=f.value)==null?void 0:e.fk_related_model_id)&&((n=b.value)==null?void 0:n[(t=f.value)==null?void 0:t.fk_related_model_id])}),x=s(()=>{var e;return(e=o.value)==null?void 0:e.colOptions}),k=s(()=>{var e,t;return(e=v.value)!=null&&e.columns&&U(o.value)?(t=v.value)==null?void 0:t.columns.find(n=>n.id===x.value.fk_rollup_column_id):""}),T=s(()=>{var e;return R(((e=k.value)==null?void 0:e.uidt)||j.SingleLineText)});return(e,t)=>{const n=z;return i(),u("div",{class:"nc-cell-field",onDblclick:t[1]||(t[1]=(...a)=>l(p)&&l(p)(...a))},[l(T).includes(l(x).rollup_function)?(i(),u("div",Q,_(l(r)),1)):(i(),A(n,{key:1,modelValue:l(r),"onUpdate:modelValue":t[0]||(t[0]=a=>B(r)?r.value=a:null),column:l(k),"edit-enabled":!1,"read-only":!0},null,8,["modelValue","column"])),D("div",null,[l(h)?(i(),u("div",Z,_(e.$t("msg.info.computedFieldEditWarning")),1)):C("",!0),l(F)?(i(),u("div",$,_(e.$t("msg.info.computedFieldDeleteWarning")),1)):C("",!0)])],32)}}});export{K as default};
import{u as C}from"./GMLocJHP.js";import{g_ as A,ax as b,cO as I,cL as K,f as t,d4 as l,r as f,N as k,F as N,y as U,gv as W}from"./DZZ6t_j4.js";function Y(){const u={field:"",query:""},s=A("field-query-search-map",()=>({})),i=A("field-query-search",()=>({...u}));return{search:i,loadFieldQuery:o=>{o&&(o in s.value||(s.value[o]={...u}),i.value=s.value[o])}}}const[X,z]=C((u,s,i=!1,m,o)=>{const{$api:_}=U(),{activeView:a,activeNestedFilters:g,activeSorts:x}=b(I()),L=K(),{sqlUis:h}=b(L),v=t(()=>{var e;return(e=s.value)!=null&&e.source_id?h.value[s.value.source_id]:Object.values(h.value)[0]}),{search:n}=Y(),O=W(Symbol("SmartsheetStore")),P=t(()=>{var e;return((e=a.value)==null?void 0:e.lock_type)==="locked"}),R=t(()=>{var e,r;return(r=(e=s.value)==null?void 0:e.columns)==null?void 0:r.some(c=>c.pk)}),V=t(()=>{var e;return((e=a.value)==null?void 0:e.type)===l.GRID}),S=t(()=>{var e;return((e=a.value)==null?void 0:e.type)===l.FORM}),$=t(()=>{var e;return((e=a.value)==null?void 0:e.type)===l.GALLERY}),B=t(()=>{var e;return((e=a.value)==null?void 0:e.type)===l.CALENDAR}),E=t(()=>{var e;return((e=a.value)==null?void 0:e.type)===l.KANBAN}),G=t(()=>{var e;return((e=a.value)==null?void 0:e.type)===l.MAP}),M=t(()=>S.value&&i),Q=t(()=>{var e;return(e=a.value)==null?void 0:e.is_default}),T=t(()=>{var c,w,F,q;let e;const r=((w=(c=s.value)==null?void 0:c.columns)==null?void 0:w.find(({id:y})=>y===n.value.field))||((q=(F=s.value)==null?void 0:F.columns)==null?void 0:q.find(y=>y.pv));if(r&&n.value.query.trim())return v.value&&["text","string"].includes(v.value.getAbstractType(r))&&r.dt!=="bigint"?e=`(${r.title},like,%${n.value.query.trim()}%)`:e=`(${r.title},eq,${n.value.query.trim()})`,e}),j=t(()=>{var e;return((e=s.value)==null?void 0:e.type)==="view"}),p=f(k(m)??[]),d=f(k(o)??[]),D=f([]);return N(p,()=>{x.value=p.value},{immediate:!0}),N(d,()=>{g.value=d.value},{immediate:!0}),{view:a,meta:s,isLocked:P,$api:_,xWhere:T,isPkAvail:R,isForm:S,isGrid:V,isGallery:$,isKanban:E,isMap:G,isCalendar:B,isSharedForm:M,sorts:p,nestedFilters:d,isSqlView:j,eventBus:O,sqlUi:v,allFilters:D,isDefaultView:Q}},"smartsheet-store");function Z(){const u=z();if(!u)throw new Error("Please call `useProvideSmartsheetStore` on the appropriate parent component");return u}export{Z as a,Y as b,X as u};
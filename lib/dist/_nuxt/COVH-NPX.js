const __vite__fileDeps=["./CWm929xG.js","./DZZ6t_j4.js","./entry.DIDWwc7m.css","./C9Sjn86N.js","./C4K5fdHe.js","./ByVBARmO.js","./PlainCell.1kvaRUkA.css","./0yfimkpx.js","./RecordCard.BkJXt930.css","./Tryc0omP.js","./CA74dF2b.js","./GMLocJHP.js","./qW2V2r_p.js","./boyBAVNN.js","./BDAIZopQ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{e as Q,bL as T,r as R,d7 as W,J as X,hA as G,f as $,cq as c,N as x,o as w,c as y,ao as S,at as j,a8 as K,b as F,w as N,W as ee,Q as te,R as oe,X as g,a4 as Y}from"./DZZ6t_j4.js";import{a as ae}from"./DWT0yQl9.js";import{a as ne}from"./i4aLU0Nw.js";import{k as re,e as b}from"./BDAIZopQ.js";import"./GMLocJHP.js";import"./B05h-4V9.js";const le=g(()=>Y(()=>import("./CWm929xG.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(d=>d.default||d)),se=g(()=>Y(()=>import("./0yfimkpx.js"),__vite__mapDeps([7,1,2,8]),import.meta.url).then(d=>d.default||d)),ie=g(()=>Y(()=>import("./Tryc0omP.js"),__vite__mapDeps([9,10,11,1,2,12,5,13,14]),import.meta.url).then(d=>d.default||d)),ce=["onMouseover"],we=Q({__name:"DateField",emits:["expandRecord","newRecord"],setup(d,{emit:U}){const V=U,C=T(W,R()),A=R(),{isUIAllowed:z}=X(),{selectedDate:D,formattedData:v,formattedSideBarData:O,calendarRange:k,updateRowProperty:Z}=ae(),J=T(G,R()),{fields:P}=ne(),q=$(()=>P.value?new Map(P.value.map(o=>[o.fk_column_id,{underline:o.underline,bold:o.bold,italic:o.italic}])):new Map),E=o=>q.value.get(o.id),L=$(()=>{let o=0;const s=28;if(!k.value)return[];const f=[];return k.value.forEach(u=>{const p=u.fk_from_col,e=u.fk_to_col;if(p&&e)for(const a of v.value){const t=c(a.row[p.title]),r=c(a.row[e.title]);o++;const m={top:`${(o-1)*s}px`,width:"100%"};let n="none";const _=i=>i.isSame(D.value,"day"),h=i=>i.isBefore(D.value,"day"),l=i=>i.isAfter(D.value,"day");_(t)&&_(r)?n="rounded":h(t)&&l(r)?n="none":_(t)&&l(r)?n="leftRounded":h(t)&&_(r)?n="rightRounded":n="none",f.push({...a,rowMeta:{...a.rowMeta,position:n,style:m,range:u}})}else if(p)for(const a of v.value)o++,f.push({...a,rowMeta:{...a.rowMeta,range:u,style:{width:"100%",left:"0",top:`${(o-1)*s}px`},position:"rounded"}})}),f}),M=R(null),B=R(null),H=o=>{var f,u,p;if(!z("dataEdit"))return;o.preventDefault();const s=(f=o.dataTransfer)==null?void 0:f.getData("text/plain");if(s){const{record:e}=JSON.parse(s),a=(u=e.rowMeta.range)==null?void 0:u.fk_from_col,t=(p=e.rowMeta.range)==null?void 0:p.fk_to_col;if(!a)return;const r=c(D.value).startOf("day");let m;const n={...e,row:{...e.row,[a.title]:c(r).format("YYYY-MM-DD HH:mm:ssZ")}},_=[a.title];if(t){const l=e.row[a.title]?c(e.row[a.title]):null,i=e.row[t.title]?c(e.row[t.title]):null;l&&i?m=c(r).add(i.diff(l,"day"),"day"):l&&!i?m=c(r).endOf("day"):!l&&i?m=c(r).endOf("day"):m=r.clone(),n.row[t.title]=c(m).format("YYYY-MM-DD HH:mm:ssZ"),_.push(t.title)}if(!n)return;const h=b(n.row,C.value.columns);M.value?v.value=v.value.map(l=>b(l.row,C.value.columns)===h?n:l):(v.value=[...v.value,n],O.value=O.value.filter(l=>b(l.row,C.value.columns)!==h)),M.value&&(M.value.style.boxShadow="none",M.value=null),Z(n,_,!1),$e("c:calendar:day:drag-record")}},I=()=>{var s;if(!z("dataEdit")||!((s=k.value)!=null&&s.length))return;const o={row:{[k.value[0].fk_from_col.title]:D.value.format("YYYY-MM-DD HH:mm:ssZ")}};V("newRecord",o)};return(o,s)=>{const f=le,u=se,p=ie;return x(L).length?(w(),y("div",{key:0,ref_key:"container",ref:A,class:"w-full cursor-pointer relative h-[calc(100vh-10.8rem)] overflow-y-auto nc-scrollbar-md","data-testid":"nc-calendar-day-view",onDblclick:I,onDrop:H},[(w(!0),y(S,null,j(x(L),(e,a)=>(w(),y("div",{key:a,style:K(e.rowMeta.style),class:"absolute mt-2","data-testid":"nc-calendar-day-record-card",onMouseleave:s[0]||(s[0]=t=>B.value=null),onMouseover:t=>B.value=e.rowMeta.id},[F(p,{row:e},{default:N(()=>[F(u,{position:e.rowMeta.position,record:e,resize:!1,color:"blue",size:"small",onClick:ee(t=>V("expandRecord",e),["prevent"])},{default:N(()=>[(w(!0),y(S,null,j(x(J),(t,r)=>(w(),y(S,{key:r},[("isRowEmpty"in o?o.isRowEmpty:x(re))(e,t)?oe("",!0):(w(),te(f,{key:0,modelValue:e.row[t.title],"onUpdate:modelValue":m=>e.row[t.title]=m,class:"text-xs",bold:E(t).bold,column:t,italic:E(t).italic,underline:E(t).underline},null,8,["modelValue","onUpdate:modelValue","bold","column","italic","underline"]))],64))),128))]),_:2},1032,["position","record","onClick"])]),_:2},1032,["row"])],44,ce))),128))],544)):(w(),y("div",{key:1,ref_key:"container",ref:A,class:"w-full h-full cursor-pointer flex text-md font-bold text-gray-500 items-center justify-center",onDrop:H,onDblclick:I}," No records in this day ",544))}}});export{we as default};
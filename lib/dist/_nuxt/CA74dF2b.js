import{u as m}from"./GMLocJHP.js";import{a as v}from"./qW2V2r_p.js";import{r as S,f as o,N as h}from"./DZZ6t_j4.js";const[M,i]=m(a=>{const t=S(a),s=o({get:()=>{var e,r;return((r=(e=t.value)==null?void 0:e.rowMeta)==null?void 0:r.ltarState)??{}},set:e=>{t.value&&(t.value.rowMeta||(t.value.rowMeta={}),t.value.rowMeta.ltarState=e)}}),l=o(()=>{var e;return((e=h(a).rowMeta)==null?void 0:e.new)??!1}),{addLTARRef:u,removeLTARRef:n,syncLTARRefs:R,loadRow:c,clearLTARCell:w,cleaMMCell:f}=v();return{row:a,state:s,isNew:l,addLTARRef:(...e)=>u(t.value,...e),removeLTARRef:(...e)=>n(t.value,...e),syncLTARRefs:(...e)=>R(t.value,...e),loadRow:(...e)=>c(t.value,...e),currentRow:t,clearLTARCell:(...e)=>w(t.value,...e),cleaMMCell:(...e)=>f(t.value,...e)}},"smartsheet-row-store");function d(){const a=i();if(a==null)throw new Error("Please call `useSmartsheetRowStore` on the appropriate parent component");return a}export{d as a,M as u};
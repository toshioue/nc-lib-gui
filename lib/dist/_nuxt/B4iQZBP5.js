import{a as M}from"./BteOdwRG.js";import{L as N,az as P,cM as $,cZ as z,bN as E,gC as C,r as L,dA as W,iW as Z,aj as y,ak as _,hj as m,A as q}from"./3QBYHahY.js";function J(i,O){const{sorts:e,eventBus:T}=M(),{$api:c,$e:f}=q(),{isUIAllowed:w}=N(),{isSharedBase:x}=P($()),{addUndo:b,clone:o,defineViewScope:p}=z(),v=E(C),j=E(W,L(!1)),g=L([]);Z(e,t=>{g.value=o(t)});const U=async()=>{if(j.value){e.value=[];return}try{if(!w("sortSync")||!(i!=null&&i.value))return;e.value=(await c.dbTableSort.list(i.value.id)).list}catch(t){console.error(t),y.error(await _(t))}},B=(t,s)=>Object.entries(s).filter(([a,u])=>t[a]!==u&&a in t).reduce((a,[u,r])=>({...a,[u]:r}),{}),h=async(t,s,a=!1)=>{var u;if(!a){const r=g.value[s];if(r){const l=o(B(t,r));Object.keys(l).length>0&&b({undo:{fn:(S,d)=>{const n=e.value[s];n&&(n[S]=d,h(n,s,!0))},args:[Object.keys(l)[0],Object.values(l)[0]]},redo:{fn:(S,d)=>{const n=e.value[s];n&&(n[S]=d,h(n,s,!0))},args:[Object.keys(l)[0],t[Object.keys(l)[0]]]},scope:p({view:i.value})})}}if(j.value||x.value){e.value[s]=t,e.value=[...e.value],v==null||v.trigger();return}try{w("sortSync")&&(t.id?(await c.dbTableSort.update(t.id,t),f("sort-updated")):e.value[s]=await c.dbTableSort.create((u=i.value)==null?void 0:u.id,t)),O==null||O(),f("a:sort:dir",{direction:t.direction})}catch(r){console.error(r),y.error(await _(r))}g.value=o(e.value)},V=async({direction:t,column:s,reloadDataHook:a})=>{var u;try{f("a:sort:add",{from:"column-menu"});const r=e.value.findIndex(d=>d.fk_column_id===s.id),l=r>-1?e.value[r]:void 0;l&&(await c.dbTableSort.delete(l.id),f("a:sort:delete"));const S=await c.dbTableSort.create((u=i.value)==null?void 0:u.id,{fk_column_id:s.id,direction:t,push_to_top:!0});e.value=[...e.value.filter((d,n)=>n!==r),S],b({redo:{fn:async function(){var I;const n=await c.dbTableSort.create((I=i.value)==null?void 0:I.id,{fk_column_id:s.id,direction:t,push_to_top:!0});this.undo.args=[n.id],T.emit(m.SORT_RELOAD),a==null||a.trigger()},args:[]},undo:{fn:async function(n){await c.dbTableSort.delete(n),T.emit(m.SORT_RELOAD),a==null||a.trigger()},args:[S.id]},scope:p({view:i.value})}),T.emit(m.SORT_RELOAD),a==null||a.trigger()}catch(r){console.error(r),y.error(await _(r))}};async function R(t,s,a=!1){try{w("sortSync")&&t.id&&!j.value&&!x.value&&await c.dbTableSort.delete(t.id),e.value.splice(s,1),e.value=[...e.value],a||b({redo:{fn:async()=>{await R(t,s,!0)},args:[]},undo:{fn:()=>{e.value.splice(s,0,t),h(t,s,!0)},args:[o(t),s]},scope:p({view:i.value})}),g.value=o(e.value),v==null||v.trigger(),f("a:sort:delete")}catch(u){console.error(u),y.error(await _(u))}}const A=(t=!1,s)=>{var a;e.value=[...e.value,{fk_column_id:s==null?void 0:s.id,direction:"asc"}],f("a:sort:add",{length:(a=e==null?void 0:e.value)==null?void 0:a.length}),t||b({undo:{fn:async()=>{await R(e.value[e.value.length-1],e.value.length-1,!0)},args:[]},redo:{fn:()=>{A(!0)},args:[]},scope:p({view:i.value})}),g.value=o(e.value)};return{sorts:e,loadSorts:U,addSort:A,deleteSort:R,saveOrUpdate:h,insertSort:V}}export{J as u};
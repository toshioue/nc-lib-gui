import{f as E,at as N,cB as H,bL as f,r as p,c$ as U,fB as D,d1 as O,cQ as S,N as L,O as P,o as c,U as w,w as v,a,Y as T,t as x,c as A,al as Q,am as W,b as G,d as z,P as i,V as y,W as C,S as F,R as Y,Q as q,iR as R,fV as J,fQ as K,an as X,a2 as Z,$ as ee,af as se,A as ae,_ as oe}from"./DKhUGBot.js";import{u as te}from"./BNVF6GgL.js";const ie={class:"flex items-center gap-0.5"},ne={class:"w-full bg-white shadow-lg p-1.5 menu-filter-dropdown border-1 border-gray-200 rounded-lg overflow-hidden w-[160px]","data-testid":"nc-height-menu"},ce={class:"text-xs text-gray-500 px-3 pt-2 pb-1 select-none"},le=["onClick"],re={class:"flex items-center gap-2"},de=E({__name:"RowHeight",setup(he){const k=[{icon:"heightShort",heightClass:"short"},{icon:"heightMedium",heightClass:"medium"},{icon:"heightTall",heightClass:"tall"},{icon:"heightExtra",heightClass:"extra"}],{isSharedBase:V}=N(H()),s=f(U,p()),B=f(D,p(!1)),I=f(O,p(!1)),{$api:$}=ae(),{addUndo:j,defineViewScope:M}=S(),{user:_}=L(),n=p(!1),g=async(e,o=!1)=>{var l,r,d;if((l=s.value)!=null&&l.id){if(e===s.value.view.row_height)return;o||j({redo:{fn:t=>g(t,!0),args:[e]},undo:{fn:t=>g(t,!0),args:[s.value.view.row_height||0]},scope:M({view:s.value})});try{!B.value&&!V.value&&!(R(((r=_.value)==null?void 0:r.roles)??{})[J.VIEWER]||R(((d=_.value)==null?void 0:d.roles)??{})[K.VIEWER])&&await $.dbView.gridUpdate(s.value.id,{row_height:e}),s.value.view.row_height=e,n.value=!1}catch{X.error("There was an error while updating view!")}}};return te(n),(e,o)=>{const l=Z,r=ee,d=se,t=P("e");return c(),w(d,{visible:i(n),"onUpdate:visible":o[1]||(o[1]=h=>q(n)?n.value=h:null),"offset-y":"",class:"",trigger:["click"],"overlay-class-name":"nc-dropdown-height-menu"},{overlay:v(()=>[a("div",ne,[a("div",{class:"flex flex-col w-full text-sm",onClick:o[0]||(o[0]=T(()=>{},["stop"]))},[a("div",ce,x(e.$t("objects.rowHeight")),1),(c(),A(Q,null,W(k,(h,u)=>{var m,b;return a("div",{key:u,class:"nc-row-height-option",onClick:ue=>g(u)},[a("div",re,[G(r,{icon:h.icon,class:"nc-row-height-icon"},null,8,["icon"]),z(" "+x(e.$t(`objects.heightClass.${h.heightClass}`)),1)]),(u===0?!((m=i(s))==null?void 0:m.view).row_height:((b=i(s))==null?void 0:b.view).row_height===u)?(c(),w(y(("iconMap"in e?e.iconMap:i(C)).check),{key:0,class:"text-primary w-4 h-4"})):F("",!0)],8,le)}),64))])])]),default:v(()=>[a("div",null,[Y((c(),w(l,{disabled:i(I),class:"nc-height-menu-btn nc-toolbar-btn !border-0 !h-7 !px-1.5 !min-w-7",size:"small",type:"secondary"},{default:v(()=>[a("div",ie,[(c(),w(y(("iconMap"in e?e.iconMap:i(C)).rowHeight),{class:"!h-3.75 !w-3.75"}))])]),_:1},8,["disabled"])),[[t,["c:row-height"]]])])]),_:1},8,["visible"])}}}),ge=oe(de,[["__scopeId","data-v-3ca5d406"]]);export{ge as default};
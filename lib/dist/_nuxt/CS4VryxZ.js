import{f as Z,bc as fe,bN as m,r as f,d8 as ee,d9 as te,g as L,d1 as d,d2 as se,hs as ve,fr as oe,fQ as U,o as n,c as p,b as E,P as s,da as _e,gC as be,dA as he,N as Se,ay as ye,hT as ge,h_ as ke,hj as we,H as Ce,i as Oe,O as Ie,S as r,w as u,a as _,Y as k,aq as x,av as X,R as O,t as I,V as T,W as M,T as D,Q as Y,X as Te,iV as Me,d as J,U as K,i_ as Le,a0 as $e,_ as Ne}from"./3QBYHahY.js";import{_ as Ve}from"./BSmpAotj.js";import{a as ne}from"./CfxEkdGP.js";import{u as ae}from"./B4iQZBP5.js";import{_ as xe}from"./DMimqSFg.js";import{_ as De}from"./D7hrRKCy.js";import{_ as Ee}from"./Kma333Sh.js";import{a as Ue}from"./BteOdwRG.js";import{u as Be}from"./BTE9xdWH.js";import{g as Re}from"./D_Mbwwhl.js";import{S as je}from"./BEpKpjF5.js";import"./ISaCd8Ij.js";import"./BV5EkxN-.js";import"./DPqnb67u.js";import"./CtMydB5S.js";import"./D4iSzjWt.js";import"./BLIqcdwb.js";import"./WrawXyJR.js";import"./kHOslGNR.js";import"./CmN9vPg3.js";import"./BQQOEPN4.js";import"./xnDaHwV-.js";import"./DPgYHC40.js";import"./BsWDDIqE.js";import"./ceYq-xax.js";import"./CSl6euFG.js";import"./CGxepfeV.js";import"./3ezdMRmZ.js";const Fe={class:"nc-sort-create-modal"},Pe=Z({__name:"CreateSort",props:{isParentOpen:{type:Boolean}},emits:["created"],setup(A,{emit:$}){const B=A,R=$,{isParentOpen:w}=fe(B),j=m(ee,f()),N=m(te,f()),{showSystemFields:l,metaColumnById:b}=ne(),{sorts:V}=ae(j),F=L(()=>{var v,h;return((h=(v=N.value)==null?void 0:v.columns)==null?void 0:h.filter(o=>{var g;return o.uidt===d.Links?!0:se((g=b==null?void 0:b.value)==null?void 0:g[o.id])?ve(o,N.value)?!1:l.value:o.uidt===d.QrCode||o.uidt===d.Barcode||o.uidt===d.ID||o.uidt===d.Button?!1:!(oe(o)&&![U.BELONGS_TO,U.ONE_TO_ONE].includes(o.colOptions.type))}).filter(o=>!V.value.find(g=>g.fk_column_id===o.id)))??[]}),P=v=>{R("created",v)};return(v,h)=>{const o=Ve;return n(),p("div",Fe,[E(o,{"is-parent-open":s(w),"search-input-placeholder":v.$t("msg.selectFieldToSort"),options:s(F),"toolbar-menu":"sort",onSelected:P},null,8,["is-parent-open","search-input-placeholder","options"])])}}}),ze={class:"flex items-center gap-1"},Ae={class:"flex items-center gap-2"},Qe={key:0,class:"text-capitalize !text-[13px] font-medium"},Ge={key:0,class:"bg-brand-50 text-brand-500 py-1 px-2 text-md rounded-md"},We={key:1,class:"pt-2 pb-2 pl-4 nc-filter-list max-h-[max(80vh,30rem)] min-w-102","data-testid":"nc-sorts-menu"},qe={class:"w-full flex items-center justify-between gap-2"},He={class:"truncate flex-1"},Xe={class:"flex gap-1 items-center"},Ye={key:1},Je={class:"flex gap-1 items-center"},Ke=Z({__name:"SortListMenu",setup(A){const $=m(te,f()),B=m(ee,f()),R=m(_e,f(!1)),w=m(be),j=m(he,f(!1)),{eventBus:N}=Ue(),{sorts:l,saveOrUpdate:b,loadSorts:V,addSort:F,deleteSort:P}=ae(B,()=>w==null?void 0:w.trigger()),{showSystemFields:v,metaColumnById:h}=ne(),o=f(!1),{isMobileMode:g}=Se(),{getPlanLimit:ie}=ye(),Q=m(ge,f(!1)),re=m(ke,L(()=>!1));N.on(e=>{e===we.SORT_RELOAD&&V()});const z=L(()=>{var e;return((e=$.value)==null?void 0:e.columns)||[]}),G=L(()=>z.value.reduce((e,t)=>(e[t.id]=t,e),{})),le=L(()=>{var e;return(e=z.value)==null?void 0:e.filter(t=>{var i;return t.uidt===d.Links?!0:se((i=h==null?void 0:h.value)==null?void 0:i[t.id])?v.value:t.uidt===d.QrCode||t.uidt===d.Barcode||t.uidt===d.ID||t.uidt===d.Button?!1:!(oe(t)&&![U.BELONGS_TO,U.ONE_TO_ONE].includes(t.colOptions.type))}).filter(t=>!l.value.find(i=>i.fk_column_id===t.id))}),de=e=>{if(!e||!G.value[e])return"";const t=G.value[e];let i=t.uidt;return t.uidt===d.Formula&&(i=Le({formulaColumn:t})||i),i||""},S=f(!1);Be(S);const W=e=>{F(!0,e);const t=l.value[l.value.length-1];b(t,l.value.length-1),o.value=!1};return Ce(S,()=>{S.value||(o.value=!1)}),Oe(()=>{V()}),(e,t)=>{const i=$e,q=Pe,ce=xe,ue=je,pe=De,H=Ee,C=Ie("e");return n(),r(H,{visible:s(S),"onUpdate:visible":t[6]||(t[6]=a=>Y(S)?S.value=a:null),trigger:["click"],class:"!xs:hidden","overlay-class-name":"nc-dropdown-sort-menu nc-toolbar-dropdown"},{overlay:u(()=>[s(l).length?(n(),p("div",We,[_("div",{class:"sort-grid max-h-120 nc-scrollbar-thin pr-4 my-2 py-1",onClick:t[2]||(t[2]=k(()=>{},["stop"]))},[(n(!0),p(x,null,X(s(l),(a,y)=>(n(),p(x,{key:y},[E(ce,{modelValue:a.fk_column_id,"onUpdate:modelValue":[c=>a.fk_column_id=c,c=>s(b)(a,y)],class:"flex caption nc-sort-field-select w-44 flex-grow",columns:s(z),"is-sort":"",meta:s($),onClick:t[0]||(t[0]=k(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","columns","meta"]),E(pe,{value:a.direction,"onUpdate:value":c=>a.direction=c,class:"shrink grow-0 nc-sort-dir-select",label:e.$t("labels.operation"),"dropdown-class-name":"sort-dir-dropdown nc-dropdown-sort-dir !rounded-lg",onClick:t[1]||(t[1]=k(()=>{},["stop"])),onSelect:c=>s(b)(a,y)},{default:u(()=>[(n(!0),p(x,null,X(("getSortDirectionOptions"in e?e.getSortDirectionOptions:s(Re))(de(a.fk_column_id)),(c,me)=>O((n(),r(ue,{key:me,value:c.value},{default:u(()=>[_("div",qe,[_("div",He,I(c.text),1),a.direction===c.value?(n(),r(T(("iconMap"in e?e.iconMap:s(M)).check),{key:0,id:"nc-selected-item-icon",class:"text-primary w-4 h-4"})):D("",!0)])]),_:2},1032,["value"])),[[C,["c:sort:operation:select"]]])),128))]),_:2},1032,["value","onUpdate:value","label","onSelect"]),O((n(),r(i,{type:"text",size:"small",class:"nc-sort-item-remove-btn !max-w-8",onClick:k(c=>s(P)(a,y),["stop"])},{default:u(()=>[(n(),r(T(("iconMap"in e?e.iconMap:s(M)).deleteListItem)))]),_:2},1032,["onClick"])),[[C,["c:sort:delete"]]])],64))),128))]),s(le).length?(n(),r(H,{key:0,visible:s(o),"onUpdate:visible":t[5]||(t[5]=a=>Y(o)?o.value=a:null),trigger:["click"],"overlay-class-name":"nc-toolbar-dropdown"},{overlay:u(()=>[E(q,{"is-parent-open":s(o),onCreated:W},null,8,["is-parent-open"])]),default:u(()=>[("isEeUI"in e?e.isEeUI:s(Te))&&!s(j)?(n(),p(x,{key:0},[s(l).length<s(ie)(s(Me).SORT_LIMIT)?O((n(),r(i,{key:0,class:"!text-brand-500 mt-1 mb-2",type:"text",size:"small",onClick:t[3]||(t[3]=k(a=>o.value=!0,["stop"]))},{default:u(()=>[_("div",Xe,[(n(),r(T(("iconMap"in e?e.iconMap:s(M)).plus))),J(" "+I(e.$t("activity.addSort")),1)])]),_:1})),[[C,["c:sort:add"]]]):(n(),p("span",Ye))],64)):O((n(),r(i,{key:1,class:"!text-brand-500 mt-1 mb-2",type:"text",size:"small",onClick:t[4]||(t[4]=k(a=>o.value=!0,["stop"]))},{default:u(()=>[_("div",Je,[(n(),r(T(("iconMap"in e?e.iconMap:s(M)).plus))),J(" "+I(e.$t("activity.addSort")),1)])]),_:1})),[[C,["c:sort:add"]]])]),_:1},8,["visible"])):D("",!0)])):(n(),r(q,{key:0,"is-parent-open":s(S),onCreated:W},null,8,["is-parent-open"]))]),default:u(()=>{var a;return[_("div",{class:K({"nc-active-btn":(a=s(l))==null?void 0:a.length})},[O((n(),r(i,{class:K([{"!border-1 !rounded-md":s(Q),"!border-0":!s(Q)},"nc-sort-menu-btn nc-toolbar-btn !h-7"]),disabled:s(R),size:"small",type:"secondary"},{default:u(()=>{var y;return[_("div",ze,[_("div",Ae,[(n(),r(T(("iconMap"in e?e.iconMap:s(M)).sort),{class:"h-4 w-4 text-inherit"})),!s(g)&&!s(re)?(n(),p("span",Qe,I(e.$t("activity.sort")),1)):D("",!0)]),(y=s(l))!=null&&y.length?(n(),p("span",Ge,I(s(l).length),1)):D("",!0)])]}),_:1},8,["class","disabled"])),[[C,["c:sort"]]])],2)]}),_:1},8,["visible"])}}}),Tt=Ne(Ke,[["__scopeId","data-v-12294cc2"]]);export{Tt as default};
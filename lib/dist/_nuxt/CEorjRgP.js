import{f as C,bL as l,fG as N,hw as I,cB as W,g as c,it as B,iu as O,iv as T,r as u,gw as j,hs as D,o as t,c as n,P as e,U as L,w as _,a as h,t as r,S as f,T as S,a1 as G}from"./DKhUGBot.js";import{H as g}from"./DFT4Rrrq.js";import{u as H}from"./BUpgiGSk.js";import"./BIe2oNDw.js";const M={class:"font-bold"},R=h("span",null,"ERR!",-1),U=["innerHTML"],P={key:1},$={key:2,class:"text-left text-wrap mt-2 text-[#e65100] text-xs"},z={key:3,class:"text-left text-wrap mt-2 text-[#e65100] text-xs"},K=C({__name:"Formula",setup(V){const s=l(N),o=l(I),{isPg:x}=W(),d=c(()=>x(s.value.source_id)?g(B(o==null?void 0:o.value)):g(o==null?void 0:o.value)),p=c(()=>O(d.value)),{showEditNonEditableFieldWarning:v,showClearNonEditableFieldWarning:E,activateShowEditNonEditableFieldWarning:m}=H(),k=c(()=>{var a,i;return((i=(a=s.value.colOptions)==null?void 0:a.parsed_tree)==null?void 0:i.dataType)===T.NUMERIC}),w=l(j,u(!1)),y=l(D,u(!1));return(a,i)=>{const b=G;return t(),n("div",{class:S(["w-full",{"text-right":e(k)&&e(y)&&!e(w)}])},[e(s)&&e(s).colOptions&&e(s).colOptions.error?(t(),L(b,{key:0,placement:"bottom",class:"text-orange-700"},{title:_(()=>[h("span",M,r(e(s).colOptions.error),1)]),default:_(()=>[R]),_:1})):(t(),n("div",{key:1,class:"nc-cell-field py-1",onDblclick:i[0]||(i[0]=(...F)=>e(m)&&e(m)(...F))},[e(p)?(t(),n("div",{key:0,innerHTML:e(p)},null,8,U)):(t(),n("div",P,r(e(d)),1)),e(v)?(t(),n("div",$,r(a.$t("msg.info.computedFieldEditWarning")),1)):f("",!0),e(E)?(t(),n("div",z,r(a.$t("msg.info.computedFieldDeleteWarning")),1)):f("",!0)],32))],2)}}});export{K as default};
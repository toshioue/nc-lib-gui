const __vite__fileDeps=["./DXof0zKo.js","./Cgw6cdOy.js","./entry.DxI7QTvq.css","./CJNyL6pj.js","./DpDIhxXu.js","./D7yS5JAk.js","./VirtualCell.DaTWCMZu.css","./CBOrWF0V.js","./Dqwep-0C.js","./BBXMuneh.js","./Cell.CE2XxAOg.css","./D51uA4Lq.js","./VirtualCell.BYk4C8Tn.css","./DQfYvTkb.js","./r2PN1Hfg.js","./CO8XXsKl.js","./vIgbYHAs.js","./boyBAVNN.js","./Cell.DUBzJZSm.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{o as t,c as l,a as d,f as G,aB as E,r as p,gV as J,hK as K,bN as I,aF as Y,ad as Z,bc as Q,dB as W,hr as X,g as z,ib as ee,d2 as te,O as ae,b as c,w as i,aq as v,P as e,av as A,S as m,T as _,t as P,fP as C,d as D,R as ne,Y as oe,j9 as le,U as R,Z as f,a6 as h,$ as se,a1 as re,ft as ie,_ as ce}from"./Cgw6cdOy.js";import{u as me}from"./BcWX645D.js";import{i as de}from"./C00NHga8.js";import{j as ue}from"./D7yS5JAk.js";import{_ as pe}from"./SnuQkHMZ.js";const _e={class:"nc-icon",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},fe=d("path",{fill:"currentColor",d:"M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8"},null,-1),he=[fe];function ye(n,o){return t(),l("svg",_e,[...he])}const xe={name:"mdi-loading",render:ye},ve=f(()=>h(()=>import("./DXof0zKo.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(n=>n.default||n)),ge=f(()=>h(()=>import("./CJNyL6pj.js"),__vite__mapDeps([3,1,2,4,5,6]),import.meta.url).then(n=>n.default||n)),we=f(()=>h(()=>import("./CBOrWF0V.js"),__vite__mapDeps([7,1,2,8,9,10]),import.meta.url).then(n=>n.default||n)),be=f(()=>h(()=>import("./D51uA4Lq.js"),__vite__mapDeps([11,1,2,4,9,12]),import.meta.url).then(n=>n.default||n)),ke=f(()=>h(()=>import("./DQfYvTkb.js"),__vite__mapDeps([13,1,2,14,15,16,4,17,5,9,18]),import.meta.url).then(n=>n.default||n)),Ve={class:"nc-list-item-wrapper group px-[1px] hover:bg-gray-50 border-y-1 border-gray-200 border-t-transparent"},Ie={class:"flex items-center gap-3"},Pe={key:0},Le={key:1,class:"h-11 w-11 !min-h-11 !min-w-11 !max-h-11 !max-w-11 !flex flex-row items-center !rounded-l-xl justify-center"},Te={class:"flex-1 flex flex-col gap-1 justify-center overflow-hidden"},Ee={class:"flex justify-start"},ze={class:"font-semibold text-brand-500 nc-display-value truncate leading-[20px]"},Ae={key:0,class:"flex ml-[-0.25rem] sm:flex-row xs:flex-col xs:mt-2 gap-4 min-h-5"},Ce={key:0,class:"flex flex-col gap-[-1]"},De={class:"nc-link-record-cell flex w-full max-w-full"},Re={key:1,class:"flex flex-row w-full max-w-72 h-5 pl-1 items-center justify-start"},$e={key:1,class:"flex-none flex items-center w-7"},Fe={key:0,class:"flex"},je=G({__name:"ListItem",props:{row:{},fields:{},attachment:{},relatedTableDisplayValueProp:{},displayValueTypeAndFormatProp:{},isLoading:{type:Boolean,default:!1},isLinked:{type:Boolean}},emits:["expand","linkOrUnlink"],setup(n){const o=n;E(J,p(!0)),E(K,p(1));const g=I(Y,p(!1)),s=Z(o,"row"),{isLinked:y,isLoading:L}=Q(o),w=I(W,p(!1)),b=I(X,p(!1)),{getPossibleAttachmentSrc:$}=me(),k=z(()=>{try{return o.attachment&&s.value[o.attachment.title]?typeof s.value[o.attachment.title]=="string"?JSON.parse(s.value[o.attachment.title]):s.value[o.attachment.title]:[]}catch{return[]}}),F=z(()=>s.value[o.relatedTableDisplayValueProp]&&o.displayValueTypeAndFormatProp.type&&o.displayValueTypeAndFormatProp.format?ee(s.value[o.relatedTableDisplayValueProp],o.displayValueTypeAndFormatProp.format,o.displayValueTypeAndFormatProp.format!==te.Time):s.value[o.relatedTableDisplayValueProp]);return(r,x)=>{const j=ve,B=pe,T=se,S=ge,U=we,N=be,O=ke,V=re,M=xe,H=ie,q=ae("e");return t(),l("div",Ve,[c(H,{tabindex:"0",class:R(["nc-list-item !outline-none transition-all relative group-hover:bg-gray-50 cursor-auto",{"!bg-white":e(L),"!hover:bg-white":e(b)}]),"body-style":{padding:"6px 10px !important",borderRadius:0},hoverable:!1},{default:i(()=>[d("div",Ie,[r.attachment?(t(),l(v,{key:0},[e(k)&&e(k).length?(t(),l("div",Pe,[c(B,{autoplay:"",class:"!w-11 !h-11 !max-h-11 !max-w-11"},{customPaging:i(()=>[]),default:i(()=>[(t(!0),l(v,null,A(e(k),(a,u)=>(t(),l(v,null,[("isImage"in r?r.isImage:e(de))(a.title,a.mimetype??a.type)?(t(),m(j,{key:`carousel-${a.title}-${u}`,class:"!w-11 !h-11 !max-h-11 !max-w-11object-cover !rounded-l-xl",srcs:e($)(a,"tiny")},null,8,["srcs"])):_("",!0)],64))),256))]),_:1})])):(t(),l("div",Le,[c(T,{class:"w-full h-full !text-6xl !leading-10 !text-transparent rounded-lg",icon:"fileImage"})]))],64)):_("",!0),d("div",Te,[d("div",Ee,[d("span",ze,P(e(F)),1)]),r.fields.length>0&&!e(w)&&!e(g)?(t(),l("div",Ae,[(t(!0),l(v,null,A(r.fields,a=>(t(),l("div",{key:a.id,class:"sm:w-1/3 sm:max-w-1/3 sm:overflow-hidden"},[("isRowEmpty"in r?r.isRowEmpty:e(ue))({row:e(s)},a)?(t(),l("div",Re,"-")):(t(),l("div",Ce,[c(V,{class:"z-10 flex",placement:"bottomLeft","arrow-point-at-center":!1},{title:i(()=>[e(C)(a)?(t(),m(S,{key:0,class:"text-gray-100 !text-sm nc-link-record-cell-tooltip",column:a,"hide-menu":!0},null,8,["column"])):(t(),m(U,{key:1,class:"text-gray-100 !text-sm nc-link-record-cell-tooltip",column:a,"hide-menu":!0},null,8,["column"]))]),default:i(()=>[d("div",De,[e(C)(a)?(t(),m(N,{key:0,modelValue:e(s)[a.title],"onUpdate:modelValue":u=>e(s)[a.title]=u,row:e(s),column:a},null,8,["modelValue","onUpdate:modelValue","row","column"])):(t(),m(O,{key:1,modelValue:e(s)[a.title],"onUpdate:modelValue":u=>e(s)[a.title]=u,column:a,"edit-enabled":!1,"read-only":!0},null,8,["modelValue","onUpdate:modelValue","column"]))])]),_:2},1024)]))]))),128))])):_("",!0)]),!e(g)&&!e(w)&&!e(b)?(t(),l("div",$e,[c(V,{class:"flex"},{title:i(()=>[D(P(r.$t("title.expand")),1)]),default:i(()=>[ne((t(),l("button",{tabindex:-1,class:"z-10 flex items-center justify-center nc-expand-item !group-hover:visible !invisible !h-7 !w-7 transition-all !hover:children:w-4.5 !hover:children:h-4.5",onClick:x[0]||(x[0]=oe(a=>r.$emit("expand",e(s)),["stop"]))},[c(e(le),{class:"flex-none w-4 h-4 scale-125"})])),[[q,["c:row-expand:open"]]])]),_:1})])):_("",!0),!e(w)&&!e(b)||e(g)?(t(),m(V,{key:2,class:"z-10 flex"},{title:i(()=>[D(P(e(y)?"Unlink":"Link"),1)]),default:i(()=>[d("button",{tabindex:"-1",class:R(["nc-list-item-link-unlink-btn p-1.5 flex rounded-lg transition-all",{"bg-gray-200 text-gray-800 hover:bg-red-100 hover:text-red-500":e(y),"bg-green-[#D4F7E0] text-[#17803D] hover:bg-green-200":!e(y)}]),onClick:x[1]||(x[1]=a=>r.$emit("linkOrUnlink"))},[e(L)?(t(),l("div",Fe,[c(M,{class:"flex-none w-4 h-4 !text-brand-500 animate-spin"})])):(t(),m(T,{key:1,icon:e(y)?"minus":"plus",class:"flex-none w-4 h-4 !font-extrabold"},null,8,["icon"]))],2)]),_:1})):_("",!0)])]),_:1},8,["class"])])}}}),Me=ce(je,[["__scopeId","data-v-e3cf7fcd"]]);export{Me as default};
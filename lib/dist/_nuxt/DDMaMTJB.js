const __vite__fileDeps=["./C78FnqoT.js","./BLdk6lRf.js","./entry.B8GgT5QA.css","./DMNHEWRT.js","./MenuItem.C7h59s4s.css","./BWqs1SG-.js","./CsKtxyeB.js","./Menu.CQ8GNWeI.css","./B2VnlbYE.js","./DehHWxa3.js","./CSxPNiqH.js","./CKK7YKGi.js","./DV47GYLy.js","./D1rFOljU.js","./B0-3_x1m.js","./DeleteModal.SEMJ_gSK.css","./BtPl72f0.js","./DTl_5Njz.js","./C9I3jrHo.js","./C0Si9_oy.js","./BD_L_KCX.js","./9nfE2yqV.js","./7-nPB5Qg.js","./KocR1J4Z.js","./B-IzG84X.js","./CwqgNcWF.js","./Menu.D_rr_iPw.css","./76B7kuMs.js","./D4vTL36A.js","./BwgB2nHU.js","./JimKVLH8.js","./DWFLnnq8.js","./BQQOEPN4.js","./C-Z2v8Hi.js","./BTh9o-aK.js","./ETGzLqdt.js","./D13eUeY3.js","./BaHXy0hV.js","./DD6KJAAC.js","./JCToPTxN.js","./BLwY008C.js","./CBNgcPSC.js","./wBAlULwF.js","./BYLX6PMP.js","./DJNpGLJk.js","./DRbVe3tA.js","./SelectOptions.JaHDUZhn.css","./BFWmkR58.js","./Cajlse94.js","./DZeneEWs.js","./BrF0EXdL.js","./DTv03lbO.js","./KHtB3uuq.js","./DCNkOWj0.js","./CeUmvK4L.js","./yAvBJhn8.js","./Switch.CEh6YzqD.css","./C9Sjn86N.js","./B2oTMMt7.js","./CAR_5qDD.js","./Df7iec88.js","./iRN6wbuV.js","./Select.Ct6CicDJ.css","./BpBaP95G.js","./ZMTPBx1J.js","./EditOrAddProvider.CRN0tnY2.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as X,N as ee,ab as F,bL as y,r as d,ht as te,az as oe,d1 as le,gs as se,gx as ne,hI as ae,L as ie,av as re,fH as de,g as U,cU as ue,d4 as ce,hJ as j,hK as pe,hL as me,o as i,c as f,a as C,P as e,al as N,U as x,w as h,d as O,t as E,b as P,T as v,S as p,Q as R,Y as b,Z as S,a5 as z,ap as fe,$ as ve,af as _e,_ as ye}from"./BLdk6lRf.js";import xe from"./CKK7YKGi.js";import"./DV47GYLy.js";const he=S(()=>z(()=>import("./C78FnqoT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url).then(m=>m.default||m)),we=S(()=>z(()=>import("./76B7kuMs.js"),__vite__mapDeps([27,28,1,2,14,15,5,29,30,31,32,20,33,34,35,36,37,38,39,40,41,42,43,44,45,46,25,47,48,49,50,51,52,53,9,10,11,12,23,17,54,55,56,57,58,59,19,60,61,62,63,64,65]),import.meta.url).then(m=>m.default||m)),be=["data-test-id"],ke={key:2,class:"text-red-500"},Ie={key:0,class:"flex-1"},ge={key:1},Ce={class:"nc-edit-or-add-provider-wrapper"},Ee=X({__name:"Cell",props:{column:{},required:{type:[Boolean,Number]},hideMenu:{type:Boolean},hideIcon:{type:Boolean},isHiddenCol:{type:Boolean}},setup(m){const k=m,{isMobileMode:_}=ee(),I=F(k,"hideMenu"),H=y(te,d(!1)),u=y(oe,d(!1)),D=y(le,d(!1)),T=y(se,d(!1)),s=y(ne,d(!1)),r=y(ae,d(!1)),a=d(!1),o=F(k,"column"),{isUIAllowed:c,isMetaReadOnly:V}=ie();re(de,o);const n=d(!1),w=d(null),G=U(()=>{var t,l;return o.value.uidt===ue.LongText&&((l=ce((t=o==null?void 0:o.value)==null?void 0:t.meta))!=null&&l.richMode)?j.RichText:o.value.uidt?j[o.value.uidt]:""}),$=async t=>{w.value=t,n.value=!0},L=()=>{w.value=null,n.value=!1},q=U(()=>{var t,l;return!(V.value&&!pe.includes((t=o.value)==null?void 0:t.uidt)&&!me.includes((l=o.value)==null?void 0:l.uidt))}),M=t=>{D.value||s.value&&(t==null?void 0:t.type)==="dblclick"||r.value||!u.value&&c("fieldEdit")&&!_.value&&q.value&&(n.value=!0)},K=t=>{D.value||u.value||!c("fieldEdit")&&!_.value||(t.preventDefault(),t.stopPropagation(),a.value=!a.value)},J=t=>{if(!(_.value||!c("fieldEdit"))){if(a.value)t.preventDefault(),t.stopPropagation();else if(s.value&&!n.value&&!r.value){a.value=!0;return}a.value=!1}};return(t,l)=>{const A=xe,B=fe,Q=ve,Y=he,Z=we,W=_e;return i(),f("div",{class:v(["flex items-center w-full text-xs text-gray-500 font-weight-medium group",{"h-full":e(o),"flex-col !items-start justify-center pt-0.5":e(s)&&!e(_)&&!e(r),"nc-cell-expanded-form-header cursor-pointer hover:bg-gray-100":e(s)&&!e(_)&&e(c)("fieldEdit")&&!e(r),"bg-gray-100":e(s)&&!e(r)?e(n)||e(a):!1}]),onDblclick:M,onContextmenu:b(K,["right"]),onClick:J},[C("div",{class:v(["nc-cell-name-wrapper flex-1 flex items-center",{"max-w-[calc(100%_-_23px)]":!e(s),"max-w-full":e(s)&&!e(r)}])},[e(o)&&!k.hideIcon?(i(),f(N,{key:0},[e(H)?(i(),x(B,{key:0,class:"flex items-center",placement:"bottom",disabled:e(s)&&!e(r)?e(n)||e(a):!1},{title:h(()=>[O(E(e(G)),1)]),default:h(()=>[P(A,{class:v({"self-start":e(u)||e(T)})},null,8,["class"])]),_:1},8,["disabled"])):(i(),x(A,{key:1,class:v({"self-start":e(u)||e(T)})},null,8,["class"]))],64)):p("",!0),e(o)?(i(),x(B,{key:1,class:v([{"cursor-pointer":!e(u)&&e(c)("fieldEdit")&&!e(I),"cursor-default":e(u)||!e(c)("fieldEdit")||e(I),truncate:!e(u)},"name pl-1 max-w-full"]),placement:"bottom","show-on-truncate-only":"",disabled:e(s)&&!e(r)?e(n)||e(a):!1},{title:h(()=>[O(E(e(o).title),1)]),default:h(()=>[C("span",{"data-test-id":e(o).title,class:v({"select-none":e(s)&&!e(r)})},E(e(o).title),11,be)]),_:1},8,["class","disabled"])):p("",!0),e(o).rqd&&!e(o).cdf||t.required?(i(),f("span",ke," *")):p("",!0),e(s)&&!e(r)&&!e(_)&&e(c)("fieldEdit")?(i(),x(Q,{key:3,icon:"arrowDown",class:v(["flex-none cursor-pointer ml-1 group-hover:visible w-4 h-4",{visible:e(n)||e(a),invisible:!(e(n)||e(a))}])},null,8,["class"])):p("",!0)],2),e(I)?p("",!0):(i(),f(N,{key:0},[e(s)?p("",!0):(i(),f("div",Ie)),!e(u)&&e(c)("fieldEdit")?(i(),x(Y,{key:1,"is-open":e(a),"onUpdate:isOpen":l[0]||(l[0]=g=>R(a)?a.value=g:null),"is-hidden-col":t.isHiddenCol,onAddColumn:$,onEdit:M},null,8,["is-open","is-hidden-col"])):p("",!0)],64)),P(W,{visible:e(n),"onUpdate:visible":l[4]||(l[4]=g=>R(n)?n.value=g:null),class:"h-full",trigger:["click"],placement:e(s)&&!e(r)?"bottomLeft":"bottomRight","overlay-class-name":`nc-dropdown-edit-column ${e(n)?"active":""}`},{overlay:h(()=>[C("div",Ce,[e(n)?(i(),x(Z,{key:0,column:e(w)?null:e(o),"column-position":e(w),class:"w-full",onSubmit:L,onCancel:L,onClick:l[2]||(l[2]=b(()=>{},["stop"])),onKeydown:l[3]||(l[3]=b(()=>{},["stop"]))},null,8,["column","column-position"])):p("",!0)])]),default:h(()=>[e(s)&&!e(r)?(i(),f("div",{key:0,class:"h-[1px]",onDblclick:l[1]||(l[1]=b(()=>{},["stop"]))}," ",32)):(i(),f("div",ge))]),_:1},8,["visible","placement","overlay-class-name"])],34)}}}),Me=ye(Ee,[["__scopeId","data-v-f293fc51"]]);export{Me as default};
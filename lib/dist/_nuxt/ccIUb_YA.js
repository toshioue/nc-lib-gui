const __vite__fileDeps=["./BJx2la_2.js","./B2hUoZAs.js","./entry.B8GgT5QA.css","./7Oy5igNS.js","./DMylWvyY.js","./Coz9Ftud.js","./C9qKCFvP.js","./Checkbox.M_COpns0.css","./e4fIiYA_.js","./CZHF7Hd-.js","./BWYzyVlv.js","./CwHJfKcC.js","./BQQOEPN4.js","./BGKYJ52S.js","./i4toF4kp.js","./kd0F6MQ0.js","./UgF4jJcx.js","./3y6ApKFt.js","./DodZPEOQ.js","./By21eAqY.js","./cvW-uYte.js","./1orNHd0L.js","./fKrvpb1C.js","./CgLwnsk-.js","./7hPDkg8v.js","./GHAU6jsY.js","./Di2YdQXX.js","./KChPo3uB.js","./R1pHeCcp.js","./BOBr5Pny.js","./CaxUP45y.js","./BaseLogo.BjMH04Ym.css","./E1OALpk7.js","./C0IYadH8.js","./CSOC84UF.js","./DFYMF386.js","./DeleteModal.SEMJ_gSK.css","./BKCMEtlO.js","./LH0AgEEv.js","./3I_Awkws.js","./UserIcon.JKLzA6N5.css","./D1Sy-L_y.js","./lNF0bL0F.js","./Badge.D0-UrqG9.css","./CU9MUPJ_.js","./BPB61pKE.js","./BLNfZKv8.js","./InviteDlg.FUosLAtV.css","./CCqY2qqR.js","./BjuQQzle.js","./Dk9gIyw5.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as tt,a as Ae,b as st,c as ot}from"./UgF4jJcx.js";import{f as te,ab as oe,ac as at,o as r,U as V,w as T,a as t,t as c,b as i,P as e,Q as Y,$ as _e,r as I,A as ne,_ as pe,at as F,cH as he,au as we,cB as ye,L as xe,g as K,O as Ue,c as v,S as N,R as De,T as W,al as le,am as $e,d as ee,ce as lt,aG as ze,p as Be,e as Le,ae as nt,fQ as rt,aJ as it,fR as ct,bL as Ve,fS as Ne,fT as Ee,i as dt,fU as be,an as ae,ao as ge,aj as ut,H as X,V as Pe,W as Me,X as ce,fV as Z,fW as de,di as _t,a2 as pt,ak as mt,ap as Ge,Z as ke,a5 as Ie,as as vt,u as ft,N as Fe,fX as bt,d4 as gt,aH as ht,dH as wt,dI as yt,fY as xt,cW as $t}from"./B2hUoZAs.js";import{_ as kt}from"./E1OALpk7.js";import{_ as It}from"./CSOC84UF.js";import{_ as jt}from"./DFYMF386.js";import{u as ue}from"./BKCMEtlO.js";import{_ as Ct}from"./LH0AgEEv.js";import{_ as St}from"./7Oy5igNS.js";import{_ as Tt}from"./3I_Awkws.js";import{_ as He}from"./D1Sy-L_y.js";import{S as Rt,_ as Ot}from"./CaxUP45y.js";import{u as Pt,_ as Mt}from"./CU9MUPJ_.js";import{p as At,t as Ut}from"./BPB61pKE.js";import"./BWYzyVlv.js";import{I as Dt}from"./CwHJfKcC.js";import{u as zt}from"./BLNfZKv8.js";import{u as Bt}from"./3y6ApKFt.js";const Lt={class:"flex flex-col px-8 pt-6 pb-9"},Vt={class:"text-lg font-medium mb-6"},Nt={class:"row mb-10"},Et={class:"label"},Gt={class:"label"},Ft={class:"row"},Ht={class:"label"},Wt={class:"label"},Qt=te({__name:"ImportModal",props:{visible:{type:Boolean},source:{}},emits:["update:visible"],setup(p,{emit:f}){const y=p,j=f,x=oe(y,"source"),k=at(y,"visible",j),{$e:U}=ne();function R(b,o){if(!b||!o)return;U("a:actions:import-airtable");const s=I(!0),{close:n}=ue(tt,{modelValue:s,baseId:b,sourceId:o,"onUpdate:modelValue":u});function u(){s.value=!1,n(1e3)}}function O(b){if(!x.value.id||!x.value.base_id)return;U(`a:actions:import-${b}`);const o=I(!0),{close:s}=ue(Ae,{modelValue:o,importType:b,baseId:x.value.base_id,sourceId:x.value.id,"onUpdate:modelValue":n});function n(){o.value=!1,s(1e3)}}const C=b=>{k.value=!1,b==="airtable"?R(x.value.base_id,x.value.id):O(b)};return(b,o)=>{const s=_e,n=jt;return r(),V(n,{visible:e(k),"onUpdate:visible":o[4]||(o[4]=u=>Y(k)?k.value=u:null),width:"35rem"},{default:T(()=>[t("div",Lt,[t("div",Vt,c(b.$t("general.import")),1),t("div",Nt,[t("div",{class:"nc-base-view-import-sub-btn",onClick:o[0]||(o[0]=u=>C("airtable"))},[i(s,{icon:"airtable"}),t("div",Et,c(b.$t("labels.airtable")),1)]),t("div",{class:"nc-base-view-import-sub-btn",onClick:o[1]||(o[1]=u=>C("csv"))},[i(s,{icon:"csv"}),t("div",Gt,c(b.$t("labels.csv")),1)])]),t("div",Ft,[t("div",{class:"nc-base-view-import-sub-btn",onClick:o[2]||(o[2]=u=>C("excel"))},[i(s,{icon:"excelColored"}),t("div",Ht,c(b.$t("labels.excel")),1)]),t("div",{class:"nc-base-view-import-sub-btn",onClick:o[3]||(o[3]=u=>C("json"))},[i(s,{icon:"code"}),t("div",Wt,c(b.$t("labels.json")),1)])])])]),_:1},8,["visible"])}}}),Kt=pe(Qt,[["__scopeId","data-v-aa512e08"]]),Xt=""+new URL("table.BosIpfXe.png",import.meta.url).href,qt=p=>(Be("data-v-f4adbba9"),p=p(),Le(),p),Jt={class:"nc-all-tables-view"},Zt={class:"label"},Yt={class:"label"},es={key:0,class:"flex items-center justify-center text-center",style:{height:"calc(100vh - var(--topbar-height) - 18rem)"}},ts={class:"mt-2"},ss={class:"flex flex-row w-full text-gray-400 border-b-1 border-gray-50 py-3 px-2.5"},os={class:"w-2/5"},as={class:"w-1/5"},ls={class:"w-1/5"},ns={class:"nc-base-view-all-table-list nc-scrollbar-md",style:{height:"calc(100vh - var(--topbar-height) - 18rem)"}},rs=["onClick"],is={class:"flex flex-row w-2/5 items-center gap-x-2","data-testid":"proj-view-list__item-title"},cs={class:"min-w-5 flex items-center justify-center"},ds={class:"w-1/5 text-gray-600","data-testid":"proj-view-list__item-type"},us={key:0,class:"ml-0.75"},_s={key:1,class:"capitalize flex flex-row items-center gap-x-0.5"},ps={class:"w-1/5 text-gray-400 ml-0.25","data-testid":"proj-view-list__item-created-at"},ms={key:2,class:"py-3 flex items-center gap-6 <lg:flex-col"},vs=qt(()=>t("img",{src:Xt,class:"!w-[23rem] flex-none"},null,-1)),fs={class:"text-center lg:text-left"},bs={class:"text-2xl text-gray-800 font-bold"},gs={class:"text-sm text-gray-700 pt-6"},hs=te({__name:"AllTables",setup(p){const{activeTables:f}=F(he()),{openTable:y}=he(),{openedProject:j}=F(we()),{base:x}=F(ye()),{isUIAllowed:k}=xe(),{$e:U}=ne(),R=I(!1),O=K(()=>{var o,s;return(s=(o=j.value)==null?void 0:o.sources)==null?void 0:s[0]}),C=K(()=>{var s,n;const o=new Map;return(n=(s=j.value)==null?void 0:s.sources)==null||n.forEach(u=>{o.set(u.id,u)}),o});function b(o){var _,M;U("c:table:create:navdraw");const s=I(!0);let n=(_=j.value.sources)==null?void 0:_[0].id;if(!n||!((M=j.value)!=null&&M.id))return;const{close:u}=ue(st,{modelValue:s,sourceId:n,baseId:j.value.id,onCreate:P,"onUpdate:modelValue":()=>P()});function P(B){s.value=!1,B&&(setTimeout(()=>{const m=document.querySelector(`[data-table-id="${B.id}"]`);m&&(m==null||m.scrollIntoView({behavior:"smooth",block:"nearest"}))},1e3),u(1e3))}}return(o,s)=>{var m,L,E,l,g,S;const n=_e,u=ze,P=It,_=ot,M=Kt,B=Ue("e");return r(),v("div",Jt,[t("div",{class:W(["flex flex-row gap-x-6 pb-3 pt-6",{"pointer-events-none":(m=e(x))==null?void 0:m.isLoading}])},[e(k)("tableCreate",{source:(E=(L=e(x))==null?void 0:L.sources)==null?void 0:E[0]})?(r(),v("div",{key:0,role:"button",class:"nc-base-view-all-table-btn","data-testid":"proj-view-btn__add-new-table",onClick:s[0]||(s[0]=$=>b())},[i(n,{icon:"addOutlineBox"}),t("div",Zt,c(o.$t("general.new"))+" "+c(o.$t("objects.table")),1)])):N("",!0),e(k)("tableCreate",{source:(g=(l=e(x))==null?void 0:l.sources)==null?void 0:g[0]})?De((r(),v("div",{key:1,role:"button",class:"nc-base-view-all-table-btn","data-testid":"proj-view-btn__import-data",onClick:s[1]||(s[1]=$=>R.value=!0)},[i(n,{icon:"download"}),t("div",Yt,c(o.$t("activity.import"))+" "+c(o.$t("general.data")),1)])),[[B,["c:table:import"]]]):N("",!0)],2),(S=e(x))!=null&&S.isLoading?(r(),v("div",es,[t("div",null,[i(u,{size:"xlarge"}),t("div",ts,c(o.$t("general.loading")),1)])])):e(f).length?(r(),v(le,{key:1},[t("div",ss,[t("div",os,c(o.$t("objects.table")),1),t("div",as,c(o.$t("general.source")),1),t("div",ls,c(o.$t("labels.createdOn")),1)]),t("div",ns,[(r(!0),v(le,null,$e([...e(f)].sort(($,A)=>$.source_id.localeCompare(A.source_id)*20),$=>{var A,H;return r(),v("div",{key:$.id,class:"py-4 flex flex-row w-full cursor-pointer hover:bg-gray-100 border-b-1 border-gray-100 px-2.25","data-testid":"proj-view-list__item",onClick:re=>e(y)($)},[t("div",is,[t("div",cs,[i(P,{meta:$,class:"text-gray-500"},null,8,["meta"])]),ee(" "+c($==null?void 0:$.title),1)]),t("div",ds,[$.source_id===((A=e(O))==null?void 0:A.id)?(r(),v("div",us,"-")):(r(),v("div",_s,[i(_,{class:"w-4 mr-1"}),ee(" "+c((H=e(C).get($.source_id))==null?void 0:H.alias),1)]))]),t("div",ps,c(e(lt)($==null?void 0:$.created_at).fromNow()),1)],8,rs)}),128))])],64)):(r(),v("div",ms,[vs,t("div",fs,[t("div",bs,c(o.$t("placeholder.createTable")),1),t("div",gs,c(o.$t("placeholder.createTableLabel")),1)])])),e(O)?(r(),V(M,{key:3,visible:e(R),"onUpdate:visible":s[2]||(s[2]=$=>Y(R)?R.value=$:null),source:e(O)},null,8,["visible","source"])):N("",!0)])}}}),ws=pe(hs,[["__scopeId","data-v-f4adbba9"]]),ys={class:"flex items-center justify-between"},xs={key:0,class:"text-gray-500 text-xs"},$s=te({__name:"Selector",props:{border:{type:Boolean,default:!0},role:{},roles:{},description:{type:Boolean,default:!0},inherit:{},onRoleChange:{},size:{default:"sm"}},setup(p){const f=p,y=oe(f,"role"),j=oe(f,"inherit"),x=oe(f,"description"),k=I(!1),U=I(null),R=oe(f,"size");nt(U,()=>k.value=!1);function O(C){f.onRoleChange(C),k.value=!1}return(C,b)=>{const o=He,s=_e,n=Rt,u=Ot,P=Ue("e");return r(),v("div",{ref_key:"dropdownRef",ref:U,size:"lg",class:"nc-roles-selector relative",onClick:b[0]||(b[0]=_=>k.value=!e(k))},[i(o,{border:!1,inherit:e(j)===C.role,role:e(y),size:e(R),clickable:"","data-testid":"roles"},null,8,["inherit","role","size"]),i(u,{value:e(y),open:e(k),"dropdown-match-select-width":!1,"dropdown-class-name":"!rounded-lg !h-fit max-w-[350px] nc-role-selector-dropdown",class:"py-1 !absolute top-0 left-0 w-full h-full z-10 text-xs opacity-0",onChange:O},{default:T(()=>[(r(!0),v(le,null,$e(f.roles,_=>De((r(),V(n,{key:_,value:_},{default:T(()=>[t("div",{class:W([{"w-full":e(x),"w-[200px]":!e(x)},"flex flex-col nc-role-select-dropdown gap-1"])},[t("div",ys,[i(o,{border:!1,class:W(`nc-role-select-${_}`),inherit:e(j)===_,role:_},null,8,["class","inherit","role"]),_===e(y)?(r(),V(s,{key:0,icon:"check",class:"text-primary"})):N("",!0)]),e(x)?(r(),v("div",xs,c(e(rt)[_]),1)):N("",!0)],2)]),_:2},1032,["value"])),[[P,["c:workspace:settings:user-role-change"]]])),128))]),_:1},8,["value","open"])],512)}}}),ks=it("orgStore",()=>{const p=I(),f=I(null);return{org:p,orgId:f,updateOrg:async x=>{},loadOrg:async()=>{}}}),Is=ke(()=>Ie(()=>import("./BJx2la_2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]),import.meta.url).then(p=>p.default||p)),js=ke(()=>Ie(()=>import("./CCqY2qqR.js"),__vite__mapDeps([48,1,2]),import.meta.url).then(p=>p.default||p)),Cs=p=>(Be("data-v-5ffba854"),p=p(),Le(),p),Ss={key:0,class:"font-bold w-full !mb-5 text-2xl","data-rec":"true"},Ts={class:"flex items-center gap-3"},Rs=Cs(()=>t("span",{class:"text-2xl"}," / ",-1)),Os={class:"text-base"},Ps={key:1,class:"nc-collaborators-list items-center justify-center"},Ms={class:"w-full flex flex-row justify-between items-center max-w-350 mt-6.5 mb-2 pr-0.25"},As={class:"flex items-center gap-1"},Us={key:0,class:"nc-collaborators-list items-center justify-center"},Ds={key:1,class:"nc-collaborators-list w-full h-full flex flex-col items-center justify-center"},zs={key:2,class:"nc-collaborators-list mt-6 h-full"},Bs={class:"flex flex-col overflow-hidden max-w-350 max-h-[calc(100%-8rem)]"},Ls={class:"flex flex-row bg-gray-50 min-h-12 items-center border-b-1"},Vs={class:"py-3 px-6"},Ns={class:"text-gray-700 date-joined-grid"},Es={class:"flex flex-col nc-scrollbar-md"},Gs={class:"py-3 px-6"},Fs={class:"flex gap-3 items-center users-email-grid"},Hs={class:"flex flex-col"},Ws={class:"flex gap-3"},Qs={class:"text-gray-800 capitalize font-semibold"},Ks={class:"text-xs text-gray-600"},Xs={class:"user-access-grid"},qs={class:"date-joined-grid"},Js=te({__name:"AccessSettings",props:{baseId:{}},setup(p){const f=p,y=we(),{getBaseUsers:j,createProjectUser:x,updateProjectUser:k,removeProjectUser:U}=y,{activeProjectId:R,bases:O,basesUser:C}=F(y),{orgRoles:b,baseRoles:o,loadRoles:s}=xe(),{sorts:n,loadSorts:u,handleGetSortedData:P,toggleSort:_}=Pt("Project"),M=K(()=>{var a;return(a=b.value)==null?void 0:a[ct.SUPER_ADMIN]}),B=ks(),{orgId:m}=F(B),L=Ve(Ne,I(!1)),{$api:E}=ne(),l=Ee(async()=>{let a;return f.baseId?(await s(f.baseId),a=O.value.get(f.baseId),a||(a=await E.base.read(f.baseId))):a=O.value.get(R.value),a}),g=I(!1),S=I([]),$=I(0),A=I(""),H=I(!1),re=I(!1),Q=I([]),q=K(()=>S.value.filter(a=>{var h,d;return((d=(h=a.display_name)==null?void 0:h.toLowerCase())==null?void 0:d.includes(A.value.toLowerCase()))||a.email.toLowerCase().includes(A.value.toLowerCase())})),me=K(()=>P(q.value,n.value)),J=async()=>{try{if(!l.value)return;const{users:a,totalRows:h}=await j({baseId:l.value.id,...A.value?{searchText:A.value}:{},force:!0});$.value=h,S.value=[...a.filter(d=>!(d!=null&&d.deleted)).map(d=>({...d,base_roles:d.roles,roles:d.roles??(d.workspace_roles?Z[d.workspace_roles]??de.NO_ACCESS:de.NO_ACCESS)}))]}catch(a){ae.error(await ge(a))}},ie=async(a,h)=>{const d=S.value.find(z=>z.id===a.id);try{!h||h===de.NO_ACCESS&&!ce||d.workspace_roles&&Z[d.workspace_roles]===h&&ce?(await U(l.value.id,d),d.workspace_roles&&Z[d.workspace_roles]===h&&ce?d.roles=Z[d.workspace_roles]:d.roles=de.NO_ACCESS,d.base_roles=null):d.base_roles?(d.roles=h,await k(l.value.id,d)):(d.roles=h,d.base_roles=h,await x(l.value.id,d));let z=C.value.get(l.value.id);z!=null&&z.length&&(z=z.map(se=>(se.id===d.id&&(se.roles=d.roles),se)),C.value.set(l.value.id,z))}catch(z){ae.error(await ge(z)),J()}};dt(async()=>{H.value=!0;try{await J();const a=be.findIndex(h=>o.value&&Object.keys(o.value).includes(h));M.value?Q.value=be.slice(1):a!==-1&&(Q.value=be.slice(a+1)),u()}catch(a){ae.error(await ge(a))}finally{H.value=!1}});const G=ut({}),D=a=>{q.value.forEach(h=>{G[h.id]=a})},ve=K({get:()=>Object.values(G).every(a=>a)&&Object.keys(G).length>0&&Object.values(G).length===q.value.length,set:a=>{D(a)}});return X(g,()=>{g.value||J()}),X(l,()=>{J()}),(a,h)=>{var Te,Re,Oe;const d=Ct,z=_t,se=Is,je=ze,We=Mt,Qe=Dt,Ke=pt,Xe=mt,Ce=St,Se=js,qe=Tt,Je=$s,Ze=He,Ye=Ge;return r(),v("div",{class:W([{"px-6 ":e(L)},"nc-collaborator-table-container mt-4 nc-access-settings-view h-[calc(100vh-8rem)]"])},[e(L)?(r(),v("div",Ss,[t("div",Ts,[i(d,{href:`/admin/${e(m)}/bases`,class:"!hover:text-black !hover:underline-gray-600 flex items-center !text-black !underline-transparent ml-0.75 max-w-1/4"},{default:T(()=>[(r(),V(Pe(("iconMap"in a?a.iconMap:e(Me)).arrowLeft),{class:"text-3xl"})),ee(" "+c(a.$t("objects.projects")),1)]),_:1},8,["href"]),Rs,i(z,{readonly:""}),t("span",Os,c((Te=e(l))==null?void 0:Te.title),1)])])):N("",!0),i(se,{"model-value":e(g),"onUpdate:modelValue":h[0]||(h[0]=w=>Y(g)?g.value=w:null),"base-id":(Re=e(l))==null?void 0:Re.id,type:"base"},null,8,["model-value","base-id"]),e(H)?(r(),v("div",Ps,[i(je,{size:"xlarge"})])):(r(),v(le,{key:2},[t("div",Ms,[i(Qe,{value:e(A),"onUpdate:value":h[1]||(h[1]=w=>Y(A)?A.value=w:null),placeholder:a.$t("title.searchMembers"),class:"!max-w-90 !rounded-md mr-4"},{prefix:T(()=>[i(We,{class:"!h-3.5 text-gray-500"})]),_:1},8,["value","placeholder"]),i(Ke,{size:"small",onClick:h[2]||(h[2]=w=>g.value=!0)},{default:T(()=>[t("div",As,[(r(),V(Pe(("iconMap"in a?a.iconMap:e(Me)).plus),{class:"w-4 h-4"})),ee(" "+c(a.$t("activity.addMembers")),1)])]),_:1})]),e(re)?(r(),v("div",Us,[i(je,{size:"xlarge"})])):(Oe=e(q))!=null&&Oe.length?(r(),v("div",zs,[t("div",Bs,[t("div",Ls,[t("div",Vs,[i(Ce,{checked:e(ve),"onUpdate:checked":h[3]||(h[3]=w=>Y(ve)?ve.value=w:null)},null,8,["checked"])]),i(Se,{class:"users-email-grid",header:a.$t("objects.users"),"active-sort":e(n),field:"email","toggle-sort":e(_)},null,8,["header","active-sort","toggle-sort"]),i(Se,{class:"user-access-grid",header:a.$t("general.role"),"active-sort":e(n),field:"roles","toggle-sort":e(_)},null,8,["header","active-sort","toggle-sort"]),t("div",Ns,c(a.$t("title.dateJoined")),1)]),t("div",Es,[(r(!0),v(le,null,$e(e(me),(w,et)=>(r(),v("div",{key:et,class:W([{"bg-[#F0F3FF]":e(G)[w.id]},"user-row flex hover:bg-[#F0F3FF] flex-row border-b-1 py-1 min-h-14 items-center"])},[t("div",Gs,[i(Ce,{checked:e(G)[w.id],"onUpdate:checked":fe=>e(G)[w.id]=fe},null,8,["checked","onUpdate:checked"])]),t("div",Fs,[i(qe,{size:"base",email:w.email},null,8,["email"]),t("div",Hs,[t("div",Ws,[t("span",Qs,c(w.display_name||w.email.slice(0,w.email.indexOf("@"))),1)]),t("span",Ks,c(w.email),1)])]),t("div",Xs,[e(Q).includes(w.roles)?(r(),V(Je,{key:0,role:w.roles,roles:e(Q),inherit:("isEeUI"in a?a.isEeUI:e(ce))&&w.workspace_roles&&e(Z)[w.workspace_roles]?e(Z)[w.workspace_roles]:null,description:!1,"on-role-change":fe=>ie(w,fe)},null,8,["role","roles","inherit","on-role-change"])):(r(),V(Ze,{key:1,border:!1,role:w.roles},null,8,["role"]))]),t("div",qs,[i(Ye,{class:"max-w-full"},{title:T(()=>[ee(c(("parseStringDateTime"in a?a.parseStringDateTime:e(At))(w.created_at)),1)]),default:T(()=>[t("span",null,c(("timeAgo"in a?a.timeAgo:e(Ut))(w.created_at)),1)]),_:2},1024)])],2))),128))])])])):(r(),v("div",Ds,[i(Xe,{description:a.$t("title.noMembersFound")},null,8,["description"])]))],64))],2)}}}),Zs=pe(Js,[["__scopeId","data-v-5ffba854"]]),Ys={class:"nc-icon",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},eo=t("path",{d:"M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z",stroke:"currentColor","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),to=t("path",{d:"M6 14V6",stroke:"currentColor","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),so=t("path",{d:"M2 6H14",stroke:"currentColor","stroke-width":"1.33333","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),oo=[eo,to,so];function ao(p,f){return r(),v("svg",Ys,[...oo])}const lo={name:"nc-icons-layout",render:ao},no=ke(()=>Ie(()=>import("./BjuQQzle.js"),__vite__mapDeps([49,1,2,50]),import.meta.url).then(p=>p.default||p)),ro={class:"h-full nc-base-view"},io={class:"flex flex-row items-center gap-x-3"},co={class:"flex flex-row items-center h-full gap-x-2.5"},uo={class:"truncate"},_o={class:"flex mx-12 my-8 nc-base-view-tab",style:{height:"calc(100% - var(--topbar-height))"}},po={class:"tab-title","data-testid":"proj-view-tab__all-tables"},mo={class:"tab-title","data-testid":"proj-view-tab__access-settings"},vo=te({__name:"View",props:{baseId:{}},setup(p){const f=p,y=we(),{openedProject:j,activeProjectId:x,basesUser:k,bases:U}=F(y),{activeTables:R,activeTable:O}=F(he()),{activeWorkspace:C}=F(vt()),{navigateToProjectPage:b}=ye(),o=Ve(Ne,I(!1)),n=ft().currentRoute,{$e:u,$api:P}=ne(),_=Ee(async()=>{let l;return f.baseId?(l=U.value.get(f.baseId),l||(l=await P.base.read(f.baseId))):l=j.value,l}),{isUIAllowed:M,baseRoles:B}=xe(),{projectPageTab:m}=F(zt()),{isMobileMode:L}=Fe(),E=K(()=>{var l,g;return x.value?(g=(l=k.value.get(x.value))==null?void 0:l.filter(S=>!(S!=null&&S.deleted)))==null?void 0:g.length:0});return X(()=>{var l;return(l=n.value.query)==null?void 0:l.page},(l,g)=>{if(l&&l!==g){l==="collaborator"?m.value="collaborator":l==="data-source"?m.value="data-source":m.value="allTable";return}o.value?m.value="collaborator":m.value="allTable"},{immediate:!0}),X(m,()=>{u(`a:project:view:tab-change:${m.value}`),m.value&&b({page:m.value})}),X(()=>{var l,g;return[(l=_.value)==null?void 0:l.id,(g=_.value)==null?void 0:g.title]},()=>{var l,g,S;(l=O.value)!=null&&l.title||bt(`${((g=_.value)==null?void 0:g.title)??((S=C.value)==null?void 0:S.title)??"NocoDB"}`)},{immediate:!0}),(l,g)=>{var ie,G;const S=kt,$=ht,A=Ge,H=no,re=ws,Q=wt,q=_e,me=Zs,J=yt;return r(),v("div",ro,[e(o)?N("",!0):(r(),v("div",{key:0,class:W(["flex flex-row pl-2 pr-2 gap-1 border-b-1 border-gray-200 justify-between w-full",{"nc-table-toolbar-mobile":e(L),"h-[var(--topbar-height)]":!e(L)}])},[t("div",io,[i(S),t("div",co,[i($,{color:("parseProp"in l?l.parseProp:e(gt))((ie=e(_))==null?void 0:ie.meta).iconColor,type:(G=e(_))==null?void 0:G.type},null,8,["color","type"]),i(A,{class:"flex font-medium text-sm capitalize truncate max-w-150","show-on-truncate-only":""},{title:T(()=>{var D;return[ee(c((D=e(_))==null?void 0:D.title),1)]}),default:T(()=>{var D;return[t("span",uo,c((D=e(_))==null?void 0:D.title),1)]}),_:1})])]),i(H)],2)),t("div",_o,[i(J,{activeKey:e(m),"onUpdate:activeKey":g[0]||(g[0]=D=>Y(m)?m.value=D:null),class:"w-full"},{default:T(()=>[e(o)?N("",!0):(r(),V(Q,{key:"allTable"},{tab:T(()=>[t("div",po,[i(e(lo)),t("div",null,c(l.$t("labels.allTables")),1),t("div",{class:W(["tab-info",{"bg-primary-selected":e(m)==="allTable","bg-gray-50":e(m)!=="allTable"}])},c(e(R).length),3)])]),default:T(()=>[i(re)]),_:1})),e(M)("newUser",{roles:e(B)})?(r(),V(Q,{key:"collaborator"},{tab:T(()=>[t("div",mo,[i(q,{icon:"users",class:"!h-3.5 !w-3.5"}),t("div",null,c(l.$t("labels.members")),1),e(E)?(r(),v("div",{key:0,class:W(["tab-info",{"bg-primary-selected":e(m)==="collaborator","bg-gray-50":e(m)!=="collaborator"}])},c(e(E)),3)):N("",!0)])]),default:T(()=>{var D;return[i(me,{"base-id":(D=e(_))==null?void 0:D.id},null,8,["base-id"])]}),_:1})):N("",!0)]),_:1},8,["activeKey"])])])}}}),fo=pe(vo,[["__scopeId","data-v-67010210"]]),bo=te({__name:"index",setup(p){const f=ye(),{base:y,sources:j}=F(f),{isMobileMode:x}=Fe(),{files:k,reset:U}=xt(),{$e:R}=ne(),O=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel.sheet.macroenabled.12","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.spreadsheet-template","text/csv","application/json","text/json"];X(k,s=>s&&C(s),{flush:"post"});function C(s){if(!s)return;const n=Array.from(s).map(u=>u);b(n)}function b(s){if(!s)return;if(s.length>1)return ae.error({content:"Only one file can be imported at a time.",duration:2});let n=null;const u=O.some(P=>{const _=s[0].type===P;if(_){const M=s[0].name.split(".").pop();n=M==="csv"||M==="json"?M:"excel"}return _});if(!u)return ae.error({content:"Invalid file type",duration:2});n&&u&&o(n,s[0])}function o(s,n){var B,m,L,E,l;if(!((B=y.value)!=null&&B.id))return;R(`a:actions:import-${s}`);const u=I(!0),{close:P,vNode:_}=ue(Ae,{modelValue:u,importType:s,"onUpdate:modelValue":M,baseId:y.value.id,sourceId:(m=j.value)==null?void 0:m.filter(g=>g.enabled)[0].id});(l=(E=(L=_.value)==null?void 0:L.component)==null?void 0:E.exposed)==null||l.handleChange({file:{uid:`${s}-${n.name}-${Math.random().toString(36).substring(2)}`,name:n.name,type:n.type,status:"done",fileName:n.name,lastModified:n.lastModified,size:n.size,originFileObj:n},event:{percent:100}});function M(){u.value=!1,P(1e3),U()}}return X(()=>{var s;return(s=y.value)==null?void 0:s.id},()=>{var s;if((s=y.value)!=null&&s.id&&y.value.type==="database"){const{addTab:n}=Bt();n({id:y.value.id,title:y.value.title,type:$t.DB,baseId:y.value.id})}}),(s,n)=>{const u=fo;return e(x)?N("",!0):(r(),V(u,{key:0}))}}}),Uo=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"}));export{$s as _,Uo as i,ks as u};
import{u as _e,_ as be}from"./CYBhML0z.js";import{r as m,at as le,f as ke,au as we,as as xe,ac as Ee,g as B,fV as Ie,hl as Se,aj as V,H as W,an as T,ao as se,ad as Ce,i as $e,o as p,U as $,w as u,a as r,t as g,T as U,P as t,c as z,al as te,am as ae,d as k,V as L,W as K,R as ze,aF as oe,Y as Me,dd as Be,b as h,S as ie,Q as P,hm as De,ap as Oe,a2 as Re,hn as je,aI as Ne,p as Ve,e as We,_ as Te}from"./DKhUGBot.js";import{_ as Ue}from"./CzZu0lNg.js";import{_ as Le}from"./B5mlyM8k.js";import{v as D}from"./u8rUVe3y.js";import"./Cz8K5PX4.js";import{I as Ke}from"./GPQ-Eg6I.js";import"./CGLN1jgb.js";import"./CSWf2nuO.js";import"./DZMsOWET.js";import"./DyY7ABnl.js";import"./BY49hpjj.js";import"./DEJjMRn_.js";import"./CUg8TjpL.js";import"./DgXVCOuO.js";import"./BqRqK2Ui.js";import"./CNjr3NNT.js";import"./Du3cTDPI.js";import"./CxxuE4Yq.js";import"./CzWiRRCe.js";import"./BKoTI3Jv.js";import"./D4MBJuiu.js";import"./BjAi9enL.js";import"./DX_5E9FR.js";import"./BumrnQO2.js";import"./CX4Cv_ut.js";import"./BQQOEPN4.js";import"./BOlDoh1A.js";import"./B5i-a2rt.js";import"./DYyLu51D.js";import"./Cx8Z_l6r.js";import"./Clu_wjSJ.js";import"./CX32jp6d.js";import"./B1s-egFC.js";import"./BxHuRoBd.js";import"./CcMJjMoz.js";import"./B_ChuaCH.js";import"./DZwVvu3b.js";import"./DM41s5R0.js";import"./DsXhLEQW.js";import"./BpnlUwoJ.js";const Pe=()=>{const y=m([]),O=m([]),n=m([]),{orgId:R}=le(_e());return{orgId:R,workspaces:y,listWorkspaces:async(...w)=>{},fetchOrganizationMembers:async(...w)=>{},fetchOrganizationBases:async(...w)=>{},bases:n,members:O}},Fe=y=>(Ve("data-v-d8cfa6e7"),y=y(),We(),y),Qe={class:"flex flex-row text-2xl font-bold items-center gap-x-2"},Ae={class:"flex items-center justify-between gap-3 mt-2"},Ge={class:"flex w-full gap-4 flex-col"},He={class:"flex justify-between gap-3 w-full"},Ye=["disabled","placeholder"],qe={key:0,class:"ml-2 text-red-500 text-[10px] mt-1.5"},Je={class:""},Xe={class:"py-2"},Ze={class:"mx-2"},es={class:"flex flex-col max-h-64 overflow-y-auto nc-scrollbar-md mt-2"},ss=["onClick"],ts={class:"flex gap-2 capitalize items-center"},as=Fe(()=>r("div",{class:"flex-1"},null,-1)),os={class:"flex mt-8 justify-end"},is={class:"flex gap-2"},ls=ke({__name:"InviteDlg",props:{modelValue:{type:Boolean},type:{},baseId:{},emails:{},workspaceId:{}},emits:["update:modelValue"],setup(y,{emit:O}){const n=y,R=O,F=we(),Q=xe(),{createProjectUser:A}=F,{inviteCollaborator:w}=Q,v=Ee(n,"modelValue",R),G=B(()=>n.type==="base"?Ie:Se),o=V({email:"",roles:G.value.NO_ACCESS}),re=m(),H=m(),x=m(!1),i=V({isError:!0,message:""}),_=m(""),l=m([]),Y=m([]),E=m(!1),q=Pe(),{listWorkspaces:ne}=q,{workspaces:ce}=le(q),I=m(""),J=B(()=>ce.value.filter(e=>e.title.toLowerCase().includes(I.value.toLowerCase()))),S=V({}),b=B(()=>J.value.filter(e=>S[e.id])),j=()=>{var e;(e=H.value)==null||e.focus(),x.value=!0};W(v,async e=>{if(e){try{Y.value=Object.values(G.value)}catch(s){T.error(await se(s))}n.emails&&(l.value=n.emails),setTimeout(()=>{j()},100)}else l.value=[],o.email="",_.value=""});const X=e=>{const s=l.value.indexOf(e);s!==-1&&l.value.splice(s,1),l.value.push(e)},Z=(e,s=!1)=>e.length?D(e.trim())?!0:(s||(i.isError=!0,i.message="Invalid Email"),!1):(s||(i.isError=!0,i.message="Email should not be empty"),!1),me=B(()=>{if(!l.value.length&&!_.value.length||l.value.length&&o.email)return!0});W(o,e=>{if(D(e.email)&&!l.value.length){_.value=e.email,i.isError=!1;return}if(_.value="",(e.email.charAt(e.email.length-1)===","||e.email.charAt(e.email.length-1)===" ")&&e.email.trim().length){const f=e.email.split(",")[0].trim()||e.email.split(" ")[0].trim();if(!D(f)){i.isError=!0,i.message="Invalid Email";return}if(l.value.includes(f)){X(f),o.email="";return}l.value.push(f),o.email="",_.value=""}!e.email.length&&i.isError&&(i.isError=!1)});const de=()=>{Z(o.email)&&(o.email+=" ",i.isError=!1,i.message="")};Ce("Backspace",()=>{x.value&&o.email.length<1&&l.value.pop()}),W(v,e=>{e&&setTimeout(()=>{j()},100)});const pe=e=>{var f;i.isError=!1;const s=(f=e.clipboardData)==null?void 0:f.getData("text"),c=(s==null?void 0:s.split(","))||(s==null?void 0:s.split(" "));(c==null?void 0:c.length)===1&&o.email.length&&(c[0]=o.email+=c[0]),c==null||c.forEach(d=>{if(d=De(d)||d,!!Z(d,c.length>1)){if(l.value.includes(d)){X(d);return}l.value.push(d),o.email=""}}),o.email=""},ue=async()=>{try{E.value=!0;const e=_.value||l.value.join(",");if(e.includes(",")||D(e)||(i.isError=!0,i.message="invalid email"),n.type==="base"&&n.baseId)await A(n.baseId,{email:e,roles:o.roles});else if(n.type==="workspace"&&n.workspaceId)await w(e,o.roles,n.workspaceId);else if(n.type==="organization")for(const s of b.value)await w(e,o.roles,s.id);T.success("Invitation sent successfully"),o.email="",l.value=[],v.value=!1}catch(e){T.error(await se(e))}finally{_.value="",E.value=!1}},N=m(!1);$e(async()=>{n.type==="organization"&&await ne()});const fe=e=>o.roles=e;return(e,s)=>{const c=be,f=Oe,d=Re,ee=Ke,ve=je,ge=Ue,he=Le,ye=Ne;return p(),$(ye,{visible:t(v),"onUpdate:visible":s[6]||(s[6]=C=>P(v)?v.value=C:null),header:e.$t("activity.createTable"),"show-separator":!1,size:"medium",class:"nc-invite-dlg",onKeydown:s[7]||(s[7]=oe(C=>v.value=!1,["esc"]))},{header:u(()=>[r("div",Qe,g(e.type==="organization"?e.$t("labels.addMembersToOrganization"):e.type==="base"?e.$t("activity.addMember"):e.$t("activity.inviteToWorkspace")),1)]),default:u(()=>{var C;return[r("div",Ae,[r("div",Ge,[r("div",He,[r("div",{ref_key:"divRef",ref:re,class:U([{"border-primary/100":t(x),"p-1":((C=t(l))==null?void 0:C.length)>1},"flex items-center border-1 gap-1 w-full overflow-x-scroll nc-scrollbar-x-md items-center h-10 rounded-lg !min-w-96"]),tabindex:"0",onBlur:s[2]||(s[2]=a=>x.value=!1),onClick:j},[(p(!0),z(te,null,ae(t(l),(a,M)=>(p(),z("span",{key:a,class:"border-1 text-gray-800 first:ml-1 bg-gray-100 rounded-md flex items-center px-2 py-1"},[k(g(a)+" ",1),(p(),$(L(("iconMap"in e?e.iconMap:t(K)).close),{class:"ml-0.5 hover:cursor-pointer mt-0.5 w-4 h-4",onClick:rs=>t(l).splice(M,1)},null,8,["onClick"]))]))),128)),ze(r("input",{id:"email",ref_key:"focusRef",ref:H,"onUpdate:modelValue":s[0]||(s[0]=a=>t(o).email=a),disabled:t(E),placeholder:e.$t("activity.enterEmail"),class:"w-full min-w-36 outline-none px-2","data-testid":"email-input",onBlur:s[1]||(s[1]=a=>x.value=!1),onKeyup:oe(de,["enter"]),onPaste:Me(pe,["prevent"])},null,40,Ye),[[Be,t(o).email]])],34),h(c,{description:!1,"on-role-change":fe,role:t(o).roles,roles:t(Y),class:"!min-w-[152px] nc-invite-role-selector",size:"lg"},null,8,["role","roles"])]),t(i).isError&&t(i).message?(p(),z("span",qe,g(t(i).message),1)):ie("",!0),e.type==="organization"?(p(),$(he,{key:1,visible:t(N),"onUpdate:visible":s[4]||(s[4]=a=>P(N)?N.value=a:null)},{overlay:u(()=>[r("div",Xe,[r("div",Ze,[h(ee,{value:t(I),"onUpdate:value":s[3]||(s[3]=a=>P(I)?I.value=a:null),class:U([{"!border-brand-500":t(I).length>0},"!rounded-lg !h-8 !ring-0 !placeholder:text-gray-500 !border-gray-200 !px-4"]),"data-testid":"nc-ws-search",placeholder:"Search workspace"},{prefix:u(()=>[(p(),$(L(("iconMap"in e?e.iconMap:t(K)).search),{class:"h-4 w-4 mr-1 text-gray-500"}))]),_:1},8,["value","class"])]),r("div",es,[(p(!0),z(te,null,ae(t(J),a=>(p(),z("div",{key:a.id,class:"px-4 cursor-pointer hover:bg-gray-100 rounded-lg h-9.5 py-2 w-full flex gap-2",onClick:M=>t(S)[a.id]=!t(S)[a.id]},[r("div",ts,[h(ve,{"hide-label":!0,workspace:a,size:"small"},null,8,["workspace"]),k(" "+g(a.title),1)]),as,h(ge,{checked:t(S)[a.id],"onUpdate:checked":M=>t(S)[a.id]=M,size:"large"},null,8,["checked","onUpdate:checked"])],8,ss))),128))])])]),default:u(()=>[h(d,{class:"!justify-between","full-width":"",size:"medium",type:"secondary"},{default:u(()=>[r("div",{class:U([{"!text-gray-600":t(b).length>0},"flex text-gray-500 justify-between items-center w-full"])},[h(f,{class:"!max-w-130 truncate","show-on-truncate-only":""},{title:u(()=>[k(g(t(b).length>0?t(b).map(a=>a.title).join(", "):"-select workspaces to invite to-"),1)]),default:u(()=>[r("span",Je,g(t(b).length>0?t(b).map(a=>a.title).join(", "):"-select workspaces to invite to-"),1)]),_:1}),(p(),$(L(("iconMap"in e?e.iconMap:t(K)).chevronDown)))],2)]),_:1}),k(" /> ")]),_:1},8,["visible"])):ie("",!0)])]),r("div",os,[r("div",is,[h(d,{type:"secondary",onClick:s[5]||(s[5]=a=>v.value=!1)},{default:u(()=>[k(g(e.$t("labels.cancel")),1)]),_:1}),h(d,{disabled:t(me)||t(i).isError||t(E),loading:t(E),size:"medium",type:"primary",class:"nc-invite-btn",onClick:ue},{default:u(()=>[k(g(e.type==="base"?e.$t("activity.inviteToBase"):e.$t("activity.inviteToWorkspace")),1)]),_:1},8,["disabled","loading"])])])]}),_:1},8,["visible","header"])}}}),Ys=Te(ls,[["__scopeId","data-v-d8cfa6e7"]]);export{Ys as default};
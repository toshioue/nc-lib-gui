const __vite__fileDeps=["./e86JUVzd.js","./DKhUGBot.js","./entry.B8GgT5QA.css","./C0L-INnH.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as L,M,N as B,ag as D,ai as z,r as T,aj as W,o as t,c as i,b as n,w as m,a as o,P as e,t as r,al as x,cD as O,S as d,d as c,U as H,V as Z,W as J,Z as K,B as k,a4 as Q,a5 as X}from"./DKhUGBot.js";import{_ as Y}from"./B1s-egFC.js";import{u as ee}from"./DqUBg5CU.js";import{v as se}from"./u8rUVe3y.js";import{_ as ne,a as oe}from"./DC8mrE_Q.js";import{_ as te}from"./D7avM17a.js";import"./Cz8K5PX4.js";import{I as ae}from"./GPQ-Eg6I.js";import{F as ie}from"./DyY7ABnl.js";import{_ as re}from"./BY49hpjj.js";import{_ as le}from"./CxxuE4Yq.js";import"./BOlDoh1A.js";import"./BpnlUwoJ.js";import"./BQQOEPN4.js";import"./CUg8TjpL.js";import"./DgXVCOuO.js";import"./DEJjMRn_.js";const me=K(()=>X(()=>import("./e86JUVzd.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(g=>g.default||g)),ce={"data-testid":"nc-form-signin",class:"md:bg-primary bg-opacity-5 signin h-full min-h-[600px] flex flex-col justify-center items-center nc-form-signin"},de={class:"bg-white mt-[60px] relative flex flex-col justify-center gap-2 w-full max-w-[500px] mx-auto p-8 md:rounded-lg md:border-1 md:border-gray-200 md:shadow-xl"},pe={class:"prose-2xl font-bold self-center my-4"},ue={key:0,class:"self-center mb-4 bg-red-500 text-white rounded-lg w-3/4 mx-auto p-1"},_e={class:"flex items-center gap-2 justify-center"},ge={class:"break-words"},fe={class:"hidden md:block text-right"},he={class:"self-center flex flex-col flex-wrap gap-4 items-center mt-4 justify-center"},ye={key:0,"data-testid":"nc-form-signin__submit",class:"scaling-btn bg-opacity-100",type:"submit"},be={class:"flex items-center gap-2"},ve=["href"],we={class:"flex items-center gap-2"},xe={key:2,class:"self-center flex flex-col flex-wrap gap-4 items-center mt-4 justify-center"},ke=["href"],Ie={type:"button",class:"scaling-btn bg-opacity-100"},Ue={class:"flex items-center gap-2"},$e={key:3,class:"text-end prose-sm"},Ee={key:4,class:"md:hidden"},We=L({__name:"signin",setup(g){const f=M(),{signIn:P,appInfo:a}=B(),{api:q,isLoading:A,error:u}=D({useGlobalInstance:!0}),{t:_}=z();ee("nc-left-sidebar",{hasSidebar:!1});const I=T(),p=W({email:"",password:""}),U={email:[{required:!0,message:_("msg.error.signUpRules.emailRequired")},{validator:(s,l)=>new Promise((y,b)=>{if(!(l!=null&&l.length)||se(l))return y();b(new Error(_("msg.error.signUpRules.emailInvalid")))}),message:_("msg.error.signUpRules.emailInvalid")}],password:[{required:!0,message:_("msg.error.signUpRules.passwdRequired")}]};async function C(){I.value.validate()&&(h(),q.auth.signin(p).then(async({token:s})=>{P(s),await k({path:"/",query:f.query})}))}function h(){u.value&&(u.value=null)}function R(){k({path:"/signup",query:f.query})}function $(){k({path:"/forgot-password",query:f.query})}return(s,l)=>{const y=me,b=te,S=ae,E=re,N=le,v=Y,V=ne,F=oe,j=ie,G=Q;return t(),i("div",null,[n(G,null,{default:m(()=>[o("div",ce,[o("div",de,[n(y,{class:"color-transition hover:ring hover:ring-accent hover:ring-opacity-100",animate:e(A)},null,8,["animate"]),o("h1",pe,r(s.$t("general.signIn")),1),n(j,{ref_key:"formValidator",ref:I,model:e(p),layout:"vertical","no-style":"",onFinish:C},{default:m(()=>[e(a).disableEmailAuth?d("",!0):(t(),i(x,{key:0},[n(O,{name:"layout"},{default:m(()=>[e(u)?(t(),i("div",ue,[o("div",_e,[n(b),o("div",ge,r(e(u)),1)])])):d("",!0)]),_:1}),n(E,{label:s.$t("labels.email"),name:"email",rules:U.email},{default:m(()=>[n(S,{value:e(p).email,"onUpdate:value":l[0]||(l[0]=w=>e(p).email=w),"data-testid":"nc-form-signin__email",size:"large",placeholder:s.$t("msg.info.signUp.workEmail"),onFocus:h},null,8,["value","placeholder"])]),_:1},8,["label","rules"]),n(E,{label:s.$t("labels.password"),name:"password",rules:U.password},{default:m(()=>[n(N,{value:e(p).password,"onUpdate:value":l[1]||(l[1]=w=>e(p).password=w),"data-testid":"nc-form-signin__password",size:"large",class:"password",placeholder:s.$t("msg.info.signUp.enterPassword"),onFocus:h},null,8,["value","placeholder"])]),_:1},8,["label","rules"]),o("div",fe,[n(v,{class:"prose-sm",onClick:$},{default:m(()=>[c(r(s.$t("msg.info.signUp.forgotPassword")),1)]),_:1})])],64)),o("div",he,[e(a).disableEmailAuth?d("",!0):(t(),i("button",ye,[o("span",be,[(t(),H(Z(("iconMap"in s?s.iconMap:e(J)).signin))),c(" "+r(s.$t("general.signIn")),1)])])),e(a).googleAuthEnabled?(t(),i("a",{key:1,href:`${e(a).ncSiteUrl}/auth/google`,class:"scaling-btn bg-opacity-100 !after:bg-white !text-primary !no-underline"},[o("span",we,[n(V),c(" "+r(s.$t("labels.signInWithProvider",{provider:"Google"})),1)])],8,ve)):d("",!0),e(a).oidcAuthEnabled?(t(),i("div",xe,[o("a",{href:`${e(a).ncSiteUrl}/auth/oidc`,class:"!text-primary !no-underline"},[o("button",Ie,[o("span",Ue,[n(F),e(a).disableEmailAuth?(t(),i(x,{key:1},[c(r(s.$t("general.signIn")),1)],64)):(t(),i(x,{key:0},[c(r(s.$t("labels.signUpWithProvider",{provider:e(a).oidcProviderName||"OpenID Connect"})),1)],64))])])],8,ke)])):d("",!0),e(a).inviteOnlySignup?d("",!0):(t(),i("div",$e,[c(r(s.$t("msg.info.signUp.dontHaveAccount"))+" ",1),n(v,{onClick:R},{default:m(()=>[c(r(s.$t("general.signUp")),1)]),_:1})])),e(a).disableEmailAuth?d("",!0):(t(),i("div",Ee,[n(v,{class:"prose-sm",onClick:$},{default:m(()=>[c(r(s.$t("msg.info.signUp.forgotPassword")),1)]),_:1})]))])]),_:1},8,["model"])])])]),_:1})])}}});export{We as default};
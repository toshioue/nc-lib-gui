const __vite__fileDeps=["./CnHJnvS0.js","./BLdk6lRf.js","./entry.B8GgT5QA.css","./B0DrfDji.js","./Cy50pBgZ.js","./JimKVLH8.js","./DWFLnnq8.js","./BQQOEPN4.js","./BD_L_KCX.js","./C-Z2v8Hi.js","./BTh9o-aK.js","./ETGzLqdt.js","./links.C8uCzV-l.css","./DV47GYLy.js","./RichText.M7uMQ9pA.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as V,av as b,r as w,hp as y,ac as p,g as C,P as f,o as _,c as m,b as n,w as D,a as t,t as i,Y as I,Q as $,Z as k,a5 as B,$ as L,a2 as R,_ as E}from"./BLdk6lRf.js";const T=k(()=>B(()=>import("./CnHJnvS0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url).then(a=>a.default||a)),z={key:0},M={class:"flex items-center gap-2"},N={key:1},P={class:"w-full flex items-center gap-2 mb-2"},A={class:"text-small leading-[18px] flex-1 text-gray-700"},j={class:"flex flex-row gap-2"},G={class:"nc-default-value-wrapper nc-rich-long-text-default-value border-1 relative pt-7 flex items-center w-full px-0 border-gray-300 rounded-md max-h-70 pb-1 focus-within:border-brand-500 focus-within:shadow-selected transition-all duration-0.3s"},O=V({__name:"RichLongTextDefaultValue",props:{value:{},isVisibleDefaultValueInput:{type:Boolean}},emits:["update:value"],setup(a,{emit:v}){const u=a,d=v;b(y,w(!0));const l=p(u,"value",d),r=p(u,"isVisibleDefaultValueInput",d),o=C({get:()=>l.value.cdf,set:e=>{e==="<br />"?l.value.cdf=null:l.value.cdf=e}});return(e,s)=>{const h=L,x=R,g=T;return f(r)?(_(),m("div",N,[t("div",P,[t("div",A,i(e.$t("placeholder.defaultValue")),1)]),t("div",j,[t("div",G,[n(g,{value:f(o),"onUpdate:value":s[1]||(s[1]=c=>$(o)?o.value=c:null),class:"border-t-1 border-gray-100 !max-h-80 !min-h-30","show-menu":""},null,8,["value"])])])])):(_(),m("div",z,[n(x,{size:"small",type:"text",class:"!text-gray-500 !hover:text-gray-700","data-testid":"nc-show-default-value-btn",onClick:s[0]||(s[0]=I(c=>r.value=!0,["stop"]))},{default:D(()=>[t("div",M,[t("span",null,i(e.$t("general.set"))+" "+i(e.$t("placeholder.defaultValue").toLowerCase()),1),n(h,{icon:"plus",class:"flex-none h-4 w-4"})])]),_:1})]))}}}),S=E(O,[["__scopeId","data-v-6d4941a9"]]);export{S as default};
import{c4 as X,f as G,c9 as P,r as H,aK as K,aL as S,b4 as Z,aZ as J,b as c,aU as V,aM as g,cn as Q,ac as Y,o as h,c as x,a as t,t as B,al as ee,am as te,w as A,P as C,T as oe,U as D,V as R,W as j,S as ae,a2 as ne,p as le,e as se,_ as ue}from"./BLdk6lRf.js";import{C as re}from"./C9I3jrHo.js";import{_ as z,s as ce}from"./BrF0EXdL.js";import"./JimKVLH8.js";import{I as ie}from"./DWFLnnq8.js";import{_ as de}from"./BLwY008C.js";import"./C0Si9_oy.js";import"./BD_L_KCX.js";import"./CBNgcPSC.js";import"./BQQOEPN4.js";import"./DTv03lbO.js";import"./C-Z2v8Hi.js";import"./BTh9o-aK.js";import"./ETGzLqdt.js";var f=function(){return null};f.isSelectOption=!0;f.displayName="AAutoCompleteOption";var O=function(){return null};O.isSelectOptGroup=!0;O.displayName="AAutoCompleteOptGroup";function pe(o){var a,d;return(o==null||(a=o.type)===null||a===void 0?void 0:a.isSelectOption)||(o==null||(d=o.type)===null||d===void 0?void 0:d.isSelectOptGroup)}var ve=function(){return g(g({},V(ce(),["loading","mode","optionLabelProp","labelInValue"])),{},{dataSource:Array,dropdownMenuStyle:{type:Object,default:void 0},dropdownMatchSelectWidth:{type:[Number,Boolean],default:!0},prefixCls:String,showSearch:{type:Boolean,default:void 0},transitionName:String,choiceTransitionName:{type:String,default:"zoom"},autofocus:{type:Boolean,default:void 0},backfill:{type:Boolean,default:void 0},filterOption:{type:[Boolean,Function],default:!1},defaultActiveFirstOption:{type:Boolean,default:!0}})},F=G({compatConfig:{MODE:3},name:"AAutoComplete",inheritAttrs:!1,props:ve(),slots:["option"],setup:function(a,d){var l=d.slots,p=d.attrs,w=d.expose;P(!("dataSource"in l),"AutoComplete","`dataSource` slot is deprecated, please use props `options` instead."),P(!("options"in l),"AutoComplete","`options` slot is deprecated, please use props `options` instead.");var y=H(),M=function(){var e,v=Q((e=l.default)===null||e===void 0?void 0:e.call(l)),_=v.length?v[0]:void 0;return _},I=function(){var e;(e=y.value)===null||e===void 0||e.focus()},n=function(){var e;(e=y.value)===null||e===void 0||e.blur()};w({focus:I,blur:n});var k=K("select",a),m=k.prefixCls;return function(){var s,e,v=a.size,_=a.dataSource,i=a.notFoundContent,b=i===void 0?(s=l.notFoundContent)===null||s===void 0?void 0:s.call(l):i,u,$=p.class,L=(e={},S(e,$,!!$),S(e,"".concat(m.value,"-lg"),v==="large"),S(e,"".concat(m.value,"-sm"),v==="small"),S(e,"".concat(m.value,"-show-search"),!0),S(e,"".concat(m.value,"-auto-complete"),!0),e);if(a.options===void 0){var N,E,U=((N=l.dataSource)===null||N===void 0?void 0:N.call(l))||((E=l.options)===null||E===void 0?void 0:E.call(l))||[];U.length&&pe(U[0])?u=U:u=_?_.map(function(r){if(Z(r))return r;switch(J(r)){case"string":return c(f,{key:r,value:r},{default:function(){return[r]}});case"object":return c(f,{key:r.value,value:r.value},{default:function(){return[r.text]}});default:throw new Error("AutoComplete[dataSource] only supports type `string[] | Object[]`.")}}):[]}var W=V(g(g(g({},a),p),{},{mode:z.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:M,notFoundContent:b,class:L,ref:y}),["dataSource","loading"]);return c(z,W,g({default:function(){return[u]}},V(l,["default","dataSource","options"])))}}});const fe=X(F,{Option:f,OptGroup:O,install:function(a){return a.component(F.name,F),a.component(f.displayName,f),a.component(O.displayName,O),a}}),T=o=>(le("data-v-8863b431"),o=o(),se(),o),me={class:"flex flex-row justify-between w-full"},_e={class:"w-full nc-webhooks-params"},he={class:"h-8"},Ce=T(()=>t("th",null,null,-1)),ge={class:"text-left font-normal ml-2","data-rec":"true"},ye={class:"text-left font-normal ml-2","data-rec":"true"},be=T(()=>t("th",{class:"w-8"},null,-1)),Se={class:"px-2 nc-hook-header-tab-checkbox"},Oe={class:"px-2"},ke={class:"px-2"},xe={class:"relative"},Ae=["onClick"],we={colspan:12,class:""},Me={class:"flex flex-row items-center gap-x-1"},Ie={"data-rec":"true"},Ne=G({__name:"Headers",props:{modelValue:{}},emits:["update:modelValue"],setup(o,{emit:a}){const p=Y(o,"modelValue",a),w=H([{value:"A-IM"},{value:"Accept"},{value:"Accept-Charset"},{value:"Accept-Encoding"},{value:"Accept-Language"},{value:"Accept-Datetime"},{value:"Access-Control-Request-Method"},{value:"Access-Control-Request-Headers"},{value:"Authorization"},{value:"Cache-Control"},{value:"Connection"},{value:"Content-Length"},{value:"Content-Type"},{value:"Cookie"},{value:"Date"},{value:"Expect"},{value:"Forwarded"},{value:"From"},{value:"Host"},{value:"If-Match"},{value:"If-Modified-Since"},{value:"If-None-Match"},{value:"If-Range"},{value:"If-Unmodified-Since"},{value:"Max-Forwards"},{value:"Origin"},{value:"Pragma"},{value:"Proxy-Authorization"},{value:"Range"},{value:"Referer"},{value:"TE"},{value:"User-Agent"},{value:"Upgrade"},{value:"Via"},{value:"Warning"},{value:"Non-standard headers"},{value:"Dnt"},{value:"X-Requested-With"},{value:"X-CSRF-Token"}]),y=()=>p.value.push({}),M=n=>p.value.splice(n,1),I=(n,k)=>k.value.toUpperCase().includes(n.toUpperCase());return(n,k)=>{const m=re,s=de,e=fe,v=ie,_=ne;return h(),x("div",me,[t("table",_e,[t("thead",he,[t("tr",null,[Ce,t("th",null,[t("div",ge,B(n.$t("labels.headerName")),1)]),t("th",null,[t("div",ye,B(n.$t("placeholder.value")),1)]),be])]),t("tbody",null,[(h(!0),x(ee,null,te(C(p),(i,b)=>(h(),x("tr",{key:b,class:"!h-2 overflow-hidden"},[t("td",Se,[c(s,{class:"form-item"},{default:A(()=>[c(m,{checked:i.enabled,"onUpdate:checked":u=>i.enabled=u},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),t("td",Oe,[c(s,{class:"form-item"},{default:A(()=>[c(e,{value:i.name,"onUpdate:value":u=>i.name=u,class:"nc-input-hook-header-key",options:C(w),placeholder:n.$t("placeholder.key"),"filter-option":I,"dropdown-class-name":"border-1 border-gray-200"},null,8,["value","onUpdate:value","options","placeholder"])]),_:2},1024)]),t("td",ke,[c(s,{class:"form-item"},{default:A(()=>[c(v,{value:i.value,"onUpdate:value":u=>i.value=u,placeholder:n.$t("placeholder.value"),class:"!rounded-md nc-input-hook-header-value"},null,8,["value","onUpdate:value","placeholder"])]),_:2},1024)]),t("td",xe,[b!==0?(h(),x("div",{key:0,class:oe(["absolute left-0 top-0.25 py-1 px-1.5 rounded-md border-1 border-gray-100",{"text-gray-400 cursor-not-allowed bg-gray-50":C(p).length===1,"text-gray-600 cursor-pointer hover:bg-gray-50  hover:text-black":C(p).length!==1}]),onClick:u=>M(b)},[(h(),D(R(("iconMap"in n?n.iconMap:C(j)).delete)))],10,Ae)):ae("",!0)])]))),128)),t("tr",null,[t("td",we,[c(_,{size:"small",type:"secondary",onClick:y},{default:A(()=>[t("div",Me,[t("div",Ie,B(n.$t("labels.addHeader")),1),(h(),D(R(("iconMap"in n?n.iconMap:C(j)).plus),{class:"flex mx-auto"}))])]),_:1})])])])])])}}}),Le=ue(Ne,[["__scopeId","data-v-8863b431"]]);export{Le as default};
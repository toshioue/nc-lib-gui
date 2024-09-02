import{f as oe,cN as re,N as ue,bN as f,r as o,hr as ie,aC as ce,aE as me,hH as ve,hL as fe,aF as de,gQ as pe,gV as ye,fQ as he,ai as ke,g as D,cs as u,F as $e,af as K,H as A,d3 as ge,df as V,aG as He,iN as be,o as E,c as G,b as O,w as U,a as P,P as s,a9 as Me,Y as T,S as Ve,T as z,U as Ye,aq as Ie,b1 as Ce,$ as we,_ as De}from"./Cgw6cdOy.js";import{_ as Fe}from"./BSzBZdFZ.js";import{_ as Ee}from"./CiTH7PYd.js";const Pe=["title"],Te=["value","placeholder","readonly"],_e={class:"min-w-[72px]"},je={key:0,class:"absolute inset-0 z-90 cursor-pointer"},Ne=oe({__name:"TimePicker",props:{modelValue:{},isPk:{type:Boolean}},emits:["update:modelValue"],setup(k,{emit:q}){const _=q,{isMysql:R}=re(),{showNull:F,isMobileMode:L}=ue(),$=f(ie,o(!1)),Y=f(ce,o(!1)),i=f(me,o(!1)),g=f(ve,o(!1)),d=f(fe,o(!1)),Q=f(de,o(!1)),Z=f(pe,o(!1)),H=f(ye,o(!1)),p=f(he),J=R(p.value.source_id)?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD HH:mm:ssZ",I=o(!1),c=o(),C=o(!1),{t:j}=ke(),l=o(!1),y=o(),n=D({get(){if(!k.modelValue||C.value)return;let e=u(k.modelValue);if(e.isValid()||(e=u(k.modelValue,"HH:mm:ss")),e.isValid()||(e=u(`1999-01-01 ${k.modelValue}`)),!e.isValid()){I.value=!0;return}return e},set(e){if(C.value=!1,!e){_("update:modelValue",null);return}if(e.isValid()){const a=e.format("HH:mm"),t=u(`1999-01-01 ${a}:00`);_("update:modelValue",t.format(J))}}});$e(()=>{n.value&&(y.value=n.value)});const m=`picker_${Math.floor(Math.random()*99999)}`;K(c,e=>{var a,t,r;(a=e.target)!=null&&a.closest(`.${m}, .nc-${m}`)||((r=(t=c.value)==null?void 0:t.blur)==null||r.call(t),l.value=!1)});const W=e=>{var a,t;(a=e==null?void 0:e.relatedTarget)!=null&&a.closest(`.${m}, .nc-${m}`)||(t=e==null?void 0:e.target)!=null&&t.closest(`.${m}, .nc-${m}`)||(l.value=!1)},X=()=>{l.value=!0};A(l,e=>{var a,t;e?(i.value=!0,(t=(a=c.value)==null?void 0:a.focus)==null||t.call(a),K(document.querySelector(`.${m}`),r=>{var v;(v=r==null?void 0:r.target)!=null&&v.closest(`.nc-${m}`)||(l.value=!1)})):C.value=!1},{flush:"post"}),A(i,e=>{d.value&&e&&!l.value&&(l.value=!0)});const ee=D(()=>(Q.value||H.value)&&!I.value||d.value&&!F.value&&!I.value&&!ge(p.value)&&Y.value||g.value?V(p.value.meta).is12hrFormat?"hh:mm AM":"HH:mm":k.modelValue===null&&F.value?j("general.null").toUpperCase():I.value?j("msg.invalidTime"):""),b=D(()=>$.value||($.value||n.value&&k.isPk)&&!Y.value&&!i.value?!1:l.value),ae=()=>{$.value||l.value||(l.value=Y.value||i.value)},te=(e,a)=>{var t,r,v,M,h,x,w,S;switch(e.key!=="Enter"&&e.stopPropagation(),e.key){case"Enter":e.preventDefault(),Z.value&&e.stopPropagation(),n.value=y.value,l.value=!a,l.value||d.value&&!H.value&&!g.value&&(i.value=!1,(r=(t=c.value)==null?void 0:t.blur)==null||r.call(t));return;case"Tab":l.value=!1,d.value&&!H.value&&!g.value&&(i.value=!1,(M=(v=c.value)==null?void 0:v.blur)==null||M.call(v));return;case"Escape":a?(l.value=!1,d.value&&!H.value&&!g.value&&(i.value=!1,(x=(h=c.value)==null?void 0:h.blur)==null||x.call(h))):(i.value=!1,(S=(w=c.value)==null?void 0:w.blur)==null||S.call(w));return;default:if(!a&&/^[0-9a-z]$/i.test(e.key)){l.value=!0;const B=e.target,ne=B.value;Ce(()=>{B.value=ne})}}};He(document,"keydown",e=>{if(Y.value&&!(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey||!d.value||H.value||g.value||be()))switch(e.key){case";":n.value=u(new Date),e.preventDefault();break;default:!b.value&&c.value&&/^[0-9a-z]$/i.test(e.key)&&(C.value=!0,c.value.focus(),i.value=!0,l.value=!0)}});const le=e=>{let a=e.target.value;if(!a){y.value=void 0;return}a=V(p.value.meta).is12hrFormat?a.trim().toUpperCase().replace(/(AM|PM)$/," $1").replace(/\s+/g," "):a.trim();const t=u(a,V(p.value.meta).is12hrFormat?"hh:mm A":"HH:mm");t.isValid()&&(y.value=u(`${u().format("YYYY-MM-DD")} ${t.format("HH:mm")}`))};function N(e){if(e||(y.value=void 0,n.value=void 0),!!(e!=null&&e.isValid())){if(n.value){const a=u(`${n.value.format("YYYY-MM-DD")} ${e.format("HH:mm")}:00`);y.value=a,n.value=a}else{const a=u(`${u().format("YYYY-MM-DD")} ${e.format("HH:mm")}:00`);y.value=a,n.value=a}l.value=!1}}const se=D(()=>{var e;return((e=n.value)==null?void 0:e.format(V(p.value.meta).is12hrFormat?"hh:mm A":"HH:mm"))??""});return(e,a)=>{const t=we,r=Fe,v=Ee;return E(),G(Ie,null,[O(v,{visible:s(b),"auto-close":!1,trigger:["click"],class:Ye(["nc-cell-field",[`nc-${m}`,{"nc-null":e.modelValue===null&&s(F)}]]),"overlay-class-name":`${m} nc-picker-time ${s(b)?"active":""} !min-w-[0]`},{overlay:U(()=>[P("div",_e,[O(r,{"selected-date":s(n),"min-granularity":30,"is-min-granularity-picker":"","is12hr-format":!!("parseProp"in e?e.parseProp:s(V))(s(p).meta).is12hrFormat,"is-open":s(b),"onUpdate:selectedDate":N},null,8,["selected-date","is12hr-format","is-open"])])]),default:U(()=>{var M;return[P("div",Me(e.$attrs,{title:(M=s(n))==null?void 0:M.format("HH:mm"),class:"nc-time-picker h-full flex items-center justify-between ant-picker-input relative"}),[P("input",{ref_key:"datePickerRef",ref:c,type:"text",value:s(se),placeholder:s(ee),class:"nc-time-input border-none outline-none !text-current bg-transparent !focus:border-none !focus:outline-none !focus:ring-transparent",readonly:s($)||!!s(L),onBlur:W,onFocus:X,onKeydown:a[0]||(a[0]=h=>te(h,s(b))),onMouseup:a[1]||(a[1]=T(()=>{},["stop"])),onMousedown:a[2]||(a[2]=T(()=>{},["stop"])),onClick:ae,onInput:le},null,40,Te),s(n)&&!s($)?(E(),Ve(t,{key:0,icon:"closeCircle",class:"nc-clear-time-icon nc-action-icon absolute right-0 top-[50%] transform -translate-y-1/2 invisible cursor-pointer",onClick:a[3]||(a[3]=T(h=>N(),["stop"]))})):z("",!0)],16,Pe)]}),_:1},8,["visible","class","overlay-class-name"]),!s(i)&&s(d)?(E(),G("div",je)):z("",!0)],64)}}}),Ke=De(Ne,[["__scopeId","data-v-b407be0a"]]);export{Ke as default};
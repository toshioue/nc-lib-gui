import{f as ee,N as ae,bL as d,fH as le,r as n,hf as te,aw as se,ay as ne,hp as ue,ht as oe,az as re,gs as ie,gx as ce,ai as fe,g as E,ce as j,F as ve,ae as N,H as z,cV as de,aA as pe,iy as me,o as x,c as B,b as K,w as O,a as M,P as s,Q as T,a7 as ye,Y as P,U as ke,S as U,T as Ye,al as be,$ as ge,_ as $e}from"./BLdk6lRf.js";import{_ as Ie}from"./oMo3eZSU.js";import{_ as we}from"./BaHXy0hV.js";const Ve=["title"],Ce=["value","placeholder","readonly"],he={class:"w-[256px]"},_e={key:0,class:"absolute inset-0 z-90 cursor-pointer"},Ee=ee({__name:"YearPicker",props:{modelValue:{},isPk:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(b,{emit:G}){const D=G,{showNull:h,isMobileMode:R}=ae(),H=d(le,null),k=d(te,n(!1)),g=d(se,n(!1)),r=d(ne,n(!1)),$=d(ue,n(!1)),m=d(oe,n(!1)),A=d(re,n(!1)),L=d(ie,n(!1)),I=d(ce,n(!1)),w=n(!1),i=n(),V=n(!1),{t:F}=fe(),t=n(!1),p=n(),u=E({get(){if(!b.modelValue||V.value)return;const e=j(b.modelValue.toString(),"YYYY");if(!e.isValid()){w.value=!0;return}return e},set(e){if(V.value=!1,!e){D("update:modelValue",null);return}e!=null&&e.isValid()&&D("update:modelValue",e.format("YYYY")),t.value=!1}});ve(()=>{u.value&&(p.value=u.value)});const c=`picker_${Math.floor(Math.random()*99999)}`;N(i,e=>{var a,l,o;(a=e.target)!=null&&a.closest(`.${c}, .nc-${c}`)||((o=(l=i.value)==null?void 0:l.blur)==null||o.call(l),t.value=!1)});const q=e=>{var a,l;(a=e==null?void 0:e.relatedTarget)!=null&&a.closest(`.${c}, .nc-${c}`)||(l=e==null?void 0:e.target)!=null&&l.closest(`.${c}, .nc-${c}`)||(t.value=!1)};z(t,e=>{var a,l;e?(r.value=!0,(l=(a=i.value)==null?void 0:a.focus)==null||l.call(a),N(document.querySelector(`.${c}`),o=>{var f;(f=o==null?void 0:o.target)!=null&&f.closest(`.nc-${c}`)||(t.value=!1)})):V.value=!1},{flush:"post"}),z(r,e=>{m.value&&e&&!t.value&&(t.value=!0)});const Q=E(()=>(A.value||I.value)&&!w.value||m.value&&!h.value&&!w.value&&!de(H.value)&&g.value||$.value?"YYYY":b.modelValue===null&&h.value?F("general.null").toUpperCase():w.value?F("msg.invalidTime"):""),_=E(()=>k.value||(k.value||u.value&&b.isPk)&&!g.value&&!r.value?!1:t.value),J=()=>{k.value||t.value||(t.value=g.value||r.value)},W=(e,a)=>{var l,o,f,v,y,Y,C,S;switch(e.key!=="Enter"&&e.key!=="Tab"&&e.stopPropagation(),e.key){case"Enter":e.preventDefault(),L.value&&e.stopPropagation(),u.value=p.value,t.value=!a,t.value||(r.value=!1,m.value&&!I.value&&!$.value&&((o=(l=i.value)==null?void 0:l.blur)==null||o.call(l)));return;case"Tab":t.value=!1,m.value&&(r.value=!1,(v=(f=i.value)==null?void 0:f.blur)==null||v.call(f));return;case"Escape":a?(t.value=!1,r.value=!1,m.value&&!I.value&&!$.value&&((Y=(y=i.value)==null?void 0:y.blur)==null||Y.call(y))):(r.value=!1,(S=(C=i.value)==null?void 0:C.blur)==null||S.call(C));return;default:!a&&/^[0-9a-z]$/i.test(e.key)&&(t.value=!0)}};pe(document,"keydown",e=>{if(g.value&&!(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey||!m.value||I.value||$.value||me()))switch(e.key){case";":u.value=j(new Date),e.preventDefault();break;default:!_.value&&i.value&&/^[0-9a-z]$/i.test(e.key)&&(V.value=!0,i.value.focus(),r.value=!0,t.value=!0)}});const X=e=>{const a=e.target.value;if(!a){p.value=void 0;return}const l=j(a,"YYYY");l.isValid()&&(p.value=l)};function Z(e){p.value=e,u.value=e,t.value=!1}return(e,a)=>{const l=ge,o=Ie,f=we;return x(),B(be,null,[K(f,{visible:s(_),"auto-close":!1,trigger:["click"],disabled:s(k),class:Ye(["nc-cell-field",[`nc-${c}`,{"nc-null":e.modelValue===null&&s(h)}]]),"overlay-class-name":`${c} nc-picker-year ${s(t)?"active":""} !min-w-[260px]`},{overlay:O(()=>[M("div",he,[K(o,{"page-date":s(p),"onUpdate:pageDate":a[4]||(a[4]=v=>T(p)?p.value=v:null),"selected-date":s(u),"onUpdate:selectedDate":a[5]||(a[5]=v=>T(u)?u.value=v:null),"is-open":s(_),"is-year-picker":"","is-cell-input-field":"",size:"medium"},null,8,["page-date","selected-date","is-open"])])]),default:O(()=>{var v,y;return[M("div",ye(e.$attrs,{title:(v=s(u))==null?void 0:v.format("YYYY"),class:"nc-year-picker flex items-center justify-between ant-picker-input relative"}),[M("input",{ref_key:"datePickerRef",ref:i,type:"text",value:((y=s(u))==null?void 0:y.format("YYYY"))??"",placeholder:s(Q),class:"nc-year-input border-none outline-none !text-current bg-transparent !focus:border-none !focus:outline-none !focus:ring-transparent",readonly:s(k)||!!s(R),onBlur:q,onKeydown:a[0]||(a[0]=Y=>W(Y,s(t))),onMouseup:a[1]||(a[1]=P(()=>{},["stop"])),onMousedown:a[2]||(a[2]=P(()=>{},["stop"])),onClick:J,onInput:X},null,40,Ce),s(u)&&!s(k)?(x(),ke(l,{key:0,icon:"closeCircle",class:"nc-clear-year-icon nc-action-icon absolute right-0 top-[50%] transform -translate-y-1/2 invisible cursor-pointer",onClick:a[3]||(a[3]=P(Y=>Z(),["stop"]))})):U("",!0)],16,Ve)]}),_:1},8,["visible","disabled","class","overlay-class-name"]),!s(r)&&s(m)?(x(),B("div",_e)):U("",!0)],64)}}}),Pe=$e(Ee,[["__scopeId","data-v-cdab2e2f"]]);export{Pe as default};
import P from"./Cj4l15BV.js";import H from"./Dqwep-0C.js";import{_ as Q}from"./WttlrBnq.js";import{f as L,ad as R,bN as h,fQ as Y,r as g,da as O,cZ as U,N as J,cN as Z,cR as q,o as v,S as x,w as k,P as o,c as W,fP as X,a as r,t as c,T as z,Q as F,fs as ee,fR as ae,aj as j,ak as G,A as K,ar as te,az as se,cS as oe,gD as le,g as ne,ae as ie,b as B,d as E,U as ce,aL as re,d1 as A,a0 as ue,hk as de}from"./Cgw6cdOy.js";import{_ as me}from"./S1x-kZdE.js";import{a as pe}from"./DFiWgQ57.js";import{C as fe}from"./KNudlHpk.js";import{_ as _e}from"./VVwMOds3.js";const ve={key:0,class:"flex flex-row items-center py-2 px-3 bg-gray-50 rounded-lg text-gray-700 mb-4"},be={class:"capitalize text-ellipsis overflow-hidden select-none w-full pl-1.5",style:{wordBreak:"keep-all",whiteSpace:"nowrap",display:"inline"}},Ie=L({__name:"DeleteColumnModal",props:{visible:{type:Boolean},onDeleteColumn:{type:Function}},emits:["update:visible"],setup($,{emit:D}){const u=$,d=R(u,"visible",D),{$api:S,$e:l}=K(),e=h(Y),m=h(O,g()),{getMeta:p}=U(),{includeM2M:T}=J(),{loadTables:M}=Z(),V=q(),f=g(!1),I=async()=>{var s,n,i,a,t,_,C,y;if(e!=null&&e.value){f.value=!0;try{await S.dbTableColumn.delete((s=e==null?void 0:e.value)==null?void 0:s.id),await p((n=m==null?void 0:m.value)==null?void 0:n.id,!0),ee(e==null?void 0:e.value)&&((i=e.value)!=null&&i.colOptions)&&(await p(((a=e.value)==null?void 0:a.colOptions).fk_related_model_id,!0),T.value&&((t=e.value)==null?void 0:t.colOptions).type===ae.MANY_TO_MANY&&M()),V.updateViewCoverImageColumnId({metaId:(_=m.value)==null?void 0:_.id,columnIds:new Set([(C=e==null?void 0:e.value)==null?void 0:C.id])}),l("a:column:delete"),d.value=!1,(y=u.onDeleteColumn)==null||y.call(u)}catch(N){j.error(await G(N))}finally{f.value=!1}}};return(s,n)=>{const i=P,a=H,t=Q;return v(),x(t,{visible:o(d),"onUpdate:visible":n[0]||(n[0]=_=>F(d)?d.value=_:null),"entity-name":s.$t("objects.column"),"on-delete":I},{"entity-preview":k(()=>[o(e)?(v(),W("div",ve,[o(X)(o(e))?(v(),x(i,{key:0,class:"nc-view-icon"})):(v(),x(a,{key:1,class:"nc-view-icon"})),r("div",be,c(o(e).title),1)])):z("",!0)]),_:1},8,["visible","entity-name"])}}}),ye={class:"prose-xl font-bold self-center"},we=r("div",{class:"mt-4"},"Are you sure you want to duplicate the field?",-1),ke={class:"prose-md self-center text-gray-500 mt-4"},ge={class:"text-xs p-2"},xe={class:"flex flex-row gap-x-2 mt-2.5 pt-2.5 justify-end"},Ne=L({__name:"ColumnDuplicate",props:{modelValue:{type:Boolean},column:{},extra:{}},emits:["update:modelValue"],setup($,{expose:D,emit:u}){const b=$,d=u,{api:S}=te(),l=R(b,"modelValue",d),{$e:e,$poller:m}=K();se(oe());const p=h(le),{eventBus:T}=pe(),{getMeta:M}=U(),V=h(O,g()),f=g({includeData:!0}),I=ne(()=>{const{includeData:a}=f.value;return{excludeData:!a}}),s=g(!1),n=async()=>{await M(V.value.id,!0),T.emit(de.FIELD_RELOAD),p==null||p.trigger()},i=async()=>{try{s.value=!0;const a=await S.dbTable.duplicateColumn(b.column.base_id,b.column.id,{options:I.value,extra:b.extra});m.subscribe({id:a.id},async t=>{t.status!=="close"&&(t.status===A.COMPLETED?(n(),s.value=!1,l.value=!1):t.status===A.FAILED&&(j.error("There was an error duplicating the column."),n(),s.value=!1,l.value=!1))}),e("a:column:duplicate")}catch(a){j.error(await G(a)),s.value=!1,l.value=!1}};return ie("Enter",()=>{l.value&&i()}),D({duplicate:i}),(a,t)=>{const _=_e,C=fe,y=ue,N=me;return v(),x(N,{visible:o(l),"onUpdate:visible":t[2]||(t[2]=w=>F(l)?l.value=w:null),class:ce([{active:o(l)},"!w-[30rem]"]),closable:!o(s),"mask-closable":!o(s),keyboard:!o(s),centered:"","wrap-class-name":"nc-modal-column-duplicate",footer:null,onKeydown:t[3]||(t[3]=re(w=>l.value=!1,["esc"]))},{default:k(()=>[r("div",null,[r("div",ye,c(a.$t("general.duplicate"))+" "+c(a.$t("objects.column")),1),we,r("div",ke,c(a.$t("title.advancedSettings")),1),B(_,{class:"!m-0 !p-0 !my-2"}),r("div",ge,[B(C,{checked:o(f).includeData,"onUpdate:checked":t[0]||(t[0]=w=>o(f).includeData=w),disabled:o(s)},{default:k(()=>[E(c(a.$t("labels.includeData")),1)]),_:1},8,["checked","disabled"])])]),r("div",xe,[o(s)?z("",!0):(v(),x(y,{key:"back",type:"secondary",onClick:t[1]||(t[1]=w=>l.value=!1)},{default:k(()=>[E(c(a.$t("general.cancel")),1)]),_:1})),B(y,{key:"submit",type:"primary",loading:o(s),onClick:i},{default:k(()=>[E(c(a.$t("general.confirm")),1)]),_:1},8,["loading"])])]),_:1},8,["visible","class","closable","mask-closable","keyboard"])}}});export{Ie as _,Ne as a};
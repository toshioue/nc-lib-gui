import{cK as L,ao as m,aR as Q,f as H,am as K,bN as Y,F as Z,l as ee,i as ae,cb as ne,r as M,ap as te,aS as U,aW as R,an as S,b as _,H as T,g as j,aB as re,a$ as ue}from"./3QBYHahY.js";import{V as le}from"./Ci1lK5Ee.js";import{u as D}from"./xnDaHwV-.js";function oe(t,a){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=L(t))||a){r&&(t=r);var s=0,i=function(){};return{s:i,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(o){throw o},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var g=!0,x=!1,C;return{s:function(){r=r.call(t)},n:function(){var o=r.next();return g=o.done,o},e:function(o){x=!0,C=o},f:function(){try{!g&&r.return!=null&&r.return()}finally{if(x)throw C}}}}var ie=function(){return{name:String,prefixCls:String,options:{type:Array,default:function(){return[]}},disabled:Boolean,id:String}},ce=function(){return m(m({},ie()),{},{defaultValue:{type:Array},value:{type:Array},onChange:{type:Function},"onUpdate:value":{type:Function}})},de=function(){return{prefixCls:String,defaultChecked:{type:Boolean,default:void 0},checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:Q.any,name:String,id:String,indeterminate:{type:Boolean,default:void 0},type:{type:String,default:"checkbox"},autofocus:{type:Boolean,default:void 0},onChange:Function,"onUpdate:checked":Function,onClick:Function,skipGroup:{type:Boolean,default:!1}}},se=function(){return m(m({},de()),{},{indeterminate:{type:Boolean,default:!1}})},W=Symbol("CheckboxGroupContext"),ve=["indeterminate","skipGroup","id"],fe=["onMouseenter","onMouseleave","onInput","class","style"];const w=H({compatConfig:{MODE:3},name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:se(),setup:function(a,r){var s=r.emit,i=r.attrs,g=r.slots,x=r.expose,C=D(),c=K("checkbox",a),o=c.prefixCls,b=c.direction,u=Y(W,void 0),k=Symbol("checkboxUniId");Z(function(){!a.skipGroup&&u&&u.registerValue(k,a.value)}),ee(function(){u&&u.cancelValue(k)}),ae(function(){ne(a.checked!==void 0||u||a.value===void 0,"Checkbox","`value` is not validate prop, do you mean `checked`?")});var V=function(e){var n=e.target.checked;s("update:checked",n),s("change",e)},I=M(),O=function(){var e;(e=I.value)===null||e===void 0||e.focus()},A=function(){var e;(e=I.value)===null||e===void 0||e.blur()};return x({focus:O,blur:A}),function(){var h,e,n=te((h=g.default)===null||h===void 0?void 0:h.call(g)),d=a.indeterminate,v=a.skipGroup,f=a.id,l=f===void 0?C.id.value:f,y=U(a,ve),P=i.onMouseenter,F=i.onMouseleave;i.onInput;var G=i.class,X=i.style,q=U(i,fe),p=m(m({},y),{},{id:l,prefixCls:o.value},q);u&&!v?(p.onChange=function(){for(var E=arguments.length,N=new Array(E),B=0;B<E;B++)N[B]=arguments[B];s.apply(void 0,["change"].concat(N)),u.toggleOption({label:n,value:a.value})},p.name=u.name.value,p.checked=u.mergedValue.value.indexOf(a.value)!==-1,p.disabled=a.disabled||u.disabled.value,p.indeterminate=d):p.onChange=V;var z=R((e={},S(e,"".concat(o.value,"-wrapper"),!0),S(e,"".concat(o.value,"-rtl"),b.value==="rtl"),S(e,"".concat(o.value,"-wrapper-checked"),p.checked),S(e,"".concat(o.value,"-wrapper-disabled"),p.disabled),e),G),J=R(S({},"".concat(o.value,"-indeterminate"),d));return _("label",{class:z,style:X,onMouseenter:P,onMouseleave:F},[_(le,m(m({},p),{},{class:J,ref:I}),null),n.length?_("span",null,[n]):null])}}}),$=H({compatConfig:{MODE:3},name:"ACheckboxGroup",props:ce(),setup:function(a,r){var s=r.slots,i=r.emit,g=r.expose,x=D(),C=K("checkbox",a),c=C.prefixCls,o=C.direction,b=M((a.value===void 0?a.defaultValue:a.value)||[]);T(function(){return a.value},function(){b.value=a.value||[]});var u=j(function(){return a.options.map(function(e){return typeof e=="string"||typeof e=="number"?{label:e,value:e}:e})}),k=M(Symbol()),V=M(new Map),I=function(n){V.value.delete(n),k.value=Symbol()},O=function(n,d){V.value.set(n,d),k.value=Symbol()},A=M(new Map);T(k,function(){var e=new Map,n=oe(V.value.values()),d;try{for(n.s();!(d=n.n()).done;){var v=d.value;e.set(v,!0)}}catch(f){n.e(f)}finally{n.f()}A.value=e});var h=function(n){var d=b.value.indexOf(n.value),v=ue(b.value);d===-1?v.push(n.value):v.splice(d,1),a.value===void 0&&(b.value=v);var f=v.filter(function(l){return A.value.has(l)}).sort(function(l,y){var P=u.value.findIndex(function(G){return G.value===l}),F=u.value.findIndex(function(G){return G.value===y});return P-F});i("update:value",f),i("change",f),x.onFieldChange()};return re(W,{cancelValue:I,registerValue:O,toggleOption:h,mergedValue:b,name:j(function(){return a.name}),disabled:j(function(){return a.disabled})}),g({mergedValue:b}),function(){var e,n=a.id,d=n===void 0?x.id.value:n,v=null,f="".concat(c.value,"-group");return u.value&&u.value.length>0&&(v=u.value.map(function(l){var y;return _(w,{prefixCls:c.value,key:l.value.toString(),disabled:"disabled"in l?l.disabled:a.disabled,indeterminate:l.indeterminate,value:l.value,checked:b.value.indexOf(l.value)!==-1,onChange:l.onChange,class:"".concat(f,"-item")},{default:function(){return[l.label===void 0?(y=s.label)===null||y===void 0?void 0:y.call(s,l):l.label]}})})),_("div",{class:[f,S({},"".concat(f,"-rtl"),o.value==="rtl")],id:d},[v||((e=s.default)===null||e===void 0?void 0:e.call(s))])}}});w.Group=$;w.install=function(t){return t.component(w.name,w),t.component($.name,$),t};export{w as C,$ as a};
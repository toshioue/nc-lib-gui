import{f as F,aK as S,g as h,aT as j,aL as d,b as s,gz as U,i4 as V,r as W,F as z,al as K,gV as L,aO as N,cu as q}from"./B2hUoZAs.js";var G=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},m=F({compatConfig:{MODE:3},name:"ACheckableTag",props:G(),setup:function(e,i){var l=i.slots,r=i.emit,g=S("tag",e),u=g.prefixCls,o=function(f){var v=e.checked;r("update:checked",!v),r("change",!v),r("click",f)},p=h(function(){var n;return j(u.value,(n={},d(n,"".concat(u.value,"-checkable"),!0),d(n,"".concat(u.value,"-checkable-checked"),e.checked),n))});return function(){var n;return s("span",{class:p.value,onClick:o},[(n=l.default)===null||n===void 0?void 0:n.call(l)])}}}),H=new RegExp("^(".concat(U.join("|"),")(-inverse)?$")),J=new RegExp("^(".concat(V.join("|"),")$")),Q=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:N.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:N.any}},C=F({compatConfig:{MODE:3},name:"ATag",props:Q(),slots:["closeIcon","icon"],setup:function(e,i){var l=i.slots,r=i.emit,g=i.attrs,u=S("tag",e),o=u.prefixCls,p=u.direction,n=W(!0);z(function(){e.visible!==void 0&&(n.value=e.visible)});var f=function(t){t.stopPropagation(),r("update:visible",!1),r("close",t),!t.defaultPrevented&&e.visible===void 0&&(n.value=!1)},v=h(function(){var a=e.color;return a?H.test(a)||J.test(a):!1}),E=h(function(){var a;return j(o.value,(a={},d(a,"".concat(o.value,"-").concat(e.color),v.value),d(a,"".concat(o.value,"-has-color"),e.color&&!v.value),d(a,"".concat(o.value,"-hidden"),!n.value),d(a,"".concat(o.value,"-rtl"),p.value==="rtl"),a))});return function(){var a,t,k,b=e.icon,O=b===void 0?(a=l.icon)===null||a===void 0?void 0:a.call(l):b,y=e.color,P=e.closeIcon,I=P===void 0?(t=l.closeIcon)===null||t===void 0?void 0:t.call(l):P,T=e.closable,R=T===void 0?!1:T,w=function(){return R?I?s("span",{class:"".concat(o.value,"-close-icon"),onClick:f},[I]):s(q,{class:"".concat(o.value,"-close-icon"),onClick:f},null):null},B={backgroundColor:y&&!v.value?y:void 0},x=O||null,_=(k=l.default)===null||k===void 0?void 0:k.call(l),A=x?s(K,null,[x,s("span",null,[_])]):_,D="onClick"in g,$=s("span",{class:E.value,style:B},[A,w()]);return D?s(L,null,{default:function(){return[$]}}):$}}});C.CheckableTag=m;C.install=function(c){return c.component(C.name,C),c.component(m.name,m),c};export{C as T};
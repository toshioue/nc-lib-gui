import{al as P,aZ as j,f as z,eA as A,cb as g,r as w,g as S,H as U,am as $,i as D,b1 as E,an as o,b as s,ao as C,aX as H,bV as L,cd as _,gu as R,aR as u,cy as p}from"./3QBYHahY.js";import{u as W}from"./xnDaHwV-.js";var G=j("small","default"),X=function(){return{id:String,prefixCls:String,size:u.oneOf(G),disabled:{type:Boolean,default:void 0},checkedChildren:u.any,unCheckedChildren:u.any,tabindex:u.oneOfType([u.string,u.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:u.oneOfType([u.string,u.number,u.looseBool]),checkedValue:u.oneOfType([u.string,u.number,u.looseBool]).def(!0),unCheckedValue:u.oneOfType([u.string,u.number,u.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}},Z=z({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:X(),slots:["checkedChildren","unCheckedChildren"],setup:function(n,r){var d=r.attrs,m=r.slots,B=r.expose,l=r.emit,y=W();A(function(){g(!("defaultChecked"in d),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),g(!("value"in d),"Switch","`value` is not validate prop, do you mean `checked`?")});var h=w(n.checked!==void 0?n.checked:d.defaultChecked),f=S(function(){return h.value===n.checkedValue});U(function(){return n.checked},function(){h.value=n.checked});var v=$("switch",n),c=v.prefixCls,F=v.direction,V=v.size,i=w(),b=function(){var e;(e=i.value)===null||e===void 0||e.focus()},T=function(){var e;(e=i.value)===null||e===void 0||e.blur()};B({focus:b,blur:T}),D(function(){E(function(){n.autofocus&&!n.disabled&&i.value.focus()})});var k=function(e,t){n.disabled||(l("update:checked",e),l("change",e,t),y.onFieldChange())},I=function(e){l("blur",e)},N=function(e){b();var t=f.value?n.unCheckedValue:n.checkedValue;k(t,e),l("click",t,e)},M=function(e){e.keyCode===p.LEFT?k(n.unCheckedValue,e):e.keyCode===p.RIGHT&&k(n.checkedValue,e),l("keydown",e)},O=function(e){var t;(t=i.value)===null||t===void 0||t.blur(),l("mouseup",e)},K=S(function(){var a;return a={},o(a,"".concat(c.value,"-small"),V.value==="small"),o(a,"".concat(c.value,"-loading"),n.loading),o(a,"".concat(c.value,"-checked"),f.value),o(a,"".concat(c.value,"-disabled"),n.disabled),o(a,c.value,!0),o(a,"".concat(c.value,"-rtl"),F.value==="rtl"),a});return function(){var a;return s(R,{insertExtraNode:!0},{default:function(){return[s("button",C(C(C({},H(n,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),d),{},{id:(a=n.id)!==null&&a!==void 0?a:y.id.value,onKeydown:M,onClick:N,onBlur:I,onMouseup:O,type:"button",role:"switch","aria-checked":h.value,disabled:n.disabled||n.loading,class:[d.class,K.value],ref:i}),[s("div",{class:"".concat(c.value,"-handle")},[n.loading?s(L,{class:"".concat(c.value,"-loading-icon")},null):null]),s("span",{class:"".concat(c.value,"-inner")},[f.value?_(m,n,"checkedChildren"):_(m,n,"unCheckedChildren")])])]}})}}});const Q=P(Z);export{Q as _};
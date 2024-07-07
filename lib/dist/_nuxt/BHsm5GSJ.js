import{aO as x,aW as J,f as q,c7 as Y,bO as Q,r as U,b1 as X,H as ee,aK as Z,g as ae,aT as M,aL as o,b as u,aM as N,fu as ne,aZ as te,cn as le,fv as ie,aR as H,b8 as oe,b4 as re,aY as ce,F as se,dq as de,R as ue,aB as ve,cD as fe}from"./BLdk6lRf.js";var pe=function(){return{prefixCls:String,activeKey:{type:[Array,Number,String]},defaultActiveKey:{type:[Array,Number,String]},accordion:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},expandIcon:Function,openAnimation:x.object,expandIconPosition:x.oneOf(J("left","right")),collapsible:{type:String},ghost:{type:Boolean,default:void 0},onChange:Function,"onUpdate:activeKey":Function}},z=function(){return{openAnimation:x.object,prefixCls:String,header:x.any,headerClass:String,showArrow:{type:Boolean,default:void 0},isActive:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},accordion:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},expandIcon:Function,extra:x.any,panelKey:x.oneOfType([x.string,x.number]),collapsible:{type:String},role:String,onItemClick:{type:Function}}};function L(v){var e=v;if(!Array.isArray(e)){var s=te(e);e=s==="number"||s==="string"?[e]:[]}return e.map(function(l){return String(l)})}const F=q({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:Y(pe(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,openAnimation:Q("ant-motion-collapse",!1),expandIconPosition:"left"}),slots:["expandIcon"],setup:function(e,s){var l=s.attrs,b=s.slots,f=s.emit,p=U(L(X([e.activeKey,e.defaultActiveKey])));ee(function(){return e.activeKey},function(){p.value=L(e.activeKey)},{deep:!0});var y=Z("collapse",e),r=y.prefixCls,g=y.direction,A=ae(function(){var t=e.expandIconPosition;return t!==void 0?t:g.value==="rtl"?"right":"left"}),m=function(a){var n=e.expandIcon,c=n===void 0?b.expandIcon:n,i=c?c(a):u(oe,{rotate:a.isActive?90:void 0},null);return u("div",null,[re(Array.isArray(c)?i[0]:i)?H(i,{class:"".concat(r.value,"-arrow")},!1):i])},P=function(a){e.activeKey===void 0&&(p.value=a);var n=e.accordion?a[0]:a;f("update:activeKey",n),f("change",n)},h=function(a){var n=p.value;if(e.accordion)n=n[0]===a?[]:[a];else{n=ce(n);var c=n.indexOf(a),i=c>-1;i?n.splice(c,1):n.push(a)}P(n)},S=function(a,n){var c,i,K;if(!ie(a)){var E=p.value,w=e.accordion,O=e.destroyInactivePanel,R=e.collapsible,D=e.openAnimation,C=String((c=a.key)!==null&&c!==void 0?c:n),I=a.props||{},d=I.header,T=d===void 0?(i=a.children)===null||i===void 0||(K=i.header)===null||K===void 0?void 0:K.call(i):d,V=I.headerClass,_=I.collapsible,j=I.disabled,k=!1;w?k=E[0]===C:k=E.indexOf(C)>-1;var $=_??R;(j||j==="")&&($="disabled");var G={key:C,panelKey:C,header:T,headerClass:V,isActive:k,prefixCls:r.value,destroyInactivePanel:O,openAnimation:D,accordion:w,onItemClick:$==="disabled"?null:h,expandIcon:m,collapsible:$};return H(a,G)}},B=function(){var a;return le((a=b.default)===null||a===void 0?void 0:a.call(b)).map(S)};return function(){var t,a=e.accordion,n=e.bordered,c=e.ghost,i=M((t={},o(t,r.value,!0),o(t,"".concat(r.value,"-borderless"),!n),o(t,"".concat(r.value,"-icon-position-").concat(A.value),!0),o(t,"".concat(r.value,"-rtl"),g.value==="rtl"),o(t,"".concat(r.value,"-ghost"),!!c),o(t,l.class,!!l.class),t));return u("div",N(N({class:i},ne(l)),{},{style:l.style,role:a?"tablist":null}),[B()])}}}),ye=q({compatConfig:{MODE:3},name:"PanelContent",props:z(),setup:function(e,s){var l=s.slots,b=U(!1);return se(function(){(e.isActive||e.forceRender)&&(b.value=!0)}),function(){var f,p;if(!b.value)return null;var y=e.prefixCls,r=e.isActive,g=e.role;return u("div",{ref:U,class:M("".concat(y,"-content"),(f={},o(f,"".concat(y,"-content-active"),r),o(f,"".concat(y,"-content-inactive"),!r),f)),role:g},[u("div",{class:"".concat(y,"-content-box")},[(p=l.default)===null||p===void 0?void 0:p.call(l)])])}}}),W=q({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:Y(z(),{showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1}),slots:["expandIcon","extra","header"],setup:function(e,s){var l=s.slots,b=s.emit,f=s.attrs;de(e.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var p=Z("collapse",e),y=p.prefixCls,r=function(){b("itemClick",e.panelKey)},g=function(m){(m.key==="Enter"||m.keyCode===13||m.which===13)&&r()};return function(){var A,m,P,h,S=e.header,B=S===void 0?(A=l.header)===null||A===void 0?void 0:A.call(l):S,t=e.headerClass,a=e.isActive,n=e.showArrow,c=e.destroyInactivePanel,i=e.accordion,K=e.forceRender,E=e.openAnimation,w=e.expandIcon,O=w===void 0?l.expandIcon:w,R=e.extra,D=R===void 0?(m=l.extra)===null||m===void 0?void 0:m.call(l):R,C=e.collapsible,I=C==="disabled",d=y.value,T=M("".concat(d,"-header"),(P={},o(P,t,t),o(P,"".concat(d,"-header-collapsible-only"),C==="header"),P)),V=M((h={},o(h,"".concat(d,"-item"),!0),o(h,"".concat(d,"-item-active"),a),o(h,"".concat(d,"-item-disabled"),I),o(h,"".concat(d,"-no-arrow"),!n),o(h,"".concat(f.class),!!f.class),h)),_=u("i",{class:"arrow"},null);n&&typeof O=="function"&&(_=O(e));var j=ue(u(ye,{prefixCls:d,isActive:a,forceRender:K,role:i?"tabpanel":null},{default:l.default}),[[ve,a]]),k=N({appear:!1,css:!1},E);return u("div",N(N({},f),{},{class:V}),[u("div",{class:T,onClick:function(){return C!=="header"&&r()},role:i?"tab":"button",tabindex:I?-1:0,"aria-expanded":a,onKeypress:g},[n&&_,C==="header"?u("span",{onClick:r,class:"".concat(d,"-header-text")},[B]):B,D&&u("div",{class:"".concat(d,"-extra")},[D])]),u(fe,k,{default:function(){return[!c||a?j:null]}})])}}});F.Panel=W;F.install=function(v){return v.component(F.name,F),v.component(W.name,W),v};export{F as C,W as _};
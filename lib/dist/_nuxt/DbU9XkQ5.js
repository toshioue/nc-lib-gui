import{b as y,b2 as Ue,gx as Ce,gy as Me,an as p,f as pe,r as D,l as Be,cz as qe,aW as O,ao as N,bX as He,cm as Ie,b0 as ze,g as ue,aQ as je,H as Q,aS as Ve,cy as le,c6 as Ge,am as Le,aX as We,aU as Xe,aR as fe}from"./3QBYHahY.js";import{D as Ke}from"./BEpKpjF5.js";import{u as Qe}from"./xnDaHwV-.js";var Ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};function xe(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),l.forEach(function(o){Je(a,o,t[o])})}return a}function Je(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var be=function(e,t){var l=xe({},e,t.attrs);return y(Ue,xe({},l,{icon:Ye}),null)};be.displayName="UpOutlined";be.inheritAttrs=!1;function me(){return typeof BigInt=="function"}function Y(a){var e=a.trim(),t=e.startsWith("-");t&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var l=e||"0",o=l.split("."),c=o[0]||"0",g=o[1]||"0";c==="0"&&g==="0"&&(t=!1);var f=t?"-":"";return{negative:t,negativeStr:f,trimStr:l,integerStr:c,decimalStr:g,fullStr:"".concat(f).concat(l)}}function he(a){var e=String(a);return!Number.isNaN(Number(e))&&e.includes("e")}function J(a){var e=String(a);if(he(a)){var t=Number(e.slice(e.indexOf("e-")+2)),l=e.match(/\.(\d+)/);return l!=null&&l[1]&&(t+=l[1].length),t}return e.includes(".")&&Se(e)?e.length-e.indexOf(".")-1:0}function ye(a){var e=String(a);if(he(a)){if(a>Number.MAX_SAFE_INTEGER)return String(me()?BigInt(a).toString():Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return String(me()?BigInt(a).toString():Number.MIN_SAFE_INTEGER);e=a.toFixed(J(e))}return Y(e).fullStr}function Se(a){return typeof a=="number"?!Number.isNaN(a):a?/^\s*-?\d+(\.\d+)?\s*$/.test(a)||/^\s*-?\d+\.\s*$/.test(a)||/^\s*-?\.\d+\s*$/.test(a):!1}function _e(a){return!a&&a!==0&&!Number.isNaN(a)||!String(a).trim()}var Ze=function(){function a(e){if(Me(this,a),p(this,"origin",""),_e(e)){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return Ce(a,[{key:"negate",value:function(){return new a(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new a(t);var l=Number(t);if(Number.isNaN(l))return this;var o=this.number+l;if(o>Number.MAX_SAFE_INTEGER)return new a(Number.MAX_SAFE_INTEGER);if(o<Number.MIN_SAFE_INTEGER)return new a(Number.MIN_SAFE_INTEGER);var c=Math.max(J(this.number),J(l));return new a(o.toFixed(c))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":ye(this.number):this.origin}}]),a}(),et=function(){function a(e){if(Me(this,a),p(this,"origin",""),_e(e)){this.empty=!0;return}if(this.origin=String(e),e==="-"||Number.isNaN(e)){this.nan=!0;return}var t=e;if(he(t)&&(t=Number(t)),t=typeof t=="string"?t:ye(t),Se(t)){var l=Y(t);this.negative=l.negative;var o=l.trimStr.split(".");this.integer=BigInt(o[0]);var c=o[1]||"0";this.decimal=BigInt(c),this.decimalLen=c.length}else this.nan=!0}return Ce(a,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var l="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(l)}},{key:"negate",value:function(){var t=new a(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new a(t);var l=new a(t);if(l.isInvalidate())return this;var o=Math.max(this.getDecimalStr().length,l.getDecimalStr().length),c=this.alignDecimal(o),g=l.alignDecimal(o),f=(c+g).toString(),v=Y(f),d=v.negativeStr,m=v.trimStr,i="".concat(d).concat(m.padStart(o+1,"0"));return new a("".concat(i.slice(0,-o),".").concat(i.slice(-o)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Y("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),a}();function A(a){return me()?new et(a):new Ze(a)}function ge(a,e,t){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(a==="")return"";var o=Y(a),c=o.negativeStr,g=o.integerStr,f=o.decimalStr,v="".concat(e).concat(f),d="".concat(c).concat(g);if(t>=0){var m=Number(f[t]);if(m>=5&&!l){var i=A(a).add("".concat(c,"0.").concat("0".repeat(t)).concat(10-m));return ge(i.toString(),e,t,l)}return t===0?d:"".concat(d).concat(e).concat(f.padEnd(t,"0").slice(0,t))}return v===".0"?d:"".concat(d).concat(v)}var tt=200,nt=600;const at=pe({compatConfig:{MODE:3},name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,t){var l=t.slots,o=t.emit,c=D(),g=function(d,m){d.preventDefault(),o("step",m);function i(){o("step",m),c.value=setTimeout(i,tt)}c.value=setTimeout(i,nt)},f=function(){clearTimeout(c.value)};return Be(function(){f()}),function(){if(qe())return null;var v=e.prefixCls,d=e.upDisabled,m=e.downDisabled,i="".concat(v,"-handler"),V=O(i,"".concat(i,"-up"),p({},"".concat(i,"-up-disabled"),d)),_=O(i,"".concat(i,"-down"),p({},"".concat(i,"-down-disabled"),m)),C={unselectable:"on",role:"button",onMouseup:f,onMouseleave:f},x=l.upNode,k=l.downNode;return y("div",{class:"".concat(i,"-wrap")},[y("span",N(N({},C),{},{onMousedown:function(M){g(M,!0)},"aria-label":"Increase Value","aria-disabled":d,class:V}),[(x==null?void 0:x())||y("span",{unselectable:"on",class:"".concat(v,"-handler-up-inner")},null)]),y("span",N(N({},C),{},{onMousedown:function(M){g(M,!1)},"aria-label":"Decrease Value","aria-disabled":m,class:_}),[(k==null?void 0:k())||y("span",{unselectable:"on",class:"".concat(v,"-handler-down-inner")},null)])])}}});function rt(a,e){var t=D(null);function l(){try{var c=a.value,g=c.selectionStart,f=c.selectionEnd,v=c.value,d=v.substring(0,g),m=v.substring(f);t.value={start:g,end:f,value:v,beforeTxt:d,afterTxt:m}}catch{}}function o(){if(a.value&&t.value&&e.value)try{var c=a.value.value,g=t.value,f=g.beforeTxt,v=g.afterTxt,d=g.start,m=c.length;if(c.endsWith(v))m=c.length-t.value.afterTxt.length;else if(c.startsWith(f))m=f.length;else{var i=f[d-1],V=c.indexOf(i,d-1);V!==-1&&(m=V+1)}a.value.setSelectionRange(m,m)}catch(_){He(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(_.message))}}return[l,o]}const it=function(){var a=D(0),e=function(){Ie.cancel(a.value)};return Be(function(){e()}),function(t){e(),a.value=Ie(function(){t()})}};var ut=["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"],Ee=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},we=function(e){var t=A(e);return t.isInvalidate()?null:t},Ae=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}};const lt=pe({compatConfig:{MODE:3},name:"InnerInputNumber",inheritAttrs:!1,props:N(N({},Ae()),{},{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,t){var l=t.attrs,o=t.slots,c=t.emit,g=t.expose,f=D(),v=D(!1),d=D(!1),m=D(!1),i=D(A(e.value));function V(u){e.value===void 0&&(i.value=u)}var _=function(n,s){if(!s)return e.precision>=0?e.precision:Math.max(J(n),J(e.step))},C=function(n){var s=String(n);if(e.parser)return e.parser(s);var r=s;return e.decimalSeparator&&(r=r.replace(e.decimalSeparator,".")),r.replace(/[^\w.-]+/g,"")},x=D(""),k=function(n,s){if(e.formatter)return e.formatter(n,{userTyping:s,input:String(x.value)});var r=typeof n=="number"?ye(n):n;if(!s){var I=_(r,s);if(Se(r)&&(e.decimalSeparator||I>=0)){var S=e.decimalSeparator||".";r=ge(r,S,I)}}return r},j=function(){var u=e.value;return i.value.isInvalidate()&&["string","number"].includes(ze(u))?Number.isNaN(u)?"":u:k(i.value.toString(),!1)}();x.value=j;function M(u,n){x.value=k(u.isInvalidate()?u.toString(!1):u.toString(!n),n)}var P=ue(function(){return we(e.max)}),E=ue(function(){return we(e.min)}),h=ue(function(){return!P.value||!i.value||i.value.isInvalidate()?!1:P.value.lessEquals(i.value)}),R=ue(function(){return!E.value||!i.value||i.value.isInvalidate()?!1:i.value.lessEquals(E.value)}),F=rt(f,v),w=je(F,2),T=w[0],Z=w[1],U=function(n){return P.value&&!n.lessEquals(P.value)?P.value:E.value&&!E.value.lessEquals(n)?E.value:null},q=function(n){return!U(n)},H=function(n,s){var r=n,I=q(r)||r.isEmpty();if(!r.isEmpty()&&!s&&(r=U(r)||r,I=!0),!e.readonly&&!e.disabled&&I){var S=r.toString(),B=_(S,s);if(B>=0&&(r=A(ge(S,".",B))),!r.equals(i.value)){var $;V(r),($=e.onChange)===null||$===void 0||$.call(e,r.isEmpty()?null:Ee(e.stringMode,r)),e.value===void 0&&M(r,s)}return r}return i.value},G=it(),L=function u(n){var s;if(T(),x.value=n,!m.value){var r=C(n),I=A(r);I.isNaN()||H(I,!0)}(s=e.onInput)===null||s===void 0||s.call(e,n),G(function(){var S=n;e.parser||(S=n.replace(/。/g,".")),S!==n&&u(S)})},W=function(){m.value=!0},ee=function(){m.value=!1,L(f.value.value)},X=function(n){L(n.target.value)},K=function(n){var s,r;if(!(n&&h.value||!n&&R.value)){d.value=!1;var I=A(e.step);n||(I=I.negate());var S=(i.value||A(0)).add(I.toString()),B=H(S,!1);(s=e.onStep)===null||s===void 0||s.call(e,Ee(e.stringMode,B),{offset:e.step,type:n?"up":"down"}),(r=f.value)===null||r===void 0||r.focus()}},te=function(n){var s=A(C(x.value)),r=s;s.isNaN()?r=i.value:r=H(s,n),e.value!==void 0?M(i.value,!1):r.isNaN()||M(r,!1)},oe=function(n){var s=n.which;if(d.value=!0,s===le.ENTER){var r;m.value||(d.value=!1),te(!1),(r=e.onPressEnter)===null||r===void 0||r.call(e,n)}e.keyboard!==!1&&!m.value&&[le.UP,le.DOWN].includes(s)&&(K(le.UP===s),n.preventDefault())},b=function(){d.value=!1},z=function(n){te(!1),v.value=!1,d.value=!1,c("blur",n)};return Q(function(){return e.precision},function(){i.value.isInvalidate()||M(i.value,!1)},{flush:"post"}),Q(function(){return e.value},function(){var u=A(e.value);i.value=u;var n=A(C(x.value));(!u.equals(n)||!d.value||e.formatter)&&M(u,d.value)},{flush:"post"}),Q(x,function(){e.formatter&&Z()},{flush:"post"}),Q(function(){return e.disabled},function(u){u&&(v.value=!1)}),g({focus:function(){var n;(n=f.value)===null||n===void 0||n.focus()},blur:function(){var n;(n=f.value)===null||n===void 0||n.blur()}}),function(){var u,n=N(N({},l),e),s=n.prefixCls,r=s===void 0?"rc-input-number":s,I=n.min,S=n.max,B=n.step,$=B===void 0?1:B;n.defaultValue,n.value;var ne=n.disabled,ae=n.readonly;n.keyboard;var re=n.controls,se=re===void 0?!0:re,ie=n.autofocus;n.stringMode,n.parser,n.formatter,n.precision,n.decimalSeparator,n.onChange,n.onInput,n.onPressEnter,n.onStep;var Fe=n.lazy,ke=n.class,$e=n.style,Pe=Ve(n,ut),Oe=o.upHandler,Re=o.downHandler,Ne="".concat(r,"-input"),ce={};return Fe?ce.onChange=X:ce.onInput=X,y("div",{class:O(r,ke,(u={},p(u,"".concat(r,"-focused"),v.value),p(u,"".concat(r,"-disabled"),ne),p(u,"".concat(r,"-readonly"),ae),p(u,"".concat(r,"-not-a-number"),i.value.isNaN()),p(u,"".concat(r,"-out-of-range"),!i.value.isInvalidate()&&!q(i.value)),u)),style:$e,onKeydown:oe,onKeyup:b},[se&&y(at,{prefixCls:r,upDisabled:h.value,downDisabled:R.value,onStep:K},{upNode:Oe,downNode:Re}),y("div",{class:"".concat(Ne,"-wrap")},[y("input",N(N(N({autofocus:ie,autocomplete:"off",role:"spinbutton","aria-valuemin":I,"aria-valuemax":S,"aria-valuenow":i.value.isInvalidate()?null:i.value.toString(),step:$},Pe),{},{ref:f,class:Ne,value:x.value,disabled:ne,readonly:ae,onFocus:function(Te){v.value=!0,c("focus",Te)}},ce),{},{onBlur:z,onCompositionstart:W,onCompositionend:ee}),null)])])}}});function ve(a){return a!=null}var ot=["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"],De=Ae(),st=function(){return N(N({},De),{},{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:fe.any,addonAfter:fe.any,prefix:fe.any,"onUpdate:value":De.onChange,valueModifiers:Object})},de=pe({compatConfig:{MODE:3},name:"AInputNumber",inheritAttrs:!1,props:st(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,t){var l=t.emit,o=t.expose,c=t.attrs,g=t.slots,f=Qe(),v=Le("input-number",e),d=v.prefixCls,m=v.size,i=v.direction,V=D(e.value===void 0?e.defaultValue:e.value),_=D(!1);Q(function(){return e.value},function(){V.value=e.value});var C=D(null),x=function(){var h;(h=C.value)===null||h===void 0||h.focus()},k=function(){var h;(h=C.value)===null||h===void 0||h.blur()};o({focus:x,blur:k});var j=function(h){e.value===void 0&&(V.value=h),l("update:value",h),l("change",h),f.onFieldChange()},M=function(h){_.value=!1,l("blur",h),f.onFieldBlur()},P=function(h){_.value=!0,l("focus",h)};return function(){var E,h,R,F,w=N(N({},c),e),T=w.class,Z=w.bordered,U=w.readonly,q=w.style,H=w.addonBefore,G=H===void 0?(E=g.addonBefore)===null||E===void 0?void 0:E.call(g):H,L=w.addonAfter,W=L===void 0?(h=g.addonAfter)===null||h===void 0?void 0:h.call(g):L,ee=w.prefix,X=ee===void 0?(R=g.prefix)===null||R===void 0?void 0:R.call(g):ee,K=w.valueModifiers,te=K===void 0?{}:K,oe=Ve(w,ot),b=d.value,z=m.value,u=O((F={},p(F,"".concat(b,"-lg"),z==="large"),p(F,"".concat(b,"-sm"),z==="small"),p(F,"".concat(b,"-rtl"),i.value==="rtl"),p(F,"".concat(b,"-readonly"),U),p(F,"".concat(b,"-borderless"),!Z),F),T),n=y(lt,N(N({},We(oe,["size","defaultValue"])),{},{ref:C,lazy:!!te.lazy,value:V.value,class:u,prefixCls:b,readonly:U,onChange:j,onBlur:M,onFocus:P}),{upHandler:function(){return y(be,{class:"".concat(b,"-handler-up-inner")},null)},downHandler:function(){return y(Ke,{class:"".concat(b,"-handler-down-inner")},null)}}),s=ve(G)||ve(W);if(ve(X)){var r,I=O("".concat(b,"-affix-wrapper"),(r={},p(r,"".concat(b,"-affix-wrapper-focused"),_.value),p(r,"".concat(b,"-affix-wrapper-disabled"),e.disabled),p(r,"".concat(b,"-affix-wrapper-rtl"),i.value==="rtl"),p(r,"".concat(b,"-affix-wrapper-readonly"),U),p(r,"".concat(b,"-affix-wrapper-borderless"),!Z),p(r,"".concat(T),!s&&T),r));n=y("div",{class:I,style:q,onMouseup:function(){return C.value.focus()}},[y("span",{class:"".concat(b,"-prefix")},[X]),n])}if(s){var S,B="".concat(b,"-group"),$="".concat(B,"-addon"),ne=G?y("div",{class:$},[G]):null,ae=W?y("div",{class:$},[W]):null,re=O("".concat(b,"-wrapper"),B,p({},"".concat(B,"-rtl"),i.value==="rtl")),se=O("".concat(b,"-group-wrapper"),(S={},p(S,"".concat(b,"-group-wrapper-sm"),z==="small"),p(S,"".concat(b,"-group-wrapper-lg"),z==="large"),p(S,"".concat(b,"-group-wrapper-rtl"),i.value==="rtl"),S),T);n=y("div",{class:se,style:q},[y("div",{class:re},[ne,n,ae])])}return Xe(n,{style:q})}}});const mt=Ge(de,{install:function(e){return e.component(de.name,de),e}});export{mt as _};
import{f as Y,r as Q,i as se,aP as ee,aM as b,b as f,cl as X,a$ as de,aj as Ne,H as ue,g as W,aL as I,ed as Ze,aK as ke,aT as qe,gM as $e,aZ as ie,l as Ge,cb as re,a_ as Ce,F as Je,c9 as ce,cs as Qe,aN as Ye,aU as Pe,al as xe,bX as et,cc as tt,a1 as le,gN as nt,gO as at}from"./DKhUGBot.js";import{_ as it}from"./BpnlUwoJ.js";import{C as rt}from"./DX_5E9FR.js";var lt=["noStyle","disabled"],ot={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Se=Y({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(e,n){var i=n.slots,o=n.emit,u=n.attrs,c=n.expose,d=Q(),m=function(E){var _=E.keyCode;_===X.ENTER&&E.preventDefault()},r=function(E){var _=E.keyCode;_===X.ENTER&&o("click",E)},y=function(E){o("click",E)},S=function(){d.value&&d.value.focus()},T=function(){d.value&&d.value.blur()};return se(function(){e.autofocus&&S()}),c({focus:S,blur:T}),function(){var O,E=e.noStyle,_=e.disabled,s=ee(e,lt),g={};return E||(g=b({},ot)),_&&(g.pointerEvents="none"),f("div",b(b(b({role:"button",tabindex:0,ref:d},s),u),{},{onClick:y,onKeydown:m,onKeyup:r,style:b(b({},g),u.style||{})}),[(O=i.default)===null||O===void 0?void 0:O.call(i)])}}}),ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};function Ee(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),i.forEach(function(o){ct(t,o,n[o])})}return t}function ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var fe=function(e,n){var i=Ee({},e,n.attrs);return f(de,Ee({},i,{icon:ut}),null)};fe.displayName="EnterOutlined";fe.inheritAttrs=!1;var st=function(){return{prefixCls:String,value:String,maxlength:Number,autoSize:{type:[Boolean,Object]},onSave:Function,onCancel:Function,onEnd:Function,onChange:Function,originContent:String,direction:String}},dt=Y({compatConfig:{MODE:3},name:"Editable",props:st(),setup:function(e,n){var i=n.emit,o=n.slots,u=Ne({current:e.value||"",lastKeyCode:void 0,inComposition:!1,cancelFlag:!1});ue(function(){return e.value},function(s){u.current=s});var c=Q();se(function(){if(c.value){var s,g=(s=c.value)===null||s===void 0?void 0:s.resizableTextArea,B=g==null?void 0:g.textArea;B.focus();var A=B.value.length;B.setSelectionRange(A,A)}});function d(s){c.value=s}function m(s){var g=s.target.value;u.current=g.replace(/[\r\n]/g,""),i("change",u.current)}function r(){u.inComposition=!0}function y(){u.inComposition=!1}function S(s){var g=s.keyCode;g===X.ENTER&&s.preventDefault(),!u.inComposition&&(u.lastKeyCode=g)}function T(s){var g=s.keyCode,B=s.ctrlKey,A=s.altKey,p=s.metaKey,x=s.shiftKey;u.lastKeyCode===g&&!u.inComposition&&!B&&!A&&!p&&!x&&(g===X.ENTER?(E(),i("end")):g===X.ESC&&(u.current=e.originContent,i("cancel")))}function O(){E()}function E(){i("save",u.current.trim())}var _=W(function(){var s;return s={},I(s,"".concat(e.prefixCls),!0),I(s,"".concat(e.prefixCls,"-edit-content"),!0),I(s,"".concat(e.prefixCls,"-rtl"),e.direction==="rtl"),s});return function(){return f("div",{class:_.value},[f(it,{ref:d,maxlength:e.maxlength,value:u.current,onChange:m,onKeydown:S,onKeyup:T,onCompositionstart:r,onCompositionend:y,onBlur:O,rows:1,autoSize:e.autoSize===void 0||e.autoSize},null),o.enterIcon?o.enterIcon({className:"".concat(e.prefixCls,"-edit-content-confirm")}):f(fe,{class:"".concat(e.prefixCls,"-edit-content-confirm")},null)])}}}),ft=3,pt=8,$,oe={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function vt(t){var e=Array.prototype.slice.apply(t);return e.map(function(n){return"".concat(n,": ").concat(t.getPropertyValue(n),";")}).join("")}function De(t,e){t.setAttribute("aria-hidden","true");var n=window.getComputedStyle(e),i=vt(n);t.setAttribute("style",i),t.style.position="fixed",t.style.left="0",t.style.height="auto",t.style.minHeight="auto",t.style.maxHeight="auto",t.style.paddingTop="0",t.style.paddingBottom="0",t.style.borderTopWidth="0",t.style.borderBottomWidth="0",t.style.top="-999999px",t.style.zIndex="-1000",t.style.textOverflow="clip",t.style.whiteSpace="normal",t.style.webkitLineClamp="none"}function yt(t){var e=document.createElement("div");De(e,t),e.appendChild(document.createTextNode("text")),document.body.appendChild(e);var n=e.getBoundingClientRect().height;return document.body.removeChild(e),n}const mt=function(t,e,n,i,o){$||($=document.createElement("div"),$.setAttribute("aria-hidden","true"),document.body.appendChild($));var u=e.rows,c=e.suffix,d=c===void 0?"":c,m=yt(t),r=Math.round(m*u*100)/100;De($,t);var y=Ze({render:function(){return f("div",{style:oe},[f("span",{style:oe},[n,d]),f("span",{style:oe},[i])])}});y.mount($);function S(){var p=Math.round($.getBoundingClientRect().height*100)/100;return p-.1<=r}if(S())return y.unmount(),{content:n,text:$.innerHTML,ellipsis:!1};var T=Array.prototype.slice.apply($.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(p){var x=p.nodeType,N=p.data;return x!==pt&&N!==""}),O=Array.prototype.slice.apply($.childNodes[0].childNodes[1].cloneNode(!0).childNodes);y.unmount();var E=[];$.innerHTML="";var _=document.createElement("span");$.appendChild(_);var s=document.createTextNode(o+d);_.appendChild(s),O.forEach(function(p){$.appendChild(p)});function g(p){_.insertBefore(p,s)}function B(p,x){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,P=arguments.length>3&&arguments[3]!==void 0?arguments[3]:x.length,te=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,H=Math.floor((N+P)/2),Z=x.slice(0,H);if(p.textContent=Z,N>=P-1)for(var z=P;z>=N;z-=1){var F=x.slice(0,z);if(p.textContent=F,S()||!F)return z===x.length?{finished:!1,vNode:x}:{finished:!0,vNode:F}}return S()?B(p,x,H,P,H):B(p,x,N,H,te)}function A(p){var x=p.nodeType;if(x===ft){var N=p.textContent||"",P=document.createTextNode(N);return g(P),B(P,N)}return{finished:!1,vNode:null}}return T.some(function(p){var x=A(p),N=x.finished,P=x.vNode;return P&&E.push(P),N}),{content:E,text:$.innerHTML,ellipsis:!0}};var gt=["prefixCls","class","direction","component"],bt=function(){return{prefixCls:String,direction:String,component:String}},ht=Y({name:"ATypography",inheritAttrs:!1,props:bt(),setup:function(e,n){var i=n.slots,o=n.attrs,u=ke("typography",e),c=u.prefixCls,d=u.direction;return function(){var m,r=b(b({},e),o);r.prefixCls,r.class,r.direction;var y=r.component,S=y===void 0?"article":y,T=ee(r,gt);return f(S,b({class:qe(c.value,I({},"".concat(c.value,"-rtl"),d.value==="rtl"),o.class)},T),{default:function(){return[(m=i.default)===null||m===void 0?void 0:m.call(i)]}})}}}),Ct=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,i=[],o=0;o<e.rangeCount;o++)i.push(e.getRangeAt(o));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||i.forEach(function(u){e.addRange(u)}),n&&n.focus()}},we={"text/plain":"Text","text/html":"Url",default:"Text"},xt="Copy to clipboard: #{key}, Enter";function St(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Et(t,e){var n,i,o,u,c,d=!1;e||(e={});var m=e.debug||!1;try{i=Ct(),o=document.createRange(),u=document.getSelection(),c=document.createElement("span"),c.textContent=t,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(y){if(y.stopPropagation(),e.format)if(y.preventDefault(),typeof y.clipboardData>"u"){m&&console.warn("unable to use e.clipboardData"),m&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var S=we[e.format]||we.default;window.clipboardData.setData(S,t)}else y.clipboardData.clearData(),y.clipboardData.setData(e.format,t);e.onCopy&&(y.preventDefault(),e.onCopy(y.clipboardData))}),document.body.appendChild(c),o.selectNodeContents(c),u.addRange(o);var r=document.execCommand("copy");if(!r)throw new Error("copy command was unsuccessful");d=!0}catch(y){m&&console.error("unable to copy using execCommand: ",y),m&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(S){m&&console.error("unable to copy using clipboardData: ",S),m&&console.error("falling back to prompt"),n=St("message"in e?e.message:xt),window.prompt(n,t)}}finally{u&&(typeof u.removeRange=="function"?u.removeRange(o):u.removeAllRanges()),c&&document.body.removeChild(c),i()}return d}var wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};function Oe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),i.forEach(function(o){Ot(t,o,n[o])})}return t}function Ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var pe=function(e,n){var i=Oe({},e,n.attrs);return f(de,Oe({},i,{icon:wt}),null)};pe.displayName="CopyOutlined";pe.inheritAttrs=!1;var Tt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};function Te(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),i.forEach(function(o){_t(t,o,n[o])})}return t}function _t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ve=function(e,n){var i=Te({},e,n.attrs);return f(de,Te({},i,{icon:Tt}),null)};ve.displayName="EditOutlined";ve.inheritAttrs=!1;var Nt=["type","disabled","content","class","style"],kt=$e("webkitLineClamp"),$t=$e("textOverflow"),_e="...",Re=function(){return{editable:{type:[Boolean,Object],default:void 0},copyable:{type:[Boolean,Object],default:void 0},prefixCls:String,component:String,type:String,disabled:{type:Boolean,default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},code:{type:Boolean,default:void 0},mark:{type:Boolean,default:void 0},underline:{type:Boolean,default:void 0},delete:{type:Boolean,default:void 0},strong:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},content:String,"onUpdate:content":Function}},Pt=Y({compatConfig:{MODE:3},name:"Base",inheritAttrs:!1,props:Re(),setup:function(e,n){var i=n.slots,o=n.attrs,u=n.emit,c=ke("typography",e),d=c.prefixCls,m=c.direction,r=Ne({copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1,expandStr:"",copyStr:"",copiedStr:"",editStr:"",copyId:void 0,rafId:void 0,prevProps:void 0,originContent:""}),y=Q(),S=Q(),T=W(function(){var a=e.ellipsis;return a?b({rows:1,expandable:!1},ie(a)==="object"?a:null):{}});se(function(){r.clientRendered=!0}),Ge(function(){clearTimeout(r.copyId),re.cancel(r.rafId)}),ue([function(){return T.value.rows},function(){return e.content}],function(){Ce(function(){Z()})},{flush:"post",deep:!0,immediate:!0}),Je(function(){e.content===void 0&&(ce(!e.editable,"Typography","When `editable` is enabled, please use `content` instead of children"),ce(!e.ellipsis,"Typography","When `ellipsis` is enabled, please use `content` instead of children"))});function O(){var a,l;return e.ellipsis||e.editable?e.content:(a=y.value)===null||a===void 0||(l=a.$el)===null||l===void 0?void 0:l.innerText}function E(a){var l=T.value.onExpand;r.expanded=!0,l==null||l(a)}function _(a){a.preventDefault(),r.originContent=e.content,H(!0)}function s(a){g(a),H(!1)}function g(a){var l=p.value.onChange;a!==e.content&&(u("update:content",a),l==null||l(a))}function B(){var a,l;(a=(l=p.value).onCancel)===null||a===void 0||a.call(l),H(!1)}function A(a){a.preventDefault(),a.stopPropagation();var l=e.copyable,v=b({},ie(l)==="object"?l:null);v.text===void 0&&(v.text=O()),Et(v.text||""),r.copied=!0,Ce(function(){v.onCopy&&v.onCopy(),r.copyId=setTimeout(function(){r.copied=!1},3e3)})}var p=W(function(){var a=e.editable;return a?b({},ie(a)==="object"?a:null):{editing:!1}}),x=Qe(!1,{value:W(function(){return p.value.editing})}),N=Ye(x,2),P=N[0],te=N[1];function H(a){var l=p.value.onStart;a&&l&&l(),te(a)}ue(P,function(a){if(!a){var l;(l=S.value)===null||l===void 0||l.focus()}},{flush:"post"});function Z(){re.cancel(r.rafId),r.rafId=re(function(){F()})}var z=W(function(){var a=T.value,l=a.rows,v=a.expandable,h=a.suffix,k=a.onEllipsis,C=a.tooltip;return h||C||e.editable||e.copyable||v||k?!1:l===1?$t:kt}),F=function(){var l,v,h=r.ellipsisText,k=r.isEllipsis,C=T.value,w=C.rows,D=C.suffix,L=C.onEllipsis;if(!(!w||w<0||!((l=y.value)!==null&&l!==void 0&&l.$el)||r.expanded||e.content===void 0)&&!z.value){var R=mt((v=y.value)===null||v===void 0?void 0:v.$el,{rows:w,suffix:D},e.content,me(!0),_e),V=R.content,K=R.text,j=R.ellipsis;(h!==K||r.isEllipsis!==j)&&(r.ellipsisText=K,r.ellipsisContent=V,r.isEllipsis=j,k!==j&&L&&L(j))}};function Be(a,l){var v=a.mark,h=a.code,k=a.underline,C=a.delete,w=a.strong,D=a.keyboard,L=l;function R(V,K){if(V){var j=function(){return L}();L=f(K,null,{default:function(){return[j]}})}}return R(w,"strong"),R(k,"u"),R(C,"del"),R(h,"code"),R(v,"mark"),R(D,"kbd"),L}function Ie(a){var l=T.value,v=l.expandable,h=l.symbol;if(!v||!a&&(r.expanded||!r.isEllipsis))return null;var k=(i.ellipsisSymbol?i.ellipsisSymbol():h)||r.expandStr;return f("a",{key:"expand",class:"".concat(d.value,"-expand"),onClick:E,"aria-label":r.expandStr},[k])}function Le(){if(e.editable){var a=e.editable,l=a.tooltip,v=a.triggerType,h=v===void 0?["icon"]:v,k=i.editableIcon?i.editableIcon():f(ve,{role:"button"},null),C=i.editableTooltip?i.editableTooltip():r.editStr,w=typeof C=="string"?C:"";return h.indexOf("icon")!==-1?f(le,{key:"edit",title:l===!1?"":C},{default:function(){return[f(Se,{ref:S,class:"".concat(d.value,"-edit"),onClick:_,"aria-label":w},{default:function(){return[k]}})]}}):null}}function je(){if(e.copyable){var a=e.copyable.tooltip,l=r.copied?r.copiedStr:r.copyStr,v=i.copyableTooltip?i.copyableTooltip({copied:r.copied}):l,h=typeof v=="string"?v:"",k=r.copied?f(rt,null,null):f(pe,null,null),C=i.copyableIcon?i.copyableIcon({copied:!!r.copied}):k;return f(le,{key:"copy",title:a===!1?"":v},{default:function(){return[f(Se,{class:["".concat(d.value,"-copy"),I({},"".concat(d.value,"-copy-success"),r.copied)],onClick:A,"aria-label":h},{default:function(){return[C]}})]}})}}function Me(){var a=o.class,l=o.style,v=p.value,h=v.maxlength,k=v.autoSize,C=v.onEnd;return f(dt,{class:a,style:l,prefixCls:d.value,value:e.content,originContent:r.originContent,maxlength:h,autoSize:k,onSave:s,onChange:g,onCancel:B,onEnd:C,direction:m.value},{enterIcon:i.editableEnterIcon})}function me(a){return[Ie(a),Le(),je()].filter(function(l){return l})}return function(){var a,l=p.value.triggerType,v=l===void 0?["icon"]:l,h=e.ellipsis||e.editable?e.content!==void 0?e.content:(a=i.default)===null||a===void 0?void 0:a.call(i):i.default?i.default():e.content;return P.value?Me():f(nt,{componentName:"Text",children:function(C){var w,D=b(b({},e),o),L=D.type,R=D.disabled;D.content;var V=D.class,K=D.style,j=ee(D,Nt),q=T.value,M=q.rows,ge=q.suffix,ne=q.tooltip,Ae=C.edit,He=C.copy,ze=C.copied,Ke=C.expand;r.editStr=Ae,r.copyStr=He,r.copiedStr=ze,r.expandStr=Ke;var Ue=Pe(j,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","onUpdate:content"]),G=z.value,Fe=M===1&&G,be=M&&M>1&&G,U=h,Ve;if(M&&r.isEllipsis&&!r.expanded&&!G){var ae,he=j.title,J=he||"";!he&&(typeof h=="string"||typeof h=="number")&&(J=String(h)),J=(ae=J)===null||ae===void 0?void 0:ae.slice(String(r.ellipsisContent||"").length),U=f(xe,null,[et(r.ellipsisContent),f("span",{title:J,"aria-hidden":"true"},[_e]),ge])}else U=f(xe,null,[h,ge]);U=Be(e,U);var We=ne&&M&&r.isEllipsis&&!r.expanded&&!G,Xe=i.ellipsisTooltip?i.ellipsisTooltip():ne;return f(tt,{onResize:Z,disabled:!M},{default:function(){return[f(ht,b({ref:y,class:[(w={},I(w,"".concat(d.value,"-").concat(L),L),I(w,"".concat(d.value,"-disabled"),R),I(w,"".concat(d.value,"-ellipsis"),M),I(w,"".concat(d.value,"-single-line"),M===1&&!r.isEllipsis),I(w,"".concat(d.value,"-ellipsis-single-line"),Fe),I(w,"".concat(d.value,"-ellipsis-multiple-line"),be),w),V],style:b(b({},K),{},{WebkitLineClamp:be?M:void 0}),"aria-label":Ve,direction:m.value,onClick:v.indexOf("text")!==-1?_:function(){}},Ue),{default:function(){return[We?f(le,{title:ne===!0?h:Xe},{default:function(){return[f("span",null,[U])]}}):U,me()]}})]}})}},null)}}}),Dt=["level"],Rt=at(1,2,3,4,5),Bt=function(){return b(b({},Pe(Re(),["component","strong"])),{},{level:Number})},ye=function(e,n){var i=n.slots,o=n.attrs,u=e.level,c=u===void 0?1:u,d=ee(e,Dt),m;Rt.indexOf(c)!==-1?m="h".concat(c):(ce(!1,"Typography","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value."),m="h1");var r=b(b({},d),{},{component:m},o);return f(Pt,r,i)};ye.displayName="ATypographyTitle";ye.inheritAttrs=!1;ye.props=Bt();export{ye as T};
import{e as ee,r as C,k as se,ck as R,c9 as ve,F as te,a$ as H,g as de,aV as ae,aU as ne,al as V,am as g,b as j,P as ce,cl as fe,I as re,ak as ge,f as q,D as me,aZ as O,a_ as J}from"./DZZ6t_j4.js";import{t as ie,f as he,C as xe,a as be,r as G}from"./BQuyMdA-.js";import{a as ze}from"./BQQOEPN4.js";import{u as Se}from"./vll-Pnjv.js";var pe=`
 min-height:0 !important;
 max-height:none !important;
 height:0 !important;
 visibility:hidden !important;
 overflow:hidden !important;
 position:absolute !important;
 z-index:-1000 !important;
 top:0 !important;
 right:0 !important
`,ye=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],K={},z;function Ce(d){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=d.getAttribute("id")||d.getAttribute("data-reactid")||d.getAttribute("name");if(e&&K[r])return K[r];var n=window.getComputedStyle(d),m=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),c=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),b=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),v=ye.map(function(u){return"".concat(u,":").concat(n.getPropertyValue(u))}).join(";"),i={sizingStyle:v,paddingSize:c,borderSize:b,boxSizing:m};return e&&r&&(K[r]=i),i}function we(d){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;z||(z=document.createElement("textarea"),z.setAttribute("tab-index","-1"),z.setAttribute("aria-hidden","true"),document.body.appendChild(z)),d.getAttribute("wrap")?z.setAttribute("wrap",d.getAttribute("wrap")):z.removeAttribute("wrap");var m=Ce(d,e),c=m.paddingSize,b=m.borderSize,v=m.boxSizing,i=m.sizingStyle;z.setAttribute("style","".concat(i,";").concat(pe)),z.value=d.value||d.placeholder||"";var u=Number.MIN_SAFE_INTEGER,f=Number.MAX_SAFE_INTEGER,s=z.scrollHeight,S;if(v==="border-box"?s+=b:v==="content-box"&&(s-=c),r!==null||n!==null){z.value=" ";var E=z.scrollHeight-c;r!==null&&(u=E*r,v==="border-box"&&(u=u+c+b),s=Math.max(u,s)),n!==null&&(f=E*n,v==="border-box"&&(f=f+c+b),S=s>f?"":"hidden",s=Math.min(f,s))}return{height:"".concat(s,"px"),minHeight:"".concat(u,"px"),maxHeight:"".concat(f,"px"),overflowY:S,resize:"none"}}var L=0,Q=1,Ae=2,Ee=ee({compatConfig:{MODE:3},name:"ResizableTextArea",inheritAttrs:!1,props:ie(),setup:function(e,r){var n=r.attrs,m=r.emit,c=r.expose,b,v,i=C(),u=C({}),f=C(L);se(function(){R.cancel(b),R.cancel(v)});var s=function(){try{if(document.activeElement===i.value){var h=i.value.selectionStart,p=i.value.selectionEnd;i.value.setSelectionRange(h,p)}}catch{}},S=function(){var h=e.autoSize||e.autosize;if(!(!h||!i.value)){var p=h.minRows,F=h.maxRows;u.value=we(i.value,!1,p,F),f.value=Q,R.cancel(v),v=R(function(){f.value=Ae,v=R(function(){f.value=L,s()})})}},E=function(){R.cancel(b),b=R(S)},w=function(h){if(f.value===L){m("resize",h);var p=e.autoSize||e.autosize;p&&E()}};ve(e.autosize===void 0,"Input.TextArea","autosize is deprecated, please use autoSize instead.");var _=function(){var h=e.prefixCls,p=e.autoSize,F=e.autosize,Z=e.disabled,D=ae(e,["prefixCls","onPressEnter","autoSize","autosize","defaultValue","allowClear","type","lazy","maxlength","valueModifiers"]),U=ne(h,n.class,V({},"".concat(h,"-disabled"),Z)),N=[n.style,u.value,f.value===Q?{overflowX:"hidden",overflowY:"hidden"}:null],T=g(g(g({},D),n),{},{style:N,class:U});return T.autofocus||delete T.autofocus,T.rows===0&&delete T.rows,j(fe,{onResize:w,disabled:!(p||F)},{default:function(){return[ce(j("textarea",g(g({},T),{},{ref:i}),null),[[ze]])]}})};te(function(){return e.value},function(){H(function(){S()})}),de(function(){H(function(){S()})});var I=re();return c({resizeTextarea:S,textArea:i,instance:I}),function(){return _()}}});function le(d,e){return O(d||"").slice(0,e).join("")}function W(d,e,r,n){var m=r;return d?m=le(r,n):O(e||"").length<r.length&&O(r||"").length>n&&(m=e),m}const Fe=ee({compatConfig:{MODE:3},name:"ATextarea",inheritAttrs:!1,props:ie(),setup:function(e,r){var n=r.attrs,m=r.expose,c=r.emit,b=Se(),v=C(e.value===void 0?e.defaultValue:e.value),i=C(),u=C(""),f=ge("input",e),s=f.prefixCls,S=f.size,E=f.direction,w=q(function(){return e.showCount===""||e.showCount||!1}),_=q(function(){return Number(e.maxlength)>0}),I=C(!1),A=C(),h=C(0),p=function(t){I.value=!0,A.value=u.value,h.value=t.currentTarget.selectionStart,c("compositionstart",t)},F=function(t){I.value=!1;var a=t.currentTarget.value;if(_.value){var o,x=h.value>=e.maxlength+1||h.value===((o=A.value)===null||o===void 0?void 0:o.length);a=W(x,A.value,a,e.maxlength)}a!==u.value&&(N(a),G(t.currentTarget,t,Y,a)),c("compositionend",t)},Z=re();te(function(){return e.value},function(){"value"in Z.vnode.props;var l;v.value=(l=e.value)!==null&&l!==void 0?l:""});var D=function(t){var a;be((a=i.value)===null||a===void 0?void 0:a.textArea,t)},U=function(){var t,a;(t=i.value)===null||t===void 0||(a=t.textArea)===null||a===void 0||a.blur()},N=function(t,a){v.value!==t&&(e.value===void 0?v.value=t:H(function(){if(i.value.textArea.value!==u.value){var o,x,y;(o=i.value)===null||o===void 0||(x=(y=o.instance).update)===null||x===void 0||x.call(y)}}),H(function(){a&&a()}))},T=function(t){t.keyCode===13&&c("pressEnter",t),c("keydown",t)},X=function(t){var a=e.onBlur;a==null||a(t),b.onFieldBlur()},Y=function(t){c("update:value",t.target.value),c("change",t),c("input",t),b.onFieldChange()},oe=function(t){G(i.value.textArea,t,Y),N("",function(){D()})},$=function(t){var a=t.target.composing,o=t.target.value;if(I.value=!!(t.isComposing||a),!(I.value&&e.lazy||v.value===o)){if(_.value){var x=t.target,y=x.selectionStart>=e.maxlength+1||x.selectionStart===o.length||!x.selectionStart;o=W(y,u.value,o,e.maxlength)}G(t.currentTarget,t,Y,o),N(o)}},ue=function(){var t,a,o,x=n.style,y=n.class,k=e.bordered,M=k===void 0?!0:k,P=g(g(g({},ae(e,["allowClear"])),n),{},{style:w.value?{}:x,class:(t={},V(t,"".concat(s.value,"-borderless"),!M),V(t,"".concat(y),y&&!w.value),V(t,"".concat(s.value,"-sm"),S.value==="small"),V(t,"".concat(s.value,"-lg"),S.value==="large"),t),showCount:null,prefixCls:s.value,onInput:$,onChange:$,onBlur:X,onKeydown:T,onCompositionstart:p,onCompositionend:F});return(a=e.valueModifiers)!==null&&a!==void 0&&a.lazy&&delete P.onInput,j(Ee,g(g({},P),{},{id:(o=P.id)!==null&&o!==void 0?o:b.id.value,ref:i,maxlength:e.maxlength}),null)};return m({focus:D,blur:U,resizableTextArea:i}),me(function(){var l=he(v.value);!I.value&&_.value&&(e.value===null||e.value===void 0)&&(l=le(l,e.maxlength)),u.value=l}),function(){var l=e.maxlength,t=e.bordered,a=t===void 0?!0:t,o=e.hidden,x=n.style,y=n.class,k=g(g(g({},e),n),{},{prefixCls:s.value,inputType:"text",handleReset:oe,direction:E.value,bordered:a,style:w.value?void 0:x}),M=j(xe,g(g({},k),{},{value:u.value}),{element:ue});if(w.value){var P=O(u.value).length,B="";J(w.value)==="object"?B=w.value.formatter({count:P,maxlength:l}):B="".concat(P).concat(_.value?" / ".concat(l):""),M=j("div",{hidden:o,class:ne("".concat(s.value,"-textarea"),V({},"".concat(s.value,"-textarea-rtl"),E.value==="rtl"),"".concat(s.value,"-textarea-show-count"),y),style:x,"data-count":J(B)!=="object"?B:void 0},[M])}return M}}});export{Fe as _};
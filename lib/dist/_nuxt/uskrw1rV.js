import{e as m,b as l,aZ as F,c7 as P,ak as b,am as a,aU as B,al as f,a_ as G,f as _}from"./DZZ6t_j4.js";import{E as h,s as z}from"./DXQuLwNn.js";import{S as D}from"./BmtvKY7O.js";import{S as M}from"./BLzs_b5A.js";var H=function(){return{prefixCls:String,width:{type:[Number,String]}}},I=m({compatConfig:{MODE:3},name:"SkeletonTitle",props:H(),setup:function(e){return function(){var r=e.prefixCls,n=e.width,o=typeof n=="number"?"".concat(n,"px"):n;return l("h3",{class:r,style:{width:o}},null)}}}),J=function(){return{prefixCls:String,width:{type:[Number,String,Array]},rows:Number}},K=m({compatConfig:{MODE:3},name:"SkeletonParagraph",props:J(),setup:function(e){var r=function(o){var u=e.width,p=e.rows,s=p===void 0?2:p;if(Array.isArray(u))return u[o];if(s-1===o)return u};return function(){var n=e.prefixCls,o=e.rows,u=F(Array(o)).map(function(p,s){var d=r(s);return l("li",{key:s,style:{width:typeof d=="number"?"".concat(d,"px"):d}},null)});return l("ul",{class:n},[u])}}}),Q=function(){return{active:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},prefixCls:String,avatar:{type:[Boolean,Object],default:void 0},title:{type:[Boolean,Object],default:void 0},paragraph:{type:[Boolean,Object],default:void 0},round:{type:Boolean,default:void 0}}};function x(t){return t&&G(t)==="object"?t:{}}function R(t,e){return t&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function X(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}function Y(t,e){var r={};return(!t||!e)&&(r.width="61%"),!t&&e?r.rows=3:r.rows=2,r}var i=m({compatConfig:{MODE:3},name:"ASkeleton",props:P(Q(),{avatar:!1,title:!0,paragraph:!0}),setup:function(e,r){var n=r.slots,o=b("skeleton",e),u=o.prefixCls,p=o.direction;return function(){var s,d=e.loading,S=e.avatar,w=e.title,y=e.paragraph,q=e.active,L=e.round,c=u.value;if(d||e.loading===void 0){var v,g=!!S||S==="",C=!!w||w==="",k=!!y||y==="",j;if(g){var U=a(a({prefixCls:"".concat(c,"-avatar")},R(C,k)),x(S));j=l("div",{class:"".concat(c,"-header")},[l(h,U,null)])}var A;if(C||k){var E;if(C){var V=a(a({prefixCls:"".concat(c,"-title")},X(g,k)),x(w));E=l(I,V,null)}var O;if(k){var Z=a(a({prefixCls:"".concat(c,"-paragraph")},Y(g,C)),x(y));O=l(K,Z,null)}A=l("div",{class:"".concat(c,"-content")},[E,O])}var $=B(c,(v={},f(v,"".concat(c,"-with-avatar"),g),f(v,"".concat(c,"-active"),q),f(v,"".concat(c,"-rtl"),p.value==="rtl"),f(v,"".concat(c,"-round"),L),v));return l("div",{class:$},[j,A])}return(s=n.default)===null||s===void 0?void 0:s.call(n)}}}),N=function(){return a(a({},z()),{},{size:String,block:Boolean})},T=m({compatConfig:{MODE:3},name:"ASkeletonButton",props:P(N(),{size:"default"}),setup:function(e){var r=b("skeleton",e),n=r.prefixCls,o=_(function(){var u;return B(n.value,"".concat(n.value,"-element"),(u={},f(u,"".concat(n.value,"-active"),e.active),f(u,"".concat(n.value,"-block"),e.block),u))});return function(){return l("div",{class:o.value},[l(h,a(a({},e),{},{prefixCls:"".concat(n.value,"-button")}),null)])}}}),ee=function(){return a(a({},z()),{},{shape:String})},W=m({compatConfig:{MODE:3},name:"ASkeletonAvatar",props:P(ee(),{size:"default",shape:"circle"}),setup:function(e){var r=b("skeleton",e),n=r.prefixCls,o=_(function(){return B(n.value,"".concat(n.value,"-element"),f({},"".concat(n.value,"-active"),e.active))});return function(){return l("div",{class:o.value},[l(h,a(a({},e),{},{prefixCls:"".concat(n.value,"-avatar")}),null)])}}});i.Button=T;i.Avatar=W;i.Input=D;i.Image=M;i.Title=I;i.install=function(t){return t.component(i.name,i),t.component(i.Button.name,T),t.component(i.Avatar.name,W),t.component(i.Input.name,D),t.component(i.Image.name,M),t.component(i.Title.name,I),t};export{i as S};
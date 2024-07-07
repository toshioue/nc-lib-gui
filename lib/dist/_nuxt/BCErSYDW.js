import{f as H,r as O,aK as B,g as X,aZ as Z,fN as q,H as M,a_ as I,i as J,gl as G,aL as l,b as c,aM as d,cc as Q,aO as U,cn as Y,aR as ee}from"./BLdk6lRf.js";import{u as ae}from"./KHtB3uuq.js";import{u as te,a as re}from"./wBAlULwF.js";import{e as ne}from"./DCNkOWj0.js";import{_ as oe}from"./DIfu2TRl.js";var ie=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:U.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},E=H({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:ie(),slots:["icon"],setup:function(e,S){var P=S.slots,o=S.attrs,m=O(!0),y=O(!1),x=O(1),i=O(null),h=O(null),j=B("avatar",e),p=j.prefixCls,A=te(),n=X(function(){return e.size==="default"?A.value:e.size}),T=ae(),u=ne(function(){if(Z(e.size)==="object"){var a=q.find(function(r){return T.value[r]}),t=e.size[a];return t}}),k=function(t){return u.value?{width:"".concat(u.value,"px"),height:"".concat(u.value,"px"),lineHeight:"".concat(u.value,"px"),fontSize:"".concat(t?u.value/2:18,"px")}:{}},v=function(){if(!(!i.value||!h.value)){var t=i.value.offsetWidth,r=h.value.offsetWidth;if(t!==0&&r!==0){var s=e.gap,z=s===void 0?4:s;z*2<r&&(x.value=r-z*2<t?(r-z*2)/t:1)}}},C=function(){var t=e.loadError,r=t==null?void 0:t();r!==!1&&(m.value=!1)};return M(function(){return e.src},function(){I(function(){m.value=!0,x.value=1})}),M(function(){return e.gap},function(){I(function(){v()})}),J(function(){I(function(){v(),y.value=!0})}),function(){var a,t,r=e.shape,s=e.src,z=e.alt,L=e.srcset,w=e.draggable,D=e.crossOrigin,b=G(P,e,"icon"),f=p.value,F=(a={},l(a,"".concat(o.class),!!o.class),l(a,f,!0),l(a,"".concat(f,"-lg"),n.value==="large"),l(a,"".concat(f,"-sm"),n.value==="small"),l(a,"".concat(f,"-").concat(r),r),l(a,"".concat(f,"-image"),s&&m.value),l(a,"".concat(f,"-icon"),b),a),$=typeof n.value=="number"?{width:"".concat(n.value,"px"),height:"".concat(n.value,"px"),lineHeight:"".concat(n.value,"px"),fontSize:b?"".concat(n.value/2,"px"):"18px"}:{},W=(t=P.default)===null||t===void 0?void 0:t.call(P),_;if(s&&m.value)_=c("img",{draggable:w,src:s,srcset:L,onError:C,alt:z,crossorigin:D},null);else if(b)_=b;else if(y.value||x.value!==1){var N="scale(".concat(x.value,") translateX(-50%)"),K={msTransform:N,WebkitTransform:N,transform:N},V=typeof n.value=="number"?{lineHeight:"".concat(n.value,"px")}:{};_=c(Q,{onResize:v},{default:function(){return[c("span",{class:"".concat(f,"-string"),ref:i,style:d(d({},V),K)},[W])]}})}else _=c("span",{class:"".concat(f,"-string"),ref:i,style:{opacity:0}},[W]);return c("span",d(d({},o),{},{ref:h,class:F,style:[$,k(!!b),o.style]}),[_])}}}),le=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},R=H({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:le(),setup:function(e,S){var P=S.slots,o=S.attrs,m=B("avatar-group",e),y=m.prefixCls,x=m.direction;return re(e),function(){var i,h=e.maxPopoverPlacement,j=h===void 0?"top":h,p=e.maxCount,A=e.maxStyle,n=e.maxPopoverTrigger,T=n===void 0?"hover":n,u=(i={},l(i,y.value,!0),l(i,"".concat(y.value,"-rtl"),x.value==="rtl"),l(i,"".concat(o.class),!!o.class),i),k=G(P,e),v=Y(k).map(function(r,s){return ee(r,{key:"avatar-key-".concat(s)})}),C=v.length;if(p&&p<C){var a=v.slice(0,p),t=v.slice(p,C);return a.push(c(oe,{key:"avatar-popover-key",content:t,trigger:T,placement:j,overlayClassName:"".concat(y.value,"-popover")},{default:function(){return[c(E,{style:A},{default:function(){return["+".concat(C-p)]}})]}})),c("div",d(d({},o),{},{class:u,style:o.style}),[a])}return c("div",d(d({},o),{},{class:u,style:o.style}),[v])}}});E.Group=R;E.install=function(g){return g.component(E.name,E),g.component(R.name,R),g};export{E as A};
import{f as h,bc as k,g as i,ad as z,o as B,S as x,w as C,a as _,U as n,P as s,a8 as g,Q as $,aL as M,cc as K}from"./Cgw6cdOy.js";const R=h({__name:"Modal",props:{visible:{type:Boolean},width:{},size:{default:"medium"},destroyOnClose:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},keyboard:{type:Boolean,default:!0}},emits:["update:visible"],setup(d,{emit:u}){const e=d,m=u,{width:t}=e,{maskClosable:c,closable:f,keyboard:p,destroyOnClose:b}=k(e),v=i(()=>t||(e.size==="small"?"28rem":e.size==="medium"?"40rem":e.size==="large"||e.size==="xl"?"80rem":"max(30vw, 600px)")),l=i(()=>e.size==="small"?"auto":e.size==="medium"?"26.5":e.size==="large"?"80vh":e.size==="xl"?"90vh":"auto"),a=z(e,"visible",m);return(y,o)=>{const w=K;return B(),x(w,{visible:s(a),"onUpdate:visible":o[0]||(o[0]=r=>$(a)?a.value=r:null),class:n({active:s(a)}),width:s(v),closable:s(f),keyboard:s(p),"wrap-class-name":"nc-modal-wrapper",footer:null,"destroy-on-close":s(b),"mask-closable":s(c),onKeydown:o[1]||(o[1]=M(r=>a.value=!1,["esc"]))},{default:C(()=>[_("div",{class:n(`nc-modal h-[${s(l)}] max-h-[${s(l)}]`)},[g(y.$slots,"default")],2)]),_:3},8,["visible","class","width","closable","keyboard","destroy-on-close","mask-closable"])}}});export{R as _};
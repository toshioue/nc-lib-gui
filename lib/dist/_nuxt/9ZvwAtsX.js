import{e as L,r as v,ba as $,F as C,g as H,cA as N,o as w,c as h,P as R,aF as T,a as s,a6 as u,b as V,t as g,R as y,a$ as E,eV as D,eT as F}from"./DZZ6t_j4.js";function M(e,o){const n=e.getBoundingClientRect();if(!o)return n.top>=0&&n.bottom<=window.innerHeight;const t=o.getBoundingClientRect();return n.top>=t.top&&n.bottom<=t.bottom}async function O(e){return await E(),e.value instanceof HTMLElement?e.value:e.value?document.querySelector(e.value):null}function x(e){let o=`0px 0px ${e.distance}px 0px`;e.top&&(o=`${e.distance}px 0px 0px 0px`);const n=new IntersectionObserver(t=>{t[0].isIntersecting&&(e.firstload&&e.emit(),e.firstload=!0)},{root:e.parentEl,rootMargin:o});return n.observe(e.infiniteLoading.value),n}const b=(e,o)=>{const n=e.__vccOpts||e;for(const[t,c]of o)n[t]=c;return n},q={},A=e=>(D("data-v-d3e37633"),e=e(),F(),e),P={class:"container"},U=A(()=>s("div",{class:"spinner"},null,-1)),j=[U];function z(e,o){return w(),h("div",P,j)}const G=b(q,[["render",z],["__scopeId","data-v-d3e37633"]]),J={class:"state-error"},K=L({__name:"InfiniteLoading",props:{top:{type:Boolean,default:!1},target:{},distance:{default:0},identifier:{},firstload:{type:Boolean,default:!0},slots:{}},emits:["infinite"],setup(e,{emit:o}){const n=e;let t=null,c=0;const d=v(null),i=v(""),{top:p,firstload:k,distance:I}=n,{identifier:_,target:B}=$(n),a={infiniteLoading:d,top:p,firstload:k,distance:I,parentEl:null,emit(){c=(a.parentEl||document.documentElement).scrollHeight,m.loading(),o("infinite",m)}},m={loading(){i.value="loading"},async loaded(){i.value="loaded";const r=a.parentEl||document.documentElement;await E(),p&&(r.scrollTop=r.scrollHeight-c),M(d.value,a.parentEl)&&a.emit()},complete(){i.value="complete",t==null||t.disconnect()},error(){i.value="error"}};return C(_,()=>{t==null||t.disconnect(),t=x(a)}),H(async()=>{a.parentEl=await O(B),t=x(a)}),N(()=>{t==null||t.disconnect()}),(r,f)=>(w(),h("div",{ref_key:"infiniteLoading",ref:d,style:{"min-height":"1px"}},[R(s("div",null,[u(r.$slots,"spinner",{},()=>[V(G)],!0)],512),[[T,i.value=="loading"]]),i.value=="complete"?u(r.$slots,"complete",{key:0},()=>{var l;return[s("span",null,g(((l=r.slots)==null?void 0:l.complete)||"No more results!"),1)]},!0):y("",!0),i.value=="error"?u(r.$slots,"error",{key:1,retry:a.emit},()=>{var l;return[s("span",J,[s("span",null,g(((l=r.slots)==null?void 0:l.error)||"Oops something went wrong!"),1),s("button",{class:"retry",onClick:f[0]||(f[0]=(...S)=>a.emit&&a.emit(...S))},"retry")])]},!0):y("",!0)],512))}}),Q=b(K,[["__scopeId","data-v-a7077831"]]);export{Q as W};
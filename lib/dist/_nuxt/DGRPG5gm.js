import{ek as Ee,eF as He,P as t,a7 as fe,aD as Ge,e8 as Ke,r as B,i as $e,b1 as Ue,K as Se,g as z,bW as Ye,H,f as ve,bc as Te,n as pe,ad as ge,N as xe,O as Xe,o as f,c as L,S as k,co as oe,w as g,d as E,t as x,R as ne,b as R,V as ae,a1 as Z,T as C,a as y,aq as F,av as re,U as le,Y as Qe,$ as ze,a0 as qe,_ as Le,az as Je,cQ as Ze,bN as et,da as tt,aa as J,d1 as $,Q as be,aM as ot,p as nt,e as at}from"./3QBYHahY.js";import{_ as Ce}from"./DdUr8XSo.js";import{_ as Pe}from"./PcgFfkcK.js";import{_ as Ae}from"./Kma333Sh.js";import{_ as st}from"./CoNP9Geb.js";import{u as it}from"./D895huNV.js";import{f as se}from"./B5EXVDS7.js";import{a as rt}from"./B4uVmeYG.js";import{S as lt}from"./BH8oNBwT.js";import"./BGXIEfpz.js";import"./leimKhvx.js";import"./CyuhXrst.js";import"./CmSmNSNp.js";import"./DmzaAQYu.js";import"./Wbpa_-L5.js";import"./DHsWytsD.js";import"./Bczc_1bi.js";import"./Cy50pBgZ.js";import"./kHOslGNR.js";import"./CmN9vPg3.js";import"./BQQOEPN4.js";import"./xnDaHwV-.js";import"./DPgYHC40.js";import"./BsWDDIqE.js";import"./ceYq-xax.js";import"./Dwil3It4.js";import"./Cy5w9qev.js";import"./DsWDg2xe.js";import"./Uiq3YTcq.js";import"./CL-Lp6PG.js";import"./CSl6euFG.js";import"./BYmqikBK.js";import"./DkE_qgY_.js";import"./T74iQZdg.js";import"./Bj2FvocX.js";import"./DPqnb67u.js";import"./boyBAVNN.js";import"./-3s5K4B9.js";import"./BteOdwRG.js";import"./2yzrrcqg.js";import"./BkiSZLeF.js";import"./CJ26qO3d.js";import"./CsJPQclb.js";import"./CfxEkdGP.js";import"./DGM-hiY9.js";import"./C95Svpv6.js";import"./Giw8WUI1.js";import"./DEVpQDRz.js";import"./BxzO9ZxL.js";import"./DzvpY9ZV.js";import"./DvDgJkhr.js";import"./CdQRhxEe.js";import"./D4iSzjWt.js";import"./Cu_tC_Dm.js";import"./Cst4YF69.js";import"./Dg1gNFnz.js";import"./Ci1lK5Ee.js";import"./CI9Dknfq.js";import"./CPUhUHn0.js";import"./C9Sjn86N.js";import"./DiVAloGI.js";function me(e){return Ee()?(He(e),!0):!1}function Y(e){return typeof e=="function"?e():t(e)}const he=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ct=Object.prototype.toString,ut=e=>ct.call(e)==="[object Object]",De=()=>{},ke=pt();function pt(){var e,n;return he&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((n=window==null?void 0:window.navigator)==null?void 0:n.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function dt(e){return Se()}function ft(...e){if(e.length!==1)return fe(...e);const n=e[0];return typeof n=="function"?Ge(Ke(()=>({get:n,set:De}))):B(n)}function gt(e,n=!0,o){dt()?$e(e,o):n?e():Ue(e)}function U(e){var n;const o=Y(e);return(n=o==null?void 0:o.$el)!=null?n:o}const Re=he?window:void 0;function vt(){const e=B(!1),n=Se();return n&&$e(()=>{e.value=!0},n),e}function mt(e){const n=vt();return z(()=>(n.value,!!e()))}function ht(e,n,o={}){const{window:i=Re,...c}=o;let r;const a=mt(()=>i&&"ResizeObserver"in i),s=()=>{r&&(r.disconnect(),r=void 0)},v=z(()=>Array.isArray(e)?e.map(p=>U(p)):[U(e)]),_=H(v,p=>{if(s(),a.value&&i){r=new ResizeObserver(n);for(const m of p)m&&r.observe(m,c)}},{immediate:!0,flush:"post"}),d=()=>{s(),_()};return me(d),{isSupported:a,stop:d}}function yt(e,n={width:0,height:0},o={}){const{window:i=Re,box:c="content-box"}=o,r=z(()=>{var p,m;return(m=(p=U(e))==null?void 0:p.namespaceURI)==null?void 0:m.includes("svg")}),a=B(n.width),s=B(n.height),{stop:v}=ht(e,([p])=>{const m=c==="border-box"?p.borderBoxSize:c==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(i&&r.value){const w=U(e);if(w){const l=i.getComputedStyle(w);a.value=Number.parseFloat(l.width),s.value=Number.parseFloat(l.height)}}else if(m){const w=Array.isArray(m)?m:[m];a.value=w.reduce((l,{inlineSize:S})=>l+S,0),s.value=w.reduce((l,{blockSize:S})=>l+S,0)}else a.value=p.contentRect.width,s.value=p.contentRect.height},o);gt(()=>{const p=U(e);p&&(a.value="offsetWidth"in p?p.offsetWidth:n.width,s.value="offsetHeight"in p?p.offsetHeight:n.height)});const _=H(()=>U(e),p=>{a.value=p?n.width:0,s.value=p?n.height:0});function d(){v(),_()}return{width:a,height:s,stop:d}}function wt(e,n){const{containerStyle:o,wrapperProps:i,scrollTo:c,calculateRange:r,currentList:a,containerRef:s}="itemHeight"in n?bt(n,e):xt(n,e);return{list:a,scrollTo:c,containerProps:{ref:s,onScroll:()=>{r()},style:o},wrapperProps:i}}function Ve(e){const n=B(null),o=yt(n),i=B([]),c=Ye(e);return{state:B({start:0,end:10}),source:c,currentList:i,size:o,containerRef:n}}function Me(e,n,o){return i=>{if(typeof o=="number")return Math.ceil(i/o);const{start:c=0}=e.value;let r=0,a=0;for(let s=c;s<n.value.length;s++){const v=o(s);if(r+=v,a=s,r>i)break}return a-c}}function Be(e,n){return o=>{if(typeof n=="number")return Math.floor(o/n)+1;let i=0,c=0;for(let r=0;r<e.value.length;r++){const a=n(r);if(i+=a,i>=o){c=r;break}}return c+1}}function Ne(e,n,o,i,{containerRef:c,state:r,currentList:a,source:s}){return()=>{const v=c.value;if(v){const _=o(e==="vertical"?v.scrollTop:v.scrollLeft),d=i(e==="vertical"?v.clientHeight:v.clientWidth),p=_-n,m=_+d+n;r.value={start:p<0?0:p,end:m>s.value.length?s.value.length:m},a.value=s.value.slice(r.value.start,r.value.end).map((w,l)=>({data:w,index:l+r.value.start}))}}}function Oe(e,n){return o=>typeof e=="number"?o*e:n.value.slice(0,o).reduce((c,r,a)=>c+e(a),0)}function Ie(e,n,o){H([e.width,e.height,n],()=>{o()})}function We(e,n){return z(()=>typeof e=="number"?n.value.length*e:n.value.reduce((o,i,c)=>o+e(c),0))}const _t={horizontal:"scrollLeft",vertical:"scrollTop"};function je(e,n,o,i){return c=>{i.value&&(i.value[_t[e]]=o(c),n())}}function xt(e,n){const o=Ve(n),{state:i,source:c,currentList:r,size:a,containerRef:s}=o,v={overflowX:"auto"},{itemWidth:_,overscan:d=5}=e,p=Me(i,c,_),m=Be(c,_),w=Ne("horizontal",d,m,p,o),l=Oe(_,c),S=z(()=>l(i.value.start)),I=We(_,c);Ie(a,n,w);const V=je("horizontal",w,l,s),M=z(()=>({style:{height:"100%",width:`${I.value-S.value}px`,marginLeft:`${S.value}px`,display:"flex"}}));return{scrollTo:V,calculateRange:w,wrapperProps:M,containerStyle:v,currentList:r,containerRef:s}}function bt(e,n){const o=Ve(n),{state:i,source:c,currentList:r,size:a,containerRef:s}=o,v={overflowY:"auto"},{itemHeight:_,overscan:d=5}=e,p=Me(i,c,_),m=Be(c,_),w=Ne("vertical",d,m,p,o),l=Oe(_,c),S=z(()=>l(i.value.start)),I=We(_,c);Ie(a,n,w);const V=je("vertical",w,l,s),M=z(()=>({style:{width:"100%",height:`${I.value-S.value}px`,marginTop:`${S.value}px`}}));return{calculateRange:w,scrollTo:V,containerStyle:v,wrapperProps:M,currentList:r,containerRef:s}}function kt(e){var n;const o=Y(e);return(n=o==null?void 0:o.$el)!=null?n:o}const $t=he?window:void 0;function St(...e){let n,o,i,c;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,i,c]=e,n=$t):[n,o,i,c]=e,!n)return De;Array.isArray(o)||(o=[o]),Array.isArray(i)||(i=[i]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},s=(d,p,m,w)=>(d.addEventListener(p,m,w),()=>d.removeEventListener(p,m,w)),v=H(()=>[kt(n),Y(c)],([d,p])=>{if(a(),!d)return;const m=ut(p)?{...p}:p;r.push(...o.flatMap(w=>i.map(l=>s(d,w,l,m))))},{immediate:!0,flush:"post"}),_=()=>{v(),a()};return me(_),_}function de(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function Fe(e){const n=window.getComputedStyle(e);if(n.overflowX==="scroll"||n.overflowY==="scroll"||n.overflowX==="auto"&&e.clientWidth<e.scrollWidth||n.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const o=e.parentNode;return!o||o.tagName==="BODY"?!1:Fe(o)}}function Tt(e){const n=e||window.event,o=n.target;return Fe(o)?!1:n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)}const ie=new WeakMap;function zt(e,n=!1){const o=B(n);let i=null;H(ft(e),a=>{const s=de(Y(a));if(s){const v=s;ie.get(v)||ie.set(v,v.style.overflow),o.value&&(v.style.overflow="hidden")}},{immediate:!0});const c=()=>{const a=de(Y(e));!a||o.value||(ke&&(i=St(a,"touchmove",s=>{Tt(s)},{passive:!1})),a.style.overflow="hidden",o.value=!0)},r=()=>{var a;const s=de(Y(e));!s||!o.value||(ke&&(i==null||i()),s.style.overflow=(a=ie.get(s))!=null?a:"",ie.delete(s),o.value=!1)};return me(r),z({get(){return o.value},set(a){a?c():r()}})}function Lt(){let e=!1;const n=B(!1);return(o,i)=>{if(n.value=i.value,e)return;e=!0;const c=zt(o,i.value);H(n,r=>c.value=r)}}Lt();const Ct=ve({name:"UseVirtualList",props:["list","options","height"],setup(e,{slots:n,expose:o}){const{list:i}=Te(e),{list:c,containerProps:r,wrapperProps:a,scrollTo:s}=wt(i,e.options);return o({scrollTo:s}),r.style&&typeof r.style=="object"&&!Array.isArray(r.style)&&(r.style.height=e.height||"300px"),()=>pe("div",{...r},[pe("div",{...a.value},c.value.map(v=>pe("div",{style:{overflow:"hidden",height:v.height}},n.default?n.default(v):"Please set content!")))])}}),Pt={class:"nc-pagination flex flex-row items-center gap-x-0.25"},At={key:1,class:"text-gray-500"},Dt={class:"flex gap-1 items-center px-2"},Rt={class:"nc-current-page"},Vt={class:"rounded-lg text-[13px] font-medium w-full"},Mt={key:3,class:"text-gray-500"},Bt=ve({__name:"PaginationV2",props:{current:{},total:{},pageSize:{},entityName:{},mode:{},prevPageTooltip:{},nextPageTooltip:{},firstPageTooltip:{},lastPageTooltip:{},showSizeChanger:{type:Boolean}},emits:["update:current","update:pageSize"],setup(e,{emit:n}){const o=e,i=n,{total:c,showSizeChanger:r}=Te(o),a=ge(o,"current",i),s=ge(o,"pageSize",i),{gridViewPageSize:v,setGridViewPageSize:_}=xe(),d=z({get:()=>{if(!r.value)return s.value;const A=v.value||25;return s.value!==A&&(s.value=A),s.value},set:A=>{_(A),s.value=A}}),p=z(()=>o.entityName||"item"),m=z(()=>Math.max(Math.ceil(c.value/d.value),1)),{isMobileMode:w}=xe(),l=z(()=>o.mode||(w.value?"simple":"full")),S=({increase:A,set:P})=>{P?a.value=P:A&&a.value<m.value?a.value=a.value+1:a.value>0&&(a.value=a.value-1)},I=()=>{a.value=m.value},V=()=>{a.value=1},M=z(()=>Array.from({length:m.value},(A,P)=>({value:P+1,label:P+1}))),X=[{value:25,label:"25 / page"},{value:50,label:"50 / page"},{value:75,label:"75 / page"},{value:100,label:"100 / page"}];return(A,P)=>{const u=ze,T=qe,W=Ce,Q=st,G=Pe,ee=Ae,j=Xe("e");return f(),L("div",Pt,[t(l)==="full"?(f(),k(ae(o.firstPageTooltip&&t(l)==="full"?Z:"div"),{key:0},oe({default:g(()=>[ne((f(),k(T,{class:"first-page !border-0",type:"text",size:"xsmall",disabled:t(a)===1,onClick:V},{default:g(()=>[R(u,{icon:"doubleLeftArrow",class:"nc-pagination-icon"})]),_:1},8,["disabled"])),[[j,[`a:pagination:${t(p)}:first-page`]]])]),_:2},[o.firstPageTooltip?{name:"title",fn:g(()=>[E(x(o.firstPageTooltip),1)]),key:"0"}:void 0]),1024)):C("",!0),(f(),k(ae(o.prevPageTooltip&&t(l)==="full"?Z:"div"),null,oe({default:g(()=>[ne((f(),k(T,{class:"prev-page !border-0",type:"secondary",size:"xsmall",disabled:t(a)===1,onClick:P[0]||(P[0]=D=>S({increase:!1}))},{default:g(()=>[R(u,{icon:"arrowLeft",class:"nc-pagination-icon"})]),_:1},8,["disabled"])),[[j,[`a:pagination:${t(p)}:prev-page`]]])]),_:2},[o.prevPageTooltip?{name:"title",fn:g(()=>[E(x(o.prevPageTooltip),1)]),key:"0"}:void 0]),1024)),t(w)?C("",!0):(f(),L("div",At,[R(ee,{placement:"top","overlay-class-name":"!shadow-none"},{overlay:g(()=>[R(G,{class:"nc-pagination-menu overflow-hidden"},{default:g(()=>[t(r)?(f(),k(Q,{key:`${t(d)}page`,class:"bg-gray-100 z-20 top-0 !sticky"},{title:g(()=>[y("div",Vt,x(t(d))+" / page",1)]),default:g(()=>[(f(),L(F,null,re(X,D=>R(W,{key:D.value,onClick:ce=>d.value=D.value},{default:g(()=>[y("span",{class:le(["text-[13px]",{"!text-brand-500":D.value===t(d)}])},x(D.value)+" / page ",3)]),_:2},1032,["onClick"])),64))]),_:1})):C("",!0),(f(),k(t(Ct),{key:t(d),list:t(M),height:"auto",options:{itemHeight:36},class:"mt-1 max-h-46"},{default:g(({data:D})=>[(f(),k(W,{key:`${t(d)}${D.value}`,style:{height:"36px"},onClick:Qe(ce=>S({set:D.value}),["stop"])},{default:g(()=>[y("div",{class:le([{"text-brand-500":D.value===t(a)},"flex text-[13px] !w-full text-gray-800 items-center justify-between"])},x(D.label),3)]),_:2},1032,["onClick"]))]),_:1},8,["list"]))]),_:1})]),default:g(()=>[R(T,{class:"!border-0 nc-select-page",type:"secondary",size:"xsmall"},{default:g(()=>[y("div",Dt,[y("span",Rt,x(t(a)),1),R(u,{icon:"arrowDown",class:"text-gray-800 mt-0.5 nc-select-expand-btn"})])]),_:1})]),_:1})])),(f(),k(ae(o.nextPageTooltip&&t(l)==="full"?Z:"div"),null,oe({default:g(()=>[ne((f(),k(T,{class:"next-page !border-0",type:"secondary",size:"xsmall",disabled:t(a)===t(m),onClick:P[1]||(P[1]=D=>S({increase:!0}))},{default:g(()=>[R(u,{icon:"arrowRight",class:"nc-pagination-icon"})]),_:1},8,["disabled"])),[[j,[`a:pagination:${t(p)}:next-page`]]])]),_:2},[o.nextPageTooltip?{name:"title",fn:g(()=>[E(x(o.nextPageTooltip),1)]),key:"0"}:void 0]),1024)),t(l)==="full"?(f(),k(ae(o.lastPageTooltip&&t(l)==="full"?Z:"div"),{key:2},oe({default:g(()=>[ne((f(),k(T,{class:"last-page !border-0",type:"secondary",size:"xsmall",disabled:t(a)===t(m),onClick:I},{default:g(()=>[R(u,{icon:"doubleRightArrow",class:"nc-pagination-icon"})]),_:1},8,["disabled"])),[[j,[`a:pagination:${t(p)}:last-page`]]])]),_:2},[o.lastPageTooltip?{name:"title",fn:g(()=>[E(x(o.lastPageTooltip),1)]),key:"0"}:void 0]),1024)):C("",!0),t(r)&&!t(w)?(f(),L("div",Mt)):C("",!0)])}}}),Nt=Le(Bt,[["__scopeId","data-v-d003080f"]]),ye=e=>(nt("data-v-504a107b"),e=e(),at(),e),Ot={class:"sticky flex items-center bg-gray-50 left-0"},It={class:"flex relative justify-between gap-2 w-full"},Wt={key:0,class:"nc-pagination-skeleton flex justify-center item-center min-h-10 min-w-16 w-16"},jt={"data-testid":"grid-pagination",class:"text-gray-500 text-ellipsis overflow-hidden pl-1 truncate nc-grid-row-count caption text-xs text-nowrap"},Ft=ye(()=>y("span",{class:"text-[10px] font-semibold"}," Summary ",-1)),Et={style:{direction:"rtl"},class:"flex gap-2 text-nowrap truncate overflow-hidden items-center"},Ht={class:"text-gray-600 text-[12px] font-semibold"},Gt={class:"text-gray-500 text-[12px] leading-4"},Kt={class:"flex gap-2 text-nowrap overflow-hidden items-center"},Ut={class:"text-[12px] leading-4"},Yt={class:"text-[12px] font-semibold"},Xt={class:"flex !w-full text-[13px] text-gray-800 items-center justify-between"},Qt=ye(()=>y("span",{class:"text-[10px] font-semibold"}," Summary ",-1)),qt={class:"flex gap-2 truncate text-nowrap overflow-hidden items-center"},Jt={class:"text-gray-500 text-[12px] leading-4"},Zt={class:"text-gray-600 font-semibold text-[12px]"},eo={class:"flex gap-2 text-nowrap overflow-hidden items-center"},to={class:"text-[12px] leading-4"},oo={class:"font-semibold text-[12px]"},no={class:"flex !w-full text-[13px] text-gray-800 items-center justify-between"},ao=ye(()=>y("div",{class:"!pl-8 pr-60 !w-8 h-1"},"‎",-1)),so={class:"absolute h-9 bg-white border-l-1 border-gray-200 px-1 flex items-center right-0"},io=ve({__name:"PaginationV2",props:{scrollLeft:{},paginationData:{},changePage:{type:Function},showSizeChanger:{type:Boolean},customLabel:{},depth:{}},emits:["update:paginationData"],setup(e,{emit:n}){const o=e,i=n,{isViewDataLoading:c,isPaginationLoading:r}=Je(Ze()),a=et(tt,B(!1)),{changePage:s,customLabel:v}=o,_=fe(o,"showSizeChanger"),d=ge(o,"paginationData",i),{updateAggregate:p,getAggregations:m,visibleFieldsComputed:w,displayFieldComputed:l}=it(),S=fe(o,"scrollLeft"),I=B();H(S,u=>{I.value&&(I.value.scrollLeft=u)},{immediate:!0});const V=z(()=>{var u;return((u=d.value)==null?void 0:u.totalRows)??1/0}),M=z({get:()=>{var u;return((u=d==null?void 0:d.value)==null?void 0:u.page)??1},set:async u=>{r.value=!0;try{await(s==null?void 0:s(u)),r.value=!1}catch(T){if(rt.isCancel(T))return;r.value=!1}}}),X=z({get:()=>{var u;return((u=d.value)==null?void 0:u.pageSize)??25},set:u=>{var T,W;if(d.value){if((T=d.value)!=null&&T.pageSize&&((W=d.value)==null?void 0:W.pageSize)===u)return;d.value.pageSize=u,d.value.totalRows&&M.value*u<d.value.totalRows?s==null||s(M.value):s==null||s(1)}}}),A=(u,T=!1)=>{if(T||(S.value??0)<30)switch(u){case 3:return 26;case 2:return 17;case 1:return 8;default:return 0}return 0},P=()=>ot()?"⌥":"ALT";return(u,T)=>{var we;const W=lt,Q=Z,G=ze,ee=Ce,j=Pe,D=Ae,ce=Nt;return f(),L("div",{ref_key:"containerElement",ref:I,class:"bg-gray-50 w-full pr-1 border-t-1 border-gray-200 overflow-x-hidden no-scrollbar flex h-9"},[y("div",Ot,[R(D,{disabled:[t($).SpecificDBType,t($).ForeignKey,t($).Button].includes((we=t(l).column)==null?void 0:we.uidt)||t(a),"overlay-class-name":"max-h-96 relative scroll-container nc-scrollbar-md overflow-auto"},{overlay:g(()=>{var h;return[t(l).field&&((h=t(l).column)!=null&&h.id)?(f(),k(j,{key:0},{default:g(()=>[(f(!0),L(F,null,re(t(m)(t(l).column),(N,b)=>(f(),k(ee,{key:b,onClick:O=>t(p)(t(l).column.id,N)},{default:g(()=>{var O;return[y("div",Xt,[E(x(u.$t(`aggregation_type.${N}`))+" ",1),((O=t(l).field)==null?void 0:O.aggregation)===N?(f(),k(G,{key:0,class:"text-brand-500",icon:"check"})):C("",!0)])]}),_:2},1032,["onClick"]))),128))]),_:1})):C("",!0)]}),default:g(()=>{var h,N,b,O,q,K,te,ue,_e;return[t(l).field&&((h=t(l).column)!=null&&h.id)?(f(),L("div",{key:0,class:"flex items-center overflow-x-hidden hover:bg-gray-100 cursor-pointer text-gray-500 justify-end transition-all transition-linear px-3 py-2",style:J({"min-width":(N=t(l))==null?void 0:N.width,"max-width":(b=t(l))==null?void 0:b.width,width:(O=t(l))==null?void 0:O.width,"margin-left":`${A(u.depth??0)}px`})},[y("div",It,[t(c)?(f(),L("div",Wt,[R(W,{active:!0,title:!0,paragraph:!1,class:"w-16 max-w-16"})])):(f(),k(Q,{key:1,class:"flex sticky items-center h-full"},{title:g(()=>[E(x(t(V))+" "+x(t(v)?t(v):t(V)!==1?u.$t("objects.records"):u.$t("objects.record")),1)]),default:g(()=>[y("span",jt,x(Intl.NumberFormat("en",{notation:"compact"}).format(t(V)))+" "+x(t(v)?t(v):t(V)!==1?u.$t("objects.records"):u.$t("objects.record")),1)]),_:1})),[t($).SpecificDBType,t($).ForeignKey,t($).Button].includes((q=t(l).column)==null?void 0:q.uidt)?C("",!0):(f(),L(F,{key:2},[!((K=t(l).field)!=null&&K.aggregation)||((te=t(l).field)==null?void 0:te.aggregation)==="none"?(f(),L("div",{key:0,class:le([{"group-hover:opacity-100":![t($).SpecificDBType,t($).ForeignKey,t($).Button].includes((ue=t(l).column)==null?void 0:ue.uidt)},"text-gray-500 opacity-0 transition"])},[R(G,{class:"text-gray-500",icon:"arrowDown"}),Ft],2)):t(l).value!==void 0?(f(),k(Q,{key:1,style:J({maxWidth:`${(_e=t(l))==null?void 0:_e.width}`})},{title:g(()=>[y("div",Kt,[y("span",Ut,x(u.$t(`aggregation.${t(l).field.aggregation}`)),1),y("span",Yt,x(("formatAggregation"in u?u.formatAggregation:t(se))(t(l).field.aggregation,t(l).value,t(l).column)),1)])]),default:g(()=>[y("div",Et,[y("span",Ht,x(("formatAggregation"in u?u.formatAggregation:t(se))(t(l).field.aggregation,t(l).value,t(l).column)),1),y("span",Gt,x(u.$t(`aggregation.${t(l).field.aggregation}`)),1)])]),_:1},8,["style"])):C("",!0)],64))])],4)):C("",!0)]}),_:1},8,["disabled"])]),(f(!0),L(F,null,re(t(w),({field:h,width:N,column:b,value:O},q)=>(f(),L(F,{key:q},[q===0&&t(S)>30?(f(),L("div",{key:0,style:J(`width: ${A(u.depth??0,!0)}px;min-width: ${A(u.depth??0,!0)}px;max-width: ${A(u.depth??0,!0)}px`)},null,4)):C("",!0),h&&(b!=null&&b.id)?(f(),k(D,{key:1,disabled:[t($).SpecificDBType,t($).ForeignKey,t($).Button].includes(b==null?void 0:b.uidt)||t(a),"overlay-class-name":"max-h-96 relative scroll-container nc-scrollbar-md overflow-auto"},{overlay:g(()=>[R(j,null,{default:g(()=>[(f(!0),L(F,null,re(t(m)(b),(K,te)=>(f(),k(ee,{key:te,onClick:ue=>t(p)(b.id,K)},{default:g(()=>[y("div",no,[E(x(u.$t(`aggregation_type.${K}`))+" ",1),(h==null?void 0:h.aggregation)===K?(f(),k(G,{key:0,class:"text-brand-500",icon:"check"})):C("",!0)])]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),default:g(()=>[y("div",{class:"flex items-center overflow-x-hidden justify-end group hover:bg-gray-100 cursor-pointer text-gray-500 transition-all transition-linear px-3 py-2",style:J({"min-width":N,"max-width":N,width:N})},[[t($).SpecificDBType,t($).ForeignKey,t($).Button].includes(b==null?void 0:b.uidt)?C("",!0):(f(),L(F,{key:0},[(h==null?void 0:h.aggregation)==="none"||(h==null?void 0:h.aggregation)===null?(f(),L("div",{key:0,class:le([{"group-hover:opacity-100":![t($).SpecificDBType,t($).ForeignKey,t($).Button].includes(b==null?void 0:b.uidt)},"text-gray-500 opacity-0 transition"])},[R(G,{class:"text-gray-500",icon:"arrowDown"}),Qt],2)):O!==void 0?(f(),k(Q,{key:1,style:J({maxWidth:`${h==null?void 0:h.width}px`})},{title:g(()=>[y("div",eo,[y("span",to,x(u.$t(`aggregation.${h.aggregation}`).replace("Percent ","")),1),y("span",oo,x(("formatAggregation"in u?u.formatAggregation:t(se))(h.aggregation,O,b)),1)])]),default:g(()=>[y("div",qt,[y("span",Jt,x(u.$t(`aggregation.${h.aggregation}`).replace("Percent ","")),1),y("span",Zt,x(("formatAggregation"in u?u.formatAggregation:t(se))(h.aggregation,O,b)),1)])]),_:2},1032,["style"])):C("",!0)],64))],4)]),_:2},1032,["disabled"])):C("",!0)],64))),128)),ao,y("div",so,[t(V)!==1/0?(f(),k(ce,{key:0,current:t(M),"onUpdate:current":T[0]||(T[0]=h=>be(M)?M.value=h:null),"page-size":t(X),"onUpdate:pageSize":T[1]||(T[1]=h=>be(X)?X.value=h:null),"show-size-changer":t(_),class:"xs:mr-2",total:+t(V),"entity-name":"grid","prev-page-tooltip":`${P()}+←`,"next-page-tooltip":`${P()}+→`,"first-page-tooltip":`${P()}+↓`,"last-page-tooltip":`${P()}+↑`},null,8,["current","page-size","show-size-changer","total","prev-page-tooltip","next-page-tooltip","first-page-tooltip","last-page-tooltip"])):C("",!0)])],512)}}}),mn=Le(io,[["__scopeId","data-v-504a107b"]]);export{mn as default};
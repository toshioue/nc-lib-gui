const __vite__fileDeps=["./CRNALu61.js","./DKhUGBot.js","./entry.B8GgT5QA.css","./C9Sjn86N.js","./DFT4Rrrq.js","./lyxpGZoZ.js","./PlainCell.BhW7NMdh.css","./BXDR_jj4.js","./XWOJXlJc.js","./DrSobHNn.js","./DGy9VVU7.js","./DO1hNe_j.js","./boyBAVNN.js","./Ce4Hnuew.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as ot,r as T,gI as at,bL as pe,fB as rt,L as nt,d0 as st,h5 as lt,g as W,ce as a,i as it,g7 as dt,cp as ut,iY as ct,d2 as ft,H as mt,O as vt,o as x,c as R,P as g,a8 as Te,a as L,t as G,S as se,al as A,am as N,T as le,R as wt,U as Ye,w as ie,Y as He,b as Be,Z as ye,a5 as ge,a2 as pt,p as yt,e as gt,A as ht,_ as _t}from"./DKhUGBot.js";import{a as Mt}from"./6zAE39KB.js";import{a as xt}from"./BMlI7u7p.js";import{b as bt}from"./DZMsOWET.js";import{j as Dt,e as J}from"./Ce4Hnuew.js";import"./DGy9VVU7.js";import"./D-d1Vlq3.js";const kt=ye(()=>ge(()=>import("./CRNALu61.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(C=>C.default||C)),It=ye(()=>ge(()=>import("./BXDR_jj4.js"),__vite__mapDeps([7,1,2]),import.meta.url).then(C=>C.default||C)),Rt=ye(()=>ge(()=>import("./XWOJXlJc.js"),__vite__mapDeps([8,9,10,1,2,11,5,12,13]),import.meta.url).then(C=>C.default||C)),St=C=>(yt("data-v-66a6eee3"),C=C(),gt(),C),Ct={class:"flex w-full items-center"},Et=St(()=>L("div",{class:"flex-1 border-b-1 border-brand-500"},null,-1)),Ot={class:"flex sticky h-6 z-1 top-0 pl-16 bg-gray-50 w-full"},Tt={class:"absolute bg-white w-16 z-1"},Yt=["onDblclick","onClick"],Ht={class:"text-xs"},Bt={class:"absolute pointer-events-none inset-0 overflow-hidden !mt-5.95","data-testid":"nc-calendar-week-record-container"},Lt=["data-testid","data-unique-id","onMousedown","onMouseover"],zt={class:"text-xs font-medium text-gray-400"},Pt=ot({__name:"DateTimeField",emits:["expandRecord","newRecord"],setup(C,{emit:Le}){const he=Le,{selectedDateRange:H,formattedData:z,formattedSideBarData:_e,calendarRange:K,displayField:ze,viewMetaProperties:Pe,selectedTime:Q,updateRowProperty:de,sideBarFilterOption:Ae,showSideMenu:Ve}=Mt(),{$e:Me}=ht(),S=T(null),V=T(null),{width:ee}=at(S),$e=pe(rt,T(!1)),{isUIAllowed:P}=nt(),j=pe(st,T()),Fe=pe(lt,T()),{fields:xe}=xt(),Ne=W(()=>xe.value?new Map(xe.value.map(e=>[e.fk_column_id,{underline:e.underline,bold:e.bold,italic:e.italic}])):new Map),q=e=>{let t=e.day()-1;return t===-1&&(t=6),t},k=W(()=>{var e;return(e=Pe.value)!=null&&e.hide_weekend?5:7}),te=T(a()),je=W(()=>{if(!ee.value)return{top:0,left:0};const e=ee.value/k.value*q(te.value),t=te.value.hour()*60+te.value.minute(),r=52/60*t;return{width:`${ee.value/k.value}px`,top:`${r}px`,left:`${e}px`}});it(()=>{const e=dt(()=>{te.value=a()},1e4);ut(()=>{clearInterval(e)})});const ue=e=>Ne.value.get(e.id),oe=ct(({startDate:e,endDate:t,scheduleStart:r,scheduleEnd:f})=>(t!=null&&t.isValid()||(t=e.clone().add(15,"minutes")),e.isBefore(r,"minutes")&&(e=r.clone()),t.isAfter(f,"minutes")&&(t=f.clone()),{startDate:e,endDate:t})),U=W(()=>{const e=[];let t=a(H.value.start)??a().startOf("week"),r=a(H.value.end)??a().endOf("week");for(k.value===5&&(r=r.subtract(2,"day"));t.isSameOrBefore(r);){const f=[];for(let u=0;u<24;u++)f.push(a().hour(u).minute(0).second(0).millisecond(0).year(t.year()).month(t.month()).date(t.date()));e.push(f),t=t.add(1,"day")}return e}),be=(e,t=!1)=>{const r=e.hour()*60+e.minute();return t?Math.ceil(r):Math.floor(r)},qe=(e,t)=>({from:be(e,!1),to:be(t,!0)-1,dayIndex:q(e)}),Ue=(e,t)=>{var u,i;const{fromDate:r,toDate:f}=t;if(!r||!f)return!1;for(const _ of e){const n=(u=_.rowMeta.range)==null?void 0:u.fk_from_col,d=(i=_.rowMeta.range)==null?void 0:i.fk_to_col;if(!n)return!1;const{startDate:s,endDate:w}=oe({startDate:a(_.row[n.title]),endDate:d?a(_.row[d.title]):a(_.row[n.title]).add(1,"hour").subtract(1,"minute"),scheduleStart:a(H.value.start).startOf("day"),scheduleEnd:a(H.value.end).endOf("day")});if(r.isBetween(s,w,null,"[]")||f.isBetween(s,w,null,"[]"))return!1}return!0},Xe=({row:e,columnArray:t,graph:r})=>{const f=e.rowMeta.id,u=new Set,i=e.rowMeta.dayIndex,_=t[i].findIndex(w=>w.findIndex(h=>h.rowMeta.id===f)!==-1)+1,n=w=>{u.add(w);let h=1;const E=r.get(w);if(E)for(const O of E){if(h>=t[i].length)return h;u.has(O)||(h=Math.min(Math.max(h,n(O)+1),t[i].length))}return h};let d=1;r.has(f)&&n(f);const s=[];return t[i].flat().filter(w=>u.has(w.rowMeta.id)).forEach(w=>{s.push(w.rowMeta.overLapIteration)}),d=Math.max(...s),{maxOverlaps:d,dayIndex:i,overlapIndex:_}},X=W(()=>{if(!z.value||!K.value||!S.value||!V.value)return{records:[],gridTimeMap:new Map};const e=ee.value/k.value,t=52,r=a(H.value.start).startOf("day");let f=a(H.value.end).endOf("day");k.value===5&&(f=f.subtract(2,"day"));const u=[[[]]],i=new Map,_=[];return K.value.forEach(n=>{var E,O,I;const d=n.fk_from_col,s=n.fk_to_col,w=[...z.value].filter(o=>{const p=o.row[d.title]?a(o.row[d.title]):null;if(d&&s){const l=o.row[d.title]?a(o.row[d.title]):null,c=o.row[s.title]?a(o.row[s.title]):null;return l&&c&&!c.isBefore(l)}else if(d&&!s)return!!p;return!1}).sort((o,p)=>{const l=a(o.row[d.title]),c=a(p.row[d.title]);return l.isBefore(c)?1:-1});for(const o of w){const p=o.rowMeta.id??bt();if(d&&s){const{startDate:l,endDate:c}=oe({startDate:a(o.row[d.title]),endDate:a(o.row[s.title]),scheduleStart:r,scheduleEnd:f});let y=l.clone();for(;y.isSameOrBefore(c,"day");){const v=y.clone().endOf("day"),m=v.isSame(l,"day")?l:y,b=v.isSame(c,"day")?c:v,D=q(m),$=Math.max((U.value[D]??[]).findIndex(B=>B.format("HH:mm")===m.format("HH:mm")),0),re=Math.max((U.value[D]??[]).findIndex(B=>B.format("HH:mm")===(b==null?void 0:b.startOf("hour").format("HH:mm"))),0);let F="rounded";const ne=B=>B.isSame(y,"day"),Ee=B=>B.isBefore(y,"day"),Oe=B=>B.isAfter(y,"day");ne(l)&&ne(c)?F="rounded":Ee(l)&&Oe(c)?F="none":ne(l)&&Oe(c)?F="topRounded":Ee(l)&&ne(c)?F="bottomRounded":F="none";let we={};const Qe=re-$+1,et=$*t,tt=(re-$+1)*t-Qe-5;we={...we,top:`${et}px`,height:`${tt}px`},_.push({...o,rowMeta:{...o.rowMeta,id:p,style:we,range:n,position:F,dayIndex:D}}),y=y.add(1,"day").hour(0).minute(0)}}else if(d){const{startDate:l}=oe({startDate:a(o.row[d.title]),endDate:a(o.row[d.title]).add(1,"hour").subtract(1,"minute"),scheduleStart:r,scheduleEnd:f});let c={};const y=q(l),v=(l.minute()/60+l.hour())*t;c={...c,top:`${v+1}px`,height:`${t-2}px`},_.push({...o,rowMeta:{...o.rowMeta,id:p,position:"rounded",style:c,range:n,dayIndex:y}})}}_.sort((o,p)=>{var y,v;const l=(y=o.rowMeta.range)==null?void 0:y.fk_from_col,c=(v=p.rowMeta.range)==null?void 0:v.fk_from_col;return!l||!c?0:a(o.row[l.title]).isBefore(a(p.row[c.title]))?-1:1});for(const o of _){const p=(E=o.rowMeta.range)==null?void 0:E.fk_from_col,l=(O=o.rowMeta.range)==null?void 0:O.fk_to_col;if(!p)continue;const{startDate:c,endDate:y}=oe({startDate:a(o.row[p.title]),endDate:l?a(o.row[l.title]):a(o.row[p.title]).add(1,"hour").subtract(1,"minute"),scheduleStart:r,scheduleEnd:f}),v=qe(c,y),m=o.rowMeta.dayIndex??v.dayIndex;for(let D=v.from;D<=v.to;D++){i.has(m)||i.set(m,new Map),(I=i.get(m))!=null&&I.has(D)||i.set(m,(i.get(m)??new Map).set(D,{count:0,id:[]}));const $=i.get(m).get(D).id;$.push(o.rowMeta.id);const re=i.get(m).get(D).count+1;i.set(m,(i.get(m)??new Map).set(D,{count:re,id:$}))}let b=!1;u[m]||(u[m]=[]);for(const D in u[m])if(Ue(u[m][D],{fromDate:c,toDate:y})){u[m][D].push(o),b=!0;break}b||u[m].push([o])}const h=new Map;for(const o of i.keys()){h.has(o)||h.set(o,new Map);for(const[p,{id:l}]of i.get(o))for(const c of l){h.get(o).has(c)||h.get(o).set(c,new Set);for(const y of l)c!==y&&(h.get(o).get(c).has(y)||h.get(o).get(c).add(y))}}for(const o in u)for(const p in u[o])for(const l of u[o][p])l.rowMeta.overLapIteration=parseInt(p)+1;for(const o of _){const{maxOverlaps:p,overlapIndex:l,dayIndex:c}=Xe({row:o,columnArray:u,graph:h.get(o.rowMeta.dayIndex)??new Map}),y=o.rowMeta.dayIndex??c;let v="block";k.value===5&&(y===5||y===6)&&(v="none"),o.rowMeta.numberOfOverlaps=p;let m=0,b=100;const D=y*e;o.rowMeta.overLapIteration-1>2?v="none":(m=100/Math.min(p,3)/k.value,b=m*(l-1)),o.rowMeta.style={...o.rowMeta.style,left:`calc(${D}px + ${b}%)`,width:`calc(${m}%)`,display:v}}}),{records:_,gridTimeMap:i}}),ce=T(!1),fe=T(),me=T(),ae=T(),Y=T(),Z=T(!1),M=T(),Ze=ft((e,t,r)=>{de(e,t,r)},500),De=e=>{var c,y;if(!P("dataEdit")||!S.value||!Y.value||!V.value)return;const{width:t,left:r,top:f,bottom:u}=S.value.getBoundingClientRect(),{scrollHeight:i}=S.value;e.clientY>u-20?S.value.scrollTop+=10:e.clientY<f+20&&(S.value.scrollTop-=10);const _=(e.clientX-r-window.scrollX)/t,n=(e.clientY-f+S.value.scrollTop)/i,d=(c=Y.value.rowMeta.range)==null?void 0:c.fk_from_col,s=(y=Y.value.rowMeta.range)==null?void 0:y.fk_to_col;if(!d||!s)return;const w=a(Y.value.row[s.title]),h=a(Y.value.row[d.title]),E=Math.floor(_*k.value),O=Math.floor(n*23),I=Math.round(n*24*60%60);let o=[],p=Y.value;if(ae.value==="right"){let v=a(H.value.start).add(E,"day").add(O,"hour").add(I,"minute");if(o=[s.title],a(v).isBefore(h,"day")&&(v=h.clone()),!v.isValid())return;p={...Y.value,row:{...Y.value.row,[s.title]:v.format("YYYY-MM-DD HH:mm:ssZ")}}}else if(ae.value==="left"){let v=a(H.value.start).add(E,"day").add(O,"hour").add(I,"minute");if(o=[d.title],a(v).isAfter(w)&&(v=a(a(w)).clone()),!v)return;p={...Y.value,row:{...Y.value.row,[d.title]:a(v).format("YYYY-MM-DD HH:mm:ssZ")}}}const l=J(p.row,j.value.columns);z.value=z.value.map(v=>J(v.row,j.value.columns)===l?p:v),Ze(p,o,!1)},ke=()=>{ce.value=!1,ae.value=null,Y.value=null,document.removeEventListener("mousemove",De),document.removeEventListener("mouseup",ke)},We=(e,t,r)=>{P("dataEdit")&&(ce.value=!0,ae.value=e,Y.value=r,document.addEventListener("mousemove",De),document.addEventListener("mouseup",ke))},ve=(e,t,r)=>{var y,v;const{width:f,left:u,top:i}=S.value.getBoundingClientRect(),{scrollHeight:_}=S.value,n=(e.clientX-u-window.scrollX)/f,d=(e.clientY-i+S.value.scrollTop-36.8)/_,s=(y=M.value.rowMeta.range)==null?void 0:y.fk_from_col,w=(v=M.value.rowMeta.range)==null?void 0:v.fk_to_col;if(!s)return{newRow:null,updatedProperty:[]};const h=Math.max(0,Math.min(6,Math.floor(n*k.value))),E=Math.max(0,Math.min(23,Math.floor(d*24))),O=Math.round(d*24*60%60/15)*15,I=a(H.value.start).add(h,"day").add(E,"hour").add(O,"minute");if(!I)return{newRow:null,updatedProperty:[]};let o;const p=[s.title],l={...M.value,row:{...M.value.row,[s.title]:a(I).utc().format("YYYY-MM-DD HH:mm:ssZ")}};if(w){const m=M.value.row[s.title]?a(M.value.row[s.title]):null,b=M.value.row[w.title]?a(M.value.row[w.title]):null;m&&b?o=a(I).add(b.diff(m,"day"),"day"):m&&!b?o=a(I).endOf("day"):!m&&b?o=a(I).endOf("day"):o=I.clone(),l.row[w.title]=a(o).utc().format("YYYY-MM-DD HH:mm:ssZ"),p.push(w.title)}if(M.value.row[s.title]===l.row[s.title]&&!r)return{newRow:null,updatedProperty:[]};if(!l)return{newRow:null,updatedProperty:[]};const c=J(l.row,j.value.columns);return t?(z.value=[...z.value,l],_e.value=_e.value.filter(m=>J(m.row,j.value.columns)!==c)):(z.value=z.value.map(m=>J(m.row,j.value.columns)===c?l:m),M.value={...M.value,row:l.row}),{newRow:l,updatedProperty:p}},Ie=e=>{if(!P("dataEdit")||!V.value||!M.value)return;const t=V.value.getBoundingClientRect(),r=20;e.clientY>t.bottom-r?V.value.scrollTop+=20:e.clientY<t.top+r&&(V.value.scrollTop-=20),ve(e)},Re=e=>{if(!P("dataEdit")||!Z.value||!S.value||!M.value)return;e.preventDefault(),clearTimeout(fe.value);const{newRow:t,updatedProperty:r}=ve(e,!1,!0);document.querySelectorAll(".draggable-record").forEach(u=>{u.style.visibility="",u.style.opacity="100%"}),t&&de(t,r,!1),Me("c:calendar:week:drag-record"),document.removeEventListener("mousemove",Ie),document.removeEventListener("mouseup",Re)},Ge=(e,t)=>{if(ce.value)return;let r=e.target;Z.value=!1,fe.value=setTimeout(()=>{if(!P("dataEdit"))return;for(Z.value=!0;!r.classList.contains("draggable-record");)r=r.parentElement;document.querySelectorAll(".draggable-record").forEach(i=>{i.getAttribute("data-unique-id").includes(t.rowMeta.id)||(i.style.opacity="30%")}),Z.value=!0,M.value=t,document.addEventListener("mousemove",Ie),document.addEventListener("mouseup",Re)},200);const f=()=>{clearTimeout(fe.value),document.removeEventListener("mouseup",f),Z.value||he("expandRecord",t)};document.addEventListener("mouseup",f)},Je=e=>{var r;if(!P("dataEdit")||!S.value)return;e.preventDefault();const t=(r=e.dataTransfer)==null?void 0:r.getData("text/plain");if(t){const{record:f}=JSON.parse(t);M.value=f;const{newRow:u,updatedProperty:i}=ve(e,!0);u&&(de(u,i,!1),Me("c:calendar:day:drag-record"))}},Ke=e=>{Ae.value="selectedHours",Q.value=e,Ve.value=!0},Se=e=>{var _,n;if(!X.value||!X.value.gridTimeMap)return{isOverflow:!1,overflowCount:0};const{gridTimeMap:t}=X.value,r=q(e),f=e.hour()*60+e.minute(),u=e.hour()*60+e.minute()+59;let i=0;for(let d=f;d<=u;d++){const s=((n=(_=t.get(r))==null?void 0:_.get(d))==null?void 0:n.count)??0;i=Math.max(i,s)}return{isOverflow:i-3>0,overflowCount:i-3}},Ce=e=>{if(!P("dataEdit")||!K.value)return;const t=K.value[0].fk_from_col;if(!t)return;const r={row:{[t.title]:e.format("YYYY-MM-DD HH:mm:ssZ")}};he("newRecord",r)};return mt(()=>X.value,()=>{var t,r;if(M.value)return;const e=document.querySelectorAll(".draggable-record");e.length?(t=e.item(0))==null||t.scrollIntoView({behavior:"smooth",block:"center"}):(r=document.querySelectorAll(".nc-calendar-day-hour").item(9))==null||r.scrollIntoView({behavior:"smooth",block:"center"})},{immediate:!0}),(e,t)=>{const r=pt,f=kt,u=It,i=Rt,_=vt("e");return x(),R("div",{ref_key:"scrollContainer",ref:V,class:"h-[calc(100vh-5.4rem)] prevent-select relative flex w-full overflow-y-auto nc-scrollbar-md","data-testid":"nc-calendar-week-view",onDrop:Je},[!g($e)&&g(a)().isBetween(g(H).start,g(H).end)?(x(),R("div",{key:0,class:"absolute ml-16 mt-7 pointer-events-none z-4",style:Te(g(je))},[L("div",Ct,[L("span",{class:"text-brand-500 rounded-md text-xs border-1 pointer-events-auto px-0.5 border-brand-200 cursor-pointer bg-brand-50",onClick:t[0]||(t[0]=n=>Ce(g(a)()))},G(g(a)().format("hh:mm A")),1),Et])],4)):se("",!0),L("div",Ot,[(x(!0),R(A,null,N(g(U),n=>(x(),R("div",{key:n[0].toISOString(),class:le([{"text-brand-500":n[0].isSame(g(a)(),"date"),"w-1/5":g(k)===5,"w-1/7":g(k)===7},"text-center text-[10px] font-semibold leading-4 flex items-center justify-center uppercase text-gray-500 w-full py-1 border-gray-200 last:border-r-0 border-b-1 border-l-1 border-r-0 bg-gray-50"])},G(g(a)(n[0]).format("DD ddd")),3))),128))]),L("div",Tt,[(x(!0),R(A,null,N(g(U)[0],(n,d)=>(x(),R("div",{key:d,class:"h-13 first:mt-0 pt-7.1 nc-calendar-day-hour text-right pr-2 font-semibold text-xs text-gray-400 py-1"},G(n.format("hh a")),1))),128))]),L("div",{ref_key:"container",ref:S,class:"absolute ml-16 flex w-[calc(100%-64px)]"},[(x(!0),R(A,null,N(g(U),(n,d)=>(x(),R("div",{key:d,class:le([{"w-1/5":g(k)===5,"w-1/7":g(k)===7},"h-full mt-5.95"]),"data-testid":"nc-calendar-week-day"},[(x(!0),R(A,null,N(n,(s,w)=>(x(),R("div",{key:w,class:le([{"border-1 !border-brand-500 !bg-gray-100":s.isSame(g(Q),"hour")&&(s.get("day")===6||s.get("day")===0),"border-1 !border-brand-500 bg-gray-50":s.isSame(g(Q),"hour"),"bg-gray-50 hover:bg-gray-100":s.get("day")===0||s.get("day")===6,"hover:bg-gray-50":s.get("day")!==0&&s.get("day")!==6},"text-center relative transition h-13 text-sm text-gray-500 w-full py-1 border-transparent border-1 border-x-gray-100 border-t-gray-100 border-l-gray-200"]),"data-testid":"nc-calendar-week-hour",onDblclick:h=>Ce(s),onClick:()=>{Q.value=s,M.value=void 0}},[Se(s).isOverflow?wt((x(),Ye(r,{key:0,class:"!absolute bottom-1 text-center w-15 ml-auto inset-x-0 z-3 text-gray-500",size:"xxsmall",type:"secondary",onClick:h=>Ke(s)},{default:ie(()=>[L("span",Ht," + "+G(Se(s).overflowCount)+" more ",1)]),_:2},1032,["onClick"])),[[_,"['c:calendar:week-view-more']"]]):se("",!0)],42,Yt))),128))],2))),128)),L("div",Bt,[(x(!0),R(A,null,N(g(X).records,(n,d)=>{var s;return x(),R(A,{key:d},[((s=n.rowMeta.style)==null?void 0:s.display)!=="none"?(x(),R("div",{key:0,"data-testid":`nc-calendar-week-record-${n.row[g(ze).title]}`,"data-unique-id":n.rowMeta.id,style:Te(n.rowMeta.style),class:le([{"w-1/5":g(k)===5,"w-1/7":g(k)===7},"absolute transition draggable-record group cursor-pointer pointer-events-auto"]),onMousedown:He(w=>Ge(w,n),["stop"]),onMouseleave:t[1]||(t[1]=w=>me.value=null),onMouseover:w=>me.value=n.rowMeta.id,onDragover:t[2]||(t[2]=He(()=>{},["prevent"]))},[Be(i,{row:n},{default:ie(()=>{var w,h,E,O,I;return[Be(u,{hover:g(me)===n.rowMeta.id||n.rowMeta.id===((h=(w=g(M))==null?void 0:w.rowMeta)==null?void 0:h.id),position:n.rowMeta.position,resize:!!((E=n.rowMeta.range)!=null&&E.fk_to_col)&&g(P)("dataEdit"),record:n,color:"blue",selected:n.rowMeta.id===((I=(O=g(M))==null?void 0:O.rowMeta)==null?void 0:I.id),onResizeStart:We},{time:ie(()=>{var o;return[L("div",zt,G(g(a)(n.row[(o=n.rowMeta.range)==null?void 0:o.fk_from_col.title]).format("h:mm a")),1)]}),default:ie(()=>[(x(!0),R(A,null,N(g(Fe),(o,p)=>(x(),R(A,{key:p},[("isRowEmpty"in e?e.isRowEmpty:g(Dt))(n,o)?se("",!0):(x(),Ye(f,{key:0,modelValue:n.row[o.title],"onUpdate:modelValue":l=>n.row[o.title]=l,class:"text-xs",bold:ue(o).bold,column:o,italic:ue(o).italic,underline:ue(o).underline},null,8,["modelValue","onUpdate:modelValue","bold","column","italic","underline"]))],64))),128))]),_:2},1032,["hover","position","resize","record","selected"])]}),_:2},1032,["row"])],46,Lt)):se("",!0)],64)}),128))])],512)],544)}}}),Ut=_t(Pt,[["__scopeId","data-v-66a6eee3"]]);export{Ut as default};
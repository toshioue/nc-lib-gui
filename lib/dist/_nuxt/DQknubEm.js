import{_ as G}from"./BeKg4PXl.js";import{f as M,N as O,r as x,g as w,ce as S,cZ as U,i as H,o as u,c as p,b as d,P as o,w as R,d as z,a as m,al as _,am as K,cT as c,t as y,T as W,an as I,ao as Z,dF as q,a2 as Q,$ as X,aG as Y,A as tt}from"./B2hUoZAs.js";import{a as et}from"./DEQdvcPw.js";import{u as at}from"./CgLwnsk-.js";import"./CaxUP45y.js";import"./1orNHd0L.js";import"./BQQOEPN4.js";import"./R1pHeCcp.js";import"./BGKYJ52S.js";import"./C9qKCFvP.js";import"./DerldqwU.js";import"./BQN-xhuP.js";import"./7hPDkg8v.js";import"./DfZ7_DBQ.js";import"./e4fIiYA_.js";import"./B_8aIjz8.js";import"./Bye44sky.js";import"./MeGaiume.js";import"./DsH-NnX8.js";import"./BWYzyVlv.js";import"./CwHJfKcC.js";import"./i4toF4kp.js";import"./kd0F6MQ0.js";import"./aFQEf_70.js";import"./C0IYadH8.js";import"./DBQP3aKz.js";import"./BLNfZKv8.js";import"./BVocwMJB.js";import"./boyBAVNN.js";import"./_TawegBx.js";import"./BSjxiJhm.js";import"./BJXzzDZW.js";import"./D1iILnOh.js";import"./DR8NwF4k.js";import"./B-HHpLTx.js";import"./fS-pjH0A.js";const ot={class:"flex flex-col gap-2 p-2"},st=["href"],Ot=M({__name:"index",setup(lt){const{$api:E,$poller:g}=tt(),{appInfo:k}=O(),{extension:b,tables:D,fullscreen:h,getViewsForTable:C}=et(),{jobList:v,loadJobsForBase:F}=at(),f=x([]),T=w(()=>v.value.filter(t=>t.job==="data-export").map(t=>({...t,result:t.result||{}})).sort((t,e)=>S(e.created_at).unix()-S(t.created_at).unix())),a=x({}),$=w(()=>D.value.map(t=>({label:t.title,value:t.id}))),A=w(()=>a.value.tableId?f.value.filter(t=>t.type===U.GRID).map(t=>({label:t.is_default?"Default View":t.title,value:t.id}))||[]:[]),L=async()=>{a.value.tableId&&(f.value=await C(a.value.tableId))},V=async t=>{var e;a.value.tableId=t,await L(),a.value.viewId=(e=f.value.find(s=>s.is_default))==null?void 0:e.id,await b.value.kvStore.set("exportPayload",a.value)},P=async t=>{a.value.viewId=t,await b.value.kvStore.set("exportPayload",a.value)},i=x(!1);async function B(){try{if(i.value||!a.value.viewId)return;i.value=!0;const t=await E.export.data(a.value.viewId,"csv",{});v.value.unshift(t),g.subscribe({id:t.id},async e=>{var s;if(e.status!=="close"){if(e.status===c.COMPLETED){I.info("Successfully exported data!");const r=v.value.find(n=>n.id===e.id);r&&(r.status=c.COMPLETED,r.result=(s=e.data)==null?void 0:s.result),i.value=!1}else if(e.status===c.FAILED){I.error("Failed to export data!");const r=v.value.find(n=>n.id===e.id);r&&(r.status=c.FAILED),i.value=!1}}})}catch(t){I.error(await Z(t))}}const J=t=>t.startsWith("http")?t:`${k.value.ncSiteUrl||q}/${t}`,N=()=>{const t=D.value.find(s=>s.id===a.value.tableId),e=f.value.find(s=>s.id===a.value.viewId);return`${t==null?void 0:t.title} (${e!=null&&e.is_default?"Default View":e==null?void 0:e.title})`};return H(()=>{a.value=b.value.kvStore.get("exportPayload")||{},L(),F()}),(t,e)=>{const s=G,r=Q,n=X,j=Y;return u(),p("div",ot,[d(s,{value:o(a).tableId,"onUpdate:value":e[0]||(e[0]=l=>o(a).tableId=l),options:o($),onDisabled:o(i),onChange:V},null,8,["value","options","onDisabled"]),d(s,{value:o(a).viewId,"onUpdate:value":e[1]||(e[1]=l=>o(a).viewId=l),options:o(A),onDisabled:o(i),onChange:P},null,8,["value","options","onDisabled"]),d(r,{onLoading:o(i),onClick:B},{default:R(()=>[z("Export")]),_:1},8,["onLoading"]),m("div",{class:W(["flex flex-col",{"max-h-[60px] overflow-auto":!o(h)}])},[(u(!0),p(_,null,K(o(T),l=>(u(),p("div",{key:l.id,class:"flex items-center gap-1"},[l.status===("JobStatus"in t?t.JobStatus:o(c)).COMPLETED&&l.result?(u(),p(_,{key:0},[d(n,{icon:"file"}),m("div",null,y(l.result.title),1),m("a",{href:J(l.result.url),target:"_blank"},"Download",8,st)],64)):l.status===("JobStatus"in t?t.JobStatus:o(c)).FAILED?(u(),p(_,{key:1},[d(n,{icon:"error",class:"text-red-500"}),m("div",null,y(l.result.title),1)],64)):(u(),p(_,{key:2},[d(j,{size:"small"}),m("div",null,y(N()),1)],64))]))),128))],2)])}}});export{Ot as default};
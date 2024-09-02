import{u as Pa}from"./CO8XXsKl.js";import{r as h,cs as x,L as Ta,N as Fa,g as N,at as Ja,ar as Ca,cN as pa,az as Na,ai as Ma,c_ as $a,bN as Ea,dB as ja,gA as Za,H as A,d2 as E,A as Ia,aj as H,ak as j,fO as wa,d3 as Ba,fP as La,gL as za}from"./Cgw6cdOy.js";import{a as qa}from"./DFiWgQ57.js";import{e as Ga,r as Qa}from"./D7yS5JAk.js";const ra=o=>o.map(f=>({row:{...f},oldRow:{...f},rowMeta:{}})),[ee,Ka]=Pa((o,f,ha=!1,J)=>{if(!o)throw new Error("Table meta is not available");const p=h(x()),{isUIAllowed:Q}=Ta(),{isMobileMode:_a}=Fa(),Z=N(()=>{var a,e;return(e=(a=o.value)==null?void 0:a.columns)==null?void 0:e.find(l=>l.pv)}),c=h(),M=Ja({value:"",field:""}),t=h(x()),b=h(x()),D=h(x()),K=h(!1),W=h(!1),C=h(!_a.value),y=h({start:x(t.value).startOf("week"),end:x(t.value).startOf("week").add(6,"day")}),ua=25,X=h([]),I=h([]),B=h(!1),U=h([]),_=h(c.value??"allRecords"),{api:L}=Ca(),{isMysql:Oa}=pa(),{base:m}=Na(pa()),{$api:aa,$e:sa}=Ia(),{t:z}=Ma(),{addUndo:ga,clone:oa,defineViewScope:Da}=$a(),R=h(ha)||Ea(ja,h(!1)),{sorts:q,nestedFilters:F}=qa(),{sharedView:ka,fetchSharedViewData:na,fetchSharedViewActiveDate:ba,fetchSharedCalendarViewData:Sa}=Za(),Y=h({}),da=h({page:1,pageSize:ua}),ea=N(()=>({limit:da.value.pageSize??ua,where:(J==null?void 0:J.value)??""})),Ya=N(()=>{var a;return Oa((a=o.value)==null?void 0:a.source_id)?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD HH:mm:ssZ"}),S=h([]),ia=N(()=>{var a,e;return!S.value||!S.value[0]?null:(e=(a=S.value[0])==null?void 0:a.fk_from_col)==null?void 0:e.uidt}),ta=N(()=>{var e;let a=((e=Y.value)==null?void 0:e.meta)??{};if(typeof a=="string")try{a=JSON.parse(a)}catch{}return a}),$=N(()=>{let a=[];if(!S.value)return[];if(_.value==="allRecords")a=[];else if(_.value==="withoutDates")S.value.forEach(e=>{const l=e.fk_from_col,u=e.fk_to_col;if(!l)return;const r=[];l&&r.push({fk_column_id:l.id,logical_op:"or",comparison_op:"blank"}),u&&r.push({fk_column_id:u.id,logical_op:"or",comparison_op:"blank"}),a=[...a,...r]}),a=[{is_group:!0,logical_op:"or",children:a}];else if(_.value==="week"||_.value==="month"||_.value==="day"||_.value==="year"||_.value==="selectedDate"||_.value==="selectedHours"){let e=null,l=null,u=null,r=null;switch(_.value){case"day":l=t.value.startOf("day"),u=t.value.endOf("day"),e=t.value.subtract(1,"day").endOf("day"),r=t.value.add(1,"day").startOf("day");break;case"week":l=y.value.start.startOf("day"),u=y.value.end.endOf("day"),e=y.value.start.subtract(1,"day").endOf("day"),r=y.value.end.add(1,"day").startOf("day");break;case"month":{const n=D.value.startOf("month"),v=D.value.endOf("month"),i=Math.max(v.diff(n,"day")+1,35);l=n.subtract((n.day()+7)%7,"day").add(1,"day"),u=l.add(i,"day").endOf("day"),e=l.subtract(1,"day").endOf("day"),r=u.add(1,"day").startOf("day");break}case"year":l=t.value.startOf("year"),u=t.value.endOf("year"),e=l.subtract(1,"day").endOf("day"),r=u.add(1,"day").startOf("day");break;case"selectedDate":l=t.value.startOf("day"),u=t.value.endOf("day"),e=t.value.subtract(1,"day").endOf("day"),r=t.value.add(1,"day").startOf("day");break;case"selectedHours":l=(b.value??x()).startOf("hour"),u=(b.value??x()).endOf("hour"),e=l==null?void 0:l.subtract(1,"hour").endOf("hour"),r=u==null?void 0:u.add(1,"hour").startOf("hour");break}l=l.format("YYYY-MM-DD HH:mm:ssZ"),e=e.format("YYYY-MM-DD HH:mm:ssZ"),r=r.format("YYYY-MM-DD HH:mm:ssZ"),S.value.forEach(n=>{const v=n.fk_from_col,i=n.fk_to_col;let s=[];v&&i?(s=[{is_group:!0,logical_op:"and",children:[{fk_column_id:v.id,comparison_op:"lt",comparison_sub_op:"exactDate",value:r},{fk_column_id:i.id,comparison_op:"gt",comparison_sub_op:"exactDate",value:e}]},{fk_column_id:v.id,comparison_op:"eq",logical_op:"or",comparison_sub_op:"exactDate",value:l}],a.push({is_group:!0,logical_op:"or",children:s})):v&&(s=[{fk_column_id:v.id,comparison_op:"lt",comparison_sub_op:"exactDate",value:r},{fk_column_id:v.id,comparison_op:"gt",comparison_sub_op:"exactDate",value:e}],a.push({is_group:!0,logical_op:"and",children:s}))})}return Z.value&&M.value&&(a.length>0?a=[{is_group:!0,logical_op:"and",children:[...a,{fk_column_id:Z.value.id,comparison_op:"like",value:M.value}]}]:a.push({fk_column_id:Z.value.id,comparison_op:"like",value:M.value})),a});async function Ra(a={}){var e,l,u,r;if(!((!((e=m==null?void 0:m.value)!=null&&e.id)||!((l=o.value)!=null&&l.id)||!((u=f.value)!=null&&u.id))&&!R.value||!((r=S.value)!=null&&r.length))&&!B.value)try{const n=R.value?await na({...a,sortsArr:q.value,filtersArr:[...F.value,...$.value],offset:a.offset}):await L.dbViewRow.list("noco",m.value.id,o.value.id,f.value.id,{...a,offset:a.offset,...Q("filterSync")?{filterArrJson:JSON.stringify([...$.value])}:{filterArrJson:JSON.stringify([F.value,...$.value])}});I.value=[...I.value,...ra(n.list)]}catch(n){console.log(n)}}const V=async()=>{var u,r,n,v,i,s,w;if(!((u=m==null?void 0:m.value)!=null&&u.id)||!((r=o.value)!=null&&r.id)||!((n=f.value)!=null&&n.id)||!((v=S.value)!=null&&v.length))return;let a=null,e=null,l=null;if(c.value==="week"||c.value==="day"||c.value==="month"){const d=p.value.startOf("month"),g=p.value.endOf("month"),O=Math.max(g.diff(d,"day")+1,35);l=d.subtract((d.day()+7)%7,"day");const G=l.add(O,"day");a=l.subtract(1,"day").endOf("day"),e=G.add(1,"day").startOf("day")}else c.value==="year"&&(a=t.value.startOf("year").subtract(1,"day").endOf("day"),e=t.value.endOf("year").add(1,"day").startOf("day"));if(a=a.format("YYYY-MM-DD HH:mm:ssZ"),e=e.format("YYYY-MM-DD HH:mm:ssZ"),!(!((i=m==null?void 0:m.value)!=null&&i.id)||!((s=o.value)!=null&&s.id)||!((w=f.value)!=null&&w.id)))try{const d=R.value?await ba({from_date:a,to_date:e,sortsArr:q.value,filtersArr:F.value}):await L.dbCalendarViewRowCount.dbCalendarViewRowCount("noco",m.value.id,o.value.id,f.value.id,{...ea.value,from_date:a,to_date:e});U.value=d.dates.map(g=>x(g)),d.count>3e3&&c.value!=="year"&&H.warning("This current date range has more than 3000 records. Some records may not be displayed. To get complete records, contact support")}catch(d){U.value=[],H.error(`${z("msg.error.fetchingActiveDates")} ${await j(d)}`),console.log(d)}},Aa=async a=>{sa("c:calendar:change-calendar-view",a);try{c.value=a,await ca({meta:{...typeof Y.value.meta=="string"?JSON.parse(Y.value.meta):Y.value.meta,active_view:a}}),c.value==="week"&&(b.value=null)}catch(e){H.error("Error changing calendar view"),console.log(e)}};async function Ha(){var a,e,l,u;if(!(!((a=f==null?void 0:f.value)!=null&&a.id)||!((e=o==null?void 0:o.value)!=null&&e.columns))){W.value=!0;try{const r=R.value?(l=ka.value)==null?void 0:l.view:await aa.dbView.calendarRead(f.value.id);Y.value=r;const n=typeof r.meta=="string"?JSON.parse(r.meta):r.meta;c.value=n==null?void 0:n.active_view,c.value||(c.value="month"),S.value=(u=r==null?void 0:r.calendar_range)==null?void 0:u.map(v=>{var w,d,g,O,G,fa,ya,ma;const i=(d=(w=o.value)==null?void 0:w.columns)==null?void 0:d.find(T=>T.id===v.fk_from_column_id),s=v.fk_to_column_id?(O=(g=o.value)==null?void 0:g.columns)==null?void 0:O.find(T=>T.id===v.fk_to_column_id):null;if((i==null?void 0:i.uidt)===E.Formula||(s==null?void 0:s.uidt)===E.Formula){const T=(i==null?void 0:i.uidt)===E.Formula&&((fa=(G=i==null?void 0:i.colOptions)==null?void 0:G.parsed_tree)==null?void 0:fa.dataType)===wa.DATE,Va=(s==null?void 0:s.uidt)===E.Formula&&((ma=(ya=s==null?void 0:s.colOptions)==null?void 0:ya.parsed_tree)==null?void 0:ma.dataType)===wa.DATE;if(!T)return H.error(`Please update the Formula column ${i==null?void 0:i.title} to return a date`),null;if(s&&!Va)return H.error(`Please update the Formula column ${s==null?void 0:s.title} to return a date`),null}return{id:v==null?void 0:v.id,fk_from_col:i,fk_to_col:s,is_readonly:[i,s].some(T=>Ba(T)||La(T))}}).filter(Boolean)}catch(r){H.error(`Error loading calendar meta ${await j(r)}`)}finally{W.value=!1}}}async function P(a=!0){var n,v,i,s,w;if((!((n=m==null?void 0:m.value)!=null&&n.id)||!((v=o.value)!=null&&v.id)||!((i=f.value)!=null&&i.id))&&!(R!=null&&R.value)||!((s=S.value)!=null&&s.length)||c.value==="year")return;let e=null,l=null,u=null,r=null;switch(c.value){case"week":l=y.value.start.startOf("day"),u=y.value.end.endOf("day"),e=y.value.start.subtract(1,"day").endOf("day"),r=y.value.end.add(1,"day").startOf("day"),(w=ta.value)!=null&&w.hide_weekend&&(u=u.subtract(2,"day"),r=r.subtract(2,"day"));break;case"month":{const d=D.value.startOf("month"),g=D.value.endOf("month"),O=Math.max(g.diff(d,"day")+1,35);l=d.subtract((d.day()+7)%7,"day"),u=l.add(O,"day"),e=l.subtract(1,"day").endOf("day"),r=u.add(1,"day").startOf("day");break}case"day":l=t.value.startOf("day"),u=t.value.endOf("day"),e=t.value.subtract(1,"day").endOf("day"),r=t.value.add(1,"day").startOf("day");break}e=e.format("YYYY-MM-DD HH:mm:ssZ"),r=r.format("YYYY-MM-DD HH:mm:ssZ");try{a&&(K.value=!0);const d=R.value?await Sa({sortsArr:q.value,from_date:e,to_date:r,filtersArr:F.value}):await L.dbCalendarViewRow.list("noco",m.value.id,o.value.id,f.value.id,{from_date:e,to_date:r},{...ea.value,...Q("filterSync")?{filterArrJson:[]}:{filterArrJson:JSON.stringify([F.value])},where:(J==null?void 0:J.value)??"",filterArrJson:JSON.stringify([...F.value])});X.value=ra(d.list)}catch(d){H.error(`${z("msg.error.fetchingCalendarData")} ${await j(d)}`),console.log(d)}finally{K.value=!1}}async function ca(a){var l;if(!((l=f==null?void 0:f.value)!=null&&l.id)||!Q("dataEdit",{skipSourceCheck:!0})||R.value)return;const e={...typeof Y.value.meta=="string"?JSON.parse(Y.value.meta):Y.value.meta,...typeof a.meta=="string"?JSON.parse(a.meta):a.meta};try{await aa.dbView.calendarUpdate(f.value.id,{...a,meta:JSON.stringify(e)}),Y.value={...Y.value,...a,meta:e}}catch(u){H.error("Error updating changes"),console.log(u)}}function va(a){var l;const e=Qa(a,(l=o==null?void 0:o.value)==null?void 0:l.columns);for(const u of X.value)if(Object.keys(e).every(r=>e[r]===u.row[r]))return u}const xa=async a=>{switch(c.value){case"month":D.value=a==="next"?D.value.add(1,"month"):D.value.subtract(1,"month"),p.value=a==="next"?p.value.add(1,"month"):p.value.subtract(1,"month"),p.value.year()!==t.value.year()&&(p.value=t.value);break;case"year":t.value=a==="next"?t.value.add(1,"year"):t.value.subtract(1,"year"),p.value.year()!==t.value.year()&&(p.value=t.value);break;case"day":t.value=a==="next"?t.value.add(1,"day"):t.value.subtract(1,"day"),b.value=t.value,(p.value.year()!==t.value.year()||p.value.month()!==t.value.month())&&(p.value=t.value);break;case"week":y.value=a==="next"?{start:y.value.start.add(7,"day"),end:y.value.end.add(7,"day")}:{start:y.value.start.subtract(7,"day"),end:y.value.end.subtract(7,"day")},p.value.month()!==y.value.end.month()&&(p.value=y.value.start);break}},k=async(a=!0)=>{var e,l,u,r;if(!(!((e=m==null?void 0:m.value)!=null&&e.id)||!((l=o.value)!=null&&l.id)||!((u=f.value)!=null&&u.id)||!((r=S.value)!=null&&r.length)))try{a&&(B.value=!0);const n=R.value?await na({sortsArr:q.value,filtersArr:[...F.value,...$.value]}):await L.dbViewRow.list("noco",m.value.id,o.value.id,f.value.id,{...ea.value,filterArrJson:JSON.stringify([...$.value])});I.value=ra(n.list)}catch(n){H.error(`${z("msg.error.fetchingCalendarData")} ${await j(n)}`),console.log(n)}finally{B.value=!1}};async function la(a,e,l=!1){var u,r,n;try{const v=Ga(a.row,(u=o==null?void 0:o.value)==null?void 0:u.columns),i=e.reduce((w,d)=>(w[d]=a.row[d],w),{}),s=await aa.dbViewRow.update(za,m==null?void 0:m.value.id,(r=o.value)==null?void 0:r.id,(n=f==null?void 0:f.value)==null?void 0:n.id,v,i);return l||(ga({redo:{fn:async(w,d)=>{const g=await la(w,d,!0),O=va(w.row);O&&Object.assign(O.row,g),Object.assign(O==null?void 0:O.oldRow,g)},args:[oa(a),e]},undo:{fn:async(w,d)=>{const g=await la({row:w.oldRow,oldRow:w.row,rowMeta:w.rowMeta},d,!0),O=va(w.row);O&&Object.assign(O.row,g),Object.assign(O.oldRow,g)},args:[oa(a),e]},scope:Da({view:f.value})}),Object.assign(a.row,s),Object.assign(a.oldRow,s)),await V(),s}catch(v){H.error(`${z("msg.error.rowUpdateFailed")}: ${await j(v)}`)}}return A(t,async(a,e)=>{c.value==="month"||c.value==="week"?_.value==="selectedDate"&&C.value&&await k():c.value==="year"?a.year()!==e.year()?await Promise.all([P(),k(),await V()]):_.value==="selectedDate"&&C.value&&await k():C.value?await Promise.all([k(),P()]):await Promise.all([P()]),c.value==="year"&&a.year()!==e.year()&&await V()}),A(b,async()=>{ia.value!==E.Date&&C.value&&_.value==="selectedHours"&&await k()}),A(D,async()=>{c.value==="month"&&await Promise.all([P(),k(),V()])}),A(y,async()=>{c.value==="week"&&await Promise.all([P(),k()])}),A(c,async(a,e)=>{e==="week"?(p.value=t.value,D.value=b.value??t.value??y.value.start,t.value=b.value??y.value.start,b.value=t.value??y.value.start):e==="month"?(t.value=D.value,p.value=t.value,b.value=t.value,y.value={start:t.value.startOf("week"),end:t.value.endOf("week")}):e==="day"?(p.value=t.value,b.value=t.value,D.value=t.value,y.value={start:t.value.startOf("week"),end:t.value.endOf("week")}):e==="year"&&(D.value=t.value,b.value=t.value,p.value=t.value,y.value={start:t.value.startOf("week"),end:t.value.endOf("week")}),_.value=c.value??"allRecords",c.value==="year"?await Promise.all([k(),V()]):await Promise.all([P(),k(),V()])}),A(C,async a=>{a&&await k()}),A(_,async()=>{sa("a:calendar:sidebar-filter",_.value),await k()}),A(M,async()=>{await k()}),A(p,async()=>{c.value!=="year"&&await V()}),A(()=>ta.value.hide_weekend,async()=>{c.value==="week"&&await P()}),{fetchActiveDates:V,formattedSideBarData:I,loadMoreSidebarData:Ra,updateCalendarMeta:ca,loadSidebarData:k,displayField:Z,sideBarFilterOption:_,searchQuery:M,activeDates:U,isCalendarDataLoading:K,isCalendarMetaLoading:W,changeCalendarView:Aa,calDataType:ia,loadCalendarMeta:Ha,calendarRange:S,loadCalendarData:P,formattedData:X,isSidebarLoading:B,showSideMenu:C,selectedTime:b,calendarMetaData:Y,updateRowProperty:la,activeCalendarView:c,pageDate:p,paginationData:da,selectedDate:t,selectedMonth:D,selectedDateRange:y,paginateCalendarView:xa,viewMetaProperties:ta,updateFormat:Ya}});function te(){const o=Ka();if(o==null)throw new Error("Please call `useProvideCalendarViewStore` on the appropriate parent component");return o}export{te as a,ee as u};
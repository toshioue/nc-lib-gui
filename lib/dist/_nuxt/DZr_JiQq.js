import{f as j,r as I,g as W,cr as g,O as H,o,c as C,b as w,w as d,d as S,t as M,R as N,S as i,P as e,V as y,W as D,Y as O,Q as r,T as V,U as z,a as b,aV as E,a1 as L,a0 as P,p as Q,e as h,_ as q}from"./3QBYHahY.js";import{_ as A}from"./CRLT1BlI.js";import{_ as F}from"./cW5_x0lr.js";import{_ as G}from"./Kma333Sh.js";import{a as J}from"./McwC7LnE.js";import"./CSl6euFG.js";import"./BteOdwRG.js";import"./BYmqikBK.js";const K=m=>(Q("data-v-5a562183"),m=m(),h(),m),X={class:"flex gap-1"},Z={class:"flex w-full px-1 items-center justify-between"},ee=K(()=>b("div",{class:"flex-1"},null,-1)),te=j({__name:"Header",setup(m){const{selectedDate:u,selectedMonth:v,selectedDateRange:s,activeCalendarView:n,paginateCalendarView:k,activeDates:c,pageDate:l}=J(),f=I(!1),B=W(()=>{switch(n.value){case"day":return g(u.value).format("D MMM YYYY");case"week":return s.value.start.isSame(s.value.end,"month")?`${s.value.start.format("D")} - ${s.value.end.format("D MMM YY")}`:s.value.start.isSame(s.value.end,"year")?`${s.value.start.format("D MMM")} - ${s.value.end.format("D MMM YY")}`:`${s.value.start.format("D MMM YY")} - ${s.value.end.format("D MMM YY")}`;case"month":return g(v.value).format("MMM YYYY");case"year":return g(u.value).format("YYYY");default:return""}});return(p,t)=>{const Y=E,x=L,R=P,_=A,$=F,T=G,U=H("e");return o(),C("div",X,[w(x,null,{title:d(()=>[S(M(p.$t("labels.previous")),1)]),default:d(()=>[N((o(),i(Y,{class:"w-6 h-6 prev-next-btn !hover:text-gray-700 transition-all !rounded-lg flex items-center justify-center !bg-gray-100 !border-0","data-testid":"nc-calendar-prev-btn",size:"small",onClick:t[0]||(t[0]=a=>e(k)("prev"))},{default:d(()=>[(o(),i(y(("iconMap"in p?p.iconMap:e(D)).arrowLeft),{class:"h-4 !mb-0.9 !-ml-0.8 w-4"}))]),_:1})),[[U,`['c:calendar:calendar-${e(n)}-prev-btn']`]])]),_:1}),w(T,{visible:e(f),"onUpdate:visible":t[12]||(t[12]=a=>r(f)?f.value=a:null),"auto-close":!1,trigger:["click"]},{overlay:d(()=>[e(f)?(o(),C("div",{key:0,class:"w-[287px]",onClick:t[11]||(t[11]=O(()=>{},["stop"]))},[e(n)==="day"?(o(),i(_,{key:0,"active-dates":e(c),"onUpdate:activeDates":t[1]||(t[1]=a=>r(c)?c.value=a:null),"page-date":e(l),"onUpdate:pageDate":t[2]||(t[2]=a=>r(l)?l.value=a:null),"selected-date":e(u),"onUpdate:selectedDate":t[3]||(t[3]=a=>r(u)?u.value=a:null),size:"medium"},null,8,["active-dates","page-date","selected-date"])):e(n)==="week"?(o(),i(_,{key:1,"active-dates":e(c),"onUpdate:activeDates":t[4]||(t[4]=a=>r(c)?c.value=a:null),"page-date":e(l),"onUpdate:pageDate":t[5]||(t[5]=a=>r(l)?l.value=a:null),"selected-week":e(s),"onUpdate:selectedWeek":t[6]||(t[6]=a=>r(s)?s.value=a:null),"is-week-picker":"",size:"medium"},null,8,["active-dates","page-date","selected-week"])):e(n)==="month"?(o(),i($,{key:2,"page-date":e(l),"onUpdate:pageDate":t[7]||(t[7]=a=>r(l)?l.value=a:null),"selected-date":e(v),"onUpdate:selectedDate":t[8]||(t[8]=a=>r(v)?v.value=a:null),size:"medium"},null,8,["page-date","selected-date"])):e(n)==="year"?(o(),i($,{key:3,"page-date":e(l),"onUpdate:pageDate":t[9]||(t[9]=a=>r(l)?l.value=a:null),"selected-date":e(u),"onUpdate:selectedDate":t[10]||(t[10]=a=>r(u)?u.value=a:null),"is-year-picker":"",size:"medium"},null,8,["page-date","selected-date"])):V("",!0)])):V("",!0)]),default:d(()=>[w(R,{class:z([{"w-20":e(n)==="year","w-26.5":e(n)==="month","w-29":e(n)==="day","w-38":e(n)==="week"},"!h-6 prev-next-btn !bg-gray-100 !border-0"]),"full-width":"",size:"small",type:"secondary"},{default:d(()=>[b("div",Z,[b("span",{class:z([{"max-w-38 truncate":e(n)==="week"},"font-bold text-[13px] text-center text-gray-800"]),"data-testid":"nc-calendar-active-date"},M(e(B)),3),ee,(o(),i(y(("iconMap"in p?p.iconMap:e(D)).arrowDown),{class:"h-4 min-w-4 text-gray-700"}))])]),_:1},8,["class"])]),_:1},8,["visible"]),w(x,null,{title:d(()=>[S(M(p.$t("labels.next")),1)]),default:d(()=>[N((o(),i(Y,{class:"w-6 h-6 !rounded-lg flex items-center !hover:text-gray-700 prev-next-btn !bg-gray-100 !border-0 justify-center","data-testid":"nc-calendar-next-btn",size:"small",onClick:t[13]||(t[13]=a=>e(k)("next"))},{default:d(()=>[(o(),i(y(("iconMap"in p?p.iconMap:e(D)).arrowRight),{class:"h-4 !mb-0.8 !-ml-0.5 w-4"}))]),_:1})),[[U,`['c:calendar:calendar-${e(n)}-next-btn']`]])]),_:1})])}}}),ue=q(te,[["__scopeId","data-v-5a562183"]]);export{ue as default};
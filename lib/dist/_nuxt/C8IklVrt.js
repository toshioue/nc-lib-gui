import{c as at,t as nt}from"./Cy50pBgZ.js";import{e as H,r as h,ba as rt,F as m,a5 as Y,a$ as st,g as ot,k as lt,o as i,c as _,a as o,ao as D,at as O,t as y,a8 as Z,R as b,a6 as N,S as it,_ as _t,n as dt,d as ct,b as ut}from"./DZZ6t_j4.js";var ht=Object.defineProperty,Et=(t,e,n)=>e in t?ht(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e,n)=>(Et(t,typeof e!="symbol"?e+"":e,n),n);const f=class{constructor(t,e,n){c(this,"startDate"),c(this,"endDate"),c(this,"max"),c(this,"_values"),c(this,"_firstFullWeekOfMonths"),c(this,"_activities"),c(this,"_calendar"),this.endDate=this.parseDate(t),this.max=n||Math.ceil(Math.max(...e.map(s=>s.count))/5*4),this.startDate=this.shiftDate(t,-f.DAYS_IN_ONE_YEAR),this._values=e}set values(t){this.max=Math.ceil(Math.max(...t.map(e=>e.count))/5*4),this._values=t,this._firstFullWeekOfMonths=void 0,this._calendar=void 0,this._activities=void 0}get values(){return this._values}get activities(){if(!this._activities){this._activities=new Map;for(let t=0,e=this.values.length;t<e;t++)this._activities.set(this.keyDayParser(this.values[t].date),{count:this.values[t].count,colorIndex:this.getColorIndex(this.values[t].count)})}return this._activities}get weekCount(){return this.getDaysCount()/f.DAYS_IN_WEEK}get calendar(){if(!this._calendar){let t=this.shiftDate(this.startDate,-this.getCountEmptyDaysAtStart());t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),this._calendar=new Array(this.weekCount);for(let e=0,n=this._calendar.length;e<n;e++){this._calendar[e]=new Array(f.DAYS_IN_WEEK);for(let s=0;s<f.DAYS_IN_WEEK;s++){const d=this.activities.get(this.keyDayParser(t));this._calendar[e][s]={date:new Date(t.valueOf()),count:d?d.count:void 0,colorIndex:d?d.colorIndex:0},t.setDate(t.getDate()+1)}}}return this._calendar}get firstFullWeekOfMonths(){if(!this._firstFullWeekOfMonths){const t=this.calendar;this._firstFullWeekOfMonths=[];for(let e=1,n=t.length;e<n;e++){const s=t[e-1][0].date,d=t[e][0].date;(s.getFullYear()<d.getFullYear()||s.getMonth()<d.getMonth())&&this._firstFullWeekOfMonths.push({value:d.getMonth(),index:e})}}return this._firstFullWeekOfMonths}getColorIndex(t){return t==null?0:t<=0?1:t>=this.max?5:Math.ceil(t*100/this.max*.03)+1}getCountEmptyDaysAtStart(){return this.startDate.getDay()}getCountEmptyDaysAtEnd(){return f.DAYS_IN_WEEK-1-this.endDate.getDay()}getDaysCount(){return f.DAYS_IN_ONE_YEAR+1+this.getCountEmptyDaysAtStart()+this.getCountEmptyDaysAtEnd()}shiftDate(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}parseDate(t){return t instanceof Date?t:new Date(t)}keyDayParser(t){const e=this.parseDate(t);return String(e.getFullYear())+String(e.getMonth()).padStart(2,"0")+String(e.getDate()).padStart(2,"0")}};let r=f;c(r,"DEFAULT_RANGE_COLOR_LIGHT",["#ebedf0","#dae2ef","#c0ddf9","#73b3f3","#3886e1","#17459e"]),c(r,"DEFAULT_RANGE_COLOR_DARK",["#1f1f22","#1e334a","#1d466c","#1d5689","#1d69ac","#1B95D1"]),c(r,"DEFAULT_LOCALE",{months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],on:"on",less:"Less",more:"More"}),c(r,"DEFAULT_TOOLTIP_UNIT","contributions"),c(r,"DAYS_IN_ONE_YEAR",365),c(r,"DAYS_IN_WEEK",7),c(r,"SQUARE_SIZE",10);const vt=H({name:"CalendarHeatmap",props:{endDate:{required:!0},max:{type:Number},rangeColor:{type:Array},values:{type:Array,required:!0},locale:{type:Object},tooltip:{type:Boolean,default:!0},tooltipUnit:{type:String,default:r.DEFAULT_TOOLTIP_UNIT},tooltipFormatter:{type:Function},vertical:{type:Boolean,default:!1},noDataText:{type:[Boolean,String],default:null},round:{type:Number,default:0},darkMode:Boolean},emits:["dayClick"],setup(t){const e=r.SQUARE_SIZE/5,n=r.SQUARE_SIZE+e,s=Math.ceil(r.SQUARE_SIZE*2.5),d=n*3,E=r.SQUARE_SIZE+r.SQUARE_SIZE/2,l=r.SQUARE_SIZE+r.SQUARE_SIZE/2,u=`translate(${s}, ${E})`,R=h(null),x=h(new Date),v=h(new r(t.endDate,t.values,t.max)),I=h(0),U=h(0),$=h("0 0 0 0"),M=h("0 0 0 0"),C=h(""),k=h(""),F=h(""),A=h({}),T=h(t.rangeColor||(t.darkMode?r.DEFAULT_RANGE_COLOR_DARK:r.DEFAULT_RANGE_COLOR_LIGHT)),{values:P,tooltipUnit:G,tooltipFormatter:K,noDataText:V,max:z,vertical:W,locale:q}=rt(t),S=new Map;let p;function B(){S.clear(),p?p.setInstances(Array.from(S.values())):p=at(Array.from(S.values()),{overrides:[],moveTransition:"transform 0.1s ease-out",allowHTML:!0})}function J(a){if(t.tooltip){if(a.count!==void 0)return t.tooltipFormatter?t.tooltipFormatter(a,t.tooltipUnit):`<b>${a.count} ${t.tooltipUnit}</b> ${A.value.on} ${A.value.months[a.date.getMonth()]} ${a.date.getDate()}, ${a.date.getFullYear()}`;if(t.noDataText)return`${t.noDataText}`;if(t.noDataText!==!1)return`<b>No ${t.tooltipUnit}</b> ${A.value.on} ${A.value.months[a.date.getMonth()]} ${a.date.getDate()}, ${a.date.getFullYear()}`}}function j(a){return t.vertical?`translate(0, ${n*v.value.weekCount-(a+1)*n})`:`translate(${a*n}, 0)`}function X(a){return t.vertical?`translate(${a*n}, 0)`:`translate(0, ${a*n})`}function tt(a){return t.vertical?{x:3,y:n*v.value.weekCount-n*a.index-n/4}:{x:n*a.index,y:n-e}}m([Y(t,"rangeColor"),Y(t,"darkMode")],([a,g])=>{T.value=a||(g?r.DEFAULT_RANGE_COLOR_DARK:r.DEFAULT_RANGE_COLOR_LIGHT)}),m(W,a=>{a?(I.value=s+n*r.DAYS_IN_WEEK+d,U.value=E+n*v.value.weekCount+e,C.value=`translate(${s}, 0)`,k.value=`translate(0, ${E})`):(I.value=s+n*v.value.weekCount+e,U.value=E+n*r.DAYS_IN_WEEK,C.value=`translate(0, ${E})`,k.value=`translate(${s}, 0)`)},{immediate:!0}),m([I,U],([a,g])=>$.value=` 0 0 ${a} ${g}`,{immediate:!0}),m([I,U,T],([a,g,w])=>{F.value=W.value?`translate(${s+n*r.DAYS_IN_WEEK}, ${E})`:`translate(${a-n*w.length-30}, ${g-l})`},{immediate:!0}),m(q,a=>A.value=a?{...r.DEFAULT_LOCALE,...a}:r.DEFAULT_LOCALE,{immediate:!0}),m(T,a=>M.value=`0 0 ${r.SQUARE_SIZE*(a.length+1)} ${r.SQUARE_SIZE}`,{immediate:!0}),m([P,G,K,V,z,T],()=>{v.value=new r(t.endDate,t.values,t.max),S.forEach(a=>a.destroy()),st(B)}),ot(B),lt(()=>{p==null||p.destroy(),S.forEach(a=>a.destroy())});function et(a){if(p&&a.target&&a.target.classList.contains("vch__day__square")&&a.target.dataset.weekIndex!==void 0&&a.target.dataset.dayIndex!==void 0){const g=Number(a.target.dataset.weekIndex),w=Number(a.target.dataset.dayIndex);if(!isNaN(g)&&!isNaN(w)){const L=J(v.value.calendar[g][w]);if(L){const Q=S.get(a.target);Q?Q.setContent(L):Q||(S.set(a.target,nt(a.target,{content:L})),p.setInstances(Array.from(S.values())))}}}}return{SQUARE_BORDER_SIZE:e,SQUARE_SIZE:n,LEFT_SECTION_WIDTH:s,RIGHT_SECTION_WIDTH:d,TOP_SECTION_HEIGHT:E,BOTTOM_SECTION_HEIGHT:l,svg:R,heatmap:v,now:x,width:I,height:U,viewbox:$,daysLabelWrapperTransform:C,monthsLabelWrapperTransform:k,yearWrapperTransform:u,legendWrapperTransform:F,lo:A,legendViewbox:M,curRangeColor:T,getWeekPosition:j,getDayPosition:X,getMonthLabelPosition:tt,initTippyLazy:et}}}),St=(t,e)=>{const n=t.__vccOpts||t;for(const[s,d]of e)n[s]=d;return n},gt=["viewBox"],yt=["transform"],pt=["x","y"],mt=["transform"],ft=["x","y"],At=["x","y"],Dt=["x","y"],Rt=["transform"],xt=["x"],It=["rx","ry","width","height","x","y"],Ut=["x","y"],Tt=["transform"],Ot=["transform"],wt=["rx","ry","transform","width","height","data-week-index","data-day-index","onClick"],Ct={class:"vch__legend"},kt={class:"vch__legend-left"},Lt={class:"vch__legend-right"},Qt={class:"vch__legend"},Zt=["viewBox","height"],bt={class:"vch__legend__wrapper"},Nt=["rx","ry","width","height","x"];function $t(t,e,n,s,d,E){return i(),_("div",{class:it({vch__container:!0,"dark-mode":t.darkMode})},[(i(),_("svg",{class:"vch__wrapper",ref:"svg",viewBox:t.viewbox},[o("g",{class:"vch__months__labels__wrapper",transform:t.monthsLabelWrapperTransform},[(i(!0),_(D,null,O(t.heatmap.firstFullWeekOfMonths,(l,u)=>(i(),_("text",{class:"vch__month__label",key:u,x:t.getMonthLabelPosition(l).x,y:t.getMonthLabelPosition(l).y},y(t.lo.months[l.value]),9,pt))),128))],8,yt),o("g",{class:"vch__days__labels__wrapper",transform:t.daysLabelWrapperTransform},[o("text",{class:"vch__day__label",x:t.vertical?t.SQUARE_SIZE:0,y:t.vertical?t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE:20},y(t.lo.days[1]),9,ft),o("text",{class:"vch__day__label",x:t.vertical?t.SQUARE_SIZE*3:0,y:t.vertical?t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE:44},y(t.lo.days[3]),9,At),o("text",{class:"vch__day__label",x:t.vertical?t.SQUARE_SIZE*5:0,y:t.vertical?t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE:69},y(t.lo.days[5]),9,Dt)],8,mt),t.vertical?(i(),_("g",{key:0,class:"vch__legend__wrapper",transform:t.legendWrapperTransform},[o("text",{x:t.SQUARE_SIZE*1.25,y:"8"},y(t.lo.less),9,xt),(i(!0),_(D,null,O(t.curRangeColor,(l,u)=>(i(),_("rect",{key:u,rx:t.round,ry:t.round,style:Z({fill:l}),width:t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE,height:t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE,x:t.SQUARE_SIZE*1.75,y:t.SQUARE_SIZE*(u+1)},null,12,It))),128)),o("text",{x:t.SQUARE_SIZE*1.25,y:t.SQUARE_SIZE*(t.curRangeColor.length+2)-t.SQUARE_BORDER_SIZE},y(t.lo.more),9,Ut)],8,Rt)):b("",!0),o("g",{class:"vch__year__wrapper",transform:t.yearWrapperTransform,onMouseover:e[0]||(e[0]=(...l)=>t.initTippyLazy&&t.initTippyLazy(...l))},[(i(!0),_(D,null,O(t.heatmap.calendar,(l,u)=>(i(),_("g",{class:"vch__month__wrapper",key:u,transform:t.getWeekPosition(u)},[(i(!0),_(D,null,O(l,(R,x)=>(i(),_(D,{key:x},[R.date<t.now?(i(),_("rect",{key:0,class:"vch__day__square",rx:t.round,ry:t.round,transform:t.getDayPosition(x),width:t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE,height:t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE,style:Z({fill:t.curRangeColor[R.colorIndex]}),"data-week-index":u,"data-day-index":x,onClick:v=>t.$emit("dayClick",R)},null,12,wt)):b("",!0)],64))),128))],8,Ot))),128))],40,Tt)],8,gt)),o("div",Ct,[N(t.$slots,"legend",{},()=>[o("div",kt,[N(t.$slots,"vch__legend-left")]),o("div",Lt,[N(t.$slots,"legend-right",{},()=>[o("div",Qt,[o("div",null,y(t.lo.less),1),t.vertical?b("",!0):(i(),_("svg",{key:0,class:"vch__external-legend-wrapper",viewBox:t.legendViewbox,height:t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE},[o("g",bt,[(i(!0),_(D,null,O(t.curRangeColor,(l,u)=>(i(),_("rect",{key:u,rx:t.round,ry:t.round,style:Z({fill:l}),width:t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE,height:t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE,x:t.SQUARE_SIZE*u},null,12,Nt))),128))])],8,Zt)),o("div",null,y(t.lo.more),1)])])])])])],2)}const Mt=St(vt,[["render",$t]]),Ft=H({components:{CalendarHeatmap:Mt}}),Wt={class:"nc-profile-heatmap-container"};function Bt(t,e,n,s,d,E){const l=dt("CalendarHeatmap");return i(),_("div",Wt,[e[0]||(e[0]=o("div",{class:"mt-2 mb-5 text-[15px]"},[o("span",{class:"font-bold"},"122"),ct(" contributions in the last year")],-1)),ut(l,{values:[{date:"2022-12-16",count:1},{date:"2022-06-16",count:3},{date:"2022-11-16",count:6}],"end-date":new Date(new Date().getFullYear(),11,31),"no-data-text":"No Activity Today",round:3},null,8,["end-date"])])}const Pt=_t(Ft,[["render",Bt]]);export{Pt as default};
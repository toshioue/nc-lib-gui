import{e as n,o as s,c as t,a,a6 as o,R as r,S as l,_ as d}from"./DZZ6t_j4.js";const i={class:"flex-1 flex items-start gap-3"},c={key:0,class:"h-7 flex items-center children:flex-none"},_={class:"flex flex-col gap-3"},p={class:"nc-page-header-title truncate"},u={key:0,class:"nc-page-header-subtitle"},m={key:0},h=n({__name:"PageHeader",props:{bottomBorder:{type:Boolean,default:!0}},setup(f){return(e,v)=>(s(),t("div",{class:l(["nc-page-header",{"border-b-1 border-gray-200":e.bottomBorder}])},[a("div",i,[e.$slots.icon?(s(),t("div",c,[o(e.$slots,"icon",{},void 0,!0)])):r("",!0),a("div",_,[a("h1",p,[o(e.$slots,"title",{},void 0,!0)]),e.$slots.subtitle?(s(),t("p",u,[o(e.$slots,"subtitle",{},void 0,!0)])):r("",!0)])]),e.$slots.action?(s(),t("div",m,[o(e.$slots,"action",{},void 0,!0)])):r("",!0)],2))}}),g=d(h,[["__scopeId","data-v-2a4eb0a6"]]);export{g as _};
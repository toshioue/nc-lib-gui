import{f as r,o,c as l,a as s,t as c,U as t,T as i,$ as p}from"./DKhUGBot.js";const f={class:"flex"},v=r({__name:"HeaderWithSorter",props:{header:{},activeSort:{},field:{},toggleSort:{type:Function}},setup(d){return(e,n)=>{const a=p;return o(),l("div",{class:"flex items-center space-x-2 cursor-pointer text-gray-700",onClick:n[0]||(n[0]=m=>e.toggleSort(e.field))},[s("span",null,c(e.header),1),s("div",f,[e.activeSort.field===e.field?(o(),t(a,{key:0,icon:"chevronDown",class:i(["flex-none",{"transform rotate-180":e.activeSort.direction==="asc"}])},null,8,["class"])):(o(),t(a,{key:1,icon:"chevronUpDown",class:"flex-none"}))])])}}});export{v as default};
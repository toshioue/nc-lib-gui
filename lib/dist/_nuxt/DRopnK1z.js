import{f as h,ad as p,o as i,S as k,w as f,a8 as u,P as m,Q as b}from"./3QBYHahY.js";import{C as _}from"./Dg1gNFnz.js";const g=h({__name:"Checkbox",props:{checked:{type:Boolean},size:{default:"default"},disabled:{type:Boolean,default:!1}},emits:["change","update:checked"],setup(t,{emit:d}){const c=t,o=d,a=p(c,"checked",o),n=e=>{o("change",e,e.target.checked)};return(e,s)=>{const l=_;return i(),k(l,{checked:m(a),"onUpdate:checked":s[0]||(s[0]=r=>b(a)?a.value=r:null),class:"nc-checkbox",disabled:c.disabled,onChange:n},{default:f(()=>[u(e.$slots,"default")]),_:3},8,["checked","disabled"])}}});export{g as _};
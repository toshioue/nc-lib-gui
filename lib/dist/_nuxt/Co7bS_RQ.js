import{e as x,cV as b,ab as w,r as d,F as p,eL as k,o as i,Q as m,w as h,c as C,ao as V,at as g,N as f,d as L,t as B,O as M}from"./DZZ6t_j4.js";import{S,_ as y}from"./D_MsYLkT.js";import"./BCJFTkwv.js";import"./BQQOEPN4.js";import"./CB1aB6F1.js";import"./B5RRVMt5.js";import"./vll-Pnjv.js";const E=x({__name:"ChannelMultiSelect",props:{modelValue:{},availableChannelList:{},placeholder:{}},emits:["update:modelValue"],setup(r,{emit:v}){const c=b(r,["availableChannelList","placeholder"]),_=w(c,"modelValue",v),n=d([]),s=d([]);function u(a){if(a.length){let l=0;s.value=a.map(o=>({...o,idx:l++}));for(const o of c.modelValue||[]){const t=s.value.find(e=>e.webhook_url===o.webhook_url&&e.channel===o.channel);t&&n.value.push(t.idx)}}}return p(()=>r.availableChannelList,(a,l)=>{a!==l&&u(a)}),p(()=>n.value,a=>{const l=[];for(const o of a){const t=s.value.find(e=>e.idx===o);t&&l.push({webhook_url:t.webhook_url,channel:t.channel})}_.value=l}),k(()=>u(r.availableChannelList)),(a,l)=>{const o=S,t=y;return i(),m(t,{value:f(n),"onUpdate:value":l[0]||(l[0]=e=>M(n)?n.value=e:null),mode:"multiple",placeholder:a.placeholder,"max-tag-count":"responsive","dropdown-class-name":"nc-dropdown-webhook-channel"},{default:h(()=>[(i(!0),C(V,null,g(f(s),e=>(i(),m(o,{key:e.idx,value:e.idx},{default:h(()=>[L(B(e.channel),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])}}});export{E as default};
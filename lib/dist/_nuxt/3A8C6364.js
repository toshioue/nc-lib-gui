import{f as x,cO as w,ac as b,r as d,H as m,eJ as k,o as i,U as p,w as h,c as C,al as g,am as V,P as f,d as L,t as B,Q as M}from"./BLdk6lRf.js";import{S,_ as y}from"./BrF0EXdL.js";import"./CBNgcPSC.js";import"./BQQOEPN4.js";import"./DTv03lbO.js";import"./C-Z2v8Hi.js";import"./BD_L_KCX.js";const F=x({__name:"ChannelMultiSelect",props:{modelValue:{},availableChannelList:{},placeholder:{}},emits:["update:modelValue"],setup(r,{emit:v}){const c=w(r,["availableChannelList","placeholder"]),_=b(c,"modelValue",v),n=d([]),s=d([]);function u(a){if(a.length){let l=0;s.value=a.map(o=>({...o,idx:l++}));for(const o of c.modelValue||[]){const t=s.value.find(e=>e.webhook_url===o.webhook_url&&e.channel===o.channel);t&&n.value.push(t.idx)}}}return m(()=>r.availableChannelList,(a,l)=>{a!==l&&u(a)}),m(()=>n.value,a=>{const l=[];for(const o of a){const t=s.value.find(e=>e.idx===o);t&&l.push({webhook_url:t.webhook_url,channel:t.channel})}_.value=l}),k(()=>u(r.availableChannelList)),(a,l)=>{const o=S,t=y;return i(),p(t,{value:f(n),"onUpdate:value":l[0]||(l[0]=e=>M(n)?n.value=e:null),mode:"multiple",placeholder:a.placeholder,"max-tag-count":"responsive","dropdown-class-name":"nc-dropdown-webhook-channel"},{default:h(()=>[(i(!0),C(g,null,V(f(s),e=>(i(),p(o,{key:e.idx,value:e.idx},{default:h(()=>[L(B(e.channel),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value","placeholder"])}}});export{F as default};
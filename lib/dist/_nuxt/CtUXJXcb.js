import{_ as b}from"./B4q_iKR5.js";import{e as x,K as g,L as w,cL as N,ax as h,cW as y,r as B,g as T,z as r,o as V,c as k,a,b as i,w as c,d as C,t as l,N as s,ao as D,y as E,a1 as M,_ as $}from"./DZZ6t_j4.js";import{_ as z}from"./DQfemegE.js";import"./0QUe8GCE.js";import"./DNgdBwTe.js";import"./eX8_g88K.js";import"./vll-Pnjv.js";const G={class:"ml-2 font-bold text-gray-500 uppercase"},I={class:"w-full h-full !p-0"},L=x({__name:"index",setup(R){const p=g(),{appInfo:u}=w(),n=N(),{loadProject:d}=n,{base:m}=h(n);y();const o=B({}),{$api:_}=E();return T(async()=>{try{o.value=await _.public.sharedErdMetaGet(p.params.erdUuid)}catch(e){console.error(e),r("/");return}await d(!1,o.value.base_id)}),(e,t)=>{const f=M,v=b;return V(),k(D,null,[a("div",{class:"absolute z-60 transition-all duration-200 m-6 cursor-pointer transform hover:scale-105 flex text-xl items-center",onClick:t[0]||(t[0]=S=>("navigateTo"in e?e.navigateTo:s(r))("/"))},[i(f,{placement:"bottom"},{title:c(()=>[C(l(s(u).version),1)]),default:c(()=>[t[1]||(t[1]=a("img",{width:"50",alt:"NocoDB",src:z},null,-1))]),_:1}),a("div",G,l(s(m).title),1)]),a("div",I,[i(v,{"source-id":s(o).id},null,8,["source-id"])])],64)}}}),q=$(L,[["__scopeId","data-v-c0aa7ba9"]]);export{q as default};
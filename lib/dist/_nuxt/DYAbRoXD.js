import{_ as h}from"./DyexLzLp.js";import{f as x,M as g,N as w,cB as B,at as N,cP as I,r as S,i as T,B as c,o as y,c as M,a as s,b as i,w as l,d as V,t as p,P as t,al as k,A as C,a1 as D,p as E,e as P,_ as $}from"./DKhUGBot.js";import{_ as A}from"./C0L-INnH.js";import"./C93sHH2i.js";import"./BqRqK2Ui.js";import"./CNjr3NNT.js";import"./CUg8TjpL.js";const G=a=>(E("data-v-c0aa7ba9"),a=a(),P(),a),R=G(()=>s("img",{width:"50",alt:"NocoDB",src:A},null,-1)),j={class:"ml-2 font-bold text-gray-500 uppercase"},z={class:"w-full h-full !p-0"},F=x({__name:"index",setup(a){const d=g(),{appInfo:u}=w(),n=B(),{loadProject:_}=n,{base:m}=N(n);I();const o=S({}),{$api:f}=C();return T(async()=>{try{o.value=await f.public.sharedErdMetaGet(d.params.erdUuid)}catch(e){console.error(e),c("/");return}await _(!1,o.value.base_id)}),(e,r)=>{const v=D,b=h;return y(),M(k,null,[s("div",{class:"absolute z-60 transition-all duration-200 m-6 cursor-pointer transform hover:scale-105 flex text-xl items-center",onClick:r[0]||(r[0]=U=>("navigateTo"in e?e.navigateTo:t(c))("/"))},[i(v,{placement:"bottom"},{title:l(()=>[V(p(t(u).version),1)]),default:l(()=>[R]),_:1}),s("div",j,p(t(m).title),1)]),s("div",z,[i(b,{"source-id":t(o).id},null,8,["source-id"])])],64)}}}),W=$(F,[["__scopeId","data-v-c0aa7ba9"]]);export{W as default};
import{aN as f,J as p,r,aw as _,F as m,aE as b,aK as v,ds as n,dr as i,ay as h,y as x,e as S,ax as k,az as w,o as y,c as g,a as l,b as I,a2 as T,g9 as j,_ as E}from"./DZZ6t_j4.js";import{u as P}from"./BT-ahe-O.js";import{u as A}from"./CMIIcM5i.js";import{u as K}from"./9kNwGLxE.js";const N=f("projectsShortcutsStore",()=>{const{$e:o}=x(),{isUIAllowed:c}=p(),t=r(!1),a=r(!1);_().$subscribe(()=>{t.value||(t.value=!0)}),m(t,()=>{b(document,"keydown",async e=>{const d=v()?e.metaKey:e.ctrlKey;if(e.altKey&&!e.shiftKey&&!d)switch(e.keyCode){case 70:{if(!n()&&!i()){o("c:shortcut",{key:"ALT + F"});const s=A();a.value=!a.value,s.isLeftSidebarOpen=!a.value,s.isRightSidebarOpen=!a.value}break}case 188:{if(c("settingsPage")&&!n()&&!i()){o("c:shortcut",{key:"ALT + ,"});const s=h();if(!s.activeProjectId)return;s.navigateToProject({baseId:s.activeProjectId,page:"collaborators"})}break}}})})}),B={class:"h-full w-full nc-container"},L={class:"h-full w-full flex flex-col"},M={class:"w-full min-h-[300px] flex-auto"},O=S({__name:"index",setup(o){const c=P(),{activeTab:t}=k(c);return N(),w(j,t),K("nc-left-sidebar"),(a,u)=>{const e=T;return y(),g("div",B,[l("div",L,[l("div",M,[I(e)])])])}}}),$=E(O,[["__scopeId","data-v-fe96f76c"]]);export{$ as default};
import{cP as i}from"./Cgw6cdOy.js";const l=s=>/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(s),m={validator:(s,r)=>new Promise((o,e)=>{const{t}=i().global;if(!r)return e(new Error(t("msg.error.tableNameRequired")));if(r.length>52)return e(new Error(t("msg.error.columnNameExceedsCharacters",{value:52})));const n=r.match(/[./\\]/g);return n?e(new Error(`${t("msg.error.followingCharactersAreNotAllowed")} ${n.map(a=>JSON.stringify(a)).join(", ")}`)):o(!0)})},d=(s="project")=>({validator:(r,o)=>{const{t:e}=i().global;return new Promise((t,n)=>{(o==null?void 0:o.length)>50&&n(new Error(e("msg.error.projectNameExceeds50Characters",{title:e(s==="project"?"objects.project":"general.connection")}))),o[0]===" "&&n(new Error(e("msg.error.projectNameCannotStartWithSpace",{title:e(s==="project"?"objects.project":"general.connection")}))),t(!0)})}}),g=()=>{const{t:s}=i().global;return{required:!0,message:s("msg.error.requiredField")}},u=()=>({validator:(s,r)=>{const{t:o}=i().global,e=255;return new Promise((t,n)=>{(r==null?void 0:r.length)>e&&n(new Error(o("msg.error.columnNameExceedsCharacters",{value:e}))),t(!0)})}}),p=()=>({validator:(s,r)=>{const{t:o}=i().global;return new Promise((e,t)=>{(r==null?void 0:r.toLowerCase())==="id"&&t(new Error(o("msg.error.duplicateSystemColumnName"))),e(!0)})}}),w={validator:(s,r)=>new Promise((o,e)=>{const{t}=i().global;return/(10)(\.([2]([0-5][0-5]|[01234][6-9])|[1][0-9][0-9]|[1-9][0-9]|[0-9])){3}|(172)\.(1[6-9]|2[0-9]|3[0-1])(\.(2[0-4][0-9]|25[0-5]|[1][0-9][0-9]|[1-9][0-9]|[0-9])){2}|(192)\.(168)(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){2}|(0.0.0.0)|localhost?/g.test(r)?e(new Error(t("msg.error.ipNotAllowed"))):o(!0)})},f={validator:(s,r)=>new Promise((o,e)=>{const{t}=i().global;return r&&!/.*\.(csv)/.test(r)?e(new Error(`${t("msg.error.targetFileIsNotAnAcceptedFileType")}. ${t("msg.error.theAcceptedFileTypeIsCsv")}`)):o(!0)})},E={validator:(s,r)=>new Promise((o,e)=>{const{t}=i().global;return r&&!/.*\.(xls|xlsx|xlsm|ods|ots)/.test(r)?e(new Error(`${t("msg.error.targetFileIsNotAnAcceptedFileType")}. ${t("msg.error.theAcceptedFileTypesAreXlsXlsxXlsmOdsOts")}`)):o(!0)})},h={validator:(s,r)=>new Promise((o,e)=>{const{t}=i().global;for(const n of r)if(!r.every(a=>a.key==="")&&r.filter(a=>a.key===n.key).length!==1)return e(new Error(t("msg.error.duplicateParameterKeysAreNotAllowed")));return o(!0)})},b={validator:(s,r)=>new Promise((o,e)=>{if(!r||r.length===0)return e(new Error("Email is required"));const t=(r||"").split(/\s*,\s*/).filter(n=>!l(n));return t.length>0?e(new Error(`${t.length>1?" Invalid emails:":"Invalid email:"} ${t.join(", ")} `)):o(!0)})};export{m as a,d as b,f as c,E as d,h as e,g as f,u as g,b as h,w as i,p as r,l as v};
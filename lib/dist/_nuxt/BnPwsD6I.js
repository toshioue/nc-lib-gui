import{N as u,df as h}from"./B2hUoZAs.js";const l=()=>{const{appInfo:a}=u(),c=n=>{const s=[];return n!=null&&n.data&&s.push(n.data),n!=null&&n.file&&s.push(window.URL.createObjectURL(n.file)),n!=null&&n.signedPath&&s.push(`${a.value.ncSiteUrl}/${encodeURI(n.signedPath)}`),n!=null&&n.signedUrl&&s.push(n.signedUrl),n!=null&&n.path&&s.push(`${a.value.ncSiteUrl}/${encodeURI(n.path)}`),n!=null&&n.url&&s.push(n.url),s},r=async n=>{if(n!=null&&n.data)return n.data;const s=c(n);for(const o of s)try{if((await fetch(o,{method:"HEAD"})).ok)return o}catch{}return s[0]};return{getAttachmentSrc:r,getPossibleAttachmentSrc:c,openAttachment:async n=>{h(await r(n))}}};export{l as u};
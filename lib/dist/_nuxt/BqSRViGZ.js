import{N as u,dp as h}from"./3QBYHahY.js";const l=()=>{const{appInfo:o}=u(),c=(s,a)=>{const n=[];return a&&(s!=null&&s.thumbnails)&&s.thumbnails[a]&&n.push(c(s.thumbnails[a])[0]),s!=null&&s.data&&n.push(s.data),s!=null&&s.file&&n.push(window.URL.createObjectURL(s.file)),s!=null&&s.signedPath&&n.push(`${o.value.ncSiteUrl}/${encodeURI(s.signedPath)}`),s!=null&&s.signedUrl&&n.push(s.signedUrl),s!=null&&s.path&&n.push(`${o.value.ncSiteUrl}/${encodeURI(s.path)}`),s!=null&&s.url&&n.push(s.url),n},r=async s=>{if(s!=null&&s.data)return s.data;const a=c(s);for(const n of a)try{if((await fetch(n,{method:"HEAD",mode:"no-cors"})).ok)return n}catch{}return a[0]};return{getAttachmentSrc:r,getPossibleAttachmentSrc:c,openAttachment:async s=>{h(await r(s))}}};export{l as u};
import{u as a}from"./GMLocJHP.js";import{r as n,dJ as u}from"./DZZ6t_j4.js";const[r,c]=a(()=>n([]));function f(){let e=c();e||(e=r());const t=u(),s=n(-1);return{states:e,open:o=>{e.value.push(o),s.value=e.value.length-1},close:o=>{e.value.splice(o||s.value,1),(s.value===o||!o)&&t.trigger()},onClose:t.on}}export{r as s,f as u};
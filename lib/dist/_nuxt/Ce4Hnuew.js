import{cU as t,W as i,fH as y,cV as _,fF as L}from"./DKhUGBot.js";const S=[{name:t.Links,icon:i.cellLinks,virtual:1},{name:t.LinkToAnotherRecord,icon:i.cellLinks,virtual:1,deprecated:1},{name:t.Lookup,icon:i.cellLookup,virtual:1},{name:t.SingleLineText,icon:i.cellText},{name:t.LongText,icon:i.cellLongText},{name:t.Number,icon:i.cellNumber},{name:t.Decimal,icon:i.cellDecimal},{name:t.Attachment,icon:i.cellAttachment},{name:t.Checkbox,icon:i.cellCheckbox},{name:t.MultiSelect,icon:i.cellMultiSelect},{name:t.SingleSelect,icon:i.cellSingleSelect},{name:t.Date,icon:i.cellDate},{name:t.Year,icon:i.cellDate},{name:t.Time,icon:i.cellTime},{name:t.PhoneNumber,icon:i.cellPhone},{name:t.Email,icon:i.cellEmail},{name:t.URL,icon:i.cellUrl},{name:t.Currency,icon:i.cellCurrency},{name:t.Percent,icon:i.cellPercent},{name:t.Duration,icon:i.cellDuration},{name:t.Rating,icon:i.cellRating},{name:t.Formula,icon:i.cellFormula,virtual:1},{name:t.Rollup,icon:i.cellRollup,virtual:1},{name:t.DateTime,icon:i.cellDatetime},{name:t.QrCode,icon:i.cellQrCode,virtual:1},{name:t.Barcode,icon:i.cellBarcode,virtual:1},{name:t.Geometry,icon:i.cellGeometry},{name:t.GeoData,icon:i.geoData},{name:t.JSON,icon:i.cellJson},{name:t.SpecificDBType,icon:i.cellDb},{name:t.User,icon:i.cellUser},{name:t.CreatedTime,icon:i.cellSystemDate},{name:t.LastModifiedTime,icon:i.cellSystemDate},{name:t.CreatedBy,icon:i.cellSystemUser},{name:t.LastModifiedBy,icon:i.cellSystemUser}],b=e=>([...S,{name:t.CreatedTime,icon:i.cellSystemDate},{name:t.ID,icon:i.cellSystemKey},{name:t.ForeignKey,icon:i.cellLinks}].find(n=>n.name===e)||{}).icon,k=e=>{var n;return e&&e.rqd&&!T(e==null?void 0:e.cdf)&&!e.ai&&!((n=e.meta)!=null&&n.ag)},A=(e,n)=>e.uidt===t.LinkToAnotherRecord&&e.colOptions&&e.colOptions.type===y.BELONGS_TO&&k(n.find(a=>a.id===e.colOptions.fk_child_column_id)),h=(e,n)=>k(e)&&(n[e.title]===void 0||n[e.title]===null),O=(e,n)=>{let a=e,l=1;for(;n.find(r=>r.title===a);)a=`${e}_${l}`,l++;return a},x=e=>{let n;return typeof e=="object"?n=e.uidt:n=e,[t.LongText,t.SingleLineText,t.Number,t.PhoneNumber,t.Email,t.Decimal,t.Currency,t.Percent,t.Duration,t.JSON,t.URL,t.SpecificDBType].includes(n)},T=e=>!(e==null||typeof e=="string"&&e===""||Array.isArray(e)&&e.length===0||typeof e=="object"&&!Array.isArray(e)&&Object.keys(e).length===0),P=(e,n)=>{if(!e||!n)return null;const a=n.filter(l=>l.pk);return a.every(l=>(e==null?void 0:e[l.title])===null||(e==null?void 0:e[l.title])===void 0)?null:a.map(l=>e==null?void 0:e[l.title]).join("___")},j=(e,n)=>{const a={},l=n==null?void 0:n.filter(r=>r.pk);if(e&&l&&l.length)for(const r of l)r.title&&(a[r.title]=e[r.title]);return a},N=e=>!e&&!Array.isArray(e)?null:e.filter(n=>n.pk).map(n=>n.title).join("___"),B=(e,n)=>{for(const[a,l]of Object.entries(n))if(Object.keys(e).every(r=>e[r]===l.row[r]))return parseInt(a);return-1};async function U({getMeta:e,row:n,meta:a,ltarState:l,throwError:r,undo:D=!1}){var f;const s=new Set,g=await((f=a.columns)==null?void 0:f.reduce(async(C,c)=>{const o=await C;if(l&&c.uidt===t.LinkToAnotherRecord&&c.colOptions.type===y.BELONGS_TO&&l[c.title]){const u=c.colOptions,m=a.columns.find(d=>u.fk_child_column_id===d.id),p=await e(u.fk_related_model_id);p&&m&&(o[m.title]=l[c.title][p.columns.find(d=>d.id===u.fk_parent_column_id).title],s.delete(m.title))}return h(c,n)&&s.add(c.title),(!c.ai||D)&&(n==null?void 0:n[c.title])!==null&&(o[c.title]=n==null?void 0:n[c.title]),o},Promise.resolve({})));if(r&&s.size)throw new Error(`Missing required columns: ${[...s].join(", ")}`);return{missingRequiredColumns:s,insertObj:g}}const E=(e=[])=>e.reduce((a,l)=>{if(!_(l)&&!L(l)&&![t.Rollup,t.Lookup,t.Formula,t.Barcode,t.QrCode].includes(l.uidt)&&T(l==null?void 0:l.cdf)&&!/^\w+\(\)|CURRENT_TIMESTAMP$/.test(l.cdf)){const r=l.cdf;a[l.title]=typeof r=="string"?r.replace(/^'|'$/g,""):r}return a},{}),I=(e,n)=>{if(!e||!n)return!0;const a=e.row[n.title];return a==null||a===""?!0:Array.isArray(a)&&a.length===0};export{x as a,A as b,h as c,E as d,P as e,B as f,b as g,N as h,T as i,I as j,O as k,U as p,j as r,S as u};
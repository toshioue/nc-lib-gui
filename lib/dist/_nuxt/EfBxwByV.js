import{cU as e}from"./DKhUGBot.js";const u=(a,c)=>{const t=c?[{text:"Count (9 → 1)",value:"count-desc"},{text:"Count (1 → 9)",value:"count-asc"}]:[];switch(a){case e.Year:case e.Number:case e.Decimal:case e.Rating:case e.Count:case e.AutoNumber:case e.Time:case e.Currency:case e.Percent:case e.Duration:case e.PhoneNumber:case e.Date:case e.DateTime:case e.CreatedTime:case e.LastModifiedTime:return[{text:"1 → 9",value:"asc"},{text:"9 → 1",value:"desc"}].concat(t);case e.Checkbox:return[{text:"▢ → ✓",value:"asc"},{text:"✓ → ▢",value:"desc"}].concat(t);default:return[{text:"A → Z",value:"asc"},{text:"Z → A",value:"desc"}].concat(t)}};export{u as g};
import{ar as a,cM as o}from"./DZZ6t_j4.js";const t=localStorage.getItem("betaFeatureToggleState"),s=t?JSON.parse(t):!1,e=a({show:s}),r=()=>{e.show=!e.show,localStorage.setItem("betaFeatureToggleState",JSON.stringify(e.show))},g=()=>({betaFeatureToggleState:e,toggleBetaFeature:r}),c=o(g);export{c as u};
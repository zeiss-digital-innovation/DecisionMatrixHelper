import{b as i,c as F,a as c}from"./QTable.f442c11f.js";import{Q as P}from"./QPage.4343436a.js";import{k as Q,j as h}from"./features.8df09bb9.js";import{B as E,r as N,C as s,D as l,E as r,F as u,K as f,a3 as d,a4 as m,I as p,J as g,G as _,H as b}from"./index.5ca0c235.js";import"./QBtn.263ed5c5.js";import"./QSeparator.d4b96fea.js";import"./use-dark.65b09243.js";import"./QCheckbox.08887942.js";const T=g("td",{class:"bg-grey-2"},[g("b",null,"Sum:")],-1),J=E({__name:"ResultsPage",setup(C){const n=Q(),y=h(),w=n.alternatives.reduce((t,o)=>(o.assessments.forEach(e=>{const a=y.getFeatureById(e.feature.id).name;t[a]||(t[a]={feature:a}),e.feature.isExclusive?t[a][o.name]=e.score*5:t[a][o.name]=e.score*e.feature.status}),t),{}),k=Object.values(w),B=N(n.alternativeNames.map(t=>({name:t,label:t,field:"name",align:"center"}))),S=[{name:"feature",label:"Feature",field:"feature",align:"left"},...B.value],v={sortBy:"desc",descending:!1,page:1,rowsPerPage:10};return(t,o)=>(s(),l(P,{padding:""},{default:r(()=>[u(F,{flat:"",title:"Results",rows:p(k),columns:S,"row-key":"feature",pagination:v,separator:"vertical"},{body:r(e=>[u(i,{props:e},{default:r(()=>[(s(!0),f(m,null,d(e.row,(a,x)=>(s(),l(c,{props:e,key:x},{default:r(()=>[_(b(a),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"bottom-row":r(()=>[u(i,null,{default:r(()=>[T,(s(!0),f(m,null,d(p(n).alternatives,(e,a)=>(s(),l(c,{class:"bg-grey-2",align:"center",key:a},{default:r(()=>[_(b(e.score),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["rows"])]),_:1}))}});export{J as default};
import{b as i,c as Q,a as c}from"./QTable.acaa960e.js";import{Q as h}from"./QPage.cd6fa048.js";import{k as x}from"./alternative.4e95abac.js";import{B as N,r as S,C as s,D as l,E as r,F as u,K as f,a3 as m,a4 as d,I as p,J as g,G as _,H as b}from"./index.97ae05ef.js";import"./QBtn.cd4d6a81.js";import"./QSeparator.d3c158f6.js";import"./use-dark.daaa1fd6.js";import"./QCheckbox.3da508d1.js";const T=g("td",{class:"bg-grey-2"},[g("b",null,"Sum:")],-1),H=N({__name:"ResultsPage",setup(C){const o=x(),w=o.alternatives.reduce((t,n)=>(n.assessments.forEach(e=>{const a=e.feature.name;t[a]||(t[a]={feature:a}),t[a][n.name]=e.score*e.feature.status}),t),{}),y=Object.values(w),k=S(o.alternativeNames.map(t=>({name:t,label:t,field:"name",align:"center"}))),B=[{name:"feature",label:"Feature",field:"feature",align:"left"},...k.value],v={sortBy:"desc",descending:!1,page:1,rowsPerPage:10};return(t,n)=>(s(),l(h,{padding:""},{default:r(()=>[u(Q,{flat:"",title:"Results",rows:p(y),columns:B,"row-key":"feature",pagination:v,separator:"vertical"},{body:r(e=>[u(i,{props:e},{default:r(()=>[(s(!0),f(d,null,m(e.row,(a,P)=>(s(),l(c,{props:e,key:P},{default:r(()=>[_(b(a),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"bottom-row":r(()=>[u(i,null,{default:r(()=>[T,(s(!0),f(d,null,m(p(o).alternatives,(e,a)=>(s(),l(c,{class:"bg-grey-2",align:"center",key:a},{default:r(()=>[_(b(e.score),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["rows"])]),_:1}))}});export{H as default};

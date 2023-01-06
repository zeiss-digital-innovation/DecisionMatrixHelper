import{Q as r}from"./QBtn.f1d511bb.js";import{Q as F}from"./QSpace.7dcdf012.js";import{a as b,b as i,d as k,e as E,f as _}from"./QTable.e9c69fb1.js";import{Q as w}from"./QInput.803f3553.js";import{a as g,c as C,S as a,v as Q}from"./alternative.1a0ba987.js";import{v as U,r as u,y as S,z as A,A as o,B as l,E as m}from"./index.e0e0823a.js";const z=U({__name:"FeaturesComponent",setup(q){const n=g(),c=C();u(!1),u("");const d=u(["name","description","status","delete","isExclusive"]),p=u(!1),y=[{label:a[a["very important"]],value:a["very important"]},{label:a[a.important],value:a.important},{label:a[a["less important"]],value:a["less important"]},{label:a[a.unimportant],value:a.unimportant},{label:a[a.undefined],value:a.undefined}],f=[{name:"name",align:"left",label:"Features",field:"name",sortable:!0},{name:"description",align:"left",label:"Description (editable)",field:"description",sortable:!0},{name:"isExclusive",label:"Exclusive Feature",field:"isExclusive",sortable:!0},{name:"status",align:"center",label:"Status",field:"status",sortable:!0},{name:"delete",label:"",field:"delete"}];function V(){if(n.features.length>0&&n.features[n.features.length-1].name==="new Feature")return;const s={id:Q(),name:"Feature "+n.features.length,description:"new Feature description",status:a.undefined,isExclusive:!1};n.addFeature(s),c.updateAlternativeWithFeature(s)}function h(s){n.deleteFeature(s),c.deleteAssessmentWithFeature(s)}function x(){n.deleteAllFeatures()}return(s,v)=>(S(),A(_,{flat:"",title:"Features",rows:m(n).features,columns:f,"visible-columns":d.value,"rows-per-page-options":[10],"row-key":"features.id"},{top:o(()=>[l(r,{class:"q-ma-md",color:"primary",icon:"add",label:"",onClick:V,"no-caps":""}),l(r,{class:"q-ma-md",color:"primary",icon:"delete",label:"",onClick:x,"no-caps":""}),l(F),l(b,{modelValue:d.value,"onUpdate:modelValue":v[0]||(v[0]=e=>d.value=e),multiple:"",outlined:"",dense:"","options-dense":"","display-value":s.$q.lang.table.columns,"emit-value":"","map-options":"",options:f,"option-value":"name","options-cover":"",style:{"min-width":"150px"}},null,8,["modelValue","display-value"]),l(r,{class:"q-ml-md",color:"primary","icon-right":"archive",label:"Export to csv","no-caps":""})]),body:o(e=>[l(E,{props:e},{default:o(()=>[l(i,{key:"name",props:e,"auto-width":""},{default:o(()=>[l(w,{style:{"min-width":"128px"},label:"Name",modelValue:e.row.name,"onUpdate:modelValue":t=>e.row.name=t,type:"textarea",readonly:p.value,autogrow:"",borderless:"",dense:""},null,8,["modelValue","onUpdate:modelValue","readonly"])]),_:2},1032,["props"]),l(i,{key:"description",props:e},{default:o(()=>[l(w,{label:"Description",modelValue:e.row.description,"onUpdate:modelValue":t=>e.row.description=t,type:"textarea",readonly:p.value,autogrow:"",borderless:"",dense:""},null,8,["modelValue","onUpdate:modelValue","readonly"])]),_:2},1032,["props"]),l(i,{key:"isExclusive",props:e,"auto-width":""},{default:o(()=>[l(k,{modelValue:e.row.isExclusive,"onUpdate:modelValue":t=>e.row.isExclusive=t},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),l(i,{key:"status",props:e,"auto-width":""},{default:o(()=>[l(b,{style:{"min-width":"180px"},label:"Priority","map-options":"",modelValue:e.row.status,"onUpdate:modelValue":t=>e.row.status=t,options:y,disable:e.row.isExclusive,"emit-value":"",borderless:"",dense:"",clearable:e.row.status!=m(a).undefined,onClear:t=>e.row.status=m(a).undefined},null,8,["modelValue","onUpdate:modelValue","disable","clearable","onClear"])]),_:2},1032,["props"]),l(i,{key:"delete",props:e,"auto-width":""},{default:o(()=>[l(r,{class:"q-ml-md",color:"secondary","icon-right":"delete","no-caps":"",onClick:t=>h(e.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"bottom-row":o(()=>[]),_:1},8,["rows","visible-columns"]))}});export{z as _};
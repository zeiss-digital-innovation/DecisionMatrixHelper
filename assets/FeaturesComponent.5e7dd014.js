import{i as m}from"./QBtn.263ed5c5.js";import{Q as k}from"./QSpace.4fc17f1b.js";import{Q as b,a as i,b as E,c as C}from"./QTable.f442c11f.js";import{Q as w}from"./QInput.41f25eba.js";import{n as _}from"./QCheckbox.08887942.js";import{j as Q,k as U,v as A}from"./features.8df09bb9.js";import{B as q,r as y,C as D,D as B,E as r,F as l,I as p}from"./index.5ca0c235.js";var a=(o=>(o[o["very important"]=4]="very important",o[o.important=3]="important",o[o["less important"]=2]="less important",o[o.unimportant=1]="unimportant",o[o.undefined=0]="undefined",o))(a||{});const P=q({__name:"FeaturesComponent",setup(o){const s=Q(),u=U(),c=y(["name","description","status","delete","isExclusive"]),f=y(!1),h=[{label:a[a["very important"]],value:a["very important"]},{label:a[a.important],value:a.important},{label:a[a["less important"]],value:a["less important"]},{label:a[a.unimportant],value:a.unimportant},{label:a[a.undefined],value:a.undefined}],v=[{name:"name",align:"left",label:"Features",field:"name",sortable:!0},{name:"description",align:"left",label:"Description (editable)",field:"description",sortable:!0},{name:"isExclusive",label:"Exclusive Feature",field:"isExclusive",sortable:!0},{name:"status",align:"center",label:"Status",field:"status",sortable:!0},{name:"delete",label:"",field:"delete"}];function V(t){console.log(t),u.updateAlternativeWithFeature(t)}function F(){if(s.features.length>0&&s.features[s.features.length-1].name==="new Feature")return;const t={id:A(),name:"Feature "+s.features.length,description:"new Feature description",status:a.undefined,isExclusive:!1};s.addFeature(t),u.updateAlternativeWithFeature(t)}function x(t){s.deleteFeature(t),u.deleteAssessmentWithFeature(t)}function g(){let t=[...s.features];console.log(t),s.deleteAllFeatures(),t.forEach(d=>u.deleteAssessmentWithFeature(d))}return(t,d)=>(D(),B(C,{flat:"",title:"Features",rows:p(s).features,columns:v,"visible-columns":c.value,"rows-per-page-options":[10],"row-key":"features.id"},{top:r(()=>[l(m,{class:"q-ma-sm",color:"primary",icon:"add",label:"",onClick:F,"no-caps":""}),l(m,{class:"q-ma-sm",color:"secondary",icon:"delete",label:"",onClick:g,"no-caps":""}),l(k),l(b,{modelValue:c.value,"onUpdate:modelValue":d[0]||(d[0]=e=>c.value=e),multiple:"",outlined:"",dense:"","options-dense":"","display-value":t.$q.lang.table.columns,"emit-value":"","map-options":"",options:v,"option-value":"name","options-cover":"",style:{"min-width":"150px"}},null,8,["modelValue","display-value"]),l(m,{class:"q-ml-md",color:"primary","icon-right":"archive",label:"Export to csv","no-caps":""})]),body:r(e=>[l(E,{props:e},{default:r(()=>[l(i,{key:"name",props:e,"auto-width":""},{default:r(()=>[l(w,{style:{"min-width":"128px"},label:"Name",modelValue:e.row.name,"onUpdate:modelValue":n=>e.row.name=n,type:"textarea",readonly:f.value,autogrow:"",borderless:"",dense:""},null,8,["modelValue","onUpdate:modelValue","readonly"])]),_:2},1032,["props"]),l(i,{key:"description",props:e},{default:r(()=>[l(w,{label:"Description",modelValue:e.row.description,"onUpdate:modelValue":n=>e.row.description=n,type:"textarea",readonly:f.value,autogrow:"",borderless:"",dense:""},null,8,["modelValue","onUpdate:modelValue","readonly"])]),_:2},1032,["props"]),l(i,{key:"isExclusive",props:e,"auto-width":""},{default:r(()=>[l(_,{modelValue:e.row.isExclusive,"onUpdate:modelValue":n=>e.row.isExclusive=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),l(i,{key:"status",props:e,"auto-width":""},{default:r(()=>[l(b,{style:{"min-width":"180px"},label:"Priority","map-options":"",modelValue:e.row.status,"onUpdate:modelValue":[n=>e.row.status=n,n=>V(e.row)],options:h,disable:e.row.isExclusive,"emit-value":"",borderless:"",dense:"",clearable:e.row.status!=p(a).undefined,onClear:n=>e.row.status=p(a).undefined},null,8,["modelValue","onUpdate:modelValue","disable","clearable","onClear"])]),_:2},1032,["props"]),l(i,{key:"delete",props:e,"auto-width":""},{default:r(()=>[l(m,{class:"q-ml-md",color:"secondary","icon-right":"delete","no-caps":"",onClick:n=>x(e.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"bottom-row":r(()=>[]),_:1},8,["rows","visible-columns"]))}});export{P as _};
import{Q as c,i as r}from"./QBtn.1910c017.js";import{Q as d,a as o,b as p}from"./QCard.f610a2b8.js";import{Q as m}from"./QSpace.5291607d.js";import{Q as v}from"./QSlideTransition.37154c10.js";import{Q as f}from"./QPage.e46d975d.js";import{B as x,r as a,D as n,E as _,F as i,K as s,a0 as b,a1 as g,a2 as y,G as t,I as l,k as Q,H as h,a3 as k}from"./index.1bb13a1b.js";import"./use-dark.541063fe.js";const w={class:"q-pa-md row items-start q-gutter-md justify-evenly"},S={class:"text-h6"},q={class:"text-subtitle2"},A=x({__name:"IndexPage",setup(C){const u=[{title:"Wizard",subtitle:"guided decision making",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.",route:"wizard",icon:"auto_fix_normal",expanded:a(!1)},{title:"Alternatives",subtitle:"edit all alternatives",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.",route:"alternatives",icon:"build",expanded:a(!1)},{title:"Features",subtitle:"edit all features",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.",route:"features",icon:"checklist",expanded:a(!1)},{title:"Decision Matrix",subtitle:"show your decisions",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, molestias dolores voluptas dicta iure illo. Vero voluptate velit aperiam praesentium accusantium unde esse? Sunt earum quas non excepturi sit.",route:"decisionMatrix",icon:"functions",expanded:a(!1)}];return(V,B)=>(n(),_(f,{class:"flex justify-center items-center"},{default:i(()=>[s("div",w,[(n(),b(y,null,g(u,e=>t(d,{style:{width:"220px"},key:e.route},{default:i(()=>[t(o,{avatar:"",class:"q-ml-lg q-mt-lg",horizontal:""},{default:i(()=>[t(c,{size:"md",name:e.icon,color:"secondary"},null,8,["name"])]),_:2},1024),t(o,null,{default:i(()=>[s("div",S,l(e.title),1),s("div",q,l(e.subtitle),1)]),_:2},1024),t(p,null,{default:i(()=>[t(r,{flat:"",color:"primary",label:"go to: "+e.title,to:e.route,"no-caps":""},null,8,["label","to"]),t(m),t(r,{color:"grey",round:"",flat:"",dense:"",icon:e.expanded.value?"keyboard_arrow_up":"keyboard_arrow_down",onClick:P=>e.expanded.value=!e.expanded.value},null,8,["icon","onClick"])]),_:2},1024),t(v,null,{default:i(()=>[Q(s("div",null,[t(o,{class:"text-overline text-caption text-grey"},{default:i(()=>[h(l(e.description),1)]),_:2},1024)],512),[[k,e.expanded.value]])]),_:2},1024)]),_:2},1024)),64))])]),_:1}))}});export{A as default};

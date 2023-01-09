import{c as U,h as ye,a as gt,b as Ze,d as Oe,u as yt,e as pt,Q as ie,f as St,g as zt,i as W,R as me}from"./QBtn.cd4d6a81.js";import{c as i,h as w,i as Pe,e as Y,r as _,w as A,o as pe,l as Se,g as te,a as et,n as wt,b as _t,d as xt,f as Ct,j as qt,k as j,m as $e,s as kt,p as tt,q as Tt,t as Ft,u as at,v as Pt,x as Vt,y as he,z as Ot,A as $t,B as Qt,C as ae,D as ne,E as k,F as b,G as le,H as Qe,I as qe,J as ce,K as Bt,L as Be,R as Lt,P as At}from"./index.97ae05ef.js";import{Q as Le}from"./QSpace.2ef2f611.js";import{Q as de,T as se}from"./TouchPan.141969c1.js";import{b as ee,u as Dt,a as Mt,c as Ht,d as Rt,e as jt,f as Nt,g as Et,h as Ae,i as It,j as Wt,k as Ut,Q as be,l as Z}from"./alternative.4e95abac.js";import{Q as De}from"./QBadge.6277acd3.js";import{g as Kt,a as Yt,b as Xt,s as Me,c as He,u as Jt,d as Gt,e as Zt,f as ea,h as ta,Q as aa,i as ke,j as la,k as na,l as oa,m as Re,n as ia}from"./QCheckbox.3da508d1.js";import{u as lt,a as nt}from"./use-dark.daaa1fd6.js";import{Q as je,a as Te,b as Ne}from"./QCard.06d7ddd4.js";import{u as ra}from"./use-file-dom-props.b0870953.js";var Ee=U({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:h}){const c=i(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:c.value},ye(h.default))}}),Ie=U({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:h}){const c=i(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:c.value,role:"toolbar"},ye(h.default))}}),ua=U({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:h,emit:c}){const{proxy:{$q:s}}=te(),n=Pe(Se,Y);if(n===Y)return console.error("QHeader needs to be child of QLayout"),Y;const d=_(parseInt(e.heightHint,10)),f=_(!0),t=i(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||s.platform.is.ios&&n.isContainer.value===!0),T=i(()=>{if(e.modelValue!==!0)return 0;if(t.value===!0)return f.value===!0?d.value:0;const a=d.value-n.scroll.value.position;return a>0?a:0}),S=i(()=>e.modelValue!==!0||t.value===!0&&f.value!==!0),r=i(()=>e.modelValue===!0&&S.value===!0&&e.reveal===!0),L=i(()=>"q-header q-layout__section--marginal "+(t.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(S.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),O=i(()=>{const a=n.rows.value.top,F={};return a[0]==="l"&&n.left.space===!0&&(F[s.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),a[2]==="r"&&n.right.space===!0&&(F[s.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),F});function z(a,F){n.update("header",a,F)}function v(a,F){a.value!==F&&(a.value=F)}function m({height:a}){v(d,a),z("size",a)}function Q(a){r.value===!0&&v(f,!0),c("focusin",a)}A(()=>e.modelValue,a=>{z("space",a),v(f,!0),n.animate()}),A(T,a=>{z("offset",a)}),A(()=>e.reveal,a=>{a===!1&&v(f,e.modelValue)}),A(f,a=>{n.animate(),c("reveal",a)}),A(n.scroll,a=>{e.reveal===!0&&v(f,a.direction==="up"||a.position<=e.revealOffset||a.position-a.inflectionPoint<100)});const x={};return n.instances.header=x,e.modelValue===!0&&z("size",d.value),z("space",e.modelValue),z("offset",T.value),pe(()=>{n.instances.header===x&&(n.instances.header=void 0,z("size",0),z("offset",0),z("space",!1))}),()=>{const a=gt(h.default,[]);return e.elevated===!0&&a.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(w(de,{debounce:0,onResize:m})),w("header",{class:L.value,style:O.value,onFocusin:Q},a)}}});const{passive:We}=_t,sa=["both","horizontal","vertical"];var ot=U({name:"QScrollObserver",props:{axis:{type:String,validator:e=>sa.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:h}){const c={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let s=null,n,d;A(()=>e.scrollTarget,()=>{T(),t()});function f(){s!==null&&s();const L=Math.max(0,Yt(n)),O=Xt(n),z={top:L-c.position.top,left:O-c.position.left};if(e.axis==="vertical"&&z.top===0||e.axis==="horizontal"&&z.left===0)return;const v=Math.abs(z.top)>=Math.abs(z.left)?z.top<0?"up":"down":z.left<0?"left":"right";c.position={top:L,left:O},c.directionChanged=c.direction!==v,c.delta=z,c.directionChanged===!0&&(c.direction=v,c.inflectionPoint=c.position),h("scroll",{...c})}function t(){n=Kt(d,e.scrollTarget),n.addEventListener("scroll",S,We),S(!0)}function T(){n!==void 0&&(n.removeEventListener("scroll",S,We),n=void 0)}function S(L){if(L===!0||e.debounce===0||e.debounce==="0")f();else if(s===null){const[O,z]=e.debounce?[setTimeout(f,e.debounce),clearTimeout]:[requestAnimationFrame(f),cancelAnimationFrame];s=()=>{z(O),s=null}}}const{proxy:r}=te();return et(()=>{d=r.$el.parentNode,t()}),pe(()=>{s!==null&&s(),T()}),Object.assign(r,{trigger:S,getPosition:()=>c}),wt}});const Ue=["vertical","horizontal"],Fe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ke={prevent:!0,mouse:!0,mouseAllDir:!0},Ye=e=>e>=250?50:Math.ceil(e/5);var ca=U({name:"QScrollArea",props:{...lt,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:h,emit:c}){const s=_(!1),n=_(!1),d=_(!1),f={vertical:_(0),horizontal:_(0)},t={vertical:{ref:_(null),position:_(0),size:_(0)},horizontal:{ref:_(null),position:_(0),size:_(0)}},{proxy:T}=te(),S=nt(e,T.$q);let r,L;const O=_(null),z=i(()=>"q-scrollarea"+(S.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=i(()=>{const u=t.vertical.size.value-f.vertical.value;if(u<=0)return 0;const o=ee(t.vertical.position.value/u,0,1);return Math.round(o*1e4)/1e4}),t.vertical.thumbHidden=i(()=>(e.visible===null?d.value:e.visible)!==!0&&s.value===!1&&n.value===!1||t.vertical.size.value<=f.vertical.value+1),t.vertical.thumbStart=i(()=>t.vertical.percentage.value*(f.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=i(()=>Math.round(ee(f.vertical.value*f.vertical.value/t.vertical.size.value,Ye(f.vertical.value),f.vertical.value))),t.vertical.style=i(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=i(()=>{const u=t.horizontal.size.value-f.horizontal.value;if(u<=0)return 0;const o=ee(t.horizontal.position.value/u,0,1);return Math.round(o*1e4)/1e4}),t.horizontal.thumbHidden=i(()=>(e.visible===null?d.value:e.visible)!==!0&&s.value===!1&&n.value===!1||t.horizontal.size.value<=f.horizontal.value+1),t.horizontal.thumbStart=i(()=>t.horizontal.percentage.value*(f.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=i(()=>Math.round(ee(f.horizontal.value*f.horizontal.value/t.horizontal.size.value,Ye(f.horizontal.value),f.horizontal.value))),t.horizontal.style=i(()=>({...e.thumbStyle,...e.horizontalThumbStyle,left:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const v=i(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),m=[[se,u=>{B(u,"vertical")},void 0,{vertical:!0,...Ke}]],Q=[[se,u=>{B(u,"horizontal")},void 0,{horizontal:!0,...Ke}]];function x(){const u={};return Ue.forEach(o=>{const y=t[o];u[o+"Position"]=y.position.value,u[o+"Percentage"]=y.percentage.value,u[o+"Size"]=y.size.value,u[o+"ContainerSize"]=f[o].value}),u}const a=xt(()=>{const u=x();u.ref=T,c("scroll",u)},0);function F(u,o,y){if(Ue.includes(u)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(u==="vertical"?He:Me)(O.value,o,y)}function p({height:u,width:o}){let y=!1;f.vertical.value!==u&&(f.vertical.value=u,y=!0),f.horizontal.value!==o&&(f.horizontal.value=o,y=!0),y===!0&&M()}function V({position:u}){let o=!1;t.vertical.position.value!==u.top&&(t.vertical.position.value=u.top,o=!0),t.horizontal.position.value!==u.left&&(t.horizontal.position.value=u.left,o=!0),o===!0&&M()}function g({height:u,width:o}){t.horizontal.size.value!==o&&(t.horizontal.size.value=o,M()),t.vertical.size.value!==u&&(t.vertical.size.value=u,M())}function B(u,o){const y=t[o];if(u.isFirst===!0){if(y.thumbHidden.value===!0)return;L=y.position.value,n.value=!0}else if(n.value!==!0)return;u.isFinal===!0&&(n.value=!1);const $=Fe[o],I=f[o].value,re=(y.size.value-I)/(I-y.thumbSize.value),ze=u.distance[$.dist],ve=L+(u.direction===$.dir?1:-1)*ze*re;X(ve,o)}function D(u,o){const y=t[o];if(y.thumbHidden.value!==!0){const $=u[Fe[o].offset];if($<y.thumbStart.value||$>y.thumbStart.value+y.thumbSize.value){const I=$-y.thumbSize.value/2;X(I/f[o].value*y.size.value,o)}y.ref.value!==null&&y.ref.value.dispatchEvent(new MouseEvent(u.type,u))}}function C(u){D(u,"vertical")}function P(u){D(u,"horizontal")}function M(){s.value===!0?clearTimeout(r):s.value=!0,r=setTimeout(()=>{s.value=!1},e.delay),e.onScroll!==void 0&&a()}function X(u,o){O.value[Fe[o].scroll]=u}function N(){d.value=!0}function E(){d.value=!1}let K=null;return Ct(()=>{K={top:t.vertical.position.value,left:t.horizontal.position.value}}),qt(()=>{if(K===null)return;const u=O.value;u!==null&&(Me(u,K.left),He(u,K.top))}),pe(a.cancel),Object.assign(T,{getScrollTarget:()=>O.value,getScroll:x,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:F,setScrollPercentage(u,o,y){F(u,o*(t[u].size.value-f[u].value),y)}}),()=>w("div",{class:z.value,onMouseenter:N,onMouseleave:E},[w("div",{ref:O,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[w("div",{class:"q-scrollarea__content absolute",style:v.value},Ze(h.default,[w(de,{debounce:0,onResize:g})])),w(ot,{axis:"both",onScroll:V})]),w(de,{debounce:0,onResize:p}),w("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:C}),w("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:P}),j(w("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),m),j(w("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),Q)])}});const Xe=150;var da=U({name:"QDrawer",inheritAttrs:!1,props:{...Jt,...lt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Gt,"on-layout","mini-state"],setup(e,{slots:h,emit:c,attrs:s}){const n=te(),{proxy:{$q:d}}=n,f=nt(e,d),{preventBodyScroll:t}=ta(),{registerTimeout:T,removeTimeout:S}=Dt(),r=Pe(Se,Y);if(r===Y)return console.error("QDrawer needs to be child of QLayout"),Y;let L,O,z;const v=_(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),m=i(()=>e.mini===!0&&v.value!==!0),Q=i(()=>m.value===!0?e.miniWidth:e.width),x=_(e.showIfAbove===!0&&v.value===!1?!0:e.modelValue===!0),a=i(()=>e.persistent!==!0&&(v.value===!0||I.value===!0));function F(l,q){if(B(),l!==!1&&r.animate(),R(0),v.value===!0){const H=r.instances[u.value];H!==void 0&&H.belowBreakpoint===!0&&H.hide(!1),J(1),r.isContainer.value!==!0&&t(!0)}else J(0),l!==!1&&_e(!1);T(()=>{l!==!1&&_e(!0),q!==!0&&c("show",l)},Xe)}function p(l,q){D(),l!==!1&&r.animate(),J(0),R(M.value*Q.value),xe(),q!==!0?T(()=>{c("hide",l)},Xe):S()}const{show:V,hide:g}=Zt({showing:x,hideOnRouteChange:a,handleShow:F,handleHide:p}),{addToHistory:B,removeFromHistory:D}=ea(x,g,a),C={belowBreakpoint:v,hide:g},P=i(()=>e.side==="right"),M=i(()=>(d.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),X=_(0),N=_(!1),E=_(!1),K=_(Q.value*M.value),u=i(()=>P.value===!0?"left":"right"),o=i(()=>x.value===!0&&v.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:Q.value:0),y=i(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(P.value?"R":"L")>-1||d.platform.is.ios===!0&&r.isContainer.value===!0),$=i(()=>e.overlay===!1&&x.value===!0&&v.value===!1),I=i(()=>e.overlay===!0&&x.value===!0&&v.value===!1),re=i(()=>"fullscreen q-drawer__backdrop"+(x.value===!1&&N.value===!1?" hidden":"")),ze=i(()=>({backgroundColor:`rgba(0,0,0,${X.value*.4})`})),ve=i(()=>P.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),it=i(()=>P.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),rt=i(()=>{const l={};return r.header.space===!0&&ve.value===!1&&(y.value===!0?l.top=`${r.header.offset}px`:r.header.space===!0&&(l.top=`${r.header.size}px`)),r.footer.space===!0&&it.value===!1&&(y.value===!0?l.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(l.bottom=`${r.footer.size}px`)),l}),ut=i(()=>{const l={width:`${Q.value}px`,transform:`translateX(${K.value}px)`};return v.value===!0?l:Object.assign(l,rt.value)}),st=i(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),ct=i(()=>`q-drawer q-drawer--${e.side}`+(E.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(f.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":x.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${m.value===!0?"mini":"standard"}`+(y.value===!0||$.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ve.value===!0?" q-drawer--top-padding":""))),dt=i(()=>{const l=d.lang.rtl===!0?e.side:u.value;return[[se,ht,void 0,{[l]:!0,mouse:!0}]]}),vt=i(()=>{const l=d.lang.rtl===!0?u.value:e.side;return[[se,Ve,void 0,{[l]:!0,mouse:!0}]]}),ft=i(()=>{const l=d.lang.rtl===!0?u.value:e.side;return[[se,Ve,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function we(){bt(v,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}A(v,l=>{l===!0?(L=x.value,x.value===!0&&g(!1)):e.overlay===!1&&e.behavior!=="mobile"&&L!==!1&&(x.value===!0?(R(0),J(0),xe()):V(!1))}),A(()=>e.side,(l,q)=>{r.instances[q]===C&&(r.instances[q]=void 0,r[q].space=!1,r[q].offset=0),r.instances[l]=C,r[l].size=Q.value,r[l].space=$.value,r[l].offset=o.value}),A(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&we()}),A(()=>e.behavior+e.breakpoint,we),A(r.isContainer,l=>{x.value===!0&&t(l!==!0),l===!0&&we()}),A(r.scrollbarWidth,()=>{R(x.value===!0?0:void 0)}),A(o,l=>{G("offset",l)}),A($,l=>{c("on-layout",l),G("space",l)}),A(P,()=>{R()}),A(Q,l=>{R(),Ce(e.miniToOverlay,l)}),A(()=>e.miniToOverlay,l=>{Ce(l,Q.value)}),A(()=>d.lang.rtl,()=>{R()}),A(()=>e.mini,()=>{e.modelValue===!0&&(mt(),r.animate())}),A(m,l=>{c("mini-state",l)});function R(l){l===void 0?$e(()=>{l=x.value===!0?0:Q.value,R(M.value*l)}):(r.isContainer.value===!0&&P.value===!0&&(v.value===!0||Math.abs(l)===Q.value)&&(l+=M.value*r.scrollbarWidth.value),K.value=l)}function J(l){X.value=l}function _e(l){const q=l===!0?"remove":r.isContainer.value!==!0?"add":"";q!==""&&document.body.classList[q]("q-body--drawer-toggle")}function mt(){clearTimeout(O),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),E.value=!0,O=setTimeout(()=>{E.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ht(l){if(x.value!==!1)return;const q=Q.value,H=ee(l.distance.x,0,q);if(l.isFinal===!0){H>=Math.min(75,q)===!0?V():(r.animate(),J(0),R(M.value*q)),N.value=!1;return}R((d.lang.rtl===!0?P.value!==!0:P.value)?Math.max(q-H,0):Math.min(0,H-q)),J(ee(H/q,0,1)),l.isFirst===!0&&(N.value=!0)}function Ve(l){if(x.value!==!0)return;const q=Q.value,H=l.direction===e.side,fe=(d.lang.rtl===!0?H!==!0:H)?ee(l.distance.x,0,q):0;if(l.isFinal===!0){Math.abs(fe)<Math.min(75,q)===!0?(r.animate(),J(1),R(0)):g(),N.value=!1;return}R(M.value*fe),J(ee(1-fe/q,0,1)),l.isFirst===!0&&(N.value=!0)}function xe(){t(!1),_e(!0)}function G(l,q){r.update(e.side,l,q)}function bt(l,q){l.value!==q&&(l.value=q)}function Ce(l,q){G("size",l===!0?e.miniWidth:q)}return r.instances[e.side]=C,Ce(e.miniToOverlay,Q.value),G("space",$.value),G("offset",o.value),e.showIfAbove===!0&&e.modelValue!==!0&&x.value===!0&&e["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!0),et(()=>{c("on-layout",$.value),c("mini-state",m.value),L=e.showIfAbove===!0;const l=()=>{(x.value===!0?F:p)(!1,!0)};if(r.totalWidth.value!==0){$e(l);return}z=A(r.totalWidth,()=>{z(),z=void 0,x.value===!1&&e.showIfAbove===!0&&v.value===!1?V(!1):l()})}),pe(()=>{z!==void 0&&z(),clearTimeout(O),x.value===!0&&xe(),r.instances[e.side]===C&&(r.instances[e.side]=void 0,G("size",0),G("offset",0),G("space",!1))}),()=>{const l=[];v.value===!0&&(e.noSwipeOpen===!1&&l.push(j(w("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),dt.value)),l.push(Oe("div",{ref:"backdrop",class:re.value,style:ze.value,"aria-hidden":"true",onClick:g},void 0,"backdrop",e.noSwipeBackdrop!==!0&&x.value===!0,()=>ft.value)));const q=m.value===!0&&h.mini!==void 0,H=[w("div",{...s,key:""+q,class:[st.value,s.class]},q===!0?h.mini():ye(h.default))];return e.elevated===!0&&x.value===!0&&H.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Oe("aside",{ref:"content",class:ct.value,style:ut.value},H,"contentclose",e.noSwipeClose!==!0&&v.value===!0,()=>vt.value)),w("div",{class:"q-drawer-container"},l)}}}),va=U({name:"QAvatar",props:{...yt,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:h}){const c=pt(e),s=i(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),n=i(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const d=e.icon!==void 0?[w(ie,{name:e.icon})]:void 0;return w("div",{class:s.value,style:c.value},[w("div",{class:"q-avatar__content row flex-center overflow-hidden",style:n.value},St(h.default,d))])}}});function oe(e,h,c,s){const n=[];return e.forEach(d=>{s(d)===!0?n.push(d):h.push({failedPropValidation:c,file:d})}),n}function ge(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),tt(e)}const fa={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},ma=["rejected"];function ha({editable:e,dnd:h,getFileInput:c,addFilesToQueue:s}){const{props:n,emit:d,proxy:f}=te(),t=_(null),T=i(()=>n.accept!==void 0?n.accept.split(",").map(a=>(a=a.trim(),a==="*"?"*/":(a.endsWith("/*")&&(a=a.slice(0,a.length-1)),a.toUpperCase()))):null),S=i(()=>parseInt(n.maxFiles,10)),r=i(()=>parseInt(n.maxTotalSize,10));function L(a){if(e.value)if(a!==Object(a)&&(a={target:null}),a.target!==null&&a.target.matches('input[type="file"]')===!0)a.clientX===0&&a.clientY===0&&kt(a);else{const F=c();F&&F!==a.target&&F.click(a)}}function O(a){e.value&&a&&s(null,a)}function z(a,F,p,V){let g=Array.from(F||a.target.files);const B=[],D=()=>{B.length>0&&d("rejected",B)};if(n.accept!==void 0&&T.value.indexOf("*/")===-1&&(g=oe(g,B,"accept",C=>T.value.some(P=>C.type.toUpperCase().startsWith(P)||C.name.toUpperCase().endsWith(P))),g.length===0))return D();if(n.maxFileSize!==void 0){const C=parseInt(n.maxFileSize,10);if(g=oe(g,B,"max-file-size",P=>P.size<=C),g.length===0)return D()}if(n.multiple!==!0&&g.length>0&&(g=[g[0]]),g.forEach(C=>{C.__key=C.webkitRelativePath+C.lastModified+C.name+C.size}),V===!0){const C=p.map(P=>P.__key);g=oe(g,B,"duplicate",P=>C.includes(P.__key)===!1)}if(g.length===0)return D();if(n.maxTotalSize!==void 0){let C=V===!0?p.reduce((P,M)=>P+M.size,0):0;if(g=oe(g,B,"max-total-size",P=>(C+=P.size,C<=r.value)),g.length===0)return D()}if(typeof n.filter=="function"){const C=n.filter(g);g=oe(g,B,"filter",P=>C.includes(P))}if(n.maxFiles!==void 0){let C=V===!0?p.length:0;if(g=oe(g,B,"max-files",()=>(C++,C<=S.value)),g.length===0)return D()}if(D(),g.length>0)return g}function v(a){ge(a),h.value!==!0&&(h.value=!0)}function m(a){tt(a),(a.relatedTarget!==null||Tt.is.safari!==!0?a.relatedTarget!==t.value:document.elementsFromPoint(a.clientX,a.clientY).includes(t.value)===!1)===!0&&(h.value=!1)}function Q(a){ge(a);const F=a.dataTransfer.files;F.length>0&&s(null,F),h.value=!1}function x(a){if(h.value===!0)return w("div",{ref:t,class:`q-${a}__dnd absolute-full`,onDragenter:ge,onDragover:ge,onDragleave:m,onDrop:Q})}return Object.assign(f,{pickFiles:L,addFiles:O}),{pickFiles:L,addFiles:O,onDragover:v,onDragleave:m,processFiles:z,getDndNode:x,maxFilesNumber:S,maxTotalSizeNumber:r}}var ba=U({name:"QFile",inheritAttrs:!1,props:{...Mt,...Ht,...fa,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Rt,...ma],setup(e,{slots:h,emit:c,attrs:s}){const{proxy:n}=te(),d=jt(),f=_(null),t=_(!1),T=Nt(e),{pickFiles:S,onDragover:r,onDragleave:L,processFiles:O,getDndNode:z}=ha({editable:d.editable,dnd:t,getFileInput:X,addFilesToQueue:N}),v=ra(e),m=i(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),Q=i(()=>Ae(m.value)),x=i(()=>m.value.map(o=>o.name).join(", ")),a=i(()=>It(m.value.reduce((o,y)=>o+y.size,0))),F=i(()=>({totalSize:a.value,filesNumber:m.value.length,maxFiles:e.maxFiles})),p=i(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:T.value,...s,id:d.targetUid.value,disabled:d.editable.value!==!0})),V=i(()=>"q-file q-field--auto-height"+(t.value===!0?" q-file--dnd":"")),g=i(()=>e.multiple===!0&&e.append===!0);function B(o){const y=m.value.slice();y.splice(o,1),C(y)}function D(o){const y=m.value.findIndex(o);y>-1&&B(y)}function C(o){c("update:modelValue",e.multiple===!0?o:o[0])}function P(o){o.keyCode===13&&Ft(o)}function M(o){(o.keyCode===13||o.keyCode===32)&&S(o)}function X(){return f.value}function N(o,y){const $=O(o,y,m.value,g.value),I=X();I!=null&&(I.value=""),$!==void 0&&((e.multiple===!0?e.modelValue&&$.every(re=>m.value.includes(re)):e.modelValue===$[0])||C(g.value===!0?m.value.concat($):$))}function E(){return[w("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function K(){if(h.file!==void 0)return m.value.length===0?E():m.value.map((y,$)=>h.file({index:$,file:y,ref:this}));if(h.selected!==void 0)return m.value.length===0?E():h.selected({files:m.value,ref:this});if(e.useChips===!0)return m.value.length===0?E():m.value.map((y,$)=>w(aa,{key:"file-"+$,removable:d.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{B($)}},()=>w("span",{class:"ellipsis",textContent:y.name})));const o=e.displayValue!==void 0?e.displayValue:x.value;return o.length>0?[w("div",{class:e.inputClass,style:e.inputStyle,textContent:o})]:E()}function u(){const o={ref:f,...p.value,...v.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:N};return e.multiple===!0&&(o.multiple=!0),w("input",o)}return Object.assign(d,{fieldClass:V,emitValue:C,hasValue:Q,inputRef:f,innerValue:m,floatingLabel:i(()=>Q.value===!0||Ae(e.displayValue)),computedCounter:i(()=>{if(e.counterLabel!==void 0)return e.counterLabel(F.value);const o=e.maxFiles;return`${m.value.length}${o!==void 0?" / "+o:""} (${a.value})`}),getControlChild:()=>z("file"),getControl:()=>{const o={ref:d.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return d.editable.value===!0&&Object.assign(o,{onDragover:r,onDragleave:L,onKeydown:P,onKeyup:M}),w("div",o,[u()].concat(K()))}}),Object.assign(n,{removeAtIndex:B,removeFile:D,getNativeElement:()=>f.value}),Et(d)}}),ga=U({name:"QPageContainer",setup(e,{slots:h}){const{proxy:{$q:c}}=te(),s=Pe(Se,Y);if(s===Y)return console.error("QPageContainer needs to be child of QLayout"),Y;at(Pt,!0);const n=i(()=>{const d={};return s.header.space===!0&&(d.paddingTop=`${s.header.size}px`),s.right.space===!0&&(d[`padding${c.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(d.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(d[`padding${c.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),d});return()=>w("div",{class:"q-page-container",style:n.value},ye(h.default))}}),ya=U({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:h,emit:c}){const{proxy:{$q:s}}=te(),n=_(null),d=_(s.screen.height),f=_(e.container===!0?0:s.screen.width),t=_({position:0,direction:"down",inflectionPoint:0}),T=_(0),S=_(Vt.value===!0?0:ke()),r=i(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),L=i(()=>e.container===!1?{minHeight:s.screen.height+"px"}:null),O=i(()=>S.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${S.value}px`}:null),z=i(()=>S.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${S.value}px`,width:`calc(100% + ${S.value}px)`}:null);function v(p){if(e.container===!0||document.qScrollPrevented!==!0){const V={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};t.value=V,e.onScroll!==void 0&&c("scroll",V)}}function m(p){const{height:V,width:g}=p;let B=!1;d.value!==V&&(B=!0,d.value=V,e.onScrollHeight!==void 0&&c("scroll-height",V),x()),f.value!==g&&(B=!0,f.value=g),B===!0&&e.onResize!==void 0&&c("resize",p)}function Q({height:p}){T.value!==p&&(T.value=p,x())}function x(){if(e.container===!0){const p=d.value>T.value?ke():0;S.value!==p&&(S.value=p)}}let a;const F={instances:{},view:i(()=>e.view),isContainer:i(()=>e.container),rootRef:n,height:d,containerHeight:T,scrollbarWidth:S,totalWidth:i(()=>f.value+S.value),rows:i(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:he({size:0,offset:0,space:!1}),right:he({size:300,offset:0,space:!1}),footer:he({size:0,offset:0,space:!1}),left:he({size:300,offset:0,space:!1}),scroll:t,animate(){a!==void 0?clearTimeout(a):document.body.classList.add("q-body--layout-animate"),a=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),a=void 0},155)},update(p,V,g){F[p][V]=g}};if(at(Se,F),ke()>0){let g=function(){p=null,V.classList.remove("hide-scrollbar")},B=function(){if(p===null){if(V.scrollHeight>s.screen.height)return;V.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout(g,300)},D=function(C){p!==null&&C==="remove"&&(clearTimeout(p),g()),window[`${C}EventListener`]("resize",B)},p=null;const V=document.body;A(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),Ot(()=>{D("remove")})}return()=>{const p=Ze(h.default,[w(ot,{onScroll:v}),w(de,{onResize:m})]),V=w("div",{class:r.value,style:L.value,ref:e.container===!0?void 0:n,tabindex:-1},p);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:n},[w(de,{onResize:Q}),w("div",{class:"absolute-full",style:O.value},[w("div",{class:"scroll",style:z.value},[V])])]):V}}});function Je(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const h=parseInt(e,10);return isNaN(h)?0:h}var ue=zt({name:"close-popup",beforeMount(e,{value:h}){const c={depth:Je(h),handler(s){c.depth!==0&&setTimeout(()=>{const n=la(e);n!==void 0&&na(n,s,c.depth)})},handlerKey(s){$t(s,13)===!0&&c.handler(s)}};e.__qclosepopup=c,e.addEventListener("click",c.handler),e.addEventListener("keyup",c.handlerKey)},updated(e,{value:h,oldValue:c}){h!==c&&(e.__qclosepopup.depth=Je(h))},beforeUnmount(e){const h=e.__qclosepopup;e.removeEventListener("click",h.handler),e.removeEventListener("keyup",h.handlerKey),delete e.__qclosepopup}});function Ge(e){setTimeout(()=>{window.URL.revokeObjectURL(e.href)},1e4),e.remove()}function pa(e,h,c={}){const{mimeType:s,byteOrderMark:n,encoding:d}=typeof c=="string"?{mimeType:c}:c,f=d!==void 0?new TextEncoder(d).encode([h]):h,t=n!==void 0?[n,f]:[f],T=new Blob(t,{type:s||"application/octet-stream"}),S=document.createElement("a");S.href=window.URL.createObjectURL(T),S.setAttribute("download",e),typeof S.download=="undefined"&&S.setAttribute("target","_blank"),S.classList.add("hidden"),S.style.position="fixed",document.body.appendChild(S);try{return S.click(),Ge(S),!0}catch(r){return Ge(S),r}}const Sa={class:"q-mini-drawer-hide absolute",style:{top:"15px",right:"-17px"}},za=ce("span",{class:"q-ml-sm q-mt-md"},"You are going to download the state of the tool. Are you sure?",-1),wa=ce("span",null,"Load",-1),_a={class:"q-ml-sm q-mt-md"},xa=ce("p",null," You are going to load a state from disk. This will erase the state you worked on so far. ",-1),Ca={key:0,class:"text-warning text-bold text-center text-h6"},Aa=Qt({__name:"MainLayout",setup(e){const h=Wt(),c=Ut(),s=_(!1),n=_(!1),d=_(!1),f=_(!1),t=_(!1),T=_();function S(){s.value=!s.value}function r(z){n.value&&(n.value=!1,z.stopPropagation())}function L(z){const v=JSON.stringify(At.getAll(),null,2);pa("DecisionMatrix.dmh",v,"application/json")||console.log("Failed to download file. Use different browser.")}async function O(){if(!T.value)return;const z=await T.value.text(),v=JSON.parse(z);Object.keys(v).forEach(m=>{localStorage.setItem(m,Object(v[m]))}),window.location.reload()}return(z,v)=>(ae(),ne(ya,{view:"hHh lpR fFf"},{default:k(()=>[b(ua,{elevated:"",class:"bg-primary text-white"},{default:k(()=>[b(Ie,null,{default:k(()=>[b(W,{dense:"",flat:"",round:"",icon:"menu",onClick:S}),b(Ee,null,{default:k(()=>[b(W,{label:"Decision Matrix Helper",flat:"",to:"/"})]),_:1}),b(Le),b(W,{dense:"",flat:"",icon:"upload",onClick:v[0]||(v[0]=m=>t.value=!0),label:"Load"}),b(W,{dense:"",flat:"",icon:"save",onClick:v[1]||(v[1]=m=>d.value=!0),label:"Save"})]),_:1})]),_:1}),b(da,{"show-if-above":"",modelValue:s.value,"onUpdate:modelValue":v[3]||(v[3]=m=>s.value=m),side:"left",bordered:"",mini:!s.value||n.value,onClickCapture:r,width:200,breakpoint:500,class:"bg-grey-3"},{default:k(()=>[b(ca,{class:"fit"},{default:k(()=>[b(oa,{padding:"",class:"menu-list"},{default:k(()=>[j((ae(),ne(be,{clickable:"",to:"wizard"},{default:k(()=>[b(Z,{avatar:""},{default:k(()=>[b(ie,{name:"auto_fix_normal"})]),_:1}),b(Z,null,{default:k(()=>[le(" Wizard ")]),_:1})]),_:1})),[[me]]),j((ae(),ne(be,{clickable:"",to:"Alternatives"},{default:k(()=>[b(Z,{avatar:""},{default:k(()=>[b(ie,{name:"build"}),b(De,null,{default:k(()=>[le(Qe(qe(c).alternatives.length),1)]),_:1})]),_:1}),b(Z,null,{default:k(()=>[le(" Alternatives ")]),_:1})]),_:1})),[[me]]),j((ae(),ne(be,{clickable:"",to:"features"},{default:k(()=>[b(Z,{avatar:""},{default:k(()=>[b(ie,{name:"checklist"}),b(De,null,{default:k(()=>[le(Qe(qe(h).features.length),1)]),_:1})]),_:1}),b(Z,null,{default:k(()=>[le(" Features ")]),_:1})]),_:1})),[[me]]),j((ae(),ne(be,{clickable:"",to:"decisionmatrix"},{default:k(()=>[b(Z,{avatar:""},{default:k(()=>[b(ie,{name:"functions"})]),_:1}),b(Z,null,{default:k(()=>[le(" Decision Matrix ")]),_:1})]),_:1})),[[me]])]),_:1})]),_:1}),ce("div",Sa,[b(W,{dense:"",round:"",unelevated:"",color:"accent",icon:"chevron_left",onClick:v[2]||(v[2]=m=>n.value=!0)})])]),_:1},8,["modelValue","mini"]),b(Re,{modelValue:d.value,"onUpdate:modelValue":v[4]||(v[4]=m=>d.value=m),persistent:""},{default:k(()=>[b(je,null,{default:k(()=>[b(Te,{class:"row items-center"},{default:k(()=>[b(va,{icon:"save",color:"primary","text-color":"white"}),za]),_:1}),b(Ne,{align:"right"},{default:k(()=>[j(b(W,{flat:"",label:"Cancel",color:"primary"},null,512),[[ue]]),j(b(W,{flat:"",icon:"download ",label:"Download",color:"primary",onClick:L},null,512),[[ue]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),b(Re,{modelValue:t.value,"onUpdate:modelValue":v[7]||(v[7]=m=>t.value=m),persistent:""},{default:k(()=>[b(je,null,{default:k(()=>[b(Ie,{class:"bg-primary text-white"},{default:k(()=>[b(ie,{name:"upload",size:"md"}),b(Ee,null,{default:k(()=>[wa,le(" State from Disk")]),_:1}),j(b(W,{flat:"",round:"",dense:"",icon:"close"},null,512),[[ue]])]),_:1}),b(Te,{class:"row items-center"},{default:k(()=>[ce("span",_a,[xa,T.value?(ae(),Bt("p",Ca," Are you sure you want to do that? ")):Be("",!0)])]),_:1}),b(Te,null,{default:k(()=>[b(ba,{modelValue:T.value,"onUpdate:modelValue":v[5]||(v[5]=m=>T.value=m),clearable:"",accept:".dmh",counter:"",label:"Choose your file to upload"},null,8,["modelValue"])]),_:1}),b(Ne,{align:"left"},{default:k(()=>[T.value?(ae(),ne(ia,{key:0,modelValue:f.value,"onUpdate:modelValue":v[6]||(v[6]=m=>f.value=m),label:"I want to replace the current state of the app"},null,8,["modelValue"])):Be("",!0),b(Le),j(b(W,{flat:"",label:"Cancel",color:"primary"},null,512),[[ue]]),j(b(W,{icon:"upload ",label:"Upload",color:"primary",disable:!T.value||!f.value,onClick:O},null,8,["disable"]),[[ue]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),b(ga,null,{default:k(()=>[b(qe(Lt))]),_:1})]),_:1}))}});export{Aa as default};

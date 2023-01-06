import{c as K,h as de,a as tt,b as De,d as xe,Q as we,e as ue,R as se}from"./QBtn.5599a169.js";import{c as i,h as S,i as qe,e as F,r as z,w as T,o as fe,l as he,g as Z,a as Ve,n as at,b as lt,d as ot,f as it,j as rt,k as Y,m as Ce,p as Re,q as nt,s as ut,t as ce,u as st,v as ct,x as vt,y as ae,z as le,A as q,B as w,C as J,D as ke,E as Pe,F as dt}from"./index.0f4a9ab3.js";import{Q as ie,T as oe,a as $e}from"./TouchPan.403cce05.js";import{b as U,u as ft,a as ht,c as mt,Q as ve,d as I}from"./alternative.3865857f.js";import{g as bt,a as gt,b as yt,s as Be,c as Me,u as zt,d as St,e as wt,f as pt,h as _t,i as pe,Q as qt}from"./use-prevent-scroll.83929401.js";import{u as Fe,a as We}from"./use-dark.64788454.js";var Tt=K({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:C}){const v=i(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:v.value},de(C.default))}}),xt=K({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:C}){const v=i(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:v.value,role:"toolbar"},de(C.default))}}),Ct=K({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:C,emit:v}){const{proxy:{$q:n}}=Z(),r=qe(he,F);if(r===F)return console.error("QHeader needs to be child of QLayout"),F;const d=z(parseInt(e.heightHint,10)),s=z(!0),t=i(()=>e.reveal===!0||r.view.value.indexOf("H")>-1||n.platform.is.ios&&r.isContainer.value===!0),_=i(()=>{if(e.modelValue!==!0)return 0;if(t.value===!0)return s.value===!0?d.value:0;const u=d.value-r.scroll.value.position;return u>0?u:0}),p=i(()=>e.modelValue!==!0||t.value===!0&&s.value!==!0),o=i(()=>e.modelValue===!0&&p.value===!0&&e.reveal===!0),B=i(()=>"q-header q-layout__section--marginal "+(t.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(p.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=i(()=>{const u=r.rows.value.top,$={};return u[0]==="l"&&r.left.space===!0&&($[n.lang.rtl===!0?"right":"left"]=`${r.left.size}px`),u[2]==="r"&&r.right.space===!0&&($[n.lang.rtl===!0?"left":"right"]=`${r.right.size}px`),$});function b(u,$){r.update("header",u,$)}function g(u,$){u.value!==$&&(u.value=$)}function L({height:u}){g(d,u),b("size",u)}function P(u){o.value===!0&&g(s,!0),v("focusin",u)}T(()=>e.modelValue,u=>{b("space",u),g(s,!0),r.animate()}),T(_,u=>{b("offset",u)}),T(()=>e.reveal,u=>{u===!1&&g(s,e.modelValue)}),T(s,u=>{r.animate(),v("reveal",u)}),T(r.scroll,u=>{e.reveal===!0&&g(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const m={};return r.instances.header=m,e.modelValue===!0&&b("size",d.value),b("space",e.modelValue),b("offset",_.value),fe(()=>{r.instances.header===m&&(r.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const u=tt(C.default,[]);return e.elevated===!0&&u.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(S(ie,{debounce:0,onResize:L})),S("header",{class:B.value,style:k.value,onFocusin:P},u)}}});const{passive:Oe}=lt,kt=["both","horizontal","vertical"];var je=K({name:"QScrollObserver",props:{axis:{type:String,validator:e=>kt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:C}){const v={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,r,d;T(()=>e.scrollTarget,()=>{_(),t()});function s(){n!==null&&n();const B=Math.max(0,gt(r)),k=yt(r),b={top:B-v.position.top,left:k-v.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const g=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";v.position={top:B,left:k},v.directionChanged=v.direction!==g,v.delta=b,v.directionChanged===!0&&(v.direction=g,v.inflectionPoint=v.position),C("scroll",{...v})}function t(){r=bt(d,e.scrollTarget),r.addEventListener("scroll",p,Oe),p(!0)}function _(){r!==void 0&&(r.removeEventListener("scroll",p,Oe),r=void 0)}function p(B){if(B===!0||e.debounce===0||e.debounce==="0")s();else if(n===null){const[k,b]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];n=()=>{b(k),n=null}}}const{proxy:o}=Z();return Ve(()=>{d=o.$el.parentNode,t()}),fe(()=>{n!==null&&n(),_()}),Object.assign(o,{trigger:p,getPosition:()=>v}),at}});const Qe=["vertical","horizontal"],_e={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},He={prevent:!0,mouse:!0,mouseAllDir:!0},Le=e=>e>=250?50:Math.ceil(e/5);var Pt=K({name:"QScrollArea",props:{...Fe,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:C,emit:v}){const n=z(!1),r=z(!1),d=z(!1),s={vertical:z(0),horizontal:z(0)},t={vertical:{ref:z(null),position:z(0),size:z(0)},horizontal:{ref:z(null),position:z(0),size:z(0)}},{proxy:_}=Z(),p=We(e,_.$q);let o,B;const k=z(null),b=i(()=>"q-scrollarea"+(p.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=i(()=>{const l=t.vertical.size.value-s.vertical.value;if(l<=0)return 0;const c=U(t.vertical.position.value/l,0,1);return Math.round(c*1e4)/1e4}),t.vertical.thumbHidden=i(()=>(e.visible===null?d.value:e.visible)!==!0&&n.value===!1&&r.value===!1||t.vertical.size.value<=s.vertical.value+1),t.vertical.thumbStart=i(()=>t.vertical.percentage.value*(s.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=i(()=>Math.round(U(s.vertical.value*s.vertical.value/t.vertical.size.value,Le(s.vertical.value),s.vertical.value))),t.vertical.style=i(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=i(()=>{const l=t.horizontal.size.value-s.horizontal.value;if(l<=0)return 0;const c=U(t.horizontal.position.value/l,0,1);return Math.round(c*1e4)/1e4}),t.horizontal.thumbHidden=i(()=>(e.visible===null?d.value:e.visible)!==!0&&n.value===!1&&r.value===!1||t.horizontal.size.value<=s.horizontal.value+1),t.horizontal.thumbStart=i(()=>t.horizontal.percentage.value*(s.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=i(()=>Math.round(U(s.horizontal.value*s.horizontal.value/t.horizontal.size.value,Le(s.horizontal.value),s.horizontal.value))),t.horizontal.style=i(()=>({...e.thumbStyle,...e.horizontalThumbStyle,left:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const g=i(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),L=[[oe,l=>{V(l,"vertical")},void 0,{vertical:!0,...He}]],P=[[oe,l=>{V(l,"horizontal")},void 0,{horizontal:!0,...He}]];function m(){const l={};return Qe.forEach(c=>{const y=t[c];l[c+"Position"]=y.position.value,l[c+"Percentage"]=y.percentage.value,l[c+"Size"]=y.size.value,l[c+"ContainerSize"]=s[c].value}),l}const u=ot(()=>{const l=m();l.ref=_,v("scroll",l)},0);function $(l,c,y){if(Qe.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?Me:Be)(k.value,c,y)}function f({height:l,width:c}){let y=!1;s.vertical.value!==l&&(s.vertical.value=l,y=!0),s.horizontal.value!==c&&(s.horizontal.value=c,y=!0),y===!0&&D()}function x({position:l}){let c=!1;t.vertical.position.value!==l.top&&(t.vertical.position.value=l.top,c=!0),t.horizontal.position.value!==l.left&&(t.horizontal.position.value=l.left,c=!0),c===!0&&D()}function M({height:l,width:c}){t.horizontal.size.value!==c&&(t.horizontal.size.value=c,D()),t.vertical.size.value!==l&&(t.vertical.size.value=l,D())}function V(l,c){const y=t[c];if(l.isFirst===!0){if(y.thumbHidden.value===!0)return;B=y.position.value,r.value=!0}else if(r.value!==!0)return;l.isFinal===!0&&(r.value=!1);const Q=_e[c],G=s[c].value,me=(y.size.value-G)/(G-y.thumbSize.value),be=l.distance[Q.dist],re=B+(l.direction===Q.dir?1:-1)*be*me;ee(re,c)}function W(l,c){const y=t[c];if(y.thumbHidden.value!==!0){const Q=l[_e[c].offset];if(Q<y.thumbStart.value||Q>y.thumbStart.value+y.thumbSize.value){const G=Q-y.thumbSize.value/2;ee(G/s[c].value*y.size.value,c)}y.ref.value!==null&&y.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function R(l){W(l,"vertical")}function A(l){W(l,"horizontal")}function D(){n.value===!0?clearTimeout(o):n.value=!0,o=setTimeout(()=>{n.value=!1},e.delay),e.onScroll!==void 0&&u()}function ee(l,c){k.value[_e[c].scroll]=l}function j(){d.value=!0}function te(){d.value=!1}let X=null;return it(()=>{X={top:t.vertical.position.value,left:t.horizontal.position.value}}),rt(()=>{if(X===null)return;const l=k.value;l!==null&&(Be(l,X.left),Me(l,X.top))}),fe(u.cancel),Object.assign(_,{getScrollTarget:()=>k.value,getScroll:m,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:$,setScrollPercentage(l,c,y){$(l,c*(t[l].size.value-s[l].value),y)}}),()=>S("div",{class:b.value,onMouseenter:j,onMouseleave:te},[S("div",{ref:k,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[S("div",{class:"q-scrollarea__content absolute",style:g.value},De(C.default,[S(ie,{debounce:0,onResize:M})])),S(je,{axis:"both",onScroll:x})]),S(ie,{debounce:0,onResize:f}),S("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:R}),S("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:A}),Y(S("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),L),Y(S("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),P)])}});const Ae=150;var $t=K({name:"QDrawer",inheritAttrs:!1,props:{...zt,...Fe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...St,"on-layout","mini-state"],setup(e,{slots:C,emit:v,attrs:n}){const r=Z(),{proxy:{$q:d}}=r,s=We(e,d),{preventBodyScroll:t}=_t(),{registerTimeout:_,removeTimeout:p}=ft(),o=qe(he,F);if(o===F)return console.error("QDrawer needs to be child of QLayout"),F;let B,k,b;const g=z(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),L=i(()=>e.mini===!0&&g.value!==!0),P=i(()=>L.value===!0?e.miniWidth:e.width),m=z(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),u=i(()=>e.persistent!==!0&&(g.value===!0||G.value===!0));function $(a,h){if(V(),a!==!1&&o.animate(),H(0),g.value===!0){const O=o.instances[l.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),N(1),o.isContainer.value!==!0&&t(!0)}else N(0),a!==!1&&ye(!1);_(()=>{a!==!1&&ye(!0),h!==!0&&v("show",a)},Ae)}function f(a,h){W(),a!==!1&&o.animate(),N(0),H(D.value*P.value),ze(),h!==!0?_(()=>{v("hide",a)},Ae):p()}const{show:x,hide:M}=wt({showing:m,hideOnRouteChange:u,handleShow:$,handleHide:f}),{addToHistory:V,removeFromHistory:W}=pt(m,M,u),R={belowBreakpoint:g,hide:M},A=i(()=>e.side==="right"),D=i(()=>(d.lang.rtl===!0?-1:1)*(A.value===!0?1:-1)),ee=z(0),j=z(!1),te=z(!1),X=z(P.value*D.value),l=i(()=>A.value===!0?"left":"right"),c=i(()=>m.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:P.value:0),y=i(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(A.value?"R":"L")>-1||d.platform.is.ios===!0&&o.isContainer.value===!0),Q=i(()=>e.overlay===!1&&m.value===!0&&g.value===!1),G=i(()=>e.overlay===!0&&m.value===!0&&g.value===!1),me=i(()=>"fullscreen q-drawer__backdrop"+(m.value===!1&&j.value===!1?" hidden":"")),be=i(()=>({backgroundColor:`rgba(0,0,0,${ee.value*.4})`})),re=i(()=>A.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Ne=i(()=>A.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),Ee=i(()=>{const a={};return o.header.space===!0&&re.value===!1&&(y.value===!0?a.top=`${o.header.offset}px`:o.header.space===!0&&(a.top=`${o.header.size}px`)),o.footer.space===!0&&Ne.value===!1&&(y.value===!0?a.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(a.bottom=`${o.footer.size}px`)),a}),Ie=i(()=>{const a={width:`${P.value}px`,transform:`translateX(${X.value}px)`};return g.value===!0?a:Object.assign(a,Ee.value)}),Ue=i(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Ke=i(()=>`q-drawer q-drawer--${e.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":m.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${L.value===!0?"mini":"standard"}`+(y.value===!0||Q.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(re.value===!0?" q-drawer--top-padding":""))),Xe=i(()=>{const a=d.lang.rtl===!0?e.side:l.value;return[[oe,Ze,void 0,{[a]:!0,mouse:!0}]]}),Ye=i(()=>{const a=d.lang.rtl===!0?l.value:e.side;return[[oe,Te,void 0,{[a]:!0,mouse:!0}]]}),Ge=i(()=>{const a=d.lang.rtl===!0?l.value:e.side;return[[oe,Te,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function ge(){et(g,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}T(g,a=>{a===!0?(B=m.value,m.value===!0&&M(!1)):e.overlay===!1&&e.behavior!=="mobile"&&B!==!1&&(m.value===!0?(H(0),N(0),ze()):x(!1))}),T(()=>e.side,(a,h)=>{o.instances[h]===R&&(o.instances[h]=void 0,o[h].space=!1,o[h].offset=0),o.instances[a]=R,o[a].size=P.value,o[a].space=Q.value,o[a].offset=c.value}),T(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&ge()}),T(()=>e.behavior+e.breakpoint,ge),T(o.isContainer,a=>{m.value===!0&&t(a!==!0),a===!0&&ge()}),T(o.scrollbarWidth,()=>{H(m.value===!0?0:void 0)}),T(c,a=>{E("offset",a)}),T(Q,a=>{v("on-layout",a),E("space",a)}),T(A,()=>{H()}),T(P,a=>{H(),Se(e.miniToOverlay,a)}),T(()=>e.miniToOverlay,a=>{Se(a,P.value)}),T(()=>d.lang.rtl,()=>{H()}),T(()=>e.mini,()=>{e.modelValue===!0&&(Je(),o.animate())}),T(L,a=>{v("mini-state",a)});function H(a){a===void 0?Ce(()=>{a=m.value===!0?0:P.value,H(D.value*a)}):(o.isContainer.value===!0&&A.value===!0&&(g.value===!0||Math.abs(a)===P.value)&&(a+=D.value*o.scrollbarWidth.value),X.value=a)}function N(a){ee.value=a}function ye(a){const h=a===!0?"remove":o.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function Je(){clearTimeout(k),r.proxy&&r.proxy.$el&&r.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,k=setTimeout(()=>{te.value=!1,r&&r.proxy&&r.proxy.$el&&r.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ze(a){if(m.value!==!1)return;const h=P.value,O=U(a.distance.x,0,h);if(a.isFinal===!0){O>=Math.min(75,h)===!0?x():(o.animate(),N(0),H(D.value*h)),j.value=!1;return}H((d.lang.rtl===!0?A.value!==!0:A.value)?Math.max(h-O,0):Math.min(0,O-h)),N(U(O/h,0,1)),a.isFirst===!0&&(j.value=!0)}function Te(a){if(m.value!==!0)return;const h=P.value,O=a.direction===e.side,ne=(d.lang.rtl===!0?O!==!0:O)?U(a.distance.x,0,h):0;if(a.isFinal===!0){Math.abs(ne)<Math.min(75,h)===!0?(o.animate(),N(1),H(0)):M(),j.value=!1;return}H(D.value*ne),N(U(1-ne/h,0,1)),a.isFirst===!0&&(j.value=!0)}function ze(){t(!1),ye(!0)}function E(a,h){o.update(e.side,a,h)}function et(a,h){a.value!==h&&(a.value=h)}function Se(a,h){E("size",a===!0?e.miniWidth:h)}return o.instances[e.side]=R,Se(e.miniToOverlay,P.value),E("space",Q.value),E("offset",c.value),e.showIfAbove===!0&&e.modelValue!==!0&&m.value===!0&&e["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!0),Ve(()=>{v("on-layout",Q.value),v("mini-state",L.value),B=e.showIfAbove===!0;const a=()=>{(m.value===!0?$:f)(!1,!0)};if(o.totalWidth.value!==0){Ce(a);return}b=T(o.totalWidth,()=>{b(),b=void 0,m.value===!1&&e.showIfAbove===!0&&g.value===!1?x(!1):a()})}),fe(()=>{b!==void 0&&b(),clearTimeout(k),m.value===!0&&ze(),o.instances[e.side]===R&&(o.instances[e.side]=void 0,E("size",0),E("offset",0),E("space",!1))}),()=>{const a=[];g.value===!0&&(e.noSwipeOpen===!1&&a.push(Y(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Xe.value)),a.push(xe("div",{ref:"backdrop",class:me.value,style:be.value,"aria-hidden":"true",onClick:M},void 0,"backdrop",e.noSwipeBackdrop!==!0&&m.value===!0,()=>Ge.value)));const h=L.value===!0&&C.mini!==void 0,O=[S("div",{...n,key:""+h,class:[Ue.value,n.class]},h===!0?C.mini():de(C.default))];return e.elevated===!0&&m.value===!0&&O.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(xe("aside",{ref:"content",class:Ke.value,style:Ie.value},O,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>Ye.value)),S("div",{class:"q-drawer-container"},a)}}}),Bt=K({name:"QPageContainer",setup(e,{slots:C}){const{proxy:{$q:v}}=Z(),n=qe(he,F);if(n===F)return console.error("QPageContainer needs to be child of QLayout"),F;Re(nt,!0);const r=i(()=>{const d={};return n.header.space===!0&&(d.paddingTop=`${n.header.size}px`),n.right.space===!0&&(d[`padding${v.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(d.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(d[`padding${v.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),d});return()=>S("div",{class:"q-page-container",style:r.value},de(C.default))}}),Mt=K({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:C,emit:v}){const{proxy:{$q:n}}=Z(),r=z(null),d=z(n.screen.height),s=z(e.container===!0?0:n.screen.width),t=z({position:0,direction:"down",inflectionPoint:0}),_=z(0),p=z(ut.value===!0?0:pe()),o=i(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),B=i(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),k=i(()=>p.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${p.value}px`}:null),b=i(()=>p.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${p.value}px`,width:`calc(100% + ${p.value}px)`}:null);function g(f){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:f.position.top,direction:f.direction,directionChanged:f.directionChanged,inflectionPoint:f.inflectionPoint.top,delta:f.delta.top};t.value=x,e.onScroll!==void 0&&v("scroll",x)}}function L(f){const{height:x,width:M}=f;let V=!1;d.value!==x&&(V=!0,d.value=x,e.onScrollHeight!==void 0&&v("scroll-height",x),m()),s.value!==M&&(V=!0,s.value=M),V===!0&&e.onResize!==void 0&&v("resize",f)}function P({height:f}){_.value!==f&&(_.value=f,m())}function m(){if(e.container===!0){const f=d.value>_.value?pe():0;p.value!==f&&(p.value=f)}}let u;const $={instances:{},view:i(()=>e.view),isContainer:i(()=>e.container),rootRef:r,height:d,containerHeight:_,scrollbarWidth:p,totalWidth:i(()=>s.value+p.value),rows:i(()=>{const f=e.view.toLowerCase().split(" ");return{top:f[0].split(""),middle:f[1].split(""),bottom:f[2].split("")}}),header:ce({size:0,offset:0,space:!1}),right:ce({size:300,offset:0,space:!1}),footer:ce({size:0,offset:0,space:!1}),left:ce({size:300,offset:0,space:!1}),scroll:t,animate(){u!==void 0?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),u=void 0},155)},update(f,x,M){$[f][x]=M}};if(Re(he,$),pe()>0){let M=function(){f=null,x.classList.remove("hide-scrollbar")},V=function(){if(f===null){if(x.scrollHeight>n.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(M,300)},W=function(R){f!==null&&R==="remove"&&(clearTimeout(f),M()),window[`${R}EventListener`]("resize",V)},f=null;const x=document.body;T(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),st(()=>{W("remove")})}return()=>{const f=De(C.default,[S(je,{onScroll:g}),S(ie,{onResize:L})]),x=S("div",{class:o.value,style:B.value,ref:e.container===!0?void 0:r,tabindex:-1},f);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:r},[S(ie,{onResize:P}),S("div",{class:"absolute-full",style:k.value},[S("div",{class:"scroll",style:b.value},[x])])]):x}}});const Ot={class:"q-mini-drawer-hide absolute",style:{top:"15px",right:"-17px"}},Ft=ct({__name:"MainLayout",setup(e){const C=ht(),v=mt(),n=z(!1),r=z(!1);function d(){n.value=!n.value}function s(t){r.value&&(r.value=!1,t.stopPropagation())}return(t,_)=>{const p=vt("router-view");return ae(),le(Mt,{view:"hHh lpR fFf"},{default:q(()=>[w(Ct,{elevated:"",class:"bg-primary text-white"},{default:q(()=>[w(xt,null,{default:q(()=>[w(we,{dense:"",flat:"",round:"",icon:"menu",onClick:d}),w(Tt,null,{default:q(()=>[w(we,{label:"Decision Matrix Helper",flat:"",to:"/"})]),_:1})]),_:1})]),_:1}),w($t,{"show-if-above":"",modelValue:n.value,"onUpdate:modelValue":_[1]||(_[1]=o=>n.value=o),side:"left",bordered:"",mini:!n.value||r.value,onClickCapture:s,width:200,breakpoint:500,class:"bg-grey-3"},{default:q(()=>[w(Pt,{class:"fit"},{default:q(()=>[w(qt,{padding:"",class:"menu-list"},{default:q(()=>[Y((ae(),le(ve,{clickable:"",to:"wizard"},{default:q(()=>[w(I,{avatar:""},{default:q(()=>[w(ue,{name:"auto_fix_normal"})]),_:1}),w(I,null,{default:q(()=>[J(" Wizard ")]),_:1})]),_:1})),[[se]]),Y((ae(),le(ve,{clickable:"",to:"Alternatives"},{default:q(()=>[w(I,{avatar:""},{default:q(()=>[w(ue,{name:"build"}),w($e,null,{default:q(()=>[J(ke(Pe(v).alternatives.length),1)]),_:1})]),_:1}),w(I,null,{default:q(()=>[J(" Alternatives ")]),_:1})]),_:1})),[[se]]),Y((ae(),le(ve,{clickable:"",to:"features"},{default:q(()=>[w(I,{avatar:""},{default:q(()=>[w(ue,{name:"checklist"}),w($e,null,{default:q(()=>[J(ke(Pe(C).features.length),1)]),_:1})]),_:1}),w(I,null,{default:q(()=>[J(" Features ")]),_:1})]),_:1})),[[se]]),Y((ae(),le(ve,{clickable:"",to:"decisionmatrix"},{default:q(()=>[w(I,{avatar:""},{default:q(()=>[w(ue,{name:"functions"})]),_:1}),w(I,null,{default:q(()=>[J(" Decision Matrix ")]),_:1})]),_:1})),[[se]])]),_:1})]),_:1}),dt("div",Ot,[w(we,{dense:"",round:"",unelevated:"",color:"accent",icon:"chevron_left",onClick:_[0]||(_[0]=o=>r.value=!0)})])]),_:1},8,["modelValue","mini"]),w(Bt,null,{default:q(()=>[w(p)]),_:1})]),_:1})}}});export{Ft as default};
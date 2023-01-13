import{c as U,h as ve,m as Ke,n as pe,o as Xe,p as N,q as Ye,u as Be,e as Le,d as Ue,Q as j,f as Ge,R as Je,b as Ze}from"./QBtn.d0083371.js";import{u as he,a as ge}from"./use-dark.b18e3563.js";import{c as d,h as m,g as F,o as He,_ as ye,w as I,a as et,m as X,q as T,b as V,p as Y,$ as tt,r as _,a0 as qe,z as ot,a1 as nt,A as lt,T as ke,a2 as H}from"./index.dd4d0f4c.js";import{r as xe,n as it,u as at,o as st,p as rt,c as ut,q as ct}from"./features.9e7873c1.js";var Nt=U({name:"QList",props:{...he,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:o}){const t=F(),n=ge(e,t.proxy.$q),i=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>m("div",{class:i.value,role:"list"},ve(o.default))}});const dt=[null,document,document.body,document.scrollingElement,document.documentElement];function jt(e,o){let t=Ke(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return dt.includes(t)?window:t}function $e(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Ie(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function Me(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=$e(e);if(t<=0){i!==o&&fe(e,o);return}requestAnimationFrame(a=>{const l=a-n,f=i+(o-i)/Math.max(l,t)*l;fe(e,f),f!==o&&Me(e,o,t-l,a)})}function Re(e,o,t=0){const n=arguments[3]===void 0?performance.now():arguments[3],i=Ie(e);if(t<=0){i!==o&&me(e,o);return}requestAnimationFrame(a=>{const l=a-n,f=i+(o-i)/Math.max(l,t)*l;me(e,f),f!==o&&Re(e,o,t-l,a)})}function fe(e,o){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}e.scrollTop=o}function me(e,o){if(e===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=o}function Kt(e,o,t){if(t){Me(e,o,t);return}fe(e,o)}function Xt(e,o,t){if(t){Re(e,o,t);return}me(e,o)}let A;function Yt(){if(A!==void 0)return A;const e=document.createElement("p"),o=document.createElement("div");pe(e,{width:"100%",height:"200px"}),pe(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=o.clientWidth),o.remove(),A=t-n,A}function ft(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function mt(e,o,t){let n;function i(){n!==void 0&&(ye.remove(n),n=void 0)}return He(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){n={condition:()=>t.value===!0,handler:o},ye.add(n)}}}const vt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ht=["before-show","show","before-hide","hide"];function gt({showing:e,canShow:o,hideOnRouteChange:t,handleShow:n,handleHide:i,processOnMount:a}){const l=F(),{props:f,emit:v,proxy:w}=l;let h;function p(u){e.value===!0?g(u):b(u)}function b(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const x=f["onUpdate:modelValue"]!==void 0;x===!0&&(v("update:modelValue",!0),h=u,X(()=>{h===u&&(h=void 0)})),(f.modelValue===null||x===!1)&&y(u)}function y(u){e.value!==!0&&(e.value=!0,v("before-show",u),n!==void 0?n(u):v("show",u))}function g(u){if(f.disable===!0)return;const x=f["onUpdate:modelValue"]!==void 0;x===!0&&(v("update:modelValue",!1),h=u,X(()=>{h===u&&(h=void 0)})),(f.modelValue===null||x===!1)&&q(u)}function q(u){e.value!==!1&&(e.value=!1,v("before-hide",u),i!==void 0?i(u):v("hide",u))}function s(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!1):u===!0!==e.value&&(u===!0?y:q)(h)}I(()=>f.modelValue,s),t!==void 0&&Xe(l)===!0&&I(()=>w.$route.fullPath,()=>{t.value===!0&&e.value===!0&&g()}),a===!0&&et(()=>{s(f.modelValue)});const k={show:b,hide:g,toggle:p};return Object.assign(w,k),k}let D=0,ue,ce,O,de=!1,Se,_e,$;function bt(e){wt(e)&&Y(e)}function wt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=tt(e),t=e.shiftKey&&!e.deltaX,n=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=t||n?e.deltaY:e.deltaX;for(let a=0;a<o.length;a++){const l=o[a];if(ft(l,n))return n?i<0&&l.scrollTop===0?!0:i>0&&l.scrollTop+l.clientHeight===l.scrollHeight:i<0&&l.scrollLeft===0?!0:i>0&&l.scrollLeft+l.clientWidth===l.scrollWidth}return!0}function Ce(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Q(e){de!==!0&&(de=!0,requestAnimationFrame(()=>{de=!1;const{height:o}=e.target,{clientHeight:t,scrollTop:n}=document.scrollingElement;(O===void 0||o!==window.innerHeight)&&(O=t-o,document.scrollingElement.scrollTop=n),n>O&&(document.scrollingElement.scrollTop-=Math.ceil((n-O)/8))}))}function Te(e){const o=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:i}=window.getComputedStyle(o);ue=Ie(window),ce=$e(window),Se=o.style.left,_e=o.style.top,o.style.left=`-${ue}px`,o.style.top=`-${ce}px`,i!=="hidden"&&(i==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,T.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Q,V.passiveCapture),window.visualViewport.addEventListener("scroll",Q,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ce,V.passiveCapture))}T.is.desktop===!0&&T.is.mac===!0&&window[`${e}EventListener`]("wheel",bt,V.notPassive),e==="remove"&&(T.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",Q,V.passiveCapture),window.visualViewport.removeEventListener("scroll",Q,V.passiveCapture)):window.removeEventListener("scroll",Ce,V.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Se,o.style.top=_e,window.scrollTo(ue,ce),O=void 0)}function pt(e){let o="add";if(e===!0){if(D++,$!==void 0){clearTimeout($),$=void 0;return}if(D>1)return}else{if(D===0||(D--,D>0))return;if(o="remove",T.is.ios===!0&&T.is.nativeMobile===!0){clearTimeout($),$=setTimeout(()=>{Te(o),$=void 0},100);return}}Te(o)}function yt(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,pt(o))}}}const qt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ut(e,o){const t=_(o.value);return I(o,n=>{X(()=>{t.value=n})}),{transition:d(()=>"q-transition--"+(t.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:d(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let kt=document.body;function xt(e){const o=document.createElement("div");if(e!==void 0&&(o.id=e),qe.globalNodes!==void 0){const t=qe.globalNodes.class;t!==void 0&&(o.className=t)}return kt.appendChild(o),o}function St(e){e.remove()}const K=[];function Gt(e){return K.find(o=>o.__qPortalInnerRef.value!==null&&o.__qPortalInnerRef.value.contains(e))}function _t(e,o){do{if(e.$options.name==="QMenu"){if(e.hide(o),e.$props.separateClosePopup===!0)return N(e)}else if(e.__qPortalInnerRef!==void 0){const t=N(e);return t!==void 0&&t.$options.name==="QPopupProxy"?(e.hide(o),t):e}e=N(e)}while(e!=null)}function Jt(e,o,t){for(;t!==0&&e!==void 0&&e!==null;){if(e.__qPortalInnerRef!==void 0){if(t--,e.$options.name==="QMenu"){e=_t(e,o);continue}e.hide(o)}e=N(e)}}function Ct(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Tt(e,o,t,n){const i=_(!1),a=_(!1);let l=null;const f={},v=n===!0&&Ct(e);function w(p){if(p===!0){xe(f),a.value=!0;return}a.value=!1,i.value===!1&&(v===!1&&l===null&&(l=xt()),i.value=!0,K.push(e.proxy),it(f))}function h(p){if(a.value=!1,p!==!0)return;xe(f),i.value=!1;const b=K.indexOf(e.proxy);b!==-1&&K.splice(b,1),l!==null&&(St(l),l=null)}return ot(()=>{h(!0)}),e.proxy.__qPortalInnerRef=o,{showPortal:w,hidePortal:h,portalIsActive:i,portalIsAccessible:a,renderPortal:()=>v===!0?t():i.value===!0?[m(nt,{to:l},t())]:void 0}}const P=[];let M;function Et(e){M=e.keyCode===27}function Vt(){M===!0&&(M=!1)}function Pt(e){M===!0&&(M=!1,lt(e,27)===!0&&P[P.length-1](e))}function ze(e){window[e]("keydown",Et),window[e]("blur",Vt),window[e]("keyup",Pt),M=!1}function Bt(e){T.is.desktop===!0&&(P.push(e),P.length===1&&ze("addEventListener"))}function Ee(e){const o=P.indexOf(e);o>-1&&(P.splice(o,1),P.length===0&&ze("removeEventListener"))}const B=[];function De(e){B[B.length-1](e)}function Lt(e){T.is.desktop===!0&&(B.push(e),B.length===1&&document.body.addEventListener("focusin",De))}function Ve(e){const o=B.indexOf(e);o>-1&&(B.splice(o,1),B.length===0&&document.body.removeEventListener("focusin",De))}let W=0;const Ht={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Pe={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Zt=U({name:"QDialog",inheritAttrs:!1,props:{...vt,...qt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...ht,"shake","click","escape-key"],setup(e,{slots:o,emit:t,attrs:n}){const i=F(),a=_(null),l=_(!1),f=_(!1),v=_(!1);let w,h=null,p,b;const y=d(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:g}=yt(),{registerTimeout:q}=at(),{registerTick:s,removeTick:k}=st(),{showPortal:u,hidePortal:x,portalIsAccessible:G,renderPortal:J}=Tt(i,a,je,!0),{hide:L}=gt({showing:l,hideOnRouteChange:y,handleShow:Ae,handleHide:Qe,processOnMount:!0}),{addToHistory:R,removeFromHistory:Z}=mt(l,L,y),ee=d(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Ht[e.position]}`+(v.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),te=d(()=>"q-transition--"+(e.transitionShow===void 0?Pe[e.position][0]:e.transitionShow)),oe=d(()=>"q-transition--"+(e.transitionHide===void 0?Pe[e.position][1]:e.transitionHide)),c=d(()=>f.value===!0?oe.value:te.value),S=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`),E=d(()=>l.value===!0&&e.seamless!==!0),Oe=d(()=>e.autoClose===!0?{onClick:We}:{}),Fe=d(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${E.value===!0?"modal":"seamless"}`,n.class]);I(l,r=>{X(()=>{f.value=r})}),I(()=>e.maximized,r=>{l.value===!0&&ie(r)}),I(E,r=>{g(r),r===!0?(Lt(ae),Bt(le)):(Ve(ae),Ee(le))});function Ae(r){R(),h=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,ie(e.maximized),u(),v.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),s(z)):k(),q(()=>{if(i.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:C,bottom:se}=document.activeElement.getBoundingClientRect(),{innerHeight:we}=window,re=window.visualViewport!==void 0?window.visualViewport.height:we;C>0&&se>re/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-re,se>=we?1/0:Math.ceil(document.scrollingElement.scrollTop+se-re/2))),document.activeElement.scrollIntoView()}b=!0,a.value.click(),b=!1}u(!0),v.value=!1,t("show",r)},e.transitionDuration)}function Qe(r){k(),Z(),be(!0),v.value=!0,x(),h!==null&&(h.focus(),h=null),q(()=>{x(!0),v.value=!1,t("hide",r)},e.transitionDuration)}function z(r){rt(()=>{let C=a.value;C===null||C.contains(document.activeElement)===!0||(C=C.querySelector(r||"[autofocus], [data-autofocus]")||C,C.focus({preventScroll:!0}))})}function ne(){z(),t("shake");const r=a.value;r!==null&&(r.classList.remove("q-animate--scale"),r.classList.add("q-animate--scale"),clearTimeout(w),w=setTimeout(()=>{a.value!==null&&(r.classList.remove("q-animate--scale"),z())},170))}function le(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&ne():(t("escape-key"),L()))}function be(r){clearTimeout(w),(r===!0||l.value===!0)&&(ie(!1),e.seamless!==!0&&(g(!1),Ve(ae),Ee(le))),r!==!0&&(h=null)}function ie(r){r===!0?p!==!0&&(W<1&&document.body.classList.add("q-body--dialog"),W++,p=!0):p===!0&&(W<2&&document.body.classList.remove("q-body--dialog"),W--,p=!1)}function We(r){b!==!0&&(L(r),t("click",r))}function Ne(r){e.persistent!==!0&&e.noBackdropDismiss!==!0?L(r):e.noShake!==!0&&ne()}function ae(r){e.allowFocusOutside!==!0&&G.value===!0&&Ye(a.value,r.target)!==!0&&z('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:z,shake:ne,__updateRefocusTarget(r){h=r||null}}),He(be);function je(){return m("div",{role:"dialog","aria-modal":E.value===!0?"true":"false",...n,class:Fe.value},[m(ke,{name:"q-transition--fade",appear:!0},()=>E.value===!0?m("div",{class:"q-dialog__backdrop fixed-full",style:S.value,"aria-hidden":"true",onMousedown:Ne}):null),m(ke,{name:c.value,appear:!0},()=>l.value===!0?m("div",{ref:a,class:ee.value,style:S.value,tabindex:-1,...Oe.value},ve(o.default)):null)])}return J}});const $t={xs:8,sm:10,md:14,lg:20,xl:24};var eo=U({name:"QChip",props:{...he,...Be,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:o,emit:t}){const{proxy:{$q:n}}=F(),i=ge(e,n),a=Le(e,$t),l=d(()=>e.selected===!0||e.icon!==void 0),f=d(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),v=d(()=>e.iconRemove||n.iconSet.chip.remove),w=d(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),h=d(()=>{const s=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(s?` text-${s} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(w.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(i.value===!0?" q-chip--dark q-dark":"")}),p=d(()=>{const s=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},k={...s,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||n.lang.label.remove};return{chip:s,remove:k}});function b(s){s.keyCode===13&&y(s)}function y(s){e.disable||(t("update:selected",!e.selected),t("click",s))}function g(s){(s.keyCode===void 0||s.keyCode===13)&&(Y(s),e.disable===!1&&(t("update:modelValue",!1),t("remove")))}function q(){const s=[];w.value===!0&&s.push(m("div",{class:"q-focus-helper"})),l.value===!0&&s.push(m(j,{class:"q-chip__icon q-chip__icon--left",name:f.value}));const k=e.label!==void 0?[m("div",{class:"ellipsis"},[e.label])]:void 0;return s.push(m("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Ge(o.default,k))),e.iconRight&&s.push(m(j,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&s.push(m(j,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:v.value,...p.value.remove,onClick:g,onKeyup:g})),s}return()=>{if(e.modelValue===!1)return;const s={class:h.value,style:a.value};return w.value===!0&&Object.assign(s,p.value.chip,{onClick:y,onKeyup:b}),Ue("div",s,q(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Je,e.ripple]])}}});function It(e,o){const t=_(null),n=d(()=>e.disable===!0?null:m("span",{ref:t,class:"no-outline",tabindex:-1}));function i(a){const l=o.value;a!==void 0&&a.type.indexOf("key")===0?l!==null&&document.activeElement!==l&&l.contains(document.activeElement)===!0&&l.focus():t.value!==null&&(a===void 0||l!==null&&l.contains(a.target)===!0)&&t.value.focus()}return{refocusTargetEl:n,refocusTarget:i}}var Mt={xs:30,sm:35,md:40,lg:50,xl:60};const Rt={...he,...Be,...ut,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},zt=["update:modelValue"];function Dt(e,o){const{props:t,slots:n,emit:i,proxy:a}=F(),{$q:l}=a,f=ge(t,l),v=_(null),{refocusTargetEl:w,refocusTarget:h}=It(t,v),p=Le(t,Mt),b=d(()=>t.val!==void 0&&Array.isArray(t.modelValue)),y=d(()=>{const c=H(t.val);return b.value===!0?t.modelValue.findIndex(S=>H(S)===c):-1}),g=d(()=>b.value===!0?y.value>-1:H(t.modelValue)===H(t.trueValue)),q=d(()=>b.value===!0?y.value===-1:H(t.modelValue)===H(t.falseValue)),s=d(()=>g.value===!1&&q.value===!1),k=d(()=>t.disable===!0?-1:t.tabindex||0),u=d(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(t.disable===!0?" disabled":"")+(f.value===!0?` q-${e}--dark`:"")+(t.dense===!0?` q-${e}--dense`:"")+(t.leftLabel===!0?" reverse":"")),x=d(()=>{const c=g.value===!0?"truthy":q.value===!0?"falsy":"indet",S=t.color!==void 0&&(t.keepColor===!0||(e==="toggle"?g.value===!0:q.value!==!0))?` text-${t.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${c}${S}`}),G=d(()=>{const c={type:"checkbox"};return t.name!==void 0&&Object.assign(c,{"^checked":g.value===!0?"checked":void 0,name:t.name,value:b.value===!0?t.val:t.trueValue}),c}),J=ct(G),L=d(()=>{const c={tabindex:k.value,role:e==="toggle"?"switch":"checkbox","aria-label":t.label,"aria-checked":s.value===!0?"mixed":g.value===!0?"true":"false"};return t.disable===!0&&(c["aria-disabled"]="true"),c});function R(c){c!==void 0&&(Y(c),h(c)),t.disable!==!0&&i("update:modelValue",Z(),c)}function Z(){if(b.value===!0){if(g.value===!0){const c=t.modelValue.slice();return c.splice(y.value,1),c}return t.modelValue.concat([t.val])}if(g.value===!0){if(t.toggleOrder!=="ft"||t.toggleIndeterminate===!1)return t.falseValue}else if(q.value===!0){if(t.toggleOrder==="ft"||t.toggleIndeterminate===!1)return t.trueValue}else return t.toggleOrder!=="ft"?t.trueValue:t.falseValue;return t.indeterminateValue}function ee(c){(c.keyCode===13||c.keyCode===32)&&Y(c)}function te(c){(c.keyCode===13||c.keyCode===32)&&R(c)}const oe=o(g,s);return Object.assign(a,{toggle:R}),()=>{const c=oe();t.disable!==!0&&J(c,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const S=[m("div",{class:x.value,style:p.value,"aria-hidden":"true"},c)];w.value!==null&&S.push(w.value);const E=t.label!==void 0?Ze(n.default,[t.label]):ve(n.default);return E!==void 0&&S.push(m("div",{class:`q-${e}__label q-anchor--skip`},E)),m("div",{ref:v,class:u.value,...L.value,onClick:R,onKeydown:ee,onKeyup:te},S)}}const Ot=m("div",{key:"svg",class:"q-checkbox__bg absolute"},[m("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[m("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),m("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var to=U({name:"QCheckbox",props:Rt,emits:zt,setup(e){function o(t,n){const i=d(()=>(t.value===!0?e.checkedIcon:n.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>i.value!==null?[m("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[m(j,{class:"q-checkbox__icon",name:i.value})])]:[Ot]}return Dt("checkbox",o)}});export{eo as Q,$e as a,Ie as b,Kt as c,ht as d,gt as e,mt as f,jt as g,yt as h,Yt as i,Gt as j,Jt as k,Nt as l,Zt as m,to as n,qt as o,K as p,Ut as q,Tt as r,Xt as s,Lt as t,vt as u,Ve as v,Ee as w,Bt as x,_t as y};

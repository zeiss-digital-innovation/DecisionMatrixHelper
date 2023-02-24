import{c as G,h as he,a as nt,b as $e,u as ot,d as it,Q as Z,e as rt,f as ut,g as I,R as oe}from"./QBtn.c5a743c4.js";import{c as r,h as _,i as Te,e as E,r as q,w as B,o as We,l as ge,g as ae,a as st,n as Pe,b as M,s as ct,d as je,f as dt,p as ft,j as He,k as vt,m as mt,q as de,t as ht,u as gt,v as H,x as J,y as g,z as i,A as U,B as Se,C as fe,D as _e,E as ue,F as bt,R as yt,P as pt}from"./index.b0ed36c1.js";import{Q as ke}from"./QSpace.a675a1db.js";import{Q as Ve,T as Ce,a as wt,b as xt,c as qe,C as ie}from"./ClosePopup.be47a4a7.js";import{u as St,a as _t,b as kt,c as Ct,d as qt,e as ve,f as zt,g as Ft,h as Vt,i as Tt,j as Bt,k as Qt,l as $t,m as De,n as Pt,Q as Dt,o as ze,p as Lt,q as Ot,r as re,s as W,t as Le,v as At}from"./features.21d32c04.js";import{Q as Rt}from"./QList.750ac99a.js";import{u as It,a as Mt}from"./use-dark.1fda995c.js";import{Q as Oe,a as Fe,b as Ae}from"./QCard.0e78be2c.js";import{u as Nt}from"./use-file-dom-props.a59f8847.js";var Re=G({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:c}){const s=r(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:s.value},he(c.default))}}),Ie=G({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:c}){const s=r(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:s.value,role:"toolbar"},he(c.default))}}),Wt=G({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:c,emit:s}){const{proxy:{$q:u}}=ae(),l=Te(ge,E);if(l===E)return console.error("QHeader needs to be child of QLayout"),E;const o=q(parseInt(e.heightHint,10)),S=q(!0),z=r(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||u.platform.is.ios&&l.isContainer.value===!0),T=r(()=>{if(e.modelValue!==!0)return 0;if(z.value===!0)return S.value===!0?o.value:0;const t=o.value-l.scroll.value.position;return t>0?t:0}),m=r(()=>e.modelValue!==!0||z.value===!0&&S.value!==!0),n=r(()=>e.modelValue===!0&&m.value===!0&&e.reveal===!0),D=r(()=>"q-header q-layout__section--marginal "+(z.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(m.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),L=r(()=>{const t=l.rows.value.top,d={};return t[0]==="l"&&l.left.space===!0&&(d[u.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),t[2]==="r"&&l.right.space===!0&&(d[u.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),d});function F(t,d){l.update("header",t,d)}function x(t,d){t.value!==d&&(t.value=d)}function p({height:t}){x(o,t),F("size",t)}function V(t){n.value===!0&&x(S,!0),s("focusin",t)}B(()=>e.modelValue,t=>{F("space",t),x(S,!0),l.animate()}),B(T,t=>{F("offset",t)}),B(()=>e.reveal,t=>{t===!1&&x(S,e.modelValue)}),B(S,t=>{l.animate(),s("reveal",t)}),B(l.scroll,t=>{e.reveal===!0&&x(S,t.direction==="up"||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)});const v={};return l.instances.header=v,e.modelValue===!0&&F("size",o.value),F("space",e.modelValue),F("offset",T.value),We(()=>{l.instances.header===v&&(l.instances.header=void 0,F("size",0),F("offset",0),F("space",!1))}),()=>{const t=nt(c.default,[]);return e.elevated===!0&&t.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(_(Ve,{debounce:0,onResize:p})),_("header",{class:D.value,style:L.value,onFocusin:V},t)}}});const Me=150;var jt=G({name:"QDrawer",inheritAttrs:!1,props:{...St,...It,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[..._t,"on-layout","mini-state"],setup(e,{slots:c,emit:s,attrs:u}){const l=ae(),{proxy:{$q:o}}=l,S=Mt(e,o),{preventBodyScroll:z}=zt(),{registerTimeout:T,removeTimeout:m}=kt(),n=Te(ge,E);if(n===E)return console.error("QDrawer needs to be child of QLayout"),E;let D,L,F;const x=q(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),p=r(()=>e.mini===!0&&x.value!==!0),V=r(()=>p.value===!0?e.miniWidth:e.width),v=q(e.showIfAbove===!0&&x.value===!1?!0:e.modelValue===!0),t=r(()=>e.persistent!==!0&&(x.value===!0||ne.value===!0));function d(a,y){if(Q(),a!==!1&&n.animate(),R(0),x.value===!0){const A=n.instances[ee.value];A!==void 0&&A.belowBreakpoint===!0&&A.hide(!1),Y(1),n.isContainer.value!==!0&&z(!0)}else Y(0),a!==!1&&pe(!1);T(()=>{a!==!1&&pe(!0),y!==!0&&s("show",a)},Me)}function h(a,y){O(),a!==!1&&n.animate(),Y(0),R(N.value*V.value),we(),y!==!0?T(()=>{s("hide",a)},Me):m()}const{show:C,hide:f}=Ct({showing:v,hideOnRouteChange:t,handleShow:d,handleHide:h}),{addToHistory:Q,removeFromHistory:O}=qt(v,f,t),w={belowBreakpoint:x,hide:f},k=r(()=>e.side==="right"),N=r(()=>(o.lang.rtl===!0?-1:1)*(k.value===!0?1:-1)),le=q(0),j=q(!1),K=q(!1),se=q(V.value*N.value),ee=r(()=>k.value===!0?"left":"right"),b=r(()=>v.value===!0&&x.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:V.value:0),$=r(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(k.value?"R":"L")>-1||o.platform.is.ios===!0&&n.isContainer.value===!0),P=r(()=>e.overlay===!1&&v.value===!0&&x.value===!1),ne=r(()=>e.overlay===!0&&v.value===!0&&x.value===!1),be=r(()=>"fullscreen q-drawer__backdrop"+(v.value===!1&&j.value===!1?" hidden":"")),Ue=r(()=>({backgroundColor:`rgba(0,0,0,${le.value*.4})`})),Be=r(()=>k.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),Ee=r(()=>k.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),Ke=r(()=>{const a={};return n.header.space===!0&&Be.value===!1&&($.value===!0?a.top=`${n.header.offset}px`:n.header.space===!0&&(a.top=`${n.header.size}px`)),n.footer.space===!0&&Ee.value===!1&&($.value===!0?a.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(a.bottom=`${n.footer.size}px`)),a}),Ye=r(()=>{const a={width:`${V.value}px`,transform:`translateX(${se.value}px)`};return x.value===!0?a:Object.assign(a,Ke.value)}),Xe=r(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),Je=r(()=>`q-drawer q-drawer--${e.side}`+(K.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(S.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":v.value===!0?"":" q-layout--prevent-focus")+(x.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+($.value===!0||P.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Be.value===!0?" q-drawer--top-padding":""))),Ge=r(()=>{const a=o.lang.rtl===!0?e.side:ee.value;return[[Ce,at,void 0,{[a]:!0,mouse:!0}]]}),Ze=r(()=>{const a=o.lang.rtl===!0?ee.value:e.side;return[[Ce,Qe,void 0,{[a]:!0,mouse:!0}]]}),et=r(()=>{const a=o.lang.rtl===!0?ee.value:e.side;return[[Ce,Qe,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function ye(){lt(x,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}B(x,a=>{a===!0?(D=v.value,v.value===!0&&f(!1)):e.overlay===!1&&e.behavior!=="mobile"&&D!==!1&&(v.value===!0?(R(0),Y(0),we()):C(!1))}),B(()=>e.side,(a,y)=>{n.instances[y]===w&&(n.instances[y]=void 0,n[y].space=!1,n[y].offset=0),n.instances[a]=w,n[a].size=V.value,n[a].space=P.value,n[a].offset=b.value}),B(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&ye()}),B(()=>e.behavior+e.breakpoint,ye),B(n.isContainer,a=>{v.value===!0&&z(a!==!0),a===!0&&ye()}),B(n.scrollbarWidth,()=>{R(v.value===!0?0:void 0)}),B(b,a=>{X("offset",a)}),B(P,a=>{s("on-layout",a),X("space",a)}),B(k,()=>{R()}),B(V,a=>{R(),xe(e.miniToOverlay,a)}),B(()=>e.miniToOverlay,a=>{xe(a,V.value)}),B(()=>o.lang.rtl,()=>{R()}),B(()=>e.mini,()=>{e.modelValue===!0&&(tt(),n.animate())}),B(p,a=>{s("mini-state",a)});function R(a){a===void 0?Pe(()=>{a=v.value===!0?0:V.value,R(N.value*a)}):(n.isContainer.value===!0&&k.value===!0&&(x.value===!0||Math.abs(a)===V.value)&&(a+=N.value*n.scrollbarWidth.value),se.value=a)}function Y(a){le.value=a}function pe(a){const y=a===!0?"remove":n.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function tt(){clearTimeout(L),l.proxy&&l.proxy.$el&&l.proxy.$el.classList.add("q-drawer--mini-animate"),K.value=!0,L=setTimeout(()=>{K.value=!1,l&&l.proxy&&l.proxy.$el&&l.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function at(a){if(v.value!==!1)return;const y=V.value,A=ve(a.distance.x,0,y);if(a.isFinal===!0){A>=Math.min(75,y)===!0?C():(n.animate(),Y(0),R(N.value*y)),j.value=!1;return}R((o.lang.rtl===!0?k.value!==!0:k.value)?Math.max(y-A,0):Math.min(0,A-y)),Y(ve(A/y,0,1)),a.isFirst===!0&&(j.value=!0)}function Qe(a){if(v.value!==!0)return;const y=V.value,A=a.direction===e.side,ce=(o.lang.rtl===!0?A!==!0:A)?ve(a.distance.x,0,y):0;if(a.isFinal===!0){Math.abs(ce)<Math.min(75,y)===!0?(n.animate(),Y(1),R(0)):f(),j.value=!1;return}R(N.value*ce),Y(ve(1-ce/y,0,1)),a.isFirst===!0&&(j.value=!0)}function we(){z(!1),pe(!0)}function X(a,y){n.update(e.side,a,y)}function lt(a,y){a.value!==y&&(a.value=y)}function xe(a,y){X("size",a===!0?e.miniWidth:y)}return n.instances[e.side]=w,xe(e.miniToOverlay,V.value),X("space",P.value),X("offset",b.value),e.showIfAbove===!0&&e.modelValue!==!0&&v.value===!0&&e["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!0),st(()=>{s("on-layout",P.value),s("mini-state",p.value),D=e.showIfAbove===!0;const a=()=>{(v.value===!0?d:h)(!1,!0)};if(n.totalWidth.value!==0){Pe(a);return}F=B(n.totalWidth,()=>{F(),F=void 0,v.value===!1&&e.showIfAbove===!0&&x.value===!1?C(!1):a()})}),We(()=>{F!==void 0&&F(),clearTimeout(L),v.value===!0&&we(),n.instances[e.side]===w&&(n.instances[e.side]=void 0,X("size",0),X("offset",0),X("space",!1))}),()=>{const a=[];x.value===!0&&(e.noSwipeOpen===!1&&a.push(M(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ge.value)),a.push($e("div",{ref:"backdrop",class:be.value,style:Ue.value,"aria-hidden":"true",onClick:f},void 0,"backdrop",e.noSwipeBackdrop!==!0&&v.value===!0,()=>et.value)));const y=p.value===!0&&c.mini!==void 0,A=[_("div",{...u,key:""+y,class:[Xe.value,u.class]},y===!0?c.mini():he(c.default))];return e.elevated===!0&&v.value===!0&&A.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push($e("aside",{ref:"content",class:Je.value,style:Ye.value},A,"contentclose",e.noSwipeClose!==!0&&x.value===!0,()=>Ze.value)),_("div",{class:"q-drawer-container"},a)}}}),Ht=G({name:"QAvatar",props:{...ot,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:c}){const s=it(e),u=r(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),l=r(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const o=e.icon!==void 0?[_(Z,{name:e.icon})]:void 0;return _("div",{class:u.value,style:s.value},[_("div",{class:"q-avatar__content row flex-center overflow-hidden",style:l.value},rt(c.default,o))])}}});function te(e,c,s,u){const l=[];return e.forEach(o=>{u(o)===!0?l.push(o):c.push({failedPropValidation:s,file:o})}),l}function me(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),je(e)}const Ut={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Et=["rejected"];function Kt({editable:e,dnd:c,getFileInput:s,addFilesToQueue:u}){const{props:l,emit:o,proxy:S}=ae(),z=q(null),T=r(()=>l.accept!==void 0?l.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),m=r(()=>parseInt(l.maxFiles,10)),n=r(()=>parseInt(l.maxTotalSize,10));function D(t){if(e.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&ct(t);else{const d=s();d&&d!==t.target&&d.click(t)}}function L(t){e.value&&t&&u(null,t)}function F(t,d,h,C){let f=Array.from(d||t.target.files);const Q=[],O=()=>{Q.length>0&&o("rejected",Q)};if(l.accept!==void 0&&T.value.indexOf("*/")===-1&&(f=te(f,Q,"accept",w=>T.value.some(k=>w.type.toUpperCase().startsWith(k)||w.name.toUpperCase().endsWith(k))),f.length===0))return O();if(l.maxFileSize!==void 0){const w=parseInt(l.maxFileSize,10);if(f=te(f,Q,"max-file-size",k=>k.size<=w),f.length===0)return O()}if(l.multiple!==!0&&f.length>0&&(f=[f[0]]),f.forEach(w=>{w.__key=w.webkitRelativePath+w.lastModified+w.name+w.size}),C===!0){const w=h.map(k=>k.__key);f=te(f,Q,"duplicate",k=>w.includes(k.__key)===!1)}if(f.length===0)return O();if(l.maxTotalSize!==void 0){let w=C===!0?h.reduce((k,N)=>k+N.size,0):0;if(f=te(f,Q,"max-total-size",k=>(w+=k.size,w<=n.value)),f.length===0)return O()}if(typeof l.filter=="function"){const w=l.filter(f);f=te(f,Q,"filter",k=>w.includes(k))}if(l.maxFiles!==void 0){let w=C===!0?h.length:0;if(f=te(f,Q,"max-files",()=>(w++,w<=m.value)),f.length===0)return O()}if(O(),f.length>0)return f}function x(t){me(t),c.value!==!0&&(c.value=!0)}function p(t){je(t),(t.relatedTarget!==null||dt.is.safari!==!0?t.relatedTarget!==z.value:document.elementsFromPoint(t.clientX,t.clientY).includes(z.value)===!1)===!0&&(c.value=!1)}function V(t){me(t);const d=t.dataTransfer.files;d.length>0&&u(null,d),c.value=!1}function v(t){if(c.value===!0)return _("div",{ref:z,class:`q-${t}__dnd absolute-full`,onDragenter:me,onDragover:me,onDragleave:p,onDrop:V})}return Object.assign(S,{pickFiles:D,addFiles:L}),{pickFiles:D,addFiles:L,onDragover:x,onDragleave:p,processFiles:F,getDndNode:v,maxFilesNumber:m,maxTotalSizeNumber:n}}var Yt=G({name:"QFile",inheritAttrs:!1,props:{...Ft,...Vt,...Ut,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Tt,...Et],setup(e,{slots:c,emit:s,attrs:u}){const{proxy:l}=ae(),o=Bt(),S=q(null),z=q(!1),T=Qt(e),{pickFiles:m,onDragover:n,onDragleave:D,processFiles:L,getDndNode:F}=Kt({editable:o.editable,dnd:z,getFileInput:le,addFilesToQueue:j}),x=Nt(e),p=r(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),V=r(()=>De(p.value)),v=r(()=>p.value.map(b=>b.name).join(", ")),t=r(()=>Pt(p.value.reduce((b,$)=>b+$.size,0))),d=r(()=>({totalSize:t.value,filesNumber:p.value.length,maxFiles:e.maxFiles})),h=r(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:T.value,...u,id:o.targetUid.value,disabled:o.editable.value!==!0})),C=r(()=>"q-file q-field--auto-height"+(z.value===!0?" q-file--dnd":"")),f=r(()=>e.multiple===!0&&e.append===!0);function Q(b){const $=p.value.slice();$.splice(b,1),w($)}function O(b){const $=p.value.findIndex(b);$>-1&&Q($)}function w(b){s("update:modelValue",e.multiple===!0?b:b[0])}function k(b){b.keyCode===13&&ft(b)}function N(b){(b.keyCode===13||b.keyCode===32)&&m(b)}function le(){return S.value}function j(b,$){const P=L(b,$,p.value,f.value),ne=le();ne!=null&&(ne.value=""),P!==void 0&&((e.multiple===!0?e.modelValue&&P.every(be=>p.value.includes(be)):e.modelValue===P[0])||w(f.value===!0?p.value.concat(P):P))}function K(){return[_("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function se(){if(c.file!==void 0)return p.value.length===0?K():p.value.map(($,P)=>c.file({index:P,file:$,ref:this}));if(c.selected!==void 0)return p.value.length===0?K():c.selected({files:p.value,ref:this});if(e.useChips===!0)return p.value.length===0?K():p.value.map(($,P)=>_(Dt,{key:"file-"+P,removable:o.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{Q(P)}},()=>_("span",{class:"ellipsis",textContent:$.name})));const b=e.displayValue!==void 0?e.displayValue:v.value;return b.length>0?[_("div",{class:e.inputClass,style:e.inputStyle,textContent:b})]:K()}function ee(){const b={ref:S,...h.value,...x.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:j};return e.multiple===!0&&(b.multiple=!0),_("input",b)}return Object.assign(o,{fieldClass:C,emitValue:w,hasValue:V,inputRef:S,innerValue:p,floatingLabel:r(()=>V.value===!0||De(e.displayValue)),computedCounter:r(()=>{if(e.counterLabel!==void 0)return e.counterLabel(d.value);const b=e.maxFiles;return`${p.value.length}${b!==void 0?" / "+b:""} (${t.value})`}),getControlChild:()=>F("file"),getControl:()=>{const b={ref:o.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return o.editable.value===!0&&Object.assign(b,{onDragover:n,onDragleave:D,onKeydown:k,onKeyup:N}),_("div",b,[ee()].concat(se()))}}),Object.assign(l,{removeAtIndex:Q,removeFile:O,getNativeElement:()=>S.value}),$t(o)}}),Xt=G({name:"QPageContainer",setup(e,{slots:c}){const{proxy:{$q:s}}=ae(),u=Te(ge,E);if(u===E)return console.error("QPageContainer needs to be child of QLayout"),E;He(vt,!0);const l=r(()=>{const o={};return u.header.space===!0&&(o.paddingTop=`${u.header.size}px`),u.right.space===!0&&(o[`padding${s.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(o.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(o[`padding${s.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),o});return()=>_("div",{class:"q-page-container",style:l.value},he(c.default))}}),Jt=G({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:c,emit:s}){const{proxy:{$q:u}}=ae(),l=q(null),o=q(u.screen.height),S=q(e.container===!0?0:u.screen.width),z=q({position:0,direction:"down",inflectionPoint:0}),T=q(0),m=q(mt.value===!0?0:ze()),n=r(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),D=r(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),L=r(()=>m.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${m.value}px`}:null),F=r(()=>m.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${m.value}px`,width:`calc(100% + ${m.value}px)`}:null);function x(h){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};z.value=C,e.onScroll!==void 0&&s("scroll",C)}}function p(h){const{height:C,width:f}=h;let Q=!1;o.value!==C&&(Q=!0,o.value=C,e.onScrollHeight!==void 0&&s("scroll-height",C),v()),S.value!==f&&(Q=!0,S.value=f),Q===!0&&e.onResize!==void 0&&s("resize",h)}function V({height:h}){T.value!==h&&(T.value=h,v())}function v(){if(e.container===!0){const h=o.value>T.value?ze():0;m.value!==h&&(m.value=h)}}let t;const d={instances:{},view:r(()=>e.view),isContainer:r(()=>e.container),rootRef:l,height:o,containerHeight:T,scrollbarWidth:m,totalWidth:r(()=>S.value+m.value),rows:r(()=>{const h=e.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:de({size:0,offset:0,space:!1}),right:de({size:300,offset:0,space:!1}),footer:de({size:0,offset:0,space:!1}),left:de({size:300,offset:0,space:!1}),scroll:z,animate(){t!==void 0?clearTimeout(t):document.body.classList.add("q-body--layout-animate"),t=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),t=void 0},155)},update(h,C,f){d[h][C]=f}};if(He(ge,d),ze()>0){let f=function(){h=null,C.classList.remove("hide-scrollbar")},Q=function(){if(h===null){if(C.scrollHeight>u.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(f,300)},O=function(w){h!==null&&w==="remove"&&(clearTimeout(h),f()),window[`${w}EventListener`]("resize",Q)},h=null;const C=document.body;B(()=>e.container!==!0?"add":"remove",O),e.container!==!0&&O("add"),ht(()=>{O("remove")})}return()=>{const h=ut(c.default,[_(wt,{onScroll:x}),_(Ve,{onResize:p})]),C=_("div",{class:n.value,style:D.value,ref:e.container===!0?void 0:l,tabindex:-1},h);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:l},[_(Ve,{onResize:V}),_("div",{class:"absolute-full",style:L.value},[_("div",{class:"scroll",style:F.value},[C])])]):C}}});function Ne(e){setTimeout(()=>{window.URL.revokeObjectURL(e.href)},1e4),e.remove()}function Gt(e,c,s={}){const{mimeType:u,byteOrderMark:l,encoding:o}=typeof s=="string"?{mimeType:s}:s,S=o!==void 0?new TextEncoder(o).encode([c]):c,z=l!==void 0?[l,S]:[S],T=new Blob(z,{type:u||"application/octet-stream"}),m=document.createElement("a");m.href=window.URL.createObjectURL(T),m.setAttribute("download",e),typeof m.download=="undefined"&&m.setAttribute("target","_blank"),m.classList.add("hidden"),m.style.position="fixed",document.body.appendChild(m);try{return m.click(),Ne(m),!0}catch(n){return Ne(m),n}}class Zt{constructor(){this.__stack={}}on(c,s,u){return(this.__stack[c]||(this.__stack[c]=[])).push({fn:s,ctx:u}),this}once(c,s,u){const l=()=>{this.off(c,l),s.apply(u,arguments)};return l.__callback=s,this.on(c,l,u)}emit(c){const s=this.__stack[c];if(s!==void 0){const u=[].slice.call(arguments,1);s.forEach(l=>{l.fn.apply(l.ctx,u)})}return this}off(c,s){const u=this.__stack[c],l=[];return u!==void 0&&s&&(u.forEach(o=>{o.fn!==s&&o.fn.__callback!==s&&l.push(o)}),l.length!==0?this.__stack[c]=l:delete this.__stack[c]),this}}const ea={class:"q-mini-drawer-hide absolute",style:{top:"15px",right:"-17px"}},ta=ue("span",{class:"q-ml-sm q-mt-md"},"You are going to download the state of the tool. Are you sure?",-1),aa=ue("span",null,"Load",-1),la={class:"q-ml-sm q-mt-md"},na=ue("p",null," You are going to load a state from disk. This will erase the state you worked on so far. ",-1),oa={key:0,class:"text-warning text-bold text-center text-h6"},ga=gt({__name:"MainLayout",setup(e){const c=new Zt,s=Lt(),u=Ot(),l=q(!1),o=q(!1),S=q(!1),z=q(!1),T=q(!1),m=q();q(!1);const n=q(null);function D(v){v.preventDefault(),n.value=v}c.on("beforeinstallprompt",D);function L(){console.log(n.value),n.value&&(n.value.prompt(),n.value=null)}function F(){l.value=!l.value}function x(v){o.value&&(o.value=!1,v.stopPropagation())}function p(v){const t=JSON.stringify(pt.getAll(),null,2);Gt("DecisionMatrix.dmh",t,"application/json")||console.log("Failed to download file. Use different browser.")}async function V(){if(!m.value)return;const v=await m.value.text(),t=JSON.parse(v);Object.keys(t).forEach(d=>{localStorage.setItem(d,Object(t[d]))}),window.location.reload()}return(v,t)=>(H(),J(Jt,{view:"hHh lpR fFf"},{default:g(()=>[i(Wt,{elevated:"",class:"bg-primary text-white"},{default:g(()=>[i(Ie,null,{default:g(()=>[i(I,{dense:"",flat:"",round:"",icon:"menu",onClick:F}),i(Re,null,{default:g(()=>[i(I,{label:"Decision Matrix Helper",flat:"",to:"/","icon-right":"home"}),i(I,{label:"Install",flat:"",icon:"download",onClick:L})]),_:1}),i(ke),i(I,{dense:"",flat:"",icon:"upload",onClick:t[0]||(t[0]=d=>T.value=!0),label:"Load"}),i(I,{dense:"",flat:"",icon:"save",onClick:t[1]||(t[1]=d=>S.value=!0),label:"Save"})]),_:1})]),_:1}),i(jt,{"show-if-above":"",modelValue:l.value,"onUpdate:modelValue":t[3]||(t[3]=d=>l.value=d),side:"left",bordered:"",mini:!l.value||o.value,onClickCapture:x,width:200,breakpoint:500,class:"bg-grey-3"},{default:g(()=>[i(xt,{class:"fit"},{default:g(()=>[i(Rt,{padding:"",class:"menu-list"},{default:g(()=>[M((H(),J(re,{clickable:"",to:"wizard"},{default:g(()=>[i(W,{avatar:""},{default:g(()=>[i(Z,{name:"auto_fix_normal"})]),_:1}),i(W,null,{default:g(()=>[U(" Wizard ")]),_:1})]),_:1})),[[oe]]),M((H(),J(re,{clickable:"",to:"Alternatives"},{default:g(()=>[i(W,{avatar:""},{default:g(()=>[i(Z,{name:"build"}),i(qe,null,{default:g(()=>[U(Se(fe(u).alternatives.length),1)]),_:1})]),_:1}),i(W,null,{default:g(()=>[U(" Alternatives ")]),_:1})]),_:1})),[[oe]]),M((H(),J(re,{clickable:"",to:"features"},{default:g(()=>[i(W,{avatar:""},{default:g(()=>[i(Z,{name:"checklist"}),i(qe,null,{default:g(()=>[U(Se(fe(s).features.length),1)]),_:1})]),_:1}),i(W,null,{default:g(()=>[U(" Features ")]),_:1})]),_:1})),[[oe]]),M((H(),J(re,{clickable:"",to:"decisionmatrix"},{default:g(()=>[i(W,{avatar:""},{default:g(()=>[i(Z,{name:"functions"}),fe(u).alternatives.length<1?(H(),J(qe,{key:0,floating:""},{default:g(()=>[U(Se("warning"))]),_:1})):_e("",!0)]),_:1}),i(W,null,{default:g(()=>[U(" Decision Matrix ")]),_:1})]),_:1})),[[oe]]),i(ke),M((H(),J(re,{class:"text-accent",clickable:"",href:"https://github.com/zeiss-digital-innovation/DecisionMatrixHelper/",target:"_blank"},{default:g(()=>[i(W,{avatar:""},{default:g(()=>[i(Z,{name:"code"})]),_:1}),i(W,null,{default:g(()=>[U(" View on GitHub ")]),_:1})]),_:1})),[[oe]])]),_:1})]),_:1}),ue("div",ea,[i(I,{dense:"",round:"",unelevated:"",color:"accent",icon:"chevron_left",onClick:t[2]||(t[2]=d=>o.value=!0)})])]),_:1},8,["modelValue","mini"]),i(Le,{modelValue:S.value,"onUpdate:modelValue":t[4]||(t[4]=d=>S.value=d),persistent:""},{default:g(()=>[i(Oe,null,{default:g(()=>[i(Fe,{class:"row items-center"},{default:g(()=>[i(Ht,{icon:"save",color:"primary","text-color":"white"}),ta]),_:1}),i(Ae,{align:"right"},{default:g(()=>[M(i(I,{flat:"",label:"Cancel",color:"primary"},null,512),[[ie]]),M(i(I,{flat:"",icon:"download ",label:"Download",color:"primary",onClick:p},null,512),[[ie]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(Le,{modelValue:T.value,"onUpdate:modelValue":t[7]||(t[7]=d=>T.value=d),persistent:""},{default:g(()=>[i(Oe,null,{default:g(()=>[i(Ie,{class:"bg-primary text-white"},{default:g(()=>[i(Z,{name:"upload",size:"md"}),i(Re,null,{default:g(()=>[aa,U(" State from Disk")]),_:1}),M(i(I,{flat:"",round:"",dense:"",icon:"close"},null,512),[[ie]])]),_:1}),i(Fe,{class:"row items-center"},{default:g(()=>[ue("span",la,[na,m.value?(H(),bt("p",oa," Are you sure you want to do that? ")):_e("",!0)])]),_:1}),i(Fe,null,{default:g(()=>[i(Yt,{modelValue:m.value,"onUpdate:modelValue":t[5]||(t[5]=d=>m.value=d),clearable:"",accept:".dmh",counter:"",label:"Choose your file to upload"},null,8,["modelValue"])]),_:1}),i(Ae,{align:"left"},{default:g(()=>[m.value?(H(),J(At,{key:0,modelValue:z.value,"onUpdate:modelValue":t[6]||(t[6]=d=>z.value=d),label:"I want to replace the current state of the app"},null,8,["modelValue"])):_e("",!0),i(ke),M(i(I,{flat:"",label:"Cancel",color:"primary"},null,512),[[ie]]),M(i(I,{icon:"upload ",label:"Upload",color:"primary",disable:!m.value||!z.value,onClick:V},null,8,["disable"]),[[ie]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(Xt,null,{default:g(()=>[i(fe(yt))]),_:1})]),_:1}))}});export{ga as default};
import{Q as Le}from"./QBadge.6277acd3.js";import{g as bt,t as ht,h as G,R as gt,Q as ne,b as Ye,c as J,d as Je,i as Re}from"./QBtn.cd4d6a81.js";import{q as ee,n as qe,a1 as pt,N as ie,a2 as he,Q as Qe,p as ae,O as ge,r as V,c as b,w as K,g as le,m as Ze,h as q,T as yt,a7 as Ct,i as _t,e as pe,o as et,a as qt,a9 as tt,k as wt,A as Tt,aa as xt,ab as kt,u as Pt,f as St,j as At,B as Vt,C as X,D as te,E as P,F as _,K as Me,a4 as $e,a3 as De,I as N,G as ue,H as ye,a8 as Bt,L as Ee,J as It}from"./index.97ae05ef.js";import{t as Lt,w as Rt,n as Ce,u as Ne,p as Qt,q as Mt,s as $t,k as Dt,j as Et,Q as Nt,l as ze}from"./alternative.4e95abac.js";import{g as Fe,s as je,Q as zt,T as Ft}from"./TouchPan.141969c1.js";import{r as jt,Q as _e,a as Ue}from"./QSeparator.d3c158f6.js";import{Q as We}from"./QRating.5fba8918.js";import{u as at,a as nt}from"./use-dark.daaa1fd6.js";import{Q as Ut}from"./QInput.94f5db9f.js";import{a as se,Q as Oe,b as Wt}from"./QCard.06d7ddd4.js";import{Q as Ot}from"./QSpace.2ef2f611.js";function Kt(e){const r=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((s,i)=>{const l=parseFloat(s);l&&(r[i]=l)}),r}var Ht=bt({name:"touch-swipe",beforeMount(e,{value:r,arg:s,modifiers:i}){if(i.mouse!==!0&&ee.has.touch!==!0)return;const l=i.mouseCapture===!0?"Capture":"",a={handler:r,sensitivity:Kt(s),direction:Fe(i),noop:qe,mouseStart(u){je(u,a)&&pt(u)&&(ie(a,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(u,!0))},touchStart(u){if(je(u,a)){const w=u.target;ie(a,"temp",[[w,"touchmove","move","notPassiveCapture"],[w,"touchcancel","end","notPassiveCapture"],[w,"touchend","end","notPassiveCapture"]]),a.start(u)}},start(u,w){ee.is.firefox===!0&&he(e,!0);const B=Qe(u);a.event={x:B.left,y:B.top,time:Date.now(),mouse:w===!0,dir:!1}},move(u){if(a.event===void 0)return;if(a.event.dir!==!1){ae(u);return}const w=Date.now()-a.event.time;if(w===0)return;const B=Qe(u),R=B.left-a.event.x,v=Math.abs(R),m=B.top-a.event.y,n=Math.abs(m);if(a.event.mouse!==!0){if(v<a.sensitivity[1]&&n<a.sensitivity[1]){a.end(u);return}}else if(v<a.sensitivity[2]&&n<a.sensitivity[2])return;const g=v/w,S=n/w;a.direction.vertical===!0&&v<n&&v<100&&S>a.sensitivity[0]&&(a.event.dir=m<0?"up":"down"),a.direction.horizontal===!0&&v>n&&n<100&&g>a.sensitivity[0]&&(a.event.dir=R<0?"left":"right"),a.direction.up===!0&&v<n&&m<0&&v<100&&S>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&v<n&&m>0&&v<100&&S>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&v>n&&R<0&&n<100&&g>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&v>n&&R>0&&n<100&&g>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(ae(u),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Lt(),a.styleCleanup=Q=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const D=()=>{document.body.classList.remove("no-pointer-events--children")};Q===!0?setTimeout(D,50):D()}),a.handler({evt:u,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:w,distance:{x:v,y:n}})):a.end(u)},end(u){a.event!==void 0&&(ge(a,"temp"),ee.is.firefox===!0&&he(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),u!==void 0&&a.event.dir!==!1&&ae(u),a.event=void 0)}};if(e.__qtouchswipe=a,i.mouse===!0){const u=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";ie(a,"main",[[e,"mousedown","mouseStart",`passive${u}`]])}ee.has.touch===!0&&ie(a,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const s=e.__qtouchswipe;s!==void 0&&(r.oldValue!==r.value&&(typeof r.value!="function"&&s.end(),s.handler=r.value),s.direction=Fe(r.modifiers))},beforeUnmount(e){const r=e.__qtouchswipe;r!==void 0&&(ge(r,"main"),ge(r,"temp"),ee.is.firefox===!0&&he(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchswipe)}});function Xt(){const e=new Map;return{getCache:function(r,s){return e[r]===void 0?e[r]=s:e[r]},getCacheWithFn:function(r,s){return e[r]===void 0?e[r]=s():e[r]}}}const Gt={name:{required:!0},disable:Boolean},Ke={setup(e,{slots:r}){return()=>q("div",{class:"q-panel scroll",role:"tabpanel"},G(r.default))}},Yt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Jt=["update:modelValue","before-transition","transition"];function Zt(){const{props:e,emit:r,proxy:s}=le(),{getCacheWithFn:i}=Xt();let l,a;const u=V(null),w=V(null);function B(d){const x=e.vertical===!0?"up":"left";I((s.$q.lang.rtl===!0?-1:1)*(d.direction===x?1:-1))}const R=b(()=>[[Ht,B,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),v=b(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),m=b(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),n=b(()=>`--q-transition-duration: ${e.transitionDuration}ms`),g=b(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),S=b(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),Q=b(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);K(()=>e.modelValue,(d,x)=>{const E=f(d)===!0?y(d):-1;a!==!0&&T(E===-1?0:E<y(x)?-1:1),u.value!==E&&(u.value=E,r("before-transition",d,x),Ze(()=>{r("transition",d,x)}))});function D(){I(1)}function M(){I(-1)}function z(d){r("update:modelValue",d)}function f(d){return d!=null&&d!==""}function y(d){return l.findIndex(x=>x.props.name===d&&x.props.disable!==""&&x.props.disable!==!0)}function p(){return l.filter(d=>d.props.disable!==""&&d.props.disable!==!0)}function T(d){const x=d!==0&&e.animated===!0&&u.value!==-1?"q-transition--"+(d===-1?v.value:m.value):null;w.value!==x&&(w.value=x)}function I(d,x=u.value){let E=x+d;for(;E>-1&&E<l.length;){const j=l[E];if(j!==void 0&&j.props.disable!==""&&j.props.disable!==!0){T(d),a=!0,r("update:modelValue",j.props.name),setTimeout(()=>{a=!1});return}E+=d}e.infinite===!0&&l.length>0&&x!==-1&&x!==l.length&&I(d,d===-1?l.length:-1)}function H(){const d=y(e.modelValue);return u.value!==d&&(u.value=d),!0}function L(){const d=f(e.modelValue)===!0&&H()&&l[u.value];return e.keepAlive===!0?[q(Ct,S.value,[q(Q.value===!0?i(g.value,()=>({...Ke,name:g.value})):Ke,{key:g.value,style:n.value},()=>d)])]:[q("div",{class:"q-panel scroll",style:n.value,key:g.value,role:"tabpanel"},[d])]}function F(){if(l.length!==0)return e.animated===!0?[q(yt,{name:w.value},L)]:L()}function ce(d){return l=ht(G(d.default,[])).filter(x=>x.props!==null&&x.props.slot===void 0&&f(x.props.name)===!0),l.length}function de(){return l}return Object.assign(s,{next:D,previous:M,goTo:z}),{panelIndex:u,panelDirectives:R,updatePanelsList:ce,updatePanelIndex:H,getPanelContent:F,getEnabledPanels:p,getPanels:de,isValidPanelName:f,keepAliveProps:S,needsUniqueKeepAliveWrapper:Q,goToPanelByOffset:I,goToPanel:z,nextPanel:D,previousPanel:M}}let ea=0;const ta=["click","keydown"],aa={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${ea++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function na(e,r,s,i){const l=_t(tt,pe);if(l===pe)return console.error("QTab/QRouteTab component needs to be child of QTabs"),pe;const{proxy:a}=le(),u=V(null),w=V(null),B=V(null),R=b(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),v=b(()=>l.currentModel.value===e.name),m=b(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(v.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(i!==void 0?i.linkClass.value:"")),n=b(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=b(()=>e.disable===!0||l.hasFocus.value===!0||v.value===!1&&l.hasActiveTab.value===!0?-1:e.tabindex||0);function S(f,y){if(y!==!0&&u.value!==null&&u.value.focus(),e.disable===!0){i!==void 0&&i.hasRouterLink.value===!0&&ae(f);return}if(i===void 0){l.updateModel({name:e.name}),s("click",f);return}if(i.hasRouterLink.value===!0){const p=(T={})=>{let I;const H=T.to===void 0||kt(T.to,e.to)===!0?l.avoidRouteWatcher=Rt():null;return i.navigateToRouterLink(f,{...T,returnRouterError:!0}).catch(L=>{I=L}).then(L=>{if(H===l.avoidRouteWatcher&&(l.avoidRouteWatcher=!1,I===void 0&&(L===void 0||L.message.startsWith("Avoided redundant navigation")===!0)&&l.updateModel({name:e.name})),T.returnRouterError===!0)return I!==void 0?Promise.reject(I):L})};s("click",f,p),f.defaultPrevented!==!0&&p();return}s("click",f)}function Q(f){Tt(f,[13,32])?S(f,!0):xt(f)!==!0&&f.keyCode>=35&&f.keyCode<=40&&f.altKey!==!0&&f.metaKey!==!0&&l.onKbdNavigate(f.keyCode,a.$el)===!0&&ae(f),s("keydown",f)}function D(){const f=l.tabProps.value.narrowIndicator,y=[],p=q("div",{ref:B,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&y.push(q(ne,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&y.push(q("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&y.push(e.alertIcon!==void 0?q(ne,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):q("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),f===!0&&y.push(p);const T=[q("div",{class:"q-focus-helper",tabindex:-1,ref:u}),q("div",{class:n.value},Ye(r.default,y))];return f===!1&&T.push(p),T}const M={name:b(()=>e.name),rootRef:w,tabIndicatorRef:B,routeData:i};et(()=>{l.unregisterTab(M)}),qt(()=>{l.registerTab(M)});function z(f,y){const p={ref:w,class:m.value,tabindex:g.value,role:"tab","aria-selected":v.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:Q,...y};return wt(q(f,p,D()),[[gt,R.value]])}return{renderTab:z,$tabs:l}}var He=J({name:"QTab",props:aa,emits:ta,setup(e,{slots:r,emit:s}){const{renderTab:i}=na(e,r,s);return()=>i("div")}});function la(e,r,s){const i=s===!0?["left","right"]:["top","bottom"];return`absolute-${r===!0?i[0]:i[1]}${e?` text-${e}`:""}`}const ra=["left","center","right","justify"];var Xe=J({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>ra.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:r,emit:s}){const{proxy:i}=le(),{$q:l}=i,{registerTick:a}=Ce(),{registerTick:u}=Ce(),{registerTick:w}=Ce(),{registerTimeout:B,removeTimeout:R}=Ne(),{registerTimeout:v,removeTimeout:m}=Ne(),n=V(null),g=V(null),S=V(e.modelValue),Q=V(!1),D=V(!0),M=V(!1),z=V(!1),f=b(()=>l.platform.is.desktop===!0||e.mobileArrows===!0),y=[],p=V(0),T=V(!1);let I,H,L,F=f.value===!0?Te:qe;const ce=b(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:la(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),de=b(()=>{const t=p.value,o=S.value;for(let c=0;c<t;c++)if(y[c].name.value===o)return!0;return!1}),d=b(()=>`q-tabs__content--align-${Q.value===!0?"left":z.value===!0?"justify":e.align}`),x=b(()=>`q-tabs row no-wrap items-center q-tabs--${Q.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${f.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),E=b(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+d.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(l.platform.is.mobile===!0?" scroll":"")),j=b(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),re=b(()=>e.vertical!==!0&&l.lang.rtl===!0),ve=b(()=>jt===!1&&re.value===!0);K(re,F),K(()=>e.modelValue,t=>{fe({name:t,setCurrent:!0,skipEmit:!0})}),K(()=>e.outsideArrows,()=>{Z()}),K(f,t=>{F=t===!0?Te:qe,Z()});function fe({name:t,setCurrent:o,skipEmit:c,fromRoute:k}){S.value!==t&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&s("update:modelValue",t),(o===!0||e["onUpdate:modelValue"]===void 0)&&(lt(S.value,t),S.value=t))}function Z(){a(()=>{we({width:n.value.offsetWidth,height:n.value.offsetHeight})})}function we(t){if(j.value===void 0||g.value===null)return;const o=t[j.value.container],c=Math.min(g.value[j.value.scroll],Array.prototype.reduce.call(g.value.children,(A,C)=>A+(C[j.value.content]||0),0)),k=o>0&&c>o;Q.value=k,k===!0&&u(F),z.value=o<parseInt(e.breakpoint,10)}function lt(t,o){const c=t!=null&&t!==""?y.find(A=>A.name.value===t):null,k=o!=null&&o!==""?y.find(A=>A.name.value===o):null;if(c&&k){const A=c.tabIndicatorRef.value,C=k.tabIndicatorRef.value;clearTimeout(I),A.style.transition="none",A.style.transform="none",C.style.transition="none",C.style.transform="none";const h=A.getBoundingClientRect(),$=C.getBoundingClientRect();C.style.transform=e.vertical===!0?`translate3d(0,${h.top-$.top}px,0) scale3d(1,${$.height?h.height/$.height:1},1)`:`translate3d(${h.left-$.left}px,0,0) scale3d(${$.width?h.width/$.width:1},1,1)`,w(()=>{I=setTimeout(()=>{C.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",C.style.transform="none"},70)})}k&&Q.value===!0&&Y(k.rootRef.value)}function Y(t){const{left:o,width:c,top:k,height:A}=g.value.getBoundingClientRect(),C=t.getBoundingClientRect();let h=e.vertical===!0?C.top-k:C.left-o;if(h<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(h),F();return}h+=e.vertical===!0?C.height-A:C.width-c,h>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(h),F())}function Te(){const t=g.value;if(t!==null){const o=t.getBoundingClientRect(),c=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);re.value===!0?(D.value=Math.ceil(c+o.width)<t.scrollWidth-1,M.value=c>0):(D.value=c>0,M.value=e.vertical===!0?Math.ceil(c+o.height)<t.scrollHeight:Math.ceil(c+o.width)<t.scrollWidth)}}function xe(t){U(),H=setInterval(()=>{it(t)===!0&&U()},5)}function ke(){xe(ve.value===!0?Number.MAX_SAFE_INTEGER:0)}function Pe(){xe(ve.value===!0?0:Number.MAX_SAFE_INTEGER)}function U(){clearInterval(H)}function rt(t,o){const c=Array.prototype.filter.call(g.value.children,$=>$===o||$.matches&&$.matches(".q-tab.q-focusable")===!0),k=c.length;if(k===0)return;if(t===36)return Y(c[0]),c[0].focus(),!0;if(t===35)return Y(c[k-1]),c[k-1].focus(),!0;const A=t===(e.vertical===!0?38:37),C=t===(e.vertical===!0?40:39),h=A===!0?-1:C===!0?1:void 0;if(h!==void 0){const $=re.value===!0?-1:1,W=c.indexOf(o)+h*$;return W>=0&&W<k&&(Y(c[W]),c[W].focus({preventScroll:!0})),!0}}const ot=b(()=>ve.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,o)=>{t.scrollLeft=-o}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,o)=>{t.scrollTop=o}}:{get:t=>t.scrollLeft,set:(t,o)=>{t.scrollLeft=o}});function it(t){const o=g.value,{get:c,set:k}=ot.value;let A=!1,C=c(o);const h=t<C?-1:1;return C+=h*5,C<0?(A=!0,C=0):(h===-1&&C<=t||h===1&&C>=t)&&(A=!0,C=t),k(o,C),F(),A}function Se(t,o){for(const c in t)if(t[c]!==o[c])return!1;return!0}function ut(){let t=null,o={matchedLen:0,queryDiff:9999,hrefLen:0};const c=y.filter(h=>h.routeData!==void 0&&h.routeData.hasRouterLink.value===!0),{hash:k,query:A}=i.$route,C=Object.keys(A).length;for(const h of c){const $=h.routeData.exact.value===!0;if(h.routeData[$===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:W,query:me,matched:ft,href:mt}=h.routeData.resolvedLink.value,be=Object.keys(me).length;if($===!0){if(W!==k||be!==C||Se(A,me)===!1)continue;t=h.name.value;break}if(W!==""&&W!==k||be!==0&&Se(me,A)===!1)continue;const O={matchedLen:ft.length,queryDiff:C-be,hrefLen:mt.length-W.length};if(O.matchedLen>o.matchedLen){t=h.name.value,o=O;continue}else if(O.matchedLen!==o.matchedLen)continue;if(O.queryDiff<o.queryDiff)t=h.name.value,o=O;else if(O.queryDiff!==o.queryDiff)continue;O.hrefLen>o.hrefLen&&(t=h.name.value,o=O)}t===null&&y.some(h=>h.routeData===void 0&&h.name.value===S.value)===!0||fe({name:t,setCurrent:!0})}function st(t){if(R(),T.value!==!0&&n.value!==null&&t.target&&typeof t.target.closest=="function"){const o=t.target.closest(".q-tab");o&&n.value.contains(o)===!0&&(T.value=!0,Q.value===!0&&Y(o))}}function ct(){B(()=>{T.value=!1},30)}function oe(){Ve.avoidRouteWatcher===!1?v(ut):m()}function Ae(){if(L===void 0){const t=K(()=>i.$route.fullPath,oe);L=()=>{t(),L=void 0}}}function dt(t){y.push(t),p.value++,Z(),t.routeData===void 0||i.$route===void 0?v(()=>{if(Q.value===!0){const o=S.value,c=o!=null&&o!==""?y.find(k=>k.name.value===o):null;c&&Y(c.rootRef.value)}}):(Ae(),t.routeData.hasRouterLink.value===!0&&oe())}function vt(t){y.splice(y.indexOf(t),1),p.value--,Z(),L!==void 0&&t.routeData!==void 0&&(y.every(o=>o.routeData===void 0)===!0&&L(),oe())}const Ve={currentModel:S,tabProps:ce,hasFocus:T,hasActiveTab:de,registerTab:dt,unregisterTab:vt,verifyRouteModel:oe,updateModel:fe,onKbdNavigate:rt,avoidRouteWatcher:!1};Pt(tt,Ve);function Be(){clearTimeout(I),U(),L!==void 0&&L()}let Ie;return et(Be),St(()=>{Ie=L!==void 0,Be()}),At(()=>{Ie===!0&&Ae(),Z()}),()=>{const t=[q(zt,{onResize:we}),q("div",{ref:g,class:E.value,onScroll:F},G(r.default))];return f.value===!0&&t.push(q(ne,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(D.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ke,onTouchstartPassive:ke,onMouseupPassive:U,onMouseleavePassive:U,onTouchendPassive:U}),q(ne,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Pe,onTouchstartPassive:Pe,onMouseupPassive:U,onMouseleavePassive:U,onTouchendPassive:U})),q("div",{ref:n,class:x.value,role:"tablist",onFocusin:st,onFocusout:ct},t)}}}),Ge=J({name:"QTabPanels",props:{...Yt,...at},emits:Jt,setup(e,{slots:r}){const s=le(),i=nt(e,s.proxy.$q),{updatePanelsList:l,getPanelContent:a,panelDirectives:u}=Zt(),w=b(()=>"q-tab-panels q-panel-parent"+(i.value===!0?" q-tab-panels--dark q-dark":""));return()=>(l(r),Je("div",{class:w.value},a(),"pan",e.swipeable,()=>u.value))}}),oa=J({name:"QSplitter",props:{...at,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:r,emit:s}){const{proxy:{$q:i}}=le(),l=nt(e,i),a=V(null),u={before:V(null),after:V(null)},w=b(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(l.value===!0?" q-splitter--dark":"")),B=b(()=>e.horizontal===!0?"height":"width"),R=b(()=>e.reverse!==!0?"before":"after"),v=b(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function m(p){return(e.unit==="%"?p:Math.round(p))+e.unit}const n=b(()=>({[R.value]:{[B.value]:m(e.modelValue)}}));let g,S,Q,D,M;function z(p){if(p.isFirst===!0){const I=a.value.getBoundingClientRect()[B.value];g=e.horizontal===!0?"up":"left",S=e.unit==="%"?100:I,Q=Math.min(S,v.value[1],Math.max(v.value[0],e.modelValue)),D=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:i.lang.rtl===!0?-1:1)*(e.unit==="%"?I===0?0:100/I:1),a.value.classList.add("q-splitter--active");return}if(p.isFinal===!0){M!==e.modelValue&&s("update:modelValue",M),a.value.classList.remove("q-splitter--active");return}const T=Q+D*(p.direction===g?-1:1)*p.distance[e.horizontal===!0?"y":"x"];M=Math.min(S,v.value[1],Math.max(v.value[0],T)),u[R.value].value.style[B.value]=m(M),e.emitImmediately===!0&&e.modelValue!==M&&s("update:modelValue",M)}const f=b(()=>[[Ft,z,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function y(p,T){p<T[0]?s("update:modelValue",T[0]):p>T[1]&&s("update:modelValue",T[1])}return K(()=>e.modelValue,p=>{y(p,v.value)}),K(()=>e.limits,()=>{Ze(()=>{y(e.modelValue,v.value)})}),()=>{const p=[q("div",{ref:u.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:n.value.before},G(r.before)),q("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[Je("div",{class:"q-splitter__separator-area absolute-full"},G(r.separator),"sep",e.disable!==!0,()=>f.value)]),q("div",{ref:u.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:n.value.after},G(r.after))];return q("div",{class:w.value,ref:a},Ye(r.default,p))}}}),ia=J({name:"QTabPanel",props:Gt,setup(e,{slots:r}){return()=>q("div",{class:"q-tab-panel",role:"tabpanel"},G(r.default))}}),ua=J({name:"QToggle",props:{...Qt,icon:String,iconColor:String},emits:Mt,setup(e){function r(s,i){const l=b(()=>(s.value===!0?e.checkedIcon:i.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),a=b(()=>s.value===!0?e.iconColor:null);return()=>[q("div",{class:"q-toggle__track"}),q("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},l.value!==void 0?[q(ne,{name:l.value,color:a.value})]:void 0)]}return $t("toggle",r)}});const sa=It("div",{style:{width:"16vw"}},null,-1),_a=Vt({__name:"DecisionMatrixComponent",setup(e){var B,R;const r=Dt(),s=Et(),i=V((B=r.alternatives[0])==null?void 0:B.name),l=V((R=s.features[0])==null?void 0:R.name),a=V(20),u=V(!1);function w(){r.alternatives.forEach(v=>r.assessAllFeaturesOfAlternative(v)),r.alternatives.sort((v,m)=>v.score>m.score?-1:v.score<m.score?1:0),r.isAssessed=!0}return(v,m)=>(X(),te(Oe,{style:{width:"80vw"},flat:"",class:"bg-grey-3"},{default:P(()=>[_(se,null,{default:P(()=>[_(Xe,{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=n=>i.value=n),class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:P(()=>[sa,(X(!0),Me($e,null,De(N(r).alternatives,n=>(X(),te(He,{key:n.id,name:n.name,label:n.name},{default:P(()=>[_(Le,null,{default:P(()=>[ue(ye(n.score),1)]),_:2},1024)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"]),_(_e),_(Ge,{modelValue:i.value,"onUpdate:modelValue":m[6]||(m[6]=n=>i.value=n)},{default:P(()=>[_(ia,{name:i.value,class:"q-pa-none"},{default:P(()=>[_(oa,{modelValue:a.value,"onUpdate:modelValue":m[5]||(m[5]=n=>a.value=n)},{before:P(()=>[_(Xe,{modelValue:l.value,"onUpdate:modelValue":m[1]||(m[1]=n=>l.value=n),vertical:"",class:"text-teal"},{default:P(()=>[(X(!0),Me($e,null,De(N(r).getAlternativeByName(i.value).assessments,n=>(X(),te(He,{key:n.id,name:n.feature.name,icon:"checklist",label:n.feature.name,class:Bt(["content-stretch",n.feature.isExclusive?"text-warning":"text-secondary"])},{default:P(()=>[_(Le,{color:"secondary"},{default:P(()=>[_(We,{color:"white",modelValue:n.feature.status,"onUpdate:modelValue":g=>n.feature.status=g,max:"4",readonly:!u.value},null,8,["modelValue","onUpdate:modelValue","readonly"])]),_:2},1024)]),_:2},1032,["name","label","class"]))),128))]),_:1},8,["modelValue"])]),after:P(()=>[_(Ge,{modelValue:l.value,"onUpdate:modelValue":m[2]||(m[2]=n=>l.value=n),animated:"","transition-prev":"slide-down","transition-next":"slide-up"},null,8,["modelValue"]),_(Oe,{flat:"",class:"text-black q-mt-md",align:"justify"},{default:P(()=>[_(Nt,null,{default:P(()=>[_(ze,{class:"col-7"},{default:P(()=>[_(Ue,null,{default:P(()=>{var n;return[ue(ye((n=N(s).getFeatureByName(l.value))==null?void 0:n.name),1)]}),_:1}),_(Ue,{caption:""},{default:P(()=>{var n;return[ue(ye((n=N(s).getFeatureByName(l.value))==null?void 0:n.description),1)]}),_:1})]),_:1}),_(ze,null,{default:P(()=>[N(r).getAlternativeByName(i.value).assessments.find(n=>n.feature.name===l.value)!=null?(X(),te(We,{key:0,modelValue:N(r).getAlternativeByName(i.value).assessments.filter(n=>n.feature.name===l.value)[0].score,"onUpdate:modelValue":m[3]||(m[3]=n=>N(r).getAlternativeByName(i.value).assessments.filter(g=>g.feature.name===l.value)[0].score=n),color:"secondary",size:"lg"},null,8,["modelValue"])):Ee("",!0)]),_:1})]),_:1}),_(_e),_(se,{horizontal:""},{default:P(()=>[_(se,{class:"col-7"},{default:P(()=>[N(r).getAlternativeByName(i.value).assessments.find(n=>n.feature.name===l.value)!=null?(X(),te(Ut,{key:0,type:"textarea",autogrow:"",modelValue:N(r).getAlternativeByName(i.value).assessments.filter(n=>n.feature.name===l.value)[0].justification,"onUpdate:modelValue":m[4]||(m[4]=n=>N(r).getAlternativeByName(i.value).assessments.filter(g=>g.feature.name===l.value)[0].justification=n)},null,8,["modelValue"])):Ee("",!0)]),_:1}),_(_e,{vertical:""}),_(se,{class:"col-4"},{default:P(()=>[ue(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["name"])]),_:1},8,["modelValue"])]),_:1}),_(Wt,{align:"left"},{default:P(()=>[_(ua,{icon:"settings",modelValue:u.value,"onUpdate:modelValue":m[7]||(m[7]=n=>u.value=n)},null,8,["modelValue"]),_(Ot),_(Re,{class:"q-ma-md",label:"show results",color:"secondary",to:"results"}),_(Re,{class:"q-ma-md",label:"Assess Alternatives",onClick:w,color:"primary"})]),_:1})]),_:1}))}});export{_a as _,Xt as a,Yt as b,Jt as c,Zt as d,Gt as u};

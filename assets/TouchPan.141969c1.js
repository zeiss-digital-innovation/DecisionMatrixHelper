import{r as R,x as S,a as E,o as O,n as k,m as D,h as B,g as X,b as L,q as m,a1 as Y,N as h,a2 as y,t as T,s as b,Q as w,O as g,p as A}from"./index.97ae05ef.js";import{c as F,g as j}from"./QBtn.cd4d6a81.js";import{t as N}from"./alternative.4e95abac.js";function H(){const n=R(!S.value);return n.value===!1&&E(()=>{n.value=!0}),n}const x=typeof ResizeObserver!="undefined",M=x===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var K=F({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(n,{emit:r}){let o=null,a,e={width:-1,height:-1};function t(u){u===!0||n.debounce===0||n.debounce==="0"?s():o===null&&(o=setTimeout(s,n.debounce))}function s(){if(clearTimeout(o),o=null,a){const{offsetWidth:u,offsetHeight:i}=a;(u!==e.width||i!==e.height)&&(e={width:u,height:i},r("resize",e))}}const{proxy:l}=X();if(x===!0){let u;const i=d=>{a=l.$el.parentNode,a?(u=new ResizeObserver(t),u.observe(a),s()):d!==!0&&D(()=>{i(!0)})};return E(()=>{i()}),O(()=>{clearTimeout(o),u!==void 0&&(u.disconnect!==void 0?u.disconnect():a&&u.unobserve(a))}),k}else{let d=function(){clearTimeout(o),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",t,L.passive),i=void 0)},c=function(){d(),a&&a.contentDocument&&(i=a.contentDocument.defaultView,i.addEventListener("resize",t,L.passive),s())};const u=H();let i;return E(()=>{D(()=>{a=l.$el,a&&c()})}),O(d),l.trigger=t,()=>{if(u.value===!0)return B("object",{style:M.style,tabindex:-1,type:"text/html",data:M.url,"aria-hidden":"true",onLoad:c})}}}});const z={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Q=Object.keys(z);z.all=!0;function P(n){const r={};for(const o of Q)n[o]===!0&&(r[o]=!0);return Object.keys(r).length===0?z:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}function _(n,r){return r.event===void 0&&n.target!==void 0&&n.target.draggable!==!0&&typeof r.handler=="function"&&n.target.nodeName.toUpperCase()!=="INPUT"&&(n.qClonedBy===void 0||n.qClonedBy.indexOf(r.uid)===-1)}function C(n,r,o){const a=w(n);let e,t=a.left-r.event.x,s=a.top-r.event.y,l=Math.abs(t),u=Math.abs(s);const i=r.direction;i.horizontal===!0&&i.vertical!==!0?e=t<0?"left":"right":i.horizontal!==!0&&i.vertical===!0?e=s<0?"up":"down":i.up===!0&&s<0?(e="up",l>u&&(i.left===!0&&t<0?e="left":i.right===!0&&t>0&&(e="right"))):i.down===!0&&s>0?(e="down",l>u&&(i.left===!0&&t<0?e="left":i.right===!0&&t>0&&(e="right"))):i.left===!0&&t<0?(e="left",l<u&&(i.up===!0&&s<0?e="up":i.down===!0&&s>0&&(e="down"))):i.right===!0&&t>0&&(e="right",l<u&&(i.up===!0&&s<0?e="up":i.down===!0&&s>0&&(e="down")));let d=!1;if(e===void 0&&o===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,d=!0,e==="left"||e==="right"?(a.left-=t,l=0,t=0):(a.top-=s,u=0,s=0)}return{synthetic:d,payload:{evt:n,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:a,direction:e,isFirst:r.event.isFirst,isFinal:o===!0,duration:Date.now()-r.event.time,distance:{x:l,y:u},offset:{x:t,y:s},delta:{x:a.left-r.event.lastX,y:a.top-r.event.lastY}}}}let U=0;var W=j({name:"touch-pan",beforeMount(n,{value:r,modifiers:o}){if(o.mouse!==!0&&m.has.touch!==!0)return;function a(t,s){o.mouse===!0&&s===!0?A(t):(o.stop===!0&&b(t),o.prevent===!0&&T(t))}const e={uid:"qvtp_"+U++,handler:r,modifiers:o,direction:P(o),noop:k,mouseStart(t){_(t,e)&&Y(t)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(_(t,e)){const s=t.target;h(e,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,s){if(m.is.firefox===!0&&y(n,!0),e.lastEvt=t,s===!0||o.stop===!0){if(e.direction.all!==!0&&(s!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const i=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&T(i),t.cancelBubble===!0&&b(i),Object.assign(i,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:i}}b(t)}const{left:l,top:u}=w(t);e.event={x:l,y:u,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:u}},move(t){if(e.event===void 0)return;const s=w(t),l=s.left-e.event.x,u=s.top-e.event.y;if(l===0&&u===0)return;e.lastEvt=t;const i=e.event.mouse===!0,d=()=>{a(t,i);let f;o.preserveCursor!==!0&&o.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),i===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),N(),e.styleCleanup=p=>{if(e.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),i===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{q(),p()},50):q()}else p!==void 0&&p()}};if(e.event.detected===!0){e.event.isFirst!==!0&&a(t,e.event.mouse);const{payload:f,synthetic:p}=C(t,e,!1);f!==void 0&&(e.handler(f)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&d(),e.event.lastX=f.position.left,e.event.lastY=f.position.top,e.event.lastDir=p===!0?void 0:f.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||i===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){d(),e.event.detected=!0,e.move(t);return}const c=Math.abs(l),v=Math.abs(u);c!==v&&(e.direction.horizontal===!0&&c>v||e.direction.vertical===!0&&c<v||e.direction.up===!0&&c<v&&u<0||e.direction.down===!0&&c<v&&u>0||e.direction.left===!0&&c>v&&l<0||e.direction.right===!0&&c>v&&l>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,s){if(e.event!==void 0){if(g(e,"temp"),m.is.firefox===!0&&y(n,!1),s===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(C(t===void 0?e.lastEvt:t,e).payload);const{payload:l}=C(t===void 0?e.lastEvt:t,e,!0),u=()=>{e.handler(l)};e.styleCleanup!==void 0?e.styleCleanup(u):u()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(n.__qtouchpan=e,o.mouse===!0){const t=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";h(e,"main",[[n,"mousedown","mouseStart",`passive${t}`]])}m.has.touch===!0&&h(e,"main",[[n,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[n,"touchmove","noop","notPassiveCapture"]])},updated(n,r){const o=n.__qtouchpan;o!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&o.end(),o.handler=r.value),o.direction=P(r.modifiers))},beforeUnmount(n){const r=n.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),g(r,"main"),g(r,"temp"),m.is.firefox===!0&&y(n,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete n.__qtouchpan)}});export{K as Q,W as T,P as g,_ as s};

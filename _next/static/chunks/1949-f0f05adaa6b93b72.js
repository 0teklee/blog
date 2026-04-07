"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1949],{5379:(e,t,n)=>{n.d(t,{D:()=>c,N:()=>u});var r=n(12115),i=(e,t,n,r,i,o,a,s)=>{let l=document.documentElement,c=["light","dark"];function u(t){var n;(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&o?i.map(e=>o[e]||e):i;n?(l.classList.remove(...r),l.classList.add(o&&o[t]?o[t]:t)):l.setAttribute(e,t)}),n=t,s&&c.includes(n)&&(l.style.colorScheme=n)}if(r)u(r);else try{let e=localStorage.getItem(t)||n,r=a&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;u(r)}catch(e){}},o=["light","dark"],a="(prefers-color-scheme: dark)",s=r.createContext(void 0),l={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(s))?e:l},u=e=>r.useContext(s)?r.createElement(r.Fragment,null,e.children):r.createElement(f,{...e}),d=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:i=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:u=d,defaultTheme:f=i?"system":"light",attribute:b="data-theme",value:y,children:g,nonce:w,scriptProps:E}=e,[S,x]=r.useState(()=>p(c,f)),[A,O]=r.useState(()=>"system"===S?v():S),L=y?Object.values(y):u,P=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=v());let r=y?y[t]:t,a=n?h(w):null,s=document.documentElement,c=e=>{"class"===e?(s.classList.remove(...L),r&&s.classList.add(r)):e.startsWith("data-")&&(r?s.setAttribute(e,r):s.removeAttribute(e))};if(Array.isArray(b)?b.forEach(c):c(b),l){let e=o.includes(f)?f:null,n=o.includes(t)?t:e;s.style.colorScheme=n}null==a||a()},[w]),M=r.useCallback(e=>{let t="function"==typeof e?e(S):e;x(t);try{localStorage.setItem(c,t)}catch(e){}},[S]),_=r.useCallback(e=>{O(v(e)),"system"===S&&i&&!t&&P("system")},[S,t]);r.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),r.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?x(e.newValue):M(f))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),r.useEffect(()=>{P(null!=t?t:S)},[t,S]);let C=r.useMemo(()=>({theme:S,setTheme:M,forcedTheme:t,resolvedTheme:"system"===S?A:S,themes:i?[...u,"system"]:u,systemTheme:i?A:void 0}),[S,M,t,A,i,u]);return r.createElement(s.Provider,{value:C},r.createElement(m,{forcedTheme:t,storageKey:c,attribute:b,enableSystem:i,enableColorScheme:l,defaultTheme:f,value:y,themes:u,nonce:w,scriptProps:E}),g)},m=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:o,enableSystem:a,enableColorScheme:s,defaultTheme:l,value:c,themes:u,nonce:d,scriptProps:f}=e,m=JSON.stringify([o,n,l,t,u,c,a,s]).slice(1,-1);return r.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"",dangerouslySetInnerHTML:{__html:"(".concat(i.toString(),")(").concat(m,")")}})}),p=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},h=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},8828:(e,t,n)=>{e.exports=n(83654)},14806:(e,t,n)=>{e.exports=n(30125)},16750:(e,t,n)=>{n.d(t,{N:()=>v});var r=n(88945),i=n(40264),o=n(12115),a=n(87548),s=Object.defineProperty;class l{constructor(){((e,t,n)=>((e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!=typeof t?t+"":t,n))(this,"_listeners")}addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let n=this._listeners;void 0===n[e]&&(n[e]=[]),-1===n[e].indexOf(t)&&n[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let n=this._listeners;return void 0!==n[e]&&-1!==n[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let n=this._listeners[e];if(void 0!==n){let e=n.indexOf(t);-1!==e&&n.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}}var c=Object.defineProperty,u=(e,t,n)=>(((e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!=typeof t?t+"":t,n),n);let d=new a.Ray,f=new a.Plane,m=Math.cos(Math.PI/180*70),p=(e,t)=>(e%t+t)%t;class h extends l{constructor(e,t){super(),u(this,"object"),u(this,"domElement"),u(this,"enabled",!0),u(this,"target",new a.Vector3),u(this,"minDistance",0),u(this,"maxDistance",1/0),u(this,"minZoom",0),u(this,"maxZoom",1/0),u(this,"minPolarAngle",0),u(this,"maxPolarAngle",Math.PI),u(this,"minAzimuthAngle",-1/0),u(this,"maxAzimuthAngle",1/0),u(this,"enableDamping",!1),u(this,"dampingFactor",.05),u(this,"enableZoom",!0),u(this,"zoomSpeed",1),u(this,"enableRotate",!0),u(this,"rotateSpeed",1),u(this,"enablePan",!0),u(this,"panSpeed",1),u(this,"screenSpacePanning",!0),u(this,"keyPanSpeed",7),u(this,"zoomToCursor",!1),u(this,"autoRotate",!1),u(this,"autoRotateSpeed",2),u(this,"reverseOrbit",!1),u(this,"reverseHorizontalOrbit",!1),u(this,"reverseVerticalOrbit",!1),u(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),u(this,"mouseButtons",{LEFT:a.MOUSE.ROTATE,MIDDLE:a.MOUSE.DOLLY,RIGHT:a.MOUSE.PAN}),u(this,"touches",{ONE:a.TOUCH.ROTATE,TWO:a.TOUCH.DOLLY_PAN}),u(this,"target0"),u(this,"position0"),u(this,"zoom0"),u(this,"_domElementKeyEvents",null),u(this,"getPolarAngle"),u(this,"getAzimuthalAngle"),u(this,"setPolarAngle"),u(this,"setAzimuthalAngle"),u(this,"getDistance"),u(this,"getZoomScale"),u(this,"listenToKeyEvents"),u(this,"stopListenToKeyEvents"),u(this,"saveState"),u(this,"reset"),u(this,"update"),u(this,"connect"),u(this,"dispose"),u(this,"dollyIn"),u(this,"dollyOut"),u(this,"getScale"),u(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>h.phi,this.getAzimuthalAngle=()=>h.theta,this.setPolarAngle=e=>{let t=p(e,2*Math.PI),r=h.phi;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),v.phi=t-r,n.update()},this.setAzimuthalAngle=e=>{let t=p(e,2*Math.PI),r=h.theta;r<0&&(r+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-r);2*Math.PI-i<i&&(t<r?t+=2*Math.PI:r+=2*Math.PI),v.theta=t-r,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(r),n.update(),l=s.NONE},this.update=(()=>{let t=new a.Vector3,i=new a.Vector3(0,1,0),o=new a.Quaternion().setFromUnitVectors(e.up,i),u=o.clone().invert(),p=new a.Vector3,g=new a.Quaternion,w=2*Math.PI;return function(){let E=n.object.position;o.setFromUnitVectors(e.up,i),u.copy(o).invert(),t.copy(E).sub(n.target),t.applyQuaternion(o),h.setFromVector3(t),n.autoRotate&&l===s.NONE&&I(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(h.theta+=v.theta*n.dampingFactor,h.phi+=v.phi*n.dampingFactor):(h.theta+=v.theta,h.phi+=v.phi);let S=n.minAzimuthAngle,x=n.maxAzimuthAngle;isFinite(S)&&isFinite(x)&&(S<-Math.PI?S+=w:S>Math.PI&&(S-=w),x<-Math.PI?x+=w:x>Math.PI&&(x-=w),S<=x?h.theta=Math.max(S,Math.min(x,h.theta)):h.theta=h.theta>(S+x)/2?Math.max(S,h.theta):Math.min(x,h.theta)),h.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,h.phi)),h.makeSafe(),!0===n.enableDamping?n.target.addScaledVector(y,n.dampingFactor):n.target.add(y),n.zoomToCursor&&C||n.object.isOrthographicCamera?h.radius=V(h.radius):h.radius=V(h.radius*b),t.setFromSpherical(h),t.applyQuaternion(u),E.copy(n.target).add(t),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),!0===n.enableDamping?(v.theta*=1-n.dampingFactor,v.phi*=1-n.dampingFactor,y.multiplyScalar(1-n.dampingFactor)):(v.set(0,0,0),y.set(0,0,0));let A=!1;if(n.zoomToCursor&&C){let r=null;if(n.object instanceof a.PerspectiveCamera&&n.object.isPerspectiveCamera){let e=t.length();r=V(e*b);let i=e-r;n.object.position.addScaledVector(M,i),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let e=new a.Vector3(_.x,_.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),n.object.updateProjectionMatrix(),A=!0;let i=new a.Vector3(_.x,_.y,0);i.unproject(n.object),n.object.position.sub(i).add(e),n.object.updateMatrixWorld(),r=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;null!==r&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(r).add(n.object.position):(d.origin.copy(n.object.position),d.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(d.direction))<m?e.lookAt(n.target):(f.setFromNormalAndCoplanarPoint(n.object.up,n.target),d.intersectPlane(f,n.target))))}else n.object instanceof a.OrthographicCamera&&n.object.isOrthographicCamera&&(A=1!==b)&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),n.object.updateProjectionMatrix());return b=1,C=!1,!!(A||p.distanceToSquared(n.object.position)>c||8*(1-g.dot(n.object.quaternion))>c)&&(n.dispatchEvent(r),p.copy(n.object.position),g.copy(n.object.quaternion),A=!1,!0)}})(),this.connect=e=>{n.domElement=e,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",et),n.domElement.addEventListener("pointerdown",q),n.domElement.addEventListener("pointercancel",J),n.domElement.addEventListener("wheel",Q)},this.dispose=()=>{var e,t,r,i,o,a;n.domElement&&(n.domElement.style.touchAction="auto"),null==(e=n.domElement)||e.removeEventListener("contextmenu",et),null==(t=n.domElement)||t.removeEventListener("pointerdown",q),null==(r=n.domElement)||r.removeEventListener("pointercancel",J),null==(i=n.domElement)||i.removeEventListener("wheel",Q),null==(o=n.domElement)||o.ownerDocument.removeEventListener("pointermove",$),null==(a=n.domElement)||a.ownerDocument.removeEventListener("pointerup",J),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",ee)};let n=this,r={type:"change"},i={type:"start"},o={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},l=s.NONE,c=1e-6,h=new a.Spherical,v=new a.Spherical,b=1,y=new a.Vector3,g=new a.Vector2,w=new a.Vector2,E=new a.Vector2,S=new a.Vector2,x=new a.Vector2,A=new a.Vector2,O=new a.Vector2,L=new a.Vector2,P=new a.Vector2,M=new a.Vector3,_=new a.Vector2,C=!1,T=[],j={};function z(){return Math.pow(.95,n.zoomSpeed)}function I(e){n.reverseOrbit||n.reverseHorizontalOrbit?v.theta+=e:v.theta-=e}function R(e){n.reverseOrbit||n.reverseVerticalOrbit?v.phi+=e:v.phi-=e}let U=(()=>{let e=new a.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),y.add(e)}})(),k=(()=>{let e=new a.Vector3;return function(t,r){!0===n.screenSpacePanning?e.setFromMatrixColumn(r,1):(e.setFromMatrixColumn(r,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),y.add(e)}})(),D=(()=>{let e=new a.Vector3;return function(t,r){let i=n.domElement;if(i&&n.object instanceof a.PerspectiveCamera&&n.object.isPerspectiveCamera){let o=n.object.position;e.copy(o).sub(n.target);let a=e.length();U(2*t*(a*=Math.tan(n.object.fov/2*Math.PI/180))/i.clientHeight,n.object.matrix),k(2*r*a/i.clientHeight,n.object.matrix)}else i&&n.object instanceof a.OrthographicCamera&&n.object.isOrthographicCamera?(U(t*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),k(r*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function N(e){n.object instanceof a.PerspectiveCamera&&n.object.isPerspectiveCamera||n.object instanceof a.OrthographicCamera&&n.object.isOrthographicCamera?b=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(e){if(!n.zoomToCursor||!n.domElement)return;C=!0;let t=n.domElement.getBoundingClientRect(),r=e.clientX-t.left,i=e.clientY-t.top,o=t.width,a=t.height;_.x=r/o*2-1,_.y=-(i/a*2)+1,M.set(_.x,_.y,1).unproject(n.object).sub(n.object.position).normalize()}function V(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function H(e){g.set(e.clientX,e.clientY)}function F(e){S.set(e.clientX,e.clientY)}function Y(){if(1==T.length)g.set(T[0].pageX,T[0].pageY);else{let e=.5*(T[0].pageX+T[1].pageX),t=.5*(T[0].pageY+T[1].pageY);g.set(e,t)}}function W(){if(1==T.length)S.set(T[0].pageX,T[0].pageY);else{let e=.5*(T[0].pageX+T[1].pageX),t=.5*(T[0].pageY+T[1].pageY);S.set(e,t)}}function G(){let e=T[0].pageX-T[1].pageX,t=T[0].pageY-T[1].pageY,n=Math.sqrt(e*e+t*t);O.set(0,n)}function X(e){if(1==T.length)w.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);w.set(n,r)}E.subVectors(w,g).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(I(2*Math.PI*E.x/t.clientHeight),R(2*Math.PI*E.y/t.clientHeight)),g.copy(w)}function Z(e){if(1==T.length)x.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);x.set(n,r)}A.subVectors(x,S).multiplyScalar(n.panSpeed),D(A.x,A.y),S.copy(x)}function K(e){var t;let r=er(e),i=e.pageX-r.x,o=e.pageY-r.y,a=Math.sqrt(i*i+o*o);L.set(0,a),P.set(0,Math.pow(L.y/O.y,n.zoomSpeed)),t=P.y,N(b/t),O.copy(L)}function q(e){var t,r,o;!1!==n.enabled&&(0===T.length&&(null==(t=n.domElement)||t.ownerDocument.addEventListener("pointermove",$),null==(r=n.domElement)||r.ownerDocument.addEventListener("pointerup",J)),o=e,T.push(o),"touch"===e.pointerType?function(e){switch(en(e),T.length){case 1:switch(n.touches.ONE){case a.TOUCH.ROTATE:if(!1===n.enableRotate)return;Y(),l=s.TOUCH_ROTATE;break;case a.TOUCH.PAN:if(!1===n.enablePan)return;W(),l=s.TOUCH_PAN;break;default:l=s.NONE}break;case 2:switch(n.touches.TWO){case a.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&G(),n.enablePan&&W(),l=s.TOUCH_DOLLY_PAN;break;case a.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&G(),n.enableRotate&&Y(),l=s.TOUCH_DOLLY_ROTATE;break;default:l=s.NONE}break;default:l=s.NONE}l!==s.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case a.MOUSE.DOLLY:if(!1===n.enableZoom)return;B(e),O.set(e.clientX,e.clientY),l=s.DOLLY;break;case a.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;F(e),l=s.PAN}else{if(!1===n.enableRotate)return;H(e),l=s.ROTATE}break;case a.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;H(e),l=s.ROTATE}else{if(!1===n.enablePan)return;F(e),l=s.PAN}break;default:l=s.NONE}l!==s.NONE&&n.dispatchEvent(i)}(e))}function $(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(en(e),l){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;X(e),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;Z(e),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&K(e),n.enablePan&&Z(e),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&K(e),n.enableRotate&&X(e),n.update();break;default:l=s.NONE}}(e):function(e){if(!1!==n.enabled)switch(l){case s.ROTATE:if(!1===n.enableRotate)return;w.set(e.clientX,e.clientY),E.subVectors(w,g).multiplyScalar(n.rotateSpeed);let t=n.domElement;t&&(I(2*Math.PI*E.x/t.clientHeight),R(2*Math.PI*E.y/t.clientHeight)),g.copy(w),n.update();break;case s.DOLLY:var r,i;if(!1===n.enableZoom)return;(L.set(e.clientX,e.clientY),P.subVectors(L,O),P.y>0)?(r=z(),N(b/r)):P.y<0&&(i=z(),N(b*i)),O.copy(L),n.update();break;case s.PAN:if(!1===n.enablePan)return;x.set(e.clientX,e.clientY),A.subVectors(x,S).multiplyScalar(n.panSpeed),D(A.x,A.y),S.copy(x),n.update()}}(e))}function J(e){var t,r,i;(function(e){delete j[e.pointerId];for(let t=0;t<T.length;t++)if(T[t].pointerId==e.pointerId)return void T.splice(t,1)})(e),0===T.length&&(null==(t=n.domElement)||t.releasePointerCapture(e.pointerId),null==(r=n.domElement)||r.ownerDocument.removeEventListener("pointermove",$),null==(i=n.domElement)||i.ownerDocument.removeEventListener("pointerup",J)),n.dispatchEvent(o),l=s.NONE}function Q(e){if(!1!==n.enabled&&!1!==n.enableZoom&&(l===s.NONE||l===s.ROTATE)){var t,r;e.preventDefault(),n.dispatchEvent(i),(B(e),e.deltaY<0)?(t=z(),N(b*t)):e.deltaY>0&&(r=z(),N(b/r)),n.update(),n.dispatchEvent(o)}}function ee(e){if(!1!==n.enabled&&!1!==n.enablePan){let t=!1;switch(e.code){case n.keys.UP:D(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:D(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:D(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:D(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}}function et(e){!1!==n.enabled&&e.preventDefault()}function en(e){let t=j[e.pointerId];void 0===t&&(t=new a.Vector2,j[e.pointerId]=t),t.set(e.pageX,e.pageY)}function er(e){return j[(e.pointerId===T[0].pointerId?T[1]:T[0]).pointerId]}this.dollyIn=(e=z())=>{N(b*e),n.update()},this.dollyOut=(e=z())=>{N(b/e),n.update()},this.getScale=()=>b,this.setScale=e=>{N(e),n.update()},this.getZoomScale=()=>z(),void 0!==t&&this.connect(t),this.update()}}let v=o.forwardRef(({makeDefault:e,camera:t,regress:n,domElement:a,enableDamping:s=!0,keyEvents:l=!1,onChange:c,onStart:u,onEnd:d,...f},m)=>{let p=(0,i.C)(e=>e.invalidate),v=(0,i.C)(e=>e.camera),b=(0,i.C)(e=>e.gl),y=(0,i.C)(e=>e.events),g=(0,i.C)(e=>e.setEvents),w=(0,i.C)(e=>e.set),E=(0,i.C)(e=>e.get),S=(0,i.C)(e=>e.performance),x=t||v,A=a||y.connected||b.domElement,O=o.useMemo(()=>new h(x),[x]);return(0,i.D)(()=>{O.enabled&&O.update()},-1),o.useEffect(()=>(l&&O.connect(!0===l?A:l),O.connect(A),()=>void O.dispose()),[l,A,n,O,p]),o.useEffect(()=>{let e=e=>{p(),n&&S.regress(),c&&c(e)},t=e=>{u&&u(e)},r=e=>{d&&d(e)};return O.addEventListener("change",e),O.addEventListener("start",t),O.addEventListener("end",r),()=>{O.removeEventListener("start",t),O.removeEventListener("end",r),O.removeEventListener("change",e)}},[c,u,d,O,p,g]),o.useEffect(()=>{if(e){let e=E().controls;return w({controls:O}),()=>w({controls:e})}},[e,O]),o.createElement("primitive",(0,r.A)({ref:m,object:O,enableDamping:s},f))})},20063:(e,t,n)=>{var r=n(47260);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},23689:(e,t,n)=>{n.d(t,{DY:()=>a,IU:()=>l,uv:()=>s});let r=[];function i(e,t,n=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let r=e.length;if(t.length!==r)return!1;for(let i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}function o(e,t=null,n=!1,a={}){for(let o of(null===t&&(t=[e]),r))if(i(t,o.keys,o.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(o,"error"))throw o.error;if(Object.prototype.hasOwnProperty.call(o,"response"))return a.lifespan&&a.lifespan>0&&(o.timeout&&clearTimeout(o.timeout),o.timeout=setTimeout(o.remove,a.lifespan)),o.response;if(!n)throw o.promise}let s={keys:t,equal:a.equal,remove:()=>{let e=r.indexOf(s);-1!==e&&r.splice(e,1)},promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{s.response=e,a.lifespan&&a.lifespan>0&&(s.timeout=setTimeout(s.remove,a.lifespan))}).catch(e=>s.error=e)};if(r.push(s),!n)throw s.promise}let a=(e,t,n)=>o(e,t,!1,n),s=(e,t,n)=>void o(e,t,!0,n),l=e=>{if(void 0===e||0===e.length)r.splice(0,r.length);else{let t=r.find(t=>i(e,t.keys,t.equal));t&&t.remove()}}},23718:(e,t,n)=>{n.d(t,{h:()=>l});var r=n(12115),i=n(8828);let o=e=>{let t,n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,o={setState:r,getState:i,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e))},a=t=e(r,i,o);return o},{useSyncExternalStoreWithSelector:a}=i,s=(e,t)=>{let n=(e=>e?o(e):o)(e),i=(e,i=t)=>(function(e,t=e=>e,n){let i=a(e.subscribe,e.getState,e.getInitialState,t,n);return r.useDebugValue(i),i})(n,e,i);return Object.assign(i,n),i},l=(e,t)=>e?s(e,t):s},30125:(e,t,n)=>{var r=n(12115),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,a=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,u=r[1];return s(function(){i.value=n,i.getSnapshot=t,c(i)&&u({inst:i})},[e,n,t]),a(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},30258:(e,t,n)=>{n.d(t,{Hl:()=>d});var r=n(40264),i=n(12115),o=n(87548);function a(e,t){let n;return(...r)=>{window.clearTimeout(n),n=window.setTimeout(()=>e(...r),t)}}let s=["x","y","top","bottom","left","right","width","height"];var l=n(54735),c=n(95155);function u({ref:e,children:t,fallback:n,resize:l,style:u,gl:d,events:f=r.f,eventSource:m,eventPrefix:p,shadows:h,linear:v,flat:b,legacy:y,orthographic:g,frameloop:w,dpr:E,performance:S,raycaster:x,camera:A,scene:O,onPointerMissed:L,onCreated:P,...M}){i.useMemo(()=>(0,r.e)(o),[]);let _=(0,r.u)(),[C,T]=function({debounce:e,scroll:t,polyfill:n,offsetSize:r}={debounce:0,scroll:!1,offsetSize:!1}){var o,l,c;let u=n||("undefined"==typeof window?class{}:window.ResizeObserver);if(!u)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[d,f]=(0,i.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),m=(0,i.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:d,orientationHandler:null}),p=e?"number"==typeof e?e:e.scroll:null,h=e?"number"==typeof e?e:e.resize:null,v=(0,i.useRef)(!1);(0,i.useEffect)(()=>(v.current=!0,()=>void(v.current=!1)));let[b,y,g]=(0,i.useMemo)(()=>{let e=()=>{let e,t;if(!m.current.element)return;let{left:n,top:i,width:o,height:a,bottom:l,right:c,x:u,y:d}=m.current.element.getBoundingClientRect(),p={left:n,top:i,width:o,height:a,bottom:l,right:c,x:u,y:d};m.current.element instanceof HTMLElement&&r&&(p.height=m.current.element.offsetHeight,p.width=m.current.element.offsetWidth),Object.freeze(p),v.current&&(e=m.current.lastBounds,t=p,!s.every(n=>e[n]===t[n]))&&f(m.current.lastBounds=p)};return[e,h?a(e,h):e,p?a(e,p):e]},[f,r,p,h]);function w(){m.current.scrollContainers&&(m.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",g,!0)),m.current.scrollContainers=null),m.current.resizeObserver&&(m.current.resizeObserver.disconnect(),m.current.resizeObserver=null),m.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",m.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",m.current.orientationHandler))}function E(){m.current.element&&(m.current.resizeObserver=new u(g),m.current.resizeObserver.observe(m.current.element),t&&m.current.scrollContainers&&m.current.scrollContainers.forEach(e=>e.addEventListener("scroll",g,{capture:!0,passive:!0})),m.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",m.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",m.current.orientationHandler))}return o=g,l=!!t,(0,i.useEffect)(()=>{if(l)return window.addEventListener("scroll",o,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",o,!0)},[o,l]),c=y,(0,i.useEffect)(()=>(window.addEventListener("resize",c),()=>void window.removeEventListener("resize",c)),[c]),(0,i.useEffect)(()=>{w(),E()},[t,g,y]),(0,i.useEffect)(()=>w,[]),[e=>{e&&e!==m.current.element&&(w(),m.current.element=e,m.current.scrollContainers=function e(t){let n=[];if(!t||t===document.body)return n;let{overflow:r,overflowX:i,overflowY:o}=window.getComputedStyle(t);return[r,i,o].some(e=>"auto"===e||"scroll"===e)&&n.push(t),[...n,...e(t.parentElement)]}(e),E())},d,b]}({scroll:!0,debounce:{scroll:50,resize:0},...l}),j=i.useRef(null),z=i.useRef(null);i.useImperativeHandle(e,()=>j.current);let I=(0,r.a)(L),[R,U]=i.useState(!1),[k,D]=i.useState(!1);if(R)throw R;if(k)throw k;let N=i.useRef(null);(0,r.b)(()=>{let e=j.current;T.width>0&&T.height>0&&e&&(N.current||(N.current=(0,r.c)(e)),async function(){await N.current.configure({gl:d,scene:O,events:f,shadows:h,linear:v,flat:b,legacy:y,orthographic:g,frameloop:w,dpr:E,performance:S,raycaster:x,camera:A,size:T,onPointerMissed:(...e)=>null==I.current?void 0:I.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(m?(0,r.i)(m)?m.current:m:z.current),p&&e.setEvents({compute:(e,t)=>{let n=e[p+"X"],r=e[p+"Y"];t.pointer.set(n/t.size.width*2-1,-(2*(r/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==P||P(e)}}),N.current.render((0,c.jsx)(_,{children:(0,c.jsx)(r.E,{set:D,children:(0,c.jsx)(i.Suspense,{fallback:(0,c.jsx)(r.B,{set:U}),children:null!=t?t:null})})}))}())}),i.useEffect(()=>{let e=j.current;if(e)return()=>(0,r.d)(e)},[]);let B=m?"none":"auto";return(0,c.jsx)("div",{ref:z,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:B,...u},...M,children:(0,c.jsx)("div",{ref:C,style:{width:"100%",height:"100%"},children:(0,c.jsx)("canvas",{ref:j,style:{display:"block"},children:n})})})}function d(e){return(0,c.jsx)(l.Af,{children:(0,c.jsx)(u,{...e})})}n(49914)},38381:(e,t,n)=>{n.d(t,{mK:()=>S,s0:()=>y,kp:()=>x});var r=n(95155),i=n(12115),o=n(87548),a=n(40264),s=n(13303);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}new o.Vector2,new o.Vector2;function c(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}var u=function e(t,n,r){var i=this;c(this,e),l(this,"dot2",function(e,t){return i.x*e+i.y*t}),l(this,"dot3",function(e,t,n){return i.x*e+i.y*t+i.z*n}),this.x=t,this.y=n,this.z=r},d=[new u(1,1,0),new u(-1,1,0),new u(1,-1,0),new u(-1,-1,0),new u(1,0,1),new u(-1,0,1),new u(1,0,-1),new u(-1,0,-1),new u(0,1,1),new u(0,-1,1),new u(0,1,-1),new u(0,-1,-1)],f=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],m=Array(512),p=Array(512);!function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t,n=0;n<256;n++)t=1&n?f[n]^255&e:f[n]^e>>8&255,m[n]=m[n+256]=t,p[n]=p[n+256]=d[t%12]}(0);function h(e){var t=function(e){if("number"==typeof e)e=Math.abs(e);else if("string"==typeof e){var t=e;e=0;for(var n=0;n<t.length;n++)e=(e+(n+1)*(t.charCodeAt(n)%96))%0x7fffffff}return 0===e&&(e=311),e}(e);return function(){var e=48271*t%0x7fffffff;return t=e,e/0x7fffffff}}new function e(t){var n=this;c(this,e),l(this,"seed",0),l(this,"init",function(e){n.seed=e,n.value=h(e)}),l(this,"value",h(this.seed)),this.init(t)}(Math.random());o.BufferGeometry;n(81948);let v=(0,i.createContext)(null),b=e=>(2&e.getAttributes())==2,y=(0,i.memo)((0,i.forwardRef)(({children:e,camera:t,scene:n,resolutionScale:l,enabled:c=!0,renderPriority:u=1,autoClear:d=!0,depthBuffer:f,enableNormalPass:m,stencilBuffer:p,multisampling:h=8,frameBufferType:y=o.HalfFloatType},g)=>{let{gl:w,scene:E,camera:S,size:x}=(0,a.C)(),A=n||E,O=t||S,[L,P,M]=(0,i.useMemo)(()=>{let e=new s.s0(w,{depthBuffer:f,stencilBuffer:p,multisampling:h,frameBufferType:y});e.addPass(new s.AH(A,O));let t=null,n=null;return m&&((n=new s.Xe(A,O)).enabled=!1,e.addPass(n),void 0!==l&&((t=new s.SP({normalBuffer:n.texture,resolutionScale:l})).enabled=!1,e.addPass(t))),[e,n,t]},[O,w,f,p,h,y,A,m,l]);(0,i.useEffect)(()=>L?.setSize(x.width,x.height),[L,x]),(0,a.D)((e,t)=>{if(c){let e=w.autoClear;w.autoClear=d,p&&!d&&w.clearStencil(),L.render(t),w.autoClear=e}},c?u:0);let _=(0,i.useRef)(null);(0,i.useLayoutEffect)(()=>{let e=[],t=_.current.__r3f;if(t&&L){let n=t.children;for(let t=0;t<n.length;t++){let r=n[t].object;if(r instanceof s.Mj){let i=[r];if(!b(r)){let e=null;for(;(e=n[t+1]?.object)instanceof s.Mj&&!b(e);)i.push(e),t++}let o=new s.Vu(O,...i);e.push(o)}else r instanceof s.oF&&e.push(r)}for(let t of e)L?.addPass(t);P&&(P.enabled=!0),M&&(M.enabled=!0)}return()=>{for(let t of e)L?.removePass(t);P&&(P.enabled=!1),M&&(M.enabled=!1)}},[L,e,O,P,M]),(0,i.useEffect)(()=>{let e=w.toneMapping;return w.toneMapping=o.NoToneMapping,()=>{w.toneMapping=e}},[w]);let C=(0,i.useMemo)(()=>({composer:L,normalPass:P,downSamplingPass:M,resolutionScale:l,camera:O,scene:A}),[L,P,M,l,O,A]);return(0,i.useImperativeHandle)(g,()=>L,[L]),(0,r.jsx)(v.Provider,{value:C,children:(0,r.jsx)("group",{ref:_,children:e})})})),g=e=>"object"==typeof e&&null!=e&&"current"in e?e.current:e,w=0,E=new WeakMap;s.Mj;let S=((e,t)=>function({blendFunction:n=t?.blendFunction,opacity:o=t?.opacity,...s}){let l=E.get(e);if(!l){let t=`@react-three/postprocessing/${e.name}-${w++}`;(0,a.e)({[t]:e}),E.set(e,l=t)}let c=(0,a.C)(e=>e.camera),u=i.useMemo(()=>[...t?.args??[],...s.args??[{...t,...s}]],[JSON.stringify(s)]);return(0,r.jsx)(l,{camera:c,"blendMode-blendFunction":n,"blendMode-opacity-value":o,...s,args:u})})(s.bv,{blendFunction:0}),x=(0,i.forwardRef)(function(e,t){let{camera:n}=(0,i.useContext)(v),o=(0,i.useMemo)(()=>new s.lE(n,g(e.sun),e),[n,e]);return(0,i.useLayoutEffect)(()=>void(o.lightSource=g(e.sun)),[o,e.sun]),(0,r.jsx)("primitive",{ref:t,object:o,dispose:null})});s.i,s.hH;var A=(e=>(e[e.Linear=0]="Linear",e[e.Radial=1]="Radial",e[e.MirroredLinear=2]="MirroredLinear",e))(A||{});s.Mj,s.To;s.Mj;s.Mj;s.Mj},49914:(e,t,n)=>{e.exports=n(66451)},54735:(e,t,n)=>{n.d(t,{Af:()=>s,Nz:()=>i,u5:()=>l,y3:()=>d});var r=n(12115);function i(e,t,n){if(!e)return;if(!0===n(e))return e;let r=t?e.return:e.child;for(;r;){let e=i(r,t,n);if(e)return e;r=t?null:r.sibling}}function o(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}(()=>{var e,t;return"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative")})()?r.useLayoutEffect:r.useEffect;let a=o(r.createContext(null));class s extends r.Component{render(){return r.createElement(a.Provider,{value:this._reactInternals},this.props.children)}}function l(){let e=r.useContext(a);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=r.useId();return r.useMemo(()=>{for(let n of[e,null==e?void 0:e.alternate]){if(!n)continue;let e=i(n,!1,e=>{let n=e.memoizedState;for(;n;){if(n.memoizedState===t)return!0;n=n.next}});if(e)return e}},[e,t])}let c=Symbol.for("react.context"),u=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===c;function d(){let e=function(){let e=l(),[t]=r.useState(()=>new Map);t.clear();let n=e;for(;n;){let e=n.type;u(e)&&e!==a&&!t.has(e)&&t.set(e,r.use(o(e))),n=n.return}return t}();return r.useMemo(()=>Array.from(e.keys()).reduce((t,n)=>i=>r.createElement(t,null,r.createElement(n.Provider,{...i,value:e.get(n)})),e=>r.createElement(s,{...e})),[e])}},63617:(e,t,n)=>{n.d(t,{o:()=>i});var r=n(87548);class i{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}new r.OrthographicCamera(-1,1,1,-1,0,1);class o extends r.BufferGeometry{constructor(){super(),this.setAttribute("position",new r.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new r.Float32BufferAttribute([0,2,0,0,2,0],2))}}new o},65229:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(71847).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},66451:(e,t)=>{function n(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,i=e[r];if(0<o(i,t))e[r]=t,e[n]=i,n=r;else break}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else if(c<i&&0>o(u,n))e[r]=u,e[c]=n,r=c;else break}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var a,s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var u=[],d=[],f=1,m=null,p=3,h=!1,v=!1,b=!1,y=!1,g="function"==typeof setTimeout?setTimeout:null,w="function"==typeof clearTimeout?clearTimeout:null,E="undefined"!=typeof setImmediate?setImmediate:null;function S(e){for(var t=r(d);null!==t;){if(null===t.callback)i(d);else if(t.startTime<=e)i(d),t.sortIndex=t.expirationTime,n(u,t);else break;t=r(d)}}function x(e){if(b=!1,S(e),!v)if(null!==r(u))v=!0,A||(A=!0,a());else{var t=r(d);null!==t&&j(x,t.startTime-e)}}var A=!1,O=-1,L=5,P=-1;function M(){return!!y||!(t.unstable_now()-P<L)}function _(){if(y=!1,A){var e=t.unstable_now();P=e;var n=!0;try{e:{v=!1,b&&(b=!1,w(O),O=-1),h=!0;var o=p;try{t:{for(S(e),m=r(u);null!==m&&!(m.expirationTime>e&&M());){var s=m.callback;if("function"==typeof s){m.callback=null,p=m.priorityLevel;var l=s(m.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof l){m.callback=l,S(e),n=!0;break t}m===r(u)&&i(u),S(e)}else i(u);m=r(u)}if(null!==m)n=!0;else{var c=r(d);null!==c&&j(x,c.startTime-e),n=!1}}break e}finally{m=null,p=o,h=!1}}}finally{n?a():A=!1}}}if("function"==typeof E)a=function(){E(_)};else if("undefined"!=typeof MessageChannel){var C=new MessageChannel,T=C.port2;C.port1.onmessage=_,a=function(){T.postMessage(null)}}else a=function(){g(_,0)};function j(e,n){O=g(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,o){var s=t.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?s+o:s,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=o+l,e={id:f++,callback:i,priorityLevel:e,startTime:o,expirationTime:l,sortIndex:-1},o>s?(e.sortIndex=o,n(d,e),null===r(u)&&e===r(d)&&(b?(w(O),O=-1):b=!0,j(x,o-s))):(e.sortIndex=l,n(u,e),v||h||(v=!0,A||(A=!0,a()))),e},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},71847:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(12115);let i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:u,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...o,width:a,height:a,stroke:n,strokeWidth:l?24*Number(s)/Number(a):s,className:i("lucide",c),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(u)?u:[u]])}),s=(e,t)=>{let n=(0,r.forwardRef)((n,o)=>{let{className:s,...l}=n;return(0,r.createElement)(a,{ref:o,iconNode:t,className:i("lucide-".concat(e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),s),...l})});return n.displayName="".concat(e),n}},83654:(e,t,n)=>{var r=n(12115),i=n(14806),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,s=r.useRef,l=r.useEffect,c=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var m=a(e,(d=c(function(){function e(e){if(!l){if(l=!0,a=e,e=r(e),void 0!==i&&f.hasValue){var t=f.value;if(i(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var n=r(e);return void 0!==i&&i(t,n)?(a=e,t):(a=e,s=n)}var a,s,l=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,i]))[0],d[1]);return l(function(){f.hasValue=!0,f.value=m},[m]),u(m),m}},85571:(e,t,n)=>{let r,i;n.d(t,{N:()=>j});var o=n(88945),a=n(12115),s=n(87548),l=n(40264);let c=new s.Box3,u=new s.Vector3;class d extends s.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new s.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new s.InterleavedBufferAttribute(n,3,0)),this.setAttribute("instanceEnd",new s.InterleavedBufferAttribute(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new s.InstancedInterleavedBuffer(n,2*t,1);return this.setAttribute("instanceColorStart",new s.InterleavedBufferAttribute(r,t,0)),this.setAttribute("instanceColorEnd",new s.InterleavedBufferAttribute(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),c.setFromBufferAttribute(t),this.boundingBox.union(c))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,o=e.count;i<o;i++)u.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(u)),u.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(u));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}let f=parseInt(s.REVISION.replace(/\D+/g,""));class m extends s.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:s.UniformsUtils.clone(s.UniformsUtils.merge([s.UniformsLib.common,s.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${f>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let p=f>=125?"uv1":"uv2",h=new s.Vector4,v=new s.Vector3,b=new s.Vector3,y=new s.Vector4,g=new s.Vector4,w=new s.Vector4,E=new s.Vector3,S=new s.Matrix4,x=new s.Line3,A=new s.Vector3,O=new s.Box3,L=new s.Sphere,P=new s.Vector4;function M(e,t,n){return P.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),P.multiplyScalar(1/P.w),P.x=i/n.width,P.y=i/n.height,P.applyMatrix4(e.projectionMatrixInverse),P.multiplyScalar(1/P.w),Math.abs(Math.max(P.x,P.y))}class _ extends s.Mesh{constructor(e=new d,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,o=t.count;e<o;e++,i+=2)v.fromBufferAttribute(t,e),b.fromBufferAttribute(n,e),r[i]=0===i?0:r[i-1],r[i+1]=r[i]+v.distanceTo(b);let i=new s.InstancedInterleavedBuffer(r,2,1);return e.setAttribute("instanceDistanceStart",new s.InterleavedBufferAttribute(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.InterleavedBufferAttribute(i,1,1)),this}raycast(e,t){let n,o,a=this.material.worldUnits,l=e.camera;null!==l||a||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let c=void 0!==e.params.Line2&&e.params.Line2.threshold||0;r=e.ray;let u=this.matrixWorld,d=this.geometry,f=this.material;if(i=f.linewidth+c,null===d.boundingSphere&&d.computeBoundingSphere(),L.copy(d.boundingSphere).applyMatrix4(u),a)n=.5*i;else{let e=Math.max(l.near,L.distanceToPoint(r.origin));n=M(l,e,f.resolution)}if(L.radius+=n,!1!==r.intersectsSphere(L)){if(null===d.boundingBox&&d.computeBoundingBox(),O.copy(d.boundingBox).applyMatrix4(u),a)o=.5*i;else{let e=Math.max(l.near,O.distanceToPoint(r.origin));o=M(l,e,f.resolution)}O.expandByScalar(o),!1!==r.intersectsBox(O)&&(a?function(e,t){let n=e.matrixWorld,o=e.geometry,a=o.attributes.instanceStart,l=o.attributes.instanceEnd,c=Math.min(o.instanceCount,a.count);for(let o=0;o<c;o++){x.start.fromBufferAttribute(a,o),x.end.fromBufferAttribute(l,o),x.applyMatrix4(n);let c=new s.Vector3,u=new s.Vector3;r.distanceSqToSegment(x.start,x.end,u,c),u.distanceTo(c)<.5*i&&t.push({point:u,pointOnLine:c,distance:r.origin.distanceTo(u),object:e,face:null,faceIndex:o,uv:null,[p]:null})}}(this,t):function(e,t,n){let o=t.projectionMatrix,a=e.material.resolution,l=e.matrixWorld,c=e.geometry,u=c.attributes.instanceStart,d=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),m=-t.near;r.at(1,w),w.w=1,w.applyMatrix4(t.matrixWorldInverse),w.applyMatrix4(o),w.multiplyScalar(1/w.w),w.x*=a.x/2,w.y*=a.y/2,w.z=0,E.copy(w),S.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<f;t++){if(y.fromBufferAttribute(u,t),g.fromBufferAttribute(d,t),y.w=1,g.w=1,y.applyMatrix4(S),g.applyMatrix4(S),y.z>m&&g.z>m)continue;if(y.z>m){let e=y.z-g.z,t=(y.z-m)/e;y.lerp(g,t)}else if(g.z>m){let e=g.z-y.z,t=(g.z-m)/e;g.lerp(y,t)}y.applyMatrix4(o),g.applyMatrix4(o),y.multiplyScalar(1/y.w),g.multiplyScalar(1/g.w),y.x*=a.x/2,y.y*=a.y/2,g.x*=a.x/2,g.y*=a.y/2,x.start.copy(y),x.start.z=0,x.end.copy(g),x.end.z=0;let c=x.closestPointToPointParameter(E,!0);x.at(c,A);let f=s.MathUtils.lerp(y.z,g.z,c),h=f>=-1&&f<=1,v=E.distanceTo(A)<.5*i;if(h&&v){x.start.fromBufferAttribute(u,t),x.end.fromBufferAttribute(d,t),x.start.applyMatrix4(l),x.end.applyMatrix4(l);let i=new s.Vector3,o=new s.Vector3;r.distanceSqToSegment(x.start,x.end,o,i),n.push({point:o,pointOnLine:i,distance:r.origin.distanceTo(o),object:e,face:null,faceIndex:t,uv:null,[p]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(h),this.material.uniforms.resolution.value.set(h.z,h.w))}}class C extends d{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(3===t)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class T extends _{constructor(e=new C,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let j=a.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:r,lineWidth:i,segments:c,dashed:u,...f},p){var h,v;let b=(0,l.C)(e=>e.size),y=a.useMemo(()=>c?new _:new T,[c]),[g]=a.useState(()=>new m),w=(null==n||null==(h=n[0])?void 0:h.length)===4?4:3,E=a.useMemo(()=>{let r=c?new d:new C,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Vector3||e instanceof s.Vector4?[e.x,e.y,e.z]:e instanceof s.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof s.Color?e.toArray():e);r.setColors(e.flat(),w)}return r},[e,c,n,w]);return a.useLayoutEffect(()=>{y.computeLineDistances()},[e,y]),a.useLayoutEffect(()=>{u?g.defines.USE_DASH="":delete g.defines.USE_DASH,g.needsUpdate=!0},[u,g]),a.useEffect(()=>()=>{E.dispose(),g.dispose()},[E]),a.createElement("primitive",(0,o.A)({object:y,ref:p},f),a.createElement("primitive",{object:E,attach:"geometry"}),a.createElement("primitive",(0,o.A)({object:g,attach:"material",color:t,vertexColors:!!n,resolution:[b.width,b.height],linewidth:null!=(v=null!=r?r:i)?v:1,dashed:u,transparent:4===w},f)))})},88945:(e,t,n)=>{n.d(t,{A:()=>r});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}},97003:(e,t,n)=>{n.d(t,{s:()=>m});var r=n(88945),i=n(12115),o=n(87548),a=n(40264);let s=parseInt(o.REVISION.replace(/\D+/g,""));class l extends o.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${s>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}}let c=e=>e&&e.constructor===Float32Array,u=e=>e instanceof o.Vector2||e instanceof o.Vector3||e instanceof o.Vector4,d=e=>Array.isArray(e)?e:u(e)?e.toArray():[e,e,e];function f(e,t,n){return i.useMemo(()=>{if(void 0!==t)if(c(t))return t;else{if(t instanceof o.Color){let n=Array.from({length:3*e},()=>[t.r,t.g,t.b]).flat();return Float32Array.from(n)}if(u(t)||Array.isArray(t)){let n=Array.from({length:3*e},()=>d(t)).flat();return Float32Array.from(n)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},n)},[t])}let m=i.forwardRef(({noise:e=1,count:t=100,speed:n=1,opacity:s=1,scale:u=1,size:m,color:p,children:h,...v},b)=>{i.useMemo(()=>(0,a.e)({SparklesImplMaterial:l}),[]);let y=i.useRef(null),g=(0,a.C)(e=>e.viewport.dpr),w=d(u),E=i.useMemo(()=>Float32Array.from(Array.from({length:t},()=>w.map(o.MathUtils.randFloatSpread)).flat()),[t,...w]),S=f(t,m,Math.random),x=f(t,s),A=f(t,n),O=f(3*t,e),L=f(void 0===p?3*t:t,c(p)?p:new o.Color(p),()=>1);return(0,a.D)(e=>{y.current&&y.current.material&&(y.current.material.time=e.clock.elapsedTime)}),i.useImperativeHandle(b,()=>y.current,[]),i.createElement("points",(0,r.A)({key:`particle-${t}-${JSON.stringify(u)}`},v,{ref:y}),i.createElement("bufferGeometry",null,i.createElement("bufferAttribute",{attach:"attributes-position",args:[E,3]}),i.createElement("bufferAttribute",{attach:"attributes-size",args:[S,1]}),i.createElement("bufferAttribute",{attach:"attributes-opacity",args:[x,1]}),i.createElement("bufferAttribute",{attach:"attributes-speed",args:[A,1]}),i.createElement("bufferAttribute",{attach:"attributes-color",args:[L,3]}),i.createElement("bufferAttribute",{attach:"attributes-noise",args:[O,3]})),h||i.createElement("sparklesImplMaterial",{transparent:!0,pixelRatio:g,depthWrite:!1}))})}}]);
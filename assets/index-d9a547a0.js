(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function gl(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function _l(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Et(n)?cp(n):_l(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Et(i))return i;if(ut(i))return i}}const op=/;(?![^(]*\))/g,ap=/:([^]+)/,lp=/\/\*.*?\*\//gs;function cp(i){const e={};return i.replace(lp,"").split(op).forEach(t=>{if(t){const n=t.split(ap);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function xl(i){let e="";if(Et(i))e=i;else if(Fe(i))for(let t=0;t<i.length;t++){const n=xl(i[t]);n&&(e+=n+" ")}else if(ut(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const up="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fp=gl(up);function $f(i){return!!i||i===""}const at={},fr=[],hn=()=>{},hp=()=>!1,dp=/^on[^a-z]/,wo=i=>dp.test(i),vl=i=>i.startsWith("onUpdate:"),zt=Object.assign,yl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},pp=Object.prototype.hasOwnProperty,qe=(i,e)=>pp.call(i,e),Fe=Array.isArray,rs=i=>To(i)==="[object Map]",mp=i=>To(i)==="[object Set]",ze=i=>typeof i=="function",Et=i=>typeof i=="string",bl=i=>typeof i=="symbol",ut=i=>i!==null&&typeof i=="object",Zf=i=>ut(i)&&ze(i.then)&&ze(i.catch),gp=Object.prototype.toString,To=i=>gp.call(i),_p=i=>To(i).slice(8,-1),xp=i=>To(i)==="[object Object]",Ml=i=>Et(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,oo=gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},vp=/-(\w)/g,xr=Eo(i=>i.replace(vp,(e,t)=>t?t.toUpperCase():"")),yp=/\B([A-Z])/g,Dr=Eo(i=>i.replace(yp,"-$1").toLowerCase()),Jf=Eo(i=>i.charAt(0).toUpperCase()+i.slice(1)),qo=Eo(i=>i?`on${Jf(i)}`:""),ds=(i,e)=>!Object.is(i,e),Xo=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},po=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},bp=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let pc;const Mp=()=>pc||(pc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let an;class Qf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=an,!e&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=an;try{return an=this,e()}finally{an=t}}}on(){an=this}off(){an=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Sp(i){return new Qf(i)}function wp(i,e=an){e&&e.active&&e.effects.push(i)}function Tp(){return an}const Sl=i=>{const e=new Set(i);return e.w=0,e.n=0,e},eh=i=>(i.w&fi)>0,th=i=>(i.n&fi)>0,Ep=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=fi},Ap=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];eh(r)&&!th(r)?r.delete(i):e[t++]=r,r.w&=~fi,r.n&=~fi}e.length=t}},Va=new WeakMap;let ts=0,fi=1;const Ga=30;let ln;const Di=Symbol(""),Wa=Symbol("");class wl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,wp(this,n)}run(){if(!this.active)return this.fn();let e=ln,t=li;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ln,ln=this,li=!0,fi=1<<++ts,ts<=Ga?Ep(this):mc(this),this.fn()}finally{ts<=Ga&&Ap(this),fi=1<<--ts,ln=this.parent,li=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ln===this?this.deferStop=!0:this.active&&(mc(this),this.onStop&&this.onStop(),this.active=!1)}}function mc(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let li=!0;const nh=[];function Ir(){nh.push(li),li=!1}function Nr(){const i=nh.pop();li=i===void 0?!0:i}function Vt(i,e,t){if(li&&ln){let n=Va.get(i);n||Va.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Sl()),ih(r)}}function ih(i,e){let t=!1;ts<=Ga?th(i)||(i.n|=fi,t=!eh(i)):t=!i.has(ln),t&&(i.add(ln),ln.deps.push(i))}function Xn(i,e,t,n,r,s){const o=Va.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(i)?Ml(t)&&a.push(o.get("length")):(a.push(o.get(Di)),rs(i)&&a.push(o.get(Wa)));break;case"delete":Fe(i)||(a.push(o.get(Di)),rs(i)&&a.push(o.get(Wa)));break;case"set":rs(i)&&a.push(o.get(Di));break}if(a.length===1)a[0]&&ja(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ja(Sl(l))}}function ja(i,e){const t=Fe(i)?i:[...i];for(const n of t)n.computed&&gc(n);for(const n of t)n.computed||gc(n)}function gc(i,e){(i!==ln||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Cp=gl("__proto__,__v_isRef,__isVue"),rh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(bl)),Rp=Tl(),Lp=Tl(!1,!0),Pp=Tl(!0),_c=Dp();function Dp(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=$e(this);for(let s=0,o=this.length;s<o;s++)Vt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Ir();const n=$e(this)[e].apply(this,t);return Nr(),n}}),i}function Ip(i){const e=$e(this);return Vt(e,"has",i),e.hasOwnProperty(i)}function Tl(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Yp:ch:e?lh:ah).get(n))return n;const o=Fe(n);if(!i){if(o&&qe(_c,r))return Reflect.get(_c,r,s);if(r==="hasOwnProperty")return Ip}const a=Reflect.get(n,r,s);return(bl(r)?rh.has(r):Cp(r))||(i||Vt(n,"get",r),e)?a:Pt(a)?o&&Ml(r)?a:a.value:ut(a)?i?uh(a):As(a):a}}const Np=sh(),Op=sh(!0);function sh(i=!1){return function(t,n,r,s){let o=t[n];if(vr(o)&&Pt(o)&&!Pt(r))return!1;if(!i&&(!mo(r)&&!vr(r)&&(o=$e(o),r=$e(r)),!Fe(t)&&Pt(o)&&!Pt(r)))return o.value=r,!0;const a=Fe(t)&&Ml(n)?Number(n)<t.length:qe(t,n),l=Reflect.set(t,n,r,s);return t===$e(s)&&(a?ds(r,o)&&Xn(t,"set",n,r):Xn(t,"add",n,r)),l}}function Fp(i,e){const t=qe(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Xn(i,"delete",e,void 0),n}function Up(i,e){const t=Reflect.has(i,e);return(!bl(e)||!rh.has(e))&&Vt(i,"has",e),t}function zp(i){return Vt(i,"iterate",Fe(i)?"length":Di),Reflect.ownKeys(i)}const oh={get:Rp,set:Np,deleteProperty:Fp,has:Up,ownKeys:zp},kp={get:Pp,set(i,e){return!0},deleteProperty(i,e){return!0}},Bp=zt({},oh,{get:Lp,set:Op}),El=i=>i,Ao=i=>Reflect.getPrototypeOf(i);function Ls(i,e,t=!1,n=!1){i=i.__v_raw;const r=$e(i),s=$e(e);t||(e!==s&&Vt(r,"get",e),Vt(r,"get",s));const{has:o}=Ao(r),a=n?El:t?Ll:ps;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Ps(i,e=!1){const t=this.__v_raw,n=$e(t),r=$e(i);return e||(i!==r&&Vt(n,"has",i),Vt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Ds(i,e=!1){return i=i.__v_raw,!e&&Vt($e(i),"iterate",Di),Reflect.get(i,"size",i)}function xc(i){i=$e(i);const e=$e(this);return Ao(e).has.call(e,i)||(e.add(i),Xn(e,"add",i,i)),this}function vc(i,e){e=$e(e);const t=$e(this),{has:n,get:r}=Ao(t);let s=n.call(t,i);s||(i=$e(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?ds(e,o)&&Xn(t,"set",i,e):Xn(t,"add",i,e),this}function yc(i){const e=$e(this),{has:t,get:n}=Ao(e);let r=t.call(e,i);r||(i=$e(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Xn(e,"delete",i,void 0),s}function bc(){const i=$e(this),e=i.size!==0,t=i.clear();return e&&Xn(i,"clear",void 0,void 0),t}function Is(i,e){return function(n,r){const s=this,o=s.__v_raw,a=$e(o),l=e?El:i?Ll:ps;return!i&&Vt(a,"iterate",Di),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Ns(i,e,t){return function(...n){const r=this.__v_raw,s=$e(r),o=rs(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?El:e?Ll:ps;return!e&&Vt(s,"iterate",l?Wa:Di),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Zn(i){return function(...e){return i==="delete"?!1:this}}function Hp(){const i={get(s){return Ls(this,s)},get size(){return Ds(this)},has:Ps,add:xc,set:vc,delete:yc,clear:bc,forEach:Is(!1,!1)},e={get(s){return Ls(this,s,!1,!0)},get size(){return Ds(this)},has:Ps,add:xc,set:vc,delete:yc,clear:bc,forEach:Is(!1,!0)},t={get(s){return Ls(this,s,!0)},get size(){return Ds(this,!0)},has(s){return Ps.call(this,s,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:Is(!0,!1)},n={get(s){return Ls(this,s,!0,!0)},get size(){return Ds(this,!0)},has(s){return Ps.call(this,s,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:Is(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Ns(s,!1,!1),t[s]=Ns(s,!0,!1),e[s]=Ns(s,!1,!0),n[s]=Ns(s,!0,!0)}),[i,t,e,n]}const[Vp,Gp,Wp,jp]=Hp();function Al(i,e){const t=e?i?jp:Wp:i?Gp:Vp;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(qe(t,r)&&r in n?t:n,r,s)}const qp={get:Al(!1,!1)},Xp={get:Al(!1,!0)},Kp={get:Al(!0,!1)},ah=new WeakMap,lh=new WeakMap,ch=new WeakMap,Yp=new WeakMap;function $p(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zp(i){return i.__v_skip||!Object.isExtensible(i)?0:$p(_p(i))}function As(i){return vr(i)?i:Cl(i,!1,oh,qp,ah)}function Jp(i){return Cl(i,!1,Bp,Xp,lh)}function uh(i){return Cl(i,!0,kp,Kp,ch)}function Cl(i,e,t,n,r){if(!ut(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=Zp(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function hr(i){return vr(i)?hr(i.__v_raw):!!(i&&i.__v_isReactive)}function vr(i){return!!(i&&i.__v_isReadonly)}function mo(i){return!!(i&&i.__v_isShallow)}function fh(i){return hr(i)||vr(i)}function $e(i){const e=i&&i.__v_raw;return e?$e(e):i}function Rl(i){return po(i,"__v_skip",!0),i}const ps=i=>ut(i)?As(i):i,Ll=i=>ut(i)?uh(i):i;function hh(i){li&&ln&&(i=$e(i),ih(i.dep||(i.dep=Sl())))}function dh(i,e){i=$e(i);const t=i.dep;t&&ja(t)}function Pt(i){return!!(i&&i.__v_isRef===!0)}function ph(i){return mh(i,!1)}function Qp(i){return mh(i,!0)}function mh(i,e){return Pt(i)?i:new em(i,e)}class em{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:$e(e),this._value=t?e:ps(e)}get value(){return hh(this),this._value}set value(e){const t=this.__v_isShallow||mo(e)||vr(e);e=t?e:$e(e),ds(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ps(e),dh(this))}}function dr(i){return Pt(i)?i.value:i}const tm={get:(i,e,t)=>dr(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Pt(r)&&!Pt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function gh(i){return hr(i)?i:new Proxy(i,tm)}var _h;class nm{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[_h]=!1,this._dirty=!0,this.effect=new wl(e,()=>{this._dirty||(this._dirty=!0,dh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=$e(this);return hh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}_h="__v_isReadonly";function im(i,e,t=!1){let n,r;const s=ze(i);return s?(n=i,r=hn):(n=i.get,r=i.set),new nm(n,r,s||!r,t)}function ci(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Co(s,e,t)}return r}function dn(i,e,t,n){if(ze(i)){const s=ci(i,e,t,n);return s&&Zf(s)&&s.catch(o=>{Co(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(dn(i[s],e,t,n));return r}function Co(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ci(l,null,10,[i,o,a]);return}}rm(i,t,r,n)}function rm(i,e,t,n=!0){console.error(i)}let ms=!1,qa=!1;const Lt=[];let Mn=0;const pr=[];let Un=null,Ei=0;const xh=Promise.resolve();let Pl=null;function vh(i){const e=Pl||xh;return i?e.then(this?i.bind(this):i):e}function sm(i){let e=Mn+1,t=Lt.length;for(;e<t;){const n=e+t>>>1;gs(Lt[n])<i?e=n+1:t=n}return e}function Dl(i){(!Lt.length||!Lt.includes(i,ms&&i.allowRecurse?Mn+1:Mn))&&(i.id==null?Lt.push(i):Lt.splice(sm(i.id),0,i),yh())}function yh(){!ms&&!qa&&(qa=!0,Pl=xh.then(Mh))}function om(i){const e=Lt.indexOf(i);e>Mn&&Lt.splice(e,1)}function am(i){Fe(i)?pr.push(...i):(!Un||!Un.includes(i,i.allowRecurse?Ei+1:Ei))&&pr.push(i),yh()}function Mc(i,e=ms?Mn+1:0){for(;e<Lt.length;e++){const t=Lt[e];t&&t.pre&&(Lt.splice(e,1),e--,t())}}function bh(i){if(pr.length){const e=[...new Set(pr)];if(pr.length=0,Un){Un.push(...e);return}for(Un=e,Un.sort((t,n)=>gs(t)-gs(n)),Ei=0;Ei<Un.length;Ei++)Un[Ei]();Un=null,Ei=0}}const gs=i=>i.id==null?1/0:i.id,lm=(i,e)=>{const t=gs(i)-gs(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Mh(i){qa=!1,ms=!0,Lt.sort(lm);const e=hn;try{for(Mn=0;Mn<Lt.length;Mn++){const t=Lt[Mn];t&&t.active!==!1&&ci(t,null,14)}}finally{Mn=0,Lt.length=0,bh(),ms=!1,Pl=null,(Lt.length||pr.length)&&Mh()}}function cm(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||at;h&&(r=t.map(p=>Et(p)?p.trim():p)),f&&(r=t.map(bp))}let a,l=n[a=qo(e)]||n[a=qo(xr(e))];!l&&s&&(l=n[a=qo(Dr(e))]),l&&dn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,dn(c,i,6,r)}}function Sh(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!ze(i)){const l=c=>{const u=Sh(c,e,!0);u&&(a=!0,zt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(ut(i)&&n.set(i,null),null):(Fe(s)?s.forEach(l=>o[l]=null):zt(o,s),ut(i)&&n.set(i,o),o)}function Ro(i,e){return!i||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(i,e[0].toLowerCase()+e.slice(1))||qe(i,Dr(e))||qe(i,e))}let Ht=null,Lo=null;function go(i){const e=Ht;return Ht=i,Lo=i&&i.type.__scopeId||null,e}function wh(i){Lo=i}function Th(){Lo=null}function Rt(i,e=Ht,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Lc(-1);const s=go(e);let o;try{o=i(...r)}finally{go(s),n._d&&Lc(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ko(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:d}=i;let m,x;const b=go(i);try{if(t.shapeFlag&4){const y=r||n;m=yn(u.call(y,y,f,s,p,h,g)),x=l}else{const y=e;m=yn(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),x=e.props?l:um(l)}}catch(y){as.length=0,Co(y,i,1),m=st(yr)}let _=m;if(x&&d!==!1){const y=Object.keys(x),{shapeFlag:S}=_;y.length&&S&7&&(o&&y.some(vl)&&(x=fm(x,o)),_=br(_,x))}return t.dirs&&(_=br(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),m=_,go(b),m}const um=i=>{let e;for(const t in i)(t==="class"||t==="style"||wo(t))&&((e||(e={}))[t]=i[t]);return e},fm=(i,e)=>{const t={};for(const n in i)(!vl(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function hm(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Sc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Ro(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Sc(n,o,c):!0:!!o;return!1}function Sc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Ro(t,s))return!0}return!1}function dm({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const pm=i=>i.__isSuspense;function mm(i,e){e&&e.pendingBranch?Fe(i)?e.effects.push(...i):e.effects.push(i):am(i)}function ao(i,e){if(gt){let t=gt.provides;const n=gt.parent&&gt.parent.provides;n===t&&(t=gt.provides=Object.create(n)),t[i]=e}}function Gn(i,e,t=!1){const n=gt||Ht;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&ze(e)?e.call(n.proxy):e}}const Os={};function lo(i,e,t){return Eh(i,e,t)}function Eh(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=at){const a=Tp()===(gt==null?void 0:gt.scope)?gt:null;let l,c=!1,u=!1;if(Pt(i)?(l=()=>i.value,c=mo(i)):hr(i)?(l=()=>i,n=!0):Fe(i)?(u=!0,c=i.some(_=>hr(_)||mo(_)),l=()=>i.map(_=>{if(Pt(_))return _.value;if(hr(_))return cr(_);if(ze(_))return ci(_,a,2)})):ze(i)?e?l=()=>ci(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),dn(i,a,3,[h])}:l=hn,e&&n){const _=l;l=()=>cr(_())}let f,h=_=>{f=x.onStop=()=>{ci(_,a,4)}},p;if(xs)if(h=hn,e?t&&dn(e,a,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const _=og();p=_.__watcherHandles||(_.__watcherHandles=[])}else return hn;let g=u?new Array(i.length).fill(Os):Os;const d=()=>{if(x.active)if(e){const _=x.run();(n||c||(u?_.some((y,S)=>ds(y,g[S])):ds(_,g)))&&(f&&f(),dn(e,a,3,[_,g===Os?void 0:u&&g[0]===Os?[]:g,h]),g=_)}else x.run()};d.allowRecurse=!!e;let m;r==="sync"?m=d:r==="post"?m=()=>kt(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),m=()=>Dl(d));const x=new wl(l,m);e?t?d():g=x.run():r==="post"?kt(x.run.bind(x),a&&a.suspense):x.run();const b=()=>{x.stop(),a&&a.scope&&yl(a.scope.effects,x)};return p&&p.push(b),b}function gm(i,e,t){const n=this.proxy,r=Et(i)?i.includes(".")?Ah(n,i):()=>n[i]:i.bind(n,n);let s;ze(e)?s=e:(s=e.handler,t=e);const o=gt;Mr(this);const a=Eh(r,s.bind(n),t);return o?Mr(o):Ii(),a}function Ah(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function cr(i,e){if(!ut(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Pt(i))cr(i.value,e);else if(Fe(i))for(let t=0;t<i.length;t++)cr(i[t],e);else if(mp(i)||rs(i))i.forEach(t=>{cr(t,e)});else if(xp(i))for(const t in i)cr(i[t],e);return i}function Bi(i){return ze(i)?{setup:i,name:i.name}:i}const ss=i=>!!i.type.__asyncLoader,Ch=i=>i.type.__isKeepAlive;function _m(i,e){Rh(i,"a",e)}function xm(i,e){Rh(i,"da",e)}function Rh(i,e,t=gt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Po(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Ch(r.parent.vnode)&&vm(n,e,t,r),r=r.parent}}function vm(i,e,t,n){const r=Po(e,i,n,!0);Lh(()=>{yl(n[e],r)},t)}function Po(i,e,t=gt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ir(),Mr(t);const a=dn(e,t,i,o);return Ii(),Nr(),a});return n?r.unshift(s):r.push(s),s}}const Yn=i=>(e,t=gt)=>(!xs||i==="sp")&&Po(i,(...n)=>e(...n),t),ym=Yn("bm"),Do=Yn("m"),bm=Yn("bu"),Mm=Yn("u"),Sm=Yn("bum"),Lh=Yn("um"),wm=Yn("sp"),Tm=Yn("rtg"),Em=Yn("rtc");function Am(i,e=gt){Po("ec",i,e)}function xi(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Ir(),dn(l,t,8,[i.el,a,i,e]),Nr())}}const Cm=Symbol();function Yo(i,e,t={},n,r){if(Ht.isCE||Ht.parent&&ss(Ht.parent)&&Ht.parent.isCE)return e!=="default"&&(t.name=e),st("slot",t,n&&n());let s=i[e];s&&s._c&&(s._d=!1),nn();const o=s&&Ph(s(t)),a=Xm(Xt,{key:t.key||o&&o.key||`_${e}`},o||(n?n():[]),o&&i._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Ph(i){return i.some(e=>xo(e)?!(e.type===yr||e.type===Xt&&!Ph(e.children)):!0)?i:null}const Xa=i=>i?Vh(i)?Fl(i)||i.proxy:Xa(i.parent):null,os=zt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Xa(i.parent),$root:i=>Xa(i.root),$emit:i=>i.emit,$options:i=>Il(i),$forceUpdate:i=>i.f||(i.f=()=>Dl(i.update)),$nextTick:i=>i.n||(i.n=vh.bind(i.proxy)),$watch:i=>gm.bind(i)}),$o=(i,e)=>i!==at&&!i.__isScriptSetup&&qe(i,e),Rm={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if($o(n,e))return o[e]=1,n[e];if(r!==at&&qe(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&qe(c,e))return o[e]=3,s[e];if(t!==at&&qe(t,e))return o[e]=4,t[e];Ka&&(o[e]=0)}}const u=os[e];let f,h;if(u)return e==="$attrs"&&Vt(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==at&&qe(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,qe(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return $o(r,e)?(r[e]=t,!0):n!==at&&qe(n,e)?(n[e]=t,!0):qe(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==at&&qe(i,o)||$o(e,o)||(a=s[0])&&qe(a,o)||qe(n,o)||qe(os,o)||qe(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:qe(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let Ka=!0;function Lm(i){const e=Il(i),t=i.proxy,n=i.ctx;Ka=!1,e.beforeCreate&&wc(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:x,beforeUnmount:b,destroyed:_,unmounted:y,render:S,renderTracked:C,renderTriggered:D,errorCaptured:M,serverPrefetch:E,expose:P,inheritAttrs:W,components:Z,directives:k,filters:z}=e;if(c&&Pm(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const $ in o){const H=o[$];ze(H)&&(n[$]=H.bind(t))}if(r){const $=r.call(t,t);ut($)&&(i.data=As($))}if(Ka=!0,s)for(const $ in s){const H=s[$],ce=ze(H)?H.bind(t,t):ze(H.get)?H.get.bind(t,t):hn,ue=!ze(H)&&ze(H.set)?H.set.bind(t):hn,we=Qt({get:ce,set:ue});Object.defineProperty(n,$,{enumerable:!0,configurable:!0,get:()=>we.value,set:G=>we.value=G})}if(a)for(const $ in a)Dh(a[$],n,t,$);if(l){const $=ze(l)?l.call(t):l;Reflect.ownKeys($).forEach(H=>{ao(H,$[H])})}u&&wc(u,i,"c");function Q($,H){Fe(H)?H.forEach(ce=>$(ce.bind(t))):H&&$(H.bind(t))}if(Q(ym,f),Q(Do,h),Q(bm,p),Q(Mm,g),Q(_m,d),Q(xm,m),Q(Am,M),Q(Em,C),Q(Tm,D),Q(Sm,b),Q(Lh,y),Q(wm,E),Fe(P))if(P.length){const $=i.exposed||(i.exposed={});P.forEach(H=>{Object.defineProperty($,H,{get:()=>t[H],set:ce=>t[H]=ce})})}else i.exposed||(i.exposed={});S&&i.render===hn&&(i.render=S),W!=null&&(i.inheritAttrs=W),Z&&(i.components=Z),k&&(i.directives=k)}function Pm(i,e,t=hn,n=!1){Fe(i)&&(i=Ya(i));for(const r in i){const s=i[r];let o;ut(s)?"default"in s?o=Gn(s.from||r,s.default,!0):o=Gn(s.from||r):o=Gn(s),Pt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function wc(i,e,t){dn(Fe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Dh(i,e,t,n){const r=n.includes(".")?Ah(t,n):()=>t[n];if(Et(i)){const s=e[i];ze(s)&&lo(r,s)}else if(ze(i))lo(r,i.bind(t));else if(ut(i))if(Fe(i))i.forEach(s=>Dh(s,e,t,n));else{const s=ze(i.handler)?i.handler.bind(t):e[i.handler];ze(s)&&lo(r,s,i)}}function Il(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>_o(l,c,o,!0)),_o(l,e,o)),ut(e)&&s.set(e,l),l}function _o(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&_o(i,s,t,!0),r&&r.forEach(o=>_o(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Dm[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Dm={data:Tc,props:Si,emits:Si,methods:Si,computed:Si,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Si,directives:Si,watch:Nm,provide:Tc,inject:Im};function Tc(i,e){return e?i?function(){return zt(ze(i)?i.call(this,this):i,ze(e)?e.call(this,this):e)}:e:i}function Im(i,e){return Si(Ya(i),Ya(e))}function Ya(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Ot(i,e){return i?[...new Set([].concat(i,e))]:e}function Si(i,e){return i?zt(zt(Object.create(null),i),e):e}function Nm(i,e){if(!i)return e;if(!e)return i;const t=zt(Object.create(null),i);for(const n in e)t[n]=Ot(i[n],e[n]);return t}function Om(i,e,t,n=!1){const r={},s={};po(s,No,1),i.propsDefaults=Object.create(null),Ih(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Jp(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Fm(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=$e(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ro(i.emitsOptions,h))continue;const p=e[h];if(l)if(qe(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=xr(h);r[g]=$a(l,a,g,p,i,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Ih(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!qe(e,f)&&((u=Dr(f))===f||!qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=$a(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!qe(e,f))&&(delete s[f],c=!0)}c&&Xn(i,"set","$attrs")}function Ih(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(oo(l))continue;const c=e[l];let u;r&&qe(r,u=xr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ro(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=$e(t),c=a||at;for(let u=0;u<s.length;u++){const f=s[u];t[f]=$a(r,l,f,c[f],i,!qe(c,f))}}return o}function $a(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=qe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&ze(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Mr(r),n=c[t]=l.call(null,e),Ii())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Dr(t))&&(n=!0))}return n}function Nh(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!ze(i)){const u=f=>{l=!0;const[h,p]=Nh(f,e,!0);zt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return ut(i)&&n.set(i,fr),fr;if(Fe(s))for(let u=0;u<s.length;u++){const f=xr(s[u]);Ec(f)&&(o[f]=at)}else if(s)for(const u in s){const f=xr(u);if(Ec(f)){const h=s[u],p=o[f]=Fe(h)||ze(h)?{type:h}:Object.assign({},h);if(p){const g=Rc(Boolean,p.type),d=Rc(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||qe(p,"default"))&&a.push(f)}}}const c=[o,a];return ut(i)&&n.set(i,c),c}function Ec(i){return i[0]!=="$"}function Ac(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function Cc(i,e){return Ac(i)===Ac(e)}function Rc(i,e){return Fe(e)?e.findIndex(t=>Cc(t,i)):ze(e)&&Cc(e,i)?0:-1}const Oh=i=>i[0]==="_"||i==="$stable",Nl=i=>Fe(i)?i.map(yn):[yn(i)],Um=(i,e,t)=>{if(e._n)return e;const n=Rt((...r)=>Nl(e(...r)),t);return n._c=!1,n},Fh=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Oh(r))continue;const s=i[r];if(ze(s))e[r]=Um(r,s,n);else if(s!=null){const o=Nl(s);e[r]=()=>o}}},Uh=(i,e)=>{const t=Nl(e);i.slots.default=()=>t},zm=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=$e(e),po(e,"_",t)):Fh(e,i.slots={})}else i.slots={},e&&Uh(i,e);po(i.slots,No,1)},km=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=at;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(zt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Fh(e,r)),o=e}else e&&(Uh(i,e),o={default:1});if(s)for(const a in r)!Oh(a)&&!(a in o)&&delete r[a]};function zh(){return{app:null,config:{isNativeTag:hp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bm=0;function Hm(i,e){return function(n,r=null){ze(n)||(n=Object.assign({},n)),r!=null&&!ut(r)&&(r=null);const s=zh(),o=new Set;let a=!1;const l=s.app={_uid:Bm++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:ag,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ze(c.install)?(o.add(c),c.install(l,...u)):ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=st(n,r);return h.appContext=s,u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Fl(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Za(i,e,t,n,r=!1){if(Fe(i)){i.forEach((h,p)=>Za(h,e&&(Fe(e)?e[p]:e),t,n,r));return}if(ss(n)&&!r)return;const s=n.shapeFlag&4?Fl(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Et(c)?(u[c]=null,qe(f,c)&&(f[c]=null)):Pt(c)&&(c.value=null)),ze(l))ci(l,a,12,[o,u]);else{const h=Et(l),p=Pt(l);if(h||p){const g=()=>{if(i.f){const d=h?qe(f,l)?f[l]:u[l]:l.value;r?Fe(d)&&yl(d,s):Fe(d)?d.includes(s)||d.push(s):h?(u[l]=[s],qe(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,qe(f,l)&&(f[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,kt(g,t)):g()}}}const kt=mm;function Vm(i){return Gm(i)}function Gm(i,e){const t=Mp();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=hn,insertStaticContent:g}=i,d=(T,R,j,Y=null,J=null,fe=null,de=!1,re=null,ge=!!R.dynamicChildren)=>{if(T===R)return;T&&!Hr(T,R)&&(Y=ie(T),G(T,J,fe,!0),T=null),R.patchFlag===-2&&(ge=!1,R.dynamicChildren=null);const{type:ae,ref:w,shapeFlag:v}=R;switch(ae){case Io:m(T,R,j,Y);break;case yr:x(T,R,j,Y);break;case Zo:T==null&&b(R,j,Y,de);break;case Xt:Z(T,R,j,Y,J,fe,de,re,ge);break;default:v&1?S(T,R,j,Y,J,fe,de,re,ge):v&6?k(T,R,j,Y,J,fe,de,re,ge):(v&64||v&128)&&ae.process(T,R,j,Y,J,fe,de,re,ge,me)}w!=null&&J&&Za(w,T&&T.ref,fe,R||T,!R)},m=(T,R,j,Y)=>{if(T==null)n(R.el=a(R.children),j,Y);else{const J=R.el=T.el;R.children!==T.children&&c(J,R.children)}},x=(T,R,j,Y)=>{T==null?n(R.el=l(R.children||""),j,Y):R.el=T.el},b=(T,R,j,Y)=>{[T.el,T.anchor]=g(T.children,R,j,Y,T.el,T.anchor)},_=({el:T,anchor:R},j,Y)=>{let J;for(;T&&T!==R;)J=h(T),n(T,j,Y),T=J;n(R,j,Y)},y=({el:T,anchor:R})=>{let j;for(;T&&T!==R;)j=h(T),r(T),T=j;r(R)},S=(T,R,j,Y,J,fe,de,re,ge)=>{de=de||R.type==="svg",T==null?C(R,j,Y,J,fe,de,re,ge):E(T,R,J,fe,de,re,ge)},C=(T,R,j,Y,J,fe,de,re)=>{let ge,ae;const{type:w,props:v,shapeFlag:F,transition:K,dirs:ne}=T;if(ge=T.el=o(T.type,fe,v&&v.is,v),F&8?u(ge,T.children):F&16&&M(T.children,ge,null,Y,J,fe&&w!=="foreignObject",de,re),ne&&xi(T,null,Y,"created"),D(ge,T,T.scopeId,de,Y),v){for(const ye in v)ye!=="value"&&!oo(ye)&&s(ge,ye,null,v[ye],fe,T.children,Y,J,I);"value"in v&&s(ge,"value",null,v.value),(ae=v.onVnodeBeforeMount)&&xn(ae,Y,T)}ne&&xi(T,null,Y,"beforeMount");const he=(!J||J&&!J.pendingBranch)&&K&&!K.persisted;he&&K.beforeEnter(ge),n(ge,R,j),((ae=v&&v.onVnodeMounted)||he||ne)&&kt(()=>{ae&&xn(ae,Y,T),he&&K.enter(ge),ne&&xi(T,null,Y,"mounted")},J)},D=(T,R,j,Y,J)=>{if(j&&p(T,j),Y)for(let fe=0;fe<Y.length;fe++)p(T,Y[fe]);if(J){let fe=J.subTree;if(R===fe){const de=J.vnode;D(T,de,de.scopeId,de.slotScopeIds,J.parent)}}},M=(T,R,j,Y,J,fe,de,re,ge=0)=>{for(let ae=ge;ae<T.length;ae++){const w=T[ae]=re?si(T[ae]):yn(T[ae]);d(null,w,R,j,Y,J,fe,de,re)}},E=(T,R,j,Y,J,fe,de)=>{const re=R.el=T.el;let{patchFlag:ge,dynamicChildren:ae,dirs:w}=R;ge|=T.patchFlag&16;const v=T.props||at,F=R.props||at;let K;j&&vi(j,!1),(K=F.onVnodeBeforeUpdate)&&xn(K,j,R,T),w&&xi(R,T,j,"beforeUpdate"),j&&vi(j,!0);const ne=J&&R.type!=="foreignObject";if(ae?P(T.dynamicChildren,ae,re,j,Y,ne,fe):de||H(T,R,re,null,j,Y,ne,fe,!1),ge>0){if(ge&16)W(re,R,v,F,j,Y,J);else if(ge&2&&v.class!==F.class&&s(re,"class",null,F.class,J),ge&4&&s(re,"style",v.style,F.style,J),ge&8){const he=R.dynamicProps;for(let ye=0;ye<he.length;ye++){const L=he[ye],B=v[L],be=F[L];(be!==B||L==="value")&&s(re,L,B,be,J,T.children,j,Y,I)}}ge&1&&T.children!==R.children&&u(re,R.children)}else!de&&ae==null&&W(re,R,v,F,j,Y,J);((K=F.onVnodeUpdated)||w)&&kt(()=>{K&&xn(K,j,R,T),w&&xi(R,T,j,"updated")},Y)},P=(T,R,j,Y,J,fe,de)=>{for(let re=0;re<R.length;re++){const ge=T[re],ae=R[re],w=ge.el&&(ge.type===Xt||!Hr(ge,ae)||ge.shapeFlag&70)?f(ge.el):j;d(ge,ae,w,null,Y,J,fe,de,!0)}},W=(T,R,j,Y,J,fe,de)=>{if(j!==Y){if(j!==at)for(const re in j)!oo(re)&&!(re in Y)&&s(T,re,j[re],null,de,R.children,J,fe,I);for(const re in Y){if(oo(re))continue;const ge=Y[re],ae=j[re];ge!==ae&&re!=="value"&&s(T,re,ae,ge,de,R.children,J,fe,I)}"value"in Y&&s(T,"value",j.value,Y.value)}},Z=(T,R,j,Y,J,fe,de,re,ge)=>{const ae=R.el=T?T.el:a(""),w=R.anchor=T?T.anchor:a("");let{patchFlag:v,dynamicChildren:F,slotScopeIds:K}=R;K&&(re=re?re.concat(K):K),T==null?(n(ae,j,Y),n(w,j,Y),M(R.children,j,w,J,fe,de,re,ge)):v>0&&v&64&&F&&T.dynamicChildren?(P(T.dynamicChildren,F,j,J,fe,de,re),(R.key!=null||J&&R===J.subTree)&&kh(T,R,!0)):H(T,R,j,w,J,fe,de,re,ge)},k=(T,R,j,Y,J,fe,de,re,ge)=>{R.slotScopeIds=re,T==null?R.shapeFlag&512?J.ctx.activate(R,j,Y,de,ge):z(R,j,Y,J,fe,de,ge):X(T,R,ge)},z=(T,R,j,Y,J,fe,de)=>{const re=T.component=Qm(T,Y,J);if(Ch(T)&&(re.ctx.renderer=me),eg(re),re.asyncDep){if(J&&J.registerDep(re,Q),!T.el){const ge=re.subTree=st(yr);x(null,ge,R,j)}return}Q(re,T,R,j,J,fe,de)},X=(T,R,j)=>{const Y=R.component=T.component;if(hm(T,R,j))if(Y.asyncDep&&!Y.asyncResolved){$(Y,R,j);return}else Y.next=R,om(Y.update),Y.update();else R.el=T.el,Y.vnode=R},Q=(T,R,j,Y,J,fe,de)=>{const re=()=>{if(T.isMounted){let{next:w,bu:v,u:F,parent:K,vnode:ne}=T,he=w,ye;vi(T,!1),w?(w.el=ne.el,$(T,w,de)):w=ne,v&&Xo(v),(ye=w.props&&w.props.onVnodeBeforeUpdate)&&xn(ye,K,w,ne),vi(T,!0);const L=Ko(T),B=T.subTree;T.subTree=L,d(B,L,f(B.el),ie(B),T,J,fe),w.el=L.el,he===null&&dm(T,L.el),F&&kt(F,J),(ye=w.props&&w.props.onVnodeUpdated)&&kt(()=>xn(ye,K,w,ne),J)}else{let w;const{el:v,props:F}=R,{bm:K,m:ne,parent:he}=T,ye=ss(R);if(vi(T,!1),K&&Xo(K),!ye&&(w=F&&F.onVnodeBeforeMount)&&xn(w,he,R),vi(T,!0),v&&Te){const L=()=>{T.subTree=Ko(T),Te(v,T.subTree,T,J,null)};ye?R.type.__asyncLoader().then(()=>!T.isUnmounted&&L()):L()}else{const L=T.subTree=Ko(T);d(null,L,j,Y,T,J,fe),R.el=L.el}if(ne&&kt(ne,J),!ye&&(w=F&&F.onVnodeMounted)){const L=R;kt(()=>xn(w,he,L),J)}(R.shapeFlag&256||he&&ss(he.vnode)&&he.vnode.shapeFlag&256)&&T.a&&kt(T.a,J),T.isMounted=!0,R=j=Y=null}},ge=T.effect=new wl(re,()=>Dl(ae),T.scope),ae=T.update=()=>ge.run();ae.id=T.uid,vi(T,!0),ae()},$=(T,R,j)=>{R.component=T;const Y=T.vnode.props;T.vnode=R,T.next=null,Fm(T,R.props,Y,j),km(T,R.children,j),Ir(),Mc(),Nr()},H=(T,R,j,Y,J,fe,de,re,ge=!1)=>{const ae=T&&T.children,w=T?T.shapeFlag:0,v=R.children,{patchFlag:F,shapeFlag:K}=R;if(F>0){if(F&128){ue(ae,v,j,Y,J,fe,de,re,ge);return}else if(F&256){ce(ae,v,j,Y,J,fe,de,re,ge);return}}K&8?(w&16&&I(ae,J,fe),v!==ae&&u(j,v)):w&16?K&16?ue(ae,v,j,Y,J,fe,de,re,ge):I(ae,J,fe,!0):(w&8&&u(j,""),K&16&&M(v,j,Y,J,fe,de,re,ge))},ce=(T,R,j,Y,J,fe,de,re,ge)=>{T=T||fr,R=R||fr;const ae=T.length,w=R.length,v=Math.min(ae,w);let F;for(F=0;F<v;F++){const K=R[F]=ge?si(R[F]):yn(R[F]);d(T[F],K,j,null,J,fe,de,re,ge)}ae>w?I(T,J,fe,!0,!1,v):M(R,j,Y,J,fe,de,re,ge,v)},ue=(T,R,j,Y,J,fe,de,re,ge)=>{let ae=0;const w=R.length;let v=T.length-1,F=w-1;for(;ae<=v&&ae<=F;){const K=T[ae],ne=R[ae]=ge?si(R[ae]):yn(R[ae]);if(Hr(K,ne))d(K,ne,j,null,J,fe,de,re,ge);else break;ae++}for(;ae<=v&&ae<=F;){const K=T[v],ne=R[F]=ge?si(R[F]):yn(R[F]);if(Hr(K,ne))d(K,ne,j,null,J,fe,de,re,ge);else break;v--,F--}if(ae>v){if(ae<=F){const K=F+1,ne=K<w?R[K].el:Y;for(;ae<=F;)d(null,R[ae]=ge?si(R[ae]):yn(R[ae]),j,ne,J,fe,de,re,ge),ae++}}else if(ae>F)for(;ae<=v;)G(T[ae],J,fe,!0),ae++;else{const K=ae,ne=ae,he=new Map;for(ae=ne;ae<=F;ae++){const Se=R[ae]=ge?si(R[ae]):yn(R[ae]);Se.key!=null&&he.set(Se.key,ae)}let ye,L=0;const B=F-ne+1;let be=!1,Ee=0;const Me=new Array(B);for(ae=0;ae<B;ae++)Me[ae]=0;for(ae=K;ae<=v;ae++){const Se=T[ae];if(L>=B){G(Se,J,fe,!0);continue}let De;if(Se.key!=null)De=he.get(Se.key);else for(ye=ne;ye<=F;ye++)if(Me[ye-ne]===0&&Hr(Se,R[ye])){De=ye;break}De===void 0?G(Se,J,fe,!0):(Me[De-ne]=ae+1,De>=Ee?Ee=De:be=!0,d(Se,R[De],j,null,J,fe,de,re,ge),L++)}const Ce=be?Wm(Me):fr;for(ye=Ce.length-1,ae=B-1;ae>=0;ae--){const Se=ne+ae,De=R[Se],Be=Se+1<w?R[Se+1].el:Y;Me[ae]===0?d(null,De,j,Be,J,fe,de,re,ge):be&&(ye<0||ae!==Ce[ye]?we(De,j,Be,2):ye--)}}},we=(T,R,j,Y,J=null)=>{const{el:fe,type:de,transition:re,children:ge,shapeFlag:ae}=T;if(ae&6){we(T.component.subTree,R,j,Y);return}if(ae&128){T.suspense.move(R,j,Y);return}if(ae&64){de.move(T,R,j,me);return}if(de===Xt){n(fe,R,j);for(let v=0;v<ge.length;v++)we(ge[v],R,j,Y);n(T.anchor,R,j);return}if(de===Zo){_(T,R,j);return}if(Y!==2&&ae&1&&re)if(Y===0)re.beforeEnter(fe),n(fe,R,j),kt(()=>re.enter(fe),J);else{const{leave:v,delayLeave:F,afterLeave:K}=re,ne=()=>n(fe,R,j),he=()=>{v(fe,()=>{ne(),K&&K()})};F?F(fe,ne,he):he()}else n(fe,R,j)},G=(T,R,j,Y=!1,J=!1)=>{const{type:fe,props:de,ref:re,children:ge,dynamicChildren:ae,shapeFlag:w,patchFlag:v,dirs:F}=T;if(re!=null&&Za(re,null,j,T,!0),w&256){R.ctx.deactivate(T);return}const K=w&1&&F,ne=!ss(T);let he;if(ne&&(he=de&&de.onVnodeBeforeUnmount)&&xn(he,R,T),w&6)N(T.component,j,Y);else{if(w&128){T.suspense.unmount(j,Y);return}K&&xi(T,null,R,"beforeUnmount"),w&64?T.type.remove(T,R,j,J,me,Y):ae&&(fe!==Xt||v>0&&v&64)?I(ae,R,j,!1,!0):(fe===Xt&&v&384||!J&&w&16)&&I(ge,R,j),Y&&le(T)}(ne&&(he=de&&de.onVnodeUnmounted)||K)&&kt(()=>{he&&xn(he,R,T),K&&xi(T,null,R,"unmounted")},j)},le=T=>{const{type:R,el:j,anchor:Y,transition:J}=T;if(R===Xt){xe(j,Y);return}if(R===Zo){y(T);return}const fe=()=>{r(j),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(T.shapeFlag&1&&J&&!J.persisted){const{leave:de,delayLeave:re}=J,ge=()=>de(j,fe);re?re(T.el,fe,ge):ge()}else fe()},xe=(T,R)=>{let j;for(;T!==R;)j=h(T),r(T),T=j;r(R)},N=(T,R,j)=>{const{bum:Y,scope:J,update:fe,subTree:de,um:re}=T;Y&&Xo(Y),J.stop(),fe&&(fe.active=!1,G(de,T,R,j)),re&&kt(re,R),kt(()=>{T.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},I=(T,R,j,Y=!1,J=!1,fe=0)=>{for(let de=fe;de<T.length;de++)G(T[de],R,j,Y,J)},ie=T=>T.shapeFlag&6?ie(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el),oe=(T,R,j)=>{T==null?R._vnode&&G(R._vnode,null,null,!0):d(R._vnode||null,T,R,null,null,null,j),Mc(),bh(),R._vnode=T},me={p:d,um:G,m:we,r:le,mt:z,mc:M,pc:H,pbc:P,n:ie,o:i};let pe,Te;return e&&([pe,Te]=e(me)),{render:oe,hydrate:pe,createApp:Hm(oe,pe)}}function vi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function kh(i,e,t=!1){const n=i.children,r=e.children;if(Fe(n)&&Fe(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=si(r[s]),a.el=o.el),t||kh(o,a)),a.type===Io&&(a.el=o.el)}}function Wm(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const jm=i=>i.__isTeleport,Xt=Symbol(void 0),Io=Symbol(void 0),yr=Symbol(void 0),Zo=Symbol(void 0),as=[];let un=null;function nn(i=!1){as.push(un=i?null:[])}function qm(){as.pop(),un=as[as.length-1]||null}let _s=1;function Lc(i){_s+=i}function Bh(i){return i.dynamicChildren=_s>0?un||fr:null,qm(),_s>0&&un&&un.push(i),i}function gn(i,e,t,n,r,s){return Bh(Je(i,e,t,n,r,s,!0))}function Xm(i,e,t,n,r){return Bh(st(i,e,t,n,r,!0))}function xo(i){return i?i.__v_isVNode===!0:!1}function Hr(i,e){return i.type===e.type&&i.key===e.key}const No="__vInternal",Hh=({key:i})=>i??null,co=({ref:i,ref_key:e,ref_for:t})=>i!=null?Et(i)||Pt(i)||ze(i)?{i:Ht,r:i,k:e,f:!!t}:i:null;function Je(i,e=null,t=null,n=0,r=null,s=i===Xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Hh(e),ref:e&&co(e),scopeId:Lo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ht};return a?(Ol(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),_s>0&&!o&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const st=Km;function Km(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Cm)&&(i=yr),xo(i)){const a=br(i,e,!0);return t&&Ol(a,t),_s>0&&!s&&un&&(a.shapeFlag&6?un[un.indexOf(i)]=a:un.push(a)),a.patchFlag|=-2,a}if(rg(i)&&(i=i.__vccOpts),e){e=Ym(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=xl(a)),ut(l)&&(fh(l)&&!Fe(l)&&(l=zt({},l)),e.style=_l(l))}const o=Et(i)?1:pm(i)?128:jm(i)?64:ut(i)?4:ze(i)?2:0;return Je(i,e,t,n,r,o,s,!0)}function Ym(i){return i?fh(i)||No in i?zt({},i):i:null}function br(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?$m(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Hh(a),ref:e&&e.ref?t&&r?Fe(r)?r.concat(co(e)):[r,co(e)]:co(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Xt?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&br(i.ssContent),ssFallback:i.ssFallback&&br(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Qe(i=" ",e=0){return st(Io,null,i,e)}function yn(i){return i==null||typeof i=="boolean"?st(yr):Fe(i)?st(Xt,null,i.slice()):typeof i=="object"?si(i):st(Io,null,String(i))}function si(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:br(i)}function Ol(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Ol(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(No in e)?e._ctx=Ht:r===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:Ht},t=32):(e=String(e),n&64?(t=16,e=[Qe(e)]):t=8);i.children=e,i.shapeFlag|=t}function $m(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=xl([e.class,n.class]));else if(r==="style")e.style=_l([e.style,n.style]);else if(wo(r)){const s=e[r],o=n[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function xn(i,e,t,n=null){dn(i,e,7,[t,n])}const Zm=zh();let Jm=0;function Qm(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||Zm,s={uid:Jm++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nh(n,r),emitsOptions:Sh(n,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:n.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=cm.bind(null,s),i.ce&&i.ce(s),s}let gt=null;const Mr=i=>{gt=i,i.scope.on()},Ii=()=>{gt&&gt.scope.off(),gt=null};function Vh(i){return i.vnode.shapeFlag&4}let xs=!1;function eg(i,e=!1){xs=e;const{props:t,children:n}=i.vnode,r=Vh(i);Om(i,t,r,e),zm(i,n);const s=r?tg(i,e):void 0;return xs=!1,s}function tg(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Rl(new Proxy(i.ctx,Rm));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?ig(i):null;Mr(i),Ir();const s=ci(n,i,0,[i.props,r]);if(Nr(),Ii(),Zf(s)){if(s.then(Ii,Ii),e)return s.then(o=>{Pc(i,o,e)}).catch(o=>{Co(o,i,0)});i.asyncDep=s}else Pc(i,s,e)}else Gh(i,e)}function Pc(i,e,t){ze(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ut(e)&&(i.setupState=gh(e)),Gh(i,t)}let Dc;function Gh(i,e,t){const n=i.type;if(!i.render){if(!e&&Dc&&!n.render){const r=n.template||Il(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=zt(zt({isCustomElement:s,delimiters:a},o),l);n.render=Dc(r,c)}}i.render=n.render||hn}Mr(i),Ir(),Lm(i),Nr(),Ii()}function ng(i){return new Proxy(i.attrs,{get(e,t){return Vt(i,"get","$attrs"),e[t]}})}function ig(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=ng(i))},slots:i.slots,emit:i.emit,expose:e}}function Fl(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(gh(Rl(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in os)return os[t](i)},has(e,t){return t in e||t in os}}))}function rg(i){return ze(i)&&"__vccOpts"in i}const Qt=(i,e)=>im(i,e,xs);function Wh(i,e,t){const n=arguments.length;return n===2?ut(e)&&!Fe(e)?xo(e)?st(i,null,[e]):st(i,e):st(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&xo(t)&&(t=[t]),st(i,e,t))}const sg=Symbol(""),og=()=>Gn(sg),ag="3.2.47",lg="http://www.w3.org/2000/svg",Ai=typeof document<"u"?document:null,Ic=Ai&&Ai.createElement("template"),cg={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Ai.createElementNS(lg,i):Ai.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Ai.createTextNode(i),createComment:i=>Ai.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ai.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ic.innerHTML=n?`<svg>${i}</svg>`:i;const a=Ic.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function ug(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function fg(i,e,t){const n=i.style,r=Et(t);if(t&&!r){if(e&&!Et(e))for(const s in e)t[s]==null&&Ja(n,s,"");for(const s in t)Ja(n,s,t[s])}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Nc=/\s*!important$/;function Ja(i,e,t){if(Fe(t))t.forEach(n=>Ja(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=hg(i,e);Nc.test(t)?i.setProperty(Dr(n),t.replace(Nc,""),"important"):i[n]=t}}const Oc=["Webkit","Moz","ms"],Jo={};function hg(i,e){const t=Jo[e];if(t)return t;let n=xr(e);if(n!=="filter"&&n in i)return Jo[e]=n;n=Jf(n);for(let r=0;r<Oc.length;r++){const s=Oc[r]+n;if(s in i)return Jo[e]=s}return e}const Fc="http://www.w3.org/1999/xlink";function dg(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Fc,e.slice(6,e.length)):i.setAttributeNS(Fc,e,t);else{const s=fp(e);t==null||s&&!$f(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function pg(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=$f(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function mg(i,e,t,n){i.addEventListener(e,t,n)}function gg(i,e,t,n){i.removeEventListener(e,t,n)}function _g(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=xg(e);if(n){const c=s[e]=bg(n,r);mg(i,a,c,l)}else o&&(gg(i,a,o,l),s[e]=void 0)}}const Uc=/(?:Once|Passive|Capture)$/;function xg(i){let e;if(Uc.test(i)){e={};let n;for(;n=i.match(Uc);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Dr(i.slice(2)),e]}let Qo=0;const vg=Promise.resolve(),yg=()=>Qo||(vg.then(()=>Qo=0),Qo=Date.now());function bg(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;dn(Mg(n,t.value),e,5,[n])};return t.value=i,t.attached=yg(),t}function Mg(i,e){if(Fe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const zc=/^on[a-z]/,Sg=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?ug(i,n,r):e==="style"?fg(i,t,n):wo(e)?vl(e)||_g(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wg(i,e,n,r))?pg(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),dg(i,e,n,r))};function wg(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&zc.test(e)&&ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||zc.test(e)&&Et(t)?!1:e in i}const Tg=zt({patchProp:Sg},cg);let kc;function Eg(){return kc||(kc=Vm(Tg))}const Ag=(...i)=>{const e=Eg().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Cg(n);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Cg(i){return Et(i)?document.querySelector(i):i}var Rg=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Lg=Symbol();var Bc;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(Bc||(Bc={}));function Pg(){const i=Sp(!0),e=i.run(()=>ph({}));let t=[],n=[];const r=Rl({install(s){r._a=s,s.provide(Lg,r),s.config.globalProperties.$pinia=r,n.forEach(o=>t.push(o)),n=[]},use(s){return!this._a&&!Rg?n.push(s):t.push(s),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return r}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ar=typeof window<"u";function Dg(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const et=Object.assign;function ea(i,e){const t={};for(const n in e){const r=e[n];t[n]=mn(r)?r.map(i):i(r)}return t}const ls=()=>{},mn=Array.isArray,Ig=/\/$/,Ng=i=>i.replace(Ig,"");function ta(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=zg(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:o}}function Og(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Hc(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function Fg(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&Sr(e.matched[n],t.matched[r])&&jh(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Sr(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function jh(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!Ug(i[t],e[t]))return!1;return!0}function Ug(i,e){return mn(i)?Vc(i,e):mn(e)?Vc(e,i):i===e}function Vc(i,e){return mn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function zg(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let r=t.length-1,s,o;for(s=0;s<n.length;s++)if(o=n[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var vs;(function(i){i.pop="pop",i.push="push"})(vs||(vs={}));var cs;(function(i){i.back="back",i.forward="forward",i.unknown=""})(cs||(cs={}));function kg(i){if(!i)if(ar){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),Ng(i)}const Bg=/^[^#]+#/;function Hg(i,e){return i.replace(Bg,"#")+e}function Vg(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const Oo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gg(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Vg(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Gc(i,e){return(history.state?history.state.position-e:-1)+i}const Qa=new Map;function Wg(i,e){Qa.set(i,e)}function jg(i){const e=Qa.get(i);return Qa.delete(i),e}let qg=()=>location.protocol+"//"+location.host;function qh(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Hc(l,"")}return Hc(t,i)+n+r}function Xg(i,e,t,n){let r=[],s=[],o=null;const a=({state:h})=>{const p=qh(i,location),g=t.value,d=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}m=d?h.position-d.position:0}else n(p);r.forEach(x=>{x(t.value,g,{delta:m,type:vs.pop,direction:m?m>0?cs.forward:cs.back:cs.unknown})})};function l(){o=t.value}function c(h){r.push(h);const p=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(et({},h.state,{scroll:Oo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Wc(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?Oo():null}}function Kg(i){const{history:e,location:t}=window,n={value:qh(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:qg()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=et({},e.state,Wc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=et({},r.value,e.state,{forward:l,scroll:Oo()});s(u.current,u,!0);const f=et({},Wc(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function Yg(i){i=kg(i);const e=Kg(i),t=Xg(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=et({location:"",base:i,go:n,createHref:Hg.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function $g(i){return typeof i=="string"||i&&typeof i=="object"}function Xh(i){return typeof i=="string"||typeof i=="symbol"}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Kh=Symbol("");var jc;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(jc||(jc={}));function wr(i,e){return et(new Error,{type:i,[Kh]:!0},e)}function Ln(i,e){return i instanceof Error&&Kh in i&&(e==null||!!(i.type&e))}const qc="[^/]+?",Zg={sensitive:!1,strict:!1,start:!0,end:!0},Jg=/[.+*?^${}()[\]/\\]/g;function Qg(i,e){const t=et({},Zg,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Jg,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:d,optional:m,regexp:x}=h;s.push({name:g,repeatable:d,optional:m});const b=x||qc;if(b!==qc){p+=10;try{new RegExp(`(${b})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+y.message)}}let _=d?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),r+=_,p+=20,m&&(p+=-8),d&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:d,optional:m}=p,x=g in c?c[g]:"";if(mn(x)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=mn(x)?x.join("/"):x;if(!b)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function e_(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function t_(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=e_(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(Xc(n))return 1;if(Xc(r))return-1}return r.length-n.length}function Xc(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const n_={type:0,value:""},i_=/[a-zA-Z0-9_]/;function r_(i){if(!i)return[[]];if(i==="/")return[[n_]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:i_.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function s_(i,e,t){const n=Qg(r_(i.path),t),r=et(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function o_(i,e){const t=[],n=new Map;e=$c({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,f,h){const p=!h,g=a_(u);g.aliasOf=h&&h.record;const d=$c(e,u),m=[g];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of _)m.push(et({},g,{components:h?h.record.components:g.components,path:y,aliasOf:h?h.record:g}))}let x,b;for(const _ of m){const{path:y}=_;if(f&&y[0]!=="/"){const S=f.record.path,C=S[S.length-1]==="/"?"":"/";_.path=f.record.path+(y&&C+y)}if(x=s_(_,f,d),h?h.alias.push(x):(b=b||x,b!==x&&b.alias.push(x),p&&u.name&&!Yc(x)&&o(u.name)),g.children){const S=g.children;for(let C=0;C<S.length;C++)s(S[C],x,h&&h.children[C])}h=h||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return b?()=>{o(b)}:ls}function o(u){if(Xh(u)){const f=n.get(u);f&&(n.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&t_(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Yh(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Yc(u)&&n.set(u.record.name,u)}function c(u,f){let h,p={},g,d;if("name"in u&&u.name){if(h=n.get(u.name),!h)throw wr(1,{location:u});d=h.record.name,p=et(Kc(f.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Kc(u.params,h.keys.map(b=>b.name))),g=h.stringify(p)}else if("path"in u)g=u.path,h=t.find(b=>b.re.test(g)),h&&(p=h.parse(g),d=h.record.name);else{if(h=f.name?n.get(f.name):t.find(b=>b.re.test(f.path)),!h)throw wr(1,{location:u,currentLocation:f});d=h.record.name,p=et({},f.params,u.params),g=h.stringify(p)}const m=[];let x=h;for(;x;)m.unshift(x.record),x=x.parent;return{name:d,path:g,params:p,matched:m,meta:c_(m)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Kc(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function a_(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:l_(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function l_(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Yc(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function c_(i){return i.reduce((e,t)=>et(e,t.meta),{})}function $c(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function Yh(i,e){return e.children.some(t=>t===i||Yh(i,t))}const $h=/#/g,u_=/&/g,f_=/\//g,h_=/=/g,d_=/\?/g,Zh=/\+/g,p_=/%5B/g,m_=/%5D/g,Jh=/%5E/g,g_=/%60/g,Qh=/%7B/g,__=/%7C/g,ed=/%7D/g,x_=/%20/g;function Ul(i){return encodeURI(""+i).replace(__,"|").replace(p_,"[").replace(m_,"]")}function v_(i){return Ul(i).replace(Qh,"{").replace(ed,"}").replace(Jh,"^")}function el(i){return Ul(i).replace(Zh,"%2B").replace(x_,"+").replace($h,"%23").replace(u_,"%26").replace(g_,"`").replace(Qh,"{").replace(ed,"}").replace(Jh,"^")}function y_(i){return el(i).replace(h_,"%3D")}function b_(i){return Ul(i).replace($h,"%23").replace(d_,"%3F")}function M_(i){return i==null?"":b_(i).replace(f_,"%2F")}function vo(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function S_(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Zh," "),o=s.indexOf("="),a=vo(o<0?s:s.slice(0,o)),l=o<0?null:vo(s.slice(o+1));if(a in e){let c=e[a];mn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Zc(i){let e="";for(let t in i){const n=i[t];if(t=y_(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(mn(n)?n.map(s=>s&&el(s)):[n&&el(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function w_(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=mn(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const T_=Symbol(""),Jc=Symbol(""),zl=Symbol(""),td=Symbol(""),tl=Symbol("");function Vr(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function oi(i,e,t,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(wr(4,{from:t,to:e})):f instanceof Error?a(f):$g(f)?a(wr(2,{from:e,to:f})):(s&&n.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=i.call(n&&n.instances[r],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function na(i,e,t,n){const r=[];for(const s of i)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(E_(a)){const c=(a.__vccOpts||a)[e];c&&r.push(oi(c,t,n,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Dg(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&oi(h,t,n,s,o)()}))}}return r}function E_(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Qc(i){const e=Gn(zl),t=Gn(td),n=Qt(()=>e.resolve(dr(i.to))),r=Qt(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Sr.bind(null,u));if(h>-1)return h;const p=eu(l[c-2]);return c>1&&eu(u)===p&&f[f.length-1].path!==p?f.findIndex(Sr.bind(null,l[c-2])):h}),s=Qt(()=>r.value>-1&&L_(t.params,n.value.params)),o=Qt(()=>r.value>-1&&r.value===t.matched.length-1&&jh(t.params,n.value.params));function a(l={}){return R_(l)?e[dr(i.replace)?"replace":"push"](dr(i.to)).catch(ls):Promise.resolve()}return{route:n,href:Qt(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const A_=Bi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qc,setup(i,{slots:e}){const t=As(Qc(i)),{options:n}=Gn(zl),r=Qt(()=>({[tu(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[tu(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:Wh("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),C_=A_;function R_(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function L_(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!mn(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function eu(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const tu=(i,e,t)=>i??e??t,P_=Bi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=Gn(tl),r=Qt(()=>i.route||n.value),s=Gn(Jc,0),o=Qt(()=>{let c=dr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Qt(()=>r.value.matched[o.value]);ao(Jc,Qt(()=>o.value+1)),ao(T_,a),ao(tl,r);const l=ph();return lo(()=>[l.value,a.value,i.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Sr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,f=a.value,h=f&&f.components[u];if(!h)return nu(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Wh(h,et({},g,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return nu(t.default,{Component:m,route:c})||m}}});function nu(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const D_=P_;function I_(i){const e=o_(i.routes,i),t=i.parseQuery||S_,n=i.stringifyQuery||Zc,r=i.history,s=Vr(),o=Vr(),a=Vr(),l=Qp(Jn);let c=Jn;ar&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ea.bind(null,N=>""+N),f=ea.bind(null,M_),h=ea.bind(null,vo);function p(N,I){let ie,oe;return Xh(N)?(ie=e.getRecordMatcher(N),oe=I):oe=N,e.addRoute(oe,ie)}function g(N){const I=e.getRecordMatcher(N);I&&e.removeRoute(I)}function d(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function x(N,I){if(I=et({},I||l.value),typeof N=="string"){const T=ta(t,N,I.path),R=e.resolve({path:T.path},I),j=r.createHref(T.fullPath);return et(T,R,{params:h(R.params),hash:vo(T.hash),redirectedFrom:void 0,href:j})}let ie;if("path"in N)ie=et({},N,{path:ta(t,N.path,I.path).path});else{const T=et({},N.params);for(const R in T)T[R]==null&&delete T[R];ie=et({},N,{params:f(N.params)}),I.params=f(I.params)}const oe=e.resolve(ie,I),me=N.hash||"";oe.params=u(h(oe.params));const pe=Og(n,et({},N,{hash:v_(me),path:oe.path})),Te=r.createHref(pe);return et({fullPath:pe,hash:me,query:n===Zc?w_(N.query):N.query||{}},oe,{redirectedFrom:void 0,href:Te})}function b(N){return typeof N=="string"?ta(t,N,l.value.path):et({},N)}function _(N,I){if(c!==N)return wr(8,{from:I,to:N})}function y(N){return D(N)}function S(N){return y(et(b(N),{replace:!0}))}function C(N){const I=N.matched[N.matched.length-1];if(I&&I.redirect){const{redirect:ie}=I;let oe=typeof ie=="function"?ie(N):ie;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=b(oe):{path:oe},oe.params={}),et({query:N.query,hash:N.hash,params:"path"in oe?{}:N.params},oe)}}function D(N,I){const ie=c=x(N),oe=l.value,me=N.state,pe=N.force,Te=N.replace===!0,T=C(ie);if(T)return D(et(b(T),{state:typeof T=="object"?et({},me,T.state):me,force:pe,replace:Te}),I||ie);const R=ie;R.redirectedFrom=I;let j;return!pe&&Fg(n,oe,ie)&&(j=wr(16,{to:R,from:oe}),ue(oe,oe,!0,!1)),(j?Promise.resolve(j):E(R,oe)).catch(Y=>Ln(Y)?Ln(Y,2)?Y:ce(Y):$(Y,R,oe)).then(Y=>{if(Y){if(Ln(Y,2))return D(et({replace:Te},b(Y.to),{state:typeof Y.to=="object"?et({},me,Y.to.state):me,force:pe}),I||R)}else Y=W(R,oe,!0,Te,me);return P(R,oe,Y),Y})}function M(N,I){const ie=_(N,I);return ie?Promise.reject(ie):Promise.resolve()}function E(N,I){let ie;const[oe,me,pe]=N_(N,I);ie=na(oe.reverse(),"beforeRouteLeave",N,I);for(const T of oe)T.leaveGuards.forEach(R=>{ie.push(oi(R,N,I))});const Te=M.bind(null,N,I);return ie.push(Te),Wi(ie).then(()=>{ie=[];for(const T of s.list())ie.push(oi(T,N,I));return ie.push(Te),Wi(ie)}).then(()=>{ie=na(me,"beforeRouteUpdate",N,I);for(const T of me)T.updateGuards.forEach(R=>{ie.push(oi(R,N,I))});return ie.push(Te),Wi(ie)}).then(()=>{ie=[];for(const T of N.matched)if(T.beforeEnter&&!I.matched.includes(T))if(mn(T.beforeEnter))for(const R of T.beforeEnter)ie.push(oi(R,N,I));else ie.push(oi(T.beforeEnter,N,I));return ie.push(Te),Wi(ie)}).then(()=>(N.matched.forEach(T=>T.enterCallbacks={}),ie=na(pe,"beforeRouteEnter",N,I),ie.push(Te),Wi(ie))).then(()=>{ie=[];for(const T of o.list())ie.push(oi(T,N,I));return ie.push(Te),Wi(ie)}).catch(T=>Ln(T,8)?T:Promise.reject(T))}function P(N,I,ie){for(const oe of a.list())oe(N,I,ie)}function W(N,I,ie,oe,me){const pe=_(N,I);if(pe)return pe;const Te=I===Jn,T=ar?history.state:{};ie&&(oe||Te?r.replace(N.fullPath,et({scroll:Te&&T&&T.scroll},me)):r.push(N.fullPath,me)),l.value=N,ue(N,I,ie,Te),ce()}let Z;function k(){Z||(Z=r.listen((N,I,ie)=>{if(!xe.listening)return;const oe=x(N),me=C(oe);if(me){D(et(me,{replace:!0}),oe).catch(ls);return}c=oe;const pe=l.value;ar&&Wg(Gc(pe.fullPath,ie.delta),Oo()),E(oe,pe).catch(Te=>Ln(Te,12)?Te:Ln(Te,2)?(D(Te.to,oe).then(T=>{Ln(T,20)&&!ie.delta&&ie.type===vs.pop&&r.go(-1,!1)}).catch(ls),Promise.reject()):(ie.delta&&r.go(-ie.delta,!1),$(Te,oe,pe))).then(Te=>{Te=Te||W(oe,pe,!1),Te&&(ie.delta&&!Ln(Te,8)?r.go(-ie.delta,!1):ie.type===vs.pop&&Ln(Te,20)&&r.go(-1,!1)),P(oe,pe,Te)}).catch(ls)}))}let z=Vr(),X=Vr(),Q;function $(N,I,ie){ce(N);const oe=X.list();return oe.length?oe.forEach(me=>me(N,I,ie)):console.error(N),Promise.reject(N)}function H(){return Q&&l.value!==Jn?Promise.resolve():new Promise((N,I)=>{z.add([N,I])})}function ce(N){return Q||(Q=!N,k(),z.list().forEach(([I,ie])=>N?ie(N):I()),z.reset()),N}function ue(N,I,ie,oe){const{scrollBehavior:me}=i;if(!ar||!me)return Promise.resolve();const pe=!ie&&jg(Gc(N.fullPath,0))||(oe||!ie)&&history.state&&history.state.scroll||null;return vh().then(()=>me(N,I,pe)).then(Te=>Te&&Gg(Te)).catch(Te=>$(Te,N,I))}const we=N=>r.go(N);let G;const le=new Set,xe={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:d,resolve:x,options:i,push:y,replace:S,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:H,install(N){const I=this;N.component("RouterLink",C_),N.component("RouterView",D_),N.config.globalProperties.$router=I,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>dr(l)}),ar&&!G&&l.value===Jn&&(G=!0,y(r.location).catch(me=>{}));const ie={};for(const me in Jn)ie[me]=Qt(()=>l.value[me]);N.provide(zl,I),N.provide(td,As(ie)),N.provide(tl,l);const oe=N.unmount;le.add(N),N.unmount=function(){le.delete(N),le.size<1&&(c=Jn,Z&&Z(),Z=null,l.value=Jn,G=!1,Q=!1),oe()}}};return xe}function Wi(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function N_(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>Sr(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Sr(c,l))||r.push(l))}return[t,n,r]}const $n=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="149",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},O_=0,iu=1,F_=2,nd=1,U_=2,ns=3,Kn=0,Yt=1,Bn=2,ui=0,mr=1,ru=2,su=3,ou=4,z_=5,lr=100,k_=101,B_=102,au=103,lu=104,H_=200,V_=201,G_=202,W_=203,id=204,rd=205,j_=206,q_=207,X_=208,K_=209,Y_=210,$_=0,Z_=1,J_=2,nl=3,Q_=4,e0=5,t0=6,n0=7,sd=0,i0=1,r0=2,Wn=0,s0=1,o0=2,a0=3,od=4,l0=5,ad=300,Tr=301,Er=302,yo=303,il=304,Fo=306,Ar=1e3,Bt=1001,bo=1002,Mt=1003,rl=1004,uo=1005,mt=1006,ld=1007,hi=1008,Fi=1009,c0=1010,u0=1011,cd=1012,f0=1013,Ri=1014,fn=1015,Hn=1016,h0=1017,d0=1018,gr=1020,p0=1021,en=1023,m0=1024,g0=1025,Ni=1026,Cr=1027,_0=1028,x0=1029,v0=1030,y0=1031,b0=1033,ia=33776,ra=33777,sa=33778,oa=33779,cu=35840,uu=35841,fu=35842,hu=35843,M0=36196,du=37492,pu=37496,mu=37808,gu=37809,_u=37810,xu=37811,vu=37812,yu=37813,bu=37814,Mu=37815,Su=37816,wu=37817,Tu=37818,Eu=37819,Au=37820,Cu=37821,aa=36492,S0=36283,Ru=36284,Lu=36285,Pu=36286,ys=2300,Rr=2301,la=2302,Du=2400,Iu=2401,Nu=2402,w0=2500,T0=0,ud=1,sl=2,di=3e3,Ye=3001,E0=3200,A0=3201,fd=0,C0=1,vn="srgb",bs="srgb-linear",ca=7680,R0=519,ol=35044,Ou="300 es",al=1035;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fu=1234567;const us=Math.PI/180,Ms=180/Math.PI;function pn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function Bl(i,e){return(i%e+e)%e}function L0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function P0(i,e,t){return i!==e?(t-i)/(e-i):0}function fs(i,e,t){return(1-t)*i+t*e}function D0(i,e,t,n){return fs(i,e,1-Math.exp(-t*n))}function I0(i,e=1){return e-Math.abs(Bl(i,e*2)-e)}function N0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function O0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function F0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function U0(i,e){return i+Math.random()*(e-i)}function z0(i){return i*(.5-Math.random())}function k0(i){i!==void 0&&(Fu=i);let e=Fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B0(i){return i*us}function H0(i){return i*Ms}function ll(i){return(i&i-1)===0&&i!==0}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function V0(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var G0=Object.freeze({__proto__:null,DEG2RAD:us,RAD2DEG:Ms,ceilPowerOfTwo:hd,clamp:St,damp:D0,degToRad:B0,denormalize:Vn,euclideanModulo:Bl,floorPowerOfTwo:Mo,generateUUID:pn,inverseLerp:P0,isPowerOfTwo:ll,lerp:fs,mapLinear:L0,normalize:it,pingpong:I0,radToDeg:H0,randFloat:U0,randFloatSpread:z0,randInt:F0,seededRandom:k0,setQuaternionFromProperEuler:V0,smootherstep:O0,smoothstep:N0});class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],d=r[0],m=r[3],x=r[6],b=r[1],_=r[4],y=r[7],S=r[2],C=r[5],D=r[8];return s[0]=o*d+a*b+l*S,s[3]=o*m+a*_+l*C,s[6]=o*x+a*y+l*D,s[1]=c*d+u*b+f*S,s[4]=c*m+u*_+f*C,s[7]=c*x+u*y+f*D,s[2]=h*d+p*b+g*S,s[5]=h*m+p*_+g*C,s[8]=h*x+p*y+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(r*c-u*n)*d,e[2]=(a*n-r*o)*d,e[3]=h*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new Kt;function dd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fa={[vn]:{[bs]:Oi},[bs]:{[vn]:fo}},It={legacyMode:!0,get workingColorSpace(){return bs},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(fa[e]&&fa[e][t]!==void 0){const n=fa[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pt={r:0,g:0,b:0},rn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function ha(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Us(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=It.workingColorSpace){if(e=Bl(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ha(o,s,e+1/3),this.g=ha(o,s,e),this.b=ha(o,s,e-1/3)}return It.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,It.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,It.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,It.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,It.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=vn){const n=pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return It.fromWorkingColorSpace(Us(this,pt),e),St(pt.r*255,0,255)<<16^St(pt.g*255,0,255)<<8^St(pt.b*255,0,255)<<0}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(Us(this,pt),t);const n=pt.r,r=pt.g,s=pt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(Us(this,pt),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=vn){return It.fromWorkingColorSpace(Us(this,pt),e),e!==vn?`color(${e} ${pt.r} ${pt.g} ${pt.b})`:`rgb(${pt.r*255|0},${pt.g*255|0},${pt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(rn),rn.h+=e,rn.s+=t,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(Fs);const n=fs(rn.h,Fs.h,t),r=fs(rn.s,Fs.s,t),s=fs(rn.l,Fs.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ke.NAMES=pd;let Xi;class md{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=Ss("canvas")),Xi.width=e.width,Xi.height=e.height;const n=Xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class gd{constructor(e=null){this.isSource=!0,this.uuid=pn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(da(r[o].image)):s.push(da(r[o]))}else s=da(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?md.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let W0=0;class wt extends Hi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Bt,r=Bt,s=mt,o=hi,a=en,l=Fi,c=wt.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=pn(),this.name="",this.source=new gd(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=ad;wt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],d=l[2],m=l[6],x=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(p+1)/2,S=(x+1)/2,C=(u+h)/4,D=(f+d)/4,M=(g+m)/4;return _>y&&_>S?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=C/n,s=D/n):y>S?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=C/r,s=M/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=D/s,r=M/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-d)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ui extends Hi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _d extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class j0 extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==p||u!==g){let m=1-a;const x=l*h+c*p+u*g+f*d,b=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){const S=Math.sqrt(_),C=Math.atan2(S,x*b);m=Math.sin(m*C)/S,a=Math.sin(a*C)/S}const y=a*b;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,f=f*m+d*y,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,f=l*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new U,Uu=new En;class Or{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)yi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(yi)}else n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox),ma.applyMatrix4(e.matrixWorld),this.union(ma);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),zs.subVectors(this.max,Gr),Ki.subVectors(e.a,Gr),Yi.subVectors(e.b,Gr),$i.subVectors(e.c,Gr),Qn.subVectors(Yi,Ki),ei.subVectors($i,Yi),bi.subVectors(Ki,$i);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-bi.z,bi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,bi.z,0,-bi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-bi.y,bi.x,0];return!ga(t,Ki,Yi,$i,zs)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,Ki,Yi,$i,zs))?!1:(ks.crossVectors(Qn,ei),t=[ks.x,ks.y,ks.z],ga(t,Ki,Yi,$i,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new U,new U,new U,new U,new U,new U,new U,new U],yi=new U,ma=new Or,Ki=new U,Yi=new U,$i=new U,Qn=new U,ei=new U,bi=new U,Gr=new U,zs=new U,ks=new U,Mi=new U;function ga(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Mi.fromArray(i,s);const a=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),u=n.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const q0=new Or,Wr=new U,_a=new U;class Fr{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):q0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);const t=Wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Wr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(_a)),this.expandByPoint(Wr.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new U,xa=new U,Bs=new U,ti=new U,va=new U,Hs=new U,ya=new U;class Hl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.direction).multiplyScalar(t).add(this.origin),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xa.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(xa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Bs),a=ti.dot(this.direction),l=-ti.dot(Bs),c=ti.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Bs).multiplyScalar(h).add(xa),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),r=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,r,s){va.subVectors(t,e),Hs.subVectors(n,e),ya.crossVectors(va,Hs);let o=this.direction.dot(ya),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const l=a*this.direction.dot(Hs.crossVectors(ti,Hs));if(l<0)return null;const c=a*this.direction.dot(va.cross(ti));if(c<0||l+c>o)return null;const u=-a*ti.dot(ya);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,f,h,p,g,d,m){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=u,x[10]=f,x[14]=h,x[3]=p,x[7]=g,x[11]=d,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X0,e,K0)}lookAt(e,t,n){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ni.crossVectors(n,jt),ni.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ni.crossVectors(n,jt)),ni.normalize(),Vs.crossVectors(jt,ni),r[0]=ni.x,r[4]=Vs.x,r[8]=jt.x,r[1]=ni.y,r[5]=Vs.y,r[9]=jt.y,r[2]=ni.z,r[6]=Vs.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],d=n[6],m=n[10],x=n[14],b=n[3],_=n[7],y=n[11],S=n[15],C=r[0],D=r[4],M=r[8],E=r[12],P=r[1],W=r[5],Z=r[9],k=r[13],z=r[2],X=r[6],Q=r[10],$=r[14],H=r[3],ce=r[7],ue=r[11],we=r[15];return s[0]=o*C+a*P+l*z+c*H,s[4]=o*D+a*W+l*X+c*ce,s[8]=o*M+a*Z+l*Q+c*ue,s[12]=o*E+a*k+l*$+c*we,s[1]=u*C+f*P+h*z+p*H,s[5]=u*D+f*W+h*X+p*ce,s[9]=u*M+f*Z+h*Q+p*ue,s[13]=u*E+f*k+h*$+p*we,s[2]=g*C+d*P+m*z+x*H,s[6]=g*D+d*W+m*X+x*ce,s[10]=g*M+d*Z+m*Q+x*ue,s[14]=g*E+d*k+m*$+x*we,s[3]=b*C+_*P+y*z+S*H,s[7]=b*D+_*W+y*X+S*ce,s[11]=b*M+_*Z+y*Q+S*ue,s[15]=b*E+_*k+y*$+S*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],d=e[7],m=e[11],x=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*p-n*l*p)+d*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+n*o*p+s*a*u-n*c*u)+x*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],d=e[13],m=e[14],x=e[15],b=f*m*c-d*h*c+d*l*p-a*m*p-f*l*x+a*h*x,_=g*h*c-u*m*c-g*l*p+o*m*p+u*l*x-o*h*x,y=u*d*c-g*f*c+g*a*p-o*d*p-u*a*x+o*f*x,S=g*f*l-u*d*l-g*a*h+o*d*h+u*a*m-o*f*m,C=t*b+n*_+r*y+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=b*D,e[1]=(d*h*s-f*m*s-d*r*p+n*m*p+f*r*x-n*h*x)*D,e[2]=(a*m*s-d*l*s+d*r*c-n*m*c-a*r*x+n*l*x)*D,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*p-n*l*p)*D,e[4]=_*D,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*x+t*h*x)*D,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*x-t*l*x)*D,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*D,e[8]=y*D,e[9]=(g*f*s-u*d*s-g*n*p+t*d*p+u*n*x-t*f*x)*D,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*x+t*a*x)*D,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*p-t*a*p)*D,e[12]=S*D,e[13]=(u*d*r-g*f*r+g*n*h-t*d*h-u*n*m+t*f*m)*D,e[14]=(g*a*r-o*d*r-g*n*l+t*d*l+o*n*m-t*a*m)*D,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,d=o*u,m=o*f,x=a*f,b=l*c,_=l*u,y=l*f,S=n.x,C=n.y,D=n.z;return r[0]=(1-(d+x))*S,r[1]=(p+y)*S,r[2]=(g-_)*S,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(h+x))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+_)*D,r[9]=(m-b)*D,r[10]=(1-(h+d))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),a=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,u=1/o,f=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,t.setFromRotationMatrix(sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),f=(t+e)*l,h=(n+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zi=new U,sn=new Ve,X0=new U(0,0,0),K0=new U(1,1,1),ni=new U,Vs=new U,jt=new U,zu=new Ve,ku=new En;class Uo{constructor(e=0,t=0,n=0,r=Uo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Uo.DEFAULT_ORDER="XYZ";class xd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y0=0;const Bu=new U,Ji=new En,In=new Ve,Gs=new U,jr=new U,$0=new U,Z0=new En,Hu=new U(1,0,0),Vu=new U(0,1,0),Gu=new U(0,0,1),J0={type:"added"},Wu={type:"removed"};class ct extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new U,t=new Uo,n=new En,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Kt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gs.copy(e):Gs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(jr,Gs,this.up):In.lookAt(Gs,jr,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(In),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(J0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Wu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,$0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ct.DEFAULT_UP=new U(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new U,Nn=new U,ba=new U,On=new U,Qi=new U,er=new U,ju=new U,Ma=new U,Sa=new U,wa=new U;class zn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){on.subVectors(r,t),Nn.subVectors(n,t),ba.subVectors(e,t);const o=on.dot(on),a=on.dot(Nn),l=on.dot(ba),c=Nn.dot(Nn),u=Nn.dot(ba),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,On),On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,On),l.set(0,0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l}static isFrontFacing(e,t,n,r){return on.subVectors(n,t),Nn.subVectors(e,t),on.cross(Nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),on.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return zn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Qi.subVectors(r,n),er.subVectors(s,n),Ma.subVectors(e,n);const l=Qi.dot(Ma),c=er.dot(Ma);if(l<=0&&c<=0)return t.copy(n);Sa.subVectors(e,r);const u=Qi.dot(Sa),f=er.dot(Sa);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Qi,o);wa.subVectors(e,s);const p=Qi.dot(wa),g=er.dot(wa);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(er,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return ju.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(ju,a);const x=1/(m+d+h);return o=d*x,a=h*x,t.copy(n).addScaledVector(Qi,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Q0=0;class Tn extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=mr,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=id,this.blendDst=rd,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Li extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new U,Ws=new Ne;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ol,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ol&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class vd extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yd extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jn extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ex=0;const Zt=new Ve,Ta=new ct,tr=new U,qt=new Or,qr=new Or,bt=new U;class _n extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?yd:vd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ta.lookAt(e),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(qt.min,qr.min),qt.expandByPoint(bt),bt.addVectors(qt.max,qr.max),qt.expandByPoint(bt)):(qt.expandByPoint(qr.min),qt.expandByPoint(qr.max))}qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(e,c),bt.add(tr)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new U,u[P]=new U;const f=new U,h=new U,p=new U,g=new Ne,d=new Ne,m=new Ne,x=new U,b=new U;function _(P,W,Z){f.fromArray(r,P*3),h.fromArray(r,W*3),p.fromArray(r,Z*3),g.fromArray(o,P*2),d.fromArray(o,W*2),m.fromArray(o,Z*2),h.sub(f),p.sub(f),d.sub(g),m.sub(g);const k=1/(d.x*m.y-m.x*d.y);isFinite(k)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(k),b.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(k),c[P].add(x),c[W].add(x),c[Z].add(x),u[P].add(b),u[W].add(b),u[Z].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,W=y.length;P<W;++P){const Z=y[P],k=Z.start,z=Z.count;for(let X=k,Q=k+z;X<Q;X+=3)_(n[X+0],n[X+1],n[X+2])}const S=new U,C=new U,D=new U,M=new U;function E(P){D.fromArray(s,P*3),M.copy(D);const W=c[P];S.copy(W),S.sub(D.multiplyScalar(D.dot(W))).normalize(),C.crossVectors(M,W);const k=C.dot(u[P])<0?-1:1;l[P*4]=S.x,l[P*4+1]=S.y,l[P*4+2]=S.z,l[P*4+3]=k}for(let P=0,W=y.length;P<W;++P){const Z=y[P],k=Z.start,z=Z.count;for(let X=k,Q=k+z;X<Q;X+=3)E(n[X+0]),E(n[X+1]),E(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let x=0;x<u;x++)h[g++]=c[p++]}return new Tt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const qu=new Ve,nr=new Hl,Ea=new Fr,Xr=new U,Kr=new U,Yr=new U,Aa=new U,js=new U,qs=new Ne,Xs=new Ne,Ks=new Ne,Ca=new U,Ys=new U;class tn extends ct{constructor(e=new _n,t=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Aa.fromBufferAttribute(f,e),o?js.addScaledVector(Aa,u):js.addScaledVector(Aa.sub(t),u))}t.add(js)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),e.ray.intersectsSphere(Ea)===!1)||(qu.copy(s).invert(),nr.copy(e.ray).applyMatrix4(qu),n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=r[d.materialIndex],x=Math.max(d.start,h.start),b=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let _=x,y=b;_<y;_+=3){const S=a.getX(_),C=a.getX(_+1),D=a.getX(_+2);o=$s(this,m,e,nr,c,u,S,C,D),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const x=a.getX(d),b=a.getX(d+1),_=a.getX(d+2);o=$s(this,r,e,nr,c,u,x,b,_),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=r[d.materialIndex],x=Math.max(d.start,h.start),b=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let _=x,y=b;_<y;_+=3){const S=_,C=_+1,D=_+2;o=$s(this,m,e,nr,c,u,S,C,D),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const x=d,b=d+1,_=d+2;o=$s(this,r,e,nr,c,u,x,b,_),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function tx(i,e,t,n,r,s,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Kn,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:i}}function $s(i,e,t,n,r,s,o,a,l){i.getVertexPosition(o,Xr),i.getVertexPosition(a,Kr),i.getVertexPosition(l,Yr);const c=tx(i,e,t,n,Xr,Kr,Yr,Ca);if(c){r&&(qs.fromBufferAttribute(r,o),Xs.fromBufferAttribute(r,a),Ks.fromBufferAttribute(r,l),c.uv=zn.getUV(Ca,Xr,Kr,Yr,qs,Xs,Ks,new Ne)),s&&(qs.fromBufferAttribute(s,o),Xs.fromBufferAttribute(s,a),Ks.fromBufferAttribute(s,l),c.uv2=zn.getUV(Ca,Xr,Kr,Yr,qs,Xs,Ks,new Ne));const u={a:o,b:a,c:l,normal:new U,materialIndex:0};zn.getNormal(Xr,Kr,Yr,u.normal),c.face=u}return c}class Cs extends _n{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(u,3)),this.setAttribute("uv",new jn(f,2));function g(d,m,x,b,_,y,S,C,D,M,E){const P=y/D,W=S/M,Z=y/2,k=S/2,z=C/2,X=D+1,Q=M+1;let $=0,H=0;const ce=new U;for(let ue=0;ue<Q;ue++){const we=ue*W-k;for(let G=0;G<X;G++){const le=G*P-Z;ce[d]=le*b,ce[m]=we*_,ce[x]=z,c.push(ce.x,ce.y,ce.z),ce[d]=0,ce[m]=0,ce[x]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(G/D),f.push(1-ue/M),$+=1}}for(let ue=0;ue<M;ue++)for(let we=0;we<D;we++){const G=h+we+X*ue,le=h+we+X*(ue+1),xe=h+(we+1)+X*(ue+1),N=h+(we+1)+X*ue;l.push(G,le,N),l.push(le,xe,N),H+=6}a.addGroup(p,H,E),p+=H,h+=$}}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Lr(i[t]);for(const r in n)e[r]=n[r]}return e}function nx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bd(i){return i.getRenderTarget()===null&&i.outputEncoding===Ye?vn:bs}const ix={clone:Lr,merge:Ft};var rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rx,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Md extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends Md{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class ox extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Ut(ir,rr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Ut(ir,rr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ut(ir,rr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ut(ir,rr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ut(ir,rr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ut(ir,rr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Wn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Sd extends wt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ax extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Sd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cs(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ui});s.uniforms.tEquirect.value=t;const o=new tn(r,s),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=mt),new ox(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ra=new U,lx=new U,cx=new Kt;class wi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ra.subVectors(n,t).cross(lx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ra),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cx.getNormalMatrix(e),r=this.coplanarPoint(Ra).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Fr,Zs=new U;class Vl{constructor(e=new wi,t=new wi,n=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],d=n[11],m=n[12],x=n[13],b=n[14],_=n[15];return t[0].setComponents(a-r,f-l,d-h,_-m).normalize(),t[1].setComponents(a+r,f+l,d+h,_+m).normalize(),t[2].setComponents(a+s,f+c,d+p,_+x).normalize(),t[3].setComponents(a-s,f-c,d-p,_-x).normalize(),t[4].setComponents(a-o,f-u,d-g,_-b).normalize(),t[5].setComponents(a+o,f+u,d+g,_+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Zs.x=r.normal.x>0?e.max.x:e.min.x,Zs.y=r.normal.y>0?e.max.y:e.min.y,Zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ux(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;i.bindBuffer(f,c),p.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Gl extends _n{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],d=[],m=[];for(let x=0;x<u;x++){const b=x*h-o;for(let _=0;_<c;_++){const y=_*f-s;g.push(y,-b,0),d.push(0,0,1),m.push(_/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let b=0;b<a;b++){const _=b+c*x,y=b+c*(x+1),S=b+1+c*(x+1),C=b+1+c*x;p.push(_,y,C),p.push(y,S,C)}this.setIndex(p),this.setAttribute("position",new jn(g,3)),this.setAttribute("normal",new jn(d,3)),this.setAttribute("uv",new jn(m,2))}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_x="vec3 transformed = vec3( position );",xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,yx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Px=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ev=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,tv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ov=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,av=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,uv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Tv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ov=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gv=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ey=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ty=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ny=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,iy=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ry=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,sy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,oy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ay=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,my=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_y=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,by=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,My=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ly=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Py=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ny=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ky=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Hy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:fx,alphamap_pars_fragment:hx,alphatest_fragment:dx,alphatest_pars_fragment:px,aomap_fragment:mx,aomap_pars_fragment:gx,begin_vertex:_x,beginnormal_vertex:xx,bsdfs:vx,iridescence_fragment:yx,bumpmap_pars_fragment:bx,clipping_planes_fragment:Mx,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:wx,clipping_planes_vertex:Tx,color_fragment:Ex,color_pars_fragment:Ax,color_pars_vertex:Cx,color_vertex:Rx,common:Lx,cube_uv_reflection_fragment:Px,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Ix,displacementmap_vertex:Nx,emissivemap_fragment:Ox,emissivemap_pars_fragment:Fx,encodings_fragment:Ux,encodings_pars_fragment:zx,envmap_fragment:kx,envmap_common_pars_fragment:Bx,envmap_pars_fragment:Hx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:ev,envmap_vertex:Gx,fog_vertex:Wx,fog_pars_vertex:jx,fog_fragment:qx,fog_pars_fragment:Xx,gradientmap_pars_fragment:Kx,lightmap_fragment:Yx,lightmap_pars_fragment:$x,lights_lambert_fragment:Zx,lights_lambert_pars_fragment:Jx,lights_pars_begin:Qx,lights_toon_fragment:tv,lights_toon_pars_fragment:nv,lights_phong_fragment:iv,lights_phong_pars_fragment:rv,lights_physical_fragment:sv,lights_physical_pars_fragment:ov,lights_fragment_begin:av,lights_fragment_maps:lv,lights_fragment_end:cv,logdepthbuf_fragment:uv,logdepthbuf_pars_fragment:fv,logdepthbuf_pars_vertex:hv,logdepthbuf_vertex:dv,map_fragment:pv,map_pars_fragment:mv,map_particle_fragment:gv,map_particle_pars_fragment:_v,metalnessmap_fragment:xv,metalnessmap_pars_fragment:vv,morphcolor_vertex:yv,morphnormal_vertex:bv,morphtarget_pars_vertex:Mv,morphtarget_vertex:Sv,normal_fragment_begin:wv,normal_fragment_maps:Tv,normal_pars_fragment:Ev,normal_pars_vertex:Av,normal_vertex:Cv,normalmap_pars_fragment:Rv,clearcoat_normal_fragment_begin:Lv,clearcoat_normal_fragment_maps:Pv,clearcoat_pars_fragment:Dv,iridescence_pars_fragment:Iv,output_fragment:Nv,packing:Ov,premultiplied_alpha_fragment:Fv,project_vertex:Uv,dithering_fragment:zv,dithering_pars_fragment:kv,roughnessmap_fragment:Bv,roughnessmap_pars_fragment:Hv,shadowmap_pars_fragment:Vv,shadowmap_pars_vertex:Gv,shadowmap_vertex:Wv,shadowmask_pars_fragment:jv,skinbase_vertex:qv,skinning_pars_vertex:Xv,skinning_vertex:Kv,skinnormal_vertex:Yv,specularmap_fragment:$v,specularmap_pars_fragment:Zv,tonemapping_fragment:Jv,tonemapping_pars_fragment:Qv,transmission_fragment:ey,transmission_pars_fragment:ty,uv_pars_fragment:ny,uv_pars_vertex:iy,uv_vertex:ry,uv2_pars_fragment:sy,uv2_pars_vertex:oy,uv2_vertex:ay,worldpos_vertex:ly,background_vert:cy,background_frag:uy,backgroundCube_vert:fy,backgroundCube_frag:hy,cube_vert:dy,cube_frag:py,depth_vert:my,depth_frag:gy,distanceRGBA_vert:_y,distanceRGBA_frag:xy,equirect_vert:vy,equirect_frag:yy,linedashed_vert:by,linedashed_frag:My,meshbasic_vert:Sy,meshbasic_frag:wy,meshlambert_vert:Ty,meshlambert_frag:Ey,meshmatcap_vert:Ay,meshmatcap_frag:Cy,meshnormal_vert:Ry,meshnormal_frag:Ly,meshphong_vert:Py,meshphong_frag:Dy,meshphysical_vert:Iy,meshphysical_frag:Ny,meshtoon_vert:Oy,meshtoon_frag:Fy,points_vert:Uy,points_frag:zy,shadow_vert:ky,shadow_frag:By,sprite_vert:Hy,sprite_frag:Vy},ve={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Kt},uv2Transform:{value:new Kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}}},bn={basic:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ft([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ft([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ft([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ft([ve.points,ve.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ft([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ft([ve.common,ve.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ft([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ft([ve.sprite,ve.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ft([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ft([ve.lights,ve.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};bn.physical={uniforms:Ft([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Js={r:0,b:0,g:0};function Gy(i,e,t,n,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,x){let b=!1,_=x.isScene===!0?x.background:null;_&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_));const y=i.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?d(a,l):_&&_.isColor&&(d(_,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Fo)?(u===void 0&&(u=new tn(new Cs(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Lr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=_.encoding!==Ye,(f!==_||h!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new tn(new Gl(2,2),new zi({name:"BackgroundMaterial",uniforms:Lr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=_.encoding!==Ye,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,x){m.getRGB(Js,bd(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function Wy(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(z,X,Q,$,H){let ce=!1;if(o){const ue=d($,Q,X);c!==ue&&(c=ue,p(c.object)),ce=x(z,$,Q,H),ce&&b(z,$,Q,H)}else{const ue=X.wireframe===!0;(c.geometry!==$.id||c.program!==Q.id||c.wireframe!==ue)&&(c.geometry=$.id,c.program=Q.id,c.wireframe=ue,ce=!0)}H!==null&&t.update(H,34963),(ce||u)&&(u=!1,M(z,X,Q,$),H!==null&&i.bindBuffer(34963,t.get(H).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(z){return n.isWebGL2?i.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?i.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function d(z,X,Q){const $=Q.wireframe===!0;let H=a[z.id];H===void 0&&(H={},a[z.id]=H);let ce=H[X.id];ce===void 0&&(ce={},H[X.id]=ce);let ue=ce[$];return ue===void 0&&(ue=m(h()),ce[$]=ue),ue}function m(z){const X=[],Q=[],$=[];for(let H=0;H<r;H++)X[H]=0,Q[H]=0,$[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Q,attributeDivisors:$,object:z,attributes:{},index:null}}function x(z,X,Q,$){const H=c.attributes,ce=X.attributes;let ue=0;const we=Q.getAttributes();for(const G in we)if(we[G].location>=0){const xe=H[G];let N=ce[G];if(N===void 0&&(G==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),G==="instanceColor"&&z.instanceColor&&(N=z.instanceColor)),xe===void 0||xe.attribute!==N||N&&xe.data!==N.data)return!0;ue++}return c.attributesNum!==ue||c.index!==$}function b(z,X,Q,$){const H={},ce=X.attributes;let ue=0;const we=Q.getAttributes();for(const G in we)if(we[G].location>=0){let xe=ce[G];xe===void 0&&(G==="instanceMatrix"&&z.instanceMatrix&&(xe=z.instanceMatrix),G==="instanceColor"&&z.instanceColor&&(xe=z.instanceColor));const N={};N.attribute=xe,xe&&xe.data&&(N.data=xe.data),H[G]=N,ue++}c.attributes=H,c.attributesNum=ue,c.index=$}function _(){const z=c.newAttributes;for(let X=0,Q=z.length;X<Q;X++)z[X]=0}function y(z){S(z,0)}function S(z,X){const Q=c.newAttributes,$=c.enabledAttributes,H=c.attributeDivisors;Q[z]=1,$[z]===0&&(i.enableVertexAttribArray(z),$[z]=1),H[z]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,X),H[z]=X)}function C(){const z=c.newAttributes,X=c.enabledAttributes;for(let Q=0,$=X.length;Q<$;Q++)X[Q]!==z[Q]&&(i.disableVertexAttribArray(Q),X[Q]=0)}function D(z,X,Q,$,H,ce){n.isWebGL2===!0&&(Q===5124||Q===5125)?i.vertexAttribIPointer(z,X,Q,H,ce):i.vertexAttribPointer(z,X,Q,$,H,ce)}function M(z,X,Q,$){if(n.isWebGL2===!1&&(z.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const H=$.attributes,ce=Q.getAttributes(),ue=X.defaultAttributeValues;for(const we in ce){const G=ce[we];if(G.location>=0){let le=H[we];if(le===void 0&&(we==="instanceMatrix"&&z.instanceMatrix&&(le=z.instanceMatrix),we==="instanceColor"&&z.instanceColor&&(le=z.instanceColor)),le!==void 0){const xe=le.normalized,N=le.itemSize,I=t.get(le);if(I===void 0)continue;const ie=I.buffer,oe=I.type,me=I.bytesPerElement;if(le.isInterleavedBufferAttribute){const pe=le.data,Te=pe.stride,T=le.offset;if(pe.isInstancedInterleavedBuffer){for(let R=0;R<G.locationSize;R++)S(G.location+R,pe.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let R=0;R<G.locationSize;R++)y(G.location+R);i.bindBuffer(34962,ie);for(let R=0;R<G.locationSize;R++)D(G.location+R,N/G.locationSize,oe,xe,Te*me,(T+N/G.locationSize*R)*me)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)S(G.location+pe,le.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<G.locationSize;pe++)y(G.location+pe);i.bindBuffer(34962,ie);for(let pe=0;pe<G.locationSize;pe++)D(G.location+pe,N/G.locationSize,oe,xe,N*me,N/G.locationSize*pe*me)}}else if(ue!==void 0){const xe=ue[we];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(G.location,xe);break;case 3:i.vertexAttrib3fv(G.location,xe);break;case 4:i.vertexAttrib4fv(G.location,xe);break;default:i.vertexAttrib1fv(G.location,xe)}}}}C()}function E(){Z();for(const z in a){const X=a[z];for(const Q in X){const $=X[Q];for(const H in $)g($[H].object),delete $[H];delete X[Q]}delete a[z]}}function P(z){if(a[z.id]===void 0)return;const X=a[z.id];for(const Q in X){const $=X[Q];for(const H in $)g($[H].object),delete $[H];delete X[Q]}delete a[z.id]}function W(z){for(const X in a){const Q=a[X];if(Q[z.id]===void 0)continue;const $=Q[z.id];for(const H in $)g($[H].object),delete $[H];delete Q[z.id]}}function Z(){k(),u=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:k,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:W,initAttributes:_,enableAttribute:y,disableUnusedAttributes:C}}function jy(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=i,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function qy(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),m=i.getParameter(36347),x=i.getParameter(36348),b=i.getParameter(36349),_=h>0,y=o||e.has("OES_texture_float"),S=_&&y,C=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:C}}function Xy(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new wi,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,d=f.clipIntersection,m=f.clipShadows,x=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,_=b*4;let y=x.clippingState||null;l.value=y,y=u(g,h,_,p);for(let S=0;S!==_;++S)y[S]=t[S];x.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const d=f!==null?f.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const x=p+d*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<x)&&(m=new Float32Array(x));for(let _=0,y=p;_!==d;++_,y+=4)o.copy(f[_]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function Ky(i){let e=new WeakMap;function t(o,a){return a===yo?o.mapping=Tr:a===il&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===yo||a===il)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ax(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Wl extends Md{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,Xu=[.125,.215,.35,.446,.526,.582],Ci=20,La=new Wl,Ku=new ke;let Pa=null;const Ti=(1+Math.sqrt(5))/2,or=1/Ti,Yu=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ti,or),new U(0,Ti,-or),new U(or,0,Ti),new U(-or,0,Ti),new U(Ti,or,0),new U(-Ti,or,0)];class $u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Pa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa),e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:Hn,format:en,encoding:di,depthBuffer:!1},r=Zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yy(s)),this._blurMaterial=$y(s,e,t)}return r}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,r){const a=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ku),u.toneMapping=Wn,u.autoClear=!1;const p=new Li({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new tn(new Cs,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(Ku),d=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):b===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const _=this._cubeSize;Qs(r,b*_,x>2?_:0,_,_),u.setRenderTarget(r),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Tr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yu[(r-1)%Yu.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new tn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ci-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):Ci;m>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const x=[];let b=0;for(let D=0;D<Ci;++D){const M=D/d,E=Math.exp(-M*M/2);x.push(E),D===0?b+=E:D<m&&(b+=2*E)}for(let D=0;D<x.length;D++)x[D]=x[D]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=x,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const y=this._sizeLods[r],S=3*y*(r>_-ur?r-_+ur:0),C=4*(this._cubeSize-y);Qs(t,S,C,3*y,2*y),l.setRenderTarget(t),l.render(f,La)}}function Yy(i){const e=[],t=[],n=[];let r=i;const s=i-ur+1+Xu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ur?l=Xu[o-i+ur-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,d=3,m=2,x=1,b=new Float32Array(d*g*p),_=new Float32Array(m*g*p),y=new Float32Array(x*g*p);for(let C=0;C<p;C++){const D=C%3*2/3-1,M=C>2?0:-1,E=[D,M,0,D+2/3,M,0,D+2/3,M+1,0,D,M,0,D+2/3,M+1,0,D,M+1,0];b.set(E,d*g*C),_.set(h,m*g*C);const P=[C,C,C,C,C,C];y.set(P,x*g*C)}const S=new _n;S.setAttribute("position",new Tt(b,d)),S.setAttribute("uv",new Tt(_,m)),S.setAttribute("faceIndex",new Tt(y,x)),e.push(S),r>ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zu(i,e,t){const n=new Ui(i,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $y(i,e,t){const n=new Float32Array(Ci),r=new U(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ju(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Qu(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===yo||l===il,u=l===Tr||l===Er;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new $u(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new $u(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Jy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qy(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const d=p[g];for(let m=0,x=d.length;m<x;m++)e.update(d[m],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let d=0;if(p!==null){const b=p.array;d=p.version;for(let _=0,y=b.length;_<y;_+=3){const S=b[_+0],C=b[_+1],D=b[_+2];h.push(S,C,C,D,D,S)}}else{const b=g.array;d=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){const S=_+0,C=_+1,D=_+2;h.push(S,C,C,D,D,S)}}const m=new(dd(h)?yd:vd)(h,1);m.version=d;const x=s.get(f);x&&e.remove(x),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function eb(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){i.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let d,m;if(r)d=i,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,a,h*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function tb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function nb(i,e){return i[0]-e[0]}function ib(i,e){return Math.abs(e[1])-Math.abs(i[1])}function rb(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==d){let X=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",X)};m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),S===!0&&(E=3);let P=u.attributes.position.count*E,W=1;P>e.maxTextureSize&&(W=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const Z=new Float32Array(P*W*4*d),k=new _d(Z,P,W,d);k.type=fn,k.needsUpdate=!0;const z=E*4;for(let Q=0;Q<d;Q++){const $=C[Q],H=D[Q],ce=M[Q],ue=P*W*4*Q;for(let we=0;we<$.count;we++){const G=we*z;_===!0&&(o.fromBufferAttribute($,we),Z[ue+G+0]=o.x,Z[ue+G+1]=o.y,Z[ue+G+2]=o.z,Z[ue+G+3]=0),y===!0&&(o.fromBufferAttribute(H,we),Z[ue+G+4]=o.x,Z[ue+G+5]=o.y,Z[ue+G+6]=o.z,Z[ue+G+7]=0),S===!0&&(o.fromBufferAttribute(ce,we),Z[ue+G+8]=o.x,Z[ue+G+9]=o.y,Z[ue+G+10]=o.z,Z[ue+G+11]=ce.itemSize===4?o.w:1)}}m={count:d,texture:k,size:new Ne(P,W)},s.set(u,m),u.addEventListener("dispose",X)}let x=0;for(let _=0;_<p.length;_++)x+=p[_];const b=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let y=0;y<g;y++)d[y]=[y,0];n[u.id]=d}for(let y=0;y<g;y++){const S=d[y];S[0]=y,S[1]=p[y]}d.sort(ib);for(let y=0;y<8;y++)y<g&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(nb);const m=u.morphAttributes.position,x=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const S=a[y],C=S[0],D=S[1];C!==Number.MAX_SAFE_INTEGER&&D?(m&&u.getAttribute("morphTarget"+y)!==m[C]&&u.setAttribute("morphTarget"+y,m[C]),x&&u.getAttribute("morphNormal"+y)!==x[C]&&u.setAttribute("morphNormal"+y,x[C]),r[y]=D,b+=D):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),x&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const _=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function sb(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Td=new wt,Ed=new _d,Ad=new j0,Cd=new Sd,ef=[],tf=[],nf=new Float32Array(16),rf=new Float32Array(9),sf=new Float32Array(4);function Ur(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ef[r];if(s===void 0&&(s=new Float32Array(r),ef[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zo(i,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ob(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function lb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function cb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function ub(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;sf.set(n),i.uniformMatrix2fv(this.addr,!1,sf),xt(t,n)}}function fb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;rf.set(n),i.uniformMatrix3fv(this.addr,!1,rf),xt(t,n)}}function hb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;nf.set(n),i.uniformMatrix4fv(this.addr,!1,nf),xt(t,n)}}function db(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function mb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function _b(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function vb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function yb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function bb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Td,r)}function Mb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ad,r)}function Sb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Cd,r)}function wb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ed,r)}function Tb(i){switch(i){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return fb;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return _b;case 36294:return xb;case 36295:return vb;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return wb}}function Eb(i,e){i.uniform1fv(this.addr,e)}function Ab(i,e){const t=Ur(e,this.size,2);i.uniform2fv(this.addr,t)}function Cb(i,e){const t=Ur(e,this.size,3);i.uniform3fv(this.addr,t)}function Rb(i,e){const t=Ur(e,this.size,4);i.uniform4fv(this.addr,t)}function Lb(i,e){const t=Ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Pb(i,e){const t=Ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Db(i,e){const t=Ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ib(i,e){i.uniform1iv(this.addr,e)}function Nb(i,e){i.uniform2iv(this.addr,e)}function Ob(i,e){i.uniform3iv(this.addr,e)}function Fb(i,e){i.uniform4iv(this.addr,e)}function Ub(i,e){i.uniform1uiv(this.addr,e)}function zb(i,e){i.uniform2uiv(this.addr,e)}function kb(i,e){i.uniform3uiv(this.addr,e)}function Bb(i,e){i.uniform4uiv(this.addr,e)}function Hb(i,e,t){const n=this.cache,r=e.length,s=zo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Td,s[o])}function Vb(i,e,t){const n=this.cache,r=e.length,s=zo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ad,s[o])}function Gb(i,e,t){const n=this.cache,r=e.length,s=zo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Cd,s[o])}function Wb(i,e,t){const n=this.cache,r=e.length,s=zo(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ed,s[o])}function jb(i){switch(i){case 5126:return Eb;case 35664:return Ab;case 35665:return Cb;case 35666:return Rb;case 35674:return Lb;case 35675:return Pb;case 35676:return Db;case 5124:case 35670:return Ib;case 35667:case 35671:return Nb;case 35668:case 35672:return Ob;case 35669:case 35673:return Fb;case 5125:return Ub;case 36294:return zb;case 36295:return kb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Wb}}class qb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Tb(t.type)}}class Xb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=jb(t.type)}}class Kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function of(i,e){i.seq.push(e),i.map[e.id]=e}function Yb(i,e,t){const n=i.name,r=n.length;for(Da.lastIndex=0;;){const s=Da.exec(n),o=Da.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){of(t,c===void 0?new qb(a,i,e):new Xb(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Kb(a),of(t,f)),t=f}}}class ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Yb(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function af(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let $b=0;function Zb(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Jb(i){switch(i){case di:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function lf(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Zb(i.getShaderSource(e),o)}else return r}function Qb(i,e){const t=Jb(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function eM(i,e){let t;switch(e){case s0:t="Linear";break;case o0:t="Reinhard";break;case a0:t="OptimizedCineon";break;case od:t="ACESFilmic";break;case l0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tM(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function nM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iM(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function is(i){return i!==""}function cf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rM=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(rM,sM)}function sM(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return cl(t)}const oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(i){return i.replace(oM,aM)}function aM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===U_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ns&&(e="SHADOWMAP_TYPE_VSM"),e}function cM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Tr:case Er:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function fM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sd:e="ENVMAP_BLENDING_MULTIPLY";break;case i0:e="ENVMAP_BLENDING_MIX";break;case r0:e="ENVMAP_BLENDING_ADD";break}return e}function hM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lM(t),c=cM(t),u=uM(t),f=fM(t),h=hM(t),p=t.isWebGL2?"":tM(t),g=nM(s),d=r.createProgram();let m,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(is).join(`
`),m.length>0&&(m+=`
`),x=[p,g].filter(is).join(`
`),x.length>0&&(x+=`
`)):(m=[hf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),x=[p,hf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Wn?eM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Qb("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),o=cl(o),o=cf(o,t),o=uf(o,t),a=cl(a),a=cf(a,t),a=uf(a,t),o=ff(o),a=ff(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",t.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=b+m+o,y=b+x+a,S=af(r,35633,_),C=af(r,35632,y);if(r.attachShader(d,S),r.attachShader(d,C),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(d).trim(),P=r.getShaderInfoLog(S).trim(),W=r.getShaderInfoLog(C).trim();let Z=!0,k=!0;if(r.getProgramParameter(d,35714)===!1){Z=!1;const z=lf(r,S,"vertex"),X=lf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+E+`
`+z+`
`+X)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(P===""||W==="")&&(k=!1);k&&(this.diagnostics={runnable:Z,programLog:E,vertexShader:{log:P,prefix:m},fragmentShader:{log:W,prefix:x}})}r.deleteShader(S),r.deleteShader(C);let D;this.getUniforms=function(){return D===void 0&&(D=new ho(r,d)),D};let M;return this.getAttributes=function(){return M===void 0&&(M=iM(r,d)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=$b++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=S,this.fragmentShader=C,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gM(e),t.set(e,n)),n}}class gM{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}}function _M(i,e,t,n,r,s,o){const a=new xd,l=new mM,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(M,E,P,W,Z){const k=W.fog,z=Z.geometry,X=M.isMeshStandardMaterial?W.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),$=Q&&Q.mapping===Fo?Q.image.height:null,H=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ce=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=ce!==void 0?ce.length:0;let we=0;z.morphAttributes.position!==void 0&&(we=1),z.morphAttributes.normal!==void 0&&(we=2),z.morphAttributes.color!==void 0&&(we=3);let G,le,xe,N;if(H){const Te=bn[H];G=Te.vertexShader,le=Te.fragmentShader}else G=M.vertexShader,le=M.fragmentShader,l.update(M),xe=l.getVertexShaderID(M),N=l.getFragmentShaderID(M);const I=i.getRenderTarget(),ie=M.alphaTest>0,oe=M.clearcoat>0,me=M.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:M.type,vertexShader:G,fragmentShader:le,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:N,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:I===null?i.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:di,map:!!M.map,matcap:!!M.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:$,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===C0,tangentSpaceNormalMap:M.normalMapType===fd,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Ye,clearcoat:oe,clearcoatMap:oe&&!!M.clearcoatMap,clearcoatRoughnessMap:oe&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:oe&&!!M.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!M.iridescenceMap,iridescenceThicknessMap:me&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===mr,alphaMap:!!M.alphaMap,alphaTest:ie,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!z.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:we,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:Wn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bn,flipSided:M.side===Yt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)E.push(P),E.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(E,M),b(E,M),E.push(i.outputEncoding)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputEncoding),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.combine),M.push(E.vertexUvs),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function b(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),M.push(a.mask)}function _(M){const E=g[M.type];let P;if(E){const W=bn[E];P=ix.clone(W.uniforms)}else P=M.uniforms;return P}function y(M,E){let P;for(let W=0,Z=c.length;W<Z;W++){const k=c[W];if(k.cacheKey===E){P=k,++P.usedTimes;break}}return P===void 0&&(P=new dM(i,E,M,s),c.push(P)),P}function S(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function D(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:_,acquireProgram:y,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:D}}function xM(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function vM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function df(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,p,g,d,m){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:d,group:m},i[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=p,x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=d,x.group=m),e++,x}function a(f,h,p,g,d,m){const x=o(f,h,p,g,d,m);p.transmission>0?n.push(x):p.transparent===!0?r.push(x):t.push(x)}function l(f,h,p,g,d,m){const x=o(f,h,p,g,d,m);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):t.unshift(x)}function c(f,h){t.length>1&&t.sort(f||vM),n.length>1&&n.sort(h||df),r.length>1&&r.sort(h||df)}function u(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function yM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new pf,i.set(n,[o])):r>=s.length?(o=new pf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function bM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ke};break;case"SpotLight":t={position:new U,direction:new U,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function MM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let SM=0;function wM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function TM(i,e){const t=new bM,n=MM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,o=new Ve,a=new Ve;function l(u,f){let h=0,p=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let d=0,m=0,x=0,b=0,_=0,y=0,S=0,C=0,D=0,M=0;u.sort(wM);const E=f!==!0?Math.PI:1;for(let W=0,Z=u.length;W<Z;W++){const k=u[W],z=k.color,X=k.intensity,Q=k.distance,$=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=z.r*X*E,p+=z.g*X*E,g+=z.b*X*E;else if(k.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(k.sh.coefficients[H],X);else if(k.isDirectionalLight){const H=t.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity*E),k.castShadow){const ce=k.shadow,ue=n.get(k);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,r.directionalShadow[d]=ue,r.directionalShadowMap[d]=$,r.directionalShadowMatrix[d]=k.shadow.matrix,y++}r.directional[d]=H,d++}else if(k.isSpotLight){const H=t.get(k);H.position.setFromMatrixPosition(k.matrixWorld),H.color.copy(z).multiplyScalar(X*E),H.distance=Q,H.coneCos=Math.cos(k.angle),H.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),H.decay=k.decay,r.spot[x]=H;const ce=k.shadow;if(k.map&&(r.spotLightMap[D]=k.map,D++,ce.updateMatrices(k),k.castShadow&&M++),r.spotLightMatrix[x]=ce.matrix,k.castShadow){const ue=n.get(k);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,r.spotShadow[x]=ue,r.spotShadowMap[x]=$,C++}x++}else if(k.isRectAreaLight){const H=t.get(k);H.color.copy(z).multiplyScalar(X),H.halfWidth.set(k.width*.5,0,0),H.halfHeight.set(0,k.height*.5,0),r.rectArea[b]=H,b++}else if(k.isPointLight){const H=t.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity*E),H.distance=k.distance,H.decay=k.decay,k.castShadow){const ce=k.shadow,ue=n.get(k);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,ue.shadowCameraNear=ce.camera.near,ue.shadowCameraFar=ce.camera.far,r.pointShadow[m]=ue,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=k.shadow.matrix,S++}r.point[m]=H,m++}else if(k.isHemisphereLight){const H=t.get(k);H.skyColor.copy(k.color).multiplyScalar(X*E),H.groundColor.copy(k.groundColor).multiplyScalar(X*E),r.hemi[_]=H,_++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const P=r.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==b||P.hemiLength!==_||P.numDirectionalShadows!==y||P.numPointShadows!==S||P.numSpotShadows!==C||P.numSpotMaps!==D)&&(r.directional.length=d,r.spot.length=x,r.rectArea.length=b,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=C+D-M,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=M,P.directionalLength=d,P.pointLength=m,P.spotLength=x,P.rectAreaLength=b,P.hemiLength=_,P.numDirectionalShadows=y,P.numPointShadows=S,P.numSpotShadows=C,P.numSpotMaps=D,r.version=SM++)}function c(u,f){let h=0,p=0,g=0,d=0,m=0;const x=f.matrixWorldInverse;for(let b=0,_=u.length;b<_;b++){const y=u[b];if(y.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),h++}else if(y.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),g++}else if(y.isRectAreaLight){const S=r.rectArea[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),a.identity(),o.copy(y.matrixWorld),o.premultiply(x),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),p++}else if(y.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(x),m++}}}return{setup:l,setupView:c,state:r}}function mf(i,e){const t=new TM(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function EM(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new mf(i,e),t.set(s,[l])):o>=a.length?(l=new mf(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class AM extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CM extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PM(i,e,t){let n=new Vl;const r=new Ne,s=new Ne,o=new rt,a=new AM({depthPacking:A0}),l=new CM,c={},u=t.maxTextureSize,f={[Kn]:Yt,[Yt]:Kn,[Bn]:Bn},h=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:RM,fragmentShader:LM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new tn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nd,this.render=function(y,S,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const D=i.getRenderTarget(),M=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ui),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let W=0,Z=y.length;W<Z;W++){const k=y[W],z=k.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const X=z.getFrameExtents();if(r.multiply(X),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,z.mapSize.y=s.y)),z.map===null){const $=this.type!==ns?{minFilter:Mt,magFilter:Mt}:{};z.map=new Ui(r.x,r.y,$),z.map.texture.name=k.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const Q=z.getViewportCount();for(let $=0;$<Q;$++){const H=z.getViewport($);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),P.viewport(o),z.updateMatrices(k,$),n=z.getFrustum(),_(S,C,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===ns&&x(z,C),z.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(D,M,E)};function x(y,S){const C=e.update(d);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ui(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(S,null,C,h,d,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(S,null,C,p,d,null)}function b(y,S,C,D,M,E){let P=null;const W=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(W!==void 0)P=W;else if(P=C.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const Z=P.uuid,k=S.uuid;let z=c[Z];z===void 0&&(z={},c[Z]=z);let X=z[k];X===void 0&&(X=P.clone(),z[k]=X),P=X}return P.visible=S.visible,P.wireframe=S.wireframe,E===ns?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:f[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,C.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(C.matrixWorld),P.nearDistance=D,P.farDistance=M),P}function _(y,S,C,D,M){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===ns)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const W=e.update(y),Z=y.material;if(Array.isArray(Z)){const k=W.groups;for(let z=0,X=k.length;z<X;z++){const Q=k[z],$=Z[Q.materialIndex];if($&&$.visible){const H=b(y,$,D,C.near,C.far,M);i.renderBufferDirect(C,null,W,H,y,Q)}}}else if(Z.visible){const k=b(y,Z,D,C.near,C.far,M);i.renderBufferDirect(C,null,W,k,y,null)}}const P=y.children;for(let W=0,Z=P.length;W<Z;W++)_(P[W],S,C,D,M)}}function DM(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const ee=new rt;let _e=null;const Ae=new rt(0,0,0,0);return{setMask:function(Re){_e!==Re&&!O&&(i.colorMask(Re,Re,Re,Re),_e=Re)},setLocked:function(Re){O=Re},setClear:function(Re,Ze,vt,At,pi){pi===!0&&(Re*=At,Ze*=At,vt*=At),ee.set(Re,Ze,vt,At),Ae.equals(ee)===!1&&(i.clearColor(Re,Ze,vt,At),Ae.copy(ee))},reset:function(){O=!1,_e=null,Ae.set(-1,0,0,0)}}}function s(){let O=!1,ee=null,_e=null,Ae=null;return{setTest:function(Re){Re?ie(2929):oe(2929)},setMask:function(Re){ee!==Re&&!O&&(i.depthMask(Re),ee=Re)},setFunc:function(Re){if(_e!==Re){switch(Re){case $_:i.depthFunc(512);break;case Z_:i.depthFunc(519);break;case J_:i.depthFunc(513);break;case nl:i.depthFunc(515);break;case Q_:i.depthFunc(514);break;case e0:i.depthFunc(518);break;case t0:i.depthFunc(516);break;case n0:i.depthFunc(517);break;default:i.depthFunc(515)}_e=Re}},setLocked:function(Re){O=Re},setClear:function(Re){Ae!==Re&&(i.clearDepth(Re),Ae=Re)},reset:function(){O=!1,ee=null,_e=null,Ae=null}}}function o(){let O=!1,ee=null,_e=null,Ae=null,Re=null,Ze=null,vt=null,At=null,pi=null;return{setTest:function(ot){O||(ot?ie(2960):oe(2960))},setMask:function(ot){ee!==ot&&!O&&(i.stencilMask(ot),ee=ot)},setFunc:function(ot,Cn,$t){(_e!==ot||Ae!==Cn||Re!==$t)&&(i.stencilFunc(ot,Cn,$t),_e=ot,Ae=Cn,Re=$t)},setOp:function(ot,Cn,$t){(Ze!==ot||vt!==Cn||At!==$t)&&(i.stencilOp(ot,Cn,$t),Ze=ot,vt=Cn,At=$t)},setLocked:function(ot){O=ot},setClear:function(ot){pi!==ot&&(i.clearStencil(ot),pi=ot)},reset:function(){O=!1,ee=null,_e=null,Ae=null,Re=null,Ze=null,vt=null,At=null,pi=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,d=[],m=null,x=!1,b=null,_=null,y=null,S=null,C=null,D=null,M=null,E=!1,P=null,W=null,Z=null,k=null,z=null;const X=i.getParameter(35661);let Q=!1,$=0;const H=i.getParameter(7938);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),Q=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Q=$>=2);let ce=null,ue={};const we=i.getParameter(3088),G=i.getParameter(2978),le=new rt().fromArray(we),xe=new rt().fromArray(G);function N(O,ee,_e){const Ae=new Uint8Array(4),Re=i.createTexture();i.bindTexture(O,Re),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let Ze=0;Ze<_e;Ze++)i.texImage2D(ee+Ze,0,6408,1,1,0,6408,5121,Ae);return Re}const I={};I[3553]=N(3553,3553,1),I[34067]=N(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ie(2929),l.setFunc(nl),J(!1),fe(iu),ie(2884),j(ui);function ie(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function oe(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function me(O,ee){return p[O]!==ee?(i.bindFramebuffer(O,ee),p[O]=ee,n&&(O===36009&&(p[36160]=ee),O===36160&&(p[36009]=ee)),!0):!1}function pe(O,ee){let _e=d,Ae=!1;if(O)if(_e=g.get(ee),_e===void 0&&(_e=[],g.set(ee,_e)),O.isWebGLMultipleRenderTargets){const Re=O.texture;if(_e.length!==Re.length||_e[0]!==36064){for(let Ze=0,vt=Re.length;Ze<vt;Ze++)_e[Ze]=36064+Ze;_e.length=Re.length,Ae=!0}}else _e[0]!==36064&&(_e[0]=36064,Ae=!0);else _e[0]!==1029&&(_e[0]=1029,Ae=!0);Ae&&(t.isWebGL2?i.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function Te(O){return m!==O?(i.useProgram(O),m=O,!0):!1}const T={[lr]:32774,[k_]:32778,[B_]:32779};if(n)T[au]=32775,T[lu]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(T[au]=O.MIN_EXT,T[lu]=O.MAX_EXT)}const R={[H_]:0,[V_]:1,[G_]:768,[id]:770,[Y_]:776,[X_]:774,[j_]:772,[W_]:769,[rd]:771,[K_]:775,[q_]:773};function j(O,ee,_e,Ae,Re,Ze,vt,At){if(O===ui){x===!0&&(oe(3042),x=!1);return}if(x===!1&&(ie(3042),x=!0),O!==z_){if(O!==b||At!==E){if((_!==lr||C!==lr)&&(i.blendEquation(32774),_=lr,C=lr),At)switch(O){case mr:i.blendFuncSeparate(1,771,1,771);break;case ru:i.blendFunc(1,1);break;case su:i.blendFuncSeparate(0,769,0,1);break;case ou:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case mr:i.blendFuncSeparate(770,771,1,771);break;case ru:i.blendFunc(770,1);break;case su:i.blendFuncSeparate(0,769,0,1);break;case ou:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,S=null,D=null,M=null,b=O,E=At}return}Re=Re||ee,Ze=Ze||_e,vt=vt||Ae,(ee!==_||Re!==C)&&(i.blendEquationSeparate(T[ee],T[Re]),_=ee,C=Re),(_e!==y||Ae!==S||Ze!==D||vt!==M)&&(i.blendFuncSeparate(R[_e],R[Ae],R[Ze],R[vt]),y=_e,S=Ae,D=Ze,M=vt),b=O,E=!1}function Y(O,ee){O.side===Bn?oe(2884):ie(2884);let _e=O.side===Yt;ee&&(_e=!_e),J(_e),O.blending===mr&&O.transparent===!1?j(ui):j(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Ae=O.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(32926):oe(32926)}function J(O){P!==O&&(O?i.frontFace(2304):i.frontFace(2305),P=O)}function fe(O){O!==O_?(ie(2884),O!==W&&(O===iu?i.cullFace(1029):O===F_?i.cullFace(1028):i.cullFace(1032))):oe(2884),W=O}function de(O){O!==Z&&(Q&&i.lineWidth(O),Z=O)}function re(O,ee,_e){O?(ie(32823),(k!==ee||z!==_e)&&(i.polygonOffset(ee,_e),k=ee,z=_e)):oe(32823)}function ge(O){O?ie(3089):oe(3089)}function ae(O){O===void 0&&(O=33984+X-1),ce!==O&&(i.activeTexture(O),ce=O)}function w(O,ee,_e){_e===void 0&&(ce===null?_e=33984+X-1:_e=ce);let Ae=ue[_e];Ae===void 0&&(Ae={type:void 0,texture:void 0},ue[_e]=Ae),(Ae.type!==O||Ae.texture!==ee)&&(ce!==_e&&(i.activeTexture(_e),ce=_e),i.bindTexture(O,ee||I[O]),Ae.type=O,Ae.texture=ee)}function v(){const O=ue[ce];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function B(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(O){le.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function Se(O){xe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),xe.copy(O))}function De(O,ee){let _e=f.get(ee);_e===void 0&&(_e=new WeakMap,f.set(ee,_e));let Ae=_e.get(O);Ae===void 0&&(Ae=i.getUniformBlockIndex(ee,O.name),_e.set(O,Ae))}function Be(O,ee){const Ae=f.get(ee).get(O);u.get(ee)!==Ae&&(i.uniformBlockBinding(ee,Ae,O.__bindingPointIndex),u.set(ee,Ae))}function nt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,ue={},p={},g=new WeakMap,d=[],m=null,x=!1,b=null,_=null,y=null,S=null,C=null,D=null,M=null,E=!1,P=null,W=null,Z=null,k=null,z=null,le.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ie,disable:oe,bindFramebuffer:me,drawBuffers:pe,useProgram:Te,setBlending:j,setMaterial:Y,setFlipSided:J,setCullFace:fe,setLineWidth:de,setPolygonOffset:re,setScissorTest:ge,activeTexture:ae,bindTexture:w,unbindTexture:v,compressedTexImage2D:F,compressedTexImage3D:K,texImage2D:Ee,texImage3D:Me,updateUBOMapping:De,uniformBlockBinding:Be,texStorage2D:B,texStorage3D:be,texSubImage2D:ne,texSubImage3D:he,compressedTexSubImage2D:ye,compressedTexSubImage3D:L,scissor:Ce,viewport:Se,reset:nt}}function IM(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,v){return x?new OffscreenCanvas(w,v):Ss("canvas")}function _(w,v,F,K){let ne=1;if((w.width>K||w.height>K)&&(ne=K/Math.max(w.width,w.height)),ne<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const he=v?Mo:Math.floor,ye=he(ne*w.width),L=he(ne*w.height);d===void 0&&(d=b(ye,L));const B=F?b(ye,L):d;return B.width=ye,B.height=L,B.getContext("2d").drawImage(w,0,0,ye,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ye+"x"+L+")."),B}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function y(w){return ll(w.width)&&ll(w.height)}function S(w){return a?!1:w.wrapS!==Bt||w.wrapT!==Bt||w.minFilter!==Mt&&w.minFilter!==mt}function C(w,v){return w.generateMipmaps&&v&&w.minFilter!==Mt&&w.minFilter!==mt}function D(w){i.generateMipmap(w)}function M(w,v,F,K,ne=!1){if(a===!1)return v;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he=v;return v===6403&&(F===5126&&(he=33326),F===5131&&(he=33325),F===5121&&(he=33321)),v===33319&&(F===5126&&(he=33328),F===5131&&(he=33327),F===5121&&(he=33323)),v===6408&&(F===5126&&(he=34836),F===5131&&(he=34842),F===5121&&(he=K===Ye&&ne===!1?35907:32856),F===32819&&(he=32854),F===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function E(w,v,F){return C(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Mt&&w.minFilter!==mt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function P(w){return w===Mt||w===rl||w===uo?9728:9729}function W(w){const v=w.target;v.removeEventListener("dispose",W),k(v),v.isVideoTexture&&g.delete(v)}function Z(w){const v=w.target;v.removeEventListener("dispose",Z),X(v)}function k(w){const v=n.get(w);if(v.__webglInit===void 0)return;const F=w.source,K=m.get(F);if(K){const ne=K[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&z(w),Object.keys(K).length===0&&m.delete(F)}n.remove(w)}function z(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const F=w.source,K=m.get(F);delete K[v.__cacheKey],o.memory.textures--}function X(w){const v=w.texture,F=n.get(w),K=n.get(v);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(F.__webglFramebuffer[ne]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ne=0;ne<F.__webglColorRenderbuffer.length;ne++)F.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ne]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ne=0,he=v.length;ne<he;ne++){const ye=n.get(v[ne]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(v[ne])}n.remove(v),n.remove(w)}let Q=0;function $(){Q=0}function H(){const w=Q;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Q+=1,w}function ce(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.encoding),v.join()}function ue(w,v){const F=n.get(w);if(w.isVideoTexture&&ge(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,w,v);return}}t.bindTexture(3553,F.__webglTexture,33984+v)}function we(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){oe(F,w,v);return}t.bindTexture(35866,F.__webglTexture,33984+v)}function G(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){oe(F,w,v);return}t.bindTexture(32879,F.__webglTexture,33984+v)}function le(w,v){const F=n.get(w);if(w.version>0&&F.__version!==w.version){me(F,w,v);return}t.bindTexture(34067,F.__webglTexture,33984+v)}const xe={[Ar]:10497,[Bt]:33071,[bo]:33648},N={[Mt]:9728,[rl]:9984,[uo]:9986,[mt]:9729,[ld]:9985,[hi]:9987};function I(w,v,F){if(F?(i.texParameteri(w,10242,xe[v.wrapS]),i.texParameteri(w,10243,xe[v.wrapT]),(w===32879||w===35866)&&i.texParameteri(w,32882,xe[v.wrapR]),i.texParameteri(w,10240,N[v.magFilter]),i.texParameteri(w,10241,N[v.minFilter])):(i.texParameteri(w,10242,33071),i.texParameteri(w,10243,33071),(w===32879||w===35866)&&i.texParameteri(w,32882,33071),(v.wrapS!==Bt||v.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,10240,P(v.magFilter)),i.texParameteri(w,10241,P(v.minFilter)),v.minFilter!==Mt&&v.minFilter!==mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Mt||v.minFilter!==uo&&v.minFilter!==hi||v.type===fn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Hn&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function ie(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",W));const K=v.source;let ne=m.get(K);ne===void 0&&(ne={},m.set(K,ne));const he=ce(v);if(he!==w.__cacheKey){ne[he]===void 0&&(ne[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ne[he].usedTimes++;const ye=ne[w.__cacheKey];ye!==void 0&&(ne[w.__cacheKey].usedTimes--,ye.usedTimes===0&&z(v)),w.__cacheKey=he,w.__webglTexture=ne[he].texture}return F}function oe(w,v,F){let K=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=35866),v.isData3DTexture&&(K=32879);const ne=ie(w,v),he=v.source;t.bindTexture(K,w.__webglTexture,33984+F);const ye=n.get(he);if(he.version!==ye.__version||ne===!0){t.activeTexture(33984+F),i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const L=S(v)&&y(v.image)===!1;let B=_(v.image,L,!1,u);B=ae(v,B);const be=y(B)||a,Ee=s.convert(v.format,v.encoding);let Me=s.convert(v.type),Ce=M(v.internalFormat,Ee,Me,v.encoding,v.isVideoTexture);I(K,v,be);let Se;const De=v.mipmaps,Be=a&&v.isVideoTexture!==!0,nt=ye.__version===void 0||ne===!0,O=E(v,B,be);if(v.isDepthTexture)Ce=6402,a?v.type===fn?Ce=36012:v.type===Ri?Ce=33190:v.type===gr?Ce=35056:Ce=33189:v.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ni&&Ce===6402&&v.type!==cd&&v.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ri,Me=s.convert(v.type)),v.format===Cr&&Ce===6402&&(Ce=34041,v.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=gr,Me=s.convert(v.type))),nt&&(Be?t.texStorage2D(3553,1,Ce,B.width,B.height):t.texImage2D(3553,0,Ce,B.width,B.height,0,Ee,Me,null));else if(v.isDataTexture)if(De.length>0&&be){Be&&nt&&t.texStorage2D(3553,O,Ce,De[0].width,De[0].height);for(let ee=0,_e=De.length;ee<_e;ee++)Se=De[ee],Be?t.texSubImage2D(3553,ee,0,0,Se.width,Se.height,Ee,Me,Se.data):t.texImage2D(3553,ee,Ce,Se.width,Se.height,0,Ee,Me,Se.data);v.generateMipmaps=!1}else Be?(nt&&t.texStorage2D(3553,O,Ce,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,Ee,Me,B.data)):t.texImage2D(3553,0,Ce,B.width,B.height,0,Ee,Me,B.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&nt&&t.texStorage3D(35866,O,Ce,De[0].width,De[0].height,B.depth);for(let ee=0,_e=De.length;ee<_e;ee++)Se=De[ee],v.format!==en?Ee!==null?Be?t.compressedTexSubImage3D(35866,ee,0,0,0,Se.width,Se.height,B.depth,Ee,Se.data,0,0):t.compressedTexImage3D(35866,ee,Ce,Se.width,Se.height,B.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,ee,0,0,0,Se.width,Se.height,B.depth,Ee,Me,Se.data):t.texImage3D(35866,ee,Ce,Se.width,Se.height,B.depth,0,Ee,Me,Se.data)}else{Be&&nt&&t.texStorage2D(3553,O,Ce,De[0].width,De[0].height);for(let ee=0,_e=De.length;ee<_e;ee++)Se=De[ee],v.format!==en?Ee!==null?Be?t.compressedTexSubImage2D(3553,ee,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(3553,ee,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,ee,0,0,Se.width,Se.height,Ee,Me,Se.data):t.texImage2D(3553,ee,Ce,Se.width,Se.height,0,Ee,Me,Se.data)}else if(v.isDataArrayTexture)Be?(nt&&t.texStorage3D(35866,O,Ce,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,Ee,Me,B.data)):t.texImage3D(35866,0,Ce,B.width,B.height,B.depth,0,Ee,Me,B.data);else if(v.isData3DTexture)Be?(nt&&t.texStorage3D(32879,O,Ce,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,Ee,Me,B.data)):t.texImage3D(32879,0,Ce,B.width,B.height,B.depth,0,Ee,Me,B.data);else if(v.isFramebufferTexture){if(nt)if(Be)t.texStorage2D(3553,O,Ce,B.width,B.height);else{let ee=B.width,_e=B.height;for(let Ae=0;Ae<O;Ae++)t.texImage2D(3553,Ae,Ce,ee,_e,0,Ee,Me,null),ee>>=1,_e>>=1}}else if(De.length>0&&be){Be&&nt&&t.texStorage2D(3553,O,Ce,De[0].width,De[0].height);for(let ee=0,_e=De.length;ee<_e;ee++)Se=De[ee],Be?t.texSubImage2D(3553,ee,0,0,Ee,Me,Se):t.texImage2D(3553,ee,Ce,Ee,Me,Se);v.generateMipmaps=!1}else Be?(nt&&t.texStorage2D(3553,O,Ce,B.width,B.height),t.texSubImage2D(3553,0,0,0,Ee,Me,B)):t.texImage2D(3553,0,Ce,Ee,Me,B);C(v,be)&&D(K),ye.__version=he.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function me(w,v,F){if(v.image.length!==6)return;const K=ie(w,v),ne=v.source;t.bindTexture(34067,w.__webglTexture,33984+F);const he=n.get(ne);if(ne.version!==he.__version||K===!0){t.activeTexture(33984+F),i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,L=v.image[0]&&v.image[0].isDataTexture,B=[];for(let ee=0;ee<6;ee++)!ye&&!L?B[ee]=_(v.image[ee],!1,!0,c):B[ee]=L?v.image[ee].image:v.image[ee],B[ee]=ae(v,B[ee]);const be=B[0],Ee=y(be)||a,Me=s.convert(v.format,v.encoding),Ce=s.convert(v.type),Se=M(v.internalFormat,Me,Ce,v.encoding),De=a&&v.isVideoTexture!==!0,Be=he.__version===void 0||K===!0;let nt=E(v,be,Ee);I(34067,v,Ee);let O;if(ye){De&&Be&&t.texStorage2D(34067,nt,Se,be.width,be.height);for(let ee=0;ee<6;ee++){O=B[ee].mipmaps;for(let _e=0;_e<O.length;_e++){const Ae=O[_e];v.format!==en?Me!==null?De?t.compressedTexSubImage2D(34069+ee,_e,0,0,Ae.width,Ae.height,Me,Ae.data):t.compressedTexImage2D(34069+ee,_e,Se,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+ee,_e,0,0,Ae.width,Ae.height,Me,Ce,Ae.data):t.texImage2D(34069+ee,_e,Se,Ae.width,Ae.height,0,Me,Ce,Ae.data)}}}else{O=v.mipmaps,De&&Be&&(O.length>0&&nt++,t.texStorage2D(34067,nt,Se,B[0].width,B[0].height));for(let ee=0;ee<6;ee++)if(L){De?t.texSubImage2D(34069+ee,0,0,0,B[ee].width,B[ee].height,Me,Ce,B[ee].data):t.texImage2D(34069+ee,0,Se,B[ee].width,B[ee].height,0,Me,Ce,B[ee].data);for(let _e=0;_e<O.length;_e++){const Re=O[_e].image[ee].image;De?t.texSubImage2D(34069+ee,_e+1,0,0,Re.width,Re.height,Me,Ce,Re.data):t.texImage2D(34069+ee,_e+1,Se,Re.width,Re.height,0,Me,Ce,Re.data)}}else{De?t.texSubImage2D(34069+ee,0,0,0,Me,Ce,B[ee]):t.texImage2D(34069+ee,0,Se,Me,Ce,B[ee]);for(let _e=0;_e<O.length;_e++){const Ae=O[_e];De?t.texSubImage2D(34069+ee,_e+1,0,0,Me,Ce,Ae.image[ee]):t.texImage2D(34069+ee,_e+1,Se,Me,Ce,Ae.image[ee])}}}C(v,Ee)&&D(34067),he.__version=ne.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function pe(w,v,F,K,ne){const he=s.convert(F.format,F.encoding),ye=s.convert(F.type),L=M(F.internalFormat,he,ye,F.encoding);n.get(v).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,L,v.width,v.height,v.depth,0,he,ye,null):t.texImage2D(ne,0,L,v.width,v.height,0,he,ye,null)),t.bindFramebuffer(36160,w),re(v)?h.framebufferTexture2DMultisampleEXT(36160,K,ne,n.get(F).__webglTexture,0,de(v)):(ne===3553||ne>=34069&&ne<=34074)&&i.framebufferTexture2D(36160,K,ne,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(w,v,F){if(i.bindRenderbuffer(36161,w),v.depthBuffer&&!v.stencilBuffer){let K=33189;if(F||re(v)){const ne=v.depthTexture;ne&&ne.isDepthTexture&&(ne.type===fn?K=36012:ne.type===Ri&&(K=33190));const he=de(v);re(v)?h.renderbufferStorageMultisampleEXT(36161,he,K,v.width,v.height):i.renderbufferStorageMultisample(36161,he,K,v.width,v.height)}else i.renderbufferStorage(36161,K,v.width,v.height);i.framebufferRenderbuffer(36160,36096,36161,w)}else if(v.depthBuffer&&v.stencilBuffer){const K=de(v);F&&re(v)===!1?i.renderbufferStorageMultisample(36161,K,35056,v.width,v.height):re(v)?h.renderbufferStorageMultisampleEXT(36161,K,35056,v.width,v.height):i.renderbufferStorage(36161,34041,v.width,v.height),i.framebufferRenderbuffer(36160,33306,36161,w)}else{const K=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ne=0;ne<K.length;ne++){const he=K[ne],ye=s.convert(he.format,he.encoding),L=s.convert(he.type),B=M(he.internalFormat,ye,L,he.encoding),be=de(v);F&&re(v)===!1?i.renderbufferStorageMultisample(36161,be,B,v.width,v.height):re(v)?h.renderbufferStorageMultisampleEXT(36161,be,B,v.width,v.height):i.renderbufferStorage(36161,B,v.width,v.height)}}i.bindRenderbuffer(36161,null)}function T(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ue(v.depthTexture,0);const K=n.get(v.depthTexture).__webglTexture,ne=de(v);if(v.depthTexture.format===Ni)re(v)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,ne):i.framebufferTexture2D(36160,36096,3553,K,0);else if(v.depthTexture.format===Cr)re(v)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,ne):i.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function R(w){const v=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");T(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]=i.createRenderbuffer(),Te(v.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Te(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function j(w,v,F){const K=n.get(w);v!==void 0&&pe(K.__webglFramebuffer,w,w.texture,36064,3553),F!==void 0&&R(w)}function Y(w){const v=w.texture,F=n.get(w),K=n.get(v);w.addEventListener("dispose",Z),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++);const ne=w.isWebGLCubeRenderTarget===!0,he=w.isWebGLMultipleRenderTargets===!0,ye=y(w)||a;if(ne){F.__webglFramebuffer=[];for(let L=0;L<6;L++)F.__webglFramebuffer[L]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),he)if(r.drawBuffers){const L=w.texture;for(let B=0,be=L.length;B<be;B++){const Ee=n.get(L[B]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&re(w)===!1){const L=he?v:[v];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let B=0;B<L.length;B++){const be=L[B];F.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[B]);const Ee=s.convert(be.format,be.encoding),Me=s.convert(be.type),Ce=M(be.internalFormat,Ee,Me,be.encoding,w.isXRRenderTarget===!0),Se=de(w);i.renderbufferStorageMultisample(36161,Se,Ce,w.width,w.height),i.framebufferRenderbuffer(36160,36064+B,36161,F.__webglColorRenderbuffer[B])}i.bindRenderbuffer(36161,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,K.__webglTexture),I(34067,v,ye);for(let L=0;L<6;L++)pe(F.__webglFramebuffer[L],w,v,36064,34069+L);C(v,ye)&&D(34067),t.unbindTexture()}else if(he){const L=w.texture;for(let B=0,be=L.length;B<be;B++){const Ee=L[B],Me=n.get(Ee);t.bindTexture(3553,Me.__webglTexture),I(3553,Ee,ye),pe(F.__webglFramebuffer,w,Ee,36064+B,3553),C(Ee,ye)&&D(3553)}t.unbindTexture()}else{let L=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?L=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,K.__webglTexture),I(L,v,ye),pe(F.__webglFramebuffer,w,v,36064,L),C(v,ye)&&D(L),t.unbindTexture()}w.depthBuffer&&R(w)}function J(w){const v=y(w)||a,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,ne=F.length;K<ne;K++){const he=F[K];if(C(he,v)){const ye=w.isWebGLCubeRenderTarget?34067:3553,L=n.get(he).__webglTexture;t.bindTexture(ye,L),D(ye),t.unbindTexture()}}}function fe(w){if(a&&w.samples>0&&re(w)===!1){const v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,K=w.height;let ne=16384;const he=[],ye=w.stencilBuffer?33306:36096,L=n.get(w),B=w.isWebGLMultipleRenderTargets===!0;if(B)for(let be=0;be<v.length;be++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let be=0;be<v.length;be++){he.push(36064+be),w.depthBuffer&&he.push(ye);const Ee=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(Ee===!1&&(w.depthBuffer&&(ne|=256),w.stencilBuffer&&(ne|=1024)),B&&i.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[be]),Ee===!0&&(i.invalidateFramebuffer(36008,[ye]),i.invalidateFramebuffer(36009,[ye])),B){const Me=n.get(v[be]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Me,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,ne,9728),p&&i.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),B)for(let be=0;be<v.length;be++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+be,36161,L.__webglColorRenderbuffer[be]);const Ee=n.get(v[be]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+be,3553,Ee,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function de(w){return Math.min(f,w.samples)}function re(w){const v=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ge(w){const v=o.render.frame;g.get(w)!==v&&(g.set(w,v),w.update())}function ae(w,v){const F=w.encoding,K=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===al||F!==di&&(F===Ye?a===!1?e.has("EXT_sRGB")===!0&&K===en?(w.format=al,w.minFilter=mt,w.generateMipmaps=!1):v=md.sRGBToLinear(v):(K!==en||ne!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),v}this.allocateTextureUnit=H,this.resetTextureUnits=$,this.setTexture2D=ue,this.setTexture2DArray=we,this.setTexture3D=G,this.setTextureCube=le,this.rebindTextures=j,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=re}function NM(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Fi)return 5121;if(s===h0)return 32819;if(s===d0)return 32820;if(s===c0)return 5120;if(s===u0)return 5122;if(s===cd)return 5123;if(s===f0)return 5124;if(s===Ri)return 5125;if(s===fn)return 5126;if(s===Hn)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===p0)return 6406;if(s===en)return 6408;if(s===m0)return 6409;if(s===g0)return 6410;if(s===Ni)return 6402;if(s===Cr)return 34041;if(s===al)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===_0)return 6403;if(s===x0)return 36244;if(s===v0)return 33319;if(s===y0)return 33320;if(s===b0)return 36249;if(s===ia||s===ra||s===sa||s===oa)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ra)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===oa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cu||s===uu||s===fu||s===hu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===cu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===M0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===du||s===pu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===du)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===pu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mu||s===gu||s===_u||s===xu||s===vu||s===yu||s===bu||s===Mu||s===Su||s===wu||s===Tu||s===Eu||s===Au||s===Cu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===mu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_u)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Su)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Eu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Au)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cu)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===aa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===aa)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===S0||s===Ru||s===Lu||s===Pu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===aa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ru)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class OM extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pi extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),x=this._getHandJoint(c,d);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=m.radius),x.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class UM extends wt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ni,u!==Ni&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ni&&(n=Ri),n===void 0&&u===Cr&&(n=gr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1}}class zM extends Hi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const d=t.getContextAttributes();let m=null,x=null;const b=[],_=[],y=new Set,S=new Map,C=new Ut;C.layers.enable(1),C.viewport=new rt;const D=new Ut;D.layers.enable(2),D.viewport=new rt;const M=[C,D],E=new OM;E.layers.enable(1),E.layers.enable(2);let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let le=b[G];return le===void 0&&(le=new Ia,b[G]=le),le.getTargetRaySpace()},this.getControllerGrip=function(G){let le=b[G];return le===void 0&&(le=new Ia,b[G]=le),le.getGripSpace()},this.getHand=function(G){let le=b[G];return le===void 0&&(le=new Ia,b[G]=le),le.getHandSpace()};function Z(G){const le=_.indexOf(G.inputSource);if(le===-1)return;const xe=b[le];xe!==void 0&&xe.dispatchEvent({type:G.type,data:G.inputSource})}function k(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",z);for(let G=0;G<b.length;G++){const le=_[G];le!==null&&(_[G]=null,b[G].disconnect(le))}P=null,W=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,x=null,we.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",z),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:p}),x=new Ui(p.framebufferWidth,p.framebufferHeight,{format:en,type:Fi,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let le=null,xe=null,N=null;d.depth&&(N=d.stencil?35056:33190,le=d.stencil?Cr:Ni,xe=d.stencil?gr:Ri);const I={colorFormat:32856,depthFormat:N,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(I),r.updateRenderState({layers:[h]}),x=new Ui(h.textureWidth,h.textureHeight,{format:en,type:Fi,depthTexture:new UM(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const ie=e.properties.get(x);ie.__ignoreDepthValues=h.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),we.setContext(r),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(G){for(let le=0;le<G.removed.length;le++){const xe=G.removed[le],N=_.indexOf(xe);N>=0&&(_[N]=null,b[N].disconnect(xe))}for(let le=0;le<G.added.length;le++){const xe=G.added[le];let N=_.indexOf(xe);if(N===-1){for(let ie=0;ie<b.length;ie++)if(ie>=_.length){_.push(xe),N=ie;break}else if(_[ie]===null){_[ie]=xe,N=ie;break}if(N===-1)break}const I=b[N];I&&I.connect(xe)}}const X=new U,Q=new U;function $(G,le,xe){X.setFromMatrixPosition(le.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);const N=X.distanceTo(Q),I=le.projectionMatrix.elements,ie=xe.projectionMatrix.elements,oe=I[14]/(I[10]-1),me=I[14]/(I[10]+1),pe=(I[9]+1)/I[5],Te=(I[9]-1)/I[5],T=(I[8]-1)/I[0],R=(ie[8]+1)/ie[0],j=oe*T,Y=oe*R,J=N/(-T+R),fe=J*-T;le.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(fe),G.translateZ(J),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const de=oe+J,re=me+J,ge=j-fe,ae=Y+(N-fe),w=pe*me/re*de,v=Te*me/re*de;G.projectionMatrix.makePerspective(ge,ae,w,v,de,re)}function H(G,le){le===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(le.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;E.near=D.near=C.near=G.near,E.far=D.far=C.far=G.far,(P!==E.near||W!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,W=E.far);const le=G.parent,xe=E.cameras;H(E,le);for(let I=0;I<xe.length;I++)H(xe[I],le);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),G.matrix.copy(E.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const N=G.children;for(let I=0,ie=N.length;I<ie;I++)N[I].updateMatrixWorld(!0);xe.length===2?$(E,C,D):E.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.getPlanes=function(){return y};let ce=null;function ue(G,le){if(u=le.getViewerPose(c||o),g=le,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let N=!1;xe.length!==E.cameras.length&&(E.cameras.length=0,N=!0);for(let I=0;I<xe.length;I++){const ie=xe[I];let oe=null;if(p!==null)oe=p.getViewport(ie);else{const pe=f.getViewSubImage(h,ie);oe=pe.viewport,I===0&&(e.setRenderTargetTextures(x,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(x))}let me=M[I];me===void 0&&(me=new Ut,me.layers.enable(I),me.viewport=new rt,M[I]=me),me.matrix.fromArray(ie.transform.matrix),me.projectionMatrix.fromArray(ie.projectionMatrix),me.viewport.set(oe.x,oe.y,oe.width,oe.height),I===0&&E.matrix.copy(me.matrix),N===!0&&E.cameras.push(me)}}for(let xe=0;xe<b.length;xe++){const N=_[xe],I=b[xe];N!==null&&I!==void 0&&I.update(N,le,c||o)}if(ce&&ce(G,le),le.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:le.detectedPlanes});let xe=null;for(const N of y)le.detectedPlanes.has(N)||(xe===null&&(xe=[]),xe.push(N));if(xe!==null)for(const N of xe)y.delete(N),S.delete(N),n.dispatchEvent({type:"planeremoved",data:N});for(const N of le.detectedPlanes)if(!y.has(N))y.add(N),S.set(N,le.lastChangedTime),n.dispatchEvent({type:"planeadded",data:N});else{const I=S.get(N);N.lastChangedTime>I&&(S.set(N,N.lastChangedTime),n.dispatchEvent({type:"planechanged",data:N}))}}g=null}const we=new wd;we.setAnimationLoop(ue),this.setAnimationLoop=function(G){ce=G},this.dispose=function(){}}}function kM(i,e){function t(d,m){m.color.getRGB(d.fogColor.value,bd(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,x,b,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),c(d,m)):m.isMeshStandardMaterial?(r(d,m),f(d,m),m.isMeshPhysicalMaterial&&h(d,m,_)):m.isMeshMatcapMaterial?(r(d,m),p(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),g(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,x,b):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===Yt&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===Yt&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const x=e.get(m).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=i.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let _;m.aoMap?_=m.aoMap:m.lightMap&&(_=m.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uv2Transform.value.copy(_.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,x,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*x,d.scale.value=b*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,x){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Yt&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function BM(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(b,_){const y=_.program;n.uniformBlockBinding(b,y)}function c(b,_){let y=r[b.id];y===void 0&&(g(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",m));const S=_.program;n.updateUBOMapping(b,S);const C=e.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){const _=f();b.__bindingPointIndex=_;const y=i.createBuffer(),S=b.__size,C=b.usage;return i.bindBuffer(35345,y),i.bufferData(35345,S,C),i.bindBuffer(35345,null),i.bindBufferBase(35345,_,y),y}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const _=r[b.id],y=b.uniforms,S=b.__cache;i.bindBuffer(35345,_);for(let C=0,D=y.length;C<D;C++){const M=y[C];if(p(M,C,S)===!0){const E=M.__offset,P=Array.isArray(M.value)?M.value:[M.value];let W=0;for(let Z=0;Z<P.length;Z++){const k=P[Z],z=d(k);typeof k=="number"?(M.__data[0]=k,i.bufferSubData(35345,E+W,M.__data)):k.isMatrix3?(M.__data[0]=k.elements[0],M.__data[1]=k.elements[1],M.__data[2]=k.elements[2],M.__data[3]=k.elements[0],M.__data[4]=k.elements[3],M.__data[5]=k.elements[4],M.__data[6]=k.elements[5],M.__data[7]=k.elements[0],M.__data[8]=k.elements[6],M.__data[9]=k.elements[7],M.__data[10]=k.elements[8],M.__data[11]=k.elements[0]):(k.toArray(M.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,E,M.__data)}}i.bindBuffer(35345,null)}function p(b,_,y){const S=b.value;if(y[_]===void 0){if(typeof S=="number")y[_]=S;else{const C=Array.isArray(S)?S:[S],D=[];for(let M=0;M<C.length;M++)D.push(C[M].clone());y[_]=D}return!0}else if(typeof S=="number"){if(y[_]!==S)return y[_]=S,!0}else{const C=Array.isArray(y[_])?y[_]:[y[_]],D=Array.isArray(S)?S:[S];for(let M=0;M<C.length;M++){const E=C[M];if(E.equals(D[M])===!1)return E.copy(D[M]),!0}}return!1}function g(b){const _=b.uniforms;let y=0;const S=16;let C=0;for(let D=0,M=_.length;D<M;D++){const E=_[D],P={boundary:0,storage:0},W=Array.isArray(E.value)?E.value:[E.value];for(let Z=0,k=W.length;Z<k;Z++){const z=W[Z],X=d(z);P.boundary+=X.boundary,P.storage+=X.storage}if(E.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,D>0){C=y%S;const Z=S-C;C!==0&&Z-P.boundary<0&&(y+=S-C,E.__offset=y)}y+=P.storage}return C=y%S,C>0&&(y+=S-C),b.__size=y,b.__cache={},this}function d(b){const _={boundary:0,storage:0};return typeof b=="number"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){const _=b.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function x(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:x}}function HM(){const i=Ss("canvas");return i.style.display="block",i}function Rd(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:HM(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=di,this.physicallyCorrectLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const d=this;let m=!1,x=0,b=0,_=null,y=-1,S=null;const C=new rt,D=new rt;let M=null,E=e.width,P=e.height,W=1,Z=null,k=null;const z=new rt(0,0,E,P),X=new rt(0,0,E,P);let Q=!1;const $=new Vl;let H=!1,ce=!1,ue=null;const we=new Ve,G=new Ne,le=new U,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return _===null?W:1}let I=t;function ie(A,q){for(let te=0;te<A.length;te++){const V=A[te],se=e.getContext(V,q);if(se!==null)return se}return null}try{const A={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kl}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",De,!1),I===null){const q=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&q.shift(),I=ie(q,A),I===null)throw ie(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let oe,me,pe,Te,T,R,j,Y,J,fe,de,re,ge,ae,w,v,F,K,ne,he,ye,L,B,be;function Ee(){oe=new Jy(I),me=new qy(I,oe,i),oe.init(me),L=new NM(I,oe,me),pe=new DM(I,oe,me),Te=new tb,T=new xM,R=new IM(I,oe,pe,T,me,L,Te),j=new Ky(d),Y=new Zy(d),J=new ux(I,me),B=new Wy(I,oe,J,me),fe=new Qy(I,J,Te,B),de=new sb(I,fe,J,Te),ne=new rb(I,me,R),v=new Xy(T),re=new _M(d,j,Y,oe,me,B,v),ge=new kM(d,T),ae=new yM,w=new EM(oe,me),K=new Gy(d,j,Y,pe,de,u,o),F=new PM(d,de,me),be=new BM(I,Te,me,pe),he=new jy(I,oe,Te,me),ye=new eb(I,oe,Te,me),Te.programs=re.programs,d.capabilities=me,d.extensions=oe,d.properties=T,d.renderLists=ae,d.shadowMap=F,d.state=pe,d.info=Te}Ee();const Me=new zM(d,I);this.xr=Me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(E,P,!1))},this.getSize=function(A){return A.set(E,P)},this.setSize=function(A,q,te){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=A,P=q,e.width=Math.floor(A*W),e.height=Math.floor(q*W),te!==!1&&(e.style.width=A+"px",e.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(E*W,P*W).floor()},this.setDrawingBufferSize=function(A,q,te){E=A,P=q,W=te,e.width=Math.floor(A*te),e.height=Math.floor(q*te),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(z)},this.setViewport=function(A,q,te,V){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,q,te,V),pe.viewport(C.copy(z).multiplyScalar(W).floor())},this.getScissor=function(A){return A.copy(X)},this.setScissor=function(A,q,te,V){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,q,te,V),pe.scissor(D.copy(X).multiplyScalar(W).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(A){pe.setScissorTest(Q=A)},this.setOpaqueSort=function(A){Z=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(A=!0,q=!0,te=!0){let V=0;A&&(V|=16384),q&&(V|=256),te&&(V|=1024),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",De,!1),ae.dispose(),w.dispose(),T.dispose(),j.dispose(),Y.dispose(),de.dispose(),B.dispose(),be.dispose(),re.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Ae),Me.removeEventListener("sessionend",Re),ue&&(ue.dispose(),ue=null),Ze.stop()};function Ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const A=Te.autoReset,q=F.enabled,te=F.autoUpdate,V=F.needsUpdate,se=F.type;Ee(),Te.autoReset=A,F.enabled=q,F.autoUpdate=te,F.needsUpdate=V,F.type=se}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){const q=A.target;q.removeEventListener("dispose",Be),nt(q)}function nt(A){O(A),T.remove(A)}function O(A){const q=T.get(A).programs;q!==void 0&&(q.forEach(function(te){re.releaseProgram(te)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,te,V,se,Pe){q===null&&(q=xe);const Ie=se.isMesh&&se.matrixWorld.determinant()<0,Ue=np(A,q,te,V,se);pe.setMaterial(V,Ie);let He=te.index,Ke=1;V.wireframe===!0&&(He=fe.getWireframeAttribute(te),Ke=2);const Ge=te.drawRange,We=te.attributes.position;let ft=Ge.start*Ke,Gt=(Ge.start+Ge.count)*Ke;Pe!==null&&(ft=Math.max(ft,Pe.start*Ke),Gt=Math.min(Gt,(Pe.start+Pe.count)*Ke)),He!==null?(ft=Math.max(ft,0),Gt=Math.min(Gt,He.count)):We!=null&&(ft=Math.max(ft,0),Gt=Math.min(Gt,We.count));const Rn=Gt-ft;if(Rn<0||Rn===1/0)return;B.setup(se,V,Ue,te,He);let mi,ht=he;if(He!==null&&(mi=J.get(He),ht=ye,ht.setIndex(mi)),se.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*N()),ht.setMode(1)):ht.setMode(4);else if(se.isLine){let je=V.linewidth;je===void 0&&(je=1),pe.setLineWidth(je*N()),se.isLineSegments?ht.setMode(1):se.isLineLoop?ht.setMode(2):ht.setMode(3)}else se.isPoints?ht.setMode(0):se.isSprite&&ht.setMode(4);if(se.isInstancedMesh)ht.renderInstances(ft,Rn,se.count);else if(te.isInstancedBufferGeometry){const je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Vo=Math.min(te.instanceCount,je);ht.renderInstances(ft,Rn,Vo)}else ht.render(ft,Rn)},this.compile=function(A,q){function te(V,se,Pe){V.transparent===!0&&V.side===Bn&&V.forceSinglePass===!1?(V.side=Yt,V.needsUpdate=!0,$t(V,se,Pe),V.side=Kn,V.needsUpdate=!0,$t(V,se,Pe),V.side=Bn):$t(V,se,Pe)}h=w.get(A),h.init(),g.push(h),A.traverseVisible(function(V){V.isLight&&V.layers.test(q.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights(d.physicallyCorrectLights),A.traverse(function(V){const se=V.material;if(se)if(Array.isArray(se))for(let Pe=0;Pe<se.length;Pe++){const Ie=se[Pe];te(Ie,A,V)}else te(se,A,V)}),g.pop(),h=null};let ee=null;function _e(A){ee&&ee(A)}function Ae(){Ze.stop()}function Re(){Ze.start()}const Ze=new wd;Ze.setAnimationLoop(_e),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(A){ee=A,Me.setAnimationLoop(A),A===null?Ze.stop():Ze.start()},Me.addEventListener("sessionstart",Ae),Me.addEventListener("sessionend",Re),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(q),q=Me.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,q,_),h=w.get(A,g.length),h.init(),g.push(h),we.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(we),ce=this.localClippingEnabled,H=v.init(this.clippingPlanes,ce),f=ae.get(A,p.length),f.init(),p.push(f),vt(A,q,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(Z,k),H===!0&&v.beginShadows();const te=h.state.shadowsArray;if(F.render(te,A,q),H===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(f,A),h.setupLights(d.physicallyCorrectLights),q.isArrayCamera){const V=q.cameras;for(let se=0,Pe=V.length;se<Pe;se++){const Ie=V[se];At(f,A,Ie,Ie.viewport)}}else At(f,A,q);_!==null&&(R.updateMultisampleRenderTarget(_),R.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(d,A,q),B.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function vt(A,q,te,V){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){V&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Ie=de.update(A),Ue=A.material;Ue.visible&&f.push(A,Ie,Ue,te,le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Te.render.frame&&(A.skeleton.update(),A.skeleton.frame=Te.render.frame),!A.frustumCulled||$.intersectsObject(A))){V&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Ie=de.update(A),Ue=A.material;if(Array.isArray(Ue)){const He=Ie.groups;for(let Ke=0,Ge=He.length;Ke<Ge;Ke++){const We=He[Ke],ft=Ue[We.materialIndex];ft&&ft.visible&&f.push(A,Ie,ft,te,le.z,We)}}else Ue.visible&&f.push(A,Ie,Ue,te,le.z,null)}}const Pe=A.children;for(let Ie=0,Ue=Pe.length;Ie<Ue;Ie++)vt(Pe[Ie],q,te,V)}function At(A,q,te,V){const se=A.opaque,Pe=A.transmissive,Ie=A.transparent;h.setupLightsView(te),H===!0&&v.setGlobalState(d.clippingPlanes,te),Pe.length>0&&pi(se,q,te),V&&pe.viewport(C.copy(V)),se.length>0&&ot(se,q,te),Pe.length>0&&ot(Pe,q,te),Ie.length>0&&ot(Ie,q,te),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function pi(A,q,te){const V=me.isWebGL2;ue===null&&(ue=new Ui(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Hn:Fi,minFilter:hi,samples:V&&s===!0?4:0})),d.getDrawingBufferSize(G),V?ue.setSize(G.x,G.y):ue.setSize(Mo(G.x),Mo(G.y));const se=d.getRenderTarget();d.setRenderTarget(ue),d.clear();const Pe=d.toneMapping;d.toneMapping=Wn,ot(A,q,te),d.toneMapping=Pe,R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue),d.setRenderTarget(se)}function ot(A,q,te){const V=q.isScene===!0?q.overrideMaterial:null;for(let se=0,Pe=A.length;se<Pe;se++){const Ie=A[se],Ue=Ie.object,He=Ie.geometry,Ke=V===null?Ie.material:V,Ge=Ie.group;Ue.layers.test(te.layers)&&Cn(Ue,q,te,He,Ke,Ge)}}function Cn(A,q,te,V,se,Pe){A.onBeforeRender(d,q,te,V,se,Pe),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(d,q,te,V,A,Pe),se.transparent===!0&&se.side===Bn&&se.forceSinglePass===!1?(se.side=Yt,se.needsUpdate=!0,d.renderBufferDirect(te,q,V,se,A,Pe),se.side=Kn,se.needsUpdate=!0,d.renderBufferDirect(te,q,V,se,A,Pe),se.side=Bn):d.renderBufferDirect(te,q,V,se,A,Pe),A.onAfterRender(d,q,te,V,se,Pe)}function $t(A,q,te){q.isScene!==!0&&(q=xe);const V=T.get(A),se=h.state.lights,Pe=h.state.shadowsArray,Ie=se.state.version,Ue=re.getParameters(A,se.state,Pe,q,te),He=re.getProgramCacheKey(Ue);let Ke=V.programs;V.environment=A.isMeshStandardMaterial?q.environment:null,V.fog=q.fog,V.envMap=(A.isMeshStandardMaterial?Y:j).get(A.envMap||V.environment),Ke===void 0&&(A.addEventListener("dispose",Be),Ke=new Map,V.programs=Ke);let Ge=Ke.get(He);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===Ie)return fc(A,Ue),Ge}else Ue.uniforms=re.getUniforms(A),A.onBuild(te,Ue,d),A.onBeforeCompile(Ue,d),Ge=re.acquireProgram(Ue,He),Ke.set(He,Ge),V.uniforms=Ue.uniforms;const We=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=v.uniform),fc(A,Ue),V.needsLights=rp(A),V.lightsStateVersion=Ie,V.needsLights&&(We.ambientLightColor.value=se.state.ambient,We.lightProbe.value=se.state.probe,We.directionalLights.value=se.state.directional,We.directionalLightShadows.value=se.state.directionalShadow,We.spotLights.value=se.state.spot,We.spotLightShadows.value=se.state.spotShadow,We.rectAreaLights.value=se.state.rectArea,We.ltc_1.value=se.state.rectAreaLTC1,We.ltc_2.value=se.state.rectAreaLTC2,We.pointLights.value=se.state.point,We.pointLightShadows.value=se.state.pointShadow,We.hemisphereLights.value=se.state.hemi,We.directionalShadowMap.value=se.state.directionalShadowMap,We.directionalShadowMatrix.value=se.state.directionalShadowMatrix,We.spotShadowMap.value=se.state.spotShadowMap,We.spotLightMatrix.value=se.state.spotLightMatrix,We.spotLightMap.value=se.state.spotLightMap,We.pointShadowMap.value=se.state.pointShadowMap,We.pointShadowMatrix.value=se.state.pointShadowMatrix);const ft=Ge.getUniforms(),Gt=ho.seqWithValue(ft.seq,We);return V.currentProgram=Ge,V.uniformsList=Gt,Ge}function fc(A,q){const te=T.get(A);te.outputEncoding=q.outputEncoding,te.instancing=q.instancing,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function np(A,q,te,V,se){q.isScene!==!0&&(q=xe),R.resetTextureUnits();const Pe=q.fog,Ie=V.isMeshStandardMaterial?q.environment:null,Ue=_===null?d.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:di,He=(V.isMeshStandardMaterial?Y:j).get(V.envMap||Ie),Ke=V.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ge=!!V.normalMap&&!!te.attributes.tangent,We=!!te.morphAttributes.position,ft=!!te.morphAttributes.normal,Gt=!!te.morphAttributes.color,Rn=V.toneMapped?d.toneMapping:Wn,mi=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ht=mi!==void 0?mi.length:0,je=T.get(V),Vo=h.state.lights;if(H===!0&&(ce===!0||A!==S)){const Wt=A===S&&V.id===y;v.setState(V,A,Wt)}let yt=!1;V.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Vo.state.version||je.outputEncoding!==Ue||se.isInstancedMesh&&je.instancing===!1||!se.isInstancedMesh&&je.instancing===!0||se.isSkinnedMesh&&je.skinning===!1||!se.isSkinnedMesh&&je.skinning===!0||je.envMap!==He||V.fog===!0&&je.fog!==Pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==v.numPlanes||je.numIntersection!==v.numIntersection)||je.vertexAlphas!==Ke||je.vertexTangents!==Ge||je.morphTargets!==We||je.morphNormals!==ft||je.morphColors!==Gt||je.toneMapping!==Rn||me.isWebGL2===!0&&je.morphTargetsCount!==ht)&&(yt=!0):(yt=!0,je.__version=V.version);let gi=je.currentProgram;yt===!0&&(gi=$t(V,q,se));let hc=!1,Br=!1,Go=!1;const Dt=gi.getUniforms(),_i=je.uniforms;if(pe.useProgram(gi.program)&&(hc=!0,Br=!0,Go=!0),V.id!==y&&(y=V.id,Br=!0),hc||S!==A){if(Dt.setValue(I,"projectionMatrix",A.projectionMatrix),me.logarithmicDepthBuffer&&Dt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),S!==A&&(S=A,Br=!0,Go=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Wt=Dt.map.cameraPosition;Wt!==void 0&&Wt.setValue(I,le.setFromMatrixPosition(A.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Dt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||se.isSkinnedMesh)&&Dt.setValue(I,"viewMatrix",A.matrixWorldInverse)}if(se.isSkinnedMesh){Dt.setOptional(I,se,"bindMatrix"),Dt.setOptional(I,se,"bindMatrixInverse");const Wt=se.skeleton;Wt&&(me.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Dt.setValue(I,"boneTexture",Wt.boneTexture,R),Dt.setValue(I,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wo=te.morphAttributes;if((Wo.position!==void 0||Wo.normal!==void 0||Wo.color!==void 0&&me.isWebGL2===!0)&&ne.update(se,te,V,gi),(Br||je.receiveShadow!==se.receiveShadow)&&(je.receiveShadow=se.receiveShadow,Dt.setValue(I,"receiveShadow",se.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(_i.envMap.value=He,_i.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Br&&(Dt.setValue(I,"toneMappingExposure",d.toneMappingExposure),je.needsLights&&ip(_i,Go),Pe&&V.fog===!0&&ge.refreshFogUniforms(_i,Pe),ge.refreshMaterialUniforms(_i,V,W,P,ue),ho.upload(I,je.uniformsList,_i,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ho.upload(I,je.uniformsList,_i,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Dt.setValue(I,"center",se.center),Dt.setValue(I,"modelViewMatrix",se.modelViewMatrix),Dt.setValue(I,"normalMatrix",se.normalMatrix),Dt.setValue(I,"modelMatrix",se.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Wt=V.uniformsGroups;for(let jo=0,sp=Wt.length;jo<sp;jo++)if(me.isWebGL2){const dc=Wt[jo];be.update(dc,gi),be.bind(dc,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function ip(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function rp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,q,te){T.get(A.texture).__webglTexture=q,T.get(A.depthTexture).__webglTexture=te;const V=T.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=te===void 0,V.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,q){const te=T.get(A);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,te=0){_=A,x=q,b=te;let V=!0,se=null,Pe=!1,Ie=!1;if(A){const He=T.get(A);He.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),V=!1):He.__webglFramebuffer===void 0?R.setupRenderTarget(A):He.__hasExternalTextures&&R.rebindTextures(A,T.get(A.texture).__webglTexture,T.get(A.depthTexture).__webglTexture);const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ie=!0);const Ge=T.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(se=Ge[q],Pe=!0):me.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?se=T.get(A).__webglMultisampledFramebuffer:se=Ge,C.copy(A.viewport),D.copy(A.scissor),M=A.scissorTest}else C.copy(z).multiplyScalar(W).floor(),D.copy(X).multiplyScalar(W).floor(),M=Q;if(pe.bindFramebuffer(36160,se)&&me.drawBuffers&&V&&pe.drawBuffers(A,se),pe.viewport(C),pe.scissor(D),pe.setScissorTest(M),Pe){const He=T.get(A.texture);I.framebufferTexture2D(36160,36064,34069+q,He.__webglTexture,te)}else if(Ie){const He=T.get(A.texture),Ke=q||0;I.framebufferTextureLayer(36160,36064,He.__webglTexture,te||0,Ke)}y=-1},this.readRenderTargetPixels=function(A,q,te,V,se,Pe,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){pe.bindFramebuffer(36160,Ue);try{const He=A.texture,Ke=He.format,Ge=He.type;if(Ke!==en&&L.convert(Ke)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===Hn&&(oe.has("EXT_color_buffer_half_float")||me.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ge!==Fi&&L.convert(Ge)!==I.getParameter(35738)&&!(Ge===fn&&(me.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-V&&te>=0&&te<=A.height-se&&I.readPixels(q,te,V,se,L.convert(Ke),L.convert(Ge),Pe)}finally{const He=_!==null?T.get(_).__webglFramebuffer:null;pe.bindFramebuffer(36160,He)}}},this.copyFramebufferToTexture=function(A,q,te=0){const V=Math.pow(2,-te),se=Math.floor(q.image.width*V),Pe=Math.floor(q.image.height*V);R.setTexture2D(q,0),I.copyTexSubImage2D(3553,te,0,0,A.x,A.y,se,Pe),pe.unbindTexture()},this.copyTextureToTexture=function(A,q,te,V=0){const se=q.image.width,Pe=q.image.height,Ie=L.convert(te.format),Ue=L.convert(te.type);R.setTexture2D(te,0),I.pixelStorei(37440,te.flipY),I.pixelStorei(37441,te.premultiplyAlpha),I.pixelStorei(3317,te.unpackAlignment),q.isDataTexture?I.texSubImage2D(3553,V,A.x,A.y,se,Pe,Ie,Ue,q.image.data):q.isCompressedTexture?I.compressedTexSubImage2D(3553,V,A.x,A.y,q.mipmaps[0].width,q.mipmaps[0].height,Ie,q.mipmaps[0].data):I.texSubImage2D(3553,V,A.x,A.y,Ie,Ue,q.image),V===0&&te.generateMipmaps&&I.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(A,q,te,V,se=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=A.max.x-A.min.x+1,Ie=A.max.y-A.min.y+1,Ue=A.max.z-A.min.z+1,He=L.convert(V.format),Ke=L.convert(V.type);let Ge;if(V.isData3DTexture)R.setTexture3D(V,0),Ge=32879;else if(V.isDataArrayTexture)R.setTexture2DArray(V,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,V.flipY),I.pixelStorei(37441,V.premultiplyAlpha),I.pixelStorei(3317,V.unpackAlignment);const We=I.getParameter(3314),ft=I.getParameter(32878),Gt=I.getParameter(3316),Rn=I.getParameter(3315),mi=I.getParameter(32877),ht=te.isCompressedTexture?te.mipmaps[0]:te.image;I.pixelStorei(3314,ht.width),I.pixelStorei(32878,ht.height),I.pixelStorei(3316,A.min.x),I.pixelStorei(3315,A.min.y),I.pixelStorei(32877,A.min.z),te.isDataTexture||te.isData3DTexture?I.texSubImage3D(Ge,se,q.x,q.y,q.z,Pe,Ie,Ue,He,Ke,ht.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ge,se,q.x,q.y,q.z,Pe,Ie,Ue,He,ht.data)):I.texSubImage3D(Ge,se,q.x,q.y,q.z,Pe,Ie,Ue,He,Ke,ht),I.pixelStorei(3314,We),I.pixelStorei(32878,ft),I.pixelStorei(3316,Gt),I.pixelStorei(3315,Rn),I.pixelStorei(32877,mi),se===0&&V.generateMipmaps&&I.generateMipmap(Ge),pe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){x=0,b=0,_=null,pe.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class VM extends Rd{}VM.prototype.isWebGL1Renderer=!0;class GM extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class WM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ol,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new U;class ql{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ql(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gf=new U,_f=new rt,xf=new rt,jM=new U,vf=new Ve;class qM extends tn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;_f.fromBufferAttribute(r.attributes.skinIndex,e),xf.fromBufferAttribute(r.attributes.skinWeight,e),gf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=xf.getComponent(s);if(o!==0){const a=_f.getComponent(s);vf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(jM.copy(gf).applyMatrix4(vf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ld extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pd extends wt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Mt,u=Mt,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yf=new Ve,XM=new Ve;class Xl{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:XM;yf.multiplyMatrices(a,t[s]),yf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Xl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=hd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Pd(t,e,e,en,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ld),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class bf extends Tt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mf=new Ve,Sf=new Ve,eo=[],KM=new Ve,$r=new tn;class YM extends tn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bf(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let r=0;r<n;r++)this.setMatrixAt(r,KM)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Mf),Sf.multiplyMatrices(n,Mf),$r.matrixWorld=Sf,$r.raycast(e,eo);for(let o=0,a=eo.length;o<a;o++){const l=eo[o];l.instanceId=s,l.object=this,t.push(l)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Dd extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wf=new U,Tf=new U,Ef=new Ve,Na=new Hl,to=new Fr;class Kl extends ct{constructor(e=new _n,t=new Dd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)wf.fromBufferAttribute(t,r-1),Tf.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=wf.distanceTo(Tf);e.setAttribute("lineDistance",new jn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),to.radius+=s,e.ray.intersectsSphere(to)===!1)return;Ef.copy(r).invert(),Na.copy(e.ray).applyMatrix4(Ef);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,f=new U,h=new U,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let _=x,y=b-1;_<y;_+=p){const S=g.getX(_),C=g.getX(_+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,C),Na.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let _=x,y=b-1;_<y;_+=p){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Na.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Af=new U,Cf=new U;class $M extends Kl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Af.fromBufferAttribute(t,r),Cf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Af.distanceTo(Cf);e.setAttribute("lineDistance",new jn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ZM extends Kl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Id extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rf=new Ve,ul=new Hl,no=new Fr,io=new U;class JM extends ct{constructor(e=new _n,t=new Id){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;Rf.copy(r).invert(),ul.copy(e.ray).applyMatrix4(Rf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,d=p;g<d;g++){const m=c.getX(g);io.fromBufferAttribute(f,m),Lf(io,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,d=p;g<d;g++)io.fromBufferAttribute(f,g),Lf(io,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lf(i,e,t,n,r,s,o){const a=ul.distanceSqToPoint(i);if(a<t){const l=new U;ul.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Yl extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vi extends Yl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ii(i,e,t){return Nd(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function ro(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Nd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function QM(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Pf(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Od(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Rs{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class e1 extends Rs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Du,endingEnd:Du}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Iu:s=e,a=2*t-n;break;case Nu:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Iu:o=e,l=2*n-t;break;case Nu:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),d=g*g,m=d*g,x=-h*m+2*h*d-h*g,b=(1+h)*m+(-1.5-2*h)*d+(-.5+h)*g+1,_=(-1-p)*m+(1.5+p)*d+.5*g,y=p*m-p*d;for(let S=0;S!==a;++S)s[S]=x*o[u+S]+b*o[c+S]+_*o[l+S]+y*o[f+S];return s}}class t1 extends Rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class n1 extends Rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class An{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new n1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new t1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new e1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ys:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ii(n,s,o),this.values=ii(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Nd(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ii(this.times),t=ii(this.values),n=this.getValueSize(),r=this.getInterpolation()===la,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){const d=t[f+g];if(d!==t[h+g]||d!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ii(e,0,o),this.values=ii(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ii(this.times,0),t=ii(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Rr;class zr extends An{}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=ys;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fd extends An{}Fd.prototype.ValueTypeName="color";class ws extends An{}ws.prototype.ValueTypeName="number";class i1 extends Rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)En.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ki extends An{InterpolantFactoryMethodLinear(e){return new i1(this.times,this.values,this.getValueSize(),e)}}ki.prototype.ValueTypeName="quaternion";ki.prototype.DefaultInterpolation=Rr;ki.prototype.InterpolantFactoryMethodSmooth=void 0;class kr extends An{}kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=ys;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends An{}Ts.prototype.ValueTypeName="vector";class r1{constructor(e,t=-1,n,r=w0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(o1(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(An.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=QM(l);l=Pf(l,1,u),c=Pf(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ws(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,g,d){if(p.length!==0){const m=[],x=[];Od(p,m,x,g),m.length!==0&&d.push(new f(h,m,x))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let d=0;d<h[g].morphTargets.length;d++)p[h[g].morphTargets[d]]=-1;for(const d in p){const m=[],x=[];for(let b=0;b!==h[g].morphTargets.length;++b){const _=h[g];m.push(_.time),x.push(_.morphTarget===d?1:0)}r.push(new ws(".morphTargetInfluence["+d+"]",m,x))}l=p.length*o}else{const p=".bones["+t[f].name+"]";n(Ts,p+".position",h,"pos",r),n(ki,p+".quaternion",h,"rot",r),n(Ts,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function s1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ws;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return Fd;case"quaternion":return ki;case"bool":case"boolean":return zr;case"string":return kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function o1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=s1(i.type);if(i.times===void 0){const t=[],n=[];Od(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Pr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class a1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const l1=new a1;class Gi{constructor(e){this.manager=e!==void 0?e:l1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Fn={};class c1 extends Error{constructor(e,t){super(e),this.response=t}}class Es extends Gi{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:r});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Fn[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let d=0;const m=new ReadableStream({start(x){b();function b(){f.read().then(({done:_,value:y})=>{if(_)x.close();else{d+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:p});for(let C=0,D=u.length;C<D;C++){const M=u[C];M.onProgress&&M.onProgress(S)}x.enqueue(y),b()}})}}});return new Response(m)}else throw new c1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Pr.add(e,c);const u=Fn[e];delete Fn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Fn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Fn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class u1 extends Gi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ss("img");function l(){u(),Pr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class f1 extends Gi{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Pd,a=new Es(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Bt,o.wrapT=c.wrapT!==void 0?c.wrapT:Bt,o.magFilter=c.magFilter!==void 0?c.magFilter:mt,o.minFilter=c.minFilter!==void 0?c.minFilter:mt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=hi),c.mipmapCount===1&&(o.minFilter=mt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,r),o}}class h1 extends Gi{constructor(e){super(e)}load(e,t,n,r){const s=new wt,o=new u1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class $l extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Oa=new Ve,Df=new U,If=new U;class Zl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),If.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(If),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class d1 extends Zl{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ms*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class p1 extends $l{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new d1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nf=new Ve,Zr=new U,Fa=new U;class m1 extends Zl{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zr),Fa.copy(n.position),Fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fa),n.updateMatrixWorld(),r.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nf)}}class g1 extends $l{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new m1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _1 extends Zl{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class x1 extends $l{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new _1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fl{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class v1 extends Gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Pr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Jl="\\[\\]\\.:\\/",y1=new RegExp("["+Jl+"]","g"),Ql="[^"+Jl+"]",b1="[^"+Jl.replace("\\.","")+"]",M1=/((?:WC+[\/:])*)/.source.replace("WC",Ql),S1=/(WCOD+)?/.source.replace("WCOD",b1),w1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),T1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),E1=new RegExp("^"+M1+S1+w1+T1+"$"),A1=["material","materials","bones","map"];class C1{constructor(e,t,n){const r=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(y1,"")}static parseTrackName(e){const t=E1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);A1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=C1;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Of{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const kn=R1();function R1(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function L1(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=St(i,-65504,65504),kn.floatView[0]=i;const e=kn.uint32View[0],t=e>>23&511;return kn.baseTable[t]+((e&8388607)>>kn.shiftTable[t])}function P1(i){const e=i>>10;return kn.uint32View[0]=kn.mantissaTable[kn.offsetTable[e]+(i&1023)]+kn.exponentTable[e],kn.floatView[0]}var so=Object.freeze({__proto__:null,fromHalfFloat:P1,toHalfFloat:L1});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);const Ff={type:"change"},Ua={type:"start"},Uf={type:"end"};class D1 extends Hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ae),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ff),n.update(),s=r.NONE},this.update=function(){const L=new U,B=new En().setFromUnitVectors(e.up,new U(0,1,0)),be=B.clone().invert(),Ee=new U,Me=new En,Ce=2*Math.PI;return function(){const De=n.object.position;L.copy(De).sub(n.target),L.applyQuaternion(B),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&E(D()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Be=n.minAzimuthAngle,nt=n.maxAzimuthAngle;return isFinite(Be)&&isFinite(nt)&&(Be<-Math.PI?Be+=Ce:Be>Math.PI&&(Be-=Ce),nt<-Math.PI?nt+=Ce:nt>Math.PI&&(nt-=Ce),Be<=nt?a.theta=Math.max(Be,Math.min(nt,a.theta)):a.theta=a.theta>(Be+nt)/2?Math.max(Be,a.theta):Math.min(nt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(be),De.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Ee.distanceToSquared(n.object.position)>o||8*(1-Me.dot(n.object.quaternion))>o?(n.dispatchEvent(Ff),Ee.copy(n.object.position),Me.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",j),n.domElement.removeEventListener("pointercancel",fe),n.domElement.removeEventListener("wheel",ge),n.domElement.removeEventListener("pointermove",Y),n.domElement.removeEventListener("pointerup",J),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ae)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Of,l=new Of;let c=1;const u=new U;let f=!1;const h=new Ne,p=new Ne,g=new Ne,d=new Ne,m=new Ne,x=new Ne,b=new Ne,_=new Ne,y=new Ne,S=[],C={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function E(L){l.theta-=L}function P(L){l.phi-=L}const W=function(){const L=new U;return function(be,Ee){L.setFromMatrixColumn(Ee,0),L.multiplyScalar(-be),u.add(L)}}(),Z=function(){const L=new U;return function(be,Ee){n.screenSpacePanning===!0?L.setFromMatrixColumn(Ee,1):(L.setFromMatrixColumn(Ee,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(be),u.add(L)}}(),k=function(){const L=new U;return function(be,Ee){const Me=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;L.copy(Ce).sub(n.target);let Se=L.length();Se*=Math.tan(n.object.fov/2*Math.PI/180),W(2*be*Se/Me.clientHeight,n.object.matrix),Z(2*Ee*Se/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(be*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),Z(Ee*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(L){h.set(L.clientX,L.clientY)}function $(L){b.set(L.clientX,L.clientY)}function H(L){d.set(L.clientX,L.clientY)}function ce(L){p.set(L.clientX,L.clientY),g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;E(2*Math.PI*g.x/B.clientHeight),P(2*Math.PI*g.y/B.clientHeight),h.copy(p),n.update()}function ue(L){_.set(L.clientX,L.clientY),y.subVectors(_,b),y.y>0?z(M()):y.y<0&&X(M()),b.copy(_),n.update()}function we(L){m.set(L.clientX,L.clientY),x.subVectors(m,d).multiplyScalar(n.panSpeed),k(x.x,x.y),d.copy(m),n.update()}function G(L){L.deltaY<0?X(M()):L.deltaY>0&&z(M()),n.update()}function le(L){let B=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),B=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),B=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),B=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),B=!0;break}B&&(L.preventDefault(),n.update())}function xe(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),B=.5*(S[0].pageY+S[1].pageY);h.set(L,B)}}function N(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),B=.5*(S[0].pageY+S[1].pageY);d.set(L,B)}}function I(){const L=S[0].pageX-S[1].pageX,B=S[0].pageY-S[1].pageY,be=Math.sqrt(L*L+B*B);b.set(0,be)}function ie(){n.enableZoom&&I(),n.enablePan&&N()}function oe(){n.enableZoom&&I(),n.enableRotate&&xe()}function me(L){if(S.length==1)p.set(L.pageX,L.pageY);else{const be=ye(L),Ee=.5*(L.pageX+be.x),Me=.5*(L.pageY+be.y);p.set(Ee,Me)}g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;E(2*Math.PI*g.x/B.clientHeight),P(2*Math.PI*g.y/B.clientHeight),h.copy(p)}function pe(L){if(S.length===1)m.set(L.pageX,L.pageY);else{const B=ye(L),be=.5*(L.pageX+B.x),Ee=.5*(L.pageY+B.y);m.set(be,Ee)}x.subVectors(m,d).multiplyScalar(n.panSpeed),k(x.x,x.y),d.copy(m)}function Te(L){const B=ye(L),be=L.pageX-B.x,Ee=L.pageY-B.y,Me=Math.sqrt(be*be+Ee*Ee);_.set(0,Me),y.set(0,Math.pow(_.y/b.y,n.zoomSpeed)),z(y.y),b.copy(_)}function T(L){n.enableZoom&&Te(L),n.enablePan&&pe(L)}function R(L){n.enableZoom&&Te(L),n.enableRotate&&me(L)}function j(L){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Y),n.domElement.addEventListener("pointerup",J)),K(L),L.pointerType==="touch"?w(L):de(L))}function Y(L){n.enabled!==!1&&(L.pointerType==="touch"?v(L):re(L))}function J(L){ne(L),S.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Y),n.domElement.removeEventListener("pointerup",J)),n.dispatchEvent(Uf),s=r.NONE}function fe(L){ne(L)}function de(L){let B;switch(L.button){case 0:B=n.mouseButtons.LEFT;break;case 1:B=n.mouseButtons.MIDDLE;break;case 2:B=n.mouseButtons.RIGHT;break;default:B=-1}switch(B){case ji.DOLLY:if(n.enableZoom===!1)return;$(L),s=r.DOLLY;break;case ji.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;H(L),s=r.PAN}else{if(n.enableRotate===!1)return;Q(L),s=r.ROTATE}break;case ji.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;Q(L),s=r.ROTATE}else{if(n.enablePan===!1)return;H(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ua)}function re(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ce(L);break;case r.DOLLY:if(n.enableZoom===!1)return;ue(L);break;case r.PAN:if(n.enablePan===!1)return;we(L);break}}function ge(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(Ua),G(L),n.dispatchEvent(Uf))}function ae(L){n.enabled===!1||n.enablePan===!1||le(L)}function w(L){switch(he(L),S.length){case 1:switch(n.touches.ONE){case qi.ROTATE:if(n.enableRotate===!1)return;xe(),s=r.TOUCH_ROTATE;break;case qi.PAN:if(n.enablePan===!1)return;N(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ie(),s=r.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;oe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ua)}function v(L){switch(he(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;me(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;pe(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;T(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(L),n.update();break;default:s=r.NONE}}function F(L){n.enabled!==!1&&L.preventDefault()}function K(L){S.push(L)}function ne(L){delete C[L.pointerId];for(let B=0;B<S.length;B++)if(S[B].pointerId==L.pointerId){S.splice(B,1);return}}function he(L){let B=C[L.pointerId];B===void 0&&(B=new Ne,C[L.pointerId]=B),B.set(L.pageX,L.pageY)}function ye(L){const B=L.pointerId===S[0].pointerId?S[1]:S[0];return C[B.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",j),n.domElement.addEventListener("pointercancel",fe),n.domElement.addEventListener("wheel",ge,{passive:!1}),this.update()}}function zf(i,e){if(e===T0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===sl||e===ud){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===sl)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class I1 extends Gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new z1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new U1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new K1(t)})}load(e,t,n,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=fl.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Es(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ud){try{o[Xe.KHR_BINARY_GLTF]=new Y1(e)}catch(f){r&&r(f);return}s=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case Xe.KHR_MATERIALS_UNLIT:o[f]=new F1;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[f]=new $1(s,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[f]=new Z1;break;case Xe.KHR_MESH_QUANTIZATION:o[f]=new J1;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function N1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class O1{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ke(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new x1(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new g1(u),c.distance=f;break;case"spot":c=new p1(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class F1{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return Li}extendParams(e,t,n){const r=[];e.color=new ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ye))}return Promise.all(r)}}class U1{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class z1{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(s)}}class k1{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class B1{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ye)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class H1{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class V1{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ke(a[0],a[1],a[2]),Promise.all(s)}}class G1{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class W1{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ke(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ye)),Promise.all(s)}}class j1{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class q1{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class X1{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,r.mode,r.filter),p})})}else return null}}class K1{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of f){const d=new Ve,m=new U,x=new En,b=new U(1,1,1),_=new YM(g.geometry,g.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,d.compose(m,x,b));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);ct.prototype.copy.call(_,g),_.frustumCulled=!1,this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Ud="glTF",Jr=12,kf={JSON:1313821514,BIN:5130562};class Y1{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ud)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Jr,s=new DataView(e,Jr);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===kf.JSON){const c=new Uint8Array(e,Jr+o,a);this.content=n.decode(c)}else if(l===kf.BIN){const c=Jr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=hl[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=hl[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],p=_r[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(h){for(const p in h.attributes){const g=h.attributes[p],d=l[p];d!==void 0&&(g.normalized=d)}f(h)},a,c)})})}}class Z1{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class J1{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class zd extends Rs{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(n-t)/u,h=f*f,p=h*f,g=e*c,d=g-c,m=-2*p+3*h,x=p-h,b=1-m,_=x-h+f;for(let y=0;y!==a;y++){const S=o[d+y+a],C=o[d+y+l]*u,D=o[g+y+a],M=o[g+y]*u;s[y]=b*S+_*C+m*D+x*M}return s}}const Q1=new En;class eS extends zd{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Q1.fromArray(s).normalize().toArray(s),s}}const Jt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bf={9728:Mt,9729:mt,9984:rl,9985:ld,9986:uo,9987:hi},Hf={33071:Bt,33648:bo,10497:Ar},za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tS={CUBICSPLINE:void 0,LINEAR:Rr,STEP:ys},ka={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Yl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),i.DefaultMaterial}function Qr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ai(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iS(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function rS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sS(i){const e=i.extensions&&i.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Vf(e.attributes):t=i.indices+":"+Vf(i.attributes)+":"+i.mode,t}function Vf(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function dl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const aS=new Ve;class lS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new N1,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new h1(this.options.manager):this.textureLoader=new v1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Es(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};Qr(s,a,r),ai(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(fl.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=za[r.type],a=_r[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Tt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=za[r.type],c=_r[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let d,m;if(p&&p!==f){const x=Math.floor(h/p),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count;let _=t.cache.get(b);_||(d=new c(a,x*p,r.count*p/u),_=new WM(d,p/u),t.cache.add(b,_)),m=new ql(_,l,h%p/u,g)}else a===null?d=new c(r.count*l):d=new c(a,h,r.count*l),m=new Tt(d,l,g);if(r.sparse!==void 0){const x=za.SCALAR,b=_r[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,S=new b(o[1],_,r.sparse.count*x),C=new c(o[2],y,r.sparse.count*l);a!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized));for(let D=0,M=S.length;D<M;D++){const E=S[D];if(m.setX(E,C[D*l]),l>=2&&m.setY(E,C[D*l+1]),l>=3&&m.setZ(E,C[D*l+2]),l>=4&&m.setW(E,C[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Bf[h.magFilter]||mt,u.minFilter=Bf[h.minFilter]||hi,u.wrapS=Hf[h.wrapS]||Ar,u.wrapT=Hf[h.wrapT]||Ar,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(d){const m=new wt(d);m.needsUpdate=!0,h(m)}),t.load(fl.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||oS(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.encoding=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Id,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Dd,Tn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Yl}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const f=r[Xe.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Ye)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Bn);const u=s.alphaMode||ka.OPAQUE;if(u===ka.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ka.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Li&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ne(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&o!==Li&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Li&&(a.emissive=new ke().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==Li&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ye)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),ai(f,s),t.associations.set(f,{materials:e}),s.extensions&&Qr(r,f,s),f})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");let n=t;for(let r=1;this.nodeNamesUsed[n];++r)n=t+"_"+r;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=sS(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Gf(new _n,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?nS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const d=u[p],m=o[p];let x;const b=c[p];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)x=s.isSkinnedMesh===!0?new qM(d,b):new tn(d,b),x.isSkinnedMesh===!0&&!x.geometry.attributes.skinWeight.normalized&&x.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?x.geometry=zf(x.geometry,ud):m.mode===Jt.TRIANGLE_FAN&&(x.geometry=zf(x.geometry,sl));else if(m.mode===Jt.LINES)x=new $M(d,b);else if(m.mode===Jt.LINE_STRIP)x=new Kl(d,b);else if(m.mode===Jt.LINE_LOOP)x=new ZM(d,b);else if(m.mode===Jt.POINTS)x=new JM(d,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(x.geometry.morphAttributes).length>0&&rS(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),ai(x,s),m.extensions&&Qr(r,x,m),t.assignFinalMaterial(x),f.push(x)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return f[0];const h=new Pi;t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(G0.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Wl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ai(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this.getDependency("node",t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new Ve;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xl(a,l)})}loadAnimation(e){const n=this.json.animations[e],r=[],s=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const f=n.channels[c],h=n.samplers[f.sampler],p=f.target,g=p.node,d=n.parameters!==void 0?n.parameters[h.input]:h.input,m=n.parameters!==void 0?n.parameters[h.output]:h.output;r.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",d)),o.push(this.getDependency("accessor",m)),a.push(h),l.push(p)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],p=c[3],g=c[4],d=[];for(let x=0,b=u.length;x<b;x++){const _=u[x],y=f[x],S=h[x],C=p[x],D=g[x];if(_===void 0)continue;_.updateMatrix();let M;switch(ri[D.path]){case ri.weights:M=ws;break;case ri.rotation:M=ki;break;case ri.position:case ri.scale:default:M=Ts;break}const E=_.name?_.name:_.uuid,P=C.interpolation!==void 0?tS[C.interpolation]:Rr,W=[];ri[D.path]===ri.weights?_.traverse(function(k){k.morphTargetInfluences&&W.push(k.name?k.name:k.uuid)}):W.push(E);let Z=S.array;if(S.normalized){const k=dl(Z.constructor),z=new Float32Array(Z.length);for(let X=0,Q=Z.length;X<Q;X++)z[X]=Z[X]*k;Z=z}for(let k=0,z=W.length;k<z;k++){const X=new M(W[k]+"."+ri[D.path],y.array,Z,P);C.interpolation==="CUBICSPLINE"&&(X.createInterpolant=function($){const H=this instanceof ki?eS:zd;return new H(this.times,this.values,this.getValueSize()/3,$)},X.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),d.push(X)}}const m=n.name?n.name:"animation_"+e;return new r1(m,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,r=this,s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"";return function(){const a=[],l=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(h){return r._getNodeRef(r.cameraCache,s.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)});const c=[],u=s.children||[];for(let h=0,p=u.length;h<p;h++)c.push(r.getDependency("node",u[h]));const f=s.skin===void 0?Promise.resolve(null):r.getDependency("skin",s.skin);return Promise.all([Promise.all(a),Promise.all(c),f])}().then(function(a){const l=a[0],c=a[1],u=a[2];let f;if(s.isBone===!0?f=new Ld:l.length>1?f=new Pi:l.length===1?f=l[0]:f=new ct,f!==l[0])for(let h=0,p=l.length;h<p;h++)f.add(l[h]);if(s.name&&(f.userData.name=s.name,f.name=o),ai(f,s),s.extensions&&Qr(n,f,s),s.matrix!==void 0){const h=new Ve;h.fromArray(s.matrix),f.applyMatrix4(h)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);r.associations.has(f)||r.associations.set(f,{}),r.associations.get(f).nodes=e,u!==null&&f.traverse(function(h){h.isSkinnedMesh&&h.bind(u,aS)});for(let h=0,p=c.length;h<p;h++)f.add(c[h]);return f})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Pi;n.name&&(s.name=r.createUniqueName(n.name)),ai(s,n),n.extensions&&Qr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,p]of r.associations)(h instanceof Tn||h instanceof wt)&&f.set(h,p);return u.traverse(h=>{const p=r.associations.get(h);p!=null&&f.set(h,p)}),f};return r.associations=c(s),s})}}function cS(i,e,t){const n=e.attributes,r=new Or;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const u=dl(_r[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new U,l=new U;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const d=dl(_r[h.componentType]);l.multiplyScalar(d)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Fr;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Gf(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=hl[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return ai(i,e),cS(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?iS(i,e.targets,t):i})}const Ba=new WeakMap;class uS extends Gi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){const s=new Es(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.decodeDracoFile(o,t).catch(r)},n,r)}decodeDracoFile(e,t,n,r){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Ba.has(e)){const l=Ba.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(r=l,new Promise((c,u)=>{r._callbacks[s]={resolve:c,reject:u},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),Ba.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new _n;e.index&&t.setIndex(new Tt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const r=e.attributes[n],s=r.name,o=r.array,a=r.itemSize;t.setAttribute(s,new Tt(o,a))}return t}_loadLibrary(e,t){const n=new Es(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((r,s)=>{n.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const r=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=fS.toString(),o=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const o=s.data;switch(o.type){case"decode":r._callbacks[o.id].resolve(o);break;case"error":r._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function fS(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(f){u({draco:f})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const f=u.draco,h=new f.Decoder,p=new f.DecoderBuffer;p.Init(new Int8Array(l),l.byteLength);try{const g=t(f,h,p,c),d=g.attributes.map(m=>m.array.buffer);g.index&&d.push(g.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:g},d)}catch(g){console.error(g),self.postMessage({type:"error",id:a.id,error:g.message})}finally{f.destroy(p),f.destroy(h)}});break}};function t(o,a,l,c){const u=c.attributeIDs,f=c.attributeTypes;let h,p;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)h=new o.Mesh,p=a.DecodeBufferToMesh(l,h);else if(g===o.POINT_CLOUD)h=new o.PointCloud,p=a.DecodeBufferToPointCloud(l,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const d={index:null,attributes:[]};for(const m in u){const x=self[f[m]];let b,_;if(c.useUniqueIDs)_=u[m],b=a.GetAttributeByUniqueId(h,_);else{if(_=a.GetAttributeId(h,o[u[m]]),_===-1)continue;b=a.GetAttribute(h,_)}d.attributes.push(r(o,a,h,m,x,b))}return g===o.TRIANGULAR_MESH&&(d.index=n(o,a,h)),o.destroy(h),d}function n(o,a,l){const u=l.num_faces()*3,f=u*4,h=o._malloc(f);a.GetTrianglesUInt32Array(l,f,h);const p=new Uint32Array(o.HEAPF32.buffer,h,u).slice();return o._free(h),{array:p,itemSize:1}}function r(o,a,l,c,u,f){const h=f.num_components(),g=l.num_points()*h,d=g*u.BYTES_PER_ELEMENT,m=s(o,u),x=o._malloc(d);a.GetAttributeDataArrayForAllPoints(l,f,m,d,x);const b=new u(o.HEAPF32.buffer,x,g).slice();return o._free(x),{name:c,array:b,itemSize:h}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class hS extends f1{constructor(e){super(e),this.type=Hn}parse(e){const a=function(_,y){switch(_){case 1:console.error("THREE.RGBELoader Read Error: "+(y||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(y||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(y||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(y||""))}return-1},f=`
`,h=function(_,y,S){y=y||1024;let D=_.pos,M=-1,E=0,P="",W=String.fromCharCode.apply(null,new Uint16Array(_.subarray(D,D+128)));for(;0>(M=W.indexOf(f))&&E<y&&D<_.byteLength;)P+=W,E+=W.length,D+=128,W+=String.fromCharCode.apply(null,new Uint16Array(_.subarray(D,D+128)));return-1<M?(S!==!1&&(_.pos+=E+M+1),P+W.slice(0,M)):!1},p=function(_){const y=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,M=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,E={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let P,W;if(_.pos>=_.byteLength||!(P=h(_)))return a(1,"no header found");if(!(W=P.match(y)))return a(3,"bad initial token");for(E.valid|=1,E.programtype=W[1],E.string+=P+`
`;P=h(_),P!==!1;){if(E.string+=P+`
`,P.charAt(0)==="#"){E.comments+=P+`
`;continue}if((W=P.match(S))&&(E.gamma=parseFloat(W[1])),(W=P.match(C))&&(E.exposure=parseFloat(W[1])),(W=P.match(D))&&(E.valid|=2,E.format=W[1]),(W=P.match(M))&&(E.valid|=4,E.height=parseInt(W[1],10),E.width=parseInt(W[2],10)),E.valid&2&&E.valid&4)break}return E.valid&2?E.valid&4?E:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(_,y,S){const C=y;if(C<8||C>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);if(C!==(_[2]<<8|_[3]))return a(3,"wrong scanline width");const D=new Uint8Array(4*y*S);if(!D.length)return a(4,"unable to allocate buffer space");let M=0,E=0;const P=4*C,W=new Uint8Array(4),Z=new Uint8Array(P);let k=S;for(;k>0&&E<_.byteLength;){if(E+4>_.byteLength)return a(1);if(W[0]=_[E++],W[1]=_[E++],W[2]=_[E++],W[3]=_[E++],W[0]!=2||W[1]!=2||(W[2]<<8|W[3])!=C)return a(3,"bad rgbe scanline format");let z=0,X;for(;z<P&&E<_.byteLength;){X=_[E++];const $=X>128;if($&&(X-=128),X===0||z+X>P)return a(3,"bad scanline data");if($){const H=_[E++];for(let ce=0;ce<X;ce++)Z[z++]=H}else Z.set(_.subarray(E,E+X),z),z+=X,E+=X}const Q=C;for(let $=0;$<Q;$++){let H=0;D[M]=Z[$+H],H+=C,D[M+1]=Z[$+H],H+=C,D[M+2]=Z[$+H],H+=C,D[M+3]=Z[$+H],M+=4}k--}return D},d=function(_,y,S,C){const D=_[y+3],M=Math.pow(2,D-128)/255;S[C+0]=_[y+0]*M,S[C+1]=_[y+1]*M,S[C+2]=_[y+2]*M,S[C+3]=1},m=function(_,y,S,C){const D=_[y+3],M=Math.pow(2,D-128)/255;S[C+0]=so.toHalfFloat(Math.min(_[y+0]*M,65504)),S[C+1]=so.toHalfFloat(Math.min(_[y+1]*M,65504)),S[C+2]=so.toHalfFloat(Math.min(_[y+2]*M,65504)),S[C+3]=so.toHalfFloat(1)},x=new Uint8Array(e);x.pos=0;const b=p(x);if(b!==-1){const _=b.width,y=b.height,S=g(x.subarray(x.pos),_,y);if(S!==-1){let C,D,M;switch(this.type){case fn:M=S.length/4;const E=new Float32Array(M*4);for(let W=0;W<M;W++)d(S,W*4,E,W*4);C=E,D=fn;break;case Hn:M=S.length/4;const P=new Uint16Array(M*4);for(let W=0;W<M;W++)m(S,W*4,P,W*4);C=P,D=Hn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:_,height:y,data:C,header:b.string,gamma:b.gamma,exposure:b.exposure,type:D}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){switch(o.type){case fn:case Hn:o.encoding=di,o.minFilter=mt,o.magFilter=mt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,r)}}const dS={id:"face",class:"face-bg"},pS=Bi({__name:"FaceBackground",setup(i){let e,t,n,r,s={x:0,y:0};Do(()=>{o(),l(),window.addEventListener("mousemove",c=>{s.x=window.innerWidth/2-c.pageX,s.y=window.innerHeight/2-c.pageY})});function o(){var c=document.getElementById("face");e=new Ut(45,window.innerWidth/window.innerHeight,.25,20),e.position.set(-1,0,0),t=new GM;const u=new uS;u.setDecoderPath("/jsm/libs/draco/"),new hS().setPath("/").load("royal_esplanade_1k.hdr",function(p){p.mapping=yo,t.environment=p,l();const g=new I1().setPath("/models/");g.setDRACOLoader(u),g.load("face.glb",function(d){console.log("object ready"),r=d.scene,t.add(d.scene),l()})}),n=new Rd({antialias:!0,alpha:!0}),n.setClearColor(0,0),n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n.toneMapping=od,n.toneMappingExposure=1,n.outputEncoding=Ye,c.appendChild(n.domElement);const f=new D1(e,n.domElement);f.addEventListener("change",l),f.minDistance=0,f.maxDistance=10,f.target.set(1,0,0),f.update(),h();function h(){r&&(r.rotation.x=s.y/(3*window.innerWidth),r.rotation.y=s.x/(3*window.innerHeight)),requestAnimationFrame(h),n.render(t,e),f.update()}window.addEventListener("resize",a)}function a(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),l()}function l(){n.render(t,e)}return(c,u)=>(nn(),gn("div",dS))}});const mS=$n(pS,[["__scopeId","data-v-41f6723a"]]);var kd={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ec={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},gS=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],So={CSS:{},springs:{}};function Sn(i,e,t){return Math.min(Math.max(i,e),t)}function hs(i,e){return i.indexOf(e)>-1}function Ha(i,e){return i.apply(null,e)}var Le={arr:function(i){return Array.isArray(i)},obj:function(i){return hs(Object.prototype.toString.call(i),"Object")},pth:function(i){return Le.obj(i)&&i.hasOwnProperty("totalLength")},svg:function(i){return i instanceof SVGElement},inp:function(i){return i instanceof HTMLInputElement},dom:function(i){return i.nodeType||Le.svg(i)},str:function(i){return typeof i=="string"},fnc:function(i){return typeof i=="function"},und:function(i){return typeof i>"u"},nil:function(i){return Le.und(i)||i===null},hex:function(i){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(i)},rgb:function(i){return/^rgb/.test(i)},hsl:function(i){return/^hsl/.test(i)},col:function(i){return Le.hex(i)||Le.rgb(i)||Le.hsl(i)},key:function(i){return!kd.hasOwnProperty(i)&&!ec.hasOwnProperty(i)&&i!=="targets"&&i!=="keyframes"}};function Bd(i){var e=/\(([^)]+)\)/.exec(i);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function Hd(i,e){var t=Bd(i),n=Sn(Le.und(t[0])?1:t[0],.1,100),r=Sn(Le.und(t[1])?100:t[1],.1,100),s=Sn(Le.und(t[2])?10:t[2],.1,100),o=Sn(Le.und(t[3])?0:t[3],.1,100),a=Math.sqrt(r/n),l=s/(2*Math.sqrt(r*n)),c=l<1?a*Math.sqrt(1-l*l):0,u=1,f=l<1?(l*a+-o)/c:-o+a;function h(g){var d=e?e*g/1e3:g;return l<1?d=Math.exp(-d*l*a)*(u*Math.cos(c*d)+f*Math.sin(c*d)):d=(u+f*d)*Math.exp(-d*a),g===0||g===1?g:1-d}function p(){var g=So.springs[i];if(g)return g;for(var d=1/6,m=0,x=0;;)if(m+=d,h(m)===1){if(x++,x>=16)break}else x=0;var b=m*d*1e3;return So.springs[i]=b,b}return e?h:p}function _S(i){return i===void 0&&(i=10),function(e){return Math.ceil(Sn(e,1e-6,1)*i)*(1/i)}}var xS=function(){var i=11,e=1/(i-1);function t(u,f){return 1-3*f+3*u}function n(u,f){return 3*f-6*u}function r(u){return 3*u}function s(u,f,h){return((t(f,h)*u+n(f,h))*u+r(f))*u}function o(u,f,h){return 3*t(f,h)*u*u+2*n(f,h)*u+r(f)}function a(u,f,h,p,g){var d,m,x=0;do m=f+(h-f)/2,d=s(m,p,g)-u,d>0?h=m:f=m;while(Math.abs(d)>1e-7&&++x<10);return m}function l(u,f,h,p){for(var g=0;g<4;++g){var d=o(f,h,p);if(d===0)return f;var m=s(f,h,p)-u;f-=m/d}return f}function c(u,f,h,p){if(!(0<=u&&u<=1&&0<=h&&h<=1))return;var g=new Float32Array(i);if(u!==f||h!==p)for(var d=0;d<i;++d)g[d]=s(d*e,u,h);function m(x){for(var b=0,_=1,y=i-1;_!==y&&g[_]<=x;++_)b+=e;--_;var S=(x-g[_])/(g[_+1]-g[_]),C=b+S*e,D=o(C,u,h);return D>=.001?l(x,C,u,h):D===0?C:a(x,b,b+e,u,h)}return function(x){return u===f&&h===p||x===0||x===1?x:s(m(x),f,p)}}return c}(),Vd=function(){var i={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var r,s=4;n<((r=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((r*3-2)/22-n,2)}},Elastic:function(n,r){n===void 0&&(n=1),r===void 0&&(r=.5);var s=Sn(n,1,10),o=Sn(r,.1,2);return function(a){return a===0||a===1?a:-s*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/o)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(n,r){e[n]=function(){return function(s){return Math.pow(s,r+2)}}}),Object.keys(e).forEach(function(n){var r=e[n];i["easeIn"+n]=r,i["easeOut"+n]=function(s,o){return function(a){return 1-r(s,o)(1-a)}},i["easeInOut"+n]=function(s,o){return function(a){return a<.5?r(s,o)(a*2)/2:1-r(s,o)(a*-2+2)/2}},i["easeOutIn"+n]=function(s,o){return function(a){return a<.5?(1-r(s,o)(1-a*2))/2:(r(s,o)(a*2-1)+1)/2}}}),i}();function tc(i,e){if(Le.fnc(i))return i;var t=i.split("(")[0],n=Vd[t],r=Bd(i);switch(t){case"spring":return Hd(i,e);case"cubicBezier":return Ha(xS,r);case"steps":return Ha(_S,r);default:return Ha(n,r)}}function Gd(i){try{var e=document.querySelectorAll(i);return e}catch{return}}function ko(i,e){for(var t=i.length,n=arguments.length>=2?arguments[1]:void 0,r=[],s=0;s<t;s++)if(s in i){var o=i[s];e.call(n,o,s,i)&&r.push(o)}return r}function Bo(i){return i.reduce(function(e,t){return e.concat(Le.arr(t)?Bo(t):t)},[])}function Wf(i){return Le.arr(i)?i:(Le.str(i)&&(i=Gd(i)||i),i instanceof NodeList||i instanceof HTMLCollection?[].slice.call(i):[i])}function nc(i,e){return i.some(function(t){return t===e})}function ic(i){var e={};for(var t in i)e[t]=i[t];return e}function pl(i,e){var t=ic(i);for(var n in i)t[n]=e.hasOwnProperty(n)?e[n]:i[n];return t}function Ho(i,e){var t=ic(i);for(var n in e)t[n]=Le.und(i[n])?e[n]:i[n];return t}function vS(i){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);return e?"rgba("+e[1]+",1)":i}function yS(i){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=i.replace(e,function(a,l,c,u){return l+l+c+c+u+u}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),r=parseInt(n[1],16),s=parseInt(n[2],16),o=parseInt(n[3],16);return"rgba("+r+","+s+","+o+",1)"}function bS(i){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(i)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(i),t=parseInt(e[1],10)/360,n=parseInt(e[2],10)/100,r=parseInt(e[3],10)/100,s=e[4]||1;function o(h,p,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?h+(p-h)*6*g:g<1/2?p:g<2/3?h+(p-h)*(2/3-g)*6:h}var a,l,c;if(n==0)a=l=c=r;else{var u=r<.5?r*(1+n):r+n-r*n,f=2*r-u;a=o(f,u,t+1/3),l=o(f,u,t),c=o(f,u,t-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+s+")"}function MS(i){if(Le.rgb(i))return vS(i);if(Le.hex(i))return yS(i);if(Le.hsl(i))return bS(i)}function qn(i){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(i);if(e)return e[1]}function SS(i){if(hs(i,"translate")||i==="perspective")return"px";if(hs(i,"rotate")||hs(i,"skew"))return"deg"}function ml(i,e){return Le.fnc(i)?i(e.target,e.id,e.total):i}function wn(i,e){return i.getAttribute(e)}function rc(i,e,t){var n=qn(e);if(nc([t,"deg","rad","turn"],n))return e;var r=So.CSS[e+t];if(!Le.und(r))return r;var s=100,o=document.createElement(i.tagName),a=i.parentNode&&i.parentNode!==document?i.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=s+t;var l=s/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return So.CSS[e+t]=c,c}function Wd(i,e,t){if(e in i.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=i.style[e]||getComputedStyle(i).getPropertyValue(n)||"0";return t?rc(i,r,t):r}}function sc(i,e){if(Le.dom(i)&&!Le.inp(i)&&(!Le.nil(wn(i,e))||Le.svg(i)&&i[e]))return"attribute";if(Le.dom(i)&&nc(gS,e))return"transform";if(Le.dom(i)&&e!=="transform"&&Wd(i,e))return"css";if(i[e]!=null)return"object"}function jd(i){if(Le.dom(i)){for(var e=i.style.transform||"",t=/(\w+)\(([^)]*)\)/g,n=new Map,r;r=t.exec(e);)n.set(r[1],r[2]);return n}}function wS(i,e,t,n){var r=hs(e,"scale")?1:0+SS(e),s=jd(i).get(e)||r;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),n?rc(i,s,n):s}function oc(i,e,t,n){switch(sc(i,e)){case"transform":return wS(i,e,n,t);case"css":return Wd(i,e,t);case"attribute":return wn(i,e);default:return i[e]||0}}function ac(i,e){var t=/^(\*=|\+=|-=)/.exec(i);if(!t)return i;var n=qn(i)||0,r=parseFloat(e),s=parseFloat(i.replace(t[0],""));switch(t[0][0]){case"+":return r+s+n;case"-":return r-s+n;case"*":return r*s+n}}function qd(i,e){if(Le.col(i))return MS(i);if(/\s/g.test(i))return i;var t=qn(i),n=t?i.substr(0,i.length-t.length):i;return e?n+e:n}function lc(i,e){return Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2))}function TS(i){return Math.PI*2*wn(i,"r")}function ES(i){return wn(i,"width")*2+wn(i,"height")*2}function AS(i){return lc({x:wn(i,"x1"),y:wn(i,"y1")},{x:wn(i,"x2"),y:wn(i,"y2")})}function Xd(i){for(var e=i.points,t=0,n,r=0;r<e.numberOfItems;r++){var s=e.getItem(r);r>0&&(t+=lc(n,s)),n=s}return t}function CS(i){var e=i.points;return Xd(i)+lc(e.getItem(e.numberOfItems-1),e.getItem(0))}function Kd(i){if(i.getTotalLength)return i.getTotalLength();switch(i.tagName.toLowerCase()){case"circle":return TS(i);case"rect":return ES(i);case"line":return AS(i);case"polyline":return Xd(i);case"polygon":return CS(i)}}function RS(i){var e=Kd(i);return i.setAttribute("stroke-dasharray",e),e}function LS(i){for(var e=i.parentNode;Le.svg(e)&&Le.svg(e.parentNode);)e=e.parentNode;return e}function Yd(i,e){var t=e||{},n=t.el||LS(i),r=n.getBoundingClientRect(),s=wn(n,"viewBox"),o=r.width,a=r.height,l=t.viewBox||(s?s.split(" "):[0,0,o,a]);return{el:n,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function PS(i,e){var t=Le.str(i)?Gd(i)[0]:i,n=e||100;return function(r){return{property:r,el:t,svg:Yd(t),totalLength:Kd(t)*(n/100)}}}function DS(i,e,t){function n(u){u===void 0&&(u=0);var f=e+u>=1?e+u:0;return i.el.getPointAtLength(f)}var r=Yd(i.el,i.svg),s=n(),o=n(-1),a=n(1),l=t?1:r.w/r.vW,c=t?1:r.h/r.vH;switch(i.property){case"x":return(s.x-r.x)*l;case"y":return(s.y-r.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function jf(i,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=qd(Le.pth(i)?i.totalLength:i,e)+"";return{original:n,numbers:n.match(t)?n.match(t).map(Number):[0],strings:Le.str(i)||e?n.split(t):[]}}function cc(i){var e=i?Bo(Le.arr(i)?i.map(Wf):Wf(i)):[];return ko(e,function(t,n,r){return r.indexOf(t)===n})}function $d(i){var e=cc(i);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:jd(t)}}})}function IS(i,e){var t=ic(e);if(/^spring/.test(t.easing)&&(t.duration=Hd(t.easing)),Le.arr(i)){var n=i.length,r=n===2&&!Le.obj(i[0]);r?i={value:i}:Le.fnc(e.duration)||(t.duration=e.duration/n)}var s=Le.arr(i)?i:[i];return s.map(function(o,a){var l=Le.obj(o)&&!Le.pth(o)?o:{value:o};return Le.und(l.delay)&&(l.delay=a?0:e.delay),Le.und(l.endDelay)&&(l.endDelay=a===s.length-1?e.endDelay:0),l}).map(function(o){return Ho(o,t)})}function NS(i){for(var e=ko(Bo(i.map(function(s){return Object.keys(s)})),function(s){return Le.key(s)}).reduce(function(s,o){return s.indexOf(o)<0&&s.push(o),s},[]),t={},n=function(s){var o=e[s];t[o]=i.map(function(a){var l={};for(var c in a)Le.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},r=0;r<e.length;r++)n(r);return t}function OS(i,e){var t=[],n=e.keyframes;n&&(e=Ho(NS(n),e));for(var r in e)Le.key(r)&&t.push({name:r,tweens:IS(e[r],i)});return t}function FS(i,e){var t={};for(var n in i){var r=ml(i[n],e);Le.arr(r)&&(r=r.map(function(s){return ml(s,e)}),r.length===1&&(r=r[0])),t[n]=r}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function US(i,e){var t;return i.tweens.map(function(n){var r=FS(n,e),s=r.value,o=Le.arr(s)?s[1]:s,a=qn(o),l=oc(e.target,i.name,a,e),c=t?t.to.original:l,u=Le.arr(s)?s[0]:c,f=qn(u)||qn(l),h=a||f;return Le.und(o)&&(o=c),r.from=jf(u,h),r.to=jf(ac(o,u),h),r.start=t?t.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=tc(r.easing,r.duration),r.isPath=Le.pth(s),r.isPathTargetInsideSVG=r.isPath&&Le.svg(e.target),r.isColor=Le.col(r.from.original),r.isColor&&(r.round=1),t=r,r})}var Zd={css:function(i,e,t){return i.style[e]=t},attribute:function(i,e,t){return i.setAttribute(e,t)},object:function(i,e,t){return i[e]=t},transform:function(i,e,t,n,r){if(n.list.set(e,t),e===n.last||r){var s="";n.list.forEach(function(o,a){s+=a+"("+o+") "}),i.style.transform=s}}};function Jd(i,e){var t=$d(i);t.forEach(function(n){for(var r in e){var s=ml(e[r],n),o=n.target,a=qn(s),l=oc(o,r,a,n),c=a||qn(l),u=ac(qd(s,c),l),f=sc(o,r);Zd[f](o,r,u,n.transforms,!0)}})}function zS(i,e){var t=sc(i.target,e.name);if(t){var n=US(e,i),r=n[n.length-1];return{type:t,property:e.name,animatable:i,tweens:n,duration:r.end,delay:n[0].delay,endDelay:r.endDelay}}}function kS(i,e){return ko(Bo(i.map(function(t){return e.map(function(n){return zS(t,n)})})),function(t){return!Le.und(t)})}function Qd(i,e){var t=i.length,n=function(s){return s.timelineOffset?s.timelineOffset:0},r={};return r.duration=t?Math.max.apply(Math,i.map(function(s){return n(s)+s.duration})):e.duration,r.delay=t?Math.min.apply(Math,i.map(function(s){return n(s)+s.delay})):e.delay,r.endDelay=t?r.duration-Math.max.apply(Math,i.map(function(s){return n(s)+s.duration-s.endDelay})):e.endDelay,r}var qf=0;function BS(i){var e=pl(kd,i),t=pl(ec,i),n=OS(t,i),r=$d(i.targets),s=kS(r,n),o=Qd(s,t),a=qf;return qf++,Ho(e,{id:a,children:[],animatables:r,animations:s,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var cn=[],ep=function(){var i;function e(){!i&&(!Xf()||!lt.suspendWhenDocumentHidden)&&cn.length>0&&(i=requestAnimationFrame(t))}function t(r){for(var s=cn.length,o=0;o<s;){var a=cn[o];a.paused?(cn.splice(o,1),s--):(a.tick(r),o++)}i=o>0?requestAnimationFrame(t):void 0}function n(){lt.suspendWhenDocumentHidden&&(Xf()?i=cancelAnimationFrame(i):(cn.forEach(function(r){return r._onDocumentVisibility()}),ep()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),e}();function Xf(){return!!document&&document.hidden}function lt(i){i===void 0&&(i={});var e=0,t=0,n=0,r,s=0,o=null;function a(b){var _=window.Promise&&new Promise(function(y){return o=y});return b.finished=_,_}var l=BS(i);a(l);function c(){var b=l.direction;b!=="alternate"&&(l.direction=b!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,r.forEach(function(_){return _.reversed=l.reversed})}function u(b){return l.reversed?l.duration-b:b}function f(){e=0,t=u(l.currentTime)*(1/lt.speed)}function h(b,_){_&&_.seek(b-_.timelineOffset)}function p(b){if(l.reversePlayback)for(var y=s;y--;)h(b,r[y]);else for(var _=0;_<s;_++)h(b,r[_])}function g(b){for(var _=0,y=l.animations,S=y.length;_<S;){var C=y[_],D=C.animatable,M=C.tweens,E=M.length-1,P=M[E];E&&(P=ko(M,function(I){return b<I.end})[0]||P);for(var W=Sn(b-P.start-P.delay,0,P.duration)/P.duration,Z=isNaN(W)?1:P.easing(W),k=P.to.strings,z=P.round,X=[],Q=P.to.numbers.length,$=void 0,H=0;H<Q;H++){var ce=void 0,ue=P.to.numbers[H],we=P.from.numbers[H]||0;P.isPath?ce=DS(P.value,Z*ue,P.isPathTargetInsideSVG):ce=we+Z*(ue-we),z&&(P.isColor&&H>2||(ce=Math.round(ce*z)/z)),X.push(ce)}var G=k.length;if(!G)$=X[0];else{$=k[0];for(var le=0;le<G;le++){k[le];var xe=k[le+1],N=X[le];isNaN(N)||(xe?$+=N+xe:$+=N+" ")}}Zd[C.type](D.target,C.property,$,D.transforms),C.currentValue=$,_++}}function d(b){l[b]&&!l.passThrough&&l[b](l)}function m(){l.remaining&&l.remaining!==!0&&l.remaining--}function x(b){var _=l.duration,y=l.delay,S=_-l.endDelay,C=u(b);l.progress=Sn(C/_*100,0,100),l.reversePlayback=C<l.currentTime,r&&p(C),!l.began&&l.currentTime>0&&(l.began=!0,d("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,d("loopBegin")),C<=y&&l.currentTime!==0&&g(0),(C>=S&&l.currentTime!==_||!_)&&g(_),C>y&&C<S?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,d("changeBegin")),d("change"),g(C)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,d("changeComplete")),l.currentTime=Sn(C,0,_),l.began&&d("update"),b>=_&&(t=0,m(),l.remaining?(e=n,d("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,d("loopComplete"),d("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var b=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=b==="reverse",l.remaining=l.loop,r=l.children,s=r.length;for(var _=s;_--;)l.children[_].reset();(l.reversed&&l.loop!==!0||b==="alternate"&&l.loop===1)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=f,l.set=function(b,_){return Jd(b,_),l},l.tick=function(b){n=b,e||(e=n),x((n+(t-e))*lt.speed)},l.seek=function(b){x(u(b))},l.pause=function(){l.paused=!0,f()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,cn.push(l),f(),ep())},l.reverse=function(){c(),l.completed=!l.reversed,f()},l.restart=function(){l.reset(),l.play()},l.remove=function(b){var _=cc(b);tp(_,l)},l.reset(),l.autoplay&&l.play(),l}function Kf(i,e){for(var t=e.length;t--;)nc(i,e[t].animatable.target)&&e.splice(t,1)}function tp(i,e){var t=e.animations,n=e.children;Kf(i,t);for(var r=n.length;r--;){var s=n[r],o=s.animations;Kf(i,o),!o.length&&!s.children.length&&n.splice(r,1)}!t.length&&!n.length&&e.pause()}function HS(i){for(var e=cc(i),t=cn.length;t--;){var n=cn[t];tp(e,n)}}function VS(i,e){e===void 0&&(e={});var t=e.direction||"normal",n=e.easing?tc(e.easing):null,r=e.grid,s=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",u=Le.arr(i),f=parseFloat(u?i[0]:i),h=u?parseFloat(i[1]):0,p=qn(u?i[1]:i)||0,g=e.start||0+(u?f:0),d=[],m=0;return function(x,b,_){if(a&&(o=0),l&&(o=(_-1)/2),c&&(o=_-1),!d.length){for(var y=0;y<_;y++){if(!r)d.push(Math.abs(o-y));else{var S=l?(r[0]-1)/2:o%r[0],C=l?(r[1]-1)/2:Math.floor(o/r[0]),D=y%r[0],M=Math.floor(y/r[0]),E=S-D,P=C-M,W=Math.sqrt(E*E+P*P);s==="x"&&(W=-E),s==="y"&&(W=-P),d.push(W)}m=Math.max.apply(Math,d)}n&&(d=d.map(function(k){return n(k/m)*m})),t==="reverse"&&(d=d.map(function(k){return s?k<0?k*-1:-k:Math.abs(m-k)}))}var Z=u?(h-f)/m:f;return g+Z*(Math.round(d[b]*100)/100)+p}}function GS(i){i===void 0&&(i={});var e=lt(i);return e.duration=0,e.add=function(t,n){var r=cn.indexOf(e),s=e.children;r>-1&&cn.splice(r,1);function o(h){h.passThrough=!0}for(var a=0;a<s.length;a++)o(s[a]);var l=Ho(t,pl(ec,i));l.targets=l.targets||i.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=Le.und(n)?c:ac(n,c),o(e),e.seek(l.timelineOffset);var u=lt(l);o(u),s.push(u);var f=Qd(s,i);return e.delay=f.delay,e.endDelay=f.endDelay,e.duration=f.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}lt.version="3.2.1";lt.speed=1;lt.suspendWhenDocumentHidden=!0;lt.running=cn;lt.remove=HS;lt.get=oc;lt.set=Jd;lt.convertPx=rc;lt.path=PS;lt.setDashoffset=RS;lt.stagger=VS;lt.timeline=GS;lt.easing=tc;lt.penner=Vd;lt.random=function(i,e){return Math.floor(Math.random()*(e-i+1))+i};const WS=i=>(wh("data-v-a797cee9"),i=i(),Th(),i),jS={class:"loading-wrapper"},qS=WS(()=>Je("div",{class:"necuro-logo"},"necuro",-1)),XS=[qS],KS=Bi({__name:"Loading",setup(i){return Do(()=>{var e={};e.opacityIn=[0,1],e.scaleIn=[.2,1],e.scaleOut=3,e.durationIn=800,e.durationOut=600,e.delay=500,lt({targets:"#andrzejczak path",strokeDashoffset:[lt.setDashoffset,0],easing:"easeInOutCirc",duration:7500}),lt.timeline({loop:!0}).add({targets:".ml4 .letters-1",opacity:e.opacityIn,scale:e.scaleIn,duration:e.durationIn}).add({targets:".ml4 .letters-1",opacity:0,scale:e.scaleOut,duration:e.durationOut,easing:"easeInExpo",delay:e.delay}).add({targets:".ml4 .letters-2",opacity:e.opacityIn,scale:e.scaleIn,duration:e.durationIn}).add({targets:".ml4 .letters-2",opacity:0,scale:e.scaleOut,duration:e.durationOut,easing:"easeInExpo",delay:e.delay}).add({targets:".ml4 .letters-3",opacity:e.opacityIn,scale:e.scaleIn,duration:e.durationIn}).add({targets:".ml4 .letters-3",opacity:0,scale:e.scaleOut,duration:e.durationOut,easing:"easeInExpo",delay:e.delay}).add({targets:".ml4",opacity:0,duration:500,delay:500})}),(e,t)=>(nn(),gn("div",jS,XS))}});const YS=$n(KS,[["__scopeId","data-v-a797cee9"]]),$S=i=>(wh("data-v-001984ad"),i=i(),Th(),i),ZS=$S(()=>Je("div",{class:"cursor"},null,-1)),JS=Bi({__name:"App",setup(i){function e(){let t=document.querySelector(".cursor");window.addEventListener("mousemove",n=>{t.style.top=n.pageY+"px",t.style.left=n.pageX+"px"})}return Do(()=>{e()}),(t,n)=>(nn(),gn(Xt,null,[ZS,st(YS),st(mS)],64))}});const QS=$n(JS,[["__scopeId","data-v-001984ad"]]),ew="modulepreload",tw=function(i){return"/"+i},Yf={},nw=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=tw(s),s in Yf)return;Yf[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ew,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};const iw={},rw={class:"item"},sw={class:"details"};function ow(i,e){return nn(),gn("div",rw,[Je("i",null,[Yo(i.$slots,"icon",{},void 0,!0)]),Je("div",sw,[Je("h3",null,[Yo(i.$slots,"heading",{},void 0,!0)]),Yo(i.$slots,"default",{},void 0,!0)])])}const es=$n(iw,[["render",ow],["__scopeId","data-v-02aeb4b6"]]),aw={},lw={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},cw=Je("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),uw=[cw];function fw(i,e){return nn(),gn("svg",lw,uw)}const hw=$n(aw,[["render",fw]]),dw={},pw={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},mw=Je("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),gw=[mw];function _w(i,e){return nn(),gn("svg",pw,gw)}const xw=$n(dw,[["render",_w]]),vw={},yw={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},bw=Je("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),Mw=[bw];function Sw(i,e){return nn(),gn("svg",yw,Mw)}const ww=$n(vw,[["render",Sw]]),Tw={},Ew={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Aw=Je("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),Cw=[Aw];function Rw(i,e){return nn(),gn("svg",Ew,Cw)}const Lw=$n(Tw,[["render",Rw]]),Pw={},Dw={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Iw=Je("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),Nw=[Iw];function Ow(i,e){return nn(),gn("svg",Dw,Nw)}const Fw=$n(Pw,[["render",Ow]]),Uw=Je("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),zw=Je("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),kw=Je("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),Bw=Je("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),Hw=Je("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),Vw=Je("a",{href:"https://on.cypress.io/component",target:"_blank"},"Cypress Component Testing",-1),Gw=Je("br",null,null,-1),Ww=Je("code",null,"README.md",-1),jw=Je("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),qw=Je("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),Xw=Je("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),Kw=Je("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),Yw=Je("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),$w=Je("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),Zw=Je("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),Jw=Je("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),Qw=Je("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),eT=Je("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),tT=Bi({__name:"TheWelcome",setup(i){return(e,t)=>(nn(),gn(Xt,null,[st(es,null,{icon:Rt(()=>[st(hw)]),heading:Rt(()=>[Qe("Documentation")]),default:Rt(()=>[Qe(" Vue’s "),Uw,Qe(" provides you with all information you need to get started. ")]),_:1}),st(es,null,{icon:Rt(()=>[st(xw)]),heading:Rt(()=>[Qe("Tooling")]),default:Rt(()=>[Qe(" This project is served and bundled with "),zw,Qe(". The recommended IDE setup is "),kw,Qe(" + "),Bw,Qe(". If you need to test your components and web pages, check out "),Hw,Qe(" and "),Vw,Qe(". "),Gw,Qe(" More instructions are available in "),Ww,Qe(". ")]),_:1}),st(es,null,{icon:Rt(()=>[st(ww)]),heading:Rt(()=>[Qe("Ecosystem")]),default:Rt(()=>[Qe(" Get official tools and libraries for your project: "),jw,Qe(", "),qw,Qe(", "),Xw,Qe(", and "),Kw,Qe(". If you need more resources, we suggest paying "),Yw,Qe(" a visit. ")]),_:1}),st(es,null,{icon:Rt(()=>[st(Lw)]),heading:Rt(()=>[Qe("Community")]),default:Rt(()=>[Qe(" Got stuck? Ask your question on "),$w,Qe(", our official Discord server, or "),Zw,Qe(". You should also subscribe to "),Jw,Qe(" and follow the official "),Qw,Qe(" twitter account for latest news in the Vue world. ")]),_:1}),st(es,null,{icon:Rt(()=>[st(Fw)]),heading:Rt(()=>[Qe("Support Vue")]),default:Rt(()=>[Qe(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),eT,Qe(". ")]),_:1})],64))}}),nT=Bi({__name:"HomeView",setup(i){return(e,t)=>(nn(),gn("main",null,[st(tT)]))}}),iT=I_({history:Yg("/"),routes:[{path:"/",name:"home",component:nT},{path:"/about",name:"about",component:()=>nw(()=>import("./AboutView-3bc0fa27.js"),["assets/AboutView-3bc0fa27.js","assets/AboutView-4d995ba2.css"])}]}),uc=Ag(QS);uc.use(Pg());uc.use(iT);uc.mount("#app");export{$n as _,Je as a,gn as c,nn as o};

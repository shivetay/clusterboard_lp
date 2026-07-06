(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return u},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return s}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});function o(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,i(e));else t.set(r,i(n));return t}function u(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return $},MissingStaticPage:function(){return P},NormalizeError:function(){return y},PageNotFoundError:function(){return k},SP:function(){return b},ST:function(){return m},WEB_VITALS:function(){return o},execOnce:function(){return i},getDisplayName:function(){return p},getLocationOrigin:function(){return c},getURL:function(){return l},isAbsoluteUrl:function(){return u},isResSent:function(){return d},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return h}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function l(){let{href:e}=window.location,t=c();return e.substring(t.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&d(r))return n;if(!n)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let b="u">typeof performance,m=b&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class y extends Error{}class k extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class P extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class $ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function h(e){return JSON.stringify({message:e.message,stack:e.stack})}},33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},76755,e=>{"use strict";var t=e.i(43476),r=e.i(71645);e.i(85269);var n=e.i(22831),a=e.i(45141),o=e.i(2607),i=e.i(86492);function s({children:e,locale:a}){let{i18n:o}=(0,n.useTranslation)();return(0,r.useEffect)(()=>{o.language!==a&&o.changeLanguage(a).catch(console.error)},[a,o]),(0,t.jsx)(t.Fragment,{children:e})}a.default.use(o.initReactI18next).init({resources:{pl:{translation:i.TRANSLATIONS}},lng:"pl",fallbackLng:"pl",interpolation:{escapeValue:!1}}),a.default,e.s(["I18nProvider",0,s,"default",0,s],76755)},1121,e=>{"use strict";var t=e.i(52569);let r=(0,e.i(55323).styled)(t.Box)(({theme:e})=>({overflowX:"clip",overflowY:"visible",minHeight:"100dvh",display:"flex",flexDirection:"column",backgroundImage:`linear-gradient(
    30deg,
    ${e.palette.background.transparent} 12%,
    transparent 12.5%,
    transparent 87%,
    ${e.palette.background.transparent} 87.5%,
    ${e.palette.background.transparent}
  ), linear-gradient(
    150deg,
    ${e.palette.background.transparent} 12%,
    transparent 12.5%,
    transparent 87%,
    ${e.palette.background.transparent} 87.5%,
    ${e.palette.background.transparent}
  ), linear-gradient(
    30deg,
    ${e.palette.background.transparent} 12%,
    transparent 12.5%,
    transparent 87%,
    ${e.palette.background.transparent} 87.5%,
    ${e.palette.background.transparent}
  ), linear-gradient(
    150deg,
    ${e.palette.background.transparent} 12%,
    transparent 12.5%,
    transparent 87%,
    ${e.palette.background.transparent} 87.5%,
    ${e.palette.background.transparent}
  ), linear-gradient(
    60deg,
    ${e.palette.background.transparent} 25%,
    transparent 25.5%,
    transparent 75%,
    ${e.palette.background.transparent} 75%,
    ${e.palette.background.transparent}
  ), linear-gradient(
    60deg,
    ${e.palette.background.transparent} 25%,
    transparent 25.5%,
    transparent 75%,
    ${e.palette.background.transparent} 75%,
    ${e.palette.background.transparent}
  )`,backgroundSize:"80px 140px",backgroundPosition:"0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",[e.breakpoints.down("sm")]:{backgroundSize:"64px 112px",backgroundPosition:"0 0, 0 0, 32px 56px, 32px 56px, 0 0, 32px 56px"}}));e.s(["LayoutContainer",0,r])}]);
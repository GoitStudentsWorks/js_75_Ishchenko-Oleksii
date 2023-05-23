function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("bUb57",(function(e,t){const n=document.querySelector(".open-menu-icon"),i=document.querySelector(".close-menu-icon"),s=document.querySelector(".js-navigation"),r=document.querySelector(".header-user-container"),o=document.querySelector(".js-btn-user"),a=document.querySelector(".js-signout-heder"),l=document.querySelector(".js-signup-btn"),c=document.querySelector(".burger-menu"),u=document.querySelector(".js-burger-user"),h=document.querySelector(".js-burger-signup"),d=document.querySelector(".user-name"),p=localStorage.getItem("IS_CUSTOMER_LOGGED_IN");!function(){if(JSON.parse(p)){let e=localStorage.getItem("customer_name");o.textContent=e,d.textContent=e,u.classList.remove("is-hidden"),h.classList.add("is-hidden"),s.classList.remove("is-hidden"),r.classList.remove("is-hidden"),l.classList.add("is-hidden")}else u.classList.add("is-hidden"),h.classList.remove("is-hidden")}(),n.addEventListener("click",(function(){c.classList.remove("is-hidden"),n.classList.add("is-hidden"),i.classList.remove("is-hidden")})),i.addEventListener("click",(function(){c.classList.add("is-hidden"),n.classList.remove("is-hidden"),i.classList.add("is-hidden")})),o.addEventListener("click",(()=>a.classList.remove("is-hidden")));const f=document.querySelector("body"),m=document.querySelector("#theme-switch-toggle");m.addEventListener("change",(e=>{f.classList.contains("dark")?(f.classList.remove("dark"),localStorage.removeItem("darkTheme")):(f.classList.add("dark"),localStorage.setItem("darkTheme","true"))}));localStorage.getItem("darkTheme");localStorage.getItem("darkTheme")&&(f.classList.add("dark"),m.checked=!0)})),r.register("cwkLb",(function(e,n){var i=r("a482y"),s=r("6ZqaX"),o=r("6kZtF"),a=r("horqI"),l=r("gtdAU"),c=r("ekygX"),u=r("5hrwT"),h=r("5wN3t"),d=r("04p0l"),p=r("hpU3y"),f=r("g4kfJ"),m=r("uuLlE"),g=r("uQqVb"),v=r("aryfV"),y=r("g7z9y"),w=r("cE4ZG"),b=r("5trlv"),E=r("jX6oD");const T=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(i),img2x:t(p)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(s),img2x:t(f)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(o),img2x:t(m)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(a),img2x:t(g)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(l),img2x:t(v)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(c),img2x:t(y)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(u),img2x:t(w)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(h),img2x:t(b)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(d),img2x:t(E)}];console.log(T);const S=document.querySelector(".support__list");T.map(((e,t)=>{!function({title:e,url:t,img:n,img2x:i},s){const r=s+1;S.insertAdjacentHTML("beforeend",`<li class="support__item slider__slide swiper-slide"><a href="${t}" target="_blank" class="support__link slider__link"><span class="support__number">${String(r).padStart(2,"0")}</span><picture>\n        <source\n          srcset="\n            ${n}    1x,\n            ${i} 2x"\n          type="image/png"\n        />\n        <img class="support__img" src="${n}" alt="${e}">\n      </picture></a></li>`)}(e,t)}))})),r.register("a482y",(function(e,t){e.exports=new URL(r("kyEFX").resolve("jDPoR"),import.meta.url).toString()})),r.register("6ZqaX",(function(e,t){e.exports=new URL(r("kyEFX").resolve("6uEBG"),import.meta.url).toString()})),r.register("6kZtF",(function(e,t){e.exports=new URL(r("kyEFX").resolve("k1r7D"),import.meta.url).toString()})),r.register("horqI",(function(e,t){e.exports=new URL(r("kyEFX").resolve("fp3fh"),import.meta.url).toString()})),r.register("gtdAU",(function(e,t){e.exports=new URL(r("kyEFX").resolve("gQHiG"),import.meta.url).toString()})),r.register("ekygX",(function(e,t){e.exports=new URL(r("kyEFX").resolve("6dHKE"),import.meta.url).toString()})),r.register("5hrwT",(function(e,t){e.exports=new URL(r("kyEFX").resolve("4XQzn"),import.meta.url).toString()})),r.register("5wN3t",(function(e,t){e.exports=new URL(r("kyEFX").resolve("6jpBN"),import.meta.url).toString()})),r.register("04p0l",(function(e,t){e.exports=new URL(r("kyEFX").resolve("5PSBZ"),import.meta.url).toString()})),r.register("hpU3y",(function(e,t){e.exports=new URL(r("kyEFX").resolve("j8TBH"),import.meta.url).toString()})),r.register("g4kfJ",(function(e,t){e.exports=new URL(r("kyEFX").resolve("4QcYO"),import.meta.url).toString()})),r.register("uuLlE",(function(e,t){e.exports=new URL(r("kyEFX").resolve("cuKVH"),import.meta.url).toString()})),r.register("uQqVb",(function(e,t){e.exports=new URL(r("kyEFX").resolve("cPZ13"),import.meta.url).toString()})),r.register("aryfV",(function(e,t){e.exports=new URL(r("kyEFX").resolve("fQSFO"),import.meta.url).toString()})),r.register("g7z9y",(function(e,t){e.exports=new URL(r("kyEFX").resolve("jYmqR"),import.meta.url).toString()})),r.register("cE4ZG",(function(e,t){e.exports=new URL(r("kyEFX").resolve("3xzbG"),import.meta.url).toString()})),r.register("5trlv",(function(e,t){e.exports=new URL(r("kyEFX").resolve("6T9rv"),import.meta.url).toString()})),r.register("jX6oD",(function(e,t){e.exports=new URL(r("kyEFX").resolve("kSFhs"),import.meta.url).toString()})),r.register("7tzR7",(function(e,n){var i=r("6P7ua");if(window.innerWidth<=768){new(t(i))(".swiper",{direction:"vertical",loop:!0,slidesPerView:4,spaceBetween:20,navigation:{nextEl:".swiper-button",prevEl:".swiper-button-prev"},cover:!0})}else{const e=document.querySelector(".support__button"),t=document.querySelector(".swiper"),n=document.querySelector(".support__button--icon");e.addEventListener("click",(function(){e.classList.contains("lock")?(e.classList.remove("lock"),t.classList.add("swiper--tablet"),n.classList.add("support__button--up"),e.blur()):(e.classList.add("lock"),t.classList.remove("swiper--tablet"),n.classList.remove("support__button--up"),e.blur())})),t.addEventListener("mouseenter",(function(){if(!e.classList.contains("lock"))return;t.classList.add("swiper__scrollbar")})),t.addEventListener("mouseleave",(function(){t.classList.remove("swiper__scrollbar")}))}})),r.register("6P7ua",(function(e,t){e.exports,e.exports=function(){function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(n,i){void 0===n&&(n={}),void 0===i&&(i={}),Object.keys(i).forEach((s=>{void 0===n[s]?n[s]=i[s]:e(i[s])&&e(n[s])&&Object.keys(i[s]).length>0&&t(n[s],i[s])}))}const n={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function i(){const e="undefined"!=typeof document?document:{};return t(e,n),e}const s={document:n,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,s),e}function o(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function a(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function l(){return Date.now()}function c(e){const t=r();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function u(e,t){void 0===t&&(t="x");const n=r();let i,s,o;const a=c(e);return n.WebKitCSSMatrix?(s=a.transform||a.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map((e=>e.replace(",","."))).join(", ")),o=new n.WebKitCSSMatrix("none"===s?"":s)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=o.toString().split(",")),"x"===t&&(s=n.WebKitCSSMatrix?o.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(s=n.WebKitCSSMatrix?o.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0}function h(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function d(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function p(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const i=n<0||arguments.length<=n?void 0:arguments[n];if(null!=i&&!d(i)){const n=Object.keys(Object(i)).filter((e=>t.indexOf(e)<0));for(let t=0,s=n.length;t<s;t+=1){const s=n[t],r=Object.getOwnPropertyDescriptor(i,s);void 0!==r&&r.enumerable&&(h(e[s])&&h(i[s])?i[s].__swiper__?e[s]=i[s]:p(e[s],i[s]):!h(e[s])&&h(i[s])?(e[s]={},i[s].__swiper__?e[s]=i[s]:p(e[s],i[s])):e[s]=i[s])}}}return e}function f(e,t,n){e.style.setProperty(t,n)}function m(e){let{swiper:t,targetPosition:n,side:i}=e;const s=r(),o=-t.translate;let a,l=null;const c=t.params.speed;t.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(t.cssModeFrameID);const u=n>o?"next":"prev",h=(e,t)=>"next"===u&&e>=t||"prev"===u&&e<=t,d=()=>{a=(new Date).getTime(),null===l&&(l=a);const e=Math.max(Math.min((a-l)/c,1),0),r=.5-Math.cos(e*Math.PI)/2;let u=o+r*(n-o);if(h(u,n)&&(u=n),t.wrapperEl.scrollTo({[i]:u}),h(u,n))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[i]:u})})),void s.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=s.requestAnimationFrame(d)};d()}function g(e){return e.querySelector(".swiper-slide-transform")||e.shadowEl&&e.shadowEl.querySelector(".swiper-slide-transform")||e}function v(e,t){return void 0===t&&(t=""),[...e.children].filter((e=>e.matches(t)))}function y(e,t){void 0===t&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function w(e){const t=r(),n=i(),s=e.getBoundingClientRect(),o=n.body,a=e.clientTop||o.clientTop||0,l=e.clientLeft||o.clientLeft||0,c=e===t?t.scrollY:e.scrollTop,u=e===t?t.scrollX:e.scrollLeft;return{top:s.top+c-a,left:s.left+u-l}}function b(e,t){const n=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function E(e,t){const n=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function T(e,t){return r().getComputedStyle(e,null).getPropertyValue(t)}function S(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function x(e,t){const n=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&n.push(i):n.push(i),i=i.parentElement;return n}function I(e,t){function n(i){i.target===e&&(t.call(e,i),e.removeEventListener("transitionend",n))}t&&e.addEventListener("transitionend",n)}function C(e,t,n){const i=r();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let _,k,A;function M(){const e=r(),t=i();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function N(){return _||(_=M()),_}function D(e){let{userAgent:t}=void 0===e?{}:e;const n=N(),i=r(),s=i.navigator.platform,o=t||i.navigator.userAgent,a={ios:!1,android:!1},l=i.screen.width,c=i.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let h=o.match(/(iPad).*OS\s([\d_]+)/);const d=o.match(/(iPod)(.*OS\s([\d_]+))?/),p=!h&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f="Win32"===s;let m="MacIntel"===s;const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&m&&n.touch&&g.indexOf(`${l}x${c}`)>=0&&(h=o.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),m=!1),u&&!f&&(a.os="android",a.android=!0),(h||p||d)&&(a.os="ios",a.ios=!0),a}function L(e){return void 0===e&&(e={}),k||(k=D(e)),k}function P(){const e=r();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,i]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&i<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function O(){return A||(A=P()),A}function R(e){let{swiper:t,on:n,emit:i}=e;const s=r();let o=null,a=null;const l=()=>{t&&!t.destroyed&&t.initialized&&(i("beforeResize"),i("resize"))},c=()=>{t&&!t.destroyed&&t.initialized&&(o=new ResizeObserver((e=>{a=s.requestAnimationFrame((()=>{const{width:n,height:i}=t;let s=n,r=i;e.forEach((e=>{let{contentBoxSize:n,contentRect:i,target:o}=e;o&&o!==t.el||(s=i?i.width:(n[0]||n).inlineSize,r=i?i.height:(n[0]||n).blockSize)})),s===n&&r===i||l()}))})),o.observe(t.el))},u=()=>{a&&s.cancelAnimationFrame(a),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},h=()=>{t&&!t.destroyed&&t.initialized&&i("orientationchange")};n("init",(()=>{t.params.resizeObserver&&void 0!==s.ResizeObserver?c():(s.addEventListener("resize",l),s.addEventListener("orientationchange",h))})),n("destroy",(()=>{u(),s.removeEventListener("resize",l),s.removeEventListener("orientationchange",h)}))}function F(e){let{swiper:t,extendParams:n,on:i,emit:s}=e;const o=[],a=r(),l=function(e,n){void 0===n&&(n={});const i=new(a.MutationObserver||a.WebkitMutationObserver)((e=>{if(t.__preventObserver__)return;if(1===e.length)return void s("observerUpdate",e[0]);const n=function(){s("observerUpdate",e[0])};a.requestAnimationFrame?a.requestAnimationFrame(n):a.setTimeout(n,0)}));i.observe(e,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),o.push(i)},c=()=>{if(t.params.observer){if(t.params.observeParents){const e=x(t.el);for(let t=0;t<e.length;t+=1)l(e[t])}l(t.el,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},u=()=>{o.forEach((e=>{e.disconnect()})),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",c),i("destroy",u)}var V={on(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;const s=n?"unshift":"push";return e.split(" ").forEach((e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)})),i},once(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;function s(){i.off(e,s),s.__emitterProxy&&delete s.__emitterProxy;for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];t.apply(i,r)}return s.__emitterProxy=t,i.on(e,s,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(s,1)}))})),n):n},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,n,i;for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],n=r.slice(1,r.length),i=e):(t=r[0].events,n=r[0].data,i=r[0].context||e),n.unshift(i),(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(i,[t,...n])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(i,n)}))})),e}};function U(){const e=this;let t,n;const i=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:i.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:i.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(T(i,"padding-left")||0,10)-parseInt(T(i,"padding-right")||0,10),n=n-parseInt(T(i,"padding-top")||0,10)-parseInt(T(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function z(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const i=e.params,{wrapperEl:s,slidesEl:r,size:o,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&i.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,h=v(r,`.${e.params.slideClass}, swiper-slide`),d=c?e.virtual.slides.length:h.length;let p=[];const m=[],g=[];let y=i.slidesOffsetBefore;"function"==typeof y&&(y=i.slidesOffsetBefore.call(e));let w=i.slidesOffsetAfter;"function"==typeof w&&(w=i.slidesOffsetAfter.call(e));const b=e.snapGrid.length,E=e.slidesGrid.length;let S=i.spaceBetween,x=-y,I=0,_=0;if(void 0===o)return;"string"==typeof S&&S.indexOf("%")>=0?S=parseFloat(S.replace("%",""))/100*o:"string"==typeof S&&(S=parseFloat(S)),e.virtualSize=-S,h.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),i.centeredSlides&&i.cssMode&&(f(s,"--swiper-centered-offset-before",""),f(s,"--swiper-centered-offset-after",""));const k=i.grid&&i.grid.rows>1&&e.grid;let A;k&&e.grid.initSlides(d);const M="auto"===i.slidesPerView&&i.breakpoints&&Object.keys(i.breakpoints).filter((e=>void 0!==i.breakpoints[e].slidesPerView)).length>0;for(let s=0;s<d;s+=1){let r;if(A=0,h[s]&&(r=h[s]),k&&e.grid.updateSlide(s,r,d,t),!h[s]||"none"!==T(r,"display")){if("auto"===i.slidesPerView){M&&(h[s].style[t("width")]="");const o=getComputedStyle(r),a=r.style.transform,l=r.style.webkitTransform;if(a&&(r.style.transform="none"),l&&(r.style.webkitTransform="none"),i.roundLengths)A=e.isHorizontal()?C(r,"width",!0):C(r,"height",!0);else{const e=n(o,"width"),t=n(o,"padding-left"),i=n(o,"padding-right"),s=n(o,"margin-left"),a=n(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)A=e+s+a;else{const{clientWidth:n,offsetWidth:o}=r;A=e+t+i+s+a+(o-n)}}a&&(r.style.transform=a),l&&(r.style.webkitTransform=l),i.roundLengths&&(A=Math.floor(A))}else A=(o-(i.slidesPerView-1)*S)/i.slidesPerView,i.roundLengths&&(A=Math.floor(A)),h[s]&&(h[s].style[t("width")]=`${A}px`);h[s]&&(h[s].swiperSlideSize=A),g.push(A),i.centeredSlides?(x=x+A/2+I/2+S,0===I&&0!==s&&(x=x-o/2-S),0===s&&(x=x-o/2-S),Math.abs(x)<.001&&(x=0),i.roundLengths&&(x=Math.floor(x)),_%i.slidesPerGroup==0&&p.push(x),m.push(x)):(i.roundLengths&&(x=Math.floor(x)),(_-Math.min(e.params.slidesPerGroupSkip,_))%e.params.slidesPerGroup==0&&p.push(x),m.push(x),x=x+A+S),e.virtualSize+=A+S,I=A,_+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+w,a&&l&&("slide"===i.effect||"coverflow"===i.effect)&&(s.style.width=`${e.virtualSize+S}px`),i.setWrapperSize&&(s.style[t("width")]=`${e.virtualSize+S}px`),k&&e.grid.updateWrapperSize(A,p,t),!i.centeredSlides){const t=[];for(let n=0;n<p.length;n+=1){let s=p[n];i.roundLengths&&(s=Math.floor(s)),p[n]<=e.virtualSize-o&&t.push(s)}p=t,Math.floor(e.virtualSize-o)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-o)}if(c&&i.loop){const t=g[0]+S;if(i.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),s=t*i.slidesPerGroup;for(let e=0;e<n;e+=1)p.push(p[p.length-1]+s)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===i.slidesPerGroup&&p.push(p[p.length-1]+t),m.push(m[m.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==S){const n=e.isHorizontal()&&a?"marginLeft":t("marginRight");h.filter(((e,t)=>!(i.cssMode&&!i.loop)||t!==h.length-1)).forEach((e=>{e.style[n]=`${S}px`}))}if(i.centeredSlides&&i.centeredSlidesBounds){let e=0;g.forEach((t=>{e+=t+(S||0)})),e-=S;const t=e-o;p=p.map((e=>e<0?-y:e>t?t+w:e))}if(i.centerInsufficientSlides){let e=0;if(g.forEach((t=>{e+=t+(S||0)})),e-=S,e<o){const t=(o-e)/2;p.forEach(((e,n)=>{p[n]=e-t})),m.forEach(((e,n)=>{m[n]=e+t}))}}if(Object.assign(e,{slides:h,snapGrid:p,slidesGrid:m,slidesSizesGrid:g}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){f(s,"--swiper-centered-offset-before",-p[0]+"px"),f(s,"--swiper-centered-offset-after",e.size/2-g[g.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(d!==u&&e.emit("slidesLengthChange"),p.length!==b&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==E&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),!(c||i.cssMode||"slide"!==i.effect&&"fade"!==i.effect)){const t=`${i.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);d<=i.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}}function $(e){const t=this,n=[],i=t.virtual&&t.params.virtual.enabled;let s,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>i?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const e=t.activeIndex+s;if(e>t.slides.length&&!i)break;n.push(o(e))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(void 0!==n[s]){const e=n[s].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)}function j(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-n-e.cssOverflowAdjustment()}function B(e){void 0===e&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:i,rtlTranslate:s,snapGrid:r}=t;if(0===i.length)return;void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;s&&(o=e),i.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:"string"==typeof a&&(a=parseFloat(a));for(let e=0;e<i.length;e+=1){const l=i[e];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=i[0].swiperSlideOffset);const u=(o+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),h=(o-r[0]+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),d=-(o-c),p=d+t.slidesSizesGrid[e];(d>=0&&d<t.size-1||p>1&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),i[e].classList.add(n.slideVisibleClass)),l.progress=s?-u:u,l.originalProgress=s?-h:h}}function q(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:s,isBeginning:r,isEnd:o,progressLoop:a}=t;const l=r,c=o;if(0===i)s=0,r=!0,o=!0;else{s=(e-t.minTranslate())/i;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;r=n||s<=0,o=a||s>=1,n&&(s=0),a&&(s=1)}if(n.loop){const n=t.getSlideIndexByData(0),i=t.getSlideIndexByData(t.slides.length-1),s=t.slidesGrid[n],r=t.slidesGrid[i],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=s?(l-s)/o:(l+o-r)/o,a>1&&(a-=1)}Object.assign(t,{progress:s,progressLoop:a,isBeginning:r,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&t.emit("fromEdge"),t.emit("progress",s)}function H(){const e=this,{slides:t,params:n,slidesEl:i,activeIndex:s}=e,r=e.virtual&&n.virtual.enabled,o=e=>v(i,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let a;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),r)if(n.loop){let t=s-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${t}"]`)}else a=o(`[data-swiper-slide-index="${s}"]`);else a=t[s];if(a){a.classList.add(n.slideActiveClass);let e=E(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let i=b(a,`.${n.slideClass}, swiper-slide`)[0];n.loop,i&&i.classList.add(n.slidePrevClass)}e.emitSlidesClasses()}const G=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,i=t.closest(n());if(i){const t=i.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},W=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},K=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const i="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),s=e.activeIndex,r=s+i-1;if(e.params.rewind)for(let i=s-t;i<=r+t;i+=1){const t=(i%n+n)%n;t!==s&&t>r&&W(e,t)}else for(let i=Math.max(r-t,0);i<=Math.min(r+t,n-1);i+=1)i!==s&&i>r&&W(e,i)};function X(e){const{slidesGrid:t,params:n}=e,i=e.rtlTranslate?e.translate:-e.translate;let s;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?i>=t[e]&&i<t[e+1]-(t[e+1]-t[e])/2?s=e:i>=t[e]&&i<t[e+1]&&(s=e+1):i>=t[e]&&(s=e);return n.normalizeSlideIndex&&(s<0||void 0===s)&&(s=0),s}function Y(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:s,activeIndex:r,realIndex:o,snapIndex:a}=t;let l,c=e;const u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=X(t)),i.indexOf(n)>=0)l=i.indexOf(n);else{const e=Math.min(s.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/s.slidesPerGroup)}if(l>=i.length&&(l=i.length-1),c===r)return l!==a&&(t.snapIndex=l,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=u(c)));let h;h=t.virtual&&s.virtual.enabled&&s.loop?u(c):t.slides[c]?parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):c,Object.assign(t,{previousSnapIndex:a,snapIndex:l,previousRealIndex:o,realIndex:h,previousIndex:r,activeIndex:c}),t.initialized&&K(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==h&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function Q(e){const t=this,n=t.params,i=e.closest(`.${n.slideClass}, swiper-slide`);let s,r=!1;if(i)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===i){r=!0,s=e;break}if(!i||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=s,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}function J(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:i,translate:s,wrapperEl:r}=t;if(n.virtualTranslate)return i?-s:s;if(n.cssMode)return s;let o=u(r,e);return o+=t.cssOverflowAdjustment(),i&&(o=-o),o||0}function Z(e,t){const n=this,{rtlTranslate:i,params:s,wrapperEl:r,progress:o}=n;let a=0,l=0;const c=0;let u;n.isHorizontal()?a=i?-e:e:l=e,s.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,s.cssMode?r[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:s.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),r.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);const h=n.maxTranslate()-n.minTranslate();u=0===h?0:(e-n.minTranslate())/h,u!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function ee(){return-this.snapGrid[0]}function te(){return-this.snapGrid[this.snapGrid.length-1]}function ne(e,t,n,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),void 0===i&&(i=!0);const r=this,{params:o,wrapperEl:a}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let u;if(u=i&&e>l?l:i&&e<c?c:e,r.updateProgress(u),o.cssMode){const e=r.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:-u,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,n&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}function ie(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)}function se(e){let{swiper:t,runCallbacks:n,direction:i,step:s}=e;const{activeIndex:r,previousIndex:o}=t;let a=i;if(a||(a=r>o?"next":r<o?"prev":"reset"),t.emit(`transition${s}`),n&&r!==o){if("reset"===a)return void t.emit(`slideResetTransition${s}`);t.emit(`slideChangeTransition${s}`),"next"===a?t.emit(`slideNextTransition${s}`):t.emit(`slidePrevTransition${s}`)}}function re(e,t){void 0===e&&(e=!0);const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),se({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function oe(e,t){void 0===e&&(e=!0);const n=this,{params:i}=n;n.animating=!1,i.cssMode||(n.setTransition(0),se({swiper:n,runCallbacks:e,direction:t,step:"End"}))}function ae(e,t,n,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),"string"==typeof e&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:d,wrapperEl:p,enabled:f}=r;if(r.animating&&a.preventInteractionOnTransition||!f&&!i&&!s)return!1;const g=Math.min(r.params.slidesPerGroupSkip,o);let v=g+Math.floor((o-g)/r.params.slidesPerGroup);v>=l.length&&(v=l.length-1);const y=-l[v];if(a.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*y),n=Math.floor(100*c[e]),i=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=n&&t<i-(i-n)/2?o=e:t>=n&&t<i&&(o=e+1):t>=n&&(o=e)}if(r.initialized&&o!==h){if(!r.allowSlideNext&&y<r.translate&&y<r.minTranslate())return!1;if(!r.allowSlidePrev&&y>r.translate&&y>r.maxTranslate()&&(h||0)!==o)return!1}let w;if(o!==(u||0)&&n&&r.emit("beforeSlideChangeStart"),r.updateProgress(y),w=o>h?"next":o<h?"prev":"reset",d&&-y===r.translate||!d&&y===r.translate)return r.updateActiveIndex(o),a.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==a.effect&&r.setTranslate(y),"reset"!==w&&(r.transitionStart(n,w),r.transitionEnd(n,w)),!1;if(a.cssMode){const e=r.isHorizontal(),n=d?y:-y;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),t&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{p[e?"scrollLeft":"scrollTop"]=n}))):p[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:n,side:e?"left":"top"}),!0;p.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(y),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(n,w),0===t?r.transitionEnd(n,w):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(n,w))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function le(e,t,n,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),"string"==typeof e&&(e=parseInt(e,10));const s=this;let r=e;return s.params.loop&&(s.virtual&&s.params.virtual.enabled?r+=s.virtual.slidesBefore:r=s.getSlideIndexByData(r)),s.slideTo(r,t,n,i)}function ce(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const i=this,{enabled:s,params:r,animating:o}=i;if(!s)return i;let a=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<r.slidesPerGroupSkip?1:a,c=i.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft}return r.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+l,e,t,n)}function ue(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const i=this,{params:s,snapGrid:r,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l)return i;const u=i.virtual&&s.virtual.enabled;if(s.loop){if(c&&!u&&s.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}function h(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const d=h(a?i.translate:-i.translate),p=r.map((e=>h(e)));let f=r[p.indexOf(d)-1];if(void 0===f&&s.cssMode){let e;r.forEach(((t,n)=>{d>=t&&(e=n)})),void 0!==e&&(f=r[e>0?e-1:e])}let m=0;if(void 0!==f&&(m=o.indexOf(f),m<0&&(m=i.activeIndex-1),"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(m=m-i.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),s.rewind&&i.isBeginning){const s=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(s,e,t,n)}return i.slideTo(m,e,t,n)}function he(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const i=this;return i.slideTo(i.activeIndex,e,t,n)}function de(e,t,n,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===i&&(i=.5);const s=this;let r=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,r),a=o+Math.floor((r-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const e=s.snapGrid[a];l-e>(s.snapGrid[a+1]-e)*i&&(r+=s.params.slidesPerGroup)}else{const e=s.snapGrid[a-1];l-e<=(s.snapGrid[a]-e)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,e,t,n)}function pe(){const e=this,{params:t,slidesEl:n}=e,i="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let s,r=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-i/2||r>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),r=e.getSlideIndex(v(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),a((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-i?(e.loopFix(),r=e.getSlideIndex(v(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),a((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}function fe(e){const t=this,{params:n,slidesEl:i}=t;!n.loop||t.virtual&&t.params.virtual.enabled||(v(i,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"}))}function me(e){let{slideRealIndex:t,slideTo:n=!0,direction:i,setTranslate:s,activeSlideIndex:r,byController:o,byMousewheel:a}=void 0===e?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:h,slidesEl:d,params:p}=l;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&p.virtual.enabled)return n&&(p.centeredSlides||0!==l.snapIndex?p.centeredSlides&&l.snapIndex<p.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0):l.slideTo(l.virtual.slides.length,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=h,void l.emit("loopFix");const f="auto"===p.slidesPerView?l.slidesPerViewDynamic():Math.ceil(parseFloat(p.slidesPerView,10));let m=p.loopedSlides||f;m%p.slidesPerGroup!=0&&(m+=p.slidesPerGroup-m%p.slidesPerGroup),l.loopedSlides=m;const g=[],v=[];let y=l.activeIndex;void 0===r?r=l.getSlideIndex(l.slides.filter((e=>e.classList.contains(p.slideActiveClass)))[0]):y=r;const w="next"===i||!i,b="prev"===i||!i;let E=0,T=0;if(r<m){E=Math.max(m-r,p.slidesPerGroup);for(let e=0;e<m-r;e+=1){const t=e-Math.floor(e/c.length)*c.length;g.push(c.length-t-1)}}else if(r>l.slides.length-2*m){T=Math.max(r-(l.slides.length-2*m),p.slidesPerGroup);for(let e=0;e<T;e+=1){const t=e-Math.floor(e/c.length)*c.length;v.push(t)}}if(b&&g.forEach((e=>{l.slides[e].swiperLoopMoveDOM=!0,d.prepend(l.slides[e]),l.slides[e].swiperLoopMoveDOM=!1})),w&&v.forEach((e=>{l.slides[e].swiperLoopMoveDOM=!0,d.append(l.slides[e]),l.slides[e].swiperLoopMoveDOM=!1})),l.recalcSlides(),"auto"===p.slidesPerView&&l.updateSlides(),p.watchSlidesProgress&&l.updateSlidesOffset(),n)if(g.length>0&&b)if(void 0===t){const e=l.slidesGrid[y],t=l.slidesGrid[y+E]-e;a?l.setTranslate(l.translate-t):(l.slideTo(y+E,0,!1,!0),s&&(l.touches[l.isHorizontal()?"startX":"startY"]+=t))}else s&&l.slideToLoop(t,0,!1,!0);else if(v.length>0&&w)if(void 0===t){const e=l.slidesGrid[y],t=l.slidesGrid[y-T]-e;a?l.setTranslate(l.translate-t):(l.slideTo(y-T,0,!1,!0),s&&(l.touches[l.isHorizontal()?"startX":"startY"]+=t))}else l.slideToLoop(t,0,!1,!0);if(l.allowSlidePrev=u,l.allowSlideNext=h,l.controller&&l.controller.control&&!o){const e={slideRealIndex:t,slideTo:!1,direction:i,setTranslate:s,activeSlideIndex:r,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach((t=>{!t.destroyed&&t.params.loop&&t.loopFix(e)})):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix(e)}l.emit("loopFix")}function ge(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;i[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),i.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}function ve(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))}function ye(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}function we(e,t){function n(t){if(!t||t===i()||t===r())return null;t.assignedSlot&&(t=t.assignedSlot);const s=t.closest(e);return s||t.getRootNode?s||n(t.getRootNode().host):null}return void 0===t&&(t=this),n(t)}function be(e){const t=this,n=i(),s=r(),o=t.touchEventsData;o.evCache.push(e);const{params:a,touches:c,enabled:u}=t;if(!u)return;if(!a.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let h=e;h.originalEvent&&(h=h.originalEvent);let d=h.target;if("wrapper"===a.touchEventsTarget&&!t.wrapperEl.contains(d))return;if("which"in h&&3===h.which)return;if("button"in h&&h.button>0)return;if(o.isTouched&&o.isMoved)return;const p=!!a.noSwipingClass&&""!==a.noSwipingClass,f=e.composedPath?e.composedPath():e.path;p&&h.target&&h.target.shadowRoot&&f&&(d=f[0]);const m=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,g=!(!h.target||!h.target.shadowRoot);if(a.noSwiping&&(g?we(m,d):d.closest(m)))return void(t.allowClick=!0);if(a.swipeHandler&&!d.closest(a.swipeHandler))return;c.currentX=h.pageX,c.currentY=h.pageY;const v=c.currentX,y=c.currentY,w=a.edgeSwipeDetection||a.iOSEdgeSwipeDetection,b=a.edgeSwipeThreshold||a.iOSEdgeSwipeThreshold;if(w&&(v<=b||v>=s.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),c.startX=v,c.startY=y,o.touchStartTime=l(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(o.allowThresholdMove=!1);let E=!0;d.matches(o.focusableElements)&&(E=!1,"SELECT"===d.nodeName&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==d&&n.activeElement.blur();const T=E&&t.allowTouchMove&&a.touchStartPreventDefault;!a.touchStartForcePreventDefault&&!T||d.isContentEditable||h.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",h)}function Ee(e){const t=i(),n=this,s=n.touchEventsData,{params:r,touches:o,rtlTranslate:a,enabled:c}=n;if(!c)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let u=e;if(u.originalEvent&&(u=u.originalEvent),!s.isTouched)return void(s.startMoving&&s.isScrolling&&n.emit("touchMoveOpposite",u));const h=s.evCache.findIndex((e=>e.pointerId===u.pointerId));h>=0&&(s.evCache[h]=u);const d=s.evCache.length>1?s.evCache[0]:u,p=d.pageX,f=d.pageY;if(u.preventedByNestedSwiper)return o.startX=p,void(o.startY=f);if(!n.allowTouchMove)return u.target.matches(s.focusableElements)||(n.allowClick=!1),void(s.isTouched&&(Object.assign(o,{startX:p,startY:f,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:p,currentY:f}),s.touchStartTime=l()));if(r.touchReleaseOnEdges&&!r.loop)if(n.isVertical()){if(f<o.startY&&n.translate<=n.maxTranslate()||f>o.startY&&n.translate>=n.minTranslate())return s.isTouched=!1,void(s.isMoved=!1)}else if(p<o.startX&&n.translate<=n.maxTranslate()||p>o.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&u.target===t.activeElement&&u.target.matches(s.focusableElements))return s.isMoved=!0,void(n.allowClick=!1);if(s.allowTouchCallbacks&&n.emit("touchMove",u),u.targetTouches&&u.targetTouches.length>1)return;o.currentX=p,o.currentY=f;const m=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+g**2)<n.params.threshold)return;if(void 0===s.isScrolling){let e;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?s.isScrolling=!1:m*m+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(m))/Math.PI,s.isScrolling=n.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(s.isScrolling&&n.emit("touchMoveOpposite",u),void 0===s.startMoving&&(o.currentX===o.startX&&o.currentY===o.startY||(s.startMoving=!0)),s.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&s.evCache.length>1)return void(s.isTouched=!1);if(!s.startMoving)return;n.allowClick=!1,!r.cssMode&&u.cancelable&&u.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&u.stopPropagation();let v=n.isHorizontal()?m:g,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;r.oneWayMovement&&(v=Math.abs(v)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=v,v*=r.touchRatio,a&&(v=-v,y=-y);const w=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const b=n.params.loop&&!r.cssMode;if(!s.isMoved){if(b&&n.loopFix({direction:n.swipeDirection}),s.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}s.allowMomentumBounce=!1,!r.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",u)}let E;s.isMoved&&w!==n.touchesDirection&&b&&Math.abs(v)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),E=!0),n.emit("sliderMove",u),s.isMoved=!0,s.currentTranslate=v+s.startTranslate;let T=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),v>0?(b&&!E&&s.currentTranslate>(r.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>n.minTranslate()&&(T=!1,r.resistance&&(s.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+s.startTranslate+v)**S))):v<0&&(b&&!E&&s.currentTranslate<(r.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===r.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),s.currentTranslate<n.maxTranslate()&&(T=!1,r.resistance&&(s.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-s.startTranslate-v)**S))),T&&(u.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),n.allowSlidePrev||n.allowSlideNext||(s.currentTranslate=s.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||s.allowThresholdMove))return void(s.currentTranslate=s.startTranslate);if(!s.allowThresholdMove)return s.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,s.currentTranslate=s.startTranslate,void(o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(s.currentTranslate),n.setTranslate(s.currentTranslate))}function Te(e){const t=this,n=t.touchEventsData,i=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(i>=0&&n.evCache.splice(i,1),["pointercancel","pointerout","pointerleave"].includes(e.type)&&("pointercancel"!==e.type||!t.browser.isSafari&&!t.browser.isWebView))return;const{params:s,touches:r,rtlTranslate:o,slidesGrid:c,enabled:u}=t;if(!u)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;let h=e;if(h.originalEvent&&(h=h.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",h),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);s.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=l(),p=d-n.touchStartTime;if(t.allowClick){const e=h.path||h.composedPath&&h.composedPath();t.updateClickedSlide(e&&e[0]||h.target),t.emit("tap click",h),p<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",h)}if(n.lastClickTime=l(),a((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===r.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let f;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,f=s.followFinger?o?t.translate:-t.translate:-n.currentTranslate,s.cssMode)return;if(t.params.freeMode&&s.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:f});let m=0,g=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<s.slidesPerGroupSkip?1:s.slidesPerGroup){const t=e<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==c[e+t]?f>=c[e]&&f<c[e+t]&&(m=e,g=c[e+t]-c[e]):f>=c[e]&&(m=e,g=c[c.length-1]-c[c.length-2])}let v=null,y=null;s.rewind&&(t.isBeginning?y=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const w=(f-c[m])/g,b=m<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(p>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?v:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-s.longSwipesRatio?t.slideTo(m+b):null!==y&&w<0&&Math.abs(w)>s.longSwipesRatio?t.slideTo(y):t.slideTo(m))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);!t.navigation||h.target!==t.navigation.nextEl&&h.target!==t.navigation.prevEl?("next"===t.swipeDirection&&t.slideTo(null!==v?v:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==y?y:m)):h.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m)}}function Se(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:s,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function xe(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Ie(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;let s;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();s=0===r?0:(e.translate-e.minTranslate())/r,s!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Ce(e){const t=this;G(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}let _e=!1;function ke(){}const Ae=(e,t)=>{const n=i(),{params:s,el:r,wrapperEl:o,device:a}=e,l=!!s.nested,c="on"===t?"addEventListener":"removeEventListener",u=t;r[c]("pointerdown",e.onTouchStart,{passive:!1}),n[c]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[c]("pointerup",e.onTouchEnd,{passive:!0}),n[c]("pointercancel",e.onTouchEnd,{passive:!0}),n[c]("pointerout",e.onTouchEnd,{passive:!0}),n[c]("pointerleave",e.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&r[c]("click",e.onClick,!0),s.cssMode&&o[c]("scroll",e.onScroll),s.updateOnWindowResize?e[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Se,!0):e[u]("observerUpdate",Se,!0),r[c]("load",e.onLoad,{capture:!0})};function Me(){const e=this,t=i(),{params:n}=e;e.onTouchStart=be.bind(e),e.onTouchMove=Ee.bind(e),e.onTouchEnd=Te.bind(e),n.cssMode&&(e.onScroll=Ie.bind(e)),e.onClick=xe.bind(e),e.onLoad=Ce.bind(e),_e||(t.addEventListener("touchstart",ke),_e=!0),Ae(e,"on")}function Ne(){Ae(this,"off")}const De=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Le(){const e=this,{realIndex:t,initialized:n,params:i,el:s}=e,r=i.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const o=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in r?r[o]:void 0)||e.originalParams,l=De(e,i),c=De(e,a),u=i.enabled;l&&!c?(s.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(s.classList.add(`${i.containerModifierClass}grid`),(a.grid.fill&&"column"===a.grid.fill||!a.grid.fill&&"column"===i.grid.fill)&&s.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=i[t]&&i[t].enabled,s=a[t]&&a[t].enabled;n&&!s&&e[t].disable(),!n&&s&&e[t].enable()}));const h=a.direction&&a.direction!==i.direction,d=i.loop&&(a.slidesPerView!==i.slidesPerView||h);h&&n&&e.changeDirection(),p(e.params,a);const f=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!f?e.disable():!u&&f&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),d&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",a)}function Pe(e,t,n){if(void 0===t&&(t="window"),!e||"container"===t&&!n)return;let i=!1;const s=r(),o="window"===t?s.innerHeight:n.clientHeight,a=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:o*t,point:e}}return{value:e,point:e}}));a.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<a.length;e+=1){const{point:r,value:o}=a[e];"window"===t?s.matchMedia(`(min-width: ${o}px)`).matches&&(i=r):o<=n.clientWidth&&(i=r)}return i||"max"}function Oe(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((i=>{e[i]&&n.push(t+i)})):"string"==typeof e&&n.push(t+e)})),n}function Re(){const e=this,{classNames:t,params:n,rtl:i,el:s,device:r}=e,o=Oe(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),s.classList.add(...t),e.emitContainerClasses()}function Fe(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}function Ve(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*i;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Ue={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ze(e,t){return function(n){void 0===n&&(n={});const i=Object.keys(n)[0],s=n[i];"object"==typeof s&&null!==s?(["navigation","pagination","scrollbar"].indexOf(i)>=0&&!0===e[i]&&(e[i]={auto:!0}),i in e&&"enabled"in s?(!0===e[i]&&(e[i]={enabled:!0}),"object"!=typeof e[i]||"enabled"in e[i]||(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),p(t,n)):p(t,n)):p(t,n)}}const $e={eventsEmitter:V,update:{updateSize:U,updateSlides:z,updateAutoHeight:$,updateSlidesOffset:j,updateSlidesProgress:B,updateProgress:q,updateSlidesClasses:H,updateActiveIndex:Y,updateClickedSlide:Q},translate:{getTranslate:J,setTranslate:Z,minTranslate:ee,maxTranslate:te,translateTo:ne},transition:{setTransition:ie,transitionStart:re,transitionEnd:oe},slide:{slideTo:ae,slideToLoop:le,slideNext:ce,slidePrev:ue,slideReset:he,slideToClosest:de,slideToClickedSlide:pe},loop:{loopCreate:fe,loopFix:me,loopDestroy:ge},grabCursor:{setGrabCursor:ve,unsetGrabCursor:ye},events:{attachEvents:Me,detachEvents:Ne},breakpoints:{setBreakpoint:Le,getBreakpoint:Pe},checkOverflow:{checkOverflow:Ve},classes:{addClasses:Re,removeClasses:Fe}},je={};class Be{getSlideIndex(e){const{slidesEl:t,params:n}=this,i=S(v(t,`.${n.slideClass}, swiper-slide`)[0]);return S(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=v(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),s=(n.maxTranslate()-i)*e+i;n.translateTo(s,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const n=this,{params:i,slides:s,slidesGrid:r,slidesSizesGrid:o,size:a,activeIndex:l}=n;let c=1;if(i.centeredSlides){let e,t=s[l].swiperSlideSize;for(let n=l+1;n<s.length;n+=1)s[n]&&!e&&(t+=s[n].swiperSlideSize,c+=1,t>a&&(e=!0));for(let n=l-1;n>=0;n-=1)s[n]&&!e&&(t+=s[n].swiperSlideSize,c+=1,t>a&&(e=!0))}else if("current"===e)for(let e=l+1;e<s.length;e+=1)(t?r[e]+o[e]-r[l]<a:r[e]-r[l]<a)&&(c+=1);else for(let e=l-1;e>=0;e-=1)r[l]-r[e]<a&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function i(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&G(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled)i(),e.params.autoHeight&&e.updateAutoHeight();else{if(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(t.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const n=this,i=n.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(i()):v(n,i())[0];return!s&&t.params.createElements&&(s=y("div",t.params.wrapperClass),n.append(s),v(n,`.${t.params.slideClass}`).forEach((e=>{s.append(e)}))),Object.assign(t,{el:n,wrapperEl:s,slidesEl:t.isElement?n:s,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===T(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===T(n,"direction")),wrongRTL:"-webkit-box"===T(s,"display")}),!0}init(e){const t=this;return t.initialized||!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?G(t,e):e.addEventListener("load",(e=>{G(t,e.target)}))})),K(t),t.initialized=!0,K(t),t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const n=this,{params:i,el:s,wrapperEl:r,slides:a}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttribute("style"),r.removeAttribute("style"),a&&a.length&&a.forEach((e=>{e.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,o(n)),n.destroyed=!0),null}static extendDefaults(e){p(je,e)}static get extendedDefaults(){return je}static get defaults(){return Ue}static installModule(e){Be.prototype.__modules__||(Be.prototype.__modules__=[]);const t=Be.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>Be.installModule(e))),Be):(Be.installModule(e),Be)}constructor(){let e,t;for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];1===s.length&&s[0].constructor&&"Object"===Object.prototype.toString.call(s[0]).slice(8,-1)?t=s[0]:[e,t]=s,t||(t={}),t=p({},t),e&&!t.el&&(t.el=e);const o=i();if(t.el&&"string"==typeof t.el&&o.querySelectorAll(t.el).length>1){const e=[];return o.querySelectorAll(t.el).forEach((n=>{const i=p({},t,{el:n});e.push(new Be(i))})),e}const a=this;a.__swiper__=!0,a.support=N(),a.device=L({userAgent:t.userAgent}),a.browser=O(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);const l={};a.modules.forEach((e=>{e({params:t,swiper:a,extendParams:ze(t,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}));const c=p({},Ue,l);return a.params=p({},c,je,t),a.originalParams=p({},a.params),a.passedParams=p({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach((e=>{a.on(e,a.params.on[e])})),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===a.params.direction,isVertical:()=>"vertical"===a.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return 8388608*Math.trunc(this.translate/8388608)},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}}function qe(e){let t,{swiper:n,extendParams:s,on:r,emit:o}=e;s({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const a=i();n.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const l=a.createElement("div");function c(e,t){const i=n.params.virtual;if(i.cache&&n.virtual.cache[t])return n.virtual.cache[t];let s;return i.renderSlide?(s=i.renderSlide.call(n,e,t),"string"==typeof s&&(l.innerHTML=s,s=l.children[0])):s=n.isElement?y("swiper-slide"):y("div",n.params.slideClass),s.setAttribute("data-swiper-slide-index",t),i.renderSlide||(s.innerHTML=e),i.cache&&(n.virtual.cache[t]=s),s}function u(e){const{slidesPerView:t,slidesPerGroup:i,centeredSlides:s,loop:r}=n.params,{addSlidesBefore:a,addSlidesAfter:l}=n.params.virtual,{from:u,to:h,slides:d,slidesGrid:p,offset:f}=n.virtual;n.params.cssMode||n.updateActiveIndex();const m=n.activeIndex||0;let g,y,w;g=n.rtlTranslate?"right":n.isHorizontal()?"left":"top",s?(y=Math.floor(t/2)+i+l,w=Math.floor(t/2)+i+a):(y=t+(i-1)+l,w=(r?t:i)+a);let b=m-w,E=m+y;r||(b=Math.max(b,0),E=Math.min(E,d.length-1));let T=(n.slidesGrid[b]||0)-(n.slidesGrid[0]||0);function S(){n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),o("virtualUpdate")}if(r&&m>=w?(b-=w,s||(T+=n.slidesGrid[0])):r&&m<w&&(b=-w,s&&(T+=n.slidesGrid[0])),Object.assign(n.virtual,{from:b,to:E,offset:T,slidesGrid:n.slidesGrid,slidesBefore:w,slidesAfter:y}),u===b&&h===E&&!e)return n.slidesGrid!==p&&T!==f&&n.slides.forEach((e=>{e.style[g]=T-Math.abs(n.cssOverflowAdjustment())+"px"})),n.updateProgress(),void o("virtualUpdate");if(n.params.virtual.renderExternal)return n.params.virtual.renderExternal.call(n,{offset:T,from:b,to:E,slides:function(){const e=[];for(let t=b;t<=E;t+=1)e.push(d[t]);return e}()}),void(n.params.virtual.renderExternalUpdate?S():o("virtualUpdate"));const x=[],I=[],C=e=>{let t=e;return e<0?t=d.length+e:t>=d.length&&(t-=d.length),t};if(e)n.slidesEl.querySelectorAll(`.${n.params.slideClass}, swiper-slide`).forEach((e=>{e.remove()}));else for(let e=u;e<=h;e+=1)if(e<b||e>E){const t=C(e);n.slidesEl.querySelectorAll(`.${n.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`).forEach((e=>{e.remove()}))}const _=r?-d.length:0,k=r?2*d.length:d.length;for(let t=_;t<k;t+=1)if(t>=b&&t<=E){const n=C(t);void 0===h||e?I.push(n):(t>h&&I.push(n),t<u&&x.push(n))}if(I.forEach((e=>{n.slidesEl.append(c(d[e],e))})),r)for(let e=x.length-1;e>=0;e-=1){const t=x[e];n.slidesEl.prepend(c(d[t],t))}else x.sort(((e,t)=>t-e)),x.forEach((e=>{n.slidesEl.prepend(c(d[e],e))}));v(n.slidesEl,".swiper-slide, swiper-slide").forEach((e=>{e.style[g]=T-Math.abs(n.cssOverflowAdjustment())+"px"})),S()}function h(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&n.virtual.slides.push(e[t]);else n.virtual.slides.push(e);u(!0)}function d(e){const t=n.activeIndex;let i=t+1,s=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&n.virtual.slides.unshift(e[t]);i=t+e.length,s=e.length}else n.virtual.slides.unshift(e);if(n.params.virtual.cache){const e=n.virtual.cache,t={};Object.keys(e).forEach((n=>{const i=e[n],r=i.getAttribute("data-swiper-slide-index");r&&i.setAttribute("data-swiper-slide-index",parseInt(r,10)+s),t[parseInt(n,10)+s]=i})),n.virtual.cache=t}u(!0),n.slideTo(i,0)}function p(e){if(null==e)return;let t=n.activeIndex;if(Array.isArray(e))for(let i=e.length-1;i>=0;i-=1)n.virtual.slides.splice(e[i],1),n.params.virtual.cache&&delete n.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else n.virtual.slides.splice(e,1),n.params.virtual.cache&&delete n.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);u(!0),n.slideTo(t,0)}function m(){n.virtual.slides=[],n.params.virtual.cache&&(n.virtual.cache={}),u(!0),n.slideTo(0,0)}r("beforeInit",(()=>{if(!n.params.virtual.enabled)return;let e;if(void 0===n.passedParams.virtual.slides){const t=[...n.slidesEl.children].filter((e=>e.matches(`.${n.params.slideClass}, swiper-slide`)));t&&t.length&&(n.virtual.slides=[...t],e=!0,t.forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t),n.virtual.cache[t]=e,e.remove()})))}e||(n.virtual.slides=n.params.virtual.slides),n.classNames.push(`${n.params.containerModifierClass}virtual`),n.params.watchSlidesProgress=!0,n.originalParams.watchSlidesProgress=!0,n.params.initialSlide||u()})),r("setTranslate",(()=>{n.params.virtual.enabled&&(n.params.cssMode&&!n._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{u()}),100)):u())})),r("init update resize",(()=>{n.params.virtual.enabled&&n.params.cssMode&&f(n.wrapperEl,"--swiper-virtual-size",`${n.virtualSize}px`)})),Object.assign(n.virtual,{appendSlide:h,prependSlide:d,removeSlide:p,removeAllSlides:m,update:u})}function He(e){let{swiper:t,extendParams:n,on:s,emit:o}=e;const a=i(),l=r();function c(e){if(!t.enabled)return;const{rtlTranslate:n}=t;let i=e;i.originalEvent&&(i=i.originalEvent);const s=i.keyCode||i.charCode,r=t.params.keyboard.pageUpDown,c=r&&33===s,u=r&&34===s,h=37===s,d=39===s,p=38===s,f=40===s;if(!t.allowSlideNext&&(t.isHorizontal()&&d||t.isVertical()&&f||u))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&h||t.isVertical()&&p||c))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||a.activeElement&&a.activeElement.nodeName&&("input"===a.activeElement.nodeName.toLowerCase()||"textarea"===a.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(c||u||h||d||p||f)){let e=!1;if(x(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&0===x(t.el,`.${t.params.slideActiveClass}`).length)return;const i=t.el,s=i.clientWidth,r=i.clientHeight,o=l.innerWidth,a=l.innerHeight,c=w(i);n&&(c.left-=i.scrollLeft);const u=[[c.left,c.top],[c.left+s,c.top],[c.left,c.top+r],[c.left+s,c.top+r]];for(let t=0;t<u.length;t+=1){const n=u[t];if(n[0]>=0&&n[0]<=o&&n[1]>=0&&n[1]<=a){if(0===n[0]&&0===n[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((c||u||h||d)&&(i.preventDefault?i.preventDefault():i.returnValue=!1),((u||d)&&!n||(c||h)&&n)&&t.slideNext(),((c||h)&&!n||(u||d)&&n)&&t.slidePrev()):((c||u||p||f)&&(i.preventDefault?i.preventDefault():i.returnValue=!1),(u||f)&&t.slideNext(),(c||p)&&t.slidePrev()),o("keyPress",s)}}function u(){t.keyboard.enabled||(a.addEventListener("keydown",c),t.keyboard.enabled=!0)}function h(){t.keyboard.enabled&&(a.removeEventListener("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},n({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),s("init",(()=>{t.params.keyboard.enabled&&u()})),s("destroy",(()=>{t.keyboard.enabled&&h()})),Object.assign(t.keyboard,{enable:u,disable:h})}function Ge(e){let{swiper:t,extendParams:n,on:i,emit:s}=e;const o=r();let c;n({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let u,h=l();const d=[];function p(e){const t=10,n=40,i=800;let s=0,r=0,o=0,a=0;return"detail"in e&&(r=e.detail),"wheelDelta"in e&&(r=-e.wheelDelta/120),"wheelDeltaY"in e&&(r=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(s=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(s=r,r=0),o=s*t,a=r*t,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(o=e.deltaX),e.shiftKey&&!o&&(o=a,a=0),(o||a)&&e.deltaMode&&(1===e.deltaMode?(o*=n,a*=n):(o*=i,a*=i)),o&&!s&&(s=o<1?-1:1),a&&!r&&(r=a<1?-1:1),{spinX:s,spinY:r,pixelX:o,pixelY:a}}function f(){t.enabled&&(t.mouseEntered=!0)}function m(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta||t.params.mousewheel.thresholdTime&&l()-h<t.params.mousewheel.thresholdTime||!(e.delta>=6&&l()-h<60)&&(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),s("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),s("scroll",e.raw)),h=(new o.Date).getTime(),1))}function v(e){const n=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&n.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&n.releaseOnEdges)return!0;return!1}function y(e){let n=e,i=!0;if(!t.enabled)return;if(e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))return;const r=t.params.mousewheel;t.params.cssMode&&n.preventDefault();let o=t.el;"container"!==t.params.mousewheel.eventsTarget&&(o=document.querySelector(t.params.mousewheel.eventsTarget));const h=o&&o.contains(n.target);if(!t.mouseEntered&&!h&&!r.releaseOnEdges)return!0;n.originalEvent&&(n=n.originalEvent);let f=0;const m=t.rtlTranslate?-1:1,y=p(n);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(y.pixelX)>Math.abs(y.pixelY)))return!0;f=-y.pixelX*m}else{if(!(Math.abs(y.pixelY)>Math.abs(y.pixelX)))return!0;f=-y.pixelY}else f=Math.abs(y.pixelX)>Math.abs(y.pixelY)?-y.pixelX*m:-y.pixelY;if(0===f)return!0;r.invert&&(f=-f);let w=t.getTranslate()+f*r.sensitivity;if(w>=t.minTranslate()&&(w=t.minTranslate()),w<=t.maxTranslate()&&(w=t.maxTranslate()),i=!!t.params.loop||!(w===t.minTranslate()||w===t.maxTranslate()),i&&t.params.nested&&n.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:l(),delta:Math.abs(f),direction:Math.sign(f)},i=u&&e.time<u.time+500&&e.delta<=u.delta&&e.direction===u.direction;if(!i){u=void 0;let o=t.getTranslate()+f*r.sensitivity;const l=t.isBeginning,h=t.isEnd;if(o>=t.minTranslate()&&(o=t.minTranslate()),o<=t.maxTranslate()&&(o=t.maxTranslate()),t.setTransition(0),t.setTranslate(o),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!l&&t.isBeginning||!h&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:e.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(c),c=void 0,d.length>=15&&d.shift();const n=d.length?d[d.length-1]:void 0,i=d[0];if(d.push(e),n&&(e.delta>n.delta||e.direction!==n.direction))d.splice(0);else if(d.length>=15&&e.time-i.time<500&&i.delta-e.delta>=1&&e.delta<=6){const n=f>0?.8:.2;u=e,d.splice(0),c=a((()=>{t.slideToClosest(t.params.speed,!0,void 0,n)}),0)}c||(c=a((()=>{const n=.5;u=e,d.splice(0),t.slideToClosest(t.params.speed,!0,void 0,n)}),500))}if(i||s("scroll",n),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),o===t.minTranslate()||o===t.maxTranslate())return!0}}else{const t={time:l(),delta:Math.abs(f),direction:Math.sign(f),raw:e};d.length>=2&&d.shift();const n=d.length?d[d.length-1]:void 0;if(d.push(t),n?(t.direction!==n.direction||t.delta>n.delta||t.time>n.time+150)&&g(t):g(t),v(t))return!0}return n.preventDefault?n.preventDefault():n.returnValue=!1,!1}function w(e){let n=t.el;"container"!==t.params.mousewheel.eventsTarget&&(n=document.querySelector(t.params.mousewheel.eventsTarget)),n[e]("mouseenter",f),n[e]("mouseleave",m),n[e]("wheel",y)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",y),!0):!t.mousewheel.enabled&&(w("addEventListener"),t.mousewheel.enabled=!0,!0)}function E(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,y),!0):!!t.mousewheel.enabled&&(w("removeEventListener"),t.mousewheel.enabled=!1,!0)}i("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&E(),t.params.mousewheel.enabled&&b()})),i("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&E()})),Object.assign(t.mousewheel,{enable:b,disable:E})}function We(e,t,n,i){return e.params.createElements&&Object.keys(i).forEach((s=>{if(!n[s]&&!0===n.auto){let r=v(e.el,`.${i[s]}`)[0];r||(r=y("div",i[s]),r.className=i[s],e.el.append(r)),n[s]=r,t[s]=r}})),n}function Ke(e){let{swiper:t,extendParams:n,on:i,emit:s}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const r=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function o(e){let n;return e&&"string"==typeof e&&t.isElement&&(n=t.el.shadowRoot.querySelector(e),n)?n:(e&&("string"==typeof e&&(n=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&n.length>1&&1===t.el.querySelectorAll(e).length&&(n=t.el.querySelector(e))),e&&!n?e:n)}function a(e,n){const i=t.params.navigation;(e=r(e)).forEach((e=>{e&&(e.classList[n?"add":"remove"](...i.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=n),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](i.lockClass))}))}function l(){const{nextEl:e,prevEl:n}=t.navigation;if(t.params.loop)return a(n,!1),void a(e,!1);a(n,t.isBeginning&&!t.params.rewind),a(e,t.isEnd&&!t.params.rewind)}function c(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),s("navigationPrev"))}function u(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),s("navigationNext"))}function h(){const e=t.params.navigation;if(t.params.navigation=We(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let n=o(e.nextEl),i=o(e.prevEl);Object.assign(t.navigation,{nextEl:n,prevEl:i}),n=r(n),i=r(i);const s=(n,i)=>{n&&n.addEventListener("click","next"===i?u:c),!t.enabled&&n&&n.classList.add(...e.lockClass.split(" "))};n.forEach((e=>s(e,"next"))),i.forEach((e=>s(e,"prev")))}function d(){let{nextEl:e,prevEl:n}=t.navigation;e=r(e),n=r(n);const i=(e,n)=>{e.removeEventListener("click","next"===n?u:c),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach((e=>i(e,"next"))),n.forEach((e=>i(e,"prev")))}i("init",(()=>{!1===t.params.navigation.enabled?f():(h(),l())})),i("toEdge fromEdge lock unlock",(()=>{l()})),i("destroy",(()=>{d()})),i("enable disable",(()=>{let{nextEl:e,prevEl:n}=t.navigation;e=r(e),n=r(n),[...e,...n].filter((e=>!!e)).forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.navigation.lockClass)))})),i("click",((e,n)=>{let{nextEl:i,prevEl:o}=t.navigation;i=r(i),o=r(o);const a=n.target;if(t.params.navigation.hideOnClick&&!o.includes(a)&&!i.includes(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===a||t.pagination.el.contains(a)))return;let e;i.length?e=i[0].classList.contains(t.params.navigation.hiddenClass):o.length&&(e=o[0].classList.contains(t.params.navigation.hiddenClass)),s(!0===e?"navigationShow":"navigationHide"),[...i,...o].filter((e=>!!e)).forEach((e=>e.classList.toggle(t.params.navigation.hiddenClass)))}}));const p=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),h(),l()},f=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(t.navigation,{enable:p,disable:f,update:l,init:h,destroy:d})}function Xe(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Ye(e){let{swiper:t,extendParams:n,on:i,emit:s}=e;const r="swiper-pagination";let o;n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,bullets:[]};let a=0;const l=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function c(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function u(e,n){const{bulletActiveClass:i}=t.params.pagination;e&&(e=e[("prev"===n?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${i}-${n}`),(e=e[("prev"===n?"previous":"next")+"ElementSibling"])&&e.classList.add(`${i}-${n}-${n}`))}function h(e){const n=e.target.closest(Xe(t.params.pagination.bulletClass));if(!n)return;e.preventDefault();const i=S(n)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===i)return;const e=t.getSlideIndexByData(i),n=t.getSlideIndexByData(t.realIndex);e>t.slides.length-t.loopedSlides&&t.loopFix({direction:e>n?"next":"prev",activeSlideIndex:e,slideTo:!1}),t.slideToLoop(i)}else t.slideTo(i)}function d(){const e=t.rtl,n=t.params.pagination;if(c())return;let i,r,h=t.pagination.el;h=l(h);const d=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,p=t.params.loop?Math.ceil(d/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(r=t.previousRealIndex||0,i=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):void 0!==t.snapIndex?(i=t.snapIndex,r=t.previousSnapIndex):(r=t.previousIndex||0,i=t.activeIndex||0),"bullets"===n.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const s=t.pagination.bullets;let l,c,d;if(n.dynamicBullets&&(o=C(s[0],t.isHorizontal()?"width":"height",!0),h.forEach((e=>{e.style[t.isHorizontal()?"width":"height"]=o*(n.dynamicMainBullets+4)+"px"})),n.dynamicMainBullets>1&&void 0!==r&&(a+=i-(r||0),a>n.dynamicMainBullets-1?a=n.dynamicMainBullets-1:a<0&&(a=0)),l=Math.max(i-a,0),c=l+(Math.min(s.length,n.dynamicMainBullets)-1),d=(c+l)/2),s.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${n.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),h.length>1)s.forEach((e=>{const t=S(e);t===i&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets&&(t>=l&&t<=c&&e.classList.add(...`${n.bulletActiveClass}-main`.split(" ")),t===l&&u(e,"prev"),t===c&&u(e,"next"))}));else{const e=s[i];if(e&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets){const e=s[l],t=s[c];for(let e=l;e<=c;e+=1)s[e]&&s[e].classList.add(...`${n.bulletActiveClass}-main`.split(" "));u(e,"prev"),u(t,"next")}}if(n.dynamicBullets){const i=Math.min(s.length,n.dynamicMainBullets+4),r=(o*i-o)/2-d*o,a=e?"right":"left";s.forEach((e=>{e.style[t.isHorizontal()?a:"top"]=`${r}px`}))}}h.forEach(((e,r)=>{if("fraction"===n.type&&(e.querySelectorAll(Xe(n.currentClass)).forEach((e=>{e.textContent=n.formatFractionCurrent(i+1)})),e.querySelectorAll(Xe(n.totalClass)).forEach((e=>{e.textContent=n.formatFractionTotal(p)}))),"progressbar"===n.type){let s;s=n.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const r=(i+1)/p;let o=1,a=1;"horizontal"===s?o=r:a=r,e.querySelectorAll(Xe(n.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${a})`,e.style.transitionDuration=`${t.params.speed}ms`}))}"custom"===n.type&&n.renderCustom?(e.innerHTML=n.renderCustom(t,i+1,p),0===r&&s("paginationRender",e)):(0===r&&s("paginationRender",e),s("paginationUpdate",e)),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](n.lockClass)}))}function p(){const e=t.params.pagination;if(c())return;const n=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let i=t.pagination.el;i=l(i);let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil(n/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&i>n&&(i=n);for(let n=0;n<i;n+=1)e.renderBullet?r+=e.renderBullet.call(t,n,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],i.forEach((n=>{"custom"!==e.type&&(n.innerHTML=r||""),"bullets"===e.type&&t.pagination.bullets.push(...n.querySelectorAll(Xe(e.bulletClass)))})),"custom"!==e.type&&s("paginationRender",i[0])}function f(){t.params.pagination=We(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let n;"string"==typeof e.el&&t.isElement&&(n=t.el.shadowRoot.querySelector(e.el)),n||"string"!=typeof e.el||(n=[...document.querySelectorAll(e.el)]),n||(n=e.el),n&&0!==n.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(n)&&n.length>1&&(n=[...t.el.querySelectorAll(e.el)],n.length>1&&(n=n.filter((e=>x(e,".swiper")[0]===t.el))[0])),Array.isArray(n)&&1===n.length&&(n=n[0]),Object.assign(t.pagination,{el:n}),n=l(n),n.forEach((n=>{"bullets"===e.type&&e.clickable&&n.classList.add(e.clickableClass),n.classList.add(e.modifierClass+e.type),n.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(n.classList.add(`${e.modifierClass}${e.type}-dynamic`),a=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&n.classList.add(e.progressbarOppositeClass),e.clickable&&n.addEventListener("click",h),t.enabled||n.classList.add(e.lockClass)})))}function m(){const e=t.params.pagination;if(c())return;let n=t.pagination.el;n&&(n=l(n),n.forEach((n=>{n.classList.remove(e.hiddenClass),n.classList.remove(e.modifierClass+e.type),n.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&n.removeEventListener("click",h)}))),t.pagination.bullets&&t.pagination.bullets.forEach((t=>t.classList.remove(...e.bulletActiveClass.split(" "))))}i("changeDirection",(()=>{if(!t.pagination||!t.pagination.el)return;const e=t.params.pagination;let{el:n}=t.pagination;n=l(n),n.forEach((n=>{n.classList.remove(e.horizontalClass,e.verticalClass),n.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),i("init",(()=>{!1===t.params.pagination.enabled?v():(f(),p(),d())})),i("activeIndexChange",(()=>{void 0===t.snapIndex&&d()})),i("snapIndexChange",(()=>{d()})),i("snapGridLengthChange",(()=>{p(),d()})),i("destroy",(()=>{m()})),i("enable disable",(()=>{let{el:e}=t.pagination;e&&(e=l(e),e.forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))))})),i("lock unlock",(()=>{d()})),i("click",((e,n)=>{const i=n.target;let{el:r}=t.pagination;if(Array.isArray(r)||(r=[r].filter((e=>!!e))),t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!i.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&i===t.navigation.nextEl||t.navigation.prevEl&&i===t.navigation.prevEl))return;const e=r[0].classList.contains(t.params.pagination.hiddenClass);s(!0===e?"paginationShow":"paginationHide"),r.forEach((e=>e.classList.toggle(t.params.pagination.hiddenClass)))}}));const g=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=l(e),e.forEach((e=>e.classList.remove(t.params.pagination.paginationDisabledClass)))),f(),p(),d()},v=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=l(e),e.forEach((e=>e.classList.add(t.params.pagination.paginationDisabledClass)))),m()};Object.assign(t.pagination,{enable:g,disable:v,render:p,update:d,init:f,destroy:m})}function Qe(e){let{swiper:t,extendParams:n,on:s,emit:r}=e;const o=i();let l,c,u,h,d=!1,p=null,f=null;function m(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:n}=t,{dragEl:i,el:s}=e,r=t.params.scrollbar,o=t.params.loop?t.progressLoop:t.progress;let a=c,l=(u-c)*o;n?(l=-l,l>0?(a=c-l,l=0):-l+c>u&&(a=u+l)):l<0?(a=c+l,l=0):l+c>u&&(a=u-l),t.isHorizontal()?(i.style.transform=`translate3d(${l}px, 0, 0)`,i.style.width=`${a}px`):(i.style.transform=`translate3d(0px, ${l}px, 0)`,i.style.height=`${a}px`),r.hide&&(clearTimeout(p),s.style.opacity=1,p=setTimeout((()=>{s.style.opacity=0,s.style.transitionDuration="400ms"}),1e3))}function g(e){t.params.scrollbar.el&&t.scrollbar.el&&(t.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{dragEl:n,el:i}=e;n.style.width="",n.style.height="",u=t.isHorizontal()?i.offsetWidth:i.offsetHeight,h=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),c="auto"===t.params.scrollbar.dragSize?u*h:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?n.style.width=`${c}px`:n.style.height=`${c}px`,i.style.display=h>=1?"none":"",t.params.scrollbar.hide&&(i.style.opacity=0),t.params.watchOverflow&&t.enabled&&e.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function b(e){return t.isHorizontal()?e.clientX:e.clientY}function E(e){const{scrollbar:n,rtlTranslate:i}=t,{el:s}=n;let r;r=(b(e)-w(s)[t.isHorizontal()?"left":"top"]-(null!==l?l:c/2))/(u-c),r=Math.max(Math.min(r,1),0),i&&(r=1-r);const o=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(o),t.setTranslate(o),t.updateActiveIndex(),t.updateSlidesClasses()}function T(e){const n=t.params.scrollbar,{scrollbar:i,wrapperEl:s}=t,{el:o,dragEl:a}=i;d=!0,l=e.target===a?b(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.style.transitionDuration="100ms",a.style.transitionDuration="100ms",E(e),clearTimeout(f),o.style.transitionDuration="0ms",n.hide&&(o.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",e)}function S(e){const{scrollbar:n,wrapperEl:i}=t,{el:s,dragEl:o}=n;d&&(e.preventDefault?e.preventDefault():e.returnValue=!1,E(e),i.style.transitionDuration="0ms",s.style.transitionDuration="0ms",o.style.transitionDuration="0ms",r("scrollbarDragMove",e))}function x(e){const n=t.params.scrollbar,{scrollbar:i,wrapperEl:s}=t,{el:o}=i;d&&(d=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",s.style.transitionDuration=""),n.hide&&(clearTimeout(f),f=a((()=>{o.style.opacity=0,o.style.transitionDuration="400ms"}),1e3)),r("scrollbarDragEnd",e),n.snapOnRelease&&t.slideToClosest())}function I(e){const{scrollbar:n,params:i}=t,s=n.el;if(!s)return;const r=s,a=!!i.passiveListeners&&{passive:!1,capture:!1},l=!!i.passiveListeners&&{passive:!0,capture:!1};if(!r)return;const c="on"===e?"addEventListener":"removeEventListener";r[c]("pointerdown",T,a),o[c]("pointermove",S,a),o[c]("pointerup",x,l)}function C(){t.params.scrollbar.el&&t.scrollbar.el&&I("on")}function _(){t.params.scrollbar.el&&t.scrollbar.el&&I("off")}function k(){const{scrollbar:e,el:n}=t;t.params.scrollbar=We(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const i=t.params.scrollbar;if(!i.el)return;let s,r;"string"==typeof i.el&&t.isElement&&(s=t.el.shadowRoot.querySelector(i.el)),s||"string"!=typeof i.el?s||(s=i.el):s=o.querySelectorAll(i.el),t.params.uniqueNavElements&&"string"==typeof i.el&&s.length>1&&1===n.querySelectorAll(i.el).length&&(s=n.querySelector(i.el)),s.length>0&&(s=s[0]),s.classList.add(t.isHorizontal()?i.horizontalClass:i.verticalClass),s&&(r=s.querySelector(`.${t.params.scrollbar.dragClass}`),r||(r=y("div",t.params.scrollbar.dragClass),s.append(r))),Object.assign(e,{el:s,dragEl:r}),i.draggable&&C(),s&&s.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)}function A(){const e=t.params.scrollbar,n=t.scrollbar.el;n&&n.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),_()}n({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null},s("init",(()=>{!1===t.params.scrollbar.enabled?N():(k(),v(),m())})),s("update resize observerUpdate lock unlock",(()=>{v()})),s("setTranslate",(()=>{m()})),s("setTransition",((e,t)=>{g(t)})),s("enable disable",(()=>{const{el:e}=t.scrollbar;e&&e.classList[t.enabled?"remove":"add"](t.params.scrollbar.lockClass)})),s("destroy",(()=>{A()}));const M=()=>{t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),k(),v(),m()},N=()=>{t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.el&&t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),A()};Object.assign(t.scrollbar,{enable:M,disable:N,updateSize:v,setTranslate:m,init:k,destroy:A})}function Je(e){let{swiper:t,extendParams:n,on:i}=e;n({parallax:{enabled:!1}});const s=(e,n)=>{const{rtl:i}=t,s=i?-1:1,r=e.getAttribute("data-swiper-parallax")||"0";let o=e.getAttribute("data-swiper-parallax-x"),a=e.getAttribute("data-swiper-parallax-y");const l=e.getAttribute("data-swiper-parallax-scale"),c=e.getAttribute("data-swiper-parallax-opacity"),u=e.getAttribute("data-swiper-parallax-rotate");if(o||a?(o=o||"0",a=a||"0"):t.isHorizontal()?(o=r,a="0"):(a=r,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*n*s+"%":o*n*s+"px",a=a.indexOf("%")>=0?parseInt(a,10)*n+"%":a*n+"px",null!=c){const t=c-(c-1)*(1-Math.abs(n));e.style.opacity=t}let h=`translate3d(${o}, ${a}, 0px)`;null!=l&&(h+=` scale(${l-(l-1)*(1-Math.abs(n))})`),u&&null!=u&&(h+=` rotate(${u*n*-1}deg)`),e.style.transform=h},r=()=>{const{el:e,slides:n,progress:i,snapGrid:r}=t;v(e,"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((e=>{s(e,i)})),n.forEach(((e,n)=>{let o=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(o+=Math.ceil(n/2)-i*(r.length-1)),o=Math.min(Math.max(o,-1),1),e.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach((e=>{s(e,o)}))}))},o=function(e){void 0===e&&(e=t.params.speed);const{el:n}=t;n.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((t=>{let n=parseInt(t.getAttribute("data-swiper-parallax-duration"),10)||e;0===e&&(n=0),t.style.transitionDuration=`${n}ms`}))};i("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),i("init",(()=>{t.params.parallax.enabled&&r()})),i("setTranslate",(()=>{t.params.parallax.enabled&&r()})),i("setTransition",((e,n)=>{t.params.parallax.enabled&&o(n)}))}function Ze(e){let{swiper:t,extendParams:n,on:i,emit:s}=e;const o=r();n({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let a,l,c=1,h=!1;const d=[],p={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},m={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let g=1;function y(){if(d.length<2)return 1;const e=d[0].pageX,t=d[0].pageY,n=d[1].pageX,i=d[1].pageY;return Math.sqrt((n-e)**2+(i-t)**2)}function b(){if(d.length<2)return{x:null,y:null};const e=p.imageEl.getBoundingClientRect();return[(d[0].pageX+(d[1].pageX-d[0].pageX)/2-e.x)/c,(d[0].pageY+(d[1].pageY-d[0].pageY)/2-e.y)/c]}function E(){return t.isElement?"swiper-slide":`.${t.params.slideClass}`}function T(e){const n=E();return!!e.target.matches(n)||t.slides.filter((t=>t.contains(e.target))).length>0}function S(e){const n=`.${t.params.zoom.containerClass}`;return!!e.target.matches(n)||[...t.el.querySelectorAll(n)].filter((t=>t.contains(e.target))).length>0}function I(e){if("mouse"===e.pointerType&&d.splice(0,d.length),!T(e))return;const n=t.params.zoom;if(a=!1,l=!1,d.push(e),!(d.length<2)){if(a=!0,p.scaleStart=y(),!p.slideEl){p.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`),p.slideEl||(p.slideEl=t.slides[t.activeIndex]);let i=p.slideEl.querySelector(`.${n.containerClass}`);if(i&&(i=i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),p.imageEl=i,p.imageWrapEl=i?x(p.imageEl,`.${n.containerClass}`)[0]:void 0,!p.imageWrapEl)return void(p.imageEl=void 0);p.maxRatio=p.imageWrapEl.getAttribute("data-swiper-zoom")||n.maxRatio}if(p.imageEl){const[e,t]=b();p.originX=e,p.originY=t,p.imageEl.style.transitionDuration="0ms"}h=!0}}function C(e){if(!T(e))return;const n=t.params.zoom,i=t.zoom,s=d.findIndex((t=>t.pointerId===e.pointerId));s>=0&&(d[s]=e),d.length<2||(l=!0,p.scaleMove=y(),p.imageEl&&(i.scale=p.scaleMove/p.scaleStart*c,i.scale>p.maxRatio&&(i.scale=p.maxRatio-1+(i.scale-p.maxRatio+1)**.5),i.scale<n.minRatio&&(i.scale=n.minRatio+1-(n.minRatio-i.scale+1)**.5),p.imageEl.style.transform=`translate3d(0,0,0) scale(${i.scale})`))}function _(e){if(!T(e))return;if("mouse"===e.pointerType&&"pointerout"===e.type)return;const n=t.params.zoom,i=t.zoom,s=d.findIndex((t=>t.pointerId===e.pointerId));s>=0&&d.splice(s,1),a&&l&&(a=!1,l=!1,p.imageEl&&(i.scale=Math.max(Math.min(i.scale,p.maxRatio),n.minRatio),p.imageEl.style.transitionDuration=`${t.params.speed}ms`,p.imageEl.style.transform=`translate3d(0,0,0) scale(${i.scale})`,c=i.scale,h=!1,i.scale>1&&p.slideEl?p.slideEl.classList.add(`${n.zoomedSlideClass}`):i.scale<=1&&p.slideEl&&p.slideEl.classList.remove(`${n.zoomedSlideClass}`),1===i.scale&&(p.originX=0,p.originY=0,p.slideEl=void 0)))}function k(e){const n=t.device;if(!p.imageEl)return;if(f.isTouched)return;n.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0;const i=d.length>0?d[0]:e;f.touchesStart.x=i.pageX,f.touchesStart.y=i.pageY}function A(e){if(!T(e)||!S(e))return;const n=t.zoom;if(!p.imageEl)return;if(!f.isTouched||!p.slideEl)return;f.isMoved||(f.width=p.imageEl.offsetWidth,f.height=p.imageEl.offsetHeight,f.startX=u(p.imageWrapEl,"x")||0,f.startY=u(p.imageWrapEl,"y")||0,p.slideWidth=p.slideEl.offsetWidth,p.slideHeight=p.slideEl.offsetHeight,p.imageWrapEl.style.transitionDuration="0ms");const i=f.width*n.scale,s=f.height*n.scale;if(i<p.slideWidth&&s<p.slideHeight)return;if(f.minX=Math.min(p.slideWidth/2-i/2,0),f.maxX=-f.minX,f.minY=Math.min(p.slideHeight/2-s/2,0),f.maxY=-f.minY,f.touchesCurrent.x=d.length>0?d[0].pageX:e.pageX,f.touchesCurrent.y=d.length>0?d[0].pageY:e.pageY,Math.max(Math.abs(f.touchesCurrent.x-f.touchesStart.x),Math.abs(f.touchesCurrent.y-f.touchesStart.y))>5&&(t.allowClick=!1),!f.isMoved&&!h){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0;const r=(n.scale-c)/(p.maxRatio-t.params.zoom.minRatio),{originX:o,originY:a}=p;f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX+r*(f.width-2*o),f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY+r*(f.height-2*a),f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),m.prevPositionX||(m.prevPositionX=f.touchesCurrent.x),m.prevPositionY||(m.prevPositionY=f.touchesCurrent.y),m.prevTime||(m.prevTime=Date.now()),m.x=(f.touchesCurrent.x-m.prevPositionX)/(Date.now()-m.prevTime)/2,m.y=(f.touchesCurrent.y-m.prevPositionY)/(Date.now()-m.prevTime)/2,Math.abs(f.touchesCurrent.x-m.prevPositionX)<2&&(m.x=0),Math.abs(f.touchesCurrent.y-m.prevPositionY)<2&&(m.y=0),m.prevPositionX=f.touchesCurrent.x,m.prevPositionY=f.touchesCurrent.y,m.prevTime=Date.now(),p.imageWrapEl.style.transform=`translate3d(${f.currentX}px, ${f.currentY}px,0)`}function M(){const e=t.zoom;if(!p.imageEl)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let n=300,i=300;const s=m.x*n,r=f.currentX+s,o=m.y*i,a=f.currentY+o;0!==m.x&&(n=Math.abs((r-f.currentX)/m.x)),0!==m.y&&(i=Math.abs((a-f.currentY)/m.y));const l=Math.max(n,i);f.currentX=r,f.currentY=a;const c=f.width*e.scale,u=f.height*e.scale;f.minX=Math.min(p.slideWidth/2-c/2,0),f.maxX=-f.minX,f.minY=Math.min(p.slideHeight/2-u/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),p.imageWrapEl.style.transitionDuration=`${l}ms`,p.imageWrapEl.style.transform=`translate3d(${f.currentX}px, ${f.currentY}px,0)`}function N(){const e=t.zoom;p.slideEl&&t.activeIndex!==t.slides.indexOf(p.slideEl)&&(p.imageEl&&(p.imageEl.style.transform="translate3d(0,0,0) scale(1)"),p.imageWrapEl&&(p.imageWrapEl.style.transform="translate3d(0,0,0)"),p.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),e.scale=1,c=1,p.slideEl=void 0,p.imageEl=void 0,p.imageWrapEl=void 0,p.originX=0,p.originY=0)}function D(e){const n=t.zoom,i=t.params.zoom;if(!p.slideEl){e&&e.target&&(p.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`)),p.slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?p.slideEl=v(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:p.slideEl=t.slides[t.activeIndex]);let n=p.slideEl.querySelector(`.${i.containerClass}`);n&&(n=n.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),p.imageEl=n,p.imageWrapEl=n?x(p.imageEl,`.${i.containerClass}`)[0]:void 0}if(!p.imageEl||!p.imageWrapEl)return;let s,r,a,l,u,h,d,m,g,y,b,E,T,S,I,C,_,k;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),p.slideEl.classList.add(`${i.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(s=e.pageX,r=e.pageY):(s=f.touchesStart.x,r=f.touchesStart.y);const A="number"==typeof e?e:null;1===c&&A&&(s=void 0,r=void 0),n.scale=A||p.imageWrapEl.getAttribute("data-swiper-zoom")||i.maxRatio,c=A||p.imageWrapEl.getAttribute("data-swiper-zoom")||i.maxRatio,!e||1===c&&A?(d=0,m=0):(_=p.slideEl.offsetWidth,k=p.slideEl.offsetHeight,a=w(p.slideEl).left+o.scrollX,l=w(p.slideEl).top+o.scrollY,u=a+_/2-s,h=l+k/2-r,g=p.imageEl.offsetWidth,y=p.imageEl.offsetHeight,b=g*n.scale,E=y*n.scale,T=Math.min(_/2-b/2,0),S=Math.min(k/2-E/2,0),I=-T,C=-S,d=u*n.scale,m=h*n.scale,d<T&&(d=T),d>I&&(d=I),m<S&&(m=S),m>C&&(m=C)),A&&1===n.scale&&(p.originX=0,p.originY=0),p.imageWrapEl.style.transitionDuration="300ms",p.imageWrapEl.style.transform=`translate3d(${d}px, ${m}px,0)`,p.imageEl.style.transitionDuration="300ms",p.imageEl.style.transform=`translate3d(0,0,0) scale(${n.scale})`}function L(){const e=t.zoom,n=t.params.zoom;if(!p.slideEl){t.params.virtual&&t.params.virtual.enabled&&t.virtual?p.slideEl=v(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:p.slideEl=t.slides[t.activeIndex];let e=p.slideEl.querySelector(`.${n.containerClass}`);e&&(e=e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),p.imageEl=e,p.imageWrapEl=e?x(p.imageEl,`.${n.containerClass}`)[0]:void 0}p.imageEl&&p.imageWrapEl&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,c=1,p.imageWrapEl.style.transitionDuration="300ms",p.imageWrapEl.style.transform="translate3d(0,0,0)",p.imageEl.style.transitionDuration="300ms",p.imageEl.style.transform="translate3d(0,0,0) scale(1)",p.slideEl.classList.remove(`${n.zoomedSlideClass}`),p.slideEl=void 0,p.originX=0,p.originY=0)}function P(e){const n=t.zoom;n.scale&&1!==n.scale?L():D(e)}function O(){return{passiveListener:!!t.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!t.params.passiveListeners||{passive:!1,capture:!0}}}function R(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const{passiveListener:n,activeListenerWithCapture:i}=O();t.wrapperEl.addEventListener("pointerdown",I,n),t.wrapperEl.addEventListener("pointermove",C,i),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.addEventListener(e,_,n)})),t.wrapperEl.addEventListener("pointermove",A,i)}function F(){const e=t.zoom;if(!e.enabled)return;e.enabled=!1;const{passiveListener:n,activeListenerWithCapture:i}=O();t.wrapperEl.removeEventListener("pointerdown",I,n),t.wrapperEl.removeEventListener("pointermove",C,i),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.removeEventListener(e,_,n)})),t.wrapperEl.removeEventListener("pointermove",A,i)}Object.defineProperty(t.zoom,"scale",{get:()=>g,set(e){if(g!==e){const t=p.imageEl,n=p.slideEl;s("zoomChange",e,t,n)}g=e}}),i("init",(()=>{t.params.zoom.enabled&&R()})),i("destroy",(()=>{F()})),i("touchStart",((e,n)=>{t.zoom.enabled&&k(n)})),i("touchEnd",((e,n)=>{t.zoom.enabled&&M()})),i("doubleTap",((e,n)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&P(n)})),i("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&N()})),i("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&N()})),Object.assign(t.zoom,{enable:R,disable:F,in:D,out:L,toggle:P})}function et(e){let{swiper:t,extendParams:n,on:i}=e;function s(e,t){const n=function(){let e,t,n;return(i,s)=>{for(t=-1,e=i.length;e-t>1;)n=e+t>>1,i[n]<=s?t=n:e=n;return e}}();let i,s;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(s=n(this.x,e),i=s-1,(e-this.x[i])*(this.y[s]-this.y[i])/(this.x[s]-this.x[i])+this.y[i]):0},this}function r(e){t.controller.spline=t.params.loop?new s(t.slidesGrid,e.slidesGrid):new s(t.snapGrid,e.snapGrid)}function o(e,n){const i=t.controller.control;let s,o;const a=t.constructor;function l(e){if(e.destroyed)return;const n=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(r(e),o=-t.controller.spline.interpolate(-n)),o&&"container"!==t.params.controller.by||(s=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),!Number.isNaN(s)&&Number.isFinite(s)||(s=1),o=(n-t.minTranslate())*s+e.minTranslate()),t.params.controller.inverse&&(o=e.maxTranslate()-o),e.updateProgress(o),e.setTranslate(o,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(i))for(let e=0;e<i.length;e+=1)i[e]!==n&&i[e]instanceof a&&l(i[e]);else i instanceof a&&n!==i&&l(i)}function l(e,n){const i=t.constructor,s=t.controller.control;let r;function o(n){n.destroyed||(n.setTransition(e,t),0!==e&&(n.transitionStart(),n.params.autoHeight&&a((()=>{n.updateAutoHeight()})),I(n.wrapperEl,(()=>{s&&n.transitionEnd()}))))}if(Array.isArray(s))for(r=0;r<s.length;r+=1)s[r]!==n&&s[r]instanceof i&&o(s[r]);else s instanceof i&&n!==s&&o(s)}function c(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}n({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},i("beforeInit",(()=>{if("undefined"!=typeof window&&("string"==typeof t.params.controller.control||t.params.controller.control instanceof HTMLElement)){const e=document.querySelector(t.params.controller.control);if(e&&e.swiper)t.controller.control=e.swiper;else if(e){const n=i=>{t.controller.control=i.detail[0],t.update(),e.removeEventListener("init",n)};e.addEventListener("init",n)}}else t.controller.control=t.params.controller.control})),i("update",(()=>{c()})),i("resize",(()=>{c()})),i("observerUpdate",(()=>{c()})),i("setTranslate",((e,n,i)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTranslate(n,i)})),i("setTransition",((e,n,i)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTransition(n,i)})),Object.assign(t.controller,{setTranslate:o,setTransition:l})}function tt(e){let{swiper:t,extendParams:n,on:i}=e;n({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let s=null;function r(e){const t=s;0!==t.length&&(t.innerHTML="",t.innerHTML=e)}const o=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function a(e){void 0===e&&(e=16);const t=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(e).replace(/x/g,t)}function l(e){(e=o(e)).forEach((e=>{e.setAttribute("tabIndex","0")}))}function c(e){(e=o(e)).forEach((e=>{e.setAttribute("tabIndex","-1")}))}function u(e,t){(e=o(e)).forEach((e=>{e.setAttribute("role",t)}))}function h(e,t){(e=o(e)).forEach((e=>{e.setAttribute("aria-roledescription",t)}))}function d(e,t){(e=o(e)).forEach((e=>{e.setAttribute("aria-controls",t)}))}function p(e,t){(e=o(e)).forEach((e=>{e.setAttribute("aria-label",t)}))}function f(e,t){(e=o(e)).forEach((e=>{e.setAttribute("id",t)}))}function m(e,t){(e=o(e)).forEach((e=>{e.setAttribute("aria-live",t)}))}function g(e){(e=o(e)).forEach((e=>{e.setAttribute("aria-disabled",!0)}))}function v(e){(e=o(e)).forEach((e=>{e.setAttribute("aria-disabled",!1)}))}function w(e){if(13!==e.keyCode&&32!==e.keyCode)return;const n=t.params.a11y,i=e.target;t.pagination&&t.pagination.el&&(i===t.pagination.el||t.pagination.el.contains(e.target))&&!e.target.matches(Xe(t.params.pagination.bulletClass))||(t.navigation&&t.navigation.nextEl&&i===t.navigation.nextEl&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(n.lastSlideMessage):r(n.nextSlideMessage)),t.navigation&&t.navigation.prevEl&&i===t.navigation.prevEl&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(n.firstSlideMessage):r(n.prevSlideMessage)),t.pagination&&i.matches(Xe(t.params.pagination.bulletClass))&&i.click())}function b(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:e,prevEl:n}=t.navigation;n&&(t.isBeginning?(g(n),c(n)):(v(n),l(n))),e&&(t.isEnd?(g(e),c(e)):(v(e),l(e)))}function E(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function T(){return E()&&t.params.pagination.clickable}function x(){const e=t.params.a11y;E()&&t.pagination.bullets.forEach((n=>{t.params.pagination.clickable&&(l(n),t.params.pagination.renderBullet||(u(n,"button"),p(n,e.paginationBulletMessage.replace(/\{\{index\}\}/,S(n)+1)))),n.matches(Xe(t.params.pagination.bulletActiveClass))?n.setAttribute("aria-current","true"):n.removeAttribute("aria-current")}))}const I=(e,t,n)=>{l(e),"BUTTON"!==e.tagName&&(u(e,"button"),e.addEventListener("keydown",w)),p(e,n),d(e,t)},C=()=>{t.a11y.clicked=!0},_=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},k=e=>{if(t.a11y.clicked)return;const n=e.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!n||!t.slides.includes(n))return;const i=t.slides.indexOf(n)===t.activeIndex,s=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(n);i||s||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(n),0))},A=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&h(t.slides,e.itemRoleDescriptionMessage),e.slideRole&&u(t.slides,e.slideRole);const n=t.slides.length;e.slideLabelMessage&&t.slides.forEach(((i,s)=>{const r=t.params.loop?parseInt(i.getAttribute("data-swiper-slide-index"),10):s;p(i,e.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,n))}))},M=()=>{const e=t.params.a11y;t.isElement?t.el.shadowEl.append(s):t.el.append(s);const n=t.el;e.containerRoleDescriptionMessage&&h(n,e.containerRoleDescriptionMessage),e.containerMessage&&p(n,e.containerMessage);const i=t.wrapperEl,r=e.id||i.getAttribute("id")||`swiper-wrapper-${a(16)}`,l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";f(i,r),m(i,l),A();let{nextEl:c,prevEl:u}=t.navigation?t.navigation:{};c=o(c),u=o(u),c&&c.forEach((t=>I(t,r,e.nextSlideMessage))),u&&u.forEach((t=>I(t,r,e.prevSlideMessage))),T()&&(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach((e=>{e.addEventListener("keydown",w)})),t.el.addEventListener("focus",k,!0),t.el.addEventListener("pointerdown",C,!0),t.el.addEventListener("pointerup",_,!0)};function N(){s&&s.remove();let{nextEl:e,prevEl:n}=t.navigation?t.navigation:{};e=o(e),n=o(n),e&&e.forEach((e=>e.removeEventListener("keydown",w))),n&&n.forEach((e=>e.removeEventListener("keydown",w))),T()&&(Array.isArray(t.pagination.el)?t.pagination.el:[t.pagination.el]).forEach((e=>{e.removeEventListener("keydown",w)})),t.el.removeEventListener("focus",k,!0),t.el.removeEventListener("pointerdown",C,!0),t.el.removeEventListener("pointerup",_,!0)}i("beforeInit",(()=>{s=y("span",t.params.a11y.notificationClass),s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true")})),i("afterInit",(()=>{t.params.a11y.enabled&&M()})),i("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&A()})),i("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&b()})),i("paginationUpdate",(()=>{t.params.a11y.enabled&&x()})),i("destroy",(()=>{t.params.a11y.enabled&&N()}))}function nt(e){let{swiper:t,extendParams:n,on:i}=e;n({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let s=!1,o={};const a=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),l=e=>{const t=r();let n;n=e?new URL(e):t.location;const i=n.pathname.slice(1).split("/").filter((e=>""!==e)),s=i.length;return{key:i[s-2],value:i[s-1]}},c=(e,n)=>{const i=r();if(!s||!t.params.history.enabled)return;let o;o=t.params.url?new URL(t.params.url):i.location;const l=t.slides[n];let c=a(l.getAttribute("data-history"));if(t.params.history.root.length>0){let n=t.params.history.root;"/"===n[n.length-1]&&(n=n.slice(0,n.length-1)),c=`${n}/${e?`${e}/`:""}${c}`}else o.pathname.includes(e)||(c=`${e?`${e}/`:""}${c}`);t.params.history.keepQuery&&(c+=o.search);const u=i.history.state;u&&u.value===c||(t.params.history.replaceState?i.history.replaceState({value:c},null,c):i.history.pushState({value:c},null,c))},u=(e,n,i)=>{if(n)for(let s=0,r=t.slides.length;s<r;s+=1){const r=t.slides[s];if(a(r.getAttribute("data-history"))===n){const n=t.getSlideIndex(r);t.slideTo(n,e,i)}}else t.slideTo(0,e,i)},h=()=>{o=l(t.params.url),u(t.params.speed,o.value,!1)},d=()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);s=!0,o=l(t.params.url),o.key||o.value?(u(0,o.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",h)):t.params.history.replaceState||e.addEventListener("popstate",h)}},p=()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",h)};i("init",(()=>{t.params.history.enabled&&d()})),i("destroy",(()=>{t.params.history.enabled&&p()})),i("transitionEnd _freeModeNoMomentumRelease",(()=>{s&&c(t.params.history.key,t.activeIndex)})),i("slideChange",(()=>{s&&t.params.cssMode&&c(t.params.history.key,t.activeIndex)}))}function it(e){let{swiper:t,extendParams:n,emit:s,on:o}=e,a=!1;const l=i(),c=r();n({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(e,n){if(t.virtual&&t.params.virtual.enabled){const e=t.slides.filter((e=>e.getAttribute("data-hash")===n))[0];return e?parseInt(e.getAttribute("data-swiper-slide-index"),10):0}return t.getSlideIndex(v(t.slidesEl,`.${t.params.slideClass}[data-hash="${n}"], swiper-slide[data-hash="${n}"]`)[0])}}});const u=()=>{s("hashChange");const e=l.location.hash.replace("#",""),n=t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`);if(e!==(n?n.getAttribute("data-hash"):"")){const n=t.params.hashNavigation.getSlideIndex(t,e);if(void 0===n||Number.isNaN(n))return;t.slideTo(n)}},h=()=>{if(!a||!t.params.hashNavigation.enabled)return;const e=t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`),n=e?e.getAttribute("data-hash")||e.getAttribute("data-history"):"";t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState?(c.history.replaceState(null,null,`#${n}`||""),s("hashSet")):(l.location.hash=n||"",s("hashSet"))},d=()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;a=!0;const e=l.location.hash.replace("#","");if(e){const n=0,i=t.params.hashNavigation.getSlideIndex(t,e);t.slideTo(i||0,n,t.params.runCallbacksOnInit,!0)}t.params.hashNavigation.watchState&&c.addEventListener("hashchange",u)},p=()=>{t.params.hashNavigation.watchState&&c.removeEventListener("hashchange",u)};o("init",(()=>{t.params.hashNavigation.enabled&&d()})),o("destroy",(()=>{t.params.hashNavigation.enabled&&p()})),o("transitionEnd _freeModeNoMomentumRelease",(()=>{a&&h()})),o("slideChange",(()=>{a&&t.params.cssMode&&h()}))}function st(e){let t,n,{swiper:s,extendParams:r,on:o,emit:a,params:l}=e;s.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let c,u,h,d,p,f,m,g=l&&l.autoplay?l.autoplay.delay:3e3,v=l&&l.autoplay?l.autoplay.delay:3e3,y=(new Date).getTime;function w(e){s&&!s.destroyed&&s.wrapperEl&&e.target===s.wrapperEl&&(s.wrapperEl.removeEventListener("transitionend",w),C())}const b=()=>{if(s.destroyed||!s.autoplay.running)return;s.autoplay.paused?u=!0:u&&(v=c,u=!1);const e=s.autoplay.paused?c:y+v-(new Date).getTime();s.autoplay.timeLeft=e,a("autoplayTimeLeft",e,e/g),n=requestAnimationFrame((()=>{b()}))},E=()=>{let e;if(e=s.virtual&&s.params.virtual.enabled?s.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:s.slides[s.activeIndex],e)return parseInt(e.getAttribute("data-swiper-autoplay"),10)},T=e=>{if(s.destroyed||!s.autoplay.running)return;cancelAnimationFrame(n),b();let i=void 0===e?s.params.autoplay.delay:e;g=s.params.autoplay.delay,v=s.params.autoplay.delay;const r=E();!Number.isNaN(r)&&r>0&&void 0===e&&(i=r,g=r,v=r),c=i;const o=s.params.speed,l=()=>{s&&!s.destroyed&&(s.params.autoplay.reverseDirection?!s.isBeginning||s.params.loop||s.params.rewind?(s.slidePrev(o,!0,!0),a("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(s.slides.length-1,o,!0,!0),a("autoplay")):!s.isEnd||s.params.loop||s.params.rewind?(s.slideNext(o,!0,!0),a("autoplay")):s.params.autoplay.stopOnLastSlide||(s.slideTo(0,o,!0,!0),a("autoplay")),s.params.cssMode&&(y=(new Date).getTime(),requestAnimationFrame((()=>{T()}))))};return i>0?(clearTimeout(t),t=setTimeout((()=>{l()}),i)):requestAnimationFrame((()=>{l()})),i},S=()=>{s.autoplay.running=!0,T(),a("autoplayStart")},x=()=>{s.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(n),a("autoplayStop")},I=(e,n)=>{if(s.destroyed||!s.autoplay.running)return;clearTimeout(t),e||(m=!0);const i=()=>{a("autoplayPause"),s.params.autoplay.waitForTransition?s.wrapperEl.addEventListener("transitionend",w):C()};if(s.autoplay.paused=!0,n)return f&&(c=s.params.autoplay.delay),f=!1,void i();const r=c||s.params.autoplay.delay;c=r-((new Date).getTime()-y),s.isEnd&&c<0&&!s.params.loop||(c<0&&(c=0),i())},C=()=>{s.isEnd&&c<0&&!s.params.loop||s.destroyed||!s.autoplay.running||(y=(new Date).getTime(),m?(m=!1,T(c)):T(),s.autoplay.paused=!1,a("autoplayResume"))},_=()=>{if(s.destroyed||!s.autoplay.running)return;const e=i();"hidden"===e.visibilityState&&(m=!0,I(!0)),"visible"===e.visibilityState&&C()},k=e=>{"mouse"===e.pointerType&&(m=!0,I(!0))},A=e=>{"mouse"===e.pointerType&&s.autoplay.paused&&C()},M=()=>{s.params.autoplay.pauseOnMouseEnter&&(s.el.addEventListener("pointerenter",k),s.el.addEventListener("pointerleave",A))},N=()=>{s.el.removeEventListener("pointerenter",k),s.el.removeEventListener("pointerleave",A)},D=()=>{i().addEventListener("visibilitychange",_)},L=()=>{i().removeEventListener("visibilitychange",_)};o("init",(()=>{s.params.autoplay.enabled&&(M(),D(),y=(new Date).getTime(),S())})),o("destroy",(()=>{N(),L(),s.autoplay.running&&x()})),o("beforeTransitionStart",((e,t,n)=>{!s.destroyed&&s.autoplay.running&&(n||!s.params.autoplay.disableOnInteraction?I(!0,!0):x())})),o("sliderFirstMove",(()=>{!s.destroyed&&s.autoplay.running&&(s.params.autoplay.disableOnInteraction?x():(h=!0,d=!1,m=!1,p=setTimeout((()=>{m=!0,d=!0,I(!0)}),200)))})),o("touchEnd",(()=>{if(!s.destroyed&&s.autoplay.running&&h){if(clearTimeout(p),clearTimeout(t),s.params.autoplay.disableOnInteraction)return d=!1,void(h=!1);d&&s.params.cssMode&&C(),d=!1,h=!1}})),o("slideChange",(()=>{!s.destroyed&&s.autoplay.running&&(f=!0)})),Object.assign(s.autoplay,{start:S,stop:x,pause:I,resume:C})}function rt(e){let{swiper:t,extendParams:n,on:s}=e;n({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,o=!1;function a(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const n=e.clickedIndex,i=e.clickedSlide;if(i&&i.classList.contains(t.params.thumbs.slideThumbActiveClass))return;if(null==n)return;let s;s=e.params.loop?parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10):n,t.params.loop?t.slideToLoop(s):t.slideTo(s)}function l(){const{thumbs:e}=t.params;if(r)return!1;r=!0;const n=t.constructor;if(e.swiper instanceof n)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(h(e.swiper)){const i=Object.assign({},e.swiper);Object.assign(i,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new n(i),o=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",a),!0}function c(e){const n=t.thumbs.swiper;if(!n||n.destroyed)return;const i="auto"===n.params.slidesPerView?n.slidesPerViewDynamic():n.params.slidesPerView;let s=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(s=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(s=1),s=Math.floor(s),n.slides.forEach((e=>e.classList.remove(r))),n.params.loop||n.params.virtual&&n.params.virtual.enabled)for(let e=0;e<s;e+=1)v(n.slidesEl,`[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e=>{e.classList.add(r)}));else for(let e=0;e<s;e+=1)n.slides[t.realIndex+e]&&n.slides[t.realIndex+e].classList.add(r);const o=t.params.thumbs.autoScrollOffset,a=o&&!n.params.loop;if(t.realIndex!==n.realIndex||a){const s=n.activeIndex;let r,l;if(n.params.loop){const e=n.slides.filter((e=>e.getAttribute("data-swiper-slide-index")===`${t.realIndex}`))[0];r=n.slides.indexOf(e),l=t.activeIndex>t.previousIndex?"next":"prev"}else r=t.realIndex,l=r>t.previousIndex?"next":"prev";a&&(r+="next"===l?o:-1*o),n.visibleSlidesIndexes&&n.visibleSlidesIndexes.indexOf(r)<0&&(n.params.centeredSlides?r=r>s?r-Math.floor(i/2)+1:r+Math.floor(i/2)-1:r>s&&n.params.slidesPerGroup,n.slideTo(r,e?0:void 0))}}t.thumbs={swiper:null},s("beforeInit",(()=>{const{thumbs:e}=t.params;if(e&&e.swiper)if("string"==typeof e.swiper||e.swiper instanceof HTMLElement){const n=i(),s=()=>{const i="string"==typeof e.swiper?n.querySelector(e.swiper):e.swiper;if(i&&i.swiper)e.swiper=i.swiper,l(),c(!0);else if(i){const n=s=>{e.swiper=s.detail[0],i.removeEventListener("init",n),l(),c(!0),e.swiper.update(),t.update()};i.addEventListener("init",n)}return i},r=()=>{t.destroyed||s()||requestAnimationFrame(r)};requestAnimationFrame(r)}else l(),c(!0)})),s("slideChange update resize observerUpdate",(()=>{c()})),s("setTransition",((e,n)=>{const i=t.thumbs.swiper;i&&!i.destroyed&&i.setTransition(n)})),s("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&o&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:c})}function ot(e){let{swiper:t,extendParams:n,emit:i,once:s}=e;function r(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})}function o(){const{touchEventsData:e,touches:n}=t;0===e.velocities.length&&e.velocities.push({position:n[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:n[t.isHorizontal()?"currentX":"currentY"],time:l()})}function a(e){let{currentPos:n}=e;const{params:r,wrapperEl:o,rtlTranslate:a,snapGrid:c,touchEventsData:u}=t,h=l()-u.touchStartTime;if(n<-t.minTranslate())t.slideTo(t.activeIndex);else if(n>-t.maxTranslate())t.slides.length<c.length?t.slideTo(c.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(u.velocities.length>1){const e=u.velocities.pop(),n=u.velocities.pop(),i=e.position-n.position,s=e.time-n.time;t.velocity=i/s,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(s>150||l()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,u.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const n=t.velocity*e;let h=t.translate+n;a&&(h=-h);let d,p=!1;const f=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let m;if(h<t.maxTranslate())r.freeMode.momentumBounce?(h+t.maxTranslate()<-f&&(h=t.maxTranslate()-f),d=t.maxTranslate(),p=!0,u.allowMomentumBounce=!0):h=t.maxTranslate(),r.loop&&r.centeredSlides&&(m=!0);else if(h>t.minTranslate())r.freeMode.momentumBounce?(h-t.minTranslate()>f&&(h=t.minTranslate()+f),d=t.minTranslate(),p=!0,u.allowMomentumBounce=!0):h=t.minTranslate(),r.loop&&r.centeredSlides&&(m=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<c.length;t+=1)if(c[t]>-h){e=t;break}h=Math.abs(c[e]-h)<Math.abs(c[e-1]-h)||"next"===t.swipeDirection?c[e]:c[e-1],h=-h}if(m&&s("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=a?Math.abs((-h-t.translate)/t.velocity):Math.abs((h-t.translate)/t.velocity),r.freeMode.sticky){const n=Math.abs((a?-h:h)-t.translate),i=t.slidesSizesGrid[t.activeIndex];e=n<i?r.speed:n<2*i?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&p?(t.updateProgress(d),t.setTransition(e),t.setTranslate(h),t.transitionStart(!0,t.swipeDirection),t.animating=!0,I(o,(()=>{t&&!t.destroyed&&u.allowMomentumBounce&&(i("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(d),I(o,(()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(i("_freeModeNoMomentumRelease"),t.updateProgress(h),t.setTransition(e),t.setTranslate(h),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,I(o,(()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(h),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&i("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||h>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}n({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:r,onTouchMove:o,onTouchEnd:a}})}function at(e){let t,n,i,{swiper:s,extendParams:r}=e;r({grid:{rows:1,fill:"column"}});const o=()=>{let e=s.params.spaceBetween;return"string"==typeof e&&e.indexOf("%")>=0?e=parseFloat(e.replace("%",""))/100*s.size:"string"==typeof e&&(e=parseFloat(e)),e},a=e=>{const{slidesPerView:r}=s.params,{rows:o,fill:a}=s.params.grid;n=t/o,i=Math.floor(e/o),t=Math.floor(e/o)===e/o?e:Math.ceil(e/o)*o,"auto"!==r&&"row"===a&&(t=Math.max(t,r*o))},l=(e,r,a,l)=>{const{slidesPerGroup:c}=s.params,u=o(),{rows:h,fill:d}=s.params.grid;let p,f,m;if("row"===d&&c>1){const n=Math.floor(e/(c*h)),i=e-h*c*n,s=0===n?c:Math.min(Math.ceil((a-n*h*c)/h),c);m=Math.floor(i/s),f=i-m*s+n*c,p=f+m*t/h,r.style.order=p}else"column"===d?(f=Math.floor(e/h),m=e-f*h,(f>i||f===i&&m===h-1)&&(m+=1,m>=h&&(m=0,f+=1))):(m=Math.floor(e/n),f=e-m*n);r.style[l("margin-top")]=0!==m?u&&`${u}px`:""},c=(e,n,i)=>{const{centeredSlides:r,roundLengths:a}=s.params,l=o(),{rows:c}=s.params.grid;if(s.virtualSize=(e+l)*t,s.virtualSize=Math.ceil(s.virtualSize/c)-l,s.wrapperEl.style[i("width")]=`${s.virtualSize+l}px`,r){const e=[];for(let t=0;t<n.length;t+=1){let i=n[t];a&&(i=Math.floor(i)),n[t]<s.virtualSize+n[0]&&e.push(i)}n.splice(0,n.length),n.push(...e)}};s.grid={initSlides:a,updateSlide:l,updateWrapperSize:c}}function lt(e){const t=this,{params:n,slidesEl:i}=t;n.loop&&t.loopDestroy();const s=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,i.append(t.children[0]),t.innerHTML=""}else i.append(e)};if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s(e[t]);else s(e);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update()}function ct(e){const t=this,{params:n,activeIndex:i,slidesEl:s}=t;n.loop&&t.loopDestroy();let r=i+1;const o=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,s.prepend(t.children[0]),t.innerHTML=""}else s.prepend(e)};if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&o(e[t]);r=i+e.length}else o(e);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update(),t.slideTo(r,0,!1)}function ut(e,t){const n=this,{params:i,activeIndex:s,slidesEl:r}=n;let o=s;i.loop&&(o-=n.loopedSlides,n.loopDestroy(),n.recalcSlides());const a=n.slides.length;if(e<=0)return void n.prependSlide(t);if(e>=a)return void n.appendSlide(t);let l=o>e?o+1:o;const c=[];for(let t=a-1;t>=e;t-=1){const e=n.slides[t];e.remove(),c.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&r.append(t[e]);l=o>e?o+t.length:o}else r.append(t);for(let e=0;e<c.length;e+=1)r.append(c[e]);n.recalcSlides(),i.loop&&n.loopCreate(),i.observer&&!n.isElement||n.update(),i.loop?n.slideTo(l+n.loopedSlides,0,!1):n.slideTo(l,0,!1)}function ht(e){const t=this,{params:n,activeIndex:i}=t;let s=i;n.loop&&(s-=t.loopedSlides,t.loopDestroy());let r,o=s;if("object"==typeof e&&"length"in e){for(let n=0;n<e.length;n+=1)r=e[n],t.slides[r]&&t.slides[r].remove(),r<o&&(o-=1);o=Math.max(o,0)}else r=e,t.slides[r]&&t.slides[r].remove(),r<o&&(o-=1),o=Math.max(o,0);t.recalcSlides(),n.loop&&t.loopCreate(),n.observer&&!t.isElement||t.update(),n.loop?t.slideTo(o+t.loopedSlides,0,!1):t.slideTo(o,0,!1)}function dt(){const e=this,t=[];for(let n=0;n<e.slides.length;n+=1)t.push(n);e.removeSlide(t)}function pt(e){let{swiper:t}=e;Object.assign(t,{appendSlide:lt.bind(t),prependSlide:ct.bind(t),addSlide:ut.bind(t),removeSlide:ht.bind(t),removeAllSlides:dt.bind(t)})}function ft(e){const{effect:t,swiper:n,on:i,setTranslate:s,setTransition:r,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:c}=e;let u;i("beforeInit",(()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const e=o?o():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)})),i("setTranslate",(()=>{n.params.effect===t&&s()})),i("setTransition",((e,i)=>{n.params.effect===t&&r(i)})),i("transitionEnd",(()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.forEach((e=>{e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))})),l()}})),i("virtualUpdate",(()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame((()=>{u&&n.slides&&n.slides.length&&(s(),u=!1)})))}))}function mt(e,t){const n=g(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function gt(e){let{swiper:t,duration:n,transformElements:i,allSlides:s}=e;const{activeIndex:r}=t,o=e=>e.parentElement?e.parentElement:t.slides.filter((t=>t.shadowEl&&t.shadowEl===e.parentNode))[0];if(t.params.virtualTranslate&&0!==n){let e,n=!1;e=s?i:i.filter((e=>{const n=e.classList.contains("swiper-slide-transform")?o(e):e;return t.getSlideIndex(n)===r})),e.forEach((e=>{I(e,(()=>{if(n)return;if(!t||t.destroyed)return;n=!0,t.animating=!1;const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(e)}))}))}}function vt(e){let{swiper:t,extendParams:n,on:i}=e;n({fadeEffect:{crossFade:!1}});const s=()=>{const{slides:e}=t,n=t.params.fadeEffect;for(let i=0;i<e.length;i+=1){const e=t.slides[i];let s=-e.swiperSlideOffset;t.params.virtualTranslate||(s-=t.translate);let r=0;t.isHorizontal()||(r=s,s=0);const o=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e.progress),0):1+Math.min(Math.max(e.progress,-1),0),a=mt(n,e);a.style.opacity=o,a.style.transform=`translate3d(${s}px, ${r}px, 0px)`}},r=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`})),gt({swiper:t,duration:e,transformElements:n,allSlides:!0})};ft({effect:"fade",swiper:t,on:i,setTranslate:s,setTransition:r,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}function yt(e){let{swiper:t,extendParams:n,on:i}=e;n({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const s=(e,t,n)=>{let i=n?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),s=n?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");i||(i=y("div","swiper-slide-shadow-"+(n?"left":"top")),e.append(i)),s||(s=y("div","swiper-slide-shadow-"+(n?"right":"bottom")),e.append(s)),i&&(i.style.opacity=Math.max(-t,0)),s&&(s.style.opacity=Math.max(t,0))},r=()=>{const e=t.isHorizontal();t.slides.forEach((t=>{const n=Math.max(Math.min(t.progress,1),-1);s(t,n,e)}))},o=()=>{const{el:e,wrapperEl:n,slides:i,width:r,height:o,rtlTranslate:a,size:l,browser:c}=t,u=t.params.cubeEffect,h=t.isHorizontal(),d=t.virtual&&t.params.virtual.enabled;let p,f=0;u.shadow&&(h?(p=t.slidesEl.querySelector(".swiper-cube-shadow"),p||(p=y("div","swiper-cube-shadow"),t.slidesEl.append(p)),p.style.height=`${r}px`):(p=e.querySelector(".swiper-cube-shadow"),p||(p=y("div","swiper-cube-shadow"),e.append(p))));for(let e=0;e<i.length;e+=1){const t=i[e];let n=e;d&&(n=parseInt(t.getAttribute("data-swiper-slide-index"),10));let r=90*n,o=Math.floor(r/360);a&&(r=-r,o=Math.floor(-r/360));const c=Math.max(Math.min(t.progress,1),-1);let p=0,m=0,g=0;n%4==0?(p=4*-o*l,g=0):(n-1)%4==0?(p=0,g=4*-o*l):(n-2)%4==0?(p=l+4*o*l,g=l):(n-3)%4==0&&(p=-l,g=3*l+4*l*o),a&&(p=-p),h||(m=p,p=0);const v=`rotateX(${h?0:-r}deg) rotateY(${h?r:0}deg) translate3d(${p}px, ${m}px, ${g}px)`;c<=1&&c>-1&&(f=90*n+90*c,a&&(f=90*-n-90*c)),t.style.transform=v,u.slideShadows&&s(t,c,h)}if(n.style.transformOrigin=`50% 50% -${l/2}px`,n.style["-webkit-transform-origin"]=`50% 50% -${l/2}px`,u.shadow)if(h)p.style.transform=`translate3d(0px, ${r/2+u.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`;else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),n=u.shadowScale,i=u.shadowScale/t,s=u.shadowOffset;p.style.transform=`scale3d(${n}, 1, ${i}) translate3d(0px, ${o/2+s}px, ${-o/2/i}px) rotateX(-90deg)`}const m=(c.isSafari||c.isWebView)&&c.needPerspectiveFix?-l/2:0;n.style.transform=`translate3d(0px,0,${m}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`,n.style.setProperty("--swiper-cube-translate-z",`${m}px`)},a=e=>{const{el:n,slides:i}=t;if(i.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),t.params.cubeEffect.shadow&&!t.isHorizontal()){const t=n.querySelector(".swiper-cube-shadow");t&&(t.style.transitionDuration=`${e}ms`)}};ft({effect:"cube",swiper:t,on:i,setTranslate:o,setTransition:a,recreateShadows:r,getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function wt(e,t,n){const i="swiper-slide-shadow"+(n?`-${n}`:""),s=g(t);let r=s.querySelector(`.${i}`);return r||(r=y("div","swiper-slide-shadow"+(n?`-${n}`:"")),s.append(r)),r}function bt(e){let{swiper:t,extendParams:n,on:i}=e;n({flipEffect:{slideShadows:!0,limitRotation:!0}});const s=(e,n,i)=>{let s=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");s||(s=wt(i,e,t.isHorizontal()?"left":"top")),r||(r=wt(i,e,t.isHorizontal()?"right":"bottom")),s&&(s.style.opacity=Math.max(-n,0)),r&&(r.style.opacity=Math.max(n,0))},r=()=>{const e=t.params.flipEffect;t.slides.forEach((n=>{let i=n.progress;t.params.flipEffect.limitRotation&&(i=Math.max(Math.min(n.progress,1),-1)),s(n,i,e)}))},o=()=>{const{slides:e,rtlTranslate:n}=t,i=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const o=e[r];let a=o.progress;t.params.flipEffect.limitRotation&&(a=Math.max(Math.min(o.progress,1),-1));const l=o.swiperSlideOffset;let c=-180*a,u=0,h=t.params.cssMode?-l-t.translate:-l,d=0;t.isHorizontal()?n&&(c=-c):(d=h,h=0,u=-c,c=0),o.style.zIndex=-Math.abs(Math.round(a))+e.length,i.slideShadows&&s(o,a,i);const p=`translate3d(${h}px, ${d}px, 0px) rotateX(${u}deg) rotateY(${c}deg)`;mt(i,o).style.transform=p}},a=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),gt({swiper:t,duration:e,transformElements:n})};ft({effect:"flip",swiper:t,on:i,setTranslate:o,setTransition:a,recreateShadows:r,getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}function Et(e){let{swiper:t,extendParams:n,on:i}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}});const s=()=>{const{width:e,height:n,slides:i,slidesSizesGrid:s}=t,r=t.params.coverflowEffect,o=t.isHorizontal(),a=t.translate,l=o?e/2-a:n/2-a,c=o?r.rotate:-r.rotate,u=r.depth;for(let e=0,t=i.length;e<t;e+=1){const t=i[e],n=s[e],a=(l-t.swiperSlideOffset-n/2)/n,h="function"==typeof r.modifier?r.modifier(a):a*r.modifier;let d=o?c*h:0,p=o?0:c*h,f=-u*Math.abs(h),m=r.stretch;"string"==typeof m&&-1!==m.indexOf("%")&&(m=parseFloat(r.stretch)/100*n);let g=o?0:m*h,v=o?m*h:0,y=1-(1-r.scale)*Math.abs(h);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(d)<.001&&(d=0),Math.abs(p)<.001&&(p=0),Math.abs(y)<.001&&(y=0);const w=`translate3d(${v}px,${g}px,${f}px)  rotateX(${p}deg) rotateY(${d}deg) scale(${y})`;if(mt(r,t).style.transform=w,t.style.zIndex=1-Math.abs(Math.round(h)),r.slideShadows){let e=o?t.querySelector(".swiper-slide-shadow-left"):t.querySelector(".swiper-slide-shadow-top"),n=o?t.querySelector(".swiper-slide-shadow-right"):t.querySelector(".swiper-slide-shadow-bottom");e||(e=wt(r,t,o?"left":"top")),n||(n=wt(r,t,o?"right":"bottom")),e&&(e.style.opacity=h>0?h:0),n&&(n.style.opacity=-h>0?-h:0)}}},r=e=>{t.slides.map((e=>g(e))).forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))}))};ft({effect:"coverflow",swiper:t,on:i,setTranslate:s,setTransition:r,perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Tt(e){let{swiper:t,extendParams:n,on:i}=e;n({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const s=e=>"string"==typeof e?e:`${e}px`,r=()=>{const{slides:e,wrapperEl:n,slidesSizesGrid:i}=t,r=t.params.creativeEffect,{progressMultiplier:o}=r,a=t.params.centeredSlides;if(a){const e=i[0]/2-t.params.slidesOffsetBefore||0;n.style.transform=`translateX(calc(50% - ${e}px))`}for(let n=0;n<e.length;n+=1){const i=e[n],l=i.progress,c=Math.min(Math.max(i.progress,-r.limitProgress),r.limitProgress);let u=c;a||(u=Math.min(Math.max(i.originalProgress,-r.limitProgress),r.limitProgress));const h=i.swiperSlideOffset,d=[t.params.cssMode?-h-t.translate:-h,0,0],p=[0,0,0];let f=!1;t.isHorizontal()||(d[1]=d[0],d[0]=0);let m={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};c<0?(m=r.next,f=!0):c>0&&(m=r.prev,f=!0),d.forEach(((e,t)=>{d[t]=`calc(${e}px + (${s(m.translate[t])} * ${Math.abs(c*o)}))`})),p.forEach(((e,t)=>{p[t]=m.rotate[t]*Math.abs(c*o)})),i.style.zIndex=-Math.abs(Math.round(l))+e.length;const g=d.join(", "),v=`rotateX(${p[0]}deg) rotateY(${p[1]}deg) rotateZ(${p[2]}deg)`,y=u<0?`scale(${1+(1-m.scale)*u*o})`:`scale(${1-(1-m.scale)*u*o})`,w=u<0?1+(1-m.opacity)*u*o:1-(1-m.opacity)*u*o,b=`translate3d(${g}) ${v} ${y}`;if(f&&m.shadow||!f){let e=i.querySelector(".swiper-slide-shadow");if(!e&&m.shadow&&(e=wt(r,i)),e){const t=r.shadowPerProgress?c*(1/r.limitProgress):c;e.style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const E=mt(r,i);E.style.transform=b,E.style.opacity=w,m.origin&&(E.style.transformOrigin=m.origin)}},o=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),gt({swiper:t,duration:e,transformElements:n,allSlides:!0})};ft({effect:"creative",swiper:t,on:i,setTranslate:r,setTransition:o,perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}function St(e){let{swiper:t,extendParams:n,on:i}=e;n({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}});const s=()=>{const{slides:e,activeIndex:n}=t,i=t.params.cardsEffect,{startTranslate:s,isTouched:r}=t.touchEventsData,o=t.translate;for(let a=0;a<e.length;a+=1){const l=e[a],c=l.progress,u=Math.min(Math.max(c,-4),4);let h=l.swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&(t.wrapperEl.style.transform=`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(h-=e[0].swiperSlideOffset);let d=t.params.cssMode?-h-t.translate:-h,p=0;const f=-100*Math.abs(u);let m=1,g=-i.perSlideRotate*u,v=i.perSlideOffset-.75*Math.abs(u);const y=t.virtual&&t.params.virtual.enabled?t.virtual.from+a:a,w=(y===n||y===n-1)&&u>0&&u<1&&(r||t.params.cssMode)&&o<s,b=(y===n||y===n+1)&&u<0&&u>-1&&(r||t.params.cssMode)&&o>s;if(w||b){const e=(1-Math.abs((Math.abs(u)-.5)/.5))**.5;g+=-28*u*e,m+=-.5*e,v+=96*e,p=-25*e*Math.abs(u)+"%"}if(d=u<0?`calc(${d}px + (${v*Math.abs(u)}%))`:u>0?`calc(${d}px + (-${v*Math.abs(u)}%))`:`${d}px`,!t.isHorizontal()){const e=p;p=d,d=e}const E=u<0?""+(1+(1-m)*u):""+(1-(1-m)*u),T=`\n        translate3d(${d}, ${p}, ${f}px)\n        rotateZ(${i.rotate?g:0}deg)\n        scale(${E})\n      `;if(i.slideShadows){let e=l.querySelector(".swiper-slide-shadow");e||(e=wt(i,l)),e&&(e.style.opacity=Math.min(Math.max((Math.abs(u)-.5)/.5,0),1))}l.style.zIndex=-Math.abs(Math.round(c))+e.length,mt(i,l).style.transform=T}},r=e=>{const n=t.slides.map((e=>g(e)));n.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),gt({swiper:t,duration:e,transformElements:n})};ft({effect:"cards",swiper:t,on:i,setTranslate:s,setTransition:r,perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}Object.keys($e).forEach((e=>{Object.keys($e[e]).forEach((t=>{Be.prototype[t]=$e[e][t]}))})),Be.use([R,F]);const xt=[qe,He,Ge,Ke,Ye,Qe,Je,Ze,et,tt,nt,it,st,rt,ot,at,pt,vt,yt,bt,Et,Tt,St];return Be.use(xt),Be}()})),r.register("iQbGk",(function(e,t){var n=r("iQIUW"),i=r("dMs1w");r("gKkQl");var s=r("ix4Jr");r("eyjy7");var o=r("la1jY");r("ftYLF");var a=r("3PjDZ");const l=(0,s.initializeApp)({apiKey:"AIzaSyAYO4Ie3dyg57FYXwv2s34tOoBXm3UaMzg",authDomain:"users-bookshelf.firebaseapp.com",projectId:"users-bookshelf",storageBucket:"users-bookshelf.appspot.com",messagingSenderId:"1093946480659",appId:"1:1093946480659:web:6fdb7ef580bf859789c7e6"}),c=(0,o.o)(),u=(0,a.getFirestore)(l),h="customers",d="info-shopping-list";var p=!1;let f="";const m="customer_name";(0,o.x)(c,(e=>{if(e){e.uid;p=!0,f=e.uid}localStorage.setItem("IS_CUSTOMER_LOGGED_IN",p)}));const g=document.querySelector(".signin-cont"),v=document.querySelector(".signup-cont"),y=document.querySelector(".signup"),w=document.querySelector(".signin"),b=document.querySelector(".tabs");(0,i.modalSignUp)(),b.addEventListener("click",(function(e){w.classList.toggle("active"),y.classList.toggle("active"),g.classList.toggle("hidden"),v.classList.toggle("hidden")}));document.querySelector(".js-form-signup").addEventListener("submit",(function(e){e.preventDefault();const{name:t,email:i,password:s}=e.currentTarget.elements;(0,o.a8)(c,i.value,s.value).then((async e=>{const s=e.user;await(0,a.setDoc)((0,a.doc)(u,h,i.value),{customer_name:t.value,customer_email:i.value,shopping_list:[],customer_avatar:"",session_id:s.uid}),n.Notify.success("Your account was successfully registered!"),T(1e3).then((()=>document.location.href="/dreamteam10-project/"))})).catch((e=>{const t=e.message;n.Notify.failure(t)}))}));document.querySelector(".js-form-signin").addEventListener("submit",(function(e){e.preventDefault();const{email:t,password:i}=e.currentTarget.elements;(0,o.a9)(c,t.value,i.value).then((async e=>{const i=e.user,s=(0,a.doc)(u,h,t.value);await(0,a.updateDoc)(s,{session_id:i.uid});const r=await(0,a.getDoc)(s);r.exists()&&(localStorage.setItem(m,r.data().customer_name),localStorage.setItem(d,r.data().shopping_list)),n.Notify.success("Welcome!"),T(1e3).then((()=>document.location.href="/dreamteam10-project/"))})).catch((e=>{const t=e.message;n.Notify.failure(t)}))}));function E(){(0,o.B)(c).then((async()=>{if(""==f)return!0;const e=(0,a.query)((0,a.collection)(u,h),(0,a.where)("session_id","==",f)),t=await(0,a.getDocs)(e);let i="";if(t.forEach((e=>{i=e.data().customer_email})),i){const e=(0,a.doc)(u,h,i);await(0,a.updateDoc)(e,{shopping_list:localStorage.getItem(d)})}localStorage.removeItem(m),localStorage.removeItem(d),localStorage.setItem("IS_CUSTOMER_LOGGED_IN",!1),n.Notify.warning("Have a nice day!"),T(1e3).then((()=>document.location.href="/dreamteam10-project/"))})).catch((e=>{const t=e.message;n.Notify.failure(t)}))}function T(e){return new Promise((t=>setTimeout(t,e)))}document.querySelectorAll(".js-signout").forEach((e=>e.addEventListener("click",E)))})),r.register("iQIUW",(function(e,t){var i,s;i=void 0!==n?n:"undefined"!=typeof window?window:e.exports,s=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Success",i="Failure",s="Warning",r="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(t){return t||(t="head"),null!==e.document[t]||(a('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=c(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,f){if(!l("body"))return!1;t||p.Notify.init({});var m=c(!0,t,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof f&&!Array.isArray(f)){var g={};"object"==typeof d?g=d:"object"==typeof f&&(g=f),t=c(!0,t,g)}var v,y,w=t[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),t.plainText&&(v=u,(y=e.document.createElement("div")).innerHTML=v,u=y.textContent||y.innerText||""),!t.plainText&&u.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>t.messageMaxLength&&(u=u.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(w.fontAwesomeIconColor=w.background),t.cssAnimation||(t.cssAnimationDuration=0);var b=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(b.id=o.wrapID,b.style.width=t.width,b.style.zIndex=t.zindex,b.style.opacity=t.opacity,"center-center"===t.position?(b.style.left=t.distance,b.style.top=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===t.position?(b.style.left=t.distance,b.style.right=t.distance,b.style.top=t.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===t.position?(b.style.left=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===t.position?(b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.left="auto"):"left-top"===t.position?(b.style.left=t.distance,b.style.top=t.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===t.position?(b.style.left=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=t.distance,b.style.top=t.distance,b.style.left="auto",b.style.bottom="auto"),t.backOverlay){var E=e.document.getElementById(o.overlayID)||e.document.createElement("div");E.id=o.overlayID,E.style.width="100%",E.style.height="100%",E.style.position="fixed",E.style.zIndex=t.zindex-1,E.style.left=0,E.style.top=0,E.style.right=0,E.style.bottom=0,E.style.background=w.backOverlayColor||t.backOverlayColor,E.className=t.cssAnimation?"nx-with-animation":"",E.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(E)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(b);var T=e.document.createElement("div");T.id=t.ID+"-"+h,T.className=t.className+" "+w.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),T.style.fontSize=t.fontSize,T.style.color=w.textColor,T.style.background=w.background,T.style.borderRadius=t.borderRadius,T.style.pointerEvents="all",t.rtl&&(T.setAttribute("dir","rtl"),T.classList.add("nx-rtl-on")),T.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(T.style.animationDuration=t.cssAnimationDuration+"ms");var S="";if(t.closeButton&&"function"!=typeof d&&(S='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+w.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)T.innerHTML='<i style="color:'+w.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+w.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?S:"");else{var x="";a===n?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===s?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===r&&(x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),T.innerHTML=x+'<span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?S:"")}else T.innerHTML='<span class="nx-message">'+u+"</span>"+(t.closeButton?S:"");if("left-bottom"===t.position||"right-bottom"===t.position){var I=e.document.getElementById(o.wrapID);I.insertBefore(T,I.firstChild)}else e.document.getElementById(o.wrapID).appendChild(T);var C=e.document.getElementById(T.id);if(C){var _,k,A=function(){C.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&b.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(_)},M=function(){if(C&&null!==C.parentNode&&C.parentNode.removeChild(C),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(k)};if(t.closeButton&&"function"!=typeof d&&e.document.getElementById(T.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var e=setTimeout((function(){M(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof d||t.clickToClose)&&C.addEventListener("click",(function(){"function"==typeof d&&d(),A();var e=setTimeout((function(){M(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof d){var N=function(){_=setTimeout((function(){A()}),t.timeout),k=setTimeout((function(){M()}),t.timeout+t.cssAnimationDuration)};N(),t.pauseOnHover&&(C.addEventListener("mouseenter",(function(){C.classList.add("nx-paused"),clearTimeout(_),clearTimeout(k)})),C.addEventListener("mouseleave",(function(){C.classList.remove("nx-paused"),N()})))}}if(t.showOnlyTheLastOne&&h>0)for(var D=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+h+"])"),L=0;L<D.length;L++){var P=D[L];null!==P.parentNode&&P.parentNode.removeChild(P)}t=c(!0,t,m)},p={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!l("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return a("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,i){d(n,e,t,i)},failure:function(e,t,n){d(i,e,t,n)},warning:function(e,t,n){d(s,e,t,n)},info:function(e,t,n){d(r,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return s(i)})):"object"==typeof e.exports?e.exports=s(i):i.Notiflix=s(i)})),r.register("dMs1w",(function(t,n){function i(){const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.addEventListener("click",n),e.modal.classList.toggle("hidden"),document.addEventListener("keydown",(function t(n){"Escape"===n.code&&(e.modal.classList.add("hidden"),document.removeEventListener("keydown",t))}))}function n(t){t.currentTarget===t.target&&(e.modal.classList.toggle("hidden"),e.modal.removeEventListener("click",n))}e.openModalBtn.forEach((e=>e.addEventListener("click",t))),e.closeModalBtn.addEventListener("click",t)}e(t.exports,"modalSignUp",(function(){return i}))})),r.register("gKkQl",(function(t,n){e(t.exports,"initializeApp",(function(){return r("ix4Jr").initializeApp})),e(t.exports,"registerVersion",(function(){return r("ix4Jr").registerVersion}));r("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r("ix4Jr").registerVersion)("firebase","9.22.0","app")})),r.register("ix4Jr",(function(t,n){e(t.exports,"_registerComponent",(function(){return v})),e(t.exports,"_getProvider",(function(){return y})),e(t.exports,"_removeServiceInstance",(function(){return w})),e(t.exports,"SDK_VERSION",(function(){return S})),e(t.exports,"initializeApp",(function(){return x})),e(t.exports,"getApp",(function(){return I})),e(t.exports,"registerVersion",(function(){return C}));var i=r("4a6xH"),s=r("7vF8m"),o=r("ffjl9"),a=r("cCiiD");o=r("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const c="@firebase/app",u="0.9.10",h=new(0,s.Logger)("@firebase/app"),d="[DEFAULT]",p={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function v(e){const t=e.name;if(m.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;m.set(t,e);for(const t of f.values())g(t,e);return!0}function y(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function w(e,t,n="[DEFAULT]"){y(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},E=new(0,o.ErrorFactory)("app","Firebase",b);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="9.22.0";function x(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),r=s.name;if("string"!=typeof r||!r)throw E.create("bad-app-name",{appName:String(r)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw E.create("no-options");const a=f.get(r);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(s,a.config))return a;throw E.create("duplicate-app",{appName:r})}const l=new(0,i.ComponentContainer)(r);for(const e of m.values())l.addComponent(e);const c=new T(n,s,l);return f.set(r,c),c}function I(e="[DEFAULT]"){const t=f.get(e);if(!t&&e===d&&(0,o.getDefaultAppConfig)())return x();if(!t)throw E.create("no-app",{appName:e});return t}function C(e,t,n){var s;let r=null!==(s=p[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}v(new(0,i.Component)(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _="firebase-heartbeat-store";let k=null;function A(){return k||(k=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(_)}}).catch((e=>{throw E.create("idb-open",{originalErrorMessage:e.message})}))),k}async function M(e,t){try{const n=(await A()).transaction(_,"readwrite"),i=n.objectStore(_);await i.put(t,N(e)),await n.done}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const t=E.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function N(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=L();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=L(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),O(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),O(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new P(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function L(){return(new Date).toISOString().substring(0,10)}class P{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await A();return await t.transaction(_).objectStore(_).get(N(e))}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const t=E.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function O(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;R="",v(new(0,i.Component)("platform-logger",(e=>new l(e)),"PRIVATE")),v(new(0,i.Component)("heartbeat",(e=>new D(e)),"PRIVATE")),C(c,u,R),C(c,u,"esm2017"),C("fire-js","")})),r.register("4a6xH",(function(t,n){e(t.exports,"Component",(function(){return s})),e(t.exports,"ComponentContainer",(function(){return l}));var i=r("ffjl9");class s{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,i.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===o?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class l{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}})),r.register("ffjl9",(function(t,i){e(t.exports,"base64urlEncodeWithoutPadding",(function(){return c})),e(t.exports,"base64Decode",(function(){return u})),e(t.exports,"getDefaultEmulatorHost",(function(){return p})),e(t.exports,"getDefaultEmulatorHostnameAndPort",(function(){return f})),e(t.exports,"getDefaultAppConfig",(function(){return m})),e(t.exports,"getExperimentalSetting",(function(){return g})),e(t.exports,"Deferred",(function(){return v})),e(t.exports,"createMockUserToken",(function(){return y})),e(t.exports,"getUA",(function(){return w})),e(t.exports,"isMobileCordova",(function(){return b})),e(t.exports,"isBrowserExtension",(function(){return E})),e(t.exports,"isReactNative",(function(){return T})),e(t.exports,"isIE",(function(){return S})),e(t.exports,"isSafari",(function(){return x})),e(t.exports,"isIndexedDBAvailable",(function(){return I})),e(t.exports,"validateIndexedDBOpenable",(function(){return C})),e(t.exports,"FirebaseError",(function(){return _})),e(t.exports,"ErrorFactory",(function(){return k})),e(t.exports,"isEmpty",(function(){return M})),e(t.exports,"deepEqual",(function(){return N})),e(t.exports,"querystring",(function(){return L})),e(t.exports,"querystringDecode",(function(){return P})),e(t.exports,"extractQuerystring",(function(){return O})),e(t.exports,"createSubscribe",(function(){return R})),e(t.exports,"getModularInstance",(function(){return U}));var s=r("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new l;const c=s<<2|r>>4;if(i.push(c),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(e){return function(e){const t=o(e);return a.encodeByteArray(t,!0)}(e).replace(/\./g,"")},u=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,d=()=>{try{return h()||(()=>{if(void 0===s||void 0===s.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&u(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},p=e=>{var t,n;return null===(n=null===(t=d())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},f=e=>{const t=p(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},m=()=>{var e;return null===(e=d())||void 0===e?void 0:e.config},g=e=>{var t;return null===(t=d())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[c(JSON.stringify({alg:"none",type:"JWT"})),c(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function b(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function E(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function T(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function S(){const e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return!function(){var e;const t=null===(e=d())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function I(){try{return"object"==typeof indexedDB}catch(e){return!1}}function C(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(A,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new _(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(D(n)&&D(r)){if(!N(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function D(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function P(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function O(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){const n=new F(e,t);return n.subscribe.bind(n)}class F{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=V),void 0===i.error&&(i.error=V),void 0===i.complete&&(i.complete=V);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){return e&&e._delegate?e._delegate:e}})),r.register("4TNnu",(function(e,t){var n,i,s=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],u=!1,h=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&p())}function p(){if(!u){var e=a(d);u=!0;for(var t=c.length;t;){for(l=c,c=[];++h<t;)l&&l[h].run();h=-1,t=c.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}})),r.register("7vF8m",(function(t,n){e(t.exports,"LogLevel",(function(){return s})),e(t.exports,"Logger",(function(){return u})),e(t.exports,"setLogLevel",(function(){return h})),e(t.exports,"setUserLogHandler",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s,r;(r=s||(s={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";const o={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},a=s.INFO,l={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=l[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class u{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,i.push(this)}}function h(e){i.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of i){let i=null;t&&t.level&&(i=o[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const o=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:s[n].toLowerCase(),message:o,args:r,type:t.name})}}}})),r.register("cCiiD",(function(t,n){e(t.exports,"openDB",(function(){return s}));var i=r("ekHjI");i=r("ekHjI");function s(e,t,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(e,t),l=(0,i.w)(a);return s&&a.addEventListener("upgradeneeded",(e=>{s((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),l.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),l}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(l.get(t))return l.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!o.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return l.set(t,r),r}(0,i.r)((e=>({...e,get:(t,n,i)=>c(t,n)||e.get(t,n,i),has:(t,n)=>!!c(t,n)||e.has(t,n)})))})),r.register("ekHjI",(function(t,n){e(t.exports,"w",(function(){return f})),e(t.exports,"r",(function(){return h}));let i,s;const r=new WeakMap,o=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap;let u={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function h(e){u=e(u)}function d(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),f(r.get(this))}:function(...t){return f(e.apply(m(this),t))}:function(t,...n){const i=e.call(m(this),t,...n);return a.set(i,t.sort?t.sort():[t]),f(i)}}function p(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));o.set(e,t)}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,u):e);var t}function f(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(f(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&r.set(t,e)})).catch((()=>{})),c.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=p(e);return t!==e&&(l.set(e,t),c.set(t,e)),t}const m=e=>c.get(e)})),r.register("eyjy7",(function(t,n){e(t.exports,"getAuth",(function(){return r("la1jY").o})),e(t.exports,"onAuthStateChanged",(function(){return r("la1jY").x})),e(t.exports,"createUserWithEmailAndPassword",(function(){return r("la1jY").a8})),e(t.exports,"signInWithEmailAndPassword",(function(){return r("la1jY").a9})),e(t.exports,"signOut",(function(){return r("la1jY").B})),r("1iO0g")})),r.register("1iO0g",(function(t,n){e(t.exports,"createUserWithEmailAndPassword",(function(){return r("la1jY").a8})),e(t.exports,"getAuth",(function(){return r("la1jY").o})),e(t.exports,"onAuthStateChanged",(function(){return r("la1jY").x})),e(t.exports,"signInWithEmailAndPassword",(function(){return r("la1jY").a9})),e(t.exports,"signOut",(function(){return r("la1jY").B})),r("ffjl9"),r("ix4Jr"),r("7vF8m"),r("4a6xH");r("la1jY")})),r.register("la1jY",(function(t,n){e(t.exports,"a8",(function(){return Ke})),e(t.exports,"a9",(function(){return Xe})),e(t.exports,"x",(function(){return Ye})),e(t.exports,"B",(function(){return Qe})),e(t.exports,"o",(function(){return hn}));var i=r("ffjl9"),s=r("ix4Jr"),o=r("l73V3"),a=r("7vF8m"),l=r("4a6xH");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,h=new(0,i.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d=new(0,a.Logger)("@firebase/auth");function p(e,...t){d.logLevel<=a.LogLevel.ERROR&&d.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw v(e,...t)}function m(e,...t){return v(e,...t)}function g(e,t,n){const s=Object.assign(Object.assign({},u()),{[t]:n});return new(0,i.ErrorFactory)("auth","Firebase",s).create(t,{appName:e.name})}function v(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return h.create(e,...t)}function y(e,t,...n){if(!e)throw v(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw p(t),new Error(t)}function b(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(T()||(0,i.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.isMobileCordova)()||(0,i.isReactNative)()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},k=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,s,r={}){return N(e,r,(async()=>{let r={},o={};s&&("GET"===t?o=s:r={body:JSON.stringify(s)});const a=(0,i.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),C.fetch()(L(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},r))}))}async function N(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},_),t);try{const t=new P(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw O(e,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const t=i.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw O(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw O(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw O(e,"user-disabled",r);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);f(e,a)}}catch(t){if(t instanceof i.FirebaseError)throw t;f(e,"network-request-failed",{message:String(t)})}}async function D(e,t,n,i,s={}){const r=await M(e,t,n,i,s);return"mfaPendingCredential"in r&&f(e,"multi-factor-auth-required",{_serverResponse:r}),r}function L(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?I(e.config,s):`${e.config.apiScheme}://${s}`}class P{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),k.get())}))}}function O(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=m(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return 1e3*Number(e)}function V(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return p("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.base64Decode)(n);return e?JSON.parse(e):(p("Failed to decode base64 JWT payload"),null)}catch(e){return p("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function U(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class z{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${_initializeTime(){this.lastSignInTime=R(this.lastLoginAt),this.creationTime=R(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e){var t;const n=e.auth,i=await e.getIdToken(),s=await U(e,async function(e,t){return M(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));y(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const a=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,o.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const l=(c=e.providerData,u=a,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const h=e.isAnonymous,d=!(e.email&&r.passwordHash||(null==l?void 0:l.length)),p=!!h&&d,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new $(r.createdAt,r.lastLoginAt),isAnonymous:p};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=V(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await N(e,{},(async()=>{const n=(0,i.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=L(e,s,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new B;return n&&(y("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(y("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(y("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new B,this.toJSON())}_performRefresh(){return w("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class H{async getIdToken(e){const t=await U(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,i.getModularInstance)(e),s=await n.getIdToken(t),r=V(s);y(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:r,token:s,authTime:R(F(r.auth_time)),issuedAtTime:R(F(r.iat)),expirationTime:R(F(r.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,i.getModularInstance)(e);await j(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new H(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await j(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await U(this,async function(e,t){return M(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=t.photoURL)&&void 0!==r?r:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:w,emailVerified:b,isAnonymous:E,providerData:T,stsTokenManager:S}=t;y(w&&S,e,"internal-error");const x=B.fromJSON(this.name,S);y("string"==typeof w,e,"internal-error"),q(u,e.name),q(h,e.name),y("boolean"==typeof b,e,"internal-error"),y("boolean"==typeof E,e,"internal-error"),q(d,e.name),q(p,e.name),q(f,e.name),q(m,e.name),q(g,e.name),q(v,e.name);const I=new H({uid:w,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:E,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:x,createdAt:g,lastLoginAt:v});return T&&Array.isArray(T)&&(I.providerData=T.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new B;i.updateFromServerResponse(t);const s=new H({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await j(s),s}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=(0,o.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $(s.createdAt||void 0,s.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new Map;function W(e){b(e instanceof Function,"Expected a class definition");let t=G.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,G.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}K.type="NONE";const X=K;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t,n){return`firebase:${e}:${t}:${n}`}class Q{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?H._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Q(W(X),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||W(X);const r=Y(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=H._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new Q(s,e,n)):new Q(s,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Y(this.userKey,i.apiKey,s),this.fullPersistenceKey=Y("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ne(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Z(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(se(t))return"Blackberry";if(re(t))return"Webos";if(ee(t))return"Safari";if((t.includes("chrome/")||te(t))&&!t.includes("edge/"))return"Chrome";if(ie(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Z(e=(0,i.getUA)()){return/firefox\//i.test(e)}function ee(e=(0,i.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function te(e=(0,i.getUA)()){return/crios\//i.test(e)}function ne(e=(0,i.getUA)()){return/iemobile/i.test(e)}function ie(e=(0,i.getUA)()){return/android/i.test(e)}function se(e=(0,i.getUA)()){return/blackberry/i.test(e)}function re(e=(0,i.getUA)()){return/webos/i.test(e)}function oe(e=(0,i.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ae(e=(0,i.getUA)()){return oe(e)||ie(e)||re(e)||se(e)||/windows phone/i.test(e)||ne(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e,t=[]){let n;switch(e){case"Browser":n=J((0,i.getUA)());break;case"Worker":n=`${J((0,i.getUA)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){return M(e,"GET","/v2/recaptchaConfig",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){return void 0!==e&&void 0!==e.enterprise}class he{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){return new Promise(((t,n)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function pe(e){return`__${e}${Math.floor(1e6*Math.random())}`}class fe{async verify(e="verify",t=!1){function n(t,n,i){const s=window.grecaptcha;ue(s)?s.enterprise.ready((()=>{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{ce(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new he(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&ue(window.grecaptcha))n(s,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));de("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=ye(e)}}async function me(e,t,n,i=!1){const s=new fe(e);let r;try{r=await s.verify(n)}catch(e){r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=W(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Q.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await j(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.getModularInstance)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(W(e))}))}async initializeRecaptchaConfig(){const e=await ce(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new he(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new fe(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,i.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&W(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Q.create(this,[W(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return y(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=le(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){d.logLevel<=a.LogLevel.WARN&&d.warn(`Auth (${s.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new we(this),this.idTokenSubscription=new we(this),this.beforeStateQueue=new ge(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function ye(e){return(0,i.getModularInstance)(e)}class we{get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.createSubscribe)((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t,n){const i=ye(e);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=Ee(t),{host:o,port:a}=function(e){const t=Ee(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:Te(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Te(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ee(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Te(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Se{toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t){return M(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ie(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce extends Se{static _fromEmailAndPassword(e,t){return new Ce(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ce(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await me(e,n,"signInWithPassword");return Ie(e,t)}return Ie(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await me(e,n,"signInWithPassword");return Ie(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return xe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends Se{static _fromParams(e){const t=new ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=(0,o.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new ke(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return _e(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,_e(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_e(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.querystring)(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me extends Se{static _fromVerification(e,t){return new Me({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Me({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw O(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ae)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Me({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static parseLink(e){const t=function(e){const t=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).link,n=t?(0,i.querystringDecode)((0,i.extractQuerystring)(t)).deep_link_id:null,s=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).deep_link_id;return(s?(0,i.querystringDecode)((0,i.extractQuerystring)(s)).link:null)||s||n||t||e}(e);try{return new Ne(t)}catch(e){return null}}constructor(e){var t,n,s,r,o,a;const l=(0,i.querystringDecode)((0,i.extractQuerystring)(e)),c=null!==(t=l.apiKey)&&void 0!==t?t:null,u=null!==(n=l.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=l.mode)&&void 0!==s?s:null);y(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(r=l.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{static credential(e,t){return Ce._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ne.parseLink(t);return y(n,"argument-error"),Ce._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=De.PROVIDER_ID}}De.PROVIDER_ID="password",De.EMAIL_PASSWORD_SIGN_IN_METHOD="password",De.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Le{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe extends Pe{static credential(e){return ke._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Oe.FACEBOOK_SIGN_IN_METHOD="facebook.com",Oe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re extends Pe{static credential(e,t){return ke._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Re.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Re.GOOGLE_SIGN_IN_METHOD="google.com",Re.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe extends Pe{static credential(e){return ke._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Fe.GITHUB_SIGN_IN_METHOD="github.com",Fe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve extends Pe{static credential(e,t){return ke._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ve.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ue(e,t){return D(e,"POST","/v1/accounts:signUp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve.TWITTER_SIGN_IN_METHOD="twitter.com",Ve.PROVIDER_ID="twitter.com";class ze{static async _fromIdTokenResponse(e,t,n,i=!1){const s=await H._fromIdTokenResponse(e,n,i),r=$e(n);return new ze({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=$e(n);return new ze({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function $e(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je extends i.FirebaseError{static _fromErrorAndOperation(e,t,n,i){return new je(e,t,n,i)}constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,je.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Be(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw je._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t,n=!1){const i=await U(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ze._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function He(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await U(e,Be(i,s,t,e),n);y(r.idToken,i,"internal-error");const o=V(r.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(e.uid===a,i,"user-mismatch"),ze._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&f(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t,n=!1){const i="signIn",s=await Be(e,i,t),r=await ze._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function We(e,t){return Ge(ye(e),t)}async function Ke(e,t,n){var i;const s=ye(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=s._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await me(s,r,"signUpPassword");o=Ue(s,e)}else o=Ue(s,r).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await me(s,r,"signUpPassword");return Ue(s,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await ze._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function Xe(e,t,n){return We((0,i.getModularInstance)(e),De.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,t,n,s){return(0,i.getModularInstance)(e).onAuthStateChanged(t,n,s)}function Qe(e){return(0,i.getModularInstance)(e).signOut()}new WeakMap;const Je="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{_isAvailable(){try{return this.storage?(this.storage.setItem(Je,"1"),this.storage.removeItem(Je),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Ze{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);(0,i.isIE)()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,i.getUA)();return ee(e)||oe(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ae(),this._shouldAllowMigration=!0}}et.type="LOCAL";const tt=et;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Ze{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}nt.type="SESSION";const it=nt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new st(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rt(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st.receivers=[];class ot{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const l=rt("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(){return void 0!==at().WorkerGlobalScope&&"function"==typeof at().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ct="firebaseLocalStorageDb",ut="firebaseLocalStorage",ht="fbase_key";class dt{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function pt(e,t){return e.transaction([ut],t?"readwrite":"readonly").objectStore(ut)}function ft(){const e=indexedDB.open(ct,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ut,{keyPath:ht})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ut)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(ct);return new dt(e).toPromise()}(),t(await ft()))}))}))}async function mt(e,t,n){const i=pt(e,!0).put({[ht]:t,value:n});return new dt(i).toPromise()}function gt(e,t){const n=pt(e,!0).delete(t);return new dt(n).toPromise()}class vt{async _openDb(){return this.db||(this.db=await ft()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=st._getInstance(lt()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ot(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ft();return await mt(e,Je,"1"),await gt(e,Je),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>mt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=pt(e,!1).get(t),i=await new dt(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>gt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=pt(e,!1).getAll();return new dt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}vt.type="LOCAL";const yt=vt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
pe("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="recaptcha";async function bt(e,t,n){var i;const s=await n.verify();try{let r;if(y("string"==typeof s,e,"argument-error"),y(n.type===wt,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){y("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await function(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",A(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{verifyPhoneNumber(e,t){return bt(this.auth,e,(0,i.getModularInstance)(t))}static credential(e,t){return Me._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Et.credentialFromTaggedObject(t)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Me._fromTokenResponse(t,n):null}constructor(e){this.providerId=Et.PROVIDER_ID,this.auth=ye(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tt(e,t){return t?W(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.PROVIDER_ID="phone",Et.PHONE_SIGN_IN_METHOD="phone";class St extends Se{_getIdTokenResponse(e){return _e(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _e(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _e(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function xt(e){return Ge(e.auth,new St(e),e.bypassAuthState)}function It(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),He(n,new St(e),e.bypassAuthState)}async function Ct(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),qe(n,new St(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xt;case"linkViaPopup":case"linkViaRedirect":return Ct;case"reauthViaPopup":case"reauthViaRedirect":return It;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new x(2e3,1e4);class At extends _t{async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=rt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,kt.get())};e()}constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}}At.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mt=new Map;class Nt extends _t{async execute(){let e=Mt.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Pt(t),i=Lt(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Mt.set(this.auth._key(),e)}return this.bypassAuthState||Mt.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Dt(e,t){Mt.set(e._key(),t)}function Lt(e){return W(e._redirectPersistence)}function Pt(e){return Y("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n=!1){const i=ye(e),s=Tt(i,t),r=new Nt(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Rt{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Vt(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ft(e))}saveEventToCache(e){this.cachedEventUids.add(Ft(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ft(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Vt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ut=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zt=/^https?/;async function $t(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return M(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(jt(e))return}catch(e){}f(e,"unauthorized-domain")}function jt(e){const t=E(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!zt.test(n))return!1;if(Ut.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new x(3e4,6e4);function qt(){const e=at().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ht=null;function Gt(e){return Ht=Ht||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){qt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qt(),n(m(e,"network-request-failed"))},timeout:Bt.get()})}if(null===(s=null===(i=at().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=at().gapi)||void 0===r?void 0:r.load)){const t=pe("iframefcb");return at()[t]=()=>{gapi.load?o():n(m(e,"network-request-failed"))},de(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ht=null,e}))}(e),Ht}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new x(5e3,15e3),Kt={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yt(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?I(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Xt.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.querystring)(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Jt{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Zt(e,t,n,s=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Qt),{width:s.toString(),height:r.toString(),top:o,left:a}),u=(0,i.getUA)().toLowerCase();n&&(l=te(u)?"_blank":n),Z(u)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,i.getUA)()){var t;return oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==l)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",l),new Jt(null);const d=window.open(t||"",l,h);y(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Jt(d)}const en="emulator/auth/handler",tn=encodeURIComponent("fac");async function nn(e,t,n,r,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof Le){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Pe){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];const u=await e._getAppCheckToken(),h=u?`#${tn}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?I(e,en):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,i.querystring)(c).slice(1)}${h}`}const sn="webStorageSupport";const rn=class{async _openPopup(e,t,n,i){var s;b(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Zt(e,await nn(e,t,n,E(),i),rt())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){at().location.href=e}(await nn(e,t,n,E(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Gt(e),n=at().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:Yt(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kt,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=m(e,"network-request-failed"),r=at().setTimeout((()=>{i(s)}),Wt.get());function o(){at().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new Rt(e);return t.register("authEvent",(t=>{y(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sn,{type:sn},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$t(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ae()||ee()||oe()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=it,this._completeRedirectFn=Ot,this._overrideRedirectResult=Dt}};var on="@firebase/auth",an="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cn=(0,i.getExperimentalSetting)("authIdTokenMaxAge")||300;let un=null;function hn(e=(0,s.getApp)()){const t=(0,s._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,s._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),s=n.getOptions();if((0,i.deepEqual)(s,null!=t?t:{}))return e;f(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:rn,persistence:[yt,tt,it]}),r=(0,i.getExperimentalSetting)("authTokenSyncURL");if(r){const e=(o=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>cn)return;const i=null==t?void 0:t.token;un!==i&&(un=i,await fetch(o,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){(0,i.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,s){(0,i.getModularInstance)(e).onIdTokenChanged(t,n,s)}(n,(t=>e(t)))}var o;const a=(0,i.getDefaultEmulatorHost)("auth");return a&&be(n,`http://${a}`),n}var dn;dn="Browser",(0,s._registerComponent)(new(0,l.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;y(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:dn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:le(dn)},l=new ve(n,i,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(W);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,s._registerComponent)(new(0,l.Component)("auth-internal",(e=>{const t=ye(e.getProvider("auth").getImmediate());return new ln(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(on,an,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(dn)),(0,s.registerVersion)(on,an,"esm2017")})),r.register("l73V3",(function(t,n){e(t.exports,"__rest",(function(){return i}));function i(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create})),r.register("ftYLF",(function(t,n){e(t.exports,"getFirestore",(function(){return r("3PjDZ").getFirestore})),e(t.exports,"setDoc",(function(){return r("3PjDZ").setDoc})),e(t.exports,"doc",(function(){return r("3PjDZ").doc})),e(t.exports,"updateDoc",(function(){return r("3PjDZ").updateDoc})),e(t.exports,"getDoc",(function(){return r("3PjDZ").getDoc})),e(t.exports,"query",(function(){return r("3PjDZ").query})),e(t.exports,"collection",(function(){return r("3PjDZ").collection})),e(t.exports,"where",(function(){return r("3PjDZ").where})),e(t.exports,"getDocs",(function(){return r("3PjDZ").getDocs})),r("3PjDZ")})),r.register("3PjDZ",(function(t,n){e(t.exports,"collection",(function(){return po})),e(t.exports,"doc",(function(){return fo})),e(t.exports,"getFirestore",(function(){return vo})),e(t.exports,"query",(function(){return Qo})),e(t.exports,"where",(function(){return Zo})),e(t.exports,"getDoc",(function(){return da})),e(t.exports,"getDocs",(function(){return fa})),e(t.exports,"setDoc",(function(){return ma})),e(t.exports,"updateDoc",(function(){return ga}));var i=r("ix4Jr"),s=r("4a6xH"),o=r("7vF8m"),a=r("ffjl9"),l=r("4bwHs");r("4TNnu");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.22.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new(0,o.Logger)("@firebase/firestore");function p(){return d.logLevel}function f(e,...t){if(d.logLevel<=o.LogLevel.DEBUG){const n=t.map(v);d.debug(`Firestore (${h}): ${e}`,...n)}}function m(e,...t){if(d.logLevel<=o.LogLevel.ERROR){const n=t.map(v);d.error(`Firestore (${h}): ${e}`,...n)}}function g(e,...t){if(d.logLevel<=o.LogLevel.WARN){const n=t.map(v);d.warn(`Firestore (${h}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e="Unexpected state"){const t=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function w(e,t){e||y()}function b(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends a.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(u.UNAUTHENTICATED)))}shutdown(){}}class C{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class _{start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new S;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new S,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new S)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(w("string"==typeof t.accessToken),new x(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return w(null===e||"string"==typeof e),new u(e)}constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class k{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY,this.g=new Map}}class A{getToken(){return Promise.resolve(new k(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(u.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class M{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{start(e,t){const n=e=>{null!=e.error&&f("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(w("string"==typeof e.token),this.T=e.token,new M(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=D(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function P(e,t){return e<t?-1:e>t?1:0}function O(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{static now(){return R.fromMillis(Date.now())}static fromDate(e){return R.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new R(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new R(0,0))}static max(){return new F(new R(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{get length(){return this.len}isEqual(e){return 0===V.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof V?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}}class U extends V{construct(e,t,n){return new U(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new U(t)}static emptyPath(){return new U([])}}const z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends V{construct(e,t,n){return new $(e,t,n)}static isValidIdentifier(e){return z.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $(t)}static emptyPath(){return new $([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromPath(e){return new j(U.fromString(e))}static fromName(e){return new j(U.fromString(e).popFirst(5))}static empty(){return new j(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===U.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return U.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new U(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}B.UNKNOWN_ID=-1;function q(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=F.fromTimestamp(1e9===i?new R(n+1,0):new R(n,i));return new G(s,j.empty(),t)}function H(e){return new G(e.readTime,e.key,-1)}class G{static min(){return new G(F.min(),j.empty(),-1)}static max(){return new G(F.max(),j.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function W(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=j.comparator(e.documentKey,t.documentKey),0!==n?n:P(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==K)throw e;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(e){return Q.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Q.reject(t)}static resolve(e){return new Q(((t,n)=>{t(e)}))}static reject(e){return new Q(((t,n)=>{n(e)}))}static waitFor(e){return new Q(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=Q.resolve(!1);for(const n of e)t=t.next((e=>e?Q.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new Q(((n,i)=>{const s=e.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;t(e[l]).next((e=>{r[l]=e,++o,o===s&&n(r)}),(e=>i(e)))}}))}static doWhile(e,t){return new Q(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}}function ee(e){return null==e}function te(e){return 0===e&&1/e==-1/0}function ne(e){return"number"==typeof e&&Number.isInteger(e)&&!te(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Z.ct=-1;const ie=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],se=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],re=se;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oe(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ae(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function le(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ue(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ue(this.root,e,this.comparator,!1)}getReverseIterator(){return new ue(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ue(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||he.EMPTY}}class ue{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class he{copy(e,t,n,i,s){return new he(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return he.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:he.RED,this.left=null!=i?i:he.EMPTY,this.right=null!=s?s:he.EMPTY,this.size=this.left.size+1+this.right.size}}he.EMPTY=null,he.RED=!0,he.BLACK=!1,he.EMPTY=new class{get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,i,s){return this}insert(e,t,n){return new he(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pe(this.data.getIterator())}getIteratorFrom(e){return new pe(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof de))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new ce(this.comparator)}}class pe{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{static empty(){return new fe([])}unionWith(e){let t=new de($.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return O(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort($.comparator)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ge=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new me("Invalid base64 string: "+e):e}}(e);return new ve(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ve(t)}[ge](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}ve.EMPTY_BYTE_STRING=new ve("");const ye=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function we(e){if(w(!!e),"string"==typeof e){let t=0;const n=ye.exec(e);if(w(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:be(e.seconds),nanos:be(e.nanos)}}function be(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ee(e){return"string"==typeof e?ve.fromBase64String(e):ve.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Se(e){const t=e.mapValue.fields.__previous_value__;return Te(t)?Se(t):t}function xe(e){const t=we(e.mapValue.fields.__local_write_time__.timestampValue);return new R(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,n,i,s,r,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class Ce{static empty(){return new Ce("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ce&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ke(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Te(e)?4:je(e)?9007199254740991:10:y()}function Ae(e,t){if(e===t)return!0;const n=ke(e);if(n!==ke(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return xe(e).isEqual(xe(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=we(e.timestampValue),i=we(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,Ee(e.bytesValue).isEqual(Ee(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return be(e.geoPointValue.latitude)===be(t.geoPointValue.latitude)&&be(e.geoPointValue.longitude)===be(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return be(e.integerValue)===be(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=be(e.doubleValue),i=be(t.doubleValue);return n===i?te(n)===te(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return O(e.arrayValue.values||[],t.arrayValue.values||[],Ae);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(oe(n)!==oe(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Ae(n[e],i[e])))return!1;return!0}(e,t);default:return y()}var i}function Me(e,t){return void 0!==(e.values||[]).find((e=>Ae(e,t)))}function Ne(e,t){if(e===t)return 0;const n=ke(e),i=ke(t);if(n!==i)return P(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=be(e.integerValue||e.doubleValue),i=be(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return De(e.timestampValue,t.timestampValue);case 4:return De(xe(e),xe(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ee(e),i=Ee(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=P(n[e],i[e]);if(0!==t)return t}return P(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=P(be(e.latitude),be(t.latitude));return 0!==n?n:P(be(e.longitude),be(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Ne(n[e],i[e]);if(t)return t}return P(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===_e.mapValue&&t===_e.mapValue)return 0;if(e===_e.mapValue)return 1;if(t===_e.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let e=0;e<i.length&&e<r.length;++e){const t=P(i[e],r[e]);if(0!==t)return t;const o=Ne(n[i[e]],s[r[e]]);if(0!==o)return o}return P(i.length,r.length)}(e.mapValue,t.mapValue);default:throw y()}}function De(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return P(e,t);const n=we(e),i=we(t),s=P(n.seconds,i.seconds);return 0!==s?s:P(n.nanos,i.nanos)}function Le(e){return Pe(e)}function Pe(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=we(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ee(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,j.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Pe(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${Pe(e.fields[s])}`;return n+"}"}(e.mapValue):y()}function Oe(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Re(e){return!!e&&"integerValue"in e}function Fe(e){return!!e&&"arrayValue"in e}function Ve(e){return!!e&&"nullValue"in e}function Ue(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ze(e){return!!e&&"mapValue"in e}function $e(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ae(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=$e(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=$e(e.arrayValue.values[n]);return t}return Object.assign({},e)}function je(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ze(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$e(t)}setAll(e){let t=$.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=$e(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());ze(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ae(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ze(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ae(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Be($e(this.value))}constructor(e){this.value=e}}function qe(e){const t=[];return ae(e.fields,((e,n)=>{const i=new $([e]);if(ze(n)){const e=qe(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new fe(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class He{static newInvalidDocument(e){return new He(e,0,F.min(),F.min(),F.min(),Be.empty(),0)}static newFoundDocument(e,t,n,i){return new He(e,1,t,F.min(),n,i,0)}static newNoDocument(e,t){return new He(e,2,t,F.min(),F.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,F.min(),F.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,i,s,r,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){this.position=e,this.inclusive=t}}function We(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?j.comparator(j.fromName(o.referenceValue),n.key):Ne(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Ke(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ae(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ye(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{}class Je extends Qe{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ot(e,t,n):"array-contains"===t?new ut(e,n):"in"===t?new ht(e,n):"not-in"===t?new dt(e,n):"array-contains-any"===t?new pt(e,n):new Je(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new at(e,n):new lt(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ne(t,this.value)):null!==t&&ke(this.value)===ke(t)&&this.matchesComparison(Ne(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class Ze extends Qe{static create(e,t){return new Ze(e,t)}matches(e){return et(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}}function et(e){return"and"===e.op}function tt(e){return nt(e)&&et(e)}function nt(e){for(const t of e.filters)if(t instanceof Ze)return!1;return!0}function it(e){if(e instanceof Je)return e.field.canonicalString()+e.op.toString()+Le(e.value);if(tt(e))return e.filters.map((e=>it(e))).join(",");{const t=e.filters.map((e=>it(e))).join(",");return`${e.op}(${t})`}}function st(e,t){return e instanceof Je?(n=e,(i=t)instanceof Je&&n.op===i.op&&n.field.isEqual(i.field)&&Ae(n.value,i.value)):e instanceof Ze?function(e,t){return t instanceof Ze&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&st(n,t.filters[i])),!0)}(e,t):void y();var n,i}function rt(e){return e instanceof Je?`${(t=e).field.canonicalString()} ${t.op} ${Le(t.value)}`:e instanceof Ze?function(e){return e.op.toString()+" {"+e.getFilters().map(rt).join(" ,")+"}"}(e):"Filter";var t}class ot extends Je{matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=j.fromName(n.referenceValue)}}class at extends Je{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=ct("in",t)}}class lt extends Je{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=ct("not-in",t)}}function ct(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>j.fromName(e.referenceValue)))}class ut extends Je{matches(e){const t=e.data.field(this.field);return Fe(t)&&Me(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class ht extends Je{matches(e){const t=e.data.field(this.field);return null!==t&&Me(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class dt extends Je{matches(e){if(Me(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Me(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class pt extends Je{matches(e){const t=e.data.field(this.field);return!(!Fe(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Me(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.dt=null}}function mt(e,t=null,n=[],i=[],s=null,r=null,o=null){return new ft(e,t,n,i,s,r,o)}function gt(e){const t=b(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>it(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),ee(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Le(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Le(e))).join(",")),t.dt=e}return t.dt}function vt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ye(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!st(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ke(e.startAt,t.startAt)&&Ke(e.endAt,t.endAt)}function yt(e){return j.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function bt(e,t,n,i,s,r,o,a){return new wt(e,t,n,i,s,r,o,a)}function Et(e){return new wt(e)}function Tt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function St(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function xt(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function It(e){return null!==e.collectionGroup}function Ct(e){const t=b(e);if(null===t.wt){t.wt=[];const e=xt(t),n=St(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Xe(e)),t.wt.push(new Xe($.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Xe($.keyField(),e))}}}return t.wt}function _t(e){const t=b(e);if(!t._t)if("F"===t.limitType)t._t=mt(t.path,t.collectionGroup,Ct(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Ct(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Xe(n.field,t))}const n=t.endAt?new Ge(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Ge(t.startAt.position,t.startAt.inclusive):null;t._t=mt(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t._t}function kt(e,t){t.getFirstInequalityField(),xt(e);const n=e.filters.concat([t]);return new wt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function At(e,t,n){return new wt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Mt(e,t){return vt(_t(e),_t(t))&&e.limitType===t.limitType}function Nt(e){return`${gt(_t(e))}|lt:${e.limitType}`}function Dt(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>rt(e))).join(", ")}]`),ee(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Le(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Le(e))).join(",")),`Target(${t})`}(_t(e))}; limitType=${e.limitType})`}function Lt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):j.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Ct(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=We(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,Ct(n),i)||n.endAt&&!function(e,t,n){const i=We(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,Ct(n),i)));var n,i}function Pt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ot(e){return(t,n)=>{let i=!1;for(const s of Ct(e)){const e=Rt(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function Rt(e,t,n){const i=e.field.isKeyField()?j.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?Ne(i,s):y()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return y()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ae(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return le(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new ce(j.comparator);function Ut(){return Vt}const zt=new ce(j.comparator);function $t(...e){let t=zt;for(const n of e)t=t.insert(n.key,n);return t}function jt(e){let t=zt;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Bt(){return Ht()}function qt(){return Ht()}function Ht(){return new Ft((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Gt=new ce(j.comparator),Wt=new de(j.comparator);function Kt(...e){let t=Wt;for(const n of e)t=t.add(n);return t}const Xt=new de(P);function Yt(){return Xt}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:te(t)?"-0":t}}function Jt(e){return{integerValue:""+e}}function Zt(e,t){return ne(t)?Jt(t):Qt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this._=void 0}}function tn(e,t,n){return e instanceof rn?on(e,t):e instanceof an?ln(e,t):n}function nn(e,t){var n,i;return e instanceof cn?Re(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null}class sn extends en{}class rn extends en{constructor(e){super(),this.elements=e}}function on(e,t){const n=hn(t);for(const t of e.elements)n.some((e=>Ae(e,t)))||n.push(t);return{arrayValue:{values:n}}}class an extends en{constructor(e){super(),this.elements=e}}function ln(e,t){let n=hn(t);for(const t of e.elements)n=n.filter((e=>!Ae(e,t)));return{arrayValue:{values:n}}}class cn extends en{constructor(e,t){super(),this.serializer=e,this.gt=t}}function un(e){return be(e.integerValue||e.doubleValue)}function hn(e){return Fe(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){this.version=e,this.transformResults=t}}class pn{static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function fn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class mn{}function gn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Cn(e.key,pn.none()):new En(e.key,e.data,pn.none());{const n=e.data,i=Be.empty();let s=new de($.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new Tn(e.key,i,new fe(s.toArray()),pn.none())}}function vn(e,t,n){var i;e instanceof En?function(e,t,n){const i=e.value.clone(),s=xn(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof Tn?function(e,t,n){if(!fn(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=xn(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Sn(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function yn(e,t,n,i){return e instanceof En?function(e,t,n,i){if(!fn(e.precondition,t))return n;const s=e.value.clone(),r=In(e.fieldTransforms,i,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof Tn?function(e,t,n,i){if(!fn(e.precondition,t))return n;const s=In(e.fieldTransforms,i,t),r=t.data;return r.setAll(Sn(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):(s=t,r=n,fn(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function wn(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=nn(i.transform,e||null);null!=s&&(null===n&&(n=Be.empty()),n.set(i.field,s))}return n||null}function bn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&O(n,i,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof rn&&i instanceof rn||n instanceof an&&i instanceof an?O(n.elements,i.elements,Ae):n instanceof cn&&i instanceof cn?Ae(n.gt,i.gt):n instanceof sn&&i instanceof sn);var n,i}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}class En extends mn{getFieldMask(){return null}constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Tn extends mn{getFieldMask(){return this.fieldMask}constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Sn(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function xn(e,t,n){const i=new Map;w(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,tn(o,a,n[s]))}return i}function In(e,t,n){const i=new Map;for(const a of e){const e=a.transform,l=n.data.field(a.field);i.set(a.field,(r=l,o=t,(s=e)instanceof sn?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Te(t)&&(t=Se(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,r):s instanceof rn?on(s,r):s instanceof an?ln(s,r):function(e,t){const n=nn(e,t),i=un(n)+un(e.gt);return Re(n)&&Re(e.gt)?Jt(i):Qt(e.serializer,i)}(s,r)))}var s,r,o;return i}class Cn extends mn{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class _n extends mn{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&vn(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=yn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=yn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=qt();return this.mutations.forEach((i=>{const s=e.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=t.has(i.key)?null:o;const a=gn(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(F.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Kt())}isEqual(e){return this.batchId===e.batchId&&O(this.mutations,e.mutations,((e,t)=>bn(e,t)))&&O(this.baseMutations,e.baseMutations,((e,t)=>bn(e,t)))}constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}}class An{static from(e,t,n){w(e.mutations.length===n.length);let i=Gt;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new An(e,t,n,i)}constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn,Ln;function Pn(e){switch(e){default:return y();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function On(e){if(void 0===e)return m("GRPC error has no .code"),E.UNKNOWN;switch(e){case Dn.OK:return E.OK;case Dn.CANCELLED:return E.CANCELLED;case Dn.UNKNOWN:return E.UNKNOWN;case Dn.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Dn.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Dn.INTERNAL:return E.INTERNAL;case Dn.UNAVAILABLE:return E.UNAVAILABLE;case Dn.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Dn.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Dn.NOT_FOUND:return E.NOT_FOUND;case Dn.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Dn.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Dn.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Dn.ABORTED:return E.ABORTED;case Dn.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Dn.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Dn.DATA_LOSS:return E.DATA_LOSS;default:return y()}}(Ln=Dn||(Dn={}))[Ln.OK=0]="OK",Ln[Ln.CANCELLED=1]="CANCELLED",Ln[Ln.UNKNOWN=2]="UNKNOWN",Ln[Ln.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ln[Ln.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ln[Ln.NOT_FOUND=5]="NOT_FOUND",Ln[Ln.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ln[Ln.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ln[Ln.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ln[Ln.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ln[Ln.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ln[Ln.ABORTED=10]="ABORTED",Ln[Ln.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ln[Ln.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ln[Ln.INTERNAL=13]="INTERNAL",Ln[Ln.UNAVAILABLE=14]="UNAVAILABLE",Ln[Ln.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn{static get instance(){return Fn}static getOrCreateInstance(){return null===Fn&&(Fn=new Rn),Fn}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let Fn=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new(0,l.Integer)([4294967295,4294967295],0);function zn(e){const t=Vn().encode(e),n=new(0,l.Md5);return n.update(t),new Uint8Array(n.digest())}function $n(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new(0,l.Integer)([n,i],0),new(0,l.Integer)([s,r],0)]}class jn{Et(e,t,n){let i=e.add(t.multiply(l.Integer.fromNumber(n)));return 1===i.compare(Un)&&(i=new(0,l.Integer)([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=zn(e),[n,i]=$n(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),r=new jn(s,i,t);return n.forEach((e=>r.insert(e))),r}insert(e){if(0===this.It)return;const t=zn(e),[n,i]=$n(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Bn(`Invalid padding: ${t}`);if(n<0)throw new Bn(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Bn(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Bn(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=l.Integer.fromNumber(this.It)}}class Bn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Hn.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new qn(F.min(),i,new ce(P),Ut(),Kt())}constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}}class Hn{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Hn(n,t,Kt(),Kt(),Kt())}constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t,n,i){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=i}}class Wn{constructor(e,t){this.targetId=e,this.Vt=t}}class Kn{constructor(e,t,n=ve.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Xn{get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Kt(),t=Kt(),n=Kt();return this.Dt.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:y()}})),new Hn(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Jn()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}constructor(){this.St=0,this.Dt=Jn(),this.Ct=ve.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}}class Yn{Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:y()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,i=e.Vt.count,s=this.se(n);if(s){const r=s.target;if(yt(r))if(0===i){const e=new j(r.path);this.Yt(n,e,He.newNoDocument(e,F.min()))}else w(1===i);else{const s=this.ie(n);if(s!==i){const i=this.re(e,s);if(0!==i){this.ee(n);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Rn.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var i,s,r,o,a,l;const c={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(c.bloomFilter={applied:0===e,hashCount:null!==(i=null==u?void 0:u.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(o=null===(r=null===(s=null==u?void 0:u.bits)||void 0===s?void 0:s.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(l=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==l?l:0}),c}(i,s,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:i}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=n;let a,l;try{a=Ee(s).toUint8Array()}catch(e){if(e instanceof me)return g("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{l=new jn(a,r,o)}catch(e){return g(e instanceof Bn?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===l.It?1:i!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const s=this.Gt.ue(),r=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.vt(r)||(this.Yt(e,n,null),i++)})),i}ce(e){const t=new Map;this.Qt.forEach(((n,i)=>{const s=this.se(i);if(s){if(n.current&&yt(s.target)){const t=new j(s.target.path);null!==this.jt.get(t)||this.ae(i,t)||this.Yt(i,t,He.newNoDocument(t,e))}n.Mt&&(t.set(i,n.Ot()),n.Ft())}}));let n=Kt();this.zt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const i=new qn(e,t,this.Wt,this.jt,n);return this.jt=Ut(),this.zt=Qn(),this.Wt=new ce(P),i}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Xn,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new de(P),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||f("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Xn),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ut(),this.zt=Qn(),this.Wt=new ce(P)}}function Qn(){return new ce(j.comparator)}function Jn(){return new ce(j.comparator)}const Zn={asc:"ASCENDING",desc:"DESCENDING"},ei={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ti={and:"AND",or:"OR"};class ni{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ii(e,t){return e.useProto3Json||ee(t)?t:{value:t}}function si(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ri(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function oi(e,t){return si(e,t.toTimestamp())}function ai(e){return w(!!e),F.fromTimestamp(function(e){const t=we(e);return new R(t.seconds,t.nanos)}(e))}function li(e,t){return(n=e,new U(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function ci(e){const t=U.fromString(e);return w(ki(t)),t}function ui(e,t){return li(e.databaseId,t.path)}function hi(e,t){const n=ci(t);if(n.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new j(mi(n))}function di(e,t){return li(e.databaseId,t)}function pi(e){const t=ci(e);return 4===t.length?U.emptyPath():mi(t)}function fi(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function mi(e){return w(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function gi(e,t,n){return{name:ui(e,t),fields:n.value.mapValue.fields}}function vi(e,t){let n;if(t instanceof En)n={update:gi(e,t.key,t.value)};else if(t instanceof Cn)n={delete:ui(e,t.key)};else if(t instanceof Tn)n={update:gi(e,t.key,t.data),updateMask:_i(t.fieldMask)};else{if(!(t instanceof _n))return y();n={verify:ui(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof sn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof rn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof an)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof cn)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw y()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(s=t.precondition).updateTime?{updateTime:oi(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:y())),n;var i,s}function yi(e,t){return{documents:[di(e,t.path)]}}function wi(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=di(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=di(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(e){if(0!==e.length)return Ci(Ze.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const r=function(e){if(0!==e.length)return e.map((e=>{return{field:xi((t=e).field),direction:Ti(t.dir)};var t}))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=ii(e,t.limit);var a,l;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt={before:!(l=t.endAt).inclusive,values:l.position}),n}function bi(e){let t=pi(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){w(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=function(e){const t=Ei(e);return t instanceof Ze&&tt(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Xe(Ii((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ee(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Ge(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Ge(n,t)}(n.endAt)),bt(t,s,o,r,a,"F",l,c)}function Ei(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ii(e.unaryFilter.field);return Je.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ii(e.unaryFilter.field);return Je.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ii(e.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ii(e.unaryFilter.field);return Je.create(s,"!=",{nullValue:"NULL_VALUE"});default:return y()}}(e):void 0!==e.fieldFilter?(n=e,Je.create(Ii(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,Ze.create(t.compositeFilter.filters.map((e=>Ei(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return y()}}(t.compositeFilter.op))):y();var t,n}function Ti(e){return Zn[e]}function Si(e){return ei[e]}function xi(e){return{fieldPath:e.canonicalString()}}function Ii(e){return $.fromServerFormat(e.fieldPath)}function Ci(e){return e instanceof Je?function(e){if("=="===e.op){if(Ue(e.value))return{unaryFilter:{field:xi(e.field),op:"IS_NAN"}};if(Ve(e.value))return{unaryFilter:{field:xi(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ue(e.value))return{unaryFilter:{field:xi(e.field),op:"IS_NOT_NAN"}};if(Ve(e.value))return{unaryFilter:{field:xi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(e.field),op:Si(e.op),value:e.value}}}(e):e instanceof Ze?function(e){const t=e.getFilters().map((e=>Ci(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,ti[n]),filters:t}};var n}(e):y()}function _i(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function ki(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{withSequenceNumber(e){return new Ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}constructor(e,t,n,i,s=F.min(),r=F.min(),o=ve.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.fe=e}}function Ni(e){const t=bi({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?At(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(be(e.integerValue));else if("doubleValue"in e){const n=be(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),te(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Ee(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?je(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):y()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),j.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}constructor(){}}Di.Ve=new Di;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{addToCollectionParentIndex(e,t){return this.rn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(G.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(G.min())}updateCollectionGroup(e,t,n){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}constructor(){this.rn=new Pi}}class Pi{add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new de(U.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new de(U.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Oi{static withCacheSize(e){return new Oi(e,Oi.DEFAULT_COLLECTION_PERCENTILE,Oi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi.DEFAULT_COLLECTION_PERCENTILE=10,Oi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oi.DEFAULT=new Oi(41943040,Oi.DEFAULT_COLLECTION_PERCENTILE,Oi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oi.DISABLED=new Oi(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ri{next(){return this.Nn+=2,this.Nn}static kn(){return new Ri(0)}static Mn(){return new Ri(-1)}constructor(e){this.Nn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Q.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new Ft((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&yn(n.mutation,e,fe.empty(),R.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Kt()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Kt()){const i=Bt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=$t();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Bt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Kt())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=Ut();const r=Ht(),o=Ht();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof Tn)?s=s.insert(t.key,t):void 0!==o?(r.set(t.key,o.mutation.getFieldMask()),yn(o.mutation,t,o.mutation.getFieldMask(),R.now())):r.set(t.key,fe.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Vi(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ht();let i=new ce(((e,t)=>e-t)),s=Kt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||fe.empty();o=s.applyToLocalView(r,o),n.set(e,o);const a=(i.get(s.batchId)||Kt()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=qt();l.forEach((e=>{if(!s.has(e)){const i=gn(t.get(e),n.get(e));null!==i&&c.set(e,i),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Q.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return i=t,j.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):It(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var i}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):Q.resolve(Bt());let o=-1,a=s;return r.next((t=>Q.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Q.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,Kt()))).next((e=>({batchId:o,changes:jt(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next((e=>{let t=$t();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let s=$t();return this.indexManager.getCollectionParents(e,i).next((r=>Q.forEach(r,(r=>{const o=(a=t,l=r.child(i),new wt(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,He.newInvalidDocument(i)))}));let n=$t();return e.forEach(((e,s)=>{const r=i.get(e);void 0!==r&&yn(r.mutation,s,fe.empty(),R.now()),Lt(t,s)&&(n=n.insert(e,s))})),n}))}constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{getBundleMetadata(e,t){return Q.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:ai(n.createTime)}),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,{name:(n=t).name,query:Ni(n.bundledQuery),readTime:ai(n.readTime)}),Q.resolve();var n}constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Bt();return Q.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.we(e,t,i)})),Q.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.ls.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Q.resolve()}getOverlaysForCollection(e,t,n){const i=Bt(),s=t.length+1,r=new j(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return Q.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new ce(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Bt(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Bt(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return Q.resolve(o)}we(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.ls.get(i.largestBatchId).delete(n.key);this.ls.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Mn(t,n));let s=this.ls.get(t);void 0===s&&(s=Kt(),this.ls.set(t,s)),this.ls.set(t,s.add(n.key))}constructor(){this.overlays=new ce(j.comparator),this.ls=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new Bi(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new Bi(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new j(new U([])),n=new Bi(t,e),i=new Bi(t,e+1),s=[];return this.ws.forEachInRange([n,i],(e=>{this.ys(e),s.push(e.key)})),s}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new j(new U([])),n=new Bi(t,e),i=new Bi(t,e+1);let s=Kt();return this.ws.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Bi(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.fs=new de(Bi.ds),this.ws=new de(Bi._s)}}class Bi{static ds(e,t){return j.comparator(e.key,t.key)||P(e.As,t.As)}static _s(e,t){return P(e.As,t.As)||j.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.As=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{checkEmpty(e){return Q.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new kn(s,t,n,i);this.mutationQueue.push(r);for(const t of i)this.Rs=this.Rs.add(new Bi(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Q.resolve(r)}lookupMutationBatch(e,t){return Q.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.bs(n),s=i<0?0:i;return Q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Bi(t,0),i=new Bi(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([n,i],(e=>{const t=this.Ps(e.As);s.push(t)})),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new de(P);return t.forEach((e=>{const t=new Bi(e,0),i=new Bi(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,i],(e=>{n=n.add(e.As)}))})),Q.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;j.isDocumentKey(s)||(s=s.child(""));const r=new Bi(new j(s),0);let o=new de(P);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.As)),!0)}),r),Q.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){w(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Q.forEach(t.mutations,(i=>{const s=new Bi(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new Bi(t,0),i=this.Rs.firstAfterOrEqual(n);return Q.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new de(Bi.ds)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Q.resolve(n?n.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let n=Ut();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():He.newInvalidDocument(e))})),Q.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Ut();const r=t.path,o=new j(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||W(H(o),n)<=0||(i.has(o.key)||Lt(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Q.resolve(s)}getAllFromCollectionGroup(e,t,n,i){y()}Cs(e,t){return Q.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Gi(this)}getSize(e){return Q.resolve(this.size)}constructor(e){this.Ds=e,this.docs=new ce(j.comparator),this.size=0}}class Gi extends Fi{applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(n)})),Q.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}constructor(e){super(),this.os=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Q.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Ri(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.Fn(t),Q.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.xs.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),Q.waitFor(s).next((()=>i))}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Q.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Q.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),Q.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Q.resolve(n)}containsKey(e,t){return Q.resolve(this.ks.containsKey(t))}constructor(e){this.persistence=e,this.xs=new Ft((e=>gt(e)),vt),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ji,this.targetCount=0,this.Ms=Ri.kn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $i,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new qi(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){f("MemoryPersistence","Starting transaction:",e);const i=new Xi(this.Os.next());return this.referenceDelegate.Us(),n(i).next((e=>this.referenceDelegate.Ks(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Gs(e,t){return Q.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.$s={},this.overlays={},this.Os=new Z(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Wi(this),this.indexManager=new Li,this.remoteDocumentCache=new Hi((e=>this.referenceDelegate.Ls(e))),this.serializer=new Mi(t),this.qs=new zi(this.serializer)}}class Xi extends X{constructor(e){super(),this.currentSequenceNumber=e}}class Yi{static zs(e){return new Yi(e)}get Ws(){if(this.js)return this.js;throw y()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Q.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.Ws,(n=>{const i=j.fromPath(n);return this.Hs(e,i).next((e=>{e||t.removeEntry(i,F.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Q.or([()=>Q.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}constructor(e){this.persistence=e,this.Qs=new ji,this.js=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi{static Li(e,t){let n=Kt(),i=Kt();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new Qi(e,t.fromCache,n,i)}constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.Ki(e,t).next((s=>s||this.Gi(e,t,i,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(Tt(t))return Q.resolve(null);let n=_t(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=At(t,null,"F"),n=_t(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=Kt(...i);return this.Ui.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.ji(t,i);return this.zi(t,r,s,n.readTime)?this.Ki(e,At(t,null,"F")):this.Wi(e,r,t,n)}))))})))))}Gi(e,t,n,i){return Tt(t)||i.isEqual(F.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((s=>{const r=this.ji(t,s);return this.zi(t,r,n,i)?this.Qi(e,t):(p()<=o.LogLevel.DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dt(t)),this.Wi(e,r,t,q(i,-1)))}))}ji(e,t){let n=new de(Ot(e));return t.forEach(((t,i)=>{Lt(e,i)&&(n=n.add(i))})),n}zi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return p()<=o.LogLevel.DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Dt(t)),this.Ui.getDocumentsMatchingQuery(e,t,G.min())}Wi(e,t,n,i){return this.Ui.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.qi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ui(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}constructor(e,t,n,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new ce(P),this.Yi=new Ft((e=>gt(e)),vt),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}}function es(e,t,n,i){return new Zi(e,t,n,i)}async function ts(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=Kt();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function ns(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function is(e,t,n){let i=Kt(),s=Kt();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Ut();return n.forEach(((n,r)=>{const o=e.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(F.min())?(t.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),i=i.insert(n,r)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{nr:i,sr:s}}))}function ss(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function rs(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Bs.getTargetData(e,t).next((s=>s?(i=s,Q.resolve(i)):n.Bs.allocateTargetId(e).next((s=>(i=new Ai(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Ji.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function os(e,t,n){const i=b(e),s=i.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!J(e))throw e;f("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Ji=i.Ji.remove(t),i.Yi.delete(s.target)}function as(e,t,n){const i=b(e);let s=F.min(),r=Kt();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=b(e),s=i.Yi.get(n);return void 0!==s?Q.resolve(i.Ji.get(s)):i.Bs.getTargetData(t,n)}(i,e,_t(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>i.Hi.getDocumentsMatchingQuery(e,t,n?s:F.min(),n?r:Kt()))).next((e=>(ls(i,Pt(t),e),{documents:e,ir:r})))))}function ls(e,t,n){let i=e.Xi.get(t)||F.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Xi.set(t,i)}class cs{lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=Yt()}}class us{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new cs,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Hr=new cs,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps=null;function fs(){return null===ps?ps=268435456+Math.round(2147483648*Math.random()):ps++,"0x"+ps.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ms={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}constructor(e){this.ro=e.ro,this.oo=e.oo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="WebChannelConnection";class ys extends class{get po(){return!1}Io(e,t,n,i,s){const r=fs(),o=this.To(e,t);f("RestConnection",`Sending RPC '${e}' ${r}:`,o,n);const a={};return this.Eo(a,i,s),this.Ao(e,o,a,n).then((t=>(f("RestConnection",`Received RPC '${e}' ${r}: `,t),t)),(t=>{throw g("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,i,s,r){return this.Io(e,t,n,i,s)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+h,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=ms[e];return`${this.mo}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{Ao(e,t,n,i){const s=fs();return new Promise(((r,o)=>{const a=new(0,l.XhrIo);a.setWithCredentials(!0),a.listenOnce(l.EventType.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case l.ErrorCode.NO_ERROR:const t=a.getResponseJson();f(vs,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),r(t);break;case l.ErrorCode.TIMEOUT:f(vs,`RPC '${e}' ${s} timed out`),o(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case l.ErrorCode.HTTP_ERROR:const n=a.getStatus();if(f(vs,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);o(new T(e,t.message))}else o(new T(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new T(E.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f(vs,`RPC '${e}' ${s} completed.`)}}));const c=JSON.stringify(i);f(vs,`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const i=fs(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=(0,l.createWebChannelTransport)(),o=(0,l.getStatEventTarget)(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new(0,l.FetchXmlHttpFactory)({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=s.join("");f(vs,`Creating RPC '${e}' stream ${i}: ${u}`,a);const h=r.createWebChannel(u,a);let d=!1,p=!1;const m=new gs({ro:t=>{p?f(vs,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(f(vs,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),f(vs,`RPC '${e}' stream ${i} sending:`,t),h.send(t))},oo:()=>h.close()}),v=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return v(h,l.WebChannel.EventType.OPEN,(()=>{p||f(vs,`RPC '${e}' stream ${i} transport opened.`)})),v(h,l.WebChannel.EventType.CLOSE,(()=>{p||(p=!0,f(vs,`RPC '${e}' stream ${i} transport closed`),m.wo())})),v(h,l.WebChannel.EventType.ERROR,(t=>{p||(p=!0,g(vs,`RPC '${e}' stream ${i} transport errored:`,t),m.wo(new T(E.UNAVAILABLE,"The operation could not be completed")))})),v(h,l.WebChannel.EventType.MESSAGE,(t=>{var n;if(!p){const s=t.data[0];w(!!s);const r=s,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){f(vs,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=Dn[e];if(void 0!==t)return On(t)}(t),s=o.message;void 0===n&&(n=E.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),p=!0,m.wo(new T(n,s)),h.close()}else f(vs,`RPC '${e}' stream ${i} received:`,s),m._o(s)}})),v(o,l.Event.STAT_EVENT,(t=>{t.stat===l.Stat.PROXY?f(vs,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===l.Stat.NOPROXY&&f(vs,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{m.fo()}),0),m}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(e){return new ni(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-n);i>0&&f("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}constructor(e,t,n=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return f("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,i,s,r,o,a){this.ii=e,this.$o=n,this.Oo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Es(e,t)}}class Ss extends Ts{eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:y(),r=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(w(void 0===t||"string"==typeof t),ve.fromBase64String(t||"")):(w(void 0===t||t instanceof Uint8Array),ve.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?E.UNKNOWN:On(e.code);return new T(t,e.message||"")}(a);n=new Kn(s,r,o,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=hi(e,i.document.name),r=ai(i.document.updateTime),o=i.document.createTime?ai(i.document.createTime):F.min(),a=new Be({mapValue:{fields:i.document.fields}}),l=He.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Gn(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=hi(e,i.document),r=i.readTime?ai(i.readTime):F.min(),o=He.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Gn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=hi(e,i.document),r=i.removedTargetIds||[];n=new Gn([],r,s,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:s}=e,r=new Nn(i,s),o=e.targetId;n=new Wn(o,r)}}var i;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return F.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?F.min():t.readTime?ai(t.readTime):F.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=fi(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=yt(i)?{documents:yi(e,i)}:{query:wi(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ri(e,t.resumeToken);const i=ii(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(F.min())>0){n.readTime=si(e,t.snapshotVersion.toTimestamp());const i=ii(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return y()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=fi(this.serializer),t.removeTarget=e,this.Wo(t)}constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s}}class xs extends Ts{get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(w(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(w(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?ai(e.updateTime):ai(t);return n.isEqual(F.min())&&(n=ai(t)),new dn(n,e.transformResults||[])}(e,n)))):[]),s=ai(e.commitTime);return this.listener.cu(s,i)}var t,n;return w(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=fi(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>vi(this.serializer,e)))};this.Wo(t)}constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s,this.ru=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends class{}{fu(){if(this.lu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Io(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())}))}vo(e,t,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.vo(e,t,n,s,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.lu=!1}}class Cs{gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(m(t),this.mu=!1):f("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Rs(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=b(e);t.vu.add(4),await As(t),t.bu.set("Unknown"),t.vu.delete(4),await ks(t)}(this))}))})),this.bu=new Cs(n,i)}}async function ks(e){if(Rs(e))for(const t of e.Ru)await t(!0)}async function As(e){for(const t of e.Ru)await t(!1)}function Ms(e,t){const n=b(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Os(n)?Ps(n):er(n).Ko()&&Ds(n,t))}function Ns(e,t){const n=b(e),i=er(n);n.Au.delete(t),i.Ko()&&Ls(n,t),0===n.Au.size&&(i.Ko()?i.jo():Rs(n)&&n.bu.set("Unknown"))}function Ds(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}er(e).su(t)}function Ls(e,t){e.Vu.qt(t),er(e).iu(t)}function Ps(e){e.Vu=new Yn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),er(e).start(),e.bu.gu()}function Os(e){return Rs(e)&&!er(e).Uo()&&e.Au.size>0}function Rs(e){return 0===b(e).vu.size}function Fs(e){e.Vu=void 0}async function Vs(e){e.Au.forEach(((t,n)=>{Ds(e,t)}))}async function Us(e,t){Fs(e),Os(e)?(e.bu.Iu(t),Ps(e)):e.bu.set("Unknown")}async function zs(e,t,n){if(e.bu.set("Online"),t instanceof Kn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.Au.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.Au.delete(i),e.Vu.removeTarget(i))}(e,t)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await $s(e,n)}else if(t instanceof Gn?e.Vu.Ht(t):t instanceof Wn?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(F.min()))try{const t=await ns(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Au.get(i);s&&e.Au.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.Au.get(t);if(!i)return;e.Au.set(t,i.withResumeToken(ve.EMPTY_BYTE_STRING,i.snapshotVersion)),Ls(e,t);const s=new Ai(i.target,t,n,i.sequenceNumber);Ds(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){f("RemoteStore","Failed to raise snapshot:",t),await $s(e,t)}}async function $s(e,t,n){if(!J(t))throw t;e.vu.add(1),await As(e),e.bu.set("Offline"),n||(n=()=>ns(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await ks(e)}))}function js(e,t){return t().catch((n=>$s(e,n,t)))}async function Bs(e){const t=b(e),n=tr(t);let i=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;qs(t);)try{const e=await ss(t.localStore,i);if(null===e){0===t.Eu.length&&n.jo();break}i=e.batchId,Hs(t,e)}catch(e){await $s(t,e)}Gs(t)&&Ws(t)}function qs(e){return Rs(e)&&e.Eu.length<10}function Hs(e,t){e.Eu.push(t);const n=tr(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Gs(e){return Rs(e)&&!tr(e).Uo()&&e.Eu.length>0}function Ws(e){tr(e).start()}async function Ks(e){tr(e).hu()}async function Xs(e){const t=tr(e);for(const n of e.Eu)t.uu(n.mutations)}async function Ys(e,t,n){const i=e.Eu.shift(),s=An.from(i,t,n);await js(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Bs(e)}async function Qs(e,t){t&&tr(e).ou&&await async function(e,t){if(Pn(n=t.code)&&n!==E.ABORTED){const n=e.Eu.shift();tr(e).Qo(),await js(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Bs(e)}var n}(e,t),Gs(e)&&Ws(e)}async function Js(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const i=Rs(n);n.vu.add(3),await As(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await ks(n)}async function Zs(e,t){const n=b(e);t?(n.vu.delete(2),await ks(n)):t||(n.vu.add(2),await As(n),n.bu.set("Unknown"))}function er(e){return e.Su||(e.Su=function(e,t,n){const i=b(e);return i.fu(),new Ss(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:Vs.bind(null,e),ao:Us.bind(null,e),nu:zs.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Os(e)?Ps(e):e.bu.set("Unknown")):(await e.Su.stop(),Fs(e))}))),e.Su}function tr(e){return e.Du||(e.Du=function(e,t,n){const i=b(e);return i.fu(),new xs(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:Ks.bind(null,e),ao:Qs.bind(null,e),au:Xs.bind(null,e),cu:Ys.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await Bs(e)):(await e.Du.stop(),e.Eu.length>0&&(f("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class nr{static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new nr(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new S,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function ir(e,t){if(m("AsyncQueue",`${t}: ${e}`),J(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{static emptySet(e){return new sr(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sr))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new sr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||j.comparator(t.key,n.key):(e,t)=>j.comparator(e.key,t.key),this.keyedMap=$t(),this.sortedSet=new ce(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):y():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Cu=new ce(j.comparator)}}class or{static fromInitialDocuments(e,t,n,i,s){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new or(e,t,sr.emptySet(t),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,i,s,r,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.Nu=void 0,this.listeners=[]}}class lr{constructor(){this.queries=new Ft((e=>Nt(e)),Mt),this.onlineState="Unknown",this.ku=new Set}}async function cr(e,t){const n=b(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new ar),s)try{r.Nu=await n.onListen(i)}catch(e){const n=ir(e,`Initialization of query '${Dt(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&pr(n)}async function ur(e,t){const n=b(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function hr(e,t){const n=b(e);let i=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.$u(e)&&(i=!0);s.Nu=e}}i&&pr(n)}function dr(e,t,n){const i=b(e),s=i.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);i.queries.delete(t)}function pr(e){e.ku.forEach((e=>{e.next()}))}class fr{$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new or(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(e){this.key=e}}class gr{constructor(e){this.key=e}}class vr{get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new rr,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const c=i.get(e),u=Lt(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),p=!0):this.rc(c,u)||(n.track({type:2,doc:u}),p=!0,(a&&this.tc(u,a)>0||l&&this.tc(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),p=!0):c&&!u&&(n.track({type:1,doc:c}),p=!0,(a||l)&&(o=!0)),p&&(u?(r=r.add(u),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{ec:r,ic:n,zi:o,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const r=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==s.length||a?{snapshot:new or(this.query,e.ec,i,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new rr,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Kt(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new gr(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new mr(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Kt();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return or.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Kt(),this.mutatedKeys=Kt(),this.tc=Ot(e),this.ec=new sr(this.tc)}}class yr{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class wr{constructor(e){this.key=e,this.fc=!1}}class br{get isPrimaryClient(){return!0===this.vc}constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new Ft((e=>Nt(e)),Mt),this._c=new Map,this.mc=new Set,this.gc=new ce(j.comparator),this.yc=new Map,this.Ic=new ji,this.Tc={},this.Ec=new Map,this.Ac=Ri.Mn(),this.onlineState="Unknown",this.vc=void 0}}async function Er(e,t){const n=Ur(e);let i,s;const r=n.wc.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const e=await rs(n.localStore,_t(t)),r=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await Tr(n,t,i,"current"===r,e.resumeToken),n.isPrimaryClient&&Ms(n.remoteStore,e)}return s}async function Tr(e,t,n,i,s){e.Rc=(t,n,i)=>async function(e,t,n,i){let s=t.view.sc(n);s.zi&&(s=await as(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,s))));const r=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,r);return Lr(e,t.targetId,o.cc),o.snapshot}(e,t,n,i);const r=await as(e.localStore,t,!0),o=new vr(t,r.ir),a=o.sc(r.documents),l=Hn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,l);Lr(e,n,c.cc);const u=new yr(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Sr(e,t){const n=b(e),i=n.wc.get(t),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter((e=>!Mt(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await os(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Ns(n.remoteStore,i.targetId),Nr(n,i.targetId)})).catch(Y)):(Nr(n,i.targetId),await os(n.localStore,i.targetId,!0))}async function xr(e,t){const n=b(e);try{const e=await function(e,t){const n=b(e),i=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const o=[];t.targetChanges.forEach(((r,a)=>{const l=s.get(a);if(!l)return;o.push(n.Bs.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,r.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);var u,h,d;null!==t.targetMismatches.get(a)?c=c.withResumeToken(ve.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,i)),s=s.insert(a,c),h=c,d=r,(0===(u=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Bs.updateTargetData(e,c))}));let a=Ut(),l=Kt();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(is(e,r,t.documentUpdates).next((e=>{a=e.nr,l=e.sr}))),!i.isEqual(F.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return Q.waitFor(o).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Ji=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.yc.get(t);i&&(w(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.fc=!0:e.modifiedDocuments.size>0?w(i.fc):e.removedDocuments.size>0&&(w(i.fc),i.fc=!1))})),await Rr(n,e,t)}catch(e){await Y(e)}}function Ir(e,t,n){const i=b(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.wc.forEach(((n,i)=>{const s=i.view.Mu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=b(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(i=!0)})),i&&pr(n)}(i.eventManager,t),e.length&&i.dc.nu(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Cr(e,t,n){const i=b(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.yc.get(t),r=s&&s.key;if(r){let e=new ce(j.comparator);e=e.insert(r,He.newNoDocument(r,F.min()));const n=Kt().add(r),s=new qn(F.min(),new Map,new ce(P),e,n);await xr(i,s),i.gc=i.gc.remove(r),i.yc.delete(t),Or(i)}else await os(i.localStore,t,!1).then((()=>Nr(i,t,n))).catch(Y)}async function _r(e,t){const n=b(e),i=t.batch.batchId;try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=Q.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);w(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Kt();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);Mr(n,i,null),Ar(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Rr(n,e)}catch(e){await Y(e)}}async function kr(e,t,n){const i=b(e);try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(w(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Mr(i,t,n),Ar(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Rr(i,e)}catch(e){await Y(e)}}function Ar(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Mr(e,t,n){const i=b(e);let s=i.Tc[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.Tc[i.currentUser.toKey()]=s}}function Nr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e._c.get(t))e.wc.delete(i),n&&e.dc.Pc(i,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Dr(e,t)}))}function Dr(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Ns(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Or(e))}function Lr(e,t,n){for(const i of n)i instanceof mr?(e.Ic.addReference(i.key,t),Pr(e,i)):i instanceof gr?(f("SyncEngine","Document no longer in limbo: "+i.key),e.Ic.removeReference(i.key,t),e.Ic.containsKey(i.key)||Dr(e,i.key)):y()}function Pr(e,t){const n=t.key,i=n.path.canonicalString();e.gc.get(n)||e.mc.has(i)||(f("SyncEngine","New document in limbo: "+n),e.mc.add(i),Or(e))}function Or(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new j(U.fromString(t)),i=e.Ac.next();e.yc.set(i,new wr(n)),e.gc=e.gc.insert(n,i),Ms(e.remoteStore,new Ai(_t(Et(n.path)),i,"TargetPurposeLimboResolution",Z.ct))}}async function Rr(e,t,n){const i=b(e),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach(((e,a)=>{o.push(i.Rc(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=Qi.Li(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.dc.nu(s),await async function(e,t){const n=b(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Q.forEach(t,(t=>Q.forEach(t.Fi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>Q.forEach(t.Bi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!J(e))throw e;f("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(t,s)}}}(i.localStore,r))}async function Fr(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){f("SyncEngine","User change. New user:",t.toKey());const e=await ts(n.localStore,t);n.currentUser=t,(i=n).Ec.forEach((e=>{e.forEach((e=>{e.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.Ec.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Rr(n,e.er)}var i}function Vr(e,t){const n=b(e),i=n.yc.get(t);if(i&&i.fc)return Kt().add(i.key);{let e=Kt();const i=n._c.get(t);if(!i)return e;for(const t of i){const i=n.wc.get(t);e=e.unionWith(i.view.nc)}return e}}function Ur(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=xr.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vr.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Cr.bind(null,t),t.dc.nu=hr.bind(null,t.eventManager),t.dc.Pc=dr.bind(null,t.eventManager),t}function zr(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=_r.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kr.bind(null,t),t}class $r{async initialize(e){this.serializer=bs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return es(this.persistence,new Ji,e.initialUser,this.serializer)}createPersistence(e){return new Ki(Yi.zs,this.serializer)}createSharedClientState(e){return new us}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class jr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ir(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fr.bind(null,this.syncEngine),await Zs(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lr}createDatastore(e){const t=bs(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new ys(i));var i,s,r;return s=e.authCredentials,r=e.appCheckCredentials,new Is(s,r,n,t)}createRemoteStore(e){var t,n,i,s,r;return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>Ir(this.syncEngine,e,0),r=ds.D()?new ds:new hs,new _s(t,n,i,s,r)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new br(e,t,n,i,s,r);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);f("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await As(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br{next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):m("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new S;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ir(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=u.UNAUTHENTICATED,this.clientId=L.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{f("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(f("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function Hr(e,t){e.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await ts(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Gr(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Kr(e);f("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>Js(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Js(t.remoteStore,n))),e._onlineComponents=t}function Wr(e){return"FirebaseError"===e.name?e.code===E.FAILED_PRECONDITION||e.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Kr(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){f("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Wr(n))throw n;g("Error using user provided cache. Falling back to memory cache: "+n),await Hr(e,new $r)}}else f("FirestoreClient","Using default OfflineComponentProvider"),await Hr(e,new $r);return e._offlineComponents}async function Xr(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(f("FirestoreClient","Using user provided OnlineComponentProvider"),await Gr(e,e._uninitializedComponentsProvider._online)):(f("FirestoreClient","Using default OnlineComponentProvider"),await Gr(e,new jr))),e._onlineComponents}function Yr(e){return Xr(e).then((e=>e.syncEngine))}async function Qr(e){const t=await Xr(e),n=t.eventManager;return n.onListen=Er.bind(null,t.syncEngine),n.onUnlisten=Sr.bind(null,t.syncEngine),n}function Jr(e,t,n={}){const i=new S;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new Br({next:r=>{t.enqueueAndForget((()=>ur(e,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),o=new fr(Et(n.path),r,{includeMetadataChanges:!0,Ku:!0});return cr(e,o)}(await Qr(e),e.asyncQueue,t,n,i))),i.promise}function Zr(e,t,n={}){const i=new S;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new Br({next:n=>{t.enqueueAndForget((()=>ur(e,o))),n.fromCache&&"server"===i.source?s.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new fr(n,r,{includeMetadataChanges:!0,Ku:!0});return cr(e,o)}(await Qr(e),e.asyncQueue,t,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eo(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const to=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e,t,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function io(e){if(!j.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function so(e){if(j.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ro(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":y()}function oo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ro(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao{isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new T(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eo(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new T(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}}class lo{get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ao(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new I;switch(e.type){case"firstParty":return new A(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=to.get(e);t&&(f("ComponentProvider","Removing Datastore"),to.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ao({}),this._settingsFrozen=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ho(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new co(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class uo{withConverter(e){return new uo(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class ho extends uo{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new co(this.firestore,null,new j(e))}withConverter(e){return new ho(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,Et(n)),this._path=n,this.type="collection"}}function po(e,t,...n){if(e=(0,a.getModularInstance)(e),no("collection","path",t),e instanceof lo){const i=U.fromString(t,...n);return so(i),new ho(e,null,i)}{if(!(e instanceof co||e instanceof ho))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(U.fromString(t,...n));return so(i),new ho(e.firestore,null,i)}}function fo(e,t,...n){if(e=(0,a.getModularInstance)(e),1===arguments.length&&(t=L.A()),no("doc","path",t),e instanceof lo){const i=U.fromString(t,...n);return io(i),new co(e,null,new j(i))}{if(!(e instanceof co||e instanceof ho))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(U.fromString(t,...n));return io(i),new co(e.firestore,e instanceof ho?e.converter:null,new j(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo{get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=ws();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new S;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!J(e))throw e;f("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;throw m("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=nr.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(i),i}Zc(){this.Wc&&y()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Es(this,"async_queue_retry"),this.Xc=()=>{const e=ws();e&&f("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=ws();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}}class go extends lo{_terminate(){return this._firestoreClient||wo(this),this._firestoreClient.terminate()}constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new mo,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function vo(e,t){const n="object"==typeof e?e:(0,i.getApp)(),s="string"==typeof e?e:t||"(default)",r=(0,i._getProvider)(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const e=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");e&&function(e,t,n,i={}){var s;const r=(e=oo(e,lo))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=u.MOCK_USER;else{t=(0,a.createMockUserToken)(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(r)}e._authCredentials=new C(new x(t,n))}}(r,...e)}return r}function yo(e){return e._firestoreClient||wo(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function wo(e){var t,n,i;const s=e._freezeSettings(),r=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,new Ie(o,a,l,(c=s).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,eo(c.experimentalLongPollingOptions),c.useFetchStreams));var o,a,l,c;e._firestoreClient=new qr(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{static fromBase64String(e){try{return new bo(ve.fromBase64String(e))}catch(e){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new bo(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=/^__.*__$/;class Io{toMutation(e,t){return null!==this.fieldMask?new Tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new En(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}class Co{toMutation(e,t){return new Tn(e,this.data,this.fieldMask,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function _o(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class ko{get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ko(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.fa(e),i}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Bo(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(_o(this.ca)&&xo.test(e))throw this._a('Document fields cannot begin and end with "__"')}constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=r||[]}}class Ao{ya(e,t,n,i=!1){return new ko({ca:e,methodName:t,ga:n,path:$.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||bs(e)}}function Mo(e){const t=e._freezeSettings(),n=bs(e._databaseId);return new Ao(e._databaseId,!!t.ignoreUndefinedProperties,n)}function No(e,t,n,i,s,r={}){const o=e.ya(r.merge||r.mergeFields?2:0,t,n,s);Uo("Data must be an object, but it was:",o,i);const a=Fo(i,o);let l,c;if(r.merge)l=new fe(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=zo(t,i,n);if(!o.contains(s))throw new T(E.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);qo(e,s)||e.push(s)}l=new fe(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new Io(new Be(a),l,c)}class Do extends To{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Do}}function Lo(e,t,n,i){const s=e.ya(1,t,n);Uo("Data must be an object, but it was:",s,i);const r=[],o=Be.empty();ae(i,((e,i)=>{const l=jo(t,e,n);i=(0,a.getModularInstance)(i);const c=s.da(l);if(i instanceof Do)r.push(l);else{const e=Ro(i,c);null!=e&&(r.push(l),o.set(l,e))}}));const l=new fe(r);return new Co(o,l,s.fieldTransforms)}function Po(e,t,n,i,s,r){const o=e.ya(1,t,n),l=[zo(t,i,n)],c=[s];if(r.length%2!=0)throw new T(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<r.length;e+=2)l.push(zo(t,r[e])),c.push(r[e+1]);const u=[],h=Be.empty();for(let e=l.length-1;e>=0;--e)if(!qo(u,l[e])){const t=l[e];let n=c[e];n=(0,a.getModularInstance)(n);const i=o.da(t);if(n instanceof Do)u.push(t);else{const e=Ro(n,i);null!=e&&(u.push(t),h.set(t,e))}}const d=new fe(u);return new Co(h,d,o.fieldTransforms)}function Oo(e,t,n,i=!1){return Ro(n,e.ya(i?4:3,t))}function Ro(e,t){if(Vo(e=(0,a.getModularInstance)(e)))return Uo("Unsupported field value:",t,e),Fo(e,t);if(e instanceof To)return function(e,t){if(!_o(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=Ro(s,t.wa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Zt(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=R.fromDate(e);return{timestampValue:si(t.serializer,n)}}if(e instanceof R){const n=new R(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:si(t.serializer,n)}}if(e instanceof So)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof bo)return{bytesValue:ri(t.serializer,e._byteString)};if(e instanceof co){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:li(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${ro(e)}`)}(e,t)}function Fo(e,t){const n={};return le(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ae(e,((e,i)=>{const s=Ro(i,t.ha(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Vo(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof R||e instanceof So||e instanceof bo||e instanceof co||e instanceof To)}function Uo(e,t,n){if(!Vo(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=ro(n);throw"an object"===i?t._a(e+" a custom object"):t._a(e+" "+i)}var i}function zo(e,t,n){if((t=(0,a.getModularInstance)(t))instanceof Eo)return t._internalPath;if("string"==typeof t)return jo(e,t);throw Bo("Field path arguments must be of type string or ",e,!1,void 0,n)}const $o=new RegExp("[~\\*/\\[\\]]");function jo(e,t,n){if(t.search($o)>=0)throw Bo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Eo(...t.split("."))._internalPath}catch(i){throw Bo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Bo(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new T(E.INVALID_ARGUMENT,a+e+l)}function qo(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{get id(){return this._key.path.lastSegment()}get ref(){return new co(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Go(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wo("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}}class Go extends Ho{data(){return super.data()}}function Wo(e,t){return"string"==typeof t?jo(e,t):t instanceof Eo?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xo{}class Yo extends Xo{}function Qo(e,t,...n){let i=[];t instanceof Xo&&i.push(t),i=i.concat(n),function(e){const t=e.filter((e=>e instanceof ea)).length,n=e.filter((e=>e instanceof Jo)).length;if(t>1||t>0&&n>0)throw new T(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const t of i)e=t._apply(e);return e}class Jo extends Yo{static _create(e,t,n){return new Jo(e,t,n)}_apply(e){const t=this._parse(e);return ia(e._query,t),new uo(e.firestore,e.converter,kt(e._query,t))}_parse(e){const t=Mo(e.firestore);return function(e,t,n,i,s,r,o){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){na(o,r);const t=[];for(const n of o)t.push(ta(i,e,n));a={arrayValue:{values:t}}}else a=ta(i,e,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||na(o,r),a=Oo(n,"where",o,"in"===r||"not-in"===r);return Je.create(s,r,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}}function Zo(e,t,n){const i=t,s=Wo("where",e);return Jo._create(s,i,n)}class ea extends Xo{static _create(e,t){return new ea(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Ze.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const i=t.getFlattenedFilters();for(const e of i)ia(n,e),n=kt(n,e)}(e._query,t),new uo(e.firestore,e.converter,kt(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(e,t){super(),this.type=e,this._queryConstraints=t}}function ta(e,t,n){if("string"==typeof(n=(0,a.getModularInstance)(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!It(t)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(U.fromString(n));if(!j.isDocumentKey(i))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Oe(e,new j(i))}if(n instanceof co)return Oe(e,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ro(n)}.`)}function na(e,t){if(!Array.isArray(e)||0===e.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ia(e,t){if(t.isInequality()){const n=xt(e),i=t.field;if(null!==n&&!n.isEqual(i))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${i.toString()}'`);const s=St(e);null!==s&&sa(e,i,s)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function sa(e,t,n){if(!n.isEqual(t))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ra{convertValue(e,t="none"){switch(ke(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ee(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ae(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new So(be(e.latitude),be(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Se(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(xe(e));default:return null}}convertTimestamp(e){const t=we(e);return new R(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=U.fromString(e);w(ki(n));const i=new Ce(n.get(1),n.get(3)),s=new j(n.popFirst(5));return i.isEqual(t)||m(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class aa{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class la extends Ho{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Wo("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}}class ca extends la{data(e={}){return super.data(e)}}class ua{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ca(this._firestore,this._userDataWriter,n.key,n,new aa(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new ca(e._firestore,e._userDataWriter,n.doc.key,n.doc,new aa(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new ca(e._firestore,e._userDataWriter,t.doc.key,t.doc,new aa(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,r=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:ha(t.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new aa(i.hasPendingWrites,i.fromCache),this.query=n}}function ha(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function da(e){e=oo(e,co);const t=oo(e.firestore,go);return Jr(yo(t),e._key).then((n=>ya(t,e,n)))}class pa extends ra{convertBytes(e){return new bo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new co(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function fa(e){e=oo(e,uo);const t=oo(e.firestore,go),n=yo(t),i=new pa(t);return Ko(e._query),Zr(n,e._query).then((n=>new ua(t,i,e,n)))}function ma(e,t,n){e=oo(e,co);const i=oo(e.firestore,go),s=oa(e.converter,t,n);return va(i,[No(Mo(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,pn.none())])}function ga(e,t,n,...i){e=oo(e,co);const s=oo(e.firestore,go),r=Mo(s);let o;return o="string"==typeof(t=(0,a.getModularInstance)(t))||t instanceof Eo?Po(r,"updateDoc",e._key,t,n,i):Lo(r,"updateDoc",e._key,t),va(s,[o.toMutation(e._key,pn.exists(!0))])}function va(e,t){return function(e,t){const n=new S;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=zr(e);try{const e=await function(e,t){const n=b(e),i=R.now(),s=t.reduce(((e,t)=>e.add(t.key)),Kt());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ut(),l=Kt();return n.Zi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const o=[];for(const e of t){const t=wn(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new Tn(e.key,t,qe(t.value.mapValue),pn.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:jt(r)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Tc[e.currentUser.toKey()];i||(i=new ce(P)),i=i.insert(t,n),e.Tc[e.currentUser.toKey()]=i}(i,e.batchId,n),await Rr(i,e.changes),await Bs(i.remoteStore)}catch(e){const t=ir(e,"Failed to persist write");n.reject(t)}}(await Yr(e),t,n))),n.promise}(yo(e),t)}function ya(e,t,n){const i=n.docs.get(t._key),s=new pa(e);return new la(e,s,t._key,i,new aa(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){var n;n=i.SDK_VERSION,h=n,(0,i._registerComponent)(new(0,s.Component)("firestore",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new go(new _(e.getProvider("auth-internal")),new N(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ce(e.options.projectId,t)}(s,n),s);return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(c,"3.12.0",e),(0,i.registerVersion)(c,"3.12.0","esm2017")}()})),r.register("4bwHs",(function(t,i){e(t.exports,"createWebChannelTransport",(function(){return vi})),e(t.exports,"getStatEventTarget",(function(){return yi})),e(t.exports,"ErrorCode",(function(){return wi})),e(t.exports,"EventType",(function(){return bi})),e(t.exports,"Event",(function(){return Ei})),e(t.exports,"Stat",(function(){return Ti})),e(t.exports,"FetchXmlHttpFactory",(function(){return Si})),e(t.exports,"WebChannel",(function(){return xi})),e(t.exports,"XhrIo",(function(){return Ii})),e(t.exports,"Md5",(function(){return Ci})),e(t.exports,"Integer",(function(){return _i}));var s,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},o={},a=a||{},l=r||self;function c(){}function u(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function h(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var d="closure_uid_"+(1e9*Math.random()>>>0),p=0;function f(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:m).apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function w(){this.s=this.s,this.o=this.o}w.prototype.s=!1,w.prototype.ra=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++p))},w.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function E(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function T(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(u(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let s=0;s<i;s++)e[t+s]=n[s]}else e.push(n)}}function S(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{l.addEventListener("test",c,t),l.removeEventListener("test",c,t)}catch(e){}return e}();function I(e){return/^[\s\xa0]*$/.test(e)}var C=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function _(e,t){return e<t?-1:e>t?1:0}function k(){var e=l.navigator;return e&&(e=e.userAgent)?e:""}function A(e){return-1!=k().indexOf(e)}function M(e){return M[" "](e),e}function N(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}M[" "]=c;var D,L,P=A("Opera"),O=A("Trident")||A("MSIE"),R=A("Edge"),F=R||O,V=A("Gecko")&&!(-1!=k().toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),U=-1!=k().toLowerCase().indexOf("webkit")&&!A("Edge");function z(){var e=l.document;return e?e.documentMode:void 0}e:{var $="",j=(L=k(),V?/rv:([^\);]+)(\)|;)/.exec(L):R?/Edge\/([\d\.]+)/.exec(L):O?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(L):U?/WebKit\/(\S+)/.exec(L):P?/(?:Version)[ \/]?(\S+)/.exec(L):void 0);if(j&&($=j?j[1]:""),O){var B=z();if(null!=B&&B>parseFloat($)){D=String(B);break e}}D=$}var q,H={};if(l.document&&O){var G=z();q=G||(parseInt(D,10)||void 0)}else q=void 0;var W=q;function K(e,t){if(S.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(V){e:{try{M(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:X[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&K.$.h.call(this)}}y(K,S);var X={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),Q=0;function J(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++Q,this.fa=this.ia=!1}function Z(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function te(e){const t={};for(const n in e)t[n]=e[n];return t}const ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<ne.length;t++)n=ne[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function se(e){this.src=e,this.g={},this.h=0}function re(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=b(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function oe(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}se.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=oe(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new J(t,this.src,r,!!i,s)).ia=n,e.push(t)),t};var ae="closure_lm_"+(1e6*Math.random()|0),le={};function ce(e,t,n,i,s){if(i&&i.once)return he(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)ce(e,t[r],n,i,s);return null}return n=ye(n),e&&e[Y]?e.O(t,n,h(i)?!!i.capture:!!i,s):ue(e,t,n,!1,i,s)}function ue(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=h(s)?!!s.capture:!!s,a=ge(e);if(a||(e[ae]=a=new se(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=me;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)x||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(fe(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function he(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)he(e,t[r],n,i,s);return null}return n=ye(n),e&&e[Y]?e.P(t,n,h(i)?!!i.capture:!!i,s):ue(e,t,n,!0,i,s)}function de(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)de(e,t[r],n,i,s);else i=h(i)?!!i.capture:!!i,n=ye(n),e&&e[Y]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=oe(r=e.g[t],n,i,s))&&(Z(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=ge(e))&&(t=e.g[t.toString()],e=-1,t&&(e=oe(t,n,i,s)),(n=-1<e?t[e]:null)&&pe(n))}function pe(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Y])re(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(fe(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ge(t))?(re(n,e),0==n.h&&(n.src=null,t[ae]=null)):Z(e)}}}function fe(e){return e in le?le[e]:le[e]="on"+e}function me(e,t){if(e.fa)e=!0;else{t=new K(t,this);var n=e.listener,i=e.la||e.src;e.ia&&pe(e),e=n.call(i,t)}return e}function ge(e){return(e=e[ae])instanceof se?e:null}var ve="__closure_events_fn_"+(1e9*Math.random()>>>0);function ye(e){return"function"==typeof e?e:(e[ve]||(e[ve]=function(t){return e.handleEvent(t)}),e[ve])}function we(){w.call(this),this.i=new se(this),this.S=this,this.J=null}function be(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new S(t,e);else if(t instanceof S)t.target=t.target||e;else{var s=t;ie(t=new S(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=Ee(o,i,!0,t)&&s}if(s=Ee(o=t.g=e,i,!0,t)&&s,s=Ee(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=Ee(o=t.g=n[r],i,!1,t)&&s}function Ee(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&re(e.i,o),s=!1!==a.call(l,i)&&s}}return s&&!i.defaultPrevented}y(we,w),we.prototype[Y]=!0,we.prototype.removeEventListener=function(e,t,n,i){de(this,e,t,n,i)},we.prototype.N=function(){if(we.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Z(n[i]);delete t.g[e],t.h--}}this.J=null},we.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},we.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Te=l.JSON.stringify;function Se(){var e=Me;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var xe,Ie=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new Ce),(e=>e.reset()));class Ce{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function _e(e){l.setTimeout((()=>{throw e}),0)}function ke(e,t){xe||function(){var e=l.Promise.resolve(void 0);xe=function(){e.then(Ne)}}(),Ae||(xe(),Ae=!0),Me.add(e,t)}var Ae=!1,Me=new class{add(e,t){const n=Ie.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Ne(){for(var e;e=Se();){try{e.h.call(e.g)}catch(e){_e(e)}var t=Ie;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ae=!1}function De(e,t){we.call(this),this.h=e||1,this.g=t||l,this.j=g(this.qb,this),this.l=Date.now()}function Le(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Pe(e,t,n){if("function"==typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:l.setTimeout(e,t||0)}function Oe(e){e.g=Pe((()=>{e.g=null,e.i&&(e.i=!1,Oe(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}y(De,we),(s=De.prototype).ga=!1,s.T=null,s.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),be(this,"tick"),this.ga&&(Le(this),this.start()))}},s.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.N=function(){De.$.N.call(this),Le(this),delete this.g};class Re extends w{l(e){this.h=arguments,this.g?this.i=!0:Oe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Fe(e){w.call(this),this.h=e,this.g={}}y(Fe,w);var Ve=[];function Ue(e,t,n,i){Array.isArray(n)||(n&&(Ve[0]=n.toString()),n=Ve);for(var s=0;s<n.length;s++){var r=ce(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function ze(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&pe(e)}),e),e.g={}}function $e(){this.g=!0}function je(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Te(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Fe.prototype.N=function(){Fe.$.N.call(this),ze(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$e.prototype.Ea=function(){this.g=!1},$e.prototype.info=function(){};var Be={},qe=null;function He(){return qe=qe||new we}function Ge(e){S.call(this,Be.Ta,e)}function We(e){const t=He();be(t,new Ge(t))}function Ke(e,t){S.call(this,Be.STAT_EVENT,e),this.stat=t}function Xe(e){const t=He();be(t,new Ke(t,e))}function Ye(e,t){S.call(this,Be.Ua,e),this.size=t}function Qe(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){e()}),t)}Be.Ta="serverreachability",y(Ge,S),Be.STAT_EVENT="statevent",y(Ke,S),Be.Ua="timingevent",y(Ye,S);var Je={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ze={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function et(){}function tt(e){return e.h||(e.h=e.i())}function nt(){}et.prototype.h=null;var it,st={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function rt(){S.call(this,"d")}function ot(){S.call(this,"c")}function at(){}function lt(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Fe(this),this.P=ut,e=F?125:void 0,this.V=new De(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new ct}function ct(){this.i=null,this.g="",this.h=!1}y(rt,S),y(ot,S),y(at,et),at.prototype.g=function(){return new XMLHttpRequest},at.prototype.i=function(){return{}},it=new at;var ut=45e3,ht={},dt={};function pt(e,t,n){e.L=1,e.v=Dt(_t(t)),e.s=n,e.S=!0,ft(e,null)}function ft(e,t){e.G=Date.now(),yt(e),e.A=_t(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),Ht(n.i,"t",i),e.C=0,n=e.l.I,e.h=new ct,e.g=Hn(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Re(g(e.Pa,e,e.g),e.O)),Ue(e.U,e.g,"readystatechange",e.nb),t=e.I?te(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),We(),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function mt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function gt(e,t,n){let i,s=!0;for(;!e.J&&e.C<n.length;){if(i=vt(e,n),i==dt){4==t&&(e.o=4,Xe(14),s=!1),je(e.j,e.m,null,"[Incomplete Response]");break}if(i==ht){e.o=4,Xe(15),je(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}je(e.j,e.m,i,null),St(e,i)}mt(e)&&i!=dt&&i!=ht&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Xe(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ca&&(e.ca=!0,(t=e.l).g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fn(t),t.L=!0,Xe(11))):(je(e.j,e.m,n,"[Invalid Chunked Response]"),Tt(e),Et(e))}function vt(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?dt:(n=Number(t.substring(n,i)),isNaN(n)?ht:(i+=1)+n>t.length?dt:(t=t.substr(i,n),e.C=i+n,t))}function yt(e){e.Y=Date.now()+e.P,wt(e,e.P)}function wt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Qe(g(e.lb,e),t)}function bt(e){e.B&&(l.clearTimeout(e.B),e.B=null)}function Et(e){0==e.l.H||e.J||zn(e.l,e)}function Tt(e){bt(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,Le(e.V),ze(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function St(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Qt(n.h,e)))if(!e.K&&Qt(n.h,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Un(n),An(n)}Rn(n),Xe(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&0==n.A&&!n.v&&(n.v=Qe(g(n.ib,n),6e3));if(1>=Yt(n.h)&&n.na){try{n.na()}catch(e){}n.na=void 0}}else jn(n,11)}else if((e.K||n.g==e)&&Un(n),!I(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.J=c[1],n.oa=c[2];const t=c[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const s=c[4];null!=s&&(n.Ga=s,n.j.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.h;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Jt(r,r.h),r.h=null))}if(i.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,Nt(i.G,i.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms"));var o=e;if((i=n).wa=qn(i,i.I?i.oa:null,i.Y),o.K){Zt(i.h,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(bt(a),yt(a)),i.g=o}else On(i);0<n.i.length&&Nn(n)}else"stop"!=c[0]&&"close"!=c[0]||jn(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?jn(n,7):kn(n):"noop"!=c[0]&&n.l&&n.l.Aa(c),n.A=0)}We()}catch(e){}}function xt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(u(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}(s=lt.prototype).setTimeout=function(e){this.P=e},s.nb=function(e){e=e.target;const t=this.M;t&&3==Tn(e)?t.l():this.Pa(e)},s.Pa=function(e){try{if(e==this.g)e:{const h=Tn(this.g);var t=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||F||this.g&&(this.h.h||this.g.ja()||Sn(this.g)))){this.J||4!=h||7==t||We(),bt(this);var n=this.g.da();this.aa=n;t:if(mt(this)){var i=Sn(this.g);e="";var s=i.length,r=4==Tn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Tt(this),Et(this);var o="";break t}this.h.i=new l.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Xe(12),Tt(this),Et(this);break e}je(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,St(this,n)}this.S?(gt(this,h,o),F&&this.i&&3==h&&(Ue(this.U,this.V,"tick",this.mb),this.V.start())):(je(this.j,this.m,o,null),St(this,o)),4==h&&Tt(this),this.i&&!this.J&&(4==h?zn(this.l,this):(this.i=!1,yt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Xe(12)):(this.o=0,Xe(13)),Tt(this),Et(this)}}}catch(e){}},s.mb=function(){if(this.g){var e=Tn(this.g),t=this.g.ja();this.C<t.length&&(bt(this),gt(this,e,t),this.i&&4!=e&&yt(this))}},s.cancel=function(){this.J=!0,Tt(this)},s.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(We(),Xe(17)),Tt(this),this.o=2,Et(this)):wt(this,this.Y-e)};var It=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ct(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ct){this.h=void 0!==t?t:e.h,kt(this,e.j),this.s=e.s,this.g=e.g,At(this,e.m),this.l=e.l,t=e.i;var n=new $t;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Mt(this,n),this.o=e.o}else e&&(n=String(e).match(It))?(this.h=!!t,kt(this,n[1]||"",!0),this.s=Lt(n[2]||""),this.g=Lt(n[3]||"",!0),At(this,n[4]),this.l=Lt(n[5]||"",!0),Mt(this,n[6]||"",!0),this.o=Lt(n[7]||"")):(this.h=!!t,this.i=new $t(null,this.h))}function _t(e){return new Ct(e)}function kt(e,t,n){e.j=n?Lt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function At(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Mt(e,t,n){t instanceof $t?(e.i=t,function(e,t){t&&!e.j&&(jt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Bt(this,t),Ht(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Pt(t,Ut)),e.i=new $t(t,e.h))}function Nt(e,t,n){e.i.set(t,n)}function Dt(e){return Nt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Lt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Pt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ot),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ot(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ct.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Pt(t,Rt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Pt(t,Rt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Pt(n,"/"==n.charAt(0)?Vt:Ft,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Pt(n,zt)),e.join("")};var Rt=/[#\/\?@]/g,Ft=/[#\?:]/g,Vt=/[#\?]/g,Ut=/[#\?@]/g,zt=/#/g;function $t(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function jt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Bt(e,t){jt(e),t=Gt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function qt(e,t){return jt(e),t=Gt(e,t),e.g.has(t)}function Ht(e,t,n){Bt(e,t),0<n.length&&(e.i=null,e.g.set(Gt(e,t),E(n)),e.h+=n.length)}function Gt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(s=$t.prototype).add=function(e,t){jt(this),this.i=null,e=Gt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},s.forEach=function(e,t){jt(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},s.sa=function(){jt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},s.Z=function(e){jt(this);let t=[];if("string"==typeof e)qt(this,e)&&(t=t.concat(this.g.get(Gt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},s.set=function(e,t){return jt(this),this.i=null,qt(this,e=Gt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},s.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Wt(e){this.l=e||Kt,l.PerformanceNavigationTiming?e=0<(e=l.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(l.g&&l.g.Ka&&l.g.Ka()&&l.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Kt=10;function Xt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Yt(e){return e.h?1:e.g?e.g.size:0}function Qt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Jt(e,t){e.g?e.g.add(t):e.h=t}function Zt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function en(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return E(e.i)}function tn(){}function nn(){this.g=new tn}function sn(e,t,n){const i=n||"";try{xt(e,(function(e,n){let s=e;h(e)&&(s=Te(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function rn(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function on(e){this.l=e.fc||null,this.j=e.ob||!1}function an(e,t){we.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Wt.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},tn.prototype.stringify=function(e){return l.JSON.stringify(e,void 0)},tn.prototype.parse=function(e){return l.JSON.parse(e,void 0)},y(on,et),on.prototype.g=function(){return new an(this.l,this.j)},on.prototype.i=function(e){return function(){return e}}({}),y(an,we);var ln=0;function cn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,hn(e)}function hn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(s=an.prototype).open=function(e,t){if(this.readyState!=ln)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,hn(this)},s.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||l).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,un(this)),this.readyState=ln},s.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==l.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},s.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?un(this):hn(this),3==this.readyState&&cn(this)}},s.Za=function(e){this.g&&(this.response=this.responseText=e,un(this))},s.Ya=function(e){this.g&&(this.response=e,un(this))},s.ka=function(){this.g&&un(this)},s.setRequestHeader=function(e,t){this.v.append(e,t)},s.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(an.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var dn=l.JSON.parse;function pn(e){we.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fn,this.L=this.M=!1}y(pn,we);var fn="",mn=/^https?$/i,gn=["POST","PUT"];function vn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,yn(e),bn(e)}function yn(e){e.F||(e.F=!0,be(e,"complete"),be(e,"error"))}function wn(e){if(e.h&&void 0!==a&&(!e.C[1]||4!=Tn(e)||2!=e.da()))if(e.v&&4==Tn(e))Pe(e.La,0,e);else if(be(e,"readystatechange"),4==Tn(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var s=String(e.I).match(It)[1]||null;if(!s&&l.self&&l.self.location){var r=l.self.location.protocol;s=r.substr(0,r.length-1)}i=!mn.test(s?s.toLowerCase():"")}n=i}if(n)be(e,"complete"),be(e,"success");else{e.m=6;try{var o=2<Tn(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.da()+"]",yn(e)}}finally{bn(e)}}}function bn(e,t){if(e.g){En(e);const n=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||be(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function En(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(l.clearTimeout(e.A),e.A=null)}function Tn(e){return e.g?e.g.readyState:0}function Sn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case fn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function xn(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function In(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=xn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Nt(e,t,n))}function Cn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function _n(e){this.Ga=0,this.i=[],this.j=new $e,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Cn("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Cn("baseRetryDelayMs",5e3,e),this.hb=Cn("retryDelaySeedMs",1e4,e),this.eb=Cn("forwardChannelMaxRetries",2,e),this.xa=Cn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new Wt(e&&e.concurrentRequestLimit),this.Ja=new nn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function kn(e){if(Mn(e),3==e.H){var t=e.W++,n=_t(e.G);Nt(n,"SID",e.J),Nt(n,"RID",t),Nt(n,"TYPE","terminate"),Ln(e,n),(t=new lt(e,e.j,t,void 0)).L=2,t.v=Dt(_t(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(t.v.toString(),"")),!n&&l.Image&&((new Image).src=t.v,n=!0),n||(t.g=Hn(t.l,null),t.g.ha(t.v)),t.G=Date.now(),yt(t)}Bn(e)}function An(e){e.g&&(Fn(e),e.g.cancel(),e.g=null)}function Mn(e){An(e),e.u&&(l.clearTimeout(e.u),e.u=null),Un(e),e.h.cancel(),e.m&&("number"==typeof e.m&&l.clearTimeout(e.m),e.m=null)}function Nn(e){Xt(e.h)||e.m||(e.m=!0,ke(e.Na,e),e.C=0)}function Dn(e,t){var n;n=t?t.m:e.W++;const i=_t(e.G);Nt(i,"SID",e.J),Nt(i,"RID",n),Nt(i,"AID",e.V),Ln(e,i),e.o&&e.s&&In(i,e.o,e.s),n=new lt(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=Pn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Jt(e.h,n),pt(n,i,t)}function Ln(e,t){e.ma&&ee(e.ma,(function(e,n){Nt(t,n,e)})),e.l&&xt({},(function(e,n){Nt(t,n,e)}))}function Pn(e,t,n){n=Math.min(e.i.length,n);var i=e.l?g(e.l.Va,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),r=!1;else try{sn(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(r){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,i}function On(e){e.g||e.u||(e.ba=1,ke(e.Ma,e),e.A=0)}function Rn(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Qe(g(e.Ma,e),$n(e,e.A)),e.A++,!0)}function Fn(e){null!=e.B&&(l.clearTimeout(e.B),e.B=null)}function Vn(e){e.g=new lt(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=_t(e.wa);Nt(t,"RID","rpc"),Nt(t,"SID",e.J),Nt(t,"CI",e.M?"0":"1"),Nt(t,"AID",e.V),Nt(t,"TYPE","xmlhttp"),Ln(e,t),e.o&&e.s&&In(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Dt(_t(t)),n.s=null,n.S=!0,ft(n,e)}function Un(e){null!=e.v&&(l.clearTimeout(e.v),e.v=null)}function zn(e,t){var n=null;if(e.g==t){Un(e),Fn(e),e.g=null;var i=2}else{if(!Qt(e.h,t))return;n=t.F,Zt(e.h,t),i=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;be(i=He(),new Ye(i,n)),Nn(e)}else On(e);else if(3==(s=t.o)||0==s&&0<e.ta||!(1==i&&function(e,t){return!(Yt(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.F.concat(e.i),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Qe(g(e.Na,e,t),$n(e,e.C)),e.C++,0)))}(e,t)||2==i&&Rn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:jn(e,5);break;case 4:jn(e,10);break;case 3:jn(e,6);break;default:jn(e,2)}}function $n(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function jn(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=g(e.pb,e);n||(n=new Ct("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||kt(n,"https"),Dt(n)),function(e,t){const n=new $e;if(l.Image){const i=new Image;i.onload=v(rn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=v(rn,n,i,"TestLoadImage: error",!1,t),i.onabort=v(rn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=v(rn,n,i,"TestLoadImage: timeout",!1,t),l.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Xe(2);e.H=0,e.l&&e.l.za(t),Bn(e),Mn(e)}function Bn(e){if(e.H=0,e.pa=[],e.l){const t=en(e.h);0==t.length&&0==e.i.length||(T(e.pa,t),T(e.pa,e.i),e.h.i.length=0,E(e.i),e.i.length=0),e.l.ya()}}function qn(e,t,n){var i=n instanceof Ct?_t(n):new Ct(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),At(i,i.m);else{var s=l.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new Ct(null,void 0);i&&kt(r,i),t&&(r.g=t),s&&At(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&Nt(i,n,t),Nt(i,"VER",e.qa),Ln(e,i),i}function Hn(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new pn(new on({ob:!0})):new pn(e.va)).Oa(e.I),t}function Gn(){}function Wn(){if(O&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function Kn(e,t){we.call(this),this.g=new _n(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!I(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Qn(this)}function Xn(e){rt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Yn(){ot.call(this),this.status=1}function Qn(e){this.g=e}function Jn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Zn(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;o=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=n+(o<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^r&(n^s))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^s^r)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(s^(n|~r))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(t=n+((o=t+(s^(n|~r))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=r+((o=s+(t^(r|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}function ei(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=0|e[s];i&&r==t||(n[s]=r,i=!1)}this.g=n}(s=pn.prototype).Oa=function(e){this.M=e},s.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():it.g(),this.C=this.u?tt(this.u):tt(it),this.g.onreadystatechange=g(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void vn(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=l.FormData&&e instanceof l.FormData,!(0<=b(gn,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{En(this),0<this.B&&((this.L=function(e){return O&&N(H,9,(function(){let e=0;const t=C(String(D)).split("."),n=C("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;e=_(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||_(0==s[2].length,0==r[2].length)||_(s[2],r[2]),s=s[3],r=r[3]}while(0==e)}return 0<=e}))&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.ua,this)):this.A=Pe(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){vn(this,e)}},s.ua=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))},s.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,be(this,"complete"),be(this,"abort"),bn(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bn(this,!0)),pn.$.N.call(this)},s.La=function(){this.s||(this.G||this.v||this.l?wn(this):this.kb())},s.kb=function(){wn(this)},s.da=function(){try{return 2<Tn(this)?this.g.status:-1}catch(e){return-1}},s.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},s.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),dn(t)}},s.Ia=function(){return this.m},s.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(s=_n.prototype).qa=8,s.H=1,s.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new lt(this,this.j,e,void 0);let r=this.s;if(this.U&&(r?(r=te(r),ie(r,this.U)):r=this.U),null!==this.o||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Pn(this,s,t),Nt(n=_t(this.G),"RID",e),Nt(n,"CVER",22),this.F&&Nt(n,"X-HTTP-Session-Id",this.F),Ln(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(xn(r)))+"&"+t:this.o&&In(n,this.o,r)),Jt(this.h,s),this.bb&&Nt(n,"TYPE","init"),this.P?(Nt(n,"$req",t),Nt(n,"SID","null"),s.ba=!0,pt(s,n,null)):pt(s,n,t),this.H=2}}else 3==this.H&&(e?Dn(this,e):0==this.i.length||Xt(this.h)||Dn(this))},s.Ma=function(){if(this.u=null,Vn(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Qe(g(this.jb,this),e)}},s.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Xe(10),An(this),Vn(this))},s.ib=function(){null!=this.v&&(this.v=null,An(this),Rn(this),Xe(19))},s.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))},(s=Gn.prototype).Ba=function(){},s.Aa=function(){},s.za=function(){},s.ya=function(){},s.Va=function(){},Wn.prototype.g=function(e,t){return new Kn(e,t)},y(Kn,we),Kn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Xe(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=qn(e,null,e.Y),Nn(e)},Kn.prototype.close=function(){kn(this.g)},Kn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Te(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.fb++,e)),3==t.H&&Nn(t)},Kn.prototype.N=function(){this.g.l=null,delete this.j,kn(this.g),delete this.g,Kn.$.N.call(this)},y(Xn,rt),y(Yn,ot),y(Qn,Gn),Qn.prototype.Ba=function(){be(this.g,"a")},Qn.prototype.Aa=function(e){be(this.g,new Xn(e))},Qn.prototype.za=function(e){be(this.g,new Yn)},Qn.prototype.ya=function(){be(this.g,"b")},y(Jn,(function(){this.blockSize=-1})),Jn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Jn.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(0==s)for(;r<=n;)Zn(this,e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){Zn(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){Zn(this,i),s=0;break}}this.h=s,this.i+=t},Jn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var ti={};function ni(e){return-128<=e&&128>e?N(ti,e,(function(e){return new ei([0|e],0>e?-1:0)})):new ei([0|e],0>e?-1:0)}function ii(e){if(isNaN(e)||!isFinite(e))return ri;if(0>e)return ui(ii(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=si;return new ei(t,0)}var si=4294967296,ri=ni(0),oi=ni(1),ai=ni(16777216);function li(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function ci(e){return-1==e.h}function ui(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new ei(n,~e.h).add(oi)}function hi(e,t){return e.add(ui(t))}function di(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function pi(e,t){this.g=e,this.h=t}function fi(e,t){if(li(t))throw Error("division by zero");if(li(e))return new pi(ri,ri);if(ci(e))return t=fi(ui(e),t),new pi(ui(t.g),ui(t.h));if(ci(t))return t=fi(e,ui(t)),new pi(ui(t.g),t.h);if(30<e.g.length){if(ci(e)||ci(t))throw Error("slowDivide_ only works with positive integers.");for(var n=oi,i=t;0>=i.X(e);)n=mi(n),i=mi(i);var s=gi(n,1),r=gi(i,1);for(i=gi(i,2),n=gi(n,2);!li(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=gi(i,1),n=gi(n,1)}return t=hi(e,s.R(t)),new pi(s,t)}for(s=ri;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(r=ii(n)).R(t);ci(o)||0<o.X(e);)o=(r=ii(n-=i)).R(t);li(r)&&(r=oi),s=s.add(r),e=hi(e,o)}return new pi(s,e)}function mi(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new ei(n,e.h)}function gi(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new ei(s,e.h)}(s=ei.prototype).ea=function(){if(ci(this))return-ui(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:si+i)*t,t*=si}return e},s.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(li(this))return"0";if(ci(this))return"-"+ui(this).toString(e);for(var t=ii(Math.pow(e,6)),n=this,i="";;){var s=fi(n,t).g,r=((0<(n=hi(n,s.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(li(n=s))return r+i;for(;6>r.length;)r="0"+r;i=r+i}},s.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},s.X=function(e){return ci(e=hi(this,e))?-1:li(e)?0:1},s.abs=function(){return ci(this)?ui(this):this},s.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(65535&this.D(s))+(65535&e.D(s)),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new ei(n,-2147483648&n[n.length-1]?-1:0)},s.R=function(e){if(li(this)||li(e))return ri;if(ci(this))return ci(e)?ui(this).R(ui(e)):ui(ui(this).R(e));if(ci(e))return ui(this.R(ui(e)));if(0>this.X(ai)&&0>e.X(ai))return ii(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=65535&this.D(i),a=e.D(s)>>>16,l=65535&e.D(s);n[2*i+2*s]+=o*l,di(n,2*i+2*s),n[2*i+2*s+1]+=r*l,di(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,di(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,di(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new ei(n,0)},s.gb=function(e){return fi(this,e).h},s.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new ei(n,this.h&e.h)},s.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new ei(n,this.h|e.h)},s.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new ei(n,this.h^e.h)},Wn.prototype.createWebChannel=Wn.prototype.g,Kn.prototype.send=Kn.prototype.u,Kn.prototype.open=Kn.prototype.m,Kn.prototype.close=Kn.prototype.close,Je.NO_ERROR=0,Je.TIMEOUT=8,Je.HTTP_ERROR=6,Ze.COMPLETE="complete",nt.EventType=st,st.OPEN="a",st.CLOSE="b",st.ERROR="c",st.MESSAGE="d",we.prototype.listen=we.prototype.O,pn.prototype.listenOnce=pn.prototype.P,pn.prototype.getLastError=pn.prototype.Sa,pn.prototype.getLastErrorCode=pn.prototype.Ia,pn.prototype.getStatus=pn.prototype.da,pn.prototype.getResponseJson=pn.prototype.Wa,pn.prototype.getResponseText=pn.prototype.ja,pn.prototype.send=pn.prototype.ha,pn.prototype.setWithCredentials=pn.prototype.Oa,Jn.prototype.digest=Jn.prototype.l,Jn.prototype.reset=Jn.prototype.reset,Jn.prototype.update=Jn.prototype.j,ei.prototype.add=ei.prototype.add,ei.prototype.multiply=ei.prototype.R,ei.prototype.modulo=ei.prototype.gb,ei.prototype.compare=ei.prototype.X,ei.prototype.toNumber=ei.prototype.ea,ei.prototype.toString=ei.prototype.toString,ei.prototype.getBits=ei.prototype.D,ei.fromNumber=ii,ei.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return ui(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=ii(Math.pow(n,8)),s=ri,r=0;r<t.length;r+=8){var o=Math.min(8,t.length-r),a=parseInt(t.substring(r,r+o),n);8>o?(o=ii(Math.pow(n,o)),s=s.R(o).add(ii(a))):s=(s=s.R(i)).add(ii(a))}return s};var vi=o.createWebChannelTransport=function(){return new Wn},yi=o.getStatEventTarget=function(){return He()},wi=o.ErrorCode=Je,bi=o.EventType=Ze,Ei=o.Event=Be,Ti=o.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Si=o.FetchXmlHttpFactory=on,xi=o.WebChannel=nt,Ii=o.XhrIo=pn,Ci=o.Md5=Jn,_i=o.Integer=ei})),r("kyEFX").register(JSON.parse('{"d19UA":"shoping-list.60c4dc31.js","jDPoR":"save-the-children.f3449026.png","6uEBG":"project-hope.2984f7de.png","k1r7D":"united-24.4c1c8691.png","fp3fh":"international-medical-corps.11c3a1fd.png","gQHiG":"medecins-sans-frontieres.b651900c.png","6dHKE":"razom.a52e8612.png","4XQzn":"action-against-hunger.6b5411e6.png","6jpBN":"world-vision.9e0125e2.png","5PSBZ":"sergiy-prytula.a0719334.png","j8TBH":"save-the-children@2x.6d2d66fa.png","4QcYO":"project-hope@2x.746c1364.png","cuKVH":"united-24@2x.37107713.png","cPZ13":"international-medical-corps@2x.dae37217.png","fQSFO":"medecins-sans-frontieres@2x.8ad1827b.png","jYmqR":"razom@2x.57b9cad1.png","3xzbG":"action-against-hunger@2x.f670b5f9.png","6T9rv":"world-vision@2x.cd8a59aa.png","kSFhs":"sergiy-prytula@2x.2a4aef91.png"}'));
//# sourceMappingURL=shoping-list.60c4dc31.js.map

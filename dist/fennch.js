exports["fennch"]=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}r(5);var a=function(){function e(t,r){var o=this;n(this,e),this.abortController=r||new AbortController,t instanceof Promise?this.promise=t:this.promise=new Promise((function(e,r){return t(e,r,o.abortController.signal)}))}return i(e,[{key:"then",value:function(){var t;return new e((t=this.promise).then.apply(t,arguments),this.abortController)}},{key:"catch",value:function(){var t;return new e((t=this.promise).catch.apply(t,arguments),this.abortController)}},{key:"finally",value:function(){var e;return(e=this.promise).finally.apply(e,arguments)}},{key:"abort",value:function(){return this.abortController.abort()}}]),e}();a.resolve=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return new a(Promise.resolve.apply(Promise,r),e)},a.reject=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return new a(Promise.reject(t),e)},a.race=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return new a(Promise.race.apply(Promise,r),e)},a.all=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return new a(Promise.all.apply(Promise,r),e)},t["a"]=a},function(e,t){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===("undefined"===typeof window?"undefined":r(window))&&(n=window)}e.exports=n},function(e,t,r){"use strict";function n(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function u(e){n(a,o,i,u,c,"next",e)}function c(e){n(a,o,i,u,c,"throw",e)}u(void 0)}))}}function i(e){return e.includes("json")?"json":e.includes("text")?"text":"blob"}function a(e,t){return u.apply(this,arguments)}function u(){return u=o(regeneratorRuntime.mark((function e(t,r){var n,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=null,o=null,!(t instanceof r)){e.next=45;break}if(204!==t.status||!t.ok){e.next=5;break}return e.abrupt("return",{body:n,error:o});case 5:if(a=t.headers.get("Content-Type"),!a){e.next=42;break}e.t0=i(a),e.next="json"===e.t0?10:"text"===e.t0?20:30;break;case 10:return e.prev=10,e.next=13,t.json();case 13:n=e.sent,e.next=19;break;case 16:e.prev=16,e.t1=e["catch"](10),o=e.t1;case 19:return e.abrupt("break",40);case 20:return e.prev=20,e.next=23,t.text();case 23:n=e.sent,e.next=29;break;case 26:e.prev=26,e.t2=e["catch"](20),o=e.t2;case 29:return e.abrupt("break",40);case 30:return e.prev=30,e.next=33,t.blob();case 33:n=e.sent,e.next=39;break;case 36:e.prev=36,e.t3=e["catch"](30),o=e.t3;case 39:return e.abrupt("break",40);case 40:e.next=43;break;case 42:o=t;case 43:e.next=46;break;case 45:o=t;case 46:return e.abrupt("return",{body:n,error:o});case 47:case"end":return e.stop()}}),e,null,[[10,16],[20,26],[30,36]])}))),u.apply(this,arguments)}function c(e){return function(){var t=o(regeneratorRuntime.mark((function t(r,n){var o,i,u,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a(r,e);case 2:return o=t.sent,i=o.body,u=o.error,c=!1,"AbortError"===r.name&&(c=!0),t.abrupt("return",new Proxy(r,{get:function(e,t){switch(t){case"request":return n;case"body":return i;case"cancel":return c;case"error":return u;case"raw":return r;default:return e[t]}},set:function(e,t,r){return"body"===t?(i=r,!0):"cancel"===t&&(e.cancel=r,!0)}}));case 8:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}r.d(t,"a",(function(){return c}))},function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return d}));var n=r(4),o=r.n(n);function i(e,t){return c(e)||u(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done);n=!0)if(r.push(a.value),t&&r.length===t)break}catch(c){o=!0,i=c}finally{try{n||null==u["return"]||u["return"]()}finally{if(o)throw i}}return r}}function c(e){if(Array.isArray(e))return e}function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e){return y(e)||p(e)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function y(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function b(e){var t=new Proxy(e,{get:function(t,r){return"raw"===r?"function"===typeof e.raw?e.raw.bind(t):e:r===Symbol.iterator?t[Symbol.iterator].bind(t):"function"===typeof t[r]?new Proxy(t[r],{apply:function(e,r,n){return e.call.apply(e,[t].concat(s(n)))}}):t.has(r)?t.get(r):t[r]},set:function(e,t,r){return e.has(t)?e.set(t,r):e.append(t,r),!0},deleteProperty:function(e,t){return e.has(t)&&e.delete(t),!0},has:function(e,t){return e.has(t)},ownKeys:function(e){return e.keys()},enumerate:function(e){return e.keys()}});return t}function v(e,t,r,n,a){return new Proxy(e,{get:function(i,u){if("function"===typeof i[u])return new Proxy(i[u],{apply:function(e,t,r){return e.call.apply(e,[i].concat(s(r)))}});switch(u){case"raw":return e.raw?e.raw:e;case"headers":return b(i[u]);case"abortController":return r;case"params":var c=i.url.split("?")[1];return c?o.a.parse(c):null;case"body":return t;case"url":return a;case"isBinary":return n;default:return i[u]}},set:function(e,t,r){switch(t){case"headers":var n=!0,o=!1,a=void 0;try{for(var u,c=e.headers.keys()[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){var s=u.value;e.headers.delete(s)}}catch(f){o=!0,a=f}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r&&"object"===l(r)&&Object.entries(r).forEach((function(t){var r=i(t,2),n=r[0],o=r[1];e.headers.append(n,o)})),!0;default:e[t]=r}}})}function d(t,r,n){return function(n){var i=null;if(n instanceof t){var a;a=n.abortController&&!n.abortController.signal.aborted?n.abortController:new r;var u=a.signal&&"object"===l(a.signal)&&Object.getPrototypeOf(a.signal);"AbortSignal"!==u.constructor.name&&Object.defineProperty(u.constructor,"name",{value:"AbortSignal",configurable:!0});var c=n.raw?n.raw.clone():n.clone(),s=new t(c,{signal:a.signal});i=v(s,n.body,a,n.isBinary,n.url)}else{var f=n.baseUri,p=n.path,y=n.mode,b=n.method,d=n.globalHeaders,h=n.headers,g=n.params,m=n.body,w=n.arrayFormat,x=n.abortController,j="".concat(f).concat(p).concat(g?"?"+o.a.stringify(g,{arrayFormat:w}):"");b=b?"del"===b?"DELETE":b.toUpperCase():"GET";var O=!1;if("GET"!==b&&"HEAD"!==b){var P=e.Blob||null,S=e.FormData||null;O=[P,S].reduce((function(e,t){return e||t&&m instanceof t}),!1),O||(m=JSON.stringify(m))}var E=x.signal&&"object"===l(x.signal)&&Object.getPrototypeOf(x.signal);"AbortSignal"!==E.constructor.name&&Object.defineProperty(E.constructor,"name",{value:"AbortSignal",configurable:!0});var T=new t(j,{method:b,body:m,mode:y,signal:x.signal});i=v(T,m,x,O,j);var k=Object.assign({},d,h);i.headers=k}return i}}}).call(this,r(1))},function(e,t){e.exports=require("qs")},function(e,t,r){"use strict";(function(e){var t=r(8),n="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:void 0;n&&("undefined"===typeof n.AbortController&&(n.AbortController=t.AbortController),"undefined"===typeof n.AbortSignal&&(n.AbortSignal=t.AbortSignal))}).call(this,r(1))},function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0);function o(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function u(e){o(a,n,i,u,c,"next",e)}function c(e){o(a,n,i,u,c,"throw",e)}u(void 0)}))}}function a(){var e={register:function(e){var t=this;return this.interceptors.push(e),function(){return t.unregister(e)}},unregister:function(e){var t=this.interceptors.indexOf(e);t>=0&&this.interceptors.splice(t,1)},clear:function(){this.interceptors=[]},interceptRequest:function(e){var t=n["a"].resolve(e.abortController,e);return this.interceptors.forEach((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.request,n=e.requestError;"function"===typeof r&&(t=t.then((function(e){return r(e)}))),"function"===typeof n&&(t=t.catch(n))})),t},interceptResponseError:function(){var e=i(regeneratorRuntime.mark((function e(t,r){var o,i,a,u,c,l,s,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o=n["a"].reject(t,r),i=this.interceptors.slice().reverse(),a=!0,u=!1,c=void 0,e.prev=5,l=i[Symbol.iterator]();!(a=(s=l.next()).done);a=!0)f=s.value.responseError,"function"===typeof f&&(o=o.catch(f));e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](5),u=!0,c=e.t0;case 13:e.prev=13,e.prev=14,a||null==l.return||l.return();case 16:if(e.prev=16,!u){e.next=19;break}throw c;case 19:return e.finish(16);case 20:return e.finish(13);case 21:return e.abrupt("return",o);case 22:case"end":return e.stop()}}),e,this,[[5,9,13,21],[14,,16,20]])})));function t(t,r){return e.apply(this,arguments)}return t}(),interceptResponse:function(e,t){var r=n["a"].resolve(e,t),o=this.interceptors.slice().reverse();return o.forEach((function(e){var t=e.response;e.responseError;"function"===typeof t&&(r=r.then(t))})),r},interceptors:[]};return e}},function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"default",(function(){return b})),r.d(t,"APromise",(function(){return v})),r.d(t,"makeCreateFResponse",(function(){return d})),r.d(t,"makeCreateFRequest",(function(){return h}));var n=r(6),o=r(0),i=r(2),a=r(3);function u(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,o)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){u(i,n,o,a,c,"next",e)}function c(e){u(i,n,o,a,c,"throw",e)}a(void 0)}))}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}r(5);var y=["get","head","post","put","del","delete","options","patch"];function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{parseErr:null,headers:{},baseUri:"",mode:"cors",arrayFormat:"indices",auth:{},timeout:0},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,u={opts:t},l=r||e.fetch,f=r&&r.Request||e.Request,b=r&&r.Response||e.Response,v=(r&&r.Headers||e.Headers,Object(a["a"])(f,AbortController,AbortSignal)),d=Object(i["a"])(b);u.interceptor=Object(n["a"])();var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t&&("object"!==p(t)||Array.isArray(t)))throw new TypeError("`options` must be an object");if(t=s({},u.opts,{},t),"string"!==typeof e)throw new TypeError("`path` must be a string");var r=new AbortController,n=v({baseUri:t.baseUri,path:e,mode:t.mode,method:t.method,globalHeaders:u.opts.headers,headers:t.headers,params:t.params,body:t.body,arrayFormat:u.opts.arrayFormat,abortController:r});return n},g=function(e){var t=!1,n=e.timeout||u.opts.timeout,i=new o["a"](function(){var o=c(regeneratorRuntime.mark((function o(i,a){var c,s,f,p,y,b,h,g,m,w,x,j,O,P,S,E,T,k;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return c=null,s=function(e){return setTimeout((function(){t=!0,e.abortController.abort()}),n)},f=v(e),o.prev=3,o.next=6,u.interceptor.interceptRequest(e);case 6:if(e=o.sent,p=null,l!==r){o.next=18;break}return y=Object.getOwnPropertySymbols(e),b=e[y[1]].parsedURL.href,n>0&&(c=s(e)),o.next=14,l(b,e.raw);case 14:p=o.sent,clearTimeout(c),o.next=35;break;case 18:if(n>0&&(c=s(e)),h=e,g=h.cache,m=h.credentials,w=h.headers,x=h.integrity,j=h.mode,O=h.redirect,P=h.referrer,S=h.method,E={cache:g,credentials:m,headers:w,integrity:x,mode:j,redirect:O,referrer:P,method:S},"get"===e.method.toLowerCase()||"head"===e.method.toLowerCase()){o.next=31;break}if(!e.isBinary){o.next=28;break}return o.next=25,e.blob();case 25:E.body=o.sent,o.next=31;break;case 28:return o.next=30,e.text();case 30:E.body=o.sent;case 31:return o.next=33,l(e.url,E);case 33:p=o.sent,clearTimeout(c);case 35:return o.next=37,d(p,f);case 37:return T=o.sent,o.next=40,u.interceptor.interceptResponse(e.abortController,T);case 40:T=o.sent,i(T),o.next=60;break;case 44:return o.prev=44,o.t0=o["catch"](3),20===o.t0.code&&t&&(o.t0=new Error("Timeout exceeded")),o.next=49,d(o.t0,f);case 49:return k=o.sent,o.prev=50,o.next=53,u.interceptor.interceptResponseError(e.abortController,k);case 53:k=o.sent,i(k),o.next=60;break;case 57:o.prev=57,o.t1=o["catch"](50),a(o.t1);case 60:case"end":return o.stop()}}),o,null,[[3,44],[50,57]])})));return function(e,t){return o.apply(this,arguments)}}(),e.abortController);return i},m=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=h(t,s({},r,{method:e}));return u.req(n)}};return u.req=function(e){return g(v(e))},y.forEach((function(e){u[e]=m(e)})),u}var v=o["a"],d=i["a"],h=a["a"]}.call(this,r(1))},function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function u(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var p=r(9),y=function(e){function t(){throw o(this,t),u(this,l(t).call(this)),new TypeError("AbortSignal cannot be constructed directly")}return s(t,e),a(t,[{key:"aborted",get:function(){var e=d.get(this);if("boolean"!==typeof e)throw new TypeError("Expected 'this' to be an 'AbortSignal' object, but got ".concat(null===this?"null":n(this)));return e}}]),t}(p.EventTarget);function b(){var e=Object.create(y.prototype);return p.EventTarget.call(e),d.set(e,!1),e}function v(e){!1===d.get(e)&&(d.set(e,!0),e.dispatchEvent({type:"abort"}))}p.defineEventAttribute(y.prototype,"abort");var d=new WeakMap;Object.defineProperties(y.prototype,{aborted:{enumerable:!0}}),"function"===typeof Symbol&&"symbol"===n(Symbol.toStringTag)&&Object.defineProperty(y.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});var h=function(){function e(){o(this,e),g.set(this,b())}return a(e,[{key:"abort",value:function(){v(m(this))}},{key:"signal",get:function(){return m(this)}}]),e}(),g=new WeakMap;function m(e){var t=g.get(e);if(null==t)throw new TypeError("Expected 'this' to be an 'AbortController' object, but got ".concat(null===e?"null":n(e)));return t}Object.defineProperties(h.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),"function"===typeof Symbol&&"symbol"===n(Symbol.toStringTag)&&Object.defineProperty(h.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"}),t.AbortController=h,t.AbortSignal=y,t.default=h,e.exports=h,e.exports.AbortController=e.exports["default"]=h,e.exports.AbortSignal=y},function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=new WeakMap,i=new WeakMap;function a(e){var t=o.get(e);return console.assert(null!=t,"'this' is expected an Event object, but got",e),t}function u(e){null==e.passiveListener?e.event.cancelable&&(e.canceled=!0,"function"===typeof e.event.preventDefault&&e.event.preventDefault()):"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Unable to preventDefault inside passive event listener invocation.",e.passiveListener)}function c(e,t){o.set(this,{eventTarget:e,event:t,eventPhase:2,currentTarget:e,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:t.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});for(var r=Object.keys(t),n=0;n<r.length;++n){var i=r[n];i in this||Object.defineProperty(this,i,l(i))}}function l(e){return{get:function(){return a(this).event[e]},set:function(t){a(this).event[e]=t},configurable:!0,enumerable:!0}}function s(e){return{value:function(){var t=a(this).event;return t[e].apply(t,arguments)},configurable:!0,enumerable:!0}}function f(e,t){var r=Object.keys(t);if(0===r.length)return e;function n(t,r){e.call(this,t,r)}n.prototype=Object.create(e.prototype,{constructor:{value:n,configurable:!0,writable:!0}});for(var o=0;o<r.length;++o){var i=r[o];if(!(i in e.prototype)){var a=Object.getOwnPropertyDescriptor(t,i),u="function"===typeof a.value;Object.defineProperty(n.prototype,i,u?s(i):l(i))}}return n}function p(e){if(null==e||e===Object.prototype)return c;var t=i.get(e);return null==t&&(t=f(p(Object.getPrototypeOf(e)),e),i.set(e,t)),t}function y(e,t){var r=p(Object.getPrototypeOf(t));return new r(e,t)}function b(e){return a(e).immediateStopped}function v(e,t){a(e).eventPhase=t}function d(e,t){a(e).currentTarget=t}function h(e,t){a(e).passiveListener=t}c.prototype={get type(){return a(this).event.type},get target(){return a(this).eventTarget},get currentTarget(){return a(this).currentTarget},composedPath:function(){var e=a(this).currentTarget;return null==e?[]:[e]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return a(this).eventPhase},stopPropagation:function(){var e=a(this);e.stopped=!0,"function"===typeof e.event.stopPropagation&&e.event.stopPropagation()},stopImmediatePropagation:function(){var e=a(this);e.stopped=!0,e.immediateStopped=!0,"function"===typeof e.event.stopImmediatePropagation&&e.event.stopImmediatePropagation()},get bubbles(){return Boolean(a(this).event.bubbles)},get cancelable(){return Boolean(a(this).event.cancelable)},preventDefault:function(){u(a(this))},get defaultPrevented(){return a(this).canceled},get composed(){return Boolean(a(this).event.composed)},get timeStamp(){return a(this).timeStamp},get srcElement(){return a(this).eventTarget},get cancelBubble(){return a(this).stopped},set cancelBubble(e){if(e){var t=a(this);t.stopped=!0,"boolean"===typeof t.event.cancelBubble&&(t.event.cancelBubble=!0)}},get returnValue(){return!a(this).canceled},set returnValue(e){e||u(a(this))},initEvent:function(){}},Object.defineProperty(c.prototype,"constructor",{value:c,configurable:!0,writable:!0}),"undefined"!==typeof window&&"undefined"!==typeof window.Event&&(Object.setPrototypeOf(c.prototype,window.Event.prototype),i.set(window.Event.prototype,c));var g=new WeakMap,m=1,w=2,x=3;function j(e){return null!==e&&"object"===n(e)}function O(e){var t=g.get(e);if(null==t)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return t}function P(e){return{get:function(){var t=O(this),r=t.get(e);while(null!=r){if(r.listenerType===x)return r.listener;r=r.next}return null},set:function(t){"function"===typeof t||j(t)||(t=null);var r=O(this),n=null,o=r.get(e);while(null!=o)o.listenerType===x?null!==n?n.next=o.next:null!==o.next?r.set(e,o.next):r.delete(e):n=o,o=o.next;if(null!==t){var i={listener:t,listenerType:x,passive:!1,once:!1,next:null};null===n?r.set(e,i):n.next=i}},configurable:!0,enumerable:!0}}function S(e,t){Object.defineProperty(e,"on".concat(t),P(t))}function E(e){function t(){T.call(this)}t.prototype=Object.create(T.prototype,{constructor:{value:t,configurable:!0,writable:!0}});for(var r=0;r<e.length;++r)S(t.prototype,e[r]);return t}function T(){if(!(this instanceof T)){if(1===arguments.length&&Array.isArray(arguments[0]))return E(arguments[0]);if(arguments.length>0){for(var e=new Array(arguments.length),t=0;t<arguments.length;++t)e[t]=arguments[t];return E(e)}throw new TypeError("Cannot call a class as a function")}g.set(this,new Map)}T.prototype={addEventListener:function(e,t,r){if(null!=t){if("function"!==typeof t&&!j(t))throw new TypeError("'listener' should be a function or an object.");var n=O(this),o=j(r),i=o?Boolean(r.capture):Boolean(r),a=i?m:w,u={listener:t,listenerType:a,passive:o&&Boolean(r.passive),once:o&&Boolean(r.once),next:null},c=n.get(e);if(void 0!==c){var l=null;while(null!=c){if(c.listener===t&&c.listenerType===a)return;l=c,c=c.next}l.next=u}else n.set(e,u)}},removeEventListener:function(e,t,r){if(null!=t){var n=O(this),o=j(r)?Boolean(r.capture):Boolean(r),i=o?m:w,a=null,u=n.get(e);while(null!=u){if(u.listener===t&&u.listenerType===i)return void(null!==a?a.next=u.next:null!==u.next?n.set(e,u.next):n.delete(e));a=u,u=u.next}}},dispatchEvent:function(e){if(null==e||"string"!==typeof e.type)throw new TypeError('"event.type" should be a string.');var t=O(this),r=e.type,n=t.get(r);if(null==n)return!0;var o=y(this,e),i=null;while(null!=n){if(n.once?null!==i?i.next=n.next:null!==n.next?t.set(r,n.next):t.delete(r):i=n,h(o,n.passive?n.listener:null),"function"===typeof n.listener)try{n.listener.call(this,o)}catch(a){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(a)}else n.listenerType!==x&&"function"===typeof n.listener.handleEvent&&n.listener.handleEvent(o);if(b(o))break;n=n.next}return h(o,null),v(o,0),d(o,null),!o.defaultPrevented}},Object.defineProperty(T.prototype,"constructor",{value:T,configurable:!0,writable:!0}),"undefined"!==typeof window&&"undefined"!==typeof window.EventTarget&&Object.setPrototypeOf(T.prototype,window.EventTarget.prototype),t.defineEventAttribute=S,t.EventTarget=T,t.default=T,e.exports=T,e.exports.EventTarget=e.exports["default"]=T,e.exports.defineEventAttribute=S}])["default"];
/*!
 * Generated on Mon Sep 25 2017 17:14:10 GMT+0800 (CST)
 * 
 * Copyright 2017-present, WuXueqian. All rights reserved.
 * 
 * @package   elune-www
 * @version   v0.0.1
 * @author    wuxueqian <wuxueqian2010@hotmail.com>
 * @site      Elune <elune.fuli.news>
 * @license   https://opensource.org/licenses/gpl-3.0.html GPL v3
 * 
 */
webpackJsonp([5],{"0lwj":function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(t,n,o){n=n.startsWith("/")?n.substring(1):n;var r="undefined"!=typeof window?window.csrfToken:e.csrfToken,u={Accept:"application/json","Content-type":"application/json"};return r&&(u["X-CSRF-Token"]=r),d.default.Instance.Cookies&&(u.Cookie=d.default.Instance.Cookies),console.log("HEADERS for axios: "+JSON.stringify(u)),l.default.create({baseURL:s.API_BASE,timeout:1e4,withCredentials:!0,headers:u}).request({url:n,method:t,params:"get"===t.toLowerCase()?o:null,data:"get"!==t.toLowerCase()?o:null,validateStatus:function(e){return e>=200&&e<300}}).then(function(e){return s.IS_PROD||console.dir(e),e.data}).catch(function(e){throw s.IS_PROD||console.dir(e),e})}function u(e,t){return r("get",e,t)}function i(e,t){return r("post",e,t)}function c(e,t){return r("delete",e,t)}function a(e,t){return r("put",e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.webApiGet=u,t.webApiPost=i,t.webApiDel=c,t.webApiPut=a;var s=n("77eN"),f=n("mtWM"),l=o(f),p=n("5ruo"),d=o(p);t.default={Get:u,Post:i,Put:a,Delete:c}}).call(t,n("DuR2"))},"5ruo":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var u=Object.getPrototypeOf(t);return null===u?void 0:e(u,n,o)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(o):void 0},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n("y986"),f=n("C/VJ"),l=n("Kqux"),p=function(e){return e&&e.__esModule?e:{default:e}}(l),d=n("77eN"),y=function(e,t,n,o){var r,u=arguments.length,i=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(i=(u<3?r(i):u>3?r(t,n,i):r(t,n))||i);return u>3&&i&&Object.defineProperty(t,n,i),i},h=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(n.setUser=function(e){n.user=e},n.requestLogin=function(e,t){return(0,f.Login)({username:e,password:t}).then(function(e){return n.setUser(e.result),e})},n.requestRegister=function(e,t,o){return(0,f.Register)({username:e,email:t,password:o}).then(function(e){return n.setUser(e.result),e})},n.requestLogout=function(){return(0,f.Logout)().then(function(e){return n.setUser({}),e})},n.init=function(){n.checkMe()},n.checkMe=function(){return(0,f.WhoAmI)().then(function(e){return n.setUser(e.result),e})},!d.IS_NODE){var u=window.__INITIAL_STATE__||{};u&&u.globalStore&&n.fromJSON(u.globalStore)}return n}return u(t,e),i(t,[{key:"fetchData",value:function(){return this.checkMe()}},{key:"toJSON",value:function(){var e=c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"toJSON",this).call(this);return Object.assign(e,{user:this.user})}},{key:"fromJSON",value:function(e){if(c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"fromJSON",this).call(this,e),!e)return this;var n=e.user;return void 0!==n&&this.setUser(n),this}}],[{key:"getInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.instance||(t.instance=new t(e),d.IS_NODE||t.instance.init()),t.instance}},{key:"Instance",get:function(){return t.getInstance({})}}]),t}(p.default);t.default=h,y([s.observable],h.prototype,"user",void 0),y([s.action],h.prototype,"setUser",void 0),y([s.action],h.prototype,"requestLogin",void 0),y([s.action],h.prototype,"requestRegister",void 0),y([s.action],h.prototype,"requestLogout",void 0)},"77eN":function(e,t,n){"use strict";(function(e){t.__esModule=!0,t.IS_PROD=!0,t.IS_NODE=void 0!==e&&"undefined"==typeof window,t.API_BASE=t.IS_PROD&&!t.IS_NODE?"https://elune.fuli.news/api/":"http://127.0.0.1:9000/api/",t.SSR_SERVER_HOST=(t.IS_PROD,"127.0.0.1"),t.SSR_SERVER_PORT=(t.IS_PROD,9002),t.SESSION_COOKIE_NAME="SESSIONID"}).call(t,n("DuR2"))},"C/VJ":function(e,t,n){"use strict";function o(e){return f.default.Post(a.login,e)}function r(e){return f.default.Post(a.register,e)}function u(){return f.default.Post(a.logout,{})}function i(){return f.default.Post(a.checkMe,{})}Object.defineProperty(t,"__esModule",{value:!0}),t.Login=o,t.Register=r,t.Logout=u,t.WhoAmI=i;var c=n("JQvr"),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),s=n("0lwj"),f=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={Login:o,Register:r,Logout:u}},DuR2:function(e,t,n){e.exports=n("ajAl")(85)},JQvr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.login="signin",t.register="signup",t.logout="signout",t.checkMe="user/me"},Kqux:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(){function e(t){o(this,e),this.match=t.match,this.location=t.location,this.cookies=t.cookies}return r(e,[{key:"Match",get:function(){return this.match||null}},{key:"Location",get:function(){return this.location||null}},{key:"Cookies",get:function(){return this.cookies||""}}]),r(e,[{key:"toJSON",value:function(){return{match:this.match,location:this.location,cookies:this.cookies}}},{key:"fromJSON",value:function(e){if(!e)return this;var t=e.match,n=e.location,o=e.cookies;return void 0!==t&&(this.match=t),void 0!==n&&(this.location=n),void 0!==o&&(this.cookies=o),this}}]),e}();t.default=u},UcjM:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n("U7vG"),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),s=n("5ruo"),f=function(e){return e&&e.__esModule?e:{default:e}}(s),l=n("77eN"),p=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(!l.IS_NODE){var u=e.location,i=e.match;f.default.getInstance({location:u,match:i,cookies:""})}return n}return u(t,e),i(t,[{key:"render",value:function(){return a.createElement("div",null,"Channel list")}}]),t}(a.Component);t.default=p,p.STORE_CLASSES=[f.default]},mtWM:function(e,t,n){e.exports=n("ajAl")(537)},y986:function(e,t,n){e.exports=n("ajAl")(224)}});
//# sourceMappingURL=channels.46009b9f.chunk.js.map
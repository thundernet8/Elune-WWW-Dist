/*!
 * Generated on Mon Sep 25 2017 16:50:23 GMT+0800 (CST)
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
webpackJsonp([4],{"0lwj":function(t,e,n){"use strict";(function(t){function o(t){return t&&t.__esModule?t:{default:t}}function r(e,n,o){n=n.startsWith("/")?n.substring(1):n;var r="undefined"!=typeof window?window.csrfToken:t.csrfToken,i={Accept:"application/json","Content-type":"application/json"};return r&&(i["X-CSRF-Token"]=r),d.default.Instance.Cookies&&(i.Cookie=d.default.Instance.Cookies),console.log("HEADERS for axios: "+JSON.stringify(i)),l.default.create({baseURL:s.API_BASE,timeout:1e4,withCredentials:!0,headers:i}).request({url:n,method:e,params:"get"===e.toLowerCase()?o:null,data:"get"!==e.toLowerCase()?o:null,validateStatus:function(t){return t>=200&&t<300}}).then(function(t){return s.IS_PROD||console.dir(t),t.data}).catch(function(t){throw s.IS_PROD||console.dir(t),t})}function i(t,e){return r("get",t,e)}function u(t,e){return r("post",t,e)}function c(t,e){return r("delete",t,e)}function a(t,e){return r("put",t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.webApiGet=i,e.webApiPost=u,e.webApiDel=c,e.webApiPut=a;var s=n("77eN"),f=n("mtWM"),l=o(f),p=n("5ruo"),d=o(p);e.default={Get:i,Post:u,Put:a,Delete:c}}).call(e,n("DuR2"))},"5ruo":function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var u=r.get;return void 0!==u?u.call(o):void 0},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=n("y986"),f=n("C/VJ"),l=n("Kqux"),p=function(t){return t&&t.__esModule?t:{default:t}}(l),d=n("77eN"),y=function(t,e,n,o){var r,i=arguments.length,u=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(u=(i<3?r(u):i>3?r(e,n,u):r(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},h=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));if(n.setUser=function(t){n.user=t},n.requestLogin=function(t,e){return(0,f.Login)(t,e)},n.requestRegister=function(t,e,n){return(0,f.Register)(t,e,n)},n.requestLogout=function(){return(0,f.Logout)()},n.init=function(){n.checkMe()},n.checkMe=function(){return(0,f.WhoAmI)()},!d.IS_NODE){var i=window.__INITIAL_STATE__||{};i&&i.globalStore&&n.fromJSON(i.globalStore)}return n}return i(e,t),u(e,[{key:"fetchData",value:function(){return this.checkMe()}},{key:"toJSON",value:function(){var t=c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"toJSON",this).call(this);return Object.assign(t,{user:this.user})}},{key:"fromJSON",value:function(t){if(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"fromJSON",this).call(this,t),!t)return this;var n=t.user;return void 0!==n&&this.setUser(n),this}}],[{key:"getInstance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.instance||(e.instance=new e(t),d.IS_NODE||e.instance.init()),e.instance}},{key:"Instance",get:function(){return e.getInstance({})}}]),e}(p.default);e.default=h,y([s.observable],h.prototype,"user",void 0),y([s.action],h.prototype,"setUser",void 0),y([s.action],h.prototype,"requestLogin",void 0),y([s.action],h.prototype,"requestRegister",void 0),y([s.action],h.prototype,"requestLogout",void 0)},"77eN":function(t,e,n){"use strict";(function(t){e.__esModule=!0,e.IS_PROD=!0,e.IS_NODE=void 0!==t&&"undefined"==typeof window,e.API_BASE=e.IS_PROD&&!e.IS_NODE?"https://elune.fuli.news/api/":"http://127.0.0.1:9000/api/",e.SSR_SERVER_HOST=(e.IS_PROD,"127.0.0.1"),e.SSR_SERVER_PORT=(e.IS_PROD,9002),e.SESSION_COOKIE_NAME="SESSIONID"}).call(e,n("DuR2"))},"C/VJ":function(t,e,n){"use strict";function o(t,e){var n=this;return f.default.Post(a.login,{username:t,password:e}).then(function(t){return n.setUser(t.result),t})}function r(t,e,n){var o=this;return f.default.Post(a.register,{username:t,email:e,password:n}).then(function(t){return o.setUser(t.result),t})}function i(){var t=this;return f.default.Post(a.logout,{}).then(function(e){return t.setUser({}),e})}function u(){var t=this;return f.default.Post(a.checkMe,{}).then(function(e){return t.setUser(e.result),e})}Object.defineProperty(e,"__esModule",{value:!0}),e.Login=o,e.Register=r,e.Logout=i,e.WhoAmI=u;var c=n("JQvr"),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(c),s=n("0lwj"),f=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={Login:o,Register:r,Logout:i}},DuR2:function(t,e,n){t.exports=n("ajAl")(85)},JQvr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.login="signin",e.register="signup",e.logout="signout",e.checkMe="user/me"},Kqux:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=function(){function t(e){o(this,t),this.match=e.match,this.location=e.location,this.cookies=e.cookies}return r(t,[{key:"Match",get:function(){return this.match||null}},{key:"Location",get:function(){return this.location||null}},{key:"Cookies",get:function(){return this.cookies||""}}]),r(t,[{key:"toJSON",value:function(){return{match:this.match,location:this.location,cookies:this.cookies}}},{key:"fromJSON",value:function(t){if(!t)return this;var e=t.match,n=t.location,o=t.cookies;return void 0!==e&&(this.match=e),void 0!==n&&(this.location=n),void 0!==o&&(this.cookies=o),this}}]),t}();e.default=i},V4BR:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=n("U7vG"),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(c),s=n("5ruo"),f=function(t){return t&&t.__esModule?t:{default:t}}(s),l=n("77eN"),p=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));if(!l.IS_NODE){var i=t.location,u=t.match;f.default.getInstance({location:i,match:u,cookies:""})}return n}return i(e,t),u(e,[{key:"render",value:function(){return a.createElement("div",null,"NotFound")}}]),e}(a.Component);e.default=p,p.STORE_CLASSES=[f.default]},mtWM:function(t,e,n){t.exports=n("ajAl")(537)},y986:function(t,e,n){t.exports=n("ajAl")(224)}});
//# sourceMappingURL=notFound.7b0dd474.chunk.js.map
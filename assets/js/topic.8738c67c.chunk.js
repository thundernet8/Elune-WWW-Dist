/*!
 * Generated on Tue Oct 03 2017 16:34:03 GMT+0800 (CST)
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
webpackJsonp([4],{"0lwj":function(t,e,o){"use strict";(function(t){function n(e,o,n){o=o.startsWith("/")?o.substring(1):o;var r="undefined"!=typeof window?window.csrfToken:t.csrfToken,i={Accept:"application/json","Content-type":"undefined"!=typeof FormData&&n instanceof FormData?"multipart/form-data":"application/json"};return r&&(i["X-CSRF-Token"]=r),f.default.create({baseURL:a.API_BASE,timeout:6e4,withCredentials:!0,headers:i}).request({url:o,method:e,params:"get"===e.toLowerCase()?n:null,data:"get"!==e.toLowerCase()?n:null,validateStatus:function(t){return t>=200&&t<300}}).then(function(t){return a.IS_PROD||console.dir(t),t.data}).catch(function(t){throw a.IS_PROD||console.dir(t),t})}function r(t,e){return n("get",t,e)}function i(t,e){return n("post",t,e)}function u(t,e){return n("delete",t,e)}function c(t,e){return n("put",t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.webApiGet=r,e.webApiPost=i,e.webApiDel=u,e.webApiPut=c;var a=o("77eN"),s=o("mtWM"),f=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={Get:r,Post:i,Put:c,Delete:u}}).call(e,o("DuR2"))},"5ruo":function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),c=function t(e,o,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,n)}if("value"in r)return r.value;var u=r.get;return void 0!==u?u.call(n):void 0},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=o("y986"),f=o("C/VJ"),l=o("EbCR"),p=o("Kqux"),h=function(t){return t&&t.__esModule?t:{default:t}}(p),d=o("77eN"),y=function(t,e,o,n){var r,i=arguments.length,u=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(u=(i<3?r(u):i>3?r(e,o,u):r(e,o))||u);return i>3&&u&&Object.defineProperty(e,o,u),u},v=function(t){function e(t){n(this,e);var o=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));if(o.setUser=function(t){o.user=t},o.requestLogin=function(t,e){return(0,f.Login)({username:t,password:e}).then(function(t){return o.setUser(t.result),t})},o.requestRegister=function(t,e,n){return(0,f.Register)({username:t,email:e,password:n}).then(function(t){return o.setUser(t.result),t})},o.requestLogout=function(){return(0,f.Logout)().then(function(t){return o.setUser({}),t})},o.authType=l.AuthType.None,o.switchAuthModal=function(t){o.authType=t},o.showLoginAuthModal=function(){o.authType=l.AuthType.Login},o.closeAuthModal=function(){o.authType=l.AuthType.None},o.init=function(){o.checkMe()},o.checkMe=function(){return(0,f.WhoAmI)().then(function(t){return o.setUser(t.result),t})},!d.IS_NODE){var i=window.__INITIAL_STATE__||{};i&&i.globalStore&&o.fromJSON(i.globalStore)}return o}return i(e,t),u(e,[{key:"fetchData",value:function(){return this.checkMe()}},{key:"toJSON",value:function(){var t=c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"toJSON",this).call(this);return Object.assign(t,{user:this.user})}},{key:"fromJSON",value:function(t){if(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"fromJSON",this).call(this,t),!t)return this;var o=t.user;return void 0!==o&&this.setUser(o),this}}],[{key:"getInstance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.instance||(e.instance=new e(t),d.IS_NODE||e.instance.init()),e.instance}},{key:"Instance",get:function(){return e.getInstance({})}}]),e}(h.default);e.default=v,y([s.observable],v.prototype,"user",void 0),y([s.action],v.prototype,"setUser",void 0),y([s.action],v.prototype,"requestLogin",void 0),y([s.action],v.prototype,"requestRegister",void 0),y([s.action],v.prototype,"requestLogout",void 0),y([s.observable],v.prototype,"authType",void 0),y([s.action],v.prototype,"switchAuthModal",void 0),y([s.action],v.prototype,"showLoginAuthModal",void 0),y([s.action],v.prototype,"closeAuthModal",void 0)},"77eN":function(t,e,o){"use strict";(function(t){e.__esModule=!0,e.IS_PROD=!0,e.IS_NODE=void 0!==t&&"undefined"==typeof window,e.API_BASE=e.IS_NODE?"http://127.0.0.1:9000/api/v1/":"https://elune.fuli.news/api/v1/",e.SSR_SERVER_HOST=(e.IS_PROD,"127.0.0.1"),e.SSR_SERVER_PORT=(e.IS_PROD,9002),e.SESSION_COOKIE_NAME="SESSIONID"}).call(e,o("DuR2"))},"C/VJ":function(t,e,o){"use strict";function n(t){return a.default.Post("signin",t)}function r(t){return a.default.Post("signup",t)}function i(){return a.default.Post("signout",{})}function u(){return a.default.Post("user/me",{})}Object.defineProperty(e,"__esModule",{value:!0}),e.Login=n,e.Register=r,e.Logout=i,e.WhoAmI=u;var c=o("0lwj"),a=function(t){return t&&t.__esModule?t:{default:t}}(c);e.default={Login:n,Register:r,Logout:i}},DuR2:function(t,e,o){t.exports=o("dfDh")(87)},EbCR:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=e.AuthType=void 0;!function(t){t[t.None=0]="None",t[t.Login=1]="Login",t[t.Register=2]="Register"}(n||(e.AuthType=n={}))},Kqux:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),i=function(){function t(e){n(this,t),this.match=e.match,this.location=e.location,this.cookies=e.cookies}return r(t,[{key:"Match",get:function(){return this.match||null}},{key:"Location",get:function(){return this.location||null}},{key:"Cookies",get:function(){return this.cookies||""}}]),r(t,[{key:"reset",value:function(t){this.match=t.match,this.location=t.location,this.cookies=t.cookies}},{key:"toJSON",value:function(){return{match:this.match,location:this.location,cookies:this.cookies}}},{key:"fromJSON",value:function(t){if(!t)return this;var e=t.match,o=t.location,n=t.cookies;return void 0!==e&&(this.match=e),void 0!==o&&(this.location=o),void 0!==n&&(this.cookies=n),this}}]),t}();e.default=i},"L/iJ":function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),c=o("GiK3"),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}(c),s=o("5ruo"),f=function(t){return t&&t.__esModule?t:{default:t}}(s),l=o("77eN"),p=function(t){function e(t){n(this,e);var o=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));if(!l.IS_NODE){var i=t.location,u=t.match;f.default.getInstance({location:i,match:u,cookies:""})}return o}return i(e,t),u(e,[{key:"render",value:function(){return a.createElement("div",null,"Topic")}}]),e}(a.Component);e.default=p,p.STORE_CLASSES=[f.default]},mtWM:function(t,e,o){t.exports=o("dfDh")(920)},y986:function(t,e,o){t.exports=o("dfDh")(330)}});
//# sourceMappingURL=topic.8738c67c.chunk.js.map
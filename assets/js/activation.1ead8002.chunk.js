/*!
 * Generated on Thu Oct 19 2017 18:04:29 GMT+0800 (CST)
 * 
 * Copyright 2017-present, WuXueqian. All rights reserved.
 * 
 * @package   elune-www
 * @version   v0.0.1
 * @author    wuxueqian <wuxueqian2010@hotmail.com>
 * @site      Elune <elune.me>
 * @license   https://opensource.org/licenses/gpl-3.0.html GPL v3
 * 
 */
webpackJsonp([6],{"0lwj":function(e,t,n){"use strict";(function(e){function r(t,n,r){n=n.startsWith("/")?n.substring(1):n;var a="undefined"!=typeof window?window.csrfToken:e.csrfToken,o={Accept:"application/json","Content-type":"undefined"!=typeof FormData&&r instanceof FormData?"multipart/form-data":"application/json"};return a&&(o["X-CSRF-Token"]=a),s.default.create({baseURL:c.API_BASE,timeout:6e4,withCredentials:!0,headers:o}).request({url:n,method:t,params:"get"===t.toLowerCase()?r:null,data:"get"!==t.toLowerCase()?r:null,validateStatus:function(e){return e>=200&&e<300}}).then(function(e){return c.IS_PROD||console.dir(e),e.data}).catch(function(e){throw c.IS_PROD||console.dir(e),e})}function a(e,t){return r("get",e,t)}function o(e,t){return r("post",e,t)}function i(e,t){return r("delete",e,t)}function u(e,t){return r("put",e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.webApiGet=a,t.webApiPost=o,t.webApiDel=i,t.webApiPut=u;var c=n("77eN"),l=n("mtWM"),s=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default={Get:a,Post:o,Put:u,Delete:i}}).call(t,n("DuR2"))},"77eN":function(e,t,n){"use strict";(function(e){t.__esModule=!0,t.IS_PROD=!0,t.IS_NODE=void 0!==e&&"[object global]"===(new Object).toString.call(e),t.API_BASE=t.IS_PROD&&!t.IS_NODE?"https://elune.fuli.news/api/v1/":"http://127.0.0.1:9000/api/v1/",t.SSR_SERVER_HOST=(t.IS_PROD,"127.0.0.1"),t.SSR_SERVER_PORT=(t.IS_PROD,9002),t.SESSION_COOKIE_NAME="SESSIONID"}).call(t,n("DuR2"))},"945i":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("GiK3"),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u),l=n("WYFf"),s=function(e){return e&&e.__esModule?e:{default:e}}(l),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return c.createElement(s.default,null)}}]),t}(c.Component);t.default=f,f.STORE_CLASSES=[]},"C/VJ":function(e,t,n){"use strict";function r(e){return s.default.Post("signin",e)}function a(e){return s.default.Post("signup",e)}function o(){return s.default.Post("signout",{})}function i(){return s.default.Post("user/me",{})}function u(e){return s.default.Post("activate"+e.tokenSearch,{})}function c(e){return s.default.Post("reactivate",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Login=r,t.Register=a,t.Logout=o,t.WhoAmI=i,t.Activate=u,t.ReActivate=c;var l=n("0lwj"),s=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default={Login:r,Register:a,Logout:o}},CIox:function(e,t,n){e.exports=n("ILXe")(512)},DuR2:function(e,t,n){e.exports=n("ILXe")(72)},"K7g+":function(e,t,n){e.exports=n("ILXe")(270)},SThF:function(e,t,n){e.exports=n("ILXe")(283)},WYFf:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("GiK3"),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(l),f=n("HW6M"),p=r(f),d=n("K7g+"),m=r(d),_=n("CIox"),v=n("C/VJ"),E=n("SThF"),A=n("hQ/K"),h=n("d96U");!function(e){e[e.ACTIVATING=0]="ACTIVATING",e[e.ACTIVATED=1]="ACTIVATED",e[e.ACTIVATE_FAILED=2]="ACTIVATE_FAILED",e[e.REACTIVATE=3]="REACTIVATE"}(u||(u={}));var S=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onInputEmail=function(e){n.setState({email:e})},n.onSwitchStep=function(e){n.setState({step:e})},n.reSendMail=function(){var e=n.state.email;return e?(0,A.isEmail)(e)?void(0,v.ReActivate)({email:e}).then(function(e){if(!e)throw new Error("");(0,E.Message)({message:"激活邮件已重新发送",type:"success"}),n.setState({email:""})}).catch(function(){(0,E.Message)({message:"请求失败，请重试",type:"error"})}):((0,E.Message)({message:"邮箱不合法",type:"error"}),!1):((0,E.Message)({message:"邮箱不能为空",type:"error"}),!1)},n.renderActivatingStep=function(){return n.state.step!==u.ACTIVATING?null:s.createElement("div",{className:h.content},s.createElement("div",{className:h.activating},s.createElement("i",{className:"el-icon-loading"}),s.createElement("p",null,"正在尝试激活")))},n.renderActivatedStep=function(){var e=n.state,t=e.step,r=e.timing;return t!==u.ACTIVATED?null:s.createElement("div",{className:h.content},s.createElement("div",{className:h.activated},s.createElement("p",null,"您的账户已激活成功，将在",s.createElement("span",{className:h.timing},r),"秒内跳转至首页.")))},n.renderActivateFailStep=function(){return n.state.step!==u.ACTIVATE_FAILED?null:s.createElement("div",{className:h.content},s.createElement("div",{className:h.activateFailed},s.createElement("p",null,"激活失败，您的链接已过期或无效"),s.createElement(E.Button,{type:"text",onClick:n.onSwitchStep.bind(n,u.REACTIVATE)},"重新发送激活邮件")))},n.renderReActivateStep=function(){var e=n.state,t=e.step,r=e.email;return t!==u.REACTIVATE?null:s.createElement("div",{className:h.content},s.createElement("div",{className:h.reActivate},s.createElement(E.Input,{placeholder:"输入账户邮箱",value:r,onChange:n.onInputEmail,className:h.emailInput}),s.createElement(E.Button,{type:"primary",onClick:n.reSendMail,disabled:!(0,A.isEmail)(r)},"重新发送")))},n.state={timing:10,step:u.ACTIVATING,email:""},n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search;(0,v.Activate)({tokenSearch:t}).then(function(t){if(!t)throw new Error("");e.setState({step:u.ACTIVATED});var n=e;setInterval(function(){n.setState({timing:n.state.timing-1})},1e3)}).catch(function(){(0,E.Message)({message:"账户激活失败, 您的激活链接已过期或无效",type:"error"}),e.setState({step:u.ACTIVATE_FAILED})})}},{key:"componentDidUpdate",value:function(){this.state.timing<=0&&"undefined"!=typeof window&&(window.location.href="/")}},{key:"render",value:function(){var e={title:"账户激活-Eleun Forum-Web development community,WordPress,PHP,Java,JavaScript",description:"I am a description, and I can create multiple tags",meta:{charset:"utf-8",name:{keywords:"Eleun,forum,wordpress,php,java,javascript,react"}}};return s.createElement("div",{className:h.activationView},s.createElement(m.default,Object.assign({},e)),s.createElement("div",{className:(0,p.default)("container",[h.container])},s.createElement("h1",null,"账户激活"),this.renderActivatingStep(),this.renderActivatedStep(),this.renderActivateFailStep(),this.renderReActivateStep()))}}]),t}(s.Component),y=(0,_.withRouter)(S);t.default=y},d96U:function(e,t){e.exports={activationView:"__2sjBU",container:"__2-g1p",content:"__3BORl",activating:"__o5IRt",activated:"__3fcij",timing:"__3g1jb",activateFailed:"__1GYF1",reActivate:"__R8Br_",emailInput:"__25YuQ"}},"hQ/K":function(e,t,n){"use strict";t.__esModule=!0,t.isEmail=function(e){return e=e?e.toString():"",new RegExp(/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/).test(e)},t.lowerCaseFirst=function(e){return e?e[0].toLowerCase()+e.slice(1):e}},mtWM:function(e,t,n){e.exports=n("ILXe")(740)}});
//# sourceMappingURL=activation.1ead8002.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"101":function(e,t,n){"use strict";n(31);var r=n(2),o=n.n(r),i=n(34),a=n.n(i),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function RichText(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RichText),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(RichText.__proto__||Object.getPrototypeOf(RichText)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(RichText,o.a.Component),c(RichText,[{"key":"renderNodes","value":function renderNodes(e){if("text"===e.type)return o.a.createElement("span",{},e.text);var t=this.renderChildrens(e.children),n={"className":"","style":""};if(e.hasOwnProperty("attrs"))for(var r in e.attrs)"class"===r?n.className=e.attrs[r]||"":n[r]=e.attrs[r]||"";return o.a.createElement(e.name,n,t)}},{"key":"renderChildrens","value":function renderChildrens(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0!==t.length)return t.map(function(t,n){return"text"===t.type?t.text:e.renderNodes(t)})}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.nodes,r=t.className,i=function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["nodes","className"]);return Array.isArray(n)?o.a.createElement("div",s({"className":r},a()(this.props,["nodes","className"]),i),n.map(function(t,n){return e.renderNodes(t)})):o.a.createElement("div",s({"className":r},a()(this.props,["className"]),i,{"dangerouslySetInnerHTML":{"__html":n}}))}}]),RichText}();t.a=l},"111":function(e,t,n){e.exports={"content":"withUs-module__content___3kXh_","title":"withUs-module__title___25tiT","richtext":"withUs-module__richtext___2Tg7x","div":"withUs-module__div___1ciRj","ways":"withUs-module__ways___h6nP-","way":"withUs-module__way___sEbPB","line":"withUs-module__line___1VTTs","bot":"withUs-module__bot___2fDxf"}},"35":function(e,t,n){var r=n(36);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(33)(r,o);r.locals&&(e.exports=r.locals)},"36":function(e,t,n){(e.exports=n(32)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""])},"39":function(e,t,n){var r=n(40);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(33)(r,o);r.locals&&(e.exports=r.locals)},"40":function(e,t,n){(e.exports=n(32)(!1)).push([e.i,".taro-img {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  font-size: 0;\n  width: 320px;\n  height: 240px;\n}\n\n.taro-img.taro-img__widthfix {\n  height: 100%;\n}\n\n.taro-img__mode-scaletofill {\n  width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-aspectfit {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.taro-img__mode-aspectfill {\n  min-width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-widthfix {\n  width: 100%;\n}\n\n.taro-img__mode-top {\n  width: 100%;\n}\n\n.taro-img__mode-bottom {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-left {\n  height: 100%;\n}\n\n.taro-img__mode-right {\n  position: absolute;\n  height: 100%;\n  right: 0;\n}\n\n.taro-img__mode-topright {\n  position: absolute;\n  right: 0;\n}\n\n.taro-img__mode-bottomleft {\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}",""])},"42":function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(0),o=n(2),i=n.n(o),a=n(454),s=n(49),c=n(43),l=n.n(c),u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var p=function(e){function Loading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Loading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Loading.__proto__||Object.getPrototypeOf(Loading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Loading,r["a"].Component),u(Loading,[{"key":"render","value":function render(){return i.a.createElement(a.a,{"className":l.a.loading},i.a.createElement(s.a,{"src":n(45),"className":l.a.loadingImage}))}}]),Loading}()},"43":function(e,t,n){e.exports={"loading":"index-module__loading___h426J","loadingImage":"index-module__loadingImage___3wGZy"}},"45":function(e,t,n){e.exports=n.p+"static/images/loading.a0cbcc17ab3eba84e5f44154f34b73c8.gif"},"46":function(e,t,n){"use strict";n(31);var r=n(2),o=n.n(r),i=n(34),a=n.n(i),s=n(30),c=n.n(s),l=(n(35),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var p=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,o.a.Component),u(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,r=void 0!==n&&n,i=c()("taro-text",{"taro-text__selectable":r},t);return o.a.createElement("span",l({},a()(this.props,["selectable","className"]),{"className":i}),this.props.children)}}]),Text}();t.a=p},"49":function(e,t,n){"use strict";n(31);var r=n(2),o=n.n(r),i=n(30),a=n.n(i),s=(n(39),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var l=function(e){function Image(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Image),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Image.__proto__||Object.getPrototypeOf(Image)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Image,o.a.Component),c(Image,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.src,r=e.style,i=e.mode,c=e.onLoad,l=e.onError,u=function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["className","src","style","mode","onLoad","onError"]),p=a()("taro-img",{"taro-img__widthfix":"widthFix"===i},t),f="taro-img__mode-"+(i||"scaleToFill").toLowerCase().replace(/\s/g,"");return o.a.createElement("div",s({"className":p,"style":r},u),o.a.createElement("img",{"className":f,"src":n,"onLoad":c,"onError":l}))}}]),Image}();t.a=l},"490":function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(2),i=n.n(o),a=n(454),s=n(46),c=n(101),l=n(42),u=n(38),p=n(111),f=n.n(p),h=(n(68),n(63)),d=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=function(e){function ServicePro(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ServicePro);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=ServicePro.__proto__||Object.getPrototypeOf(ServicePro)).call.apply(e,[this].concat(o))),n.config={"navigationBarTitleText":"服务协议"},n.state={"loading":!0,"nodes":""},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ServicePro,r["a"].Component),d(ServicePro,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(this.props,e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this;Object(h.a)(null,{"code":200,"message":"OK","path":"title","data":{"title":"服务协议"}});var t=setTimeout(function(n){e.setState({"loading":!1}),clearTimeout(t)},1e3);this.getList()}},{"key":"goBackClick","value":function goBackClick(){r.a.navigateBack({"delta":1})}},{"key":"getList","value":function getList(){var e=this;Object(u.a)("getWithUsList",{}).then(function(t){console.log(t),e.setState({"nodes":t.content})})}},{"key":"render","value":function render(){return this.state.loading?i.a.createElement(l.a,null):i.a.createElement(a.a,{"className":f.a.content},!Object(h.b)()&&i.a.createElement(a.a,{"className":f.a.title},i.a.createElement(s.a,{"className":"iconfont icon-left","style":{"position":"absolute","left":"21px","fontSize":"15px"},"onClick":this.goBackClick.bind(this)}),"服务协议"),i.a.createElement(a.a,{"style":"margin:0px 21px 0 18px;font-size:14px;"},i.a.createElement(c.a,{"className":f.a.richtext,"nodes":this.state.nodes})))}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),ServicePro}();t.default=m},"63":function(e,t,n){"use strict";n.d(t,"a",function(){return JsBridge}),n.d(t,"b",function(){return isNativeApp});var r=n(0);n(2);function isNativeApp(){var e=(r.a._$router||{}).params;return!!e.clientType&&e.clientType.length>0}function JsBridge(e,t){var n=null;if(r.a.getEnv()===r.a.ENV_TYPE.WEB&&isNativeApp()){for(var o,i=arguments.length,a=Array(i>2?i-2:0),s=2;s<i;s++)a[s-2]=arguments[s];n=(o=window).prompt.apply(o,[e,JSON.stringify(t)].concat(a))}else console.warn("不在原生App: ",r.a.getEnv(),", 交互数据：",t,", router: ",r.a._$router);return n}},"68":function(e,t,n){}}]);
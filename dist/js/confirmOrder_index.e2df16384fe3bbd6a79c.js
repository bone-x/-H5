(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"316":function(e,t,n){},"35":function(e,t,n){var o=n(36);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(33)(o,r);o.locals&&(e.exports=o.locals)},"36":function(e,t,n){(e.exports=n(32)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""])},"39":function(e,t,n){var o=n(40);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(33)(o,r);o.locals&&(e.exports=o.locals)},"40":function(e,t,n){(e.exports=n(32)(!1)).push([e.i,".taro-img {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  font-size: 0;\n  width: 320px;\n  height: 240px;\n}\n\n.taro-img.taro-img__widthfix {\n  height: 100%;\n}\n\n.taro-img__mode-scaletofill {\n  width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-aspectfit {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.taro-img__mode-aspectfill {\n  min-width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-widthfix {\n  width: 100%;\n}\n\n.taro-img__mode-top {\n  width: 100%;\n}\n\n.taro-img__mode-bottom {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-left {\n  height: 100%;\n}\n\n.taro-img__mode-right {\n  position: absolute;\n  height: 100%;\n  right: 0;\n}\n\n.taro-img__mode-topright {\n  position: absolute;\n  right: 0;\n}\n\n.taro-img__mode-bottomleft {\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}",""])},"42":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o=n(0),r=n(2),i=n.n(r),a=n(454),s=n(49),c=n(43),u=n.n(c),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var f=function(e){function Loading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Loading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Loading.__proto__||Object.getPrototypeOf(Loading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Loading,o["a"].Component),l(Loading,[{"key":"render","value":function render(){return i.a.createElement(a.a,{"className":u.a.loading},i.a.createElement(s.a,{"src":n(45),"className":u.a.loadingImage}))}}]),Loading}()},"43":function(e,t,n){e.exports={"loading":"index-module__loading___h426J","loadingImage":"index-module__loadingImage___3wGZy"}},"45":function(e,t,n){e.exports=n.p+"static/images/loading.a0cbcc17ab3eba84e5f44154f34b73c8.gif"},"46":function(e,t,n){"use strict";n(31);var o=n(2),r=n.n(o),i=n(34),a=n.n(i),s=n(30),c=n.n(s),u=(n(35),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var f=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,r.a.Component),l(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,o=void 0!==n&&n,i=c()("taro-text",{"taro-text__selectable":o},t);return r.a.createElement("span",u({},a()(this.props,["selectable","className"]),{"className":i}),this.props.children)}}]),Text}();t.a=f},"469":function(e,t,n){"use strict";n.r(t);var o,r=n(0),i=n(2),a=n.n(i),s=n(454),c=n(46),u=n(8),l=n(48),f=n(42),p=n(316),d=n.n(p),m=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=Object(u.b)(function(e){return e.counter},{"add":l.a,"minus":l.c,"asyncAdd":l.b})(o=function(e){function ConfirmOrder(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ConfirmOrder);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=ConfirmOrder.__proto__||Object.getPrototypeOf(ConfirmOrder)).call.apply(e,[this].concat(r))),n.config={"navigationBarTitleText":"ConfirmOrder"},n.state={"loading":!0},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ConfirmOrder,r["a"].Component),m(ConfirmOrder,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(this.props,e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this;console.log(r.a.getEnv()),console.log(r.a.ENV_TYPE);var t=setTimeout(function(n){e.setState({"loading":!1}),clearTimeout(t)},1e3)}},{"key":"render","value":function render(){return this.state.loading?a.a.createElement(f.a,null):a.a.createElement(s.a,{"className":d.a.demo},a.a.createElement(c.a,null,"ConfirmOrder page"))}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),ConfirmOrder}())||o;t.default=h},"48":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return asyncAdd});var o=n(5),r=function add(){return{"type":o.a}},i=function minus(){return{"type":o.c}};function asyncAdd(){return function(e){setTimeout(function(){e(r())},2e3)}}},"49":function(e,t,n){"use strict";n(31);var o=n(2),r=n.n(o),i=n(30),a=n.n(i),s=(n(39),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var u=function(e){function Image(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Image),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Image.__proto__||Object.getPrototypeOf(Image)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Image,r.a.Component),c(Image,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.src,o=e.style,i=e.mode,c=e.onLoad,u=e.onError,l=function _objectWithoutProperties(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["className","src","style","mode","onLoad","onError"]),f=a()("taro-img",{"taro-img__widthfix":"widthFix"===i},t),p="taro-img__mode-"+(i||"scaleToFill").toLowerCase().replace(/\s/g,"");return r.a.createElement("div",s({"className":f,"style":o},l),r.a.createElement("img",{"className":p,"src":n,"onLoad":c,"onError":u}))}}]),Image}();t.a=u}}]);
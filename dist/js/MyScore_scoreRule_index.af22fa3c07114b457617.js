(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"306":function(e,t,n){e.exports={"scoreRlue":"index-module__scoreRlue___1U47u","contentBox":"index-module__contentBox___2_xj2","imgBox":"index-module__imgBox___1b4_W","answerTitle":"index-module__answerTitle___3NHNS"}},"464":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var o=n(0),r=n(2),i=n.n(r),a=n(454),l=n(49),c=n(306),s=n.n(c),u=n(465),p=n(191),f=n(63),m=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var d=function(e){function ScoreRule(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ScoreRule);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ScoreRule.__proto__||Object.getPrototypeOf(ScoreRule)).call(this,e));return t.config={"navigationBarTitleText":"积分规则"},t.handleClick=function(){o.a.navigateTo({"url":"/pages/MyScore/index"})},t.state={"ruleList":[{"title":"如何获得积分？","answer":"用户获得积分的方法如下：","img":"https://hq-expert-online-school.oss-cn-shenzhen.aliyuncs.com/demo_img/pointRule.png"},{"title":"用户个人积分上限？","answer":"每个人每天获得积分上限为1000分","img":null},{"title":"积分期限是多少？","answer":"自然年内有效，次年3月31日23：59分将清空积分","img":null},{"title":"积分用途？","answer":"积分可用来兑换某些商品，后期将会开发更多积分活动，请积极参与哦~","img":null}]},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ScoreRule,o["a"].Component),m(ScoreRule,[{"key":"componentDidMount","value":function componentDidMount(){var e=this;if(Object(f.a)(null,{"code":200,"message":"OK","path":"title","data":{"title":"积分规则"}}),Object(f.b)()){var t=this.state.ruleList;t[0].img="https://hq-expert-online-school.oss-cn-shenzhen.aliyuncs.com/demo_img/app_rule.png",this.setState({"ruleList":t},function(){console.log(e.state)})}}},{"key":"render","value":function render(){var e=this.state.ruleList;return i.a.createElement(a.a,{"className":s.a.scoreRlue},!Object(f.b)()&&i.a.createElement(a.a,{"className":s.a.header},i.a.createElement(u.a,{"onClickLeftIcon":this.handleClick,"color":"#000","title":"积分规则","leftIconType":"chevron-left"})),i.a.createElement(a.a,{"className":s.a.contentBox},e.map(function(e,t){return i.a.createElement(p.a,{"key":t,"title":e.title},i.a.createElement(a.a,{"className":s.a.answerTitle},e.answer),null!=e.img?i.a.createElement(l.a,{"src":e.img,"className":s.a.imgBox}):null)})))}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),ScoreRule}()}}]);
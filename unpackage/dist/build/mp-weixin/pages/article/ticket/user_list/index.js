(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/ticket/user_list/index"],{1963:function(e,n,t){"use strict";t.r(n);var u=t("87a6"),o=t("3206");for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);var l,r=t("f0c5"),s=Object(r["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],l);n["default"]=s.exports},3206:function(e,n,t){"use strict";t.r(n);var u=t("dda2"),o=t.n(u);for(var i in u)"default"!==i&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=o.a},"87a6":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return u}));var u={uTopTips:function(){return t.e("node-modules/uview-ui/components/u-top-tips/u-top-tips").then(t.bind(null,"5daa"))},uCellGroup:function(){return t.e("node-modules/uview-ui/components/u-cell-group/u-cell-group").then(t.bind(null,"881b"))},uCellItem:function(){return t.e("node-modules/uview-ui/components/u-cell-item/u-cell-item").then(t.bind(null,"e9d4"))},uModal:function(){return t.e("node-modules/uview-ui/components/u-modal/u-modal").then(t.bind(null,"1d32"))},uForm:function(){return t.e("node-modules/uview-ui/components/u-form/u-form").then(t.bind(null,"ea8b"))},uFormItem:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,"a64a"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,"d407"))}},o=function(){var e=this,n=e.$createElement;e._self._c},i=[]},cb4d:function(e,n,t){"use strict";(function(e){t("2cc5");u(t("66fd"));var n=u(t("1963"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},dda2:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=i(t("007a")),o=i(t("7a1f"));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(){t.e("components/tabber/index").then(function(){return resolve(t("24b6"))}.bind(null,t)).catch(t.oe)},r={data:function(){return{useradd:{loading:!1,full_name:null,certificates_no:null,mobile:null},user:{token:null,openid:null,userid:null},userResults:{count:0,next:null,previous:null,results:[]},contextResults:{id:null,name:"第四届中国·北京汉服文化节",context:"",money:198e3,images:"https://api.hanfuc.com/media/activity-image/1629911108/2021-08-26_010508.jpeg",user_name:"",dateday:1,browse:1,user_attend_num:0,start_date:"00/00/00 00:00",end_date:"00/00/00 00:00",amap:[{lnglat:{lng:116.319089,lat:39.942349},name:"紫竹院公园",address:"中关村南大街35号",adname:"海淀区",cityname:"北京市"}]}}},onLoad:function(n){var t=this;e.setNavigationBarTitle({title:"选择用户"});var i=u.default.getters["getUser"];this.user.token=i.token,this.user.userid=i.userid,this.user.openid=i.openid,o.default.userInfo("GET",{user:this.user.userid}).then((function(e){console.log(e),t.userResults=e})).catch((function(){t.$refs.uTips.show({title:"获取用户信息失败",type:"error",duration:"5000"})})).finally((function(){}))},components:{"x-tabber":l},methods:{clickCellItem:function(n){console.log(n),u.default.commit("ticketUserId",this.userResults.results[n].id),u.default.commit("ticketUserFullName",this.userResults.results[n].full_name),e.navigateBack({delta:1})},enroll:function(){console.log("enroll"),this.useradd.loading=!0},confirmUserInfo:function(){var n=this;this.$refs.uForm.validate((function(t){t?(e.showLoading({title:"加载中"}),o.default.userInfo("POST",{user:n.user.userid,full_name:n.useradd.full_name,certificates_no:n.useradd.certificates_no,mobile:n.useradd.mobile}).then((function(e){console.log("验证通过"),n.$refs.uTips.show({title:"用户信息添加成功",type:"success",duration:"2300"})})).catch((function(){n.$refs.uTips.show({title:"用户信息添加失败，请重试",type:"error",duration:"5000"})})).finally((function(){o.default.userInfo("GET",{user:n.user.userid}).then((function(e){console.log(e),n.userResults=e})).catch((function(){n.$refs.uTips.show({title:"获取用户信息失败",type:"error",duration:"5000"})})).finally((function(){})),setTimeout((function(){n.useradd.loading=!1,n.$refs.uModalUserInfo.clearLoading(),e.hideLoading()}),100)}))):(console.log("验证失败"),n.$refs.uModalUserInfo.clearLoading())}))}}};n.default=r}).call(this,t("543d")["default"])}},[["cb4d","common/runtime","common/vendor"]]]);
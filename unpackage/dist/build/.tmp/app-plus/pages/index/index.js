(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"5e0b":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},a1ef:function(t,n,e){},affa:function(t,n,e){"use strict";var a=e("a1ef"),i=e.n(a);i.a},ba4c:function(t,n,e){"use strict";e.r(n);var a=e("5e0b"),i=e("ccbb");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("affa");var u=e("2877"),c=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},ccbb:function(t,n,e){"use strict";e.r(n);var a=e("cced"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},cced:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return e.e("components/status/index").then(e.bind(null,"4e46"))},i=function(){return e.e("components/index").then(e.bind(null,"4f07"))},o=function(){return e.e("components/wuc-tab/wuc-tab").then(e.bind(null,"4921"))},u=function(){return e.e("components/card/index").then(e.bind(null,"cae6"))},c=function(){return e.e("components/navbar/index").then(e.bind(null,"96fe"))},s=null,r={data:function(){return{title:"Hello",statusHeight:0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,TabCur:1,tabList:[{name:"关注"},{name:"最新"},{name:"活动"}]}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){this.statusHeight=plus.navigator.getStatusbarHeight(),this.statusTop=this.statusHeight+"px",s=new plus.nativeObj.Bitmap("bmp1"),s.load("static/add.png",function(){},function(t){}),this.createtab()},components:{indexheader:i,ustatus:a,"wuc-tab":o,card:u,"x-navbar":c},methods:{tabChange:function(t){console.log("tabChange",t," at pages\\index\\index.vue:96"),this.TabCur=Number(t)},swiperChange:function(t){console.log("swiperChange",t," at pages\\index\\index.vue:100"),this.TabCur=t.detail.current},createtab:function(){var n=Math.ceil((plus.screen.resolutionWidth-60)/2),e=new plus.nativeObj.View("icon",{bottom:"11px",left:n+"px",width:"60px",height:"60px"});e.drawBitmap(s,{tag:"font",id:"icon",src:"../static/add.png",position:{top:"0px",left:"5px",width:"50px",height:"100%"}}),e.addEventListener("click",function(n){t.switchTab({url:"tabbar2"})},!1),e.show()}}};n.default=r}).call(this,e("6e42")["default"])}},[["79bc","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/new_draw"],{1701:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={components:{thAutograph:function(){Promise.all([e.e("common/vendor"),e.e("uni_modules/th-autograph/components/th-autograph/th-autograph")]).then(function(){return resolve(e("95d1"))}.bind(null,e)).catch(e.oe)}},data:function(){return{stages:"1"}},methods:{next:function(){"1"==this.stages?t.showModal({title:"提示",content:"确定要进入下一阶段吗？",success:function(n){n.confirm?t.redirectTo({url:"/pages/index/watch_data"}):n.cancel}}):t.showModal({title:"提示",content:"确定要结束绘画吗？",success:function(n){n.confirm?t.redirectTo({url:"/pages/index/home"}):n.cancel}})}},onLoad:function(t){this.stages=t.stage}};n.default=o}).call(this,e("df3c")["default"])},"22ff":function(t,n,e){},7896:function(t,n,e){"use strict";e.r(n);var o=e("e6e9"),u=e("8881");for(var a in u)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("7b87");var c=e("828b"),r=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=r.exports},"7b87":function(t,n,e){"use strict";var o=e("22ff"),u=e.n(o);u.a},8881:function(t,n,e){"use strict";e.r(n);var o=e("1701"),u=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=u.a},d482:function(t,n,e){"use strict";(function(t,n){var o=e("47a9");e("5a75");o(e("3240"));var u=o(e("7896"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(u.default)}).call(this,e("3223")["default"],e("df3c")["createPage"])},e6e9:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={thAutograph:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/th-autograph/components/th-autograph/th-autograph")]).then(e.bind(null,"95d1"))}},u=function(){var t=this.$createElement;this._self._c},a=[]}},[["d482","common/runtime","common/vendor"]]]);
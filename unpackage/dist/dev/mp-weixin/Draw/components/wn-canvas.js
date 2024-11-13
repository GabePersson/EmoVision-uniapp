(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["Draw/components/wn-canvas"],{

/***/ 120:
/*!***************************************************************************************************!*\
  !*** D:/我的文档/Documents/项目/uniapp/Emovision-uniapp/Emovision-uniapp/Draw/components/wn-canvas.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wn_canvas_vue_vue_type_template_id_0efcff82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wn-canvas.vue?vue&type=template&id=0efcff82& */ 121);
/* harmony import */ var _wn_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wn-canvas.vue?vue&type=script&lang=js& */ 123);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wn_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wn_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _wn_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wn-canvas.vue?vue&type=style&index=0&lang=scss& */ 148);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _wn_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wn_canvas_vue_vue_type_template_id_0efcff82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wn_canvas_vue_vue_type_template_id_0efcff82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _wn_canvas_vue_vue_type_template_id_0efcff82___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "Draw/components/wn-canvas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 121:
/*!**********************************************************************************************************************************!*\
  !*** D:/我的文档/Documents/项目/uniapp/Emovision-uniapp/Emovision-uniapp/Draw/components/wn-canvas.vue?vue&type=template&id=0efcff82& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_template_id_0efcff82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wn-canvas.vue?vue&type=template&id=0efcff82& */ 122);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_template_id_0efcff82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_template_id_0efcff82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_template_id_0efcff82___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_template_id_0efcff82___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 122:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/我的文档/Documents/项目/uniapp/Emovision-uniapp/Emovision-uniapp/Draw/components/wn-canvas.vue?vue&type=template&id=0efcff82& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 123:
/*!****************************************************************************************************************************!*\
  !*** D:/我的文档/Documents/项目/uniapp/Emovision-uniapp/Emovision-uniapp/Draw/components/wn-canvas.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wn-canvas.vue?vue&type=script&lang=js& */ 124);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 124:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/我的文档/Documents/项目/uniapp/Emovision-uniapp/Emovision-uniapp/Draw/components/wn-canvas.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 125));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 127));
var color = function color() {
  __webpack_require__.e(/*! require.ensure | Draw/components/color */ "Draw/components/color").then((function () {
    return resolve(__webpack_require__(/*! ./color.vue */ 157));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  name: "canvas",
  components: {
    color: color
  },
  data: function data() {
    return {
      colorShow: false,
      //显示颜色
      drawContext: null,
      //画板对象
      historyList: [],
      //路径历史
      startX: 0,
      //起始坐标
      startY: 0,
      lastX: 0,
      lastY: 0,
      mode: "pen",
      //操作模式
      currentColor: "#000",
      //当前画笔颜色
      bgColor: "#fff",
      //画板背景颜色
      lineWidth: 2,
      //画笔粗细 px
      lastRect: {},
      //运动轨迹最后一个方形
      lastCircle: {},
      //运动轨迹最后一个圆形
      //工具箱
      tools: [{
        title: "清空",
        key: "clear",
        url: __webpack_require__(/*! ../static/img/clear.png */ 128),
        activeUrl: __webpack_require__(/*! ../static/img/clear.png */ 128)
      }, {
        title: "撤回",
        key: "back",
        url: __webpack_require__(/*! ../static/img/back.png */ 129),
        activeUrl: __webpack_require__(/*! ../static/img/back.png */ 129)
      }, {
        title: "橡皮",
        key: "eraser",
        url: __webpack_require__(/*! ../static/img/eraser.png */ 130),
        activeUrl: __webpack_require__(/*! ../static/img/eraser-active.png */ 131)
      }, {
        title: "颜色",
        key: "color",
        url: __webpack_require__(/*! ../static/img/color.png */ 132),
        activeUrl: __webpack_require__(/*! ../static/img/color-active.png */ 133)
      }, {
        title: "画笔",
        key: "pen",
        url: __webpack_require__(/*! ../static/img/pen.png */ 134),
        activeUrl: __webpack_require__(/*! ../static/img/pen-active.png */ 135),
        active: true
      }, {
        title: "直线",
        key: "line",
        url: __webpack_require__(/*! ../static/img/line.png */ 136),
        activeUrl: __webpack_require__(/*! ../static/img/line-active.png */ 137)
      }, {
        title: "圆形",
        key: "circle",
        url: __webpack_require__(/*! ../static/img/circle.png */ 138),
        activeUrl: __webpack_require__(/*! ../static/img/circle-active.png */ 139)
      }, {
        title: "方形",
        key: "rect",
        url: __webpack_require__(/*! ../static/img/rect.png */ 140),
        activeUrl: __webpack_require__(/*! ../static/img/rect-active.png */ 141)
      }, {
        title: "实圆",
        key: "circle-fill",
        url: __webpack_require__(/*! ../static/img/circle-fill.png */ 142),
        activeUrl: __webpack_require__(/*! ../static/img/circle-fill-active.png */ 143)
      }, {
        title: "实方",
        key: "rect-fill",
        url: __webpack_require__(/*! ../static/img/rect-fill.png */ 144),
        activeUrl: __webpack_require__(/*! ../static/img/rect-fill-active.png */ 145)
      }, {
        title: "下载",
        key: "download",
        url: __webpack_require__(/*! ../static/img/download.png */ 146),
        activeUrl: __webpack_require__(/*! ../static/img/download.png */ 146)
      }, {
        title: "分享",
        key: "share",
        url: __webpack_require__(/*! ../static/img/share.png */ 147),
        activeUrl: __webpack_require__(/*! ../static/img/share.png */ 147)
      }],
      toolsShow: true,
      isLandScape: false,
      //是否横屏
      aspectRatio: 1 //图片宽高比
    };
  },

  props: {
    showSave: {
      //是否显示保存按钮
      type: Boolean,
      default: false
    },
    drawImage: {
      //背景图片
      type: String,
      default: ""
    },
    saveImageType: {
      //保存图片的类型 1、保存地址 2、保存到本地图片 3、既保存地址 又保存图片
      type: String,
      default: "1"
    },
    isUnderBkg: {
      //背景图片是否在画板下边，在下边则无法被擦除
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted(opt) {
    this.drawContext = uni.createCanvasContext('drawCanvas', this);
    this.initBoard();
  },
  methods: {
    colorShowHandel: function colorShowHandel() {
      this.colorShow = !this.colorShow;
    },
    chooseTools: function chooseTools(item) {
      console.log(item);
      this.colorShow = false;
      if (item.key == "back") {
        //撤回
        this.backHandle();
        return;
      }
      if (item.key == "clear") {
        //清空
        this.clearBoard();
        return;
      }
      if (item.key == "eraser") {
        this.drawContext.strokeStyle = this.bgColor;
      }
      if (item.key == "color") {
        //选择颜色

        this.colorShowHandel();
      }
      if (item.key == "download") {
        //下载
        this.downloadHandle();
        return;
      }
      this.mode = item.key;
      this.tools.forEach(function (i, j) {
        i.active = false;
        if (item.key == i.key) {
          i.active = true;
        }
      });
    },
    showTools: function showTools() {
      this.toolsShow = !this.toolsShow;
    },
    penWidthChange: function penWidthChange(e) {
      this.lineWidth = e.detail.value;
      this.drawContext.setLineWidth(this.lineWidth);
    },
    //开始绘制曲线
    penBegin: function penBegin(x, y) {
      this.begin = true;
      this.drawContext.beginPath();
      this.startX = x;
      this.startY = y;
      this.drawContext.moveTo(this.startX, this.startY);
      this.drawPen(x, y);
    },
    // 绘制线条中间添加点
    drawPen: function drawPen(x, y) {
      this.drawContext.moveTo(this.startX, this.startY);
      this.drawContext.lineTo(x, y);
      this.drawContext.stroke();
      this.startX = x;
      this.startY = y;
    },
    // 开始绘制线条 (直线)
    lineBegin: function lineBegin(x, y) {
      this.begin = true;
      this.startX = x;
      this.startY = y;
    },
    //画直线
    lineDraw: function lineDraw(x, y) {
      this.drawContext.beginPath();
      this.drawContext.moveTo(this.startX, this.startY);
      this.drawContext.lineTo(x, y);
      this.drawContext.stroke();
      this.drawContext.draw(true);
    },
    // 绘制线条结束
    lineEnd: function lineEnd() {
      this.drawContext.closePath();
      this.begin = false;
    },
    //实心方形开始绘制
    rectFillBegin: function rectFillBegin(x, y) {
      this.begin = true;
      this.drawContext.beginPath();
      this.startX = x;
      this.startY = y;
    },
    //方形开始绘制
    rectBegin: function rectBegin(x, y) {
      this.begin = true;
      this.drawContext.beginPath();
      this.startX = x;
      this.startY = y;
    },
    //实心圆形开始绘制
    circleFillBegin: function circleFillBegin(x, y) {
      this.begin = true;
      this.drawContext.beginPath();
      this.startX = x;
      this.startY = y;
    },
    //圆形开始绘制
    circleBegin: function circleBegin(x, y) {
      this.begin = true;
      this.drawContext.beginPath();
      this.startX = x;
      this.startY = y;
    },
    /**
     * 这里是画实体矩形
     */
    drawRectFill: function drawRectFill(x, y) {
      var isReverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var width = x - this.startX ? x - this.startX : this.startX - x;
      var height = y - this.startY ? y - this.startY : this.startY - y;
      this.drawContext.rect(this.startX, this.startY, width, height);
      this.drawContext.setFillStyle(this.currentColor);
      this.drawContext.fill();
      this.draw(isReverse);
    },
    /**
     * 这里是画空心矩形
     * 方法是根据四个坐标点画
     * 四条线进行连接
     */
    drawRect: function drawRect(x, y) {
      var isReverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var pointLT = {};
      var pointRB = {};
      var pointRT = {};
      var pointLB = {};
      var center = {};
      pointLT.X = this.startX <= x ? this.startX : x;
      pointLT.Y = this.startY <= y ? this.startY : y;
      pointRB.X = this.startX >= x ? this.startX : x;
      pointRB.Y = this.startY >= y ? this.startY : y;
      pointRT.X = pointRB.X;
      pointRT.Y = pointLT.Y;
      pointLB.X = pointLT.X;
      pointLB.Y = pointRB.Y;
      var width = x - this.startX ? x - this.startX : this.startX - x;
      var height = y - this.startY ? y - this.startY : this.startY - y;
      this.drawContext.rect(this.startX, this.startY, width, height);
      this.drawContext.setStrokeStyle(this.currentColor);
      this.drawContext.stroke();
      this.draw(isReverse);
      this.lastRect = {
        x: this.startX,
        y: this.startY,
        width: Math.abs(width),
        height: Math.abs(height),
        pointLT: pointLT
      };
      this.clearLastRect();
    },
    clearLastRect: function clearLastRect() {
      this.drawContext.clearRect(this.lastRect.pointLT.X + this.lineWidth / 2, this.lastRect.pointLT.Y + this.lineWidth / 2, this.lastRect.width - this.lineWidth, this.lastRect.height - this.lineWidth);
    },
    clearLastCircle: function clearLastCircle(x, y, r, cxt) {
      //(x,y)为要清除的圆的圆心，r为半径，cxt为context
      var stepClear = 1; //别忘记这一步  
      clearArc(x, y, r);
      function clearArc(x, y, radius) {
        var calcWidth = radius - stepClear;
        var calcHeight = Math.sqrt(radius * radius - calcWidth * calcWidth);
        var posX = x - calcWidth;
        var posY = y - calcHeight;
        var widthX = 2 * calcWidth;
        var heightY = 2 * calcHeight;
        if (stepClear <= radius) {
          cxt.clearRect(posX, posY, widthX, heightY);
          stepClear += 1;
          clearArc(x, y, radius);
        }
      }
    },
    /**
     * 这里是画
     * 实心圆
     */
    drawCircleFill: function drawCircleFill(x, y) {
      var isReverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var pointLT = {};
      var pointRB = {};
      var pointRT = {};
      var pointLB = {};
      var center = {};
      pointLT.X = this.startX <= x ? this.startX : x;
      pointLT.Y = this.startY <= y ? this.startY : y;
      pointRB.X = this.startX >= x ? this.startX : x;
      pointRB.Y = this.startY >= y ? this.startY : y;
      pointRT.X = pointRB.X;
      pointRT.Y = pointLT.Y;
      pointLB.X = pointLT.X;
      pointLB.Y = pointRB.Y;
      center.X = (pointRB.X + pointLT.X) / 2;
      center.Y = (pointRB.Y + pointLT.Y) / 2;
      var dx = pointRB.X - pointLT.X;
      var dy = pointRB.Y - pointLT.Y;
      var r = Math.sqrt(dx * dx + dy * dy) / 2;
      this.drawContext.arc(center.X, center.Y, r, 0, 2 * Math.PI);
      this.drawContext.setFillStyle(this.currentColor);
      this.drawContext.fill();
      this.draw(isReverse);
    },
    /**
     * 这里是画
     * 空心圆
     */
    drawCircle: function drawCircle(x, y) {
      var isReverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var pointLT = {};
      var pointRB = {};
      var center = {};
      pointLT.X = this.startX <= x ? this.startX : x;
      pointLT.Y = this.startY <= y ? this.startY : y;
      pointRB.X = this.startX >= x ? this.startX : x;
      pointRB.Y = this.startY >= y ? this.startY : y;
      center.X = (pointRB.X + pointLT.X) / 2;
      center.Y = (pointRB.Y + pointLT.Y) / 2;
      var dx = pointRB.X - pointLT.X;
      var dy = pointRB.Y - pointLT.Y;
      var r = Math.sqrt(dx * dx + dy * dy) / 2;
      this.drawContext.arc(center.X, center.Y, r, 0, 2 * Math.PI);
      this.drawContext.stroke();
      this.drawContext.beginPath();
      this.drawContext.arc(center.X, center.Y, r - this.lineWidth / 2, 0, 2 * Math.PI);
      this.drawContext.setFillStyle(this.bgColor);
      this.drawContext.fill();
      this.draw(isReverse);
      this.clearLastCircle(center.X, center.Y, r - this.lineWidth / 2, this.drawContext);
    },
    //开始touch
    touchStart: function touchStart(e) {
      var _e$touches$ = e.touches[0],
        x = _e$touches$.x,
        y = _e$touches$.y;
      console.log("开始touch");
      switch (this.mode) {
        case "pen":
          this.penBegin(x, y);
          break;
        case "eraser":
          this.penBegin(x, y);
          break;
        case "line":
          this.lineBegin(x, y);
          break;
        case "rect":
          this.rectBegin(x, y);
          break;
        case "circle":
          this.circleBegin(x, y);
          break;
        case "rect-fill":
          this.rectFillBegin(x, y);
          break;
        case "circle-fill":
          this.circleFillBegin(x, y);
          break;
      }
      //新增一次历史轨迹
      this.historyList.push({
        style: {
          color: this.currentColor,
          width: this.lineWidth
        },
        coordinates: [{
          type: e.type,
          mode: this.mode,
          x: e.touches[0].x,
          y: e.touches[0].y
        }]
      });
    },
    //touch移动
    touchMove: function touchMove(e) {
      var _e$touches$2 = e.touches[0],
        x = _e$touches$2.x,
        y = _e$touches$2.y;
      this.lastX = x;
      this.lastY = y;
      console.log("touch移动");
      switch (this.mode) {
        case "pen":
          this.drawPen(x, y);
          this.draw(true);
          break;
        case "eraser":
          this.drawPen(x, y);
          this.draw(true);
          break;
        case "line":
          this.draw(true);
          return;
          break;
        case "rect":
          this.drawRect(x, y);
          break;
        case "circle":
          this.drawCircle(x, y);
          break;
        case "rect-fill":
          this.drawRectFill(x, y);
          break;
        case "circle-fill":
          this.drawCircleFill(x, y);
          break;
      }

      //最后一次历史中新增运动轨迹
      this.historyList[this.historyList.length - 1].coordinates.push({
        type: e.type,
        mode: this.mode,
        x: x,
        y: y
      });
    },
    //touch结束
    touchEnd: function touchEnd(e) {
      var _e$changedTouches$ = e.changedTouches[0],
        x = _e$changedTouches$.x,
        y = _e$changedTouches$.y;
      console.log("touch结束");
      switch (this.mode) {
        case "pen":
          this.lineEnd();
          break;
        case "eraser":
          this.drawContext.setFillStyle(this.currentColor);
          this.lineEnd();
          break;
        case "line":
          this.historyList[this.historyList.length - 1].coordinates.push({
            type: e.type,
            mode: this.mode,
            x: x,
            y: y
          });
          this.lineDraw(x, y);
          this.lineEnd();
          break;
        case "rect":
          this.drawRect(x, y, true);
          break;
        case "circle":
          this.drawCircle(x, y);
          break;
        case "rect-fill":
          this.drawRectFill(x, y);
          break;
        case "circle-fill":
          this.drawCircleFill(x, y);
          break;
      }
    },
    //撤回
    backHandle: function backHandle() {
      this.drawContext.draw();
      this.historyList.pop(); //删除最后一步
      this.drawHistory();
    },
    drawHistory: function drawHistory() {
      var _this = this;
      //遍历历史轨迹重新绘制
      this.historyList.forEach(function (item, index) {
        _this.drawContext.beginPath();
        _this.drawContext.setLineCap('round');
        _this.drawContext.setStrokeStyle(item.style.color);
        _this.drawContext.setLineWidth(item.style.width);
        item.coordinates.forEach(function (it) {
          if (it.type == 'touchstart') {
            _this.switchModeToLine(it.mode, 1, it.x, it.y);
          } else {
            _this.switchModeToLine(it.mode, 2, it.x, it.y);
          }
        });
        _this.drawContext.stroke();
      });
      this.drawContext.draw(true);
    },
    //重新绘制历史画面 mode:操作模式  type:touch类型（1:开始touch、2:touch中或结束touch）
    switchModeToLine: function switchModeToLine(mode, type, x, y) {
      this.drawContext.setFillStyle(this.currentColor);
      if (mode == "pen") {
        if (type == "1") {
          this.drawContext.moveTo(x, y);
        } else {
          this.drawContext.lineTo(x, y);
        }
      } else if (mode == "eraser") {
        this.drawContext.setFillStyle(this.bgColor);
        if (type == "1") {
          this.startX = x;
          this.startY = y;
        } else {
          this.lineDraw(x, y, true);
        }
      } else if (mode == "line") {
        if (type == "1") {
          this.startX = x;
          this.startY = y;
        } else {
          this.lineDraw(x, y, true);
        }
      } else if (mode == "rect") {
        if (type == "1") {
          this.startX = x;
          this.startY = y;
        } else {
          this.drawRect(x, y, true);
        }
      } else if (mode == "circle") {
        if (type == "1") {
          this.startX = x;
          this.startY = y;
        } else {
          this.drawCircle(x, y, true);
        }
      } else if (mode == "rect-fill") {
        if (type == "1") {
          this.startX = x;
          this.startY = y;
        } else {
          this.drawRectFill(x, y, true);
        }
      } else if (mode == "circle-fill") {
        if (type == "1") {
          this.startX = x;
          this.startY = y;
        } else {
          this.drawCircleFill(x, y, true);
        }
      }
    },
    //选择画笔颜色
    colorPickTapHandler: function colorPickTapHandler(obj) {
      var _this2 = this;
      console.log('我点击的颜色:' + JSON.stringify(obj));
      this.colorShow = false;
      this.tools.forEach(function (item) {
        item.active = false;
        if (item.key === 'pen') {
          _this2.mode = 'pen';
          item.active = true;
        }
      });
      this.currentColor = obj.color;
      this.drawContext.strokeStyle = obj.color;
    },
    //下载图片
    downloadHandle: function downloadHandle() {
      var that = this;
      if (this.saveImageType == 1 || this.saveImageType == 3) {
        this.saveImage();
      }
      if (this.saveImageType == 2 || this.saveImageType == 3) {
        uni.canvasToTempFilePath({
          canvasId: 'drawCanvas',
          success: function success(res) {
            console.log('回调参数:' + JSON.stringify(res));
            // 在H5平台下，tempFilePath 为 base64
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function success(res) {
                console.log('成功回调参数:' + JSON.stringify(res));
                that.$emit("dowmloadSuc", JSON.stringify(res));
              },
              fail: function fail(res) {
                console.log('失败回调参数:' + JSON.stringify(res));
                that.$emit("dowmloadErr", JSON.stringify(res));
              }
            });
          }
        }, this);
      }
    },
    //返回图片地址  @filePath
    saveImage: function saveImage() {
      var that = this;
      if (this.isUnderBkg) {
        that.saveImageUrl();
      } else {
        uni.canvasToTempFilePath({
          canvasId: 'drawCanvas',
          success: function success(res) {
            console.log(res);
            that.$emit("saveImage", res.tempFilePath);
          }
        }, this);
      }
    },
    saveImageUrl: function saveImageUrl() {
      var _this3 = this;
      var query = uni.createSelectorQuery().in(this);
      var that = this;
      query.select('.canvas-box').boundingClientRect(function (data) {
        _this3.drawContext.setFillStyle(_this3.bgColor);
        _this3.drawContext.fillRect(0, 0, data.width, data.height); //TODO context的宽和高待定
        _this3.drawContext.fill();
        _this3.drawContext.drawImage(_this3.drawImage, 0, 0, data.width, data.height);
        _this3.drawContext.draw();
        _this3.drawHistory();
        uni.canvasToTempFilePath({
          canvasId: 'drawCanvas',
          success: function success(res) {
            that.$emit("saveImage", res.tempFilePath);
          }
        }, _this3);
      }).exec();
    },
    // canvas设置背景颜色
    fillBackground: function fillBackground() {
      var _this4 = this;
      var query = uni.createSelectorQuery().in(this);
      query.select('.canvas-box').boundingClientRect(function (data) {
        _this4.drawContext.setFillStyle(_this4.bgColor);
        _this4.drawContext.fillRect(0, 0, data.width, data.height); //TODO context的宽和高待定
        _this4.drawContext.fill();
        if (_this4.drawImage && !_this4.isUnderBkg) {
          _this4.drawContext.drawImage(_this4.drawImage, 0, 0, data.width, data.height);
        }
        _this4.drawContext.draw();
      }).exec();
    },
    // 绘制canvas
    // isReverse: 是否保留之前的像素
    draw: function draw() {
      var isReverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var cb = arguments.length > 1 ? arguments[1] : undefined;
      this.drawContext.draw(isReverse, function () {
        if (cb && typeof cb == "function") {
          cb();
        }
      });
    },
    setBoardMode: function setBoardMode(key) {
      var _this5 = this;
      this.tools.forEach(function (i) {
        i.active = false;
        if (i.key == key) {
          i.active = true;
          _this5.mode = key;
        }
      });
    },
    //清空画板
    clearBoard: function clearBoard() {
      this.historyList = [];
      this.drawContext.draw();
    },
    initBoard: function initBoard() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var systemInfo, imageInfoObj;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                systemInfo = uni.getSystemInfoSync();
                if (systemInfo.screenWidth > systemInfo.screenHeight) {
                  _this6.isLandScape = true;
                } else {
                  _this6.isLandScape = false;
                }
                console.log(_this6.isLandScape);
                _context.next = 5;
                return uni.getImageInfo({
                  src: _this6.drawImage
                });
              case 5:
                _context.t0 = _context.sent[1];
                if (_context.t0) {
                  _context.next = 8;
                  break;
                }
                _context.t0 = {};
              case 8:
                imageInfoObj = _context.t0;
                console.log(imageInfoObj);
                _this6.aspectRatio = imageInfoObj.width / imageInfoObj.height;
                if (_this6.isUnderBkg) {
                  _this6.bgColor = "rgba(0,0,0,0)";
                } else {
                  _this6.bgColor = "rgb(255,255,255)";
                }
                _this6.drawContext.setLineCap('round'); // 让线条圆润
                _this6.drawContext.strokeStyle = _this6.currentColor; //设置画笔颜色
                _this6.drawContext.setLineWidth(_this6.lineWidth); //设置画笔粗细
                //设置背景
                _this6.$nextTick(function () {
                  _this6.fillBackground();
                });
              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 148:
/*!*************************************************************************************************************************************!*\
  !*** D:/我的文档/Documents/项目/uniapp/Emovision-uniapp/Emovision-uniapp/Draw/components/wn-canvas.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wn-canvas.vue?vue&type=style&index=0&lang=scss& */ 149);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wn_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 149:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/我的文档/Documents/项目/uniapp/Emovision-uniapp/Emovision-uniapp/Draw/components/wn-canvas.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/Draw/components/wn-canvas.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'Draw/components/wn-canvas-create-component',
    {
        'Draw/components/wn-canvas-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(120))
        })
    },
    [['Draw/components/wn-canvas-create-component']]
]);

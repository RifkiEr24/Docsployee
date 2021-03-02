(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_CategoryDetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      file: null,
      user: '',
      documents: []
    };
  },
  methods: {
    getfile: function getfile() {
      var _this = this;

      if (this.$route.name == 'admineditcategory') {
        axios.get("/api/category/detailname/".concat(this.$route.params.id), {
          params: {
            categoryid: this.$route.params.categoryname
          }
        }).then(function (res) {
          _this.documents = res.data;
        });
      } else {
        axios.get('/api/user').then(function (res) {
          _this.user = res.data;
        }).then(function () {
          axios.get("/api/category/detail/".concat(_this.$route.params.id), {
            params: {
              iduser: _this.user.id_akun
            }
          }).then(function (res) {
            _this.documents = res.data;
          });
        });
      }
    },
    download: function download(user, filename) {
      axios({
        url: "http://127.0.0.1:8000/storage/images/".concat(user, "/").concat(filename),
        method: 'GET',
        responseType: 'blob'
      }).then(function (response) {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', filename);
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    },
    deletefile: function deletefile(id) {
      var _this2 = this;

      this.$swal.fire({
        title: 'Apakah kamu yakin?',
        text: "Jika kamu hapus, maka data tidak akan kembali lagi.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Kembali'
      }).then(function (result) {
        if (result.value) {
          _this2.$swal.fire({
            title: 'Success!',
            text: 'Gambar Berhasil Dihapus',
            icon: 'success',
            timer: 1000
          });

          var uri = "/api/document/delete/".concat(id);

          _this2.axios["delete"](uri).then(function (response) {
            _this2.getfile();
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.getfile();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.back-icon[data-v-29d4bb1a]{\r\n    font-size: 3rem;\r\n    color: #3490dc;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_style_index_0_id_29d4bb1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_style_index_0_id_29d4bb1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_style_index_0_id_29d4bb1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/admin/CategoryDetail.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/CategoryDetail.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoryDetail_vue_vue_type_template_id_29d4bb1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryDetail.vue?vue&type=template&id=29d4bb1a&scoped=true& */ "./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a&scoped=true&");
/* harmony import */ var _CategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryDetail.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _CategoryDetail_vue_vue_type_style_index_0_id_29d4bb1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css& */ "./resources/js/components/admin/CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _CategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CategoryDetail_vue_vue_type_template_id_29d4bb1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CategoryDetail_vue_vue_type_template_id_29d4bb1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "29d4bb1a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/CategoryDetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_style_index_0_id_29d4bb1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=style&index=0&id=29d4bb1a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_template_id_29d4bb1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_template_id_29d4bb1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_template_id_29d4bb1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryDetail.vue?vue&type=template&id=29d4bb1a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _vm.documents.length > 0
      ? _c(
          "div",
          { staticClass: "row mt-5" },
          _vm._l(_vm.documents, function(document) {
            return _c(
              "div",
              { key: document.id_document, staticClass: "col-md-4" },
              [
                _c(
                  "div",
                  {
                    staticClass: "card border-rounded",
                    staticStyle: { width: "18rem" }
                  },
                  [
                    _vm.user.name != null
                      ? _c("img", {
                          staticClass: "card-img-top",
                          attrs: {
                            src:
                              "/userdata/" +
                              _vm.user.id_akun +
                              "/" +
                              document.file_name,
                            alt: "Card image cap"
                          }
                        })
                      : _c("img", {
                          staticClass: "card-img-top",
                          attrs: {
                            src:
                              "/userdata/" +
                              document.id_akun +
                              "/" +
                              document.file_name,
                            alt: "Card image cap"
                          }
                        }),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body border-top" }, [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v(_vm._s(document.file_name))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _vm.user.name != null
                            ? _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-success mx-auto d-block",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.download(
                                        _vm.user.id_akun,
                                        document.file_name
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Download")]
                              )
                            : _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-success mx-auto d-block",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.download(
                                        document.id_akun,
                                        document.file_name
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Download")]
                              )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c(
                            "a",
                            {
                              staticClass:
                                "btn mt-2 mt-md-0 btn-danger mx-auto d-block",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.deletefile(document.id_document)
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]
            )
          }),
          0
        )
      : _c("div", { staticClass: "row mt-5" }, [
          _c("div", { staticClass: "col-md-4" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("img", {
              staticClass: "w-100 d-block ml-auto mr-auto",
              attrs: { src: "/images/not found.png", alt: "" }
            }),
            _vm._v(" "),
            _c("h4", { staticClass: "text-center mt-3" }, [
              _vm._v("Tidak Ada dokumen di folder ini")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" })
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "javascript:history.go(-1)" } }, [
      _c("i", { staticClass: "fas fa-arrow-left back-icon mt-3" })
    ])
  }
]
render._withStripped = true



/***/ })

}]);
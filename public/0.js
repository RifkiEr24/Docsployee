(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      file: null,
      user: '',
      documents: []
    };
  },
  methods: {
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
      var _this = this;

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
          _this.$swal.fire({
            title: 'Success!',
            text: 'Gambar Berhasil Dihapus',
            icon: 'success',
            timer: 1000
          });

          var uri = "/api/document/delete/".concat(id);

          _this.axios["delete"](uri).then(function (response) {
            console.log(response);

            _this.documents.splice(_this.documents.indexOf(id), 1);
          });
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    console.log(this.$route);

    if (this.$route.name == 'admineditcategory') {
      axios.get("/api/category/detailname/".concat(this.$route.params.id), {
        params: {
          categoryname: this.$route.params.categoryname
        }
      }).then(function (res) {
        _this2.documents = res.data;
        console.log(_this2.documents);
      });
    } else {
      axios.get('/api/user').then(function (res) {
        _this2.user = res.data;
      }).then(function () {
        axios.get("/api/category/detail/".concat(_this2.$route.params.id), {
          params: {
            iduser: _this2.user.id_akun
          }
        }).then(function (res) {
          _this2.documents = res.data;
          console.log(_this2.documents);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row mt-5" },
    _vm._l(_vm.documents, function(document) {
      return _c("div", { key: document.id_document, staticClass: "col-md-4" }, [
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
                      "/storage/images/" +
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
                      "/storage/images/" +
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
                          staticClass: "btn btn-success mx-auto d-block",
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
                          staticClass: "btn btn-success mx-auto d-block",
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
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/CategoryDetail.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/CategoryDetail.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryDetail_vue_vue_type_template_id_29d4bb1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryDetail.vue?vue&type=template&id=29d4bb1a& */ "./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a&");
/* harmony import */ var _CategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryDetail.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryDetail_vue_vue_type_template_id_29d4bb1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryDetail_vue_vue_type_template_id_29d4bb1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/CategoryDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CategoryDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_template_id_29d4bb1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryDetail.vue?vue&type=template&id=29d4bb1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CategoryDetail.vue?vue&type=template&id=29d4bb1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_template_id_29d4bb1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetail_vue_vue_type_template_id_29d4bb1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
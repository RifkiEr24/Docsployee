(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Golongan.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Golongan.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
      golongan: [],
      addgolongan: {},
      editgolongan: {},
      getGolonganData: [],
      deleteGolonganData: null
    };
  },
  created: function created() {
    this.golonganIndex();
  },
  methods: {
    golonganIndex: function golonganIndex() {
      var _this = this;

      var uri = "/api/golongan";
      this.axios.get(uri).then(function (response) {
        _this.golongan = response.data;
        console.log(_this.golongan);
      });
    },
    getGolongan: function getGolongan($id) {
      var _this2 = this;

      axios.get("/api/golongan/".concat($id)).then(function (response) {
        _this2.getGolonganData = response.data;
      });
      return this.getGolonganData;
    },
    editGolongan: function editGolongan($id) {
      var _this3 = this;

      // GET SELECTED ID
      axios.get("/api/golongan/".concat($id)).then(function (response) {
        var _this3$$swal$fire$the = _this3.$swal.fire({
          title: 'Tambah Golongan',
          html: 'No Golongan' + '<input id="swal-input1" value="' + response.data.no_golongan + '" type="number" class="swal2-input w-100">' + 'Nama Golongan' + '<input id="swal-input2" value="' + response.data.nama_golongan + '" class="swal2-input">',
          focusConfirm: false,
          confirmButtonText: 'Edit',
          preConfirm: function preConfirm() {
            return [document.getElementById('swal-input1').value, document.getElementById('swal-input2').value];
          }
        }).then(function (formValues) {
          if (formValues.isConfirmed == true) {
            if (formValues.value[0] == "" || formValues.value[1] == "") {
              _this3.$swal.fire({
                icon: 'error',
                title: 'Data Kurang',
                text: 'Anda Harus Mengisi Seluruh Input'
              });
            } else {
              _this3.editgolongan.no_golongan = formValues.value[0];
              _this3.editgolongan.nama_golongan = formValues.value[1];
              var uri = "/api/golongan/update/".concat($id);

              _this3.axios.put(uri, _this3.editgolongan).then(function (response) {
                _this3.golonganIndex();

                _this3.$swal.fire({
                  icon: 'success',
                  title: 'Berhasil',
                  text: response.data.message
                });
              });
            }
          }
        }),
            formValues = _this3$$swal$fire$the.value;
      });
    },
    addGolongan: function addGolongan() {
      var _this4 = this;

      var _this$$swal$fire$then = this.$swal.fire({
        title: 'Tambah Golongan',
        html: 'No Golongan' + '<input id="swal-input1"  class="swal2-input w-100">' + 'Nama Golongan' + '<input id="swal-input2" class="swal2-input">',
        focusConfirm: false,
        confirmButtonText: 'Tambah',
        preConfirm: function preConfirm() {
          return [document.getElementById('swal-input1').value, document.getElementById('swal-input2').value];
        }
      }).then(function (formValues) {
        if (formValues.isConfirmed == true) {
          if (formValues.value[0] == "" || formValues.value[1] == "") {
            _this4.$swal.fire({
              icon: 'error',
              title: 'Data Kurang',
              text: 'Anda Harus Mengisi Seluruh Input'
            });
          } else {
            _this4.addgolongan.no_golongan = formValues.value[0];
            _this4.addgolongan.nama_golongan = formValues.value[1];
            var uri = '/api/golongan/store';

            _this4.axios.post(uri, _this4.addgolongan).then(function (response) {
              _this4.golonganIndex();

              _this4.$swal.fire({
                icon: 'success',
                title: 'Berhasil',
                text: response.data.message
              });
            });
          }
        }
      }),
          formValues = _this$$swal$fire$then.value;
    },
    deleteGolongan: function deleteGolongan(id) {
      var _this5 = this;

      this.deleteGolongan = id;
      this.$swal.fire({
        title: 'Apakah Anda yakin?',
        text: "Jika Anda hapus, maka data tidak akan kembali lagi.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Kembali'
      }).then(function (result) {
        if (result.value) {
          var uri = "/api/golongan/delete/".concat(id);

          _this5.axios["delete"](uri).then(function (response) {
            _this5.golonganIndex();

            _this5.$swal.fire({
              title: 'Success!',
              text: 'Golongan Berhasil Dihapus',
              icon: 'success'
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Golongan.vue?vue&type=template&id=77881176&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Golongan.vue?vue&type=template&id=77881176& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-primary d-block mx-auto mt-3",
        on: {
          click: function($event) {
            return _vm.addGolongan()
          }
        }
      },
      [_vm._v("Tambah Golongan")]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "table-responsive" },
      [
        _c(
          "v-table",
          {
            staticClass: "table table-light  mt-4 border-rounded",
            attrs: { data: _vm.golongan },
            scopedSlots: _vm._u([
              {
                key: "body",
                fn: function(ref) {
                  var displayData = ref.displayData
                  return _c(
                    "tbody",
                    {},
                    _vm._l(displayData, function(row) {
                      return _c("tr", { key: row.id_golongan }, [
                        _c("td", [_vm._v(_vm._s(row.no_golongan))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.nama_golongan))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            { staticClass: "fa-stack  fa-size fa-lg" },
                            [
                              _c("i", {
                                staticClass:
                                  "fa fa-square text-secondary fa-stack-2x"
                              }),
                              _vm._v(" "),
                              _c("i", {
                                staticClass: "fas fa-eye fa-stack-1x text-white"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "fa-stack  fa-size fa-lg",
                              on: {
                                click: function($event) {
                                  return _vm.editGolongan(row.id_golongan)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "fa fa-square text-primary fa-stack-2x"
                              }),
                              _vm._v(" "),
                              _c("i", {
                                staticClass:
                                  "fas fa-user-edit fa-stack-1x text-white"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "fa-stack  fa-size fa-lg",
                              on: {
                                click: function($event) {
                                  return _vm.deleteGolongan(row.id_golongan)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "fa fa-square text-danger fa-stack-2x"
                              }),
                              _vm._v(" "),
                              _c("i", {
                                staticClass:
                                  "fas fa-trash fa-stack-1x text-white"
                              })
                            ]
                          )
                        ])
                      ])
                    }),
                    0
                  )
                }
              }
            ])
          },
          [
            _c(
              "thead",
              {
                staticClass: "bg-primary border-rounded text-white",
                attrs: { slot: "head" },
                slot: "head"
              },
              [
                _c("v-th", { attrs: { sortKey: "no_golongan" } }, [
                  _vm._v("No Golongan")
                ]),
                _vm._v(" "),
                _c("v-th", { attrs: { sortKey: "nama_golongan" } }, [
                  _vm._v("Nama Golongan")
                ]),
                _vm._v(" "),
                _c("th", [_vm._v("Action")])
              ],
              1
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/page/Golongan.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/page/Golongan.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Golongan_vue_vue_type_template_id_77881176___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Golongan.vue?vue&type=template&id=77881176& */ "./resources/js/components/page/Golongan.vue?vue&type=template&id=77881176&");
/* harmony import */ var _Golongan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Golongan.vue?vue&type=script&lang=js& */ "./resources/js/components/page/Golongan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Golongan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Golongan_vue_vue_type_template_id_77881176___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Golongan_vue_vue_type_template_id_77881176___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/Golongan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/Golongan.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/page/Golongan.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Golongan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Golongan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Golongan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Golongan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/Golongan.vue?vue&type=template&id=77881176&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/page/Golongan.vue?vue&type=template&id=77881176& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Golongan_vue_vue_type_template_id_77881176___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Golongan.vue?vue&type=template&id=77881176& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Golongan.vue?vue&type=template&id=77881176&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Golongan_vue_vue_type_template_id_77881176___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Golongan_vue_vue_type_template_id_77881176___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
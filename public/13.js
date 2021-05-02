(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Jabatan.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Jabatan.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      golongan: [],
      jabatan: [],
      golonganOption: "",
      addJabatanData: {},
      editjabatan: {},
      getJabatanData: [],
      deleteGolonganData: null
    };
  },
  created: function created() {
    this.golonganIndex();
    this.jabatanIndex();
  },
  methods: {
    jabatanIndex: function jabatanIndex() {
      var _this = this;

      var uri = "/api/jabatan";
      this.axios.get(uri).then(function (response) {
        _this.jabatan = response.data;
      });
    },
    golonganIndex: function golonganIndex() {
      var _this2 = this;

      var uri = "/api/golongan";
      this.axios.get(uri).then(function (response) {
        _this2.golongan = response.data;

        for (var key in response.data) {
          _this2.golonganOption += "<option value=\"".concat(response.data[key].id_golongan, "\">").concat(response.data[key].no_golongan, "</option>");
        }

        ;
      });
    },
    getJabatan: function getJabatan($id) {
      var _this3 = this;

      axios.get("/api/jabatan/".concat($id)).then(function (response) {
        _this3.getJabatanData = response.data;
      });
      return this.getJabatanData;
    },
    editJabatan: function editJabatan(id) {
      var _this4 = this;

      // GET SELECTED ID
      axios.get("/api/jabatan/".concat(id)).then(function (response) {
        var _this4$$swal$fire$the = _this4.$swal.fire({
          title: 'Edit Jabatan',
          confirmButtonText: 'Edit',
          html: "No Golongan\n                    <select id=\"swal-input1\" value=\"".concat(response.data.id_golongan, "\" class=\"swal2-input w-100\">\n                    ").concat(_this4.golonganOption, "\n                    </select>\n                    Nama Jabatan\n                    <input id=\"swal-input2\"  value=\"").concat(response.data.nama_jabatan, "\" class=\"swal2-input w-100\">\n                    Ruang\n                    <input id=\"swal-input3\"  value=\"").concat(response.data.ruang, "\" class=\"swal2-input\">\n                    Gaji\n                    <input id=\"swal-input4\"  value=\"").concat(response.data.gaji, "\" type=\"number\" class=\"swal2-input w-100\"> "),
          focusConfirm: false,
          preConfirm: function preConfirm() {
            return [document.getElementById('swal-input1').value, document.getElementById('swal-input2').value, document.getElementById('swal-input3').value, document.getElementById('swal-input4').value];
          }
        }).then(function (formValues) {
          if (formValues.isConfirmed == true) {
            if (formValues.value[0] == "" || formValues.value[1] == "" || formValues.value[2] == "" || formValues.value[3] == "") {
              _this4.$swal.fire({
                icon: 'error',
                title: 'Data Kurang',
                text: 'Anda Harus Mengisi Seluruh Input'
              });
            } else {
              _this4.editjabatan.id_golongan = formValues.value[0];
              _this4.editjabatan.nama_jabatan = formValues.value[1];
              _this4.editjabatan.ruang = formValues.value[2];
              _this4.editjabatan.gaji = formValues.value[3];
              var uri = "/api/jabatan/update/".concat(id);

              _this4.axios.put(uri, _this4.editjabatan).then(function (response) {
                _this4.jabatanIndex();

                _this4.$swal.fire({
                  icon: 'success',
                  title: 'Berhasil',
                  text: response.data.message
                });
              });
            }
          }
        }),
            formValues = _this4$$swal$fire$the.value;
      });
    },
    addJabatan: function addJabatan() {
      var _this5 = this;

      var _this$$swal$fire$then = this.$swal.fire({
        title: 'Tambah Jabatan',
        confirmButtonText: 'Tambah',
        html: "No Golongan\n                    <select id=\"swal-input1\" class=\"swal2-input w-100\">\n                    ".concat(this.golonganOption, "\n                    </select>\n                    Nama Jabatan\n                    <input id=\"swal-input2\"  class=\"swal2-input w-100\">\n                    Ruang\n                    <input id=\"swal-input3\" class=\"swal2-input\">\n                    Gaji\n                    <input id=\"swal-input4\" type=\"number\" class=\"swal2-input w-100\"> "),
        focusConfirm: false,
        preConfirm: function preConfirm() {
          return [document.getElementById('swal-input1').value, document.getElementById('swal-input2').value, document.getElementById('swal-input3').value, document.getElementById('swal-input4').value];
        }
      }).then(function (formValues) {
        if (formValues.isConfirmed == true) {
          if (formValues.value[0] == "" || formValues.value[1] == "" || formValues.value[2] == "" || formValues.value[3] == "") {
            _this5.$swal.fire({
              icon: 'error',
              title: 'Data Kurang',
              text: 'Anda Harus Mengisi Seluruh Input'
            });
          } else {
            _this5.addJabatanData.id_golongan = formValues.value[0];
            _this5.addJabatanData.nama_jabatan = formValues.value[1];
            _this5.addJabatanData.ruang = formValues.value[2];
            _this5.addJabatanData.gaji = formValues.value[3];
            var uri = '/api/jabatan/store';

            _this5.axios.post(uri, _this5.addJabatanData).then(function (response) {
              _this5.jabatanIndex();

              _this5.$swal.fire({
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
    deleteJabatan: function deleteJabatan(id) {
      var _this6 = this;

      this.$swal.fire({
        title: 'Apakah Anda yakin?',
        text: "Jika Anda hapus, maka data tidak akan kembali lagi.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Kembali'
      }).then(function (result) {
        if (result.value) {
          var uri = "/api/jabatan/delete/".concat(id);

          _this6.axios["delete"](uri).then(function (response) {
            _this6.jabatanIndex();

            _this6.$swal.fire({
              title: 'Success!',
              text: 'Jabatan Berhasil Dihapus',
              icon: 'success'
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Jabatan.vue?vue&type=template&id=19099ed6&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Jabatan.vue?vue&type=template&id=19099ed6& ***!
  \***************************************************************************************************************************************************************************************************************/
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
            return _vm.addJabatan()
          }
        }
      },
      [_vm._v("Tambah Jabatan")]
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
            attrs: { data: _vm.jabatan },
            scopedSlots: _vm._u([
              {
                key: "body",
                fn: function(ref) {
                  var displayData = ref.displayData
                  return _c(
                    "tbody",
                    {},
                    _vm._l(displayData, function(row) {
                      return _c("tr", { key: row.id_jabatan }, [
                        _c("td", [_vm._v(_vm._s(row.nama_jabatan))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.golongan.no_golongan))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.ruang))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.gaji))]),
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
                                  return _vm.editJabatan(row.id_jabatan)
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
                                  return _vm.deleteJabatan(row.id_jabatan)
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
                _c("v-th", { attrs: { sortKey: "nama_jabatan" } }, [
                  _vm._v("Nama Jabatan")
                ]),
                _vm._v(" "),
                _c("v-th", { attrs: { sortKey: "golongan.nama_golongan" } }, [
                  _vm._v("No Golongan")
                ]),
                _vm._v(" "),
                _c("v-th", { attrs: { sortKey: "ruang" } }, [_vm._v("Ruang")]),
                _vm._v(" "),
                _c("v-th", { attrs: { sortKey: "gaji" } }, [_vm._v("Gaji")]),
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

/***/ "./resources/js/components/page/Jabatan.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/page/Jabatan.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Jabatan_vue_vue_type_template_id_19099ed6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jabatan.vue?vue&type=template&id=19099ed6& */ "./resources/js/components/page/Jabatan.vue?vue&type=template&id=19099ed6&");
/* harmony import */ var _Jabatan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Jabatan.vue?vue&type=script&lang=js& */ "./resources/js/components/page/Jabatan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Jabatan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Jabatan_vue_vue_type_template_id_19099ed6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Jabatan_vue_vue_type_template_id_19099ed6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/Jabatan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/Jabatan.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/page/Jabatan.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jabatan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Jabatan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Jabatan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jabatan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/Jabatan.vue?vue&type=template&id=19099ed6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/page/Jabatan.vue?vue&type=template&id=19099ed6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jabatan_vue_vue_type_template_id_19099ed6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Jabatan.vue?vue&type=template&id=19099ed6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Jabatan.vue?vue&type=template&id=19099ed6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jabatan_vue_vue_type_template_id_19099ed6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jabatan_vue_vue_type_template_id_19099ed6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
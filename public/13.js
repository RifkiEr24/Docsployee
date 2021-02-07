(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AccountEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AccountEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-to-image */ "./node_modules/dom-to-image/src/dom-to-image.js");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2pdf.js */ "./node_modules/html2pdf.js/dist/html2pdf.js");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_3__);
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
      isActive: true,
      none: false,
      user: {}
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/user').then(function (res) {
      _this.user = res.data;
    }).then(function () {
      axios.get('/api/userall', {
        params: {
          iduser: _this.user.id_akun
        }
      }).then(function (res) {
        _this.user = res.data;
        console.log(_this.user);
      });
    });
  },
  methods: {
    update: function update() {
      this.axios.put('/api/account/updateall', this.user).then(function (response) {
        console.log(response);
      });
    },
    exportToPDF: function exportToPDF() {
      this.none = true;
      this.isActive = false; //    html2canvas(this.$refs.content,{scale: 1}).then(function(canvas) {
      //             var img = canvas.toDataURL('image/png');
      //             var doc = new jsPDF({
      //                 orientation: "p",
      //                 format: "a4",
      //             });
      //             doc.addImage(img, 'JPEG', 0, 0);
      //             doc.save('test.pdf');
      //         });
      //        this.none = false;
      //        this.isActive= true;

      var opt = {
        margin: 1,
        filename: 'myfile.pdf',
        image: {
          type: 'jpeg',
          quality: 0.98
        },
        html2canvas: {
          scale: 2
        },
        jsPDF: {
          unit: 'in',
          format: 'letter',
          orientation: 'portrait'
        }
      };
      html2pdf_js__WEBPACK_IMPORTED_MODULE_3___default()().from(this.$refs.contet).set(opt).save();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AccountEdit.vue?vue&type=template&id=4e9240bc&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/AccountEdit.vue?vue&type=template&id=4e9240bc& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      "form",
      {
        attrs: { method: "POST", enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.update($event)
          }
        }
      },
      [
        _c("div", { ref: "content", staticStyle: { width: "100%" } }, [
          _c("img", {
            staticClass: "w-25 ml-auto mr-auto d-block",
            attrs: {
              src:
                "/storage/images/" + _vm.user.name + "/" + _vm.user.file_name,
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "exampleInputEmail1" } }, [
              _vm._v("NPWP")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.npwp,
                  expression: "user.npwp"
                }
              ],
              staticClass: "form-control rounded-pill",
              attrs: {
                type: "number",
                placeholder: "Masukkan NPWP Anda disini",
                id: "NPWP",
                "aria-describedby": "emailHelp"
              },
              domProps: { value: _vm.user.npwp },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "npwp", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "exampleInputEmail2" } }, [
              _vm._v("Email")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.email,
                  expression: "user.email"
                }
              ],
              staticClass: "form-control rounded-pill",
              attrs: {
                type: "email",
                placeholder: "Masukkan Email Anda disini",
                id: "Email",
                "aria-describedby": "emailHelp"
              },
              domProps: { value: _vm.user.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "email", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "exampleInputEmail2" } }, [
              _vm._v("Nama")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.name,
                  expression: "user.name"
                }
              ],
              staticClass: "form-control rounded-pill",
              attrs: {
                type: "text",
                placeholder: "Masukkan Nama Anda disini",
                id: "Name",
                "aria-describedby": "emailHelp"
              },
              domProps: { value: _vm.user.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "name", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleInputEmail2" } }, [
                  _vm._v("Tanggal Lahir")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.tgl_lahir,
                      expression: "user.tgl_lahir"
                    }
                  ],
                  staticClass: "form-control rounded-pill",
                  attrs: {
                    type: "date",
                    placeholder: "Masukkan Tanggal Lahir Anda disini",
                    id: "date",
                    "aria-describedby": "dateHelp"
                  },
                  domProps: { value: _vm.user.tgl_lahir },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "tgl_lahir", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "exampleInputEmail2" } }, [
                  _vm._v("Alamat")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.alamat,
                      expression: "user.alamat"
                    }
                  ],
                  staticClass: "form-control border-rounded",
                  attrs: {
                    rows: " 4",
                    placeholder: "Masukkan Alamat Anda disini",
                    id: "Adress",
                    "aria-describedby": "emailHelp"
                  },
                  domProps: { value: _vm.user.alamat },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "alamat", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("label", { attrs: { for: "inputState" } }, [
                _vm._v("Jenis Kelamin")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.jen_kel,
                      expression: "user.jen_kel"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "inputState" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.user,
                        "jen_kel",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "" } }, [
                    _vm._v("Laki - laki")
                  ]),
                  _vm._v(" "),
                  _c("option", [_vm._v("Perempuan")])
                ]
              ),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "mt-2", attrs: { for: "exampleInputEmail2" } },
                [_vm._v("No Telepon")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.no_telp,
                    expression: "user.no_telp"
                  }
                ],
                staticClass: "form-control rounded-pill",
                attrs: {
                  type: "tel",
                  placeholder: "Masukkan Nomor Telepon Anda disini",
                  id: "tel",
                  "aria-describedby": "dateHelp"
                },
                domProps: { value: _vm.user.no_telp },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "no_telp", $event.target.value)
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn btn-primary rounded-pill ml-auto mr-auto d-block mb-3",
            attrs: { type: "submit" }
          },
          [_vm._v("Simpan Data")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn btn-success rounded-pill ml-auto mr-auto d-block mb-3",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.exportToPDF()
              }
            }
          },
          [_vm._v("Export PDF")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/AccountEdit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/admin/AccountEdit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountEdit_vue_vue_type_template_id_4e9240bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountEdit.vue?vue&type=template&id=4e9240bc& */ "./resources/js/components/admin/AccountEdit.vue?vue&type=template&id=4e9240bc&");
/* harmony import */ var _AccountEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/AccountEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountEdit_vue_vue_type_template_id_4e9240bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountEdit_vue_vue_type_template_id_4e9240bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/AccountEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/AccountEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/admin/AccountEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AccountEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/AccountEdit.vue?vue&type=template&id=4e9240bc&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/AccountEdit.vue?vue&type=template&id=4e9240bc& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountEdit_vue_vue_type_template_id_4e9240bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountEdit.vue?vue&type=template&id=4e9240bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/AccountEdit.vue?vue&type=template&id=4e9240bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountEdit_vue_vue_type_template_id_4e9240bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountEdit_vue_vue_type_template_id_4e9240bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
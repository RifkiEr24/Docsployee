(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Cloud.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Cloud.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      file: null,
      user: [],
      url: null,
      category: [],
      categoryId: null,
      documents: [],
      idcloud: null
    };
  },
  methods: {
    download: function download(user, filename) {
      axios({
        url: "http://127.0.0.1:8000/userdata/".concat(user, "/").concat(filename),
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
    getdocument: function getdocument() {
      var _this = this;

      if (this.$route.name == 'admineditcloud') {
        axios.get('/api/document', {
          params: {
            iduser: this.$route.params.id
          }
        }).then(function (res) {
          _this.documents = res.data;
        });
      } else {
        axios.get('/api/document', {
          params: {
            iduser: this.user.id_akun
          }
        }).then(function (res) {
          _this.documents = res.data;
        });
      }
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
            icon: 'success'
          });

          var uri = "/api/document/delete/".concat(id);

          _this2.axios["delete"](uri).then(function (response) {
            _this2.getdocument();
          });
        }
      });
    },
    switchView: function switchView(selectedIndex) {
      this.categoryId = selectedIndex;
    },
    processFile: function processFile(event) {
      this.file = event.target.files[0];
      this.url = URL.createObjectURL(this.file);
    },
    addModal: function () {
      var _addModal = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$swal.fire({
                  title: 'Select image',
                  html: ""
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addModal(_x) {
        return _addModal.apply(this, arguments);
      }

      return addModal;
    }(),
    Upload: function Upload(e) {
      var _this3 = this;

      if (this.$data.file != null && this.categoryId != null) {
        var config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        };
        var formdata = new FormData();
        formdata.append('image', this.file);

        if (this.$route.name == 'admineditcloud') {
          formdata.append('iduser', this.$route.params.id);
        } else {
          formdata.append('iduser', this.user.id_akun);
        }

        formdata.append('idcategory', this.categoryId);
        var uri = '/api/uploadimg';
        this.$swal.showLoading();
        this.axios.post(uri, formdata, config).then(function (response) {
          _this3.getdocument();

          _this3.$swal.close();

          _this3.$swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Gambar Berhasil Di Tambahkan'
          });
        })["catch"](function (error) {
          _this3.$swal.fire({
            icon: 'error',
            title: 'Upload Gagal',
            text: 'Penginputan Berkas Gagal, Pastikan Ukuran File Berada dibawah 2MB'
          });
        });
      } else {
        this.$swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Anda Harus memasukkan input gambar & Kategori!',
          confirmButtonText: "Kembali"
        });
      }

      e.preventDefault();
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.idcloud = this.$route.params.id;

    if (this.$route.name == 'admineditcloud') {
      axios.get('/api/document', {
        params: {
          iduser: this.$route.params.id
        }
      }).then(function (res) {
        _this4.documents = res.data;
      });
    } else {
      axios.get('/api/user').then(function (res) {
        _this4.user = res.data;
      }).then(function () {
        axios.get('/api/document', {
          params: {
            iduser: _this4.user.id_akun
          }
        }).then(function (res) {
          _this4.documents = res.data;
        });
      });
    } // GET All category


    axios.get('/api/category').then(function (res) {
      _this4.category = res.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.avatar-profile[data-v-06443ca0] {\n      width: 44px;\n      height: 44px;\n      -o-object-fit: cover;\n         object-fit: cover;\n}\n.back-icon[data-v-06443ca0]{\n      font-size: 3rem;\n  color: #3490dc;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Cloud.vue?vue&type=template&id=06443ca0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/page/Cloud.vue?vue&type=template&id=06443ca0&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    this.$route.name == "admineditcloud"
      ? _c("a", { attrs: { href: "javascript:history.go(-1)" } }, [
          _c("i", { staticClass: "fas fa-arrow-left back-icon mt-3" })
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      this.$route.name == "admineditcloud"
        ? _c(
            "div",
            { staticClass: "row mt-5" },
            _vm._l(_vm.category, function(category) {
              return _c(
                "div",
                { key: category.id_category },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "admineditcategory",
                          params: {
                            id: _vm.idcloud,
                            categoryname: category.id_category
                          }
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "col-md-4 mb-4" }, [
                        _c("div", { staticClass: "ffolder big cyan" }, [
                          _c("span", [_vm._v(_vm._s(category.category_name))])
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        : this.$route.name == "usercloud"
        ? _c(
            "div",
            { staticClass: "row mt-5" },
            _vm._l(_vm.category, function(category) {
              return _c(
                "div",
                { key: category.id_category },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "usercategorydetail",
                          params: { id: category.id_category }
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "col-md-4 mb-4" }, [
                        _c("div", { staticClass: "ffolder big cyan" }, [
                          _c("span", [_vm._v(_vm._s(category.category_name))])
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        : this.$route.name == "admincloud"
        ? _c(
            "div",
            { staticClass: "row mt-5" },
            _vm._l(_vm.category, function(category) {
              return _c(
                "div",
                { key: category.id_category },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "admincategorydetail",
                          params: { id: category.id_category }
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "col-md-4 mb-4" }, [
                        _c("div", { staticClass: "ffolder big cyan" }, [
                          _c("span", [_vm._v(_vm._s(category.category_name))])
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("h4", { staticClass: "text-dark mt-5" }, [_vm._v("All Files")]),
    _vm._v(" "),
    _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-light mt-3" }, [
        _vm._m(1),
        _vm._v(" "),
        _vm.documents.length != 0
          ? _c(
              "tbody",
              [
                _vm._l(_vm.documents, function(document) {
                  return _c("tr", { key: document.id_document }, [
                    _c("td", [
                      _vm._v(" " + _vm._s(document.category.category_name))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("img", {
                        staticClass: "avatar-profile rounded",
                        attrs: {
                          src:
                            "/userdata/" +
                            document.user.id_akun +
                            "/" +
                            document.file_name
                        }
                      }),
                      _vm._v(" " + _vm._s(document.file_name))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "span",
                        {
                          staticClass: "fa-stack  fa-size fa-lg cursor-pointer",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.download(
                                document.user.id_akun,
                                document.file_name
                              )
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-square text-primary fa-stack-2x"
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "fas fa-download fa-stack-1x text-white"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "fa-stack  fa-size fa-lg cursor-pointer",
                          on: {
                            click: function($event) {
                              return _vm.deletefile(document.id_document)
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-square text-danger fa-stack-2x"
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "fas fa-trash fa-stack-1x text-white"
                          })
                        ]
                      )
                    ])
                  ])
                }),
                _vm._v(" "),
                _c("tr")
              ],
              2
            )
          : _c("tbody", [_vm._m(2), _vm._v(" "), _c("tr")])
      ])
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { method: "POST", enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.Upload($event)
          }
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "exampleModalCenter",
              tabindex: "-1",
              role: "dialog",
              "aria-labelledby": "exampleModalCenterTitle",
              "aria-hidden": "true"
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: { role: "document" }
              },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { attrs: { id: "preview" } }, [
                      _vm.url
                        ? _c("img", {
                            staticClass: "w-75 ml-auto mr-auto d-block",
                            attrs: { src: _vm.url }
                          })
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "d-none",
                      attrs: {
                        type: "file",
                        accept: "image/*",
                        name: "imgupload",
                        id: "photoForm"
                      },
                      on: {
                        change: function($event) {
                          return _vm.processFile($event)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass:
                          "btn btn-primary rounded-pill ml-auto mr-auto d-block w-75",
                        attrs: { for: "photoForm" }
                      },
                      [_vm._v("Input Gambar Disini")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        staticClass: "form-control",
                        on: {
                          change: function($event) {
                            return _vm.switchView($event.target.selectedIndex)
                          }
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { disabled: "", selected: "selected" } },
                          [_vm._v("Pilih Kategori")]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.category, function(category) {
                          return _c("option", { key: category.id_category }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(category.category_name)
                            )
                          ])
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(4)
                ])
              ]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h4", { staticClass: "text-dark " }, [_vm._v("Quick Access")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "float-right" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary  rounded-pill text-white py-2",
              attrs: {
                "data-toggle": "modal",
                "data-target": "#exampleModalCenter"
              }
            },
            [
              _c("i", { staticClass: "fas fa-plus" }),
              _vm._v("   Add\n                    Files")
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-primary text-white" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tipe")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c(
        "td",
        {
          staticClass: "font-weight-bold text-center",
          attrs: { colspan: "3" }
        },
        [_vm._v(" Anda Tidak Mempunyai Dokumen")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [_vm._v("Tambah Gambar")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_c("i", { staticClass: "fas fa-plus" }), _vm._v(" Add File")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/page/Cloud.vue":
/*!************************************************!*\
  !*** ./resources/js/components/page/Cloud.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cloud_vue_vue_type_template_id_06443ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cloud.vue?vue&type=template&id=06443ca0&scoped=true& */ "./resources/js/components/page/Cloud.vue?vue&type=template&id=06443ca0&scoped=true&");
/* harmony import */ var _Cloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cloud.vue?vue&type=script&lang=js& */ "./resources/js/components/page/Cloud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Cloud_vue_vue_type_style_index_0_id_06443ca0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css& */ "./resources/js/components/page/Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Cloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cloud_vue_vue_type_template_id_06443ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cloud_vue_vue_type_template_id_06443ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "06443ca0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/Cloud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/Cloud.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/page/Cloud.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cloud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Cloud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/page/Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_style_index_0_id_06443ca0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Cloud.vue?vue&type=style&index=0&id=06443ca0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_style_index_0_id_06443ca0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_style_index_0_id_06443ca0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_style_index_0_id_06443ca0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_style_index_0_id_06443ca0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/page/Cloud.vue?vue&type=template&id=06443ca0&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/page/Cloud.vue?vue&type=template&id=06443ca0&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_template_id_06443ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cloud.vue?vue&type=template&id=06443ca0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/page/Cloud.vue?vue&type=template&id=06443ca0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_template_id_06443ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cloud_vue_vue_type_template_id_06443ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
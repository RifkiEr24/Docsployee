(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{165:function(s,a,t){var e={"./af":14,"./af.js":14,"./ar":15,"./ar-dz":16,"./ar-dz.js":16,"./ar-kw":17,"./ar-kw.js":17,"./ar-ly":18,"./ar-ly.js":18,"./ar-ma":19,"./ar-ma.js":19,"./ar-sa":20,"./ar-sa.js":20,"./ar-tn":21,"./ar-tn.js":21,"./ar.js":15,"./az":22,"./az.js":22,"./be":23,"./be.js":23,"./bg":24,"./bg.js":24,"./bm":25,"./bm.js":25,"./bn":26,"./bn.js":26,"./bo":27,"./bo.js":27,"./br":28,"./br.js":28,"./bs":29,"./bs.js":29,"./ca":30,"./ca.js":30,"./cs":31,"./cs.js":31,"./cv":32,"./cv.js":32,"./cy":33,"./cy.js":33,"./da":34,"./da.js":34,"./de":35,"./de-at":36,"./de-at.js":36,"./de-ch":37,"./de-ch.js":37,"./de.js":35,"./dv":38,"./dv.js":38,"./el":39,"./el.js":39,"./en-au":40,"./en-au.js":40,"./en-ca":41,"./en-ca.js":41,"./en-gb":42,"./en-gb.js":42,"./en-ie":43,"./en-ie.js":43,"./en-il":44,"./en-il.js":44,"./en-in":45,"./en-in.js":45,"./en-nz":46,"./en-nz.js":46,"./en-sg":47,"./en-sg.js":47,"./eo":48,"./eo.js":48,"./es":49,"./es-do":50,"./es-do.js":50,"./es-us":51,"./es-us.js":51,"./es.js":49,"./et":52,"./et.js":52,"./eu":53,"./eu.js":53,"./fa":54,"./fa.js":54,"./fi":55,"./fi.js":55,"./fil":56,"./fil.js":56,"./fo":57,"./fo.js":57,"./fr":58,"./fr-ca":59,"./fr-ca.js":59,"./fr-ch":60,"./fr-ch.js":60,"./fr.js":58,"./fy":61,"./fy.js":61,"./ga":62,"./ga.js":62,"./gd":63,"./gd.js":63,"./gl":64,"./gl.js":64,"./gom-deva":65,"./gom-deva.js":65,"./gom-latn":66,"./gom-latn.js":66,"./gu":67,"./gu.js":67,"./he":68,"./he.js":68,"./hi":69,"./hi.js":69,"./hr":70,"./hr.js":70,"./hu":71,"./hu.js":71,"./hy-am":72,"./hy-am.js":72,"./id":73,"./id.js":73,"./is":74,"./is.js":74,"./it":75,"./it-ch":76,"./it-ch.js":76,"./it.js":75,"./ja":77,"./ja.js":77,"./jv":78,"./jv.js":78,"./ka":79,"./ka.js":79,"./kk":80,"./kk.js":80,"./km":81,"./km.js":81,"./kn":82,"./kn.js":82,"./ko":83,"./ko.js":83,"./ku":84,"./ku.js":84,"./ky":85,"./ky.js":85,"./lb":86,"./lb.js":86,"./lo":87,"./lo.js":87,"./lt":88,"./lt.js":88,"./lv":89,"./lv.js":89,"./me":90,"./me.js":90,"./mi":91,"./mi.js":91,"./mk":92,"./mk.js":92,"./ml":93,"./ml.js":93,"./mn":94,"./mn.js":94,"./mr":95,"./mr.js":95,"./ms":96,"./ms-my":97,"./ms-my.js":97,"./ms.js":96,"./mt":98,"./mt.js":98,"./my":99,"./my.js":99,"./nb":100,"./nb.js":100,"./ne":101,"./ne.js":101,"./nl":102,"./nl-be":103,"./nl-be.js":103,"./nl.js":102,"./nn":104,"./nn.js":104,"./oc-lnc":105,"./oc-lnc.js":105,"./pa-in":106,"./pa-in.js":106,"./pl":107,"./pl.js":107,"./pt":108,"./pt-br":109,"./pt-br.js":109,"./pt.js":108,"./ro":110,"./ro.js":110,"./ru":111,"./ru.js":111,"./sd":112,"./sd.js":112,"./se":113,"./se.js":113,"./si":114,"./si.js":114,"./sk":115,"./sk.js":115,"./sl":116,"./sl.js":116,"./sq":117,"./sq.js":117,"./sr":118,"./sr-cyrl":119,"./sr-cyrl.js":119,"./sr.js":118,"./ss":120,"./ss.js":120,"./sv":121,"./sv.js":121,"./sw":122,"./sw.js":122,"./ta":123,"./ta.js":123,"./te":124,"./te.js":124,"./tet":125,"./tet.js":125,"./tg":126,"./tg.js":126,"./th":127,"./th.js":127,"./tk":128,"./tk.js":128,"./tl-ph":129,"./tl-ph.js":129,"./tlh":130,"./tlh.js":130,"./tr":131,"./tr.js":131,"./tzl":132,"./tzl.js":132,"./tzm":133,"./tzm-latn":134,"./tzm-latn.js":134,"./tzm.js":133,"./ug-cn":135,"./ug-cn.js":135,"./uk":136,"./uk.js":136,"./ur":137,"./ur.js":137,"./uz":138,"./uz-latn":139,"./uz-latn.js":139,"./uz.js":138,"./vi":140,"./vi.js":140,"./x-pseudo":141,"./x-pseudo.js":141,"./yo":142,"./yo.js":142,"./zh-cn":143,"./zh-cn.js":143,"./zh-hk":144,"./zh-hk.js":144,"./zh-mo":145,"./zh-mo.js":145,"./zh-tw":146,"./zh-tw.js":146};function n(s){var a=i(s);return t(a)}function i(s){if(!t.o(e,s)){var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}return e[s]}n.keys=function(){return Object.keys(e)},n.resolve=i,s.exports=n,n.id=165},202:function(s,a,t){"use strict";t.r(a);var e=t(3),n=e.d.reactiveProp,i={extends:e.b,mixins:[n],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},r=e.d.reactiveProp,l={extends:e.a,mixins:[r],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},j=e.d.reactiveProp,o={components:{LineChart:i,BarChart:l,PieChart:{extends:e.c,mixins:[j],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},data:function(){return{datacollection:{labels:["a","b"],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[2,8]},{label:"Data Two",backgroundColor:"#f87238",data:[4,5]}]},dataBar:{labels:["January","Bulan Naon we"],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[7,4]},{label:"Data Two",backgroundColor:"#f81291",data:[3,6]}]},dataPie:{labels:["January","Bulan Naon we"],datasets:[{label:"January",backgroundColor:"#f87979",data:[7]},{label:"Bulan Naon we",backgroundColor:"#f81291",data:[3]}]}}},mounted:function(){this.renderChart(data,options)}},c=t(1),d=Object(c.a)(o,(function(){var s=this.$createElement,a=this._self._c||s;return a("div",[this._m(0),this._v(" "),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-4 "},[a("div",{staticClass:"bg-white p-4 rounded-lg"},[a("line-chart",{attrs:{"chart-data":this.datacollection}})],1)]),this._v(" "),a("div",{staticClass:"col-md-4 "},[a("div",{staticClass:"bg-white p-4 rounded-lg"},[a("bar-chart",{attrs:{"chart-data":this.dataBar}})],1)]),this._v(" "),a("div",{staticClass:"col-md-4 "},[a("div",{staticClass:"bg-white p-4 rounded-lg"},[a("pie-chart",{attrs:{"chart-data":this.dataPie}})],1)])])])}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"row mt-4"},[t("div",{staticClass:"col-md-4 "},[t("div",{staticClass:"bg-white p-4 rounded-lg"},[t("span",{staticClass:"fa-stack fa-lg float-left"},[t("i",{staticClass:"fa fa-circle text-danger fa-stack-2x"}),s._v(" "),t("i",{staticClass:"far fa-envelope-open fa-stack-1x text-white"})]),s._v(" "),t("p",{staticClass:"float-center"},[s._v("125 Notification")])])]),s._v(" "),t("div",{staticClass:"col-md-4 "},[t("div",{staticClass:"bg-white p-4 rounded-lg"},[t("span",{staticClass:"fa-stack fa-lg float-left"},[t("i",{staticClass:"fa fa-circle text-info fa-stack-2x"}),s._v(" "),t("i",{staticClass:"fas fa-users fa-stack-1x text-white"})]),s._v(" "),t("p",{staticClass:"float-center"},[s._v("20 Employee")])])]),s._v(" "),t("div",{staticClass:"col-md-4 "},[t("div",{staticClass:"bg-white p-4 rounded-lg"},[t("span",{staticClass:"fa-stack fa-lg float-left"},[t("i",{staticClass:"fa fa-circle text-primary fa-stack-2x"}),s._v(" "),t("i",{staticClass:"fas fa-tasks fa-stack-1x text-white"})]),s._v(" "),t("p",{staticClass:"float-center"},[s._v("12 Task")])])])])}],!1,null,null,null);a.default=d.exports}}]);
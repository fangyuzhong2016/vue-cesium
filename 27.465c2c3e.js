(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{GPii:function(s,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l});var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("量算")]),s._v(" "),a("h2",[s._v("说明")]),s._v(" "),a("p",[s._v("由于 MVVM 数据驱动视图的特性，量算很方便。")]),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("绘制实体线")]),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(0),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("div",{staticClass:"demo-tool"},[a("md-button",{staticClass:"md-raised md-accent",on:{click:s.toggle}},[s._v(s._s(s.editing?"停止量算":"开始量算"))]),s._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:s.clear}},[s._v("清除")])],1),s._v(" "),a("cesium-viewer",{on:{ready:s.ready,LEFT_CLICK:s.LEFT_CLICK,MOUSE_MOVE:s.MOUSE_MOVE,RIGHT_CLICK:s.RIGHT_CLICK}},[a("cesium-3dtileset",{attrs:{url:s.modelUrl}}),s._v(" "),a("polyline-collection",s._l(s.polylines,function(s,t){return a("polyline-primitive",{key:t,attrs:{positions:s.positions}})})),s._v(" "),a("label-collection",s._l(s.labels,function(s,t){return a("cesium-label",{key:t,attrs:{position:s.position,text:s.text}})}))],1)],1)]],2)],1)},l=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toggle"')]),s._v(">")]),s._v("{{ editing ? '停止量算' : '开始量算' }}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"clear"')]),s._v(">")]),s._v("清除"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@LEFT_CLICK")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"LEFT_CLICK"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@MOUSE_MOVE")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"MOUSE_MOVE"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@RIGHT_CLICK")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"RIGHT_CLICK"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-3dtileset")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"modelUrl"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-3dtileset")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-collection")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-primitive")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polyline.positions"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"(polyline, index) of polylines"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-primitive")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-collection")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("label-collection")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-label")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"label.position"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":text")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"label.text"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"(label, index) of labels"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-label")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("label-collection")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("modelUrl")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("editing")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("distance")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("labels")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("polylines")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": []\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PolylineDashMaterialProperty({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": Cesium.Color.CYAN\n        })\n      },\n      toggle (name) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing = !"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { polylines } = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing){\n          polylines.push({"),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": []})\n        } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!polylines.length) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n          }\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" polyline = polylines[polylines.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (polyline.positions.length === "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(") {\n            polylines.pop()\n          }\n        }\n      },\n      clear () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".polylines = []\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".labels = []\n      },\n      LEFT_CLICK (movement) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { polylines, labels } = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        !polylines.length && polylines.push({"),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": []})\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" cartesian = viewer.scene.pickPosition(movement.position)\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!Cesium.defined(cartesian)) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        polylines[polylines.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("].positions.push(cartesian)\n        labels.push({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".distance > "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(" ? ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".distance / "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(").toFixed("),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(") + "),a("span",{attrs:{class:"hljs-string"}},[s._v("'km'")]),s._v(" : "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".distance.toFixed("),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(") + "),a("span",{attrs:{class:"hljs-string"}},[s._v("'m'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": cartesian\n        })\n      },\n      MOUSE_MOVE (movement) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { polylines } = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!polylines.length) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" polyline = polylines[polylines.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!polyline.positions.length) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" cartesian = viewer.scene.pickPosition(movement.endPosition)\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!Cesium.defined(cartesian)) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (polyline.positions.length === "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(") {\n          polyline.positions.push(cartesian)\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$set(polyline.positions, polyline.positions.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", cartesian)\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".distance = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getDistance(polyline.positions)\n      },\n      RIGHT_CLICK (movement) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".editing) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { polylines,labels } = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(!polylines.length) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" cartesian = viewer.scene.pickPosition(movement.position)\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!Cesium.defined(cartesian)) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" polyline = polylines[polylines.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("]\n        polyline.positions.pop()\n        polyline.positions.push(cartesian)\n        labels.push({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".distance > "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(" ? ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".distance / "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(").toFixed("),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(") + "),a("span",{attrs:{class:"hljs-string"}},[s._v("'km'")]),s._v(" : "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".distance.toFixed("),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(") + "),a("span",{attrs:{class:"hljs-string"}},[s._v("'m'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": cartesian\n        })\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (polylines.length) {\n          polylines.push({"),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": []})\n        }\n      },\n      getDistance (positions) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium } = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" distance = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < positions.length - "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("; i++) {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" s = Cesium.Cartesian3.distance(positions[i], positions[i + "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("])\n          distance = distance + s\n        }\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" distance\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])}];n._withStripped=!0},K8cV:function(s,t,a){var n,l,e;l=[t],void 0===(e="function"==typeof(n=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{modelUrl:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",material:void 0,editing:!1,distance:0,labels:[],polylines:[],options:[]}},methods:{ready:function(s){var t=s.Cesium,a=s.viewer;this.cesiumInstance=s,a.scene.globe.depthTestAgainstTerrain=!0,this.material=new t.PolylineDashMaterialProperty({color:t.Color.CYAN})},toggle:function(s){this.editing=!this.editing;var t=this.polylines;if(this.editing)t.push({positions:[]});else{if(!t.length)return;var a=t[t.length-1];0===a.positions.length&&t.pop()}},clear:function(){this.polylines=[],this.labels=[]},LEFT_CLICK:function(s){if(this.editing){var t=this.cesiumInstance,a=t.Cesium,n=t.viewer,l=this.polylines,e=this.labels;!l.length&&l.push({positions:[]});var i=n.scene.pickPosition(s.position);a.defined(i)&&(l[l.length-1].positions.push(i),e.push({text:this.distance>1e3?(this.distance/1e3).toFixed(2)+"km":this.distance.toFixed(2)+"m",position:i}))}},MOUSE_MOVE:function(s){if(this.editing){var t=this.polylines;if(t.length){var a=t[t.length-1];if(a.positions.length){var n=this.cesiumInstance,l=n.Cesium,e=n.viewer,i=e.scene.pickPosition(s.endPosition);l.defined(i)&&(1===a.positions.length&&a.positions.push(i),this.$set(a.positions,a.positions.length-1,i),this.distance=this.getDistance(a.positions))}}}},RIGHT_CLICK:function(s){if(this.editing){var t=this.polylines,a=this.labels;if(t.length){var n=viewer.scene.pickPosition(s.position);if(Cesium.defined(n)){var l=t[t.length-1];l.positions.pop(),l.positions.push(n),a.push({text:this.distance>1e3?(this.distance/1e3).toFixed(2)+"km":this.distance.toFixed(2)+"m",position:n}),t.length&&t.push({positions:[]})}}}},getDistance:function(s){for(var t=this.cesiumInstance.Cesium,a=0,n=0;n<s.length-1;n++){var l=t.Cartesian3.distance(s[n],s[n+1]);a+=l}return a}}},s.exports=t.default})?n.apply(t,l):n)||(s.exports=e)},"sZ/b":function(s,t,a){"use strict";a.r(t);var n=a("K8cV"),l=a.n(n);for(var e in n)"default"!==e&&function(s){a.d(t,s,function(){return n[s]})}(e);var i=a("GPii"),r=a("JFUb"),v=Object(r.a)(l.a,i.a,i.b,!1,null,null,null);v.options.__file="docs/md/en/guide-measuring.md",t.default=v.exports},zP7N:function(s,t,a){s.exports=a("sZ/b")}}]);
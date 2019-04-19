(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{ALbO:function(t,s,v){"use strict";v.r(s);var _=v("Uaqy"),a=v.n(_);for(var e in _)"default"!==e&&function(t){v.d(s,t,function(){return _[t]})}(e);var n=v("CB84"),r=v("JFUb"),l=Object(r.a)(a.a,n.a,n.b,!1,null,null,null);l.options.__file="docs/md/zh/cesium-viewer.md",s.default=l.exports},CB84:function(t,s,v){"use strict";v.d(s,"a",function(){return _}),v.d(s,"b",function(){return a});var _=function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("section",[v("h1",[t._v("场景容器")]),t._v(" "),t._m(0),t._v(" "),v("h2",[t._v("示例")]),t._v(" "),v("h3",[t._v("初始化Viewer控制部件显隐")]),t._v(" "),v("h4",[t._v("预览")]),t._v(" "),v("doc-preview",[[v("div",{ref:"myViewer",staticClass:"viewer"},[v("cesium-viewer",{attrs:{animation:t.animation,baseLayerPicker:t.baseLayerPicker,timeline:t.timeline,fullscreenButton:t.fullscreenButton,fullscreenElement:t.fullscreenElement,infoBox:t.infoBox},on:{ready:t.ready}}),t._v(" "),v("div",{staticClass:"demo-tool"},[v("span",[t._v("动画部件")]),t._v(" "),v("md-switch",{model:{value:t.animation,callback:function(s){t.animation=s},expression:"animation"}}),t._v(" "),v("span",[t._v("时间轴部件")]),t._v(" "),v("md-switch",{model:{value:t.timeline,callback:function(s){t.timeline=s},expression:"timeline"}}),t._v(" "),v("span",[t._v("基础图层拾取器")]),t._v(" "),v("md-switch",{model:{value:t.baseLayerPicker,callback:function(s){t.baseLayerPicker=s},expression:"baseLayerPicker"}}),t._v(" "),v("span",[t._v("全屏按钮")]),t._v(" "),v("md-switch",{model:{value:t.fullscreenButton,callback:function(s){t.fullscreenButton=s},expression:"fullscreenButton"}}),t._v(" "),v("span",[t._v("信息提示框")]),t._v(" "),v("md-switch",{model:{value:t.infoBox,callback:function(s){t.infoBox=s},expression:"infoBox"}})],1)],1)]],2),t._v(" "),v("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),v("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),v("hr"),t._v(" "),v("h2",[t._v("事件")]),t._v(" "),t._m(3),t._v(" "),v("hr")],1)},a=[function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("p",[v("code",{pre:!0},[t._v("CesiumViewer")]),t._v("是用于构建 Cesium 应用程序的基础部件，它将所有标准的 Cesium 部件组合成一个可重复使用的包。 此部件通常可以利用 mixin 来扩展，以此增加对各种应用程序有用的功能函数。"),v("br"),t._v("\n场景容器的实质是通过 Cesium.Viewer 初始化的一个 DOM 节点，用于挂载其他 DOM 节点或者组件。此部件初始化完成后默认会有 Cesiumwidget, dataSources、 如果需要二次开发或者手动控制其子组件，可以在 "),v("code",{pre:!0},[t._v("ready")]),t._v(" 事件中使用返回的 "),v("code",{pre:!0},[t._v("Cesium")]),t._v(" 和 "),v("code",{pre:!0},[t._v("Viewer")]),t._v(" 实例进行手动控制。")])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("pre",{pre:!0},[v("code",{attrs:{"v-pre":"",class:"language-html"}},[v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"myViewer"')]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"demo-tool"')]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("动画部件"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"animation"')]),t._v(">")]),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("时间轴部件"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"timeline"')]),t._v(">")]),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("基础图层拾取器"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"baseLayerPicker"')]),t._v(">")]),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("全屏按钮"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"fullscreenButton"')]),t._v(">")]),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("信息提示框"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"infoBox"')]),t._v(">")]),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-switch")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("cesium-viewer")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v(":animation")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"animation"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v(":baseLayerPicker")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"baseLayerPicker"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v(":timeline")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"timeline"')]),t._v(" \n      "),v("span",{attrs:{class:"hljs-attr"}},[t._v(":fullscreenButton")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"fullscreenButton"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v(":fullscreenElement")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"fullscreenElement"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v(":infoBox")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"infoBox"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("cesium-viewer")]),t._v(">")]),t._v("\n  "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),v("span",{attrs:{class:"javascript"}},[t._v("\n  "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data () {\n      "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),v("span",{attrs:{class:"hljs-attr"}},[t._v("animation")]),t._v(": "),v("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),v("span",{attrs:{class:"hljs-attr"}},[t._v("timeline")]),t._v(": "),v("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),v("span",{attrs:{class:"hljs-attr"}},[t._v("baseLayerPicker")]),t._v(": "),v("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),v("span",{attrs:{class:"hljs-attr"}},[t._v("fullscreenButton")]),t._v(": "),v("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),v("span",{attrs:{class:"hljs-attr"}},[t._v("infoBox")]),t._v(": "),v("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),v("span",{attrs:{class:"hljs-attr"}},[t._v("fullscreenElement")]),t._v(": "),v("span",{attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".body\n      }\n    },\n    "),v("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready (cesiumInstance) {\n        "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" {Cesium, viewer} = cesiumInstance\n        "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".fullscreenElement = "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.myViewer\n        viewer.entities.add({\n          "),v("span",{attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),v("span",{attrs:{class:"hljs-string"}},[t._v("'成都欢迎你'")]),t._v(",\n          "),v("span",{attrs:{class:"hljs-attr"}},[t._v("position")]),t._v(": Cesium.Cartesian3.fromDegrees("),v("span",{attrs:{class:"hljs-number"}},[t._v("104.06")]),t._v(", "),v("span",{attrs:{class:"hljs-number"}},[t._v("30.67")]),t._v(", "),v("span",{attrs:{class:"hljs-number"}},[t._v("100")]),t._v("),\n          "),v("span",{attrs:{class:"hljs-attr"}},[t._v("billboard")]),t._v(": "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.BillboardGraphics({\n            "),v("span",{attrs:{class:"hljs-attr"}},[t._v("image")]),t._v(": "),v("span",{attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),t._v(",\n            "),v("span",{attrs:{class:"hljs-attr"}},[t._v("scale")]),t._v(": "),v("span",{attrs:{class:"hljs-number"}},[t._v("0.1")]),t._v("\n          }),\n          "),v("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.LabelGraphics ({\n            "),v("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),v("span",{attrs:{class:"hljs-string"}},[t._v("'Hello Word'")]),t._v(",\n            "),v("span",{attrs:{class:"hljs-attr"}},[t._v("font")]),t._v(": "),v("span",{attrs:{class:"hljs-string"}},[t._v("'24px sans-serif'")]),t._v(",\n            "),v("span",{attrs:{class:"hljs-attr"}},[t._v("horizontalOrigin")]),t._v(": "),v("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v(",\n            "),v("span",{attrs:{class:"hljs-attr"}},[t._v("outlineColor")]),t._v(": "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.Color("),v("span",{attrs:{class:"hljs-number"}},[t._v("0")]),t._v(", "),v("span",{attrs:{class:"hljs-number"}},[t._v("0")]),t._v(", "),v("span",{attrs:{class:"hljs-number"}},[t._v("0")]),t._v(", "),v("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v("),\n            "),v("span",{attrs:{class:"hljs-attr"}},[t._v("outlineWidth")]),t._v(": "),v("span",{attrs:{class:"hljs-number"}},[t._v("2")]),t._v(",\n            "),v("span",{attrs:{class:"hljs-attr"}},[t._v("pixelOffset")]),t._v(": "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.Cartesian2("),v("span",{attrs:{class:"hljs-number"}},[t._v("17")]),t._v(", "),v("span",{attrs:{class:"hljs-number"}},[t._v("-5")]),t._v("),\n            "),v("span",{attrs:{class:"hljs-attr"}},[t._v("style")]),t._v(": Cesium.LabelStyle.FILL\n          })\n        })\n      }\n    }\n  }\n")]),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("table",[v("thead",[v("tr",[v("th",[t._v("属性名")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("animation")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示动画控件")])]),t._v(" "),v("tr",[v("td",[t._v("baseLayerPicker")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示基础图层切换按钮")])]),t._v(" "),v("tr",[v("td",[t._v("fullscreenButton")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示全屏切换按钮")])]),t._v(" "),v("tr",[v("td",[t._v("vrButton")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示 VR 功能按钮")])]),t._v(" "),v("tr",[v("td",[t._v("geocoder")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示地理编码器搜索框")])]),t._v(" "),v("tr",[v("td",[t._v("homeButton")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示主页按钮")])]),t._v(" "),v("tr",[v("td",[t._v("infoBox")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示信息框")])]),t._v(" "),v("tr",[v("td",[t._v("sceneModePicker")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示场景模式切换按钮")])]),t._v(" "),v("tr",[v("td",[t._v("selectionIndicator")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示选择指示符")])]),t._v(" "),v("tr",[v("td",[t._v("timeline")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示时间轴控件")])]),t._v(" "),v("tr",[v("td",[t._v("navigation")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示导航控件（SuperMap）")])]),t._v(" "),v("tr",[v("td",[t._v("navigationHelpButton")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示导航帮助按钮")])]),t._v(" "),v("tr",[v("td",[t._v("navigationInstructionsInitiallyVisible")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是展开导航帮助面板，否点击navigationHelpButton才能展开面板。")])]),t._v(" "),v("tr",[v("td",[t._v("scene3DOnly")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("如果为true，则每个几何实例仅以3D形式呈现以节省GPU内存。")])]),t._v(" "),v("tr",[v("td",[t._v("shouldAnimate")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("true if the clock should attempt to advance simulation time by default, false otherwise.")])]),t._v(" "),v("tr",[v("td",[t._v("fullscreenElement")]),t._v(" "),v("td",[t._v("Element | String")]),t._v(" "),v("td",[t._v("document.body")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("按下全屏按钮时要放入全屏模式的元素或ID。")])]),t._v(" "),v("tr",[v("td",[t._v("useDefaultRenderLoop")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("如果此部件能够控制渲染循环，设置为true，反之设置为false。")])]),t._v(" "),v("tr",[v("td",[t._v("targetFrameRate")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("使用默认渲染循环时的目标帧速率。")])]),t._v(" "),v("tr",[v("td",[t._v("showRenderLoopErrors")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("如果设置为true，发生渲染循环错误时，将自动给用户显示一个包含错误信息的HTML面板。")])]),t._v(" "),v("tr",[v("td",[t._v("automaticallyTrackDataSourceClocks")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("如果设置为true，将自动跟踪新添加数据源的时钟设置，如果数据源的时钟变更，则更新。如需单独设置时钟，请将此项设置为false。")])]),t._v(" "),v("tr",[v("td",[t._v("contextOptions")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("Context and WebGL 创建属性与传递给Scene匹配的选项。")])]),t._v(" "),v("tr",[v("td",[t._v("orderIndependentTranslucency")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("如果此项设置为true，并且使用设备支持，将使用与顺序无关的半透明。")])]),t._v(" "),v("tr",[v("td",[t._v("creditContainer")]),t._v(" "),v("td",[t._v("Element | String")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("指定包含CreditDisplay信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。")])]),t._v(" "),v("tr",[v("td",[t._v("creditViewport")]),t._v(" "),v("td",[t._v("Element | String")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("指定包含CreditDisplay弹出框信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。")])]),t._v(" "),v("tr",[v("td",[t._v("terrainExaggeration")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("1.0")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("用于夸大地形的标量。请注意，设置地形夸张不会修改其它任何数据。")])]),t._v(" "),v("tr",[v("td",[t._v("shadows")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("确定阴影是否由太阳投射形成。")])]),t._v(" "),v("tr",[v("td",[t._v("terrainShadows")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("确定地形是否投射或接受来自太阳的阴影。")])]),t._v(" "),v("tr",[v("td",[t._v("mapMode2D")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("确定二维地图是可旋转的或是可以在在水平方向上无限滚动。")])]),t._v(" "),v("tr",[v("td",[t._v("projectionPicker")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示投影切换按钮")])]),t._v(" "),v("tr",[v("td",[t._v("logo")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 是否显示默认logo.")])]),t._v(" "),v("tr",[v("td",[t._v("accessToken")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("指定accessToken，使用Cesium ion的数据源需要到https://cesium.com/ion/申请一个账户，获取Access Token。")])]),t._v(" "),v("tr",[v("td",[t._v("camera")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 场景相机位置.默认定位到全球范围内的中国。")])])])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("table",[v("thead",[v("tr",[v("th",[t._v("事件名")]),t._v(" "),v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("来源")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("selectedEntityChanged")]),t._v(" "),v("td",[t._v("entity")]),t._v(" "),v("td",[t._v("场景选中实体发生改变时触发此事件。事件参数表示选中的实体，或者undefined（为选中）")]),t._v(" "),v("td",[t._v("Viewer")])]),t._v(" "),v("tr",[v("td",[t._v("trackedEntityChanged")]),t._v(" "),v("td",[t._v("entity")]),t._v(" "),v("td",[t._v("场景跟踪实体发生改变时触发此事件。事件参数表示跟踪的实体。")]),t._v(" "),v("td",[t._v("Viewer")])]),t._v(" "),v("tr",[v("td",[t._v("layerAdded")]),t._v(" "),v("td",[t._v("imageryLayer, index")]),t._v(" "),v("td",[t._v("场景添加某影像图层后触发该事件。事件参数表示改图层和它的索引。")]),t._v(" "),v("td",[t._v("Viewer.imageryLayers")])]),t._v(" "),v("tr",[v("td",[t._v("layerMoved")]),t._v(" "),v("td",[t._v("imageryLayer, newIndex, oldIndex")]),t._v(" "),v("td",[t._v("场景某影像图层发生移动后触发该事件。事件参数表示该图层和它以前的索引以及新索引。")]),t._v(" "),v("td",[t._v("Viewer.imageryLayers")])]),t._v(" "),v("tr",[v("td",[t._v("layerRemoved")]),t._v(" "),v("td",[t._v("imageryLayer, index")]),t._v(" "),v("td",[t._v("场景移除某影像图层后触发该事件。事件参数表示该图层和它的索引。")]),t._v(" "),v("td",[t._v("Viewer.imageryLayers")])]),t._v(" "),v("tr",[v("td",[t._v("layerShownOrHidden")]),t._v(" "),v("td",[t._v("imageryLayer, index, flag")]),t._v(" "),v("td",[t._v("场景中某图层可见性设置ImageryLayer#show发生改变时触发该事件。事件参数表示发生改变的图层，图层索引，以及图层是否可见。")]),t._v(" "),v("td",[t._v("iewer.imageryLayers")])]),t._v(" "),v("tr",[v("td",[t._v("dataSourceAdded")]),t._v(" "),v("td",[t._v("dataSource")]),t._v(" "),v("td",[t._v("场景添加某数据源后触发该事件。事件参数表示该数据源。")]),t._v(" "),v("td",[t._v("Viewer.dataSources")])]),t._v(" "),v("tr",[v("td",[t._v("dataSourceMoved")]),t._v(" "),v("td",[t._v("dataSource")]),t._v(" "),v("td",[t._v("场景移动某数据源后发生后触发该事件。事件参数表示该数据源和它以前的索引以及新索引。")]),t._v(" "),v("td",[t._v("Viewer.dataSources")])]),t._v(" "),v("tr",[v("td",[t._v("dataSourceRemoved")]),t._v(" "),v("td",[t._v("dataSource")]),t._v(" "),v("td",[t._v("场景移除某数据源后触发该事件。事件参数表示该数据源。")]),t._v(" "),v("td",[t._v("Viewer.entities")])]),t._v(" "),v("tr",[v("td",[t._v("collectionChanged")]),t._v(" "),v("td",[t._v("collection, added, removed, changed")]),t._v(" "),v("td",[t._v("场景实体集合添加、移除或者改变实体后触发该事件。事件参数表示该实体集合，以及添加的实体数组、移除的实体数组、改变的实体数组。")]),t._v(" "),v("td",[t._v("Viewer.entities")])]),t._v(" "),v("tr",[v("td",[t._v("morphComplete")]),t._v(" "),v("td",[t._v("object")]),t._v(" "),v("td",[t._v("场景投影转换完成后触发该事件。事件参数是一个包含scene的对象。")]),t._v(" "),v("td",[t._v("Viewer.scene")])]),t._v(" "),v("tr",[v("td",[t._v("morphStart")]),t._v(" "),v("td",[t._v("object")]),t._v(" "),v("td",[t._v("场景投影转换开始时触发该事件。事件参数是一个包含scene的对象。")]),t._v(" "),v("td",[t._v("Viewer.scene")])]),t._v(" "),v("tr",[v("td",[t._v("postRender")]),t._v(" "),v("td",[t._v("scene, currentTime")]),t._v(" "),v("td",[t._v("场景每帧渲染结束后触发该事件。事件参数是scene实例和当前时间。")]),t._v(" "),v("td",[t._v("Viewer.scene")])]),t._v(" "),v("tr",[v("td",[t._v("preRender")]),t._v(" "),v("td",[t._v("scene, currentTime")]),t._v(" "),v("td",[t._v("场景刷新后但在每帧渲染开始时触发该事件。事件参数是scene实例和当前时间。")]),t._v(" "),v("td",[t._v("Viewer.scene")])]),t._v(" "),v("tr",[v("td",[t._v("postUpdate")]),t._v(" "),v("td",[t._v("scene, currentTime")]),t._v(" "),v("td",[t._v("场景刷新后但在每帧渲染前触发该事件。事件参数是scene实例和当前时间。")]),t._v(" "),v("td",[t._v("Viewer.scene")])]),t._v(" "),v("tr",[v("td",[t._v("preUpdate")]),t._v(" "),v("td",[t._v("scene, currentTime")]),t._v(" "),v("td",[t._v("场景刷新或者渲染前触发该事件。事件参数是scene实例和当前时间。")]),t._v(" "),v("td",[t._v("Viewer.scene")])]),t._v(" "),v("tr",[v("td",[t._v("renderError")]),t._v(" "),v("td",[t._v("scene, error")]),t._v(" "),v("td",[t._v("场景抛出渲染异常时触发该事件。事件参数是scene实例和异常。")]),t._v(" "),v("td",[t._v("Viewer.scene")])]),t._v(" "),v("tr",[v("td",[t._v("terrainProviderChanged")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("场景地形提供者发生改变时触发该事件。")]),t._v(" "),v("td",[t._v("Viewer.scene")])]),t._v(" "),v("tr",[v("td",[t._v("changed")]),t._v(" "),v("td",[t._v("number")]),t._v(" "),v("td",[t._v("场景相机按percentageChanged设定比例改变后触发该事件。")]),t._v(" "),v("td",[t._v("Viewer.camera")])]),t._v(" "),v("tr",[v("td",[t._v("moveEnd")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("场景相机停止移动后触发该事件。")]),t._v(" "),v("td",[t._v("Viewer.camera")])]),t._v(" "),v("tr",[v("td",[t._v("moveStart")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("场景相机开始移动时触发该事件。")]),t._v(" "),v("td",[t._v("Viewer.camera")])]),t._v(" "),v("tr",[v("td",[t._v("onStop")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("场景时钟每当到达停止时间时触发该事件。")]),t._v(" "),v("td",[t._v("Viewer.clock")])]),t._v(" "),v("tr",[v("td",[t._v("onTick")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("场景时钟每当调用Clock#tick触发该事件。")]),t._v(" "),v("td",[t._v("Viewer.clock")])]),t._v(" "),v("tr",[v("td",[t._v("errorEvent")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("场景地形提供者遇到异步错误时触发该事件。")]),t._v(" "),v("td",[t._v("Viewer.terrainProvider")])]),t._v(" "),v("tr",[v("td",[t._v("LEFT_CLICK")]),t._v(" "),v("td",[t._v("{position: point}")]),t._v(" "),v("td",[t._v("鼠标左键单击事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("LEFT_DOUBLE_CLICK")]),t._v(" "),v("td",[t._v("{position: point}")]),t._v(" "),v("td",[t._v("鼠标左键双击事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("LEFT_DOWN")]),t._v(" "),v("td",[t._v("{position: point}")]),t._v(" "),v("td",[t._v("鼠标左键按下事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("LEFT_UP")]),t._v(" "),v("td",[t._v("{position: point}")]),t._v(" "),v("td",[t._v("鼠标左键弹起事件")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("MIDDLE_CLICK")]),t._v(" "),v("td",[t._v("{position: point}")]),t._v(" "),v("td",[t._v("鼠标中键单击事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("MIDDLE_DOWN")]),t._v(" "),v("td",[t._v("{position: point}")]),t._v(" "),v("td",[t._v("鼠标中键按下事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("MIDDLE_UP")]),t._v(" "),v("td",[t._v("{position: point}")]),t._v(" "),v("td",[t._v("鼠标中键弹起事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("MOUSE_MOVE")]),t._v(" "),v("td",[t._v("{startPosition: point, endPosition: point}")]),t._v(" "),v("td",[t._v("鼠标移动事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("PINCH_END")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("触摸设备双指操作结束事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("PINCH_MOVE")]),t._v(" "),v("td",[t._v("{distance: {startPosition: point, endPosition: point}, angleAndHeight: {startPosition: point, endPosition: point}}")]),t._v(" "),v("td",[t._v("触摸设备双指操作移动事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("PINCH_START")]),t._v(" "),v("td",[t._v("{position1: point, position2: point}")]),t._v(" "),v("td",[t._v("触摸设备双指操作开始事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("RIGHT_CLICK")]),t._v(" "),v("td",[t._v("{position: point}")]),t._v(" "),v("td",[t._v("鼠标右键单击事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("RIGHT_DOWN")]),t._v(" "),v("td",[t._v("{position: point}")]),t._v(" "),v("td",[t._v("鼠标右键按下事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("RIGHT_UP")]),t._v(" "),v("td",[t._v("{position: point}")]),t._v(" "),v("td",[t._v("鼠标弹起事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])]),t._v(" "),v("tr",[v("td",[t._v("WHEEL")]),t._v(" "),v("td",[t._v("delta")]),t._v(" "),v("td",[t._v("鼠标中轮滚动事件。")]),t._v(" "),v("td",[t._v("ScreenSpaceEventType")])])])])}];_._withStripped=!0},Uaqy:function(t,s,v){var _,a,e;a=[s],void 0===(e="function"==typeof(_=function(s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{animation:!0,timeline:!0,baseLayerPicker:!1,fullscreenButton:!0,infoBox:!0,fullscreenElement:document.body}},methods:{ready:function(t){var s=t.Cesium,v=t.viewer;this.fullscreenElement=this.$refs.myViewer,v.entities.add({id:"成都欢迎你",position:s.Cartesian3.fromDegrees(104.06,30.67,100),billboard:new s.BillboardGraphics({image:"https://zouyaoji.top/vue-cesium/favicon.png",scale:.1}),label:new s.LabelGraphics({text:"Hello Word",font:"24px sans-serif",horizontalOrigin:1,outlineColor:new s.Color(0,0,0,1),outlineWidth:2,pixelOffset:new s.Cartesian2(17,-5),style:s.LabelStyle.FILL})})}}},t.exports=s.default})?_.apply(s,a):_)||(t.exports=e)},wp8m:function(t,s,v){t.exports=v("ALbO")}}]);
# PointGraphics

`vc-graphics-point` 组件用于加载点图形。需要作为 `vc-entity` 的子组件使用。

## 示例

### 加载点图形

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :position="position1" :description="description" :point.sync="point1">
          <vc-graphics-point ref="point1" :color="color1" :pixelSize="8"></vc-graphics-point>
        </vc-entity>
        <vc-entity :position="position2" :description="description">
          <vc-graphics-point ref="point2" :color="color2" :pixelSize="16"></vc-graphics-point>
        </vc-entity>
        <vc-entity :position="position3" :description="description">
          <vc-graphics-point ref="point3" :color="color3" :pixelSize="32"></vc-graphics-point>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          point1: null,
          color1: {},
          position1: { lng: -75.59777, lat: 40.03883 },

          color2: {},
          position2: { lng: -80.5, lat: 35.14 },

          color3: {},
          position3: undefined
        }
      },
      mounted() {
        Promise.all([this.$refs.point1.createPromise, this.$refs.point2.createPromise, this.$refs.point3.createPromise]).then(
          (instances) => {
            instances[0].viewer.zoomTo(instances[0].viewer.entities)
          }
        )
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.color1 = Cesium.Color.RED

          this.color2 = Cesium.Color.BLUE

          this.position3 = Cesium.Cartesian3.fromDegrees(-80.12, 25.46)
          this.color3 = Cesium.Color.LIME
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-entity :position="position1" :description="description" :point.sync="point1">
        <vc-graphics-point ref="point1" :color="color1" :pixelSize="8"></vc-graphics-point>
      </vc-entity>
      <vc-entity :position="position2" :description="description">
        <vc-graphics-point ref="point2" :color="color2" :pixelSize="16"></vc-graphics-point>
      </vc-entity>
      <vc-entity :position="position3" :description="description">
        <vc-graphics-point ref="point3" :color="color3" :pixelSize="32"></vc-graphics-point>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        point1: null,
        color1: {},
        position1: { lng: -75.59777, lat: 40.03883 },

        color2: {},
        position2: { lng: -80.5, lat: 35.14 },

        color3: {},
        position3: undefined
      }
    },
    mounted() {
      Promise.all([this.$refs.point1.createPromise, this.$refs.point2.createPromise, this.$refs.point3.createPromise]).then(
        (instances) => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        }
      )
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.color1 = Cesium.Color.RED

        this.color2 = Cesium.Color.BLUE

        this.position3 = Cesium.Cartesian3.fromDegrees(-80.12, 25.46)
        this.color3 = Cesium.Color.LIME
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------- | ----------- | -------------------------------------------------- |
| show | Boolean | `true` | `optional` 指定 point 是否显示。 |
| pixelSize | Number | `1` | `optional` 指定 point 像素大小。 |
| heightReference | Number | `0` | `optional` 指定 point 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| color | Object\|String\|Array | `'WHITE'` | `optional` 指定 point 颜色。 |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` 指定 point 轮廓颜色。 |
| outlineWidth | Number | `0` | `optional` 指定 point 轮廓像素宽度。 |
| scaleByDistance | Object | | `optional` 指定 point 随相机距离改变的缩放参数。 **结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| translucencyByDistance | Object | | `optional` 指定 point 随相机距离改变的透明度参数。**结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| distanceDisplayCondition | Object | | `optional` 指定 point 随相机距离显隐参数。**结构：{ near: number, far: number }** |
| disableDepthTestDistance | Number | | `optional` 指定 point 深度测试参数。 |

---

- 参考官方文档：**[PointGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PointGraphics.html)**

## 事件

| 事件名            | 参数                           | 描述                                                                             |
| ----------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| definitionChanged |                                | 每当更改或修改属性或子属性时触发该事件。                                         |

---

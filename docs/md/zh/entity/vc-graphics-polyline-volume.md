# PolylineVolumeGraphics

`vc-graphics-polyline-volume` 组件用于加载多段线柱体。需要作为 `vc-entity` 的子组件使用。

## 示例

### 添加多段线柱体到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :polylineVolume.sync="polylineVolume1">
          <vc-graphics-polyline-volume
            ref="polylineVolume1"
            :positions="positions1"
            :shape="shape1"
            :material="material1"
          ></vc-graphics-polyline-volume>
        </vc-entity>
        <vc-entity :polylineVolume.sync="polylineVolume2">
          <vc-graphics-polyline-volume
            :positions="positions2"
            :shape="shape2"
            :material="material2"
            :outline="true"
            :outlineColor="outlineColor2"
            :cornerType="cornerType2"
            ref="polylineVolume2"
          ></vc-graphics-polyline-volume>
        </vc-entity>
        <vc-entity :polylineVolume.sync="polylineVolume3">
          <vc-graphics-polyline-volume
            :positions="positions3"
            :shape="shape3"
            :material="material3"
            :cornerType="cornerType3"
            ref="polylineVolume3"
          ></vc-graphics-polyline-volume>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          polylineVolume1: {},
          positions1: [
            { lng: -85.0, lat: 32.0 },
            { lng: -85.0, lat: 36.0 },
            { lng: -89.0, lat: 36.0 }
          ],
          shape1: [],
          material1: 'RED',
          polylineVolume2: {},
          positions2: [
            { lng: -90.0, lat: 32.0, height: 0.0 },
            { lng: -90.0, lat: 36.0, height: 100000.0 },
            { lng: -94.0, lat: 36.0, height: 0.0 }
          ],
          shape2: [
            { x: -50000, y: -50000 },
            { x: 50000, y: -50000 },
            { x: -50000, y: 50000 },
            { x: -50000, y: 50000 }
          ],
          material2: undefined,
          cornerType2: 0,
          outlineColor2: 'BLACK',
          polylineVolume3: {},
          shape3: [],
          positions3: [
            { lng: -95.0, lat: 32.0, height: 0.0 },
            { lng: -95.0, lat: 36.0, height: 100000.0 },
            { lng: -99.0, lat: 36.0, height: 200000.0 }
          ],
          material3: 'BLUE',
          cornerType3: 0
        }
      },
      mounted() {
        Promise.all([
          this.$refs.polylineVolume1.createPromise,
          this.$refs.polylineVolume2.createPromise,
          this.$refs.polylineVolume3.createPromise
        ]).then((instances) => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance

          this.shape1 = this.computeCircle(60000.0)

          this.cornerType2 = Cesium.CornerType.BEVELED
          this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
          this.outlineColor2 = Cesium.Color.BLACK

          this.shape3 = this.computeStar(7, 70000, 50000)
          this.cornerType3 = Cesium.CornerType.MITERED
        },
        computeCircle(radius) {
          let positions = []
          for (let i = 0; i < 360; i++) {
            let radians = Cesium.Math.toRadians(i)
            positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
          }
          return positions
        },
        computeStar(arms, rOuter, rInner) {
          let angle = Math.PI / arms
          let length = 2 * arms
          let positions = new Array(length)
          for (let i = 0; i < length; i++) {
            let r = i % 2 === 0 ? rOuter : rInner
            positions[i] = { x: Math.cos(i * angle) * r, y: Math.sin(i * angle) * r }
          }
          return positions
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
      <vc-entity :polylineVolume.sync="polylineVolume1">
        <vc-graphics-polyline-volume
          ref="polylineVolume1"
          :positions="positions1"
          :shape="shape1"
          :material="material1"
        ></vc-graphics-polyline-volume>
      </vc-entity>
      <vc-entity :polylineVolume.sync="polylineVolume2">
        <vc-graphics-polyline-volume
          :positions="positions2"
          :shape="shape2"
          :material="material2"
          :outline="true"
          :outlineColor="outlineColor2"
          :cornerType="cornerType2"
          ref="polylineVolume2"
        ></vc-graphics-polyline-volume>
      </vc-entity>
      <vc-entity :polylineVolume.sync="polylineVolume3">
        <vc-graphics-polyline-volume
          :positions="positions3"
          :shape="shape3"
          :material="material3"
          :cornerType="cornerType3"
          ref="polylineVolume3"
        ></vc-graphics-polyline-volume>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        polylineVolume1: {},
        positions1: [
          { lng: -85.0, lat: 32.0 },
          { lng: -85.0, lat: 36.0 },
          { lng: -89.0, lat: 36.0 }
        ],
        shape1: [],
        material1: 'RED',
        polylineVolume2: {},
        positions2: [
          { lng: -90.0, lat: 32.0, height: 0.0 },
          { lng: -90.0, lat: 36.0, height: 100000.0 },
          { lng: -94.0, lat: 36.0, height: 0.0 }
        ],
        shape2: [
          { x: -50000, y: -50000 },
          { x: 50000, y: -50000 },
          { x: -50000, y: 50000 },
          { x: -50000, y: 50000 }
        ],
        material2: undefined,
        cornerType2: 0,
        outlineColor2: 'BLACK',
        polylineVolume3: {},
        shape3: [],
        positions3: [
          { lng: -95.0, lat: 32.0, height: 0.0 },
          { lng: -95.0, lat: 36.0, height: 100000.0 },
          { lng: -99.0, lat: 36.0, height: 200000.0 }
        ],
        material3: 'BLUE',
        cornerType3: 0
      }
    },
    mounted() {
      Promise.all([
        this.$refs.polylineVolume1.createPromise,
        this.$refs.polylineVolume2.createPromise,
        this.$refs.polylineVolume3.createPromise
      ]).then((instances) => {
        instances[0].viewer.zoomTo(instances[0].viewer.entities)
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance

        this.shape1 = this.computeCircle(60000.0)

        this.cornerType2 = Cesium.CornerType.BEVELED
        this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
        this.outlineColor2 = Cesium.Color.BLACK

        this.shape3 = this.computeStar(7, 70000, 50000)
        this.cornerType3 = Cesium.CornerType.MITERED
      },
      computeCircle(radius) {
        let positions = []
        for (let i = 0; i < 360; i++) {
          let radians = Cesium.Math.toRadians(i)
          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
        }
        return positions
      },
      computeStar(arms, rOuter, rInner) {
        let angle = Math.PI / arms
        let length = 2 * arms
        let positions = new Array(length)
        for (let i = 0; i < length; i++) {
          let r = i % 2 === 0 ? rOuter : rInner
          positions[i] = { x: Math.cos(i * angle) * r, y: Math.sin(i * angle) * r }
        }
        return positions
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------- | ------- | ----------------------------------------------------- |
| show | Boolean | `true` | `optional` 指定 volume 是否显示。 |
| positions | Array | | `optional` 指定 volume 位置信息数组。 **结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| shape | Array | | `optional` 指定表达 volume 拉伸的形状参数。 **结构：[{ x: number, y: number },...,{ x: number, y: number }]** |
| cornerType | Number | `0` | `optional` 指定 volume 转角类型。 **ROUNDED: 0, MITERED: 1, BEVELED: 2** |
| granularity | Number | | `optional` 指定每个经度和纬度之间的角距离。 |
| fill | Boolean | `true` | `optional` 指定 volume 是否填充材质。 |
| material | Object\|String\|Array | | `optional` 指定 volume 材质。 |
| outline | Boolean | `false` | `optional` 指定 volume 是否绘制轮廓线。 |
| outlineColor | Object\|String\|Array | | `optional` 指定 volume 轮廓线颜色。 |
| outlineWidth | Number | `1.0` | `optional` 指定 volume 轮廓线宽度。 |
| shadows | Number | `0` | `optional` 指定 volume 是否投射或接受每个光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` 指定 volume 随相机距离改变是否显示参数。**结构：{ near: number, far: number }** |

---

- 参考官方文档： **[PolylineVolumeGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGraphics.html)**

## 事件

| 事件名            | 参数                           | 描述                                                                             |
| ----------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| definitionChanged |                                | 每当更改或修改属性或子属性时触发该事件。                                         |

---

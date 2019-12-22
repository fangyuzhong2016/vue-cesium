# RectangleGraphics

The `vc-graphics-rectangle` component is used to load a Rectangle that conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume. Need to be used as a subcomponent of `vc-entity`.

## Example

### Load RectangleGraphics with `vc-graphics-rectangle`

#### Preview

<doc-preview>
    <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :description="description" :rectangle.sync="rectangle1">
          <vc-graphics-rectangle ref="rectangle1" :coordinates="coordinates1" :material="material1"></vc-graphics-rectangle>
        </vc-entity>
        <vc-entity :description="description" :rectangle.sync="rectangle2">
          <vc-graphics-rectangle
            :coordinates="coordinates2"
            :material="material2"
            :rotation="rotation2"
            :extrudedHeight="300000.0"
            :height="100000.0"
            :outline="true"
            :outlineColor="outlineColor2"
            ref="rectangle2"
          ></vc-graphics-rectangle>
        </vc-entity>
        <vc-entity :description="description" :rectangle.sync="rectangle3">
          <vc-graphics-rectangle
            :coordinates="coordinates3"
            :material="material3"
            :rotation="rotation3"
            :stRotation="stRotation3"
            :classificationType="classificationType3"
            ref="rectangle3"
          ></vc-graphics-rectangle>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          rotation: 0,
          rectangle1: {},
          coordinates1: { west: -110, south: 20, east: -80, north: 25 },
          material1: {},

          rectangle2: {},
          coordinates2: { west: -110, south: 30, east: -100, north: 40 },
          material2: {},
          rotation2: {},
          outlineColor2: {},

          rectangle3: {},
          coordinates3: { west: -92.0, south: 30.0, east: -82.0, north: 40.0 },
          material3: {},
          rotation3: {},
          stRotation3: {},
          classificationType3: 0
        }
      },
      mounted() {
        Promise.all([
          this.$refs.rectangle1.createPromise,
          this.$refs.rectangle2.createPromise,
          this.$refs.rectangle3.createPromise
        ]).then((instances) => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.rotation = Cesium.Math.toRadians(30)
          this.material1 = Cesium.Color.RED.withAlpha(0.5)

          this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
          this.rotation2 = Cesium.Math.toRadians(45)
          this.outlineColor2 = Cesium.Color.BLACK

          this.material3 = 'https://zouyaoji.top/vue-cesium/favicon.png'
          this.outlineColor3 = `BLACK`
          this.rotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
          this.stRotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
          this.classificationType3 = Cesium.ClassificationType.TERRAIN
        },
        getRotationValue() {
          this.rotation += 0.005
          return this.rotation
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-entity :description="description" :rectangle.sync="rectangle1">
        <vc-graphics-rectangle ref="rectangle1" :coordinates="coordinates1" :material="material1"></vc-graphics-rectangle>
      </vc-entity>
      <vc-entity :description="description" :rectangle.sync="rectangle2">
        <vc-graphics-rectangle
          :coordinates="coordinates2"
          :material="material2"
          :rotation="rotation2"
          :extrudedHeight="300000.0"
          :height="100000.0"
          :outline="true"
          :outlineColor="outlineColor2"
          ref="rectangle2"
        ></vc-graphics-rectangle>
      </vc-entity>
      <vc-entity :description="description" :rectangle.sync="rectangle3">
        <vc-graphics-rectangle
          :coordinates="coordinates3"
          :material="material3"
          :rotation="rotation3"
          :stRotation="stRotation3"
          :classificationType="classificationType3"
          ref="rectangle3"
        ></vc-graphics-rectangle>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        rotation: 0,
        rectangle1: {},
        coordinates1: { west: -110, south: 20, east: -80, north: 25 },
        material1: {},

        rectangle2: {},
        coordinates2: { west: -110, south: 30, east: -100, north: 40 },
        material2: {},
        rotation2: {},
        outlineColor2: {},

        rectangle3: {},
        coordinates3: { west: -92.0, south: 30.0, east: -82.0, north: 40.0 },
        material3: {},
        rotation3: {},
        stRotation3: {},
        classificationType3: 0
      }
    },
    mounted() {
      Promise.all([
        this.$refs.rectangle1.createPromise,
        this.$refs.rectangle2.createPromise,
        this.$refs.rectangle3.createPromise
      ]).then((instances) => {
        instances[0].viewer.zoomTo(instances[0].viewer.entities)
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.rotation = Cesium.Math.toRadians(30)
        this.material1 = Cesium.Color.RED.withAlpha(0.5)

        this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
        this.rotation2 = Cesium.Math.toRadians(45)
        this.outlineColor2 = Cesium.Color.BLACK

        this.material3 = 'https://zouyaoji.top/vue-cesium/favicon.png'
        this.outlineColor3 = `BLACK`
        this.rotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
        this.stRotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
        this.classificationType3 = Cesium.ClassificationType.TERRAIN
      },
      getRotationValue() {
        this.rotation += 0.005
        return this.rotation
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the rectangle. |
| coordinates | Object | | `optional` The Property specifying the Rectangle. **structure: { west: number, south: number, east: number, north: number } in degrees** |
| height | Number | `0` | `optional` A numeric Property specifying the altitude of the rectangle relative to the ellipsoid surface. |
| heightReference | Number | `true` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| extrudedHeight | Number | | `optional` A numeric Property specifying the altitude of the rectangle's extruded face relative to the ellipsoid surface. |
| extrudedHeightReference | Number | | `optional` A Property specifying what the extrudedHeight is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| rotation | Number | `0.0` | `optional` A numeric property specifying the rotation of the rectangle clockwise from north. |
| stRotation | Number | `0.0` | `optional` A numeric property specifying the rotation of the rectangle texture counter-clockwise from north. |
| granularity | Number | | `optional` A numeric Property specifying the angular distance between points on the rectangle. |
| fill | Boolean | `true` | `optional` A boolean Property specifying whether the rectangle is filled with the provided material. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to fill the rectangle. |
| outline | Boolean | `false` | `optional` A boolean Property specifying whether the rectangle is outlined. |
| outlineColor | Object\|String\|Array | `'BALCK'` | `optional` A Property specifying the Color of the outline. |
| outlineWidth | Number | `1.0` | `optional` A numeric Property specifying the width of the outline. |
| shadows | Number | `0` | `optional` An enum Property specifying whether the rectangle casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this box will be displayed. **structure: { near: number, far: number }** |
| classificationType | Number | `2` | `optional` An enum Property specifying whether this rectangle will classify terrain, 3D Tiles, or both when on the ground. **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3** |
| zIndex | Number | `0` | `optional` A Property specifying the zIndex used for ordering ground geometry. Only has an effect if the rectangle is constant and neither height or extrudedHeight are specified. |

---

- Refer to the official document: **[RectangleGraphics](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---

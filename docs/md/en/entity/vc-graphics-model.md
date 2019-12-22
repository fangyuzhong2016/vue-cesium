# ModelGraphics

The `vc-graphics-model` component is used to load a 3D model based on glTF. Need to be used as a subcomponent of `vc-entity`.

## Example

### Load ModelGraphics with `vc-graphics-model`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :position="position1" :description="description" :model.sync="model1" :label.sync="label1">
          <vc-graphics-label ref="label" text="Hello Vue Cesium" font="20px sans-serif"></vc-graphics-label>
          <vc-graphics-model ref="model" :uri="uri1"></vc-graphics-model>
        </vc-entity>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          description: 'Hello Vue Cesium',
          model1: {},
          label1: {},
          position1: { lng: 114.0, lat: 40.0, height: 1.0 },
          uri1: './statics/SampleData/models/GroundVehicle/GroundVehicle.glb'
        }
      },
      mounted() {
        Promise.all([this.$refs.label.createPromise, this.$refs.model.createPromise]).then(
          (instances) => {
            instances[0].viewer.zoomTo(instances[0].viewer.entities)
          }
        )
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
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
      <vc-entity :position="position1" :description="description" :model.sync="model1" :label.sync="label1">
        <vc-graphics-label ref="label" text="Hello Vue Cesium" font="20px sans-serif"></vc-graphics-label>
        <vc-graphics-model ref="model" :uri="uri1"></vc-graphics-model>
      </vc-entity>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        model1: {},
        label1: {},
        position1: { lng: 114.0, lat: 40.0, height: 1.0 },
        uri1: './statics/SampleData/models/GroundVehicle/GroundVehicle.glb'
      }
    },
    mounted() {
      Promise.all([this.$refs.label.createPromise, this.$refs.model.createPromise]).then((instances) => {
        instances[0].viewer.zoomTo(instances[0].viewer.entities)
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the model. |
| uri | String | | `optional` A string or Resource Property specifying the URI of the glTF asset. |
| scale | Number | `1.0` | `optional` A numeric Property specifying a uniform linear scale. |
| minimumPixelSize | Number | `0.0` | `optional` A numeric Property specifying the approximate minimum pixel size of the model regardless of zoom. |
| maximumScale | Number | | `optional` The maximum scale size of a model. An upper limit for minimumPixelSize. |
| incrementallyLoadTextures | Boolean | `true` | `optional` Determine if textures may continue to stream in after the model is loaded. |
| runAnimations | Boolean | `true` | `optional` A boolean Property specifying if glTF animations specified in the model should be started. |
| clampAnimations | Boolean | `true` | `optional` A boolean Property specifying if glTF animations should hold the last pose for time durations with no keyframes. |
| shadows | Number | `1` | `optional` An enum Property specifying whether the model casts or receives shadows from each light source. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| heightReference | Number | `0` | `optional` A Property specifying what the height is relative to. **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| silhouetteColor | Object | `'RED'` | `optional` A Property specifying the Color of the silhouette. |
| silhouetteSize | Number | `0.0` | `optional` A numeric Property specifying the size of the silhouette in pixels. |
| color | Object | `'WHITE'` | `optional` A Property specifying the Color that blends with the model's rendered color. |
| colorBlendMode | Number | `0` | `optional` An enum Property specifying how the color blends with the model. **HIGHLIGHT: 0, REPLACE: 1, MIX: 2** |
| colorBlendAmount | Number | `0.5` | `optional` A numeric Property specifying the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two. |
| imageBasedLightingFactor | Object | `{x: 1.0, y: 1.0}` | `optional` A property specifying the contribution from diffuse and specular image-based lighting. |
| lightColor | Object | | `optional` A property specifying the light color to use when shading the model. The default sun light color will be used when undefined. |
| distanceDisplayCondition | Object | | `optional` A NearFarScalar Property used to set pixelOffset based on distance from the camera.A Property specifying at what distance from the camera that this model will be displayed. **structure: { near: number, far: number }** |
| nodeTransformations | Object | | `optional` An object, where keys are names of nodes, and values are TranslationRotationScale Properties describing the transformation to apply to that node. The transformation is applied after the node's existing transformation as specified in the glTF, and does not replace the node's existing transformation. **structure:{translation: {x: number, y: number, z: number}, rotation: {x: number, y: number, z: number, w: number}, scale:{x: number, y: number, z: number}}** |
| articulations | Object | | `optional` An object, where keys are composed of an articulation name, a single space, and a stage name, and the values are numeric properties. |
| clippingPlanes | Object | | `optional` A property specifying the ClippingPlaneCollection used to selectively disable rendering the model. |

---

- Refer to the official document: **[ModelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/ModelGraphics.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---

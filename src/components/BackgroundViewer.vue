<template>
  <div>
    <TresCanvas window-size clear-color="#82DBC5" ref="canvas">
      <TresPerspectiveCamera visible ref="camera" :position="currentLocation.camera" updateMatrixProjection :zoom="zoom"
        :look-at="[150, 0, 100]" />
      <OrbitControls :target="currentLocation.position" :enableZoom="false" />
      <Suspense>
        <TresMesh :position="[20, 0, 20]" :look-at="currentLocation.camera" @pointer-move="changeCursor" @pointer-leave="resetCursor" @click="$router.replace('/chat')">
          <Text3D :font="fontPath" text="Chat" :size="2" />
        </TresMesh>
      </Suspense>
      <Suspense>
        <TresMesh :position="[100, 0, 100]" :look-at="currentLocation.camera" @pointer-move="changeCursor" @pointer-leave="resetCursor" @click="$router.push('/stories/measurements')">
          <Text3D :font="fontPath" text="Measurements"  :size="2" />
        </TresMesh>
      </Suspense>
      <Suspense>
        <TresMesh :position="[50, 0, 200]" :look-at="currentLocation.camera" @pointer-move="changeCursor" @pointer-leave="resetCursor" @click="$router.push('/stories/history')">
          <Text3D :font="fontPath" text="History"  :size="2" />
        </TresMesh>
      </Suspense>
      <Suspense>
        
        <TresMesh :position="[50, 20, 50]" :look-at="currentLocation.camera" @pointer-move="changeCursor" @pointer-leave="resetCursor" @click="$router.push('/stories/birds')">
          <Text3D :font="fontPath" text="Birds" :size="2" />
        </TresMesh>
      </Suspense>
      <Suspense>
        <Environment ref="env" :background="true" :files=currenLocationFiles />
      </Suspense>
      <TresScene ref="scene">
        <TresDirectionalLight :position="[0, 8, 4]" />
        <TresMesh v-for="location in locations" :key="location.id" :position="location.position" :ref="location.id"
          :visible="location.id !== currentId" @click="onClick(location.id)" @pointer-enter="onPointerEnter"
          @pointer-leave="onPointerLeave">
          <TresSphereGeometry />
          <TresMeshToonMaterial color="#FBB03B" />
        </TresMesh>
      </TresScene>
    </TresCanvas>
  </div>
</template>

<script>
import { OrbitControls, Environment, Text3D } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'

export default {
  name: 'BackgroundViewer',

  components: {
    TresCanvas,
    OrbitControls,
    Environment,
    Text3D
    
  },
  data() {
    return {
      zoom: 0.8, // initial zoom level
      fontPath: 'https://raw.githubusercontent.com/Tresjs/assets/main/fonts/FiraCodeRegular.json',
      currentId: "loc1_road",
      locations: [
        {
          id: "loc1_road",
          position: [40, 0, 0],
          camera: [39, 0, -1],
          rotation: 0
        }, {
          id: "loc2_pavilion",
          position: [0, 0, 90],
          camera: [-1, 0, 90],
          rotation: 1.5
        }, {
          id: "loc3_tetra",
          position: [30, 0, 180],
          camera: [29, 0, 181],
          rotation: 2
        }, {
          id: "loc4_farside",
          position: [110, 0, 250],
          camera: [110, 0, 251],
          rotation: 2.5
        }, {
          id: "loc5_bench",
          position: [160, 0, 190],
          camera: [161, 0, 190],
          rotation: 4
        }, {
          id: "loc6_sluice",
          position: [160, 0, 80],
          camera: [161, 0, 80],
          rotation: 4.95
        }, {
          id: "loc7_other",
          position: [120, 0, 40],
          camera: [121, 0, 39],
          rotation: 0
        }
      ]
    }
  },

  computed: {
    currentLocation() {
      return this.locations.find(loc => loc.id === this.currentId)
    },
    currenLocationFiles() {
      return [
        `../360photos/${this.currentLocation.id}/px.jpg`,
        `../360photos/${this.currentLocation.id}/nx.jpg`,
        `../360photos/${this.currentLocation.id}/py.jpg`,
        `../360photos/${this.currentLocation.id}/ny.jpg`,
        `../360photos/${this.currentLocation.id}/pz.jpg`,
        `../360photos/${this.currentLocation.id}/nz.jpg`
      ]
    }
  },
  mounted () {
    this.rotateEnvironment(this.currentLocation.rotation)
    window.addEventListener('wheel', this.handleScroll)
    // Debugging statement removed: console.log(this.zoom)
  },
  beforeUnmount() {
    window.removeEventListener('wheel', this.handleScroll)
  },
  methods: {
    onPointerEnter(ev) {
      if (ev) {
        ev.object.material.color.set('#1CEDDC');
      }
    },
    onPointerLeave(ev) {
      if (ev) {
        ev.object.material.color.set('#efefef')
      }
    },
    onClick(locationId) {
      this.currentId = locationId
      this.rotateEnvironment(this.currentLocation.rotation)
    },
    rotateEnvironment(rad) {
      this.$refs.scene.parent.backgroundRotation.y = rad
    },
    changeCursor(ev) {
      ev.target.style.cursor = "pointer";
    },
    resetCursor(ev) {
      ev.target.style.cursor = "default";},
    handleScroll(event) {
      if (event.deltaY < 0) {
        this.zoom += 0.1;
      }
      else {
        if (this.zoom < 0.11) {
          this.zoom = 0.1
        }
        else {
          this.zoom -= 0.1;
        }
      }
      this.$refs.camera.updateProjectionMatrix()

      console.log("zoom level: ", this.zoom)

    }

  }
}
</script>

<style>

.clickable {
  cursor: pointer;
}


</style>

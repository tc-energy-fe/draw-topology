<template>
  <div class="home">
    <div id="topology-canvas"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Topology } from '@topology/core'
import { register as registerFlow } from '@topology/flow-diagram'
import { register as registerActivity } from '@topology/activity-diagram'
import { register as registerClass } from '@topology/class-diagram'
import { register as registerSequence } from '@topology/sequence-diagram'
import { register as registerChart } from '@topology/chart-diagram'
const topologyData = require('@/assets/data.json')

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      canvas: {},
      canvasOptions: {
        on: (event, data) => {
          console.info(event, data)
        }
      }
    }
  },
  computed: {
  },
  methods: {
    canvasRegister () {
      registerFlow()
      registerActivity()
      registerClass()
      registerSequence()
      registerChart()
    }
  },
  watch: {
    topologyData () {
      this.canvas.render()
    }
  },
  created () {
    this.canvasRegister()
  },
  mounted () {
    this.canvas = new Topology('topology-canvas', this.canvasOptions)
    topologyData.locked = 1
    this.canvas.open(topologyData)
    console.log(this.canvas)
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  #topology-canvas {
    width: 100%;
    height: 100%;
  }
}
</style>

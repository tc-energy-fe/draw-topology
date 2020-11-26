<template>
  <div class="workspace">
    <el-container class="container">
      <el-header class="container-header"></el-header>
      <el-container>
        <el-aside class="aside-left"></el-aside>
        <el-main class="container-main">
          <div id="topology-canvas"></div>
        </el-main>
        <el-aside class="aside-right"></el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { Topology } from '@topology/core'
import { canvasRegister } from '@/utils/canvas'
// const topologyData = require('@/assets/data.json')

let canvas
const canvasOptions = {
  on: (event, data) => {
    console.info(event, data)
  }
}

export default {
  name: 'Workspace',
  components: {},
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  watch: {
  },
  created () {
    canvasRegister()
  },
  mounted () {
    canvas = new Topology('topology-canvas', canvasOptions)
    canvas.addNode({
      name: 'circuitGround',
      rect: {
        x: 200,
        y: 300,
        width: 200,
        height: 200
      }
    })
    console.log(canvas)
  }
}
</script>

<style lang="scss">
.workspace {
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    &-header {
      background-color: #ece3e3;
      border-bottom: 1px solid #bebebe;
    }
    &-main {
      padding: 0;
    }
    .aside-left {
      background-color: #ece3e3;
      border-right: 1px solid #bebebe;
    }

    .aside-right {
      background-color: #ece3e3;
      border-left: 1px solid #bebebe;
    }
    #topology-canvas {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

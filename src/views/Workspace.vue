<template>
  <div class="workspace">
    <el-container class="container">
      <el-header class="container-header">
        <el-menu mode="horizontal">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span>文件</span>
            </template>
            <el-menu-item @click="handleNew">新建文件</el-menu-item>
            <el-menu-item @click="handleImport">导入JSON</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item>撤销</el-menu-item>
          </el-submenu>
        </el-menu>
        <div class="function-block">
          <el-button :type="isLocked ? 'warning' : 'primary'" @click="lockClick"
            :icon="isLocked ? 'el-icon-unlock' : 'el-icon-lock'">
            {{isLocked ? '解锁' : '锁定'}}
          </el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside class="aside-left" v-if="false">
          <div class="diagram-container">
            <div class="diagram-group" v-for="(group, gIndex) of iconList" :key="gIndex">
              <h4 class="diagram-group__title">{{group.groupName}}</h4>
              <div class="diagram-group__division"></div>
              <div class="diagram-group__list">
                <i v-for="(diagram, dIndex) of group.children"
                  :key="dIndex"
                  :title="diagram.name"
                  :class="`t-icon ${diagram.iconClass}`"
                  :draggable="diagram.data"
                  @dragstart="onDrag($event, diagram)"
                ></i>
              </div>
            </div>
          </div>
        </el-aside>
        <el-main class="container-main">
          <div id="topology-canvas"></div>
        </el-main>
        <el-aside class="aside-right" v-if="false"></el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { Topology } from '@topology/core'
import { canvasRegister, iconList } from '@/utils/canvas'
// const topologyData = require('@/assets/data.json')

let canvas
const canvasOptions = {
  on: (event, data) => {
    // console.info(event, data)
  },
  rotateCursor: 'grab'
}

export default {
  name: 'Workspace',
  components: {},
  data () {
    return {
      isLocked: true,
      iconList
    }
  },
  computed: {
  },
  methods: {
    handleNew () {
      canvas.open()
    },
    handleImport () {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = '.json'
      input.onchange = event => {
        const elem = event.srcElement || event.target
        if (elem.files && elem.files[0]) {
          // const name = elem.files[0].name.replace('.json', '')
          const reader = new FileReader()
          reader.onload = e => {
            const text = e.target.result + ''
            try {
              const data = JSON.parse(text)
              canvas.open(data)
            } catch (e) {
              return false
            }
          }
          reader.readAsText(elem.files[0])
        }
      }
      input.click()
    },
    lockClick () {
      if (this.isLocked) {
        canvas.lock(0)
      } else {
        canvas.lock(2)
      }
      this.isLocked = !this.isLocked
    },
    onDrag (event, node) {
      event.dataTransfer.setData('Topology', JSON.stringify(node.data))
    }
  },
  watch: {
  },
  created () {
    canvasRegister()
  },
  mounted () {
    canvas = new Topology('topology-canvas', canvasOptions)
    canvas.data.lineName = 'line'
    canvas.lock(this.isLocked ? 2 : 0)
    canvas.render()
  }
}
</script>

<style lang="scss" src="./Workspace.scss"></style>

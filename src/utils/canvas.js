
import { register as registerFlow } from '@topology/flow-diagram'
// import { register as registerActivity } from '@topology/activity-diagram'
// import { register as registerClass } from '@topology/class-diagram'
// import { register as registerSequence } from '@topology/sequence-diagram'
// import { register as registerChart } from '@topology/chart-diagram'
import { register as registerCircuit } from '@/diagram/circuit-diagram'

export function canvasRegister () {
  registerFlow()
  // registerActivity()
  // registerClass()
  // registerSequence()
  // registerChart()
  registerCircuit()
}

export const iconList = [
  {
    groupName: '基础图形',
    children: [
      {
        name: '矩形',
        iconClass: 't-rectangle',
        data: {
          name: 'rectangle',
          text: '矩形',
          rect: {
            width: 200,
            height: 50
          },
          iconFamily: 'topology',
          icon: '\ue64d',
          iconColor: '#2f54eb'
        }
      },
      {
        name: '正方形',
        iconClass: 't-rect',
        data: {
          name: 'square',
          text: '矩形',
          rect: {
            width: 100,
            height: 100
          }
        }
      },
      {
        name: '圆',
        iconClass: 't-circle',
        data: {
          name: 'circle',
          text: '圆',
          rect: {
            width: 100,
            height: 100
          }
        }
      },
      {
        name: '三角形',
        iconClass: 't-triangle',
        data: {
          text: '三角形',
          rect: {
            width: 100,
            height: 100
          },
          name: 'triangle'
        }
      },
      {
        name: '菱形',
        iconClass: 't-diamond',
        data: {
          text: '菱形',
          rect: {
            width: 150,
            height: 100
          },
          name: 'diamond'
        }
      },
      {
        name: '五边形',
        iconClass: 't-pentagon',
        data: {
          text: '五边形',
          rect: {
            width: 100,
            height: 100
          },
          name: 'pentagon'
        }
      },
      {
        name: '六边形',
        iconClass: 't-hexagon',
        data: {
          text: '六边形',
          rect: {
            width: 100,
            height: 100
          },
          paddingTop: 10,
          paddingBottom: 10,
          name: 'hexagon'
        }
      },
      {
        name: '五角星',
        iconClass: 't-pentagram',
        data: {
          text: '五角星',
          rect: {
            width: 100,
            height: 100
          },
          name: 'pentagram'
        }
      },
      {
        name: '左箭头',
        iconClass: 't-arrow-left',
        data: {
          text: '左箭头',
          rect: {
            width: 150,
            height: 80
          },
          name: 'leftArrow'
        }
      },
      {
        name: '右箭头',
        iconClass: 't-arrow-right',
        data: {
          text: '右箭头',
          rect: {
            width: 150,
            height: 80
          },
          name: 'rightArrow'
        }
      },
      {
        name: '双向箭头',
        iconClass: 't-twoway-arrow',
        data: {
          text: '双向箭头',
          rect: {
            width: 200,
            height: 80
          },
          name: 'twowayArrow'
        }
      },
      {
        name: '直线',
        iconClass: 't-line',
        data: {
          text: '直线',
          rect: {
            width: 300,
            height: 50
          },
          name: 'line'
        }
      },
      {
        name: '云',
        iconClass: 't-cloud',
        data: {
          text: '云',
          rect: {
            width: 100,
            height: 100
          },
          name: 'cloud'
        }
      },
      {
        name: '消息框',
        iconClass: 't-msg',
        data: {
          text: '消息框',
          rect: {
            width: 100,
            height: 100
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          name: 'message'
        }
      },
      {
        name: '文档',
        iconClass: 't-file',
        data: {
          text: '文档',
          rect: {
            width: 80,
            height: 100
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          name: 'file'
        }
      },
      {
        name: '文本框',
        iconClass: 't-text',
        data: {
          text: '文本',
          rect: {
            width: 160,
            height: 30
          },
          name: 'text'
        }
      },
      {
        name: '图片',
        iconClass: 't-image',
        data: {
          text: '',
          rect: {
            width: 100,
            height: 100
          },
          name: 'image'
        }
      },
      {
        name: '立方体',
        iconClass: 't-cube',
        data: {
          rect: {
            width: 70,
            height: 70
          },
          is3D: true,
          z: 20,
          zRotate: 15,
          fillStyle: '#ddd',
          name: 'cube',
          icon: '\ue63c',
          iconFamily: 'topology',
          iconColor: '#777',
          iconSize: 30
        }
      },
      {
        name: '人员',
        iconClass: 't-people',
        data: {
          rect: {
            width: 70,
            height: 100
          },
          name: 'people'
        }
      },
      {
        name: '视频/网页',
        iconClass: 't-pc',
        data: {
          text: '视频/网页',
          rect: {
            width: 200,
            height: 200
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          // strokeStyle: 'transparent',
          name: 'div'
        }
      }
    ]
  },
  {
    groupName: '电路工程',
    children: []
  }
]

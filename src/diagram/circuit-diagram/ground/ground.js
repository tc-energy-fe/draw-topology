// import { Node } from '@topology/core'

export function circuitGround (ctx, node) {
  const rect = node.rect
  // ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(rect.x + rect.width / 2, rect.center.y + rect.width * 0.1)
  ctx.lineTo(rect.x + rect.width / 2, rect.center.y - rect.width * 0.5)
  ctx.moveTo(rect.x, rect.center.y + rect.width * 0.1)
  ctx.lineTo(rect.ex, rect.center.y + rect.width * 0.1)
  ctx.moveTo(rect.x + rect.width * 0.15, rect.center.y + rect.width * 0.3)
  ctx.lineTo(rect.ex - rect.width * 0.15, rect.center.y + rect.width * 0.3)
  ctx.moveTo(rect.x + rect.width * 0.3, rect.center.y + rect.width * 0.5)
  ctx.lineTo(rect.ex - rect.width * 0.3, rect.center.y + rect.width * 0.5)
  ctx.closePath()
  if (node.fillStyle || node.bkType) {
    ctx.fill()
  }
  ctx.stroke()
  // console.log(node)
}

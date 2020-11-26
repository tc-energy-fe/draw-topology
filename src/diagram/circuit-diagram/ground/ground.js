// import { Node } from '@topology/core'

export function circuitGround (ctx, node) {
  const rect = node.rect
  ctx.lineWith = 100
  ctx.beginPath()
  ctx.moveTo(rect.x + rect.width / 2, rect.y)
  ctx.lineTo(rect.x + rect.width / 2, rect.y + rect.height * 0.8)
  ctx.closePath()
  if (node.fillStyle || node.bkType) {
    ctx.fill()
  }
  ctx.stroke()
}

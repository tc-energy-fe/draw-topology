// import { Node } from '@topology/core'

export function circuitGround (ctx, node) {
  const rect = node.rect
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(rect.x + rect.width / 2, rect.y)
  ctx.lineTo(rect.x + rect.width / 2, rect.y + 70)
  ctx.moveTo(rect.x + rect.width / 2 - 40, rect.y + 70)
  ctx.lineTo(rect.x + rect.width / 2 + 40, rect.y + 70)
  ctx.moveTo(rect.x + rect.width / 2 - 25, rect.y + 85)
  ctx.lineTo(rect.x + rect.width / 2 + 25, rect.y + 85)
  ctx.moveTo(rect.x + rect.width / 2 - 10, rect.y + 100)
  ctx.lineTo(rect.x + rect.width / 2 + 10, rect.y + 100)
  ctx.closePath()
  if (node.fillStyle || node.bkType) {
    ctx.fill()
  }
  ctx.stroke()
}

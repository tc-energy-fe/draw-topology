import { Point, Direction } from '@topology/core'

export function circuitGroundAnchors (node) {
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up))
  node.anchors.push(new Point(node.rect.x, node.rect.y + node.rect.height / 2, Direction.Left))
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.ey, Direction.Bottom))
  node.anchors.push(new Point(node.rect.ex, node.rect.y + node.rect.height / 2, Direction.Right))
}

import { registerNode } from '@topology/core'
import { circuitGround, circuitGroundAnchors, circuitGroundTextRect, circuitGroundIconRect } from './ground'

export function register () {
  registerNode('circuitGround', circuitGround, circuitGroundAnchors, circuitGroundIconRect, circuitGroundTextRect)
}

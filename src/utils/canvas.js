
import { register as registerFlow } from '@topology/flow-diagram'
import { register as registerActivity } from '@topology/activity-diagram'
import { register as registerClass } from '@topology/class-diagram'
import { register as registerSequence } from '@topology/sequence-diagram'
import { register as registerChart } from '@topology/chart-diagram'
import { register as registerCircuit } from '@/diagram/circuit-diagram'

export function canvasRegister () {
  registerFlow()
  registerActivity()
  registerClass()
  registerSequence()
  registerChart()
  registerCircuit()
}

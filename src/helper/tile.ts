import { Position, Solution } from '../types'
import { getByPosition, getSurroundingPositions } from './position'

export function getSurroundingEntries(position: Position, solution: Solution): number[] {
    return getSurroundingPositions(position, solution.length, solution[0].length)
        .map(p => getByPosition(p, solution).entry)
        .filter(e => e !== undefined)
        .map(e => e as number)
}

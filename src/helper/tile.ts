import { Position, Solution } from "../types"
import { getSurroundingPositions } from "./board"

export function getSurroundingEntries(position: Position, solution: Solution): number[] {
    return getSurroundingPositions(position, solution.length, solution[0].length)
        .map(({ row, column }) => solution[row][column].entry)
        .filter(e => e !== undefined)
        .map(e => e as number)
}

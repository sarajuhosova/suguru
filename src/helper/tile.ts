import { Position, Solution } from "../types";

export function getSurroundingEntries(position: Position, solution: Solution): Set<number> {
    const minRow = Math.max(position.row - 1, 0)               // incl
    const maxRow = Math.min(position.row + 1, solution.length) // excl
    const minCol = Math.max(position.column - 1, 0)                  // incl
    const maxCol = Math.min(position.column + 1, solution[0].length) // excl
    
    const surrounding: Set<number> = new Set<number>

    for (var i = minRow; i < maxRow; i++) {
        for (var j = minCol; j < maxCol; j++) {
            if (!(i === position.row && j === position.column)) {
                const entry = solution[i][j].entry
                if (entry !== undefined) surrounding.add(entry)
            }
        }
    }

    return surrounding
}

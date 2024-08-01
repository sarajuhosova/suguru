import { getSurroundingPositions, unify } from '../helper/board';
import { Problem, Solution } from '../types';
import fromProblem from './preprocessor';
import { PartialSolution, PartialTile } from './types';

function solveImpl(solution: PartialSolution): boolean {
    if (solution.remaining.length < 1) return true

    for (const next of solution.remaining) {
        const tile: PartialTile = solution.tiles[next.row][next.column]

        const options = tile.options
        if (!options || options.length < 1) {
            continue
        }
        
        const pick: number = options!.pop()!
    
        // update the entry
        tile.entry = pick
        tile.options = undefined
        // get all the related
        const affected = unify(
            getSurroundingPositions(next, solution.tiles.length, solution.tiles[0].length),
            tile.group
        ).filter(({ row, column }) => solution.tiles[row][column].options?.includes(pick))


        for (const { row, column } of affected) {
            solution.tiles[row][column].options!.filter((value => value !== pick))
        }
        
        if (solveImpl(solution)) {
            return true
        }

        // undo everything
        tile.entry = undefined
        tile.options = options
        for (const { row, column } of affected) {
            solution.tiles[row][column].options!.push(pick)
        }
    }

    return false
}

export default function solve(problem: Problem): Solution | undefined {
    const partialSolution = fromProblem(problem)

    for (const row of partialSolution.tiles) {
        for (const tile of row) {
            console.log(tile.options)
        }
        console.log()
    }

    return (solveImpl(partialSolution)) ? partialSolution.tiles : undefined
}


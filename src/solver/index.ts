import { findByPosition, getByPosition, getSurroundingPositions, sortByValue, unify, updateEntry } from '../helper/position';
import { compareListsBySize } from '../helper/util';
import { Problem, Solution } from '../types';
import fromProblem from './preprocessor';
import { PartialSolution } from './types';

function solveImpl(solution: PartialSolution): boolean {
    if (solution.remaining.length < 1) return true
    
    sortByValue(solution.remaining, compareListsBySize)

    for (var i = 0; i < solution.remaining.length; i++) {
        const { key: position, value: options } = solution.remaining.shift()!

        if (options.length < 0) continue

        const tile = getByPosition(position, solution.tiles)
        for (const pick of options) {
            // find the tiles that should be updated
            const affected = unify(
                getSurroundingPositions(position, solution.tiles.length, solution.tiles[0].length),
                tile.group
            ).filter(p => findByPosition(p, solution.remaining)?.includes(pick) )

            // update everything
            tile.entry = pick
            for (const affectedPosition of affected) {
                const newOptions = findByPosition(affectedPosition, solution.remaining)!
                    .filter(opt => opt !== pick)
                updateEntry(affectedPosition, newOptions, solution.remaining)
            }

            // attempt more solutions
            if (solveImpl(solution)) {
                return true
            }

            // undo everything
            tile.entry = undefined
            for (const affectedPosition of affected) {
                const oldOptions = findByPosition(affectedPosition, solution.remaining)!
                oldOptions.push(pick)
                updateEntry(affectedPosition, oldOptions, solution.remaining)
            }
        }

        // add it to the back of the list such that
        // it doesn't get shift in the next iteration
        solution.remaining.push({ key: position, value: options })
    }

    return false
}

export default function solve(problem: Problem): Solution | undefined {
    const partialSolution = fromProblem(problem)

    return (solveImpl(partialSolution)) ? partialSolution.tiles : undefined
}


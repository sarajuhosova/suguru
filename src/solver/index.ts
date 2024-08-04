import { findByPosition, getByPosition, getSurroundingPositions, sortByValue, unify, updateEntry } from '../helper/position';
import { compareListsBySize } from '../helper/util';
import { Problem, Solution } from '../types';
import fromProblem from './preprocessor';
import { PartialSolution } from './types';

function solveImpl(solution: PartialSolution): boolean {
    if (solution.remaining.length < 1) return true
    
    sortByValue(solution.remaining, compareListsBySize)

    for (var i = 0; i < solution.remaining.length; i++) {
        const { key: position, value: options } = solution.remaining.pop()!

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
            for (const p of affected) {
                const current = findByPosition(p, solution.remaining)!
                    .filter(opt => opt !== pick)
                updateEntry(position, current, solution.remaining)
            }

            // attempt more solutions
            if (solveImpl(solution)) {
                return true
            }

            // undo everything
            tile.entry = undefined
            for (const p of affected) {
                const current = findByPosition(p, solution.remaining)!
                current.push(pick)
                updateEntry(position, current, solution.remaining)
            }
        }


        // add it to the front of the list such that
        // it doesn't get popped in the next iteration
        solution.remaining.unshift({ key: position, value: options })
    }


    return true
}

export default function solve(problem: Problem): Solution | undefined {
    const partialSolution = fromProblem(problem)

    return (solveImpl(partialSolution)) ? partialSolution.tiles : undefined
}


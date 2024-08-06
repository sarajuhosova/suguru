import { getByPosition, getEntry, getSurroundingPositions, sortByValue, unify, updateEntry } from '../helper/position';
import { compareListsBySize } from '../helper/util';
import { Problem, Solution } from '../types';
import fromProblem from './converter/converter';
import { PartialSolution } from './types';

function solveImpl(solution: PartialSolution, count: boolean = false): number {
    if (solution.remaining.length < 1) return 1
    
    sortByValue(solution.remaining, compareListsBySize)

    const { key: position, value: options } = solution.remaining.shift()!

    var solutions = 0
    
    if (options.length > 0) {
        const tile = getByPosition(position, solution.tiles)

        const surrounding = unify(
            getSurroundingPositions(position, solution.tiles.length, solution.tiles[0].length),
            tile.group
        ).map(p => getEntry(p, solution.remaining))
            .filter(entry => entry !== undefined)
            .map(entry => entry!)

        for (const pick of options) {
            // find the tiles that should be updated
            const affected = surrounding.filter(entry => entry.value.includes(pick))

            // if this is the only option for some affected value
            // this is not a potential solution path
            if (affected.some(({ value }) => value.length < 2)) continue

            // update everything
            tile.entry = pick
            for (const entry of affected) {
                const newOptions = entry.value.filter(opt => opt !== pick)
                updateEntry(entry.key, newOptions, solution.remaining)
            }

            // attempt to solve further
            const subSolutions = solveImpl(solution, count)
            if (subSolutions > 0) {
                if (!count) {
                    return 1
                }
                solutions += subSolutions
            }

            // undo affected
            for (const entry of affected) {
                updateEntry(entry.key, entry.value, solution.remaining)
            }
        }

        // set entry back to undefined
        tile.entry = undefined
    }

    solution.remaining.unshift({ key: position, value: options })

    return solutions
}

export function countSolutions(problem: Problem): number {
    return solveImpl(fromProblem(problem), true)
}

export default function solve(problem: Problem): Solution | undefined {
    const partialSolution = fromProblem(problem)

    const solution = solveImpl(partialSolution)

    return (solution > 0) ? partialSolution.tiles : undefined
}

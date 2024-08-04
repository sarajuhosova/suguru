import { getByPosition, getEntry, getSurroundingPositions, sortByValue, unify, updateEntry } from '../helper/position';
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
            if (solveImpl(solution)) {
                return true
            }

            // undo affected
            for (const entry of affected) {
                updateEntry(entry.key, entry.value, solution.remaining)
            }
        }

        // set entry back to undefined
        tile.entry = undefined

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


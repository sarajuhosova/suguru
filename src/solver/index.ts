import { calculateDimensions, calculateFrame } from '../helper/board';
import { Tile, Problem, Solution } from '../types';

function fromProblem(
    problem: Problem
): Solution {
    const [length, width] = calculateDimensions(problem.groups)

    const result: Solution = []
    for (var row = 0; row < length; row++) {
        const tiles: Tile[] = []
        for (var column = 0; column < width; column++) {
            const entry = problem.definition[row]?.[column]
            tiles.push({
                frame: calculateFrame({ row, column }, problem.groups),
                entry,
                defined: entry !== undefined
            })
        }
        result.push(tiles)
    }
    return result
}

export function solve(problem: Problem): Solution {
    const solution = fromProblem(problem)

    return solution
}

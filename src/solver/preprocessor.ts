import { calculateDimensions, calculateFrame, findGroup } from "../helper/board"
import { getSurroundingEntries } from "../helper/tile"
import { Position, Solution, Group, Problem, Tile } from "../types"
import { PartialSolution, PartialTile } from "./types"


function calculateOptions(position: Position, solution: Solution, group: Group): number[] | undefined {
    if (solution[position.row][position.column].entry !== undefined) return undefined

    const surrounding = getSurroundingEntries(position, solution)
    const inGroup = group.map(t => solution[t.row][t.column].entry)
        .filter(e => e !== undefined)

    const options: number[] = []
    for (var i = 1; i <= group.length + 1; i++) {
        if (!surrounding.includes(i) 
            && !inGroup.includes(i)
            // if it's not already included 
            && !options.includes(i)
        ) options.push(i)
    }

    // TODO: shuffle these
    return options
}

function convert(solution: Solution, groups: Group[]): PartialTile[][] {
    const tiles: PartialTile[][] = []

    for (var row = 0; row < solution.length; row++) {
        const next: PartialTile[] = []

        for (var column = 0; column < solution[0].length; column++) {
            const position: Position = { row, column }
            const group: Group = findGroup(position, groups)!
                .filter(({ row: i, column: j }) => !(i === row && j === column))

            next.push({
                ...solution[row][column],
                options: calculateOptions(position, solution, group),
                group
            })
        }

        tiles.push(next)
    }

    return tiles
}

export default function fromProblem(problem: Problem): PartialSolution {
    const [length, width] = calculateDimensions(problem.groups)

    const solution: Solution = []
    const remaining: Position[] = []

    for (var row = 0; row < length; row++) {
        const tiles: Tile[] = []

        for (var column = 0; column < width; column++) {
            const entry = problem.definition[row]?.[column]
            const position = { row, column }

            // add the tile
            tiles.push({
                frame: calculateFrame(position, problem.groups),
                entry,
                defined: entry !== undefined
            })

            // add the leftover
            if (!entry) remaining.push(position)
        }

        solution.push(tiles)
    }

    return { tiles: convert(solution, problem.groups), remaining }
}

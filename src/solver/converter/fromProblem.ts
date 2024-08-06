import { calculateDimensions, calculateFrame, findGroup } from "../../helper/board"
import { findByPosition, getByPosition } from "../../helper/position"
import { getSurroundingEntries } from "../../helper/tile"
import { shuffle } from "../../helper/util"
import { Position, Group, Problem, PositionMap } from "../../types"
import { PartialSolution, PartialTile } from "../types"

type PartialTiles = PartialTile[][]

function calculateTiles(problem: Problem): PartialTiles {
    const [length, width] = calculateDimensions(problem.groups)

    const solution: PartialTiles = []
    for (var row = 0; row < length; row++) {
        const tiles: PartialTile[] = []

        for (var column = 0; column < width; column++) {
            const position = { row, column }
            const entry = findByPosition(position, problem.definition)

            // get the other positions in this tile's group
            const group = findGroup(position, problem.groups)!
                .filter(({ row: i, column: j }) => !(i === row && j === column))

            // add the tile
            tiles.push({
                frame: calculateFrame(position, problem.groups),
                entry,
                defined: entry !== undefined,
                group
            })
        }

        solution.push(tiles)
    }

    return solution
}

function calculateOptions(position: Position, tiles: PartialTiles, group: Group): number[] | undefined {
    if (getByPosition(position, tiles).entry !== undefined) return undefined

    const surrounding = getSurroundingEntries(position, tiles)
    const inGroup = group.map(p => getByPosition(p, tiles).entry)
        .filter(e => e !== undefined)

    const options: number[] = []
    for (var i = 1; i <= group.length + 1; i++) {
        if (!surrounding.includes(i) 
            && !inGroup.includes(i)
            // if it's not already included 
            && !options.includes(i)
        ) options.push(i)
    }

    shuffle(options)
    return options
}

function calculateRemaining(tiles: PartialTiles): PositionMap<number[]> {
    const remaining: PositionMap<number[]> = []
    for (var row = 0; row < tiles.length; row++) {
        for (var column = 0; column < tiles[0].length; column++) {
            const position = { row, column }
            const tile = getByPosition(position, tiles)
            if (!tile.entry) {
                const value = calculateOptions(position, tiles, tile.group) ?? []
                remaining.push({ key: position, value } )
            }
        }
    }

    return remaining
}

export default function fromProblem(problem: Problem): PartialSolution {
    const tiles = calculateTiles(problem)
    const remaining: PositionMap<number[]> = calculateRemaining(tiles)

    return { tiles, remaining }
}

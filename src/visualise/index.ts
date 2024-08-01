import { Board, Tile, Position } from "../types"
import { generateGrid, max, nextChar } from "../helper"

export function visualiseEmpty(board: Board<Position>) {
    const width = max(board.map(g => max(g.map(p => p[0]))))
    const length = max(board.map(g => max(g.map(p => p[1]))))

    const grid = generateGrid(length, width)

    var letter = "a"
    for (const group of board) {
        for (const position of group) {
            grid[position[1]][position[0]] = letter
        }
        letter = nextChar(letter)
    }

    for (const row of grid) {
        let line = ""
        for (const tile of row) {
            line += tile + " "
        }
        console.log(line)
    }
}

function visualise(board: Board<Tile>) {
    const width = max(board.map(g => max(g.map(t => t.position[0]))))
    const length = max(board.map(g => max(g.map(t => t.position[1]))))

    console.log(width, length)
}

import { Board, Problem, Solution } from "../types"
import { generateSolution, max } from "../helper"

function visualiseSolution(solution: Solution) {
    for (const row of solution) {
        let line = ""
        for (const tile of row) {
            line += tile + " "
        }
        console.log(line)
    }
}

export function visualiseEmpty(board: Board) {
    const length = max(board.map(g => max(g.map(p => p[0])))) + 1
    const width = max(board.map(g => max(g.map(p => p[1])))) + 1

    const grid = generateSolution(length, width)

    var num = 1
    for (const group of board) {
        for (const [row, column] of group) {
            grid[row][column] = num
        }
        num++
    }

    visualiseSolution(grid)
}

function visualise(problem: Problem) {
    const width = max(problem.board.map(g => max(g.map(t => t[0]))))
    const length = max(problem.board.map(g => max(g.map(t => t[1]))))

    console.log(width, length)
}

import { getByPosition } from "../../helper/position";
import { Game, Position, Solution } from "../../types";

let solution: Solution | undefined = undefined
let unfilled = 0

export function setSolution(game: Game) {
    solution = game.solution
    unfilled = game.start.map(row => row.filter(t => !t.entry))
        .flatMap(row => row).length
}

export function checkInput(input: number, position: Position): boolean {
    if (!solution) return false

    return getByPosition(position, solution).entry === input
}

export function fillOne() {
    unfilled--
}

export function solved(): boolean {
    return unfilled < 1
}

import { getByPosition } from "../../helper/position";
import { Position, Solution } from "../../types";

let solution: Solution | undefined = undefined

export function setSolution(sol: Solution) {
    solution = sol
}

export function checkInput(input: number, position: Position): boolean {
    if (!solution) return false

    return getByPosition(position, solution).entry === input
}

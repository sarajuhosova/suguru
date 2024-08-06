import solve from "../solver";
import { getDefinition } from "../solver/converter/toProblem";
import { Game } from "../types";
import generateBoard from "./board";
import generateDefinition from "./definition";

export default function generate(length: number, width: number): Game {
    var groups = undefined
    var definition = undefined
    var solution = undefined
    while (!definition) {
        groups = generateBoard(length, width)
        solution = solve({ groups, definition: [] })
        if (!solution) continue
        definition = generateDefinition(getDefinition(solution), groups)
    }

    return { problem: { groups: groups!, definition }, solution: solution! }
}

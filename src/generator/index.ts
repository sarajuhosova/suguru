import { Problem } from "../types";
import generateBoard from "./board";
import generateDefinition from "./definition";

export default function generate(length: number, width: number): Problem {
    var definition = undefined
    var groups = undefined
    while (!definition) {
        groups = generateBoard(length, width)
        definition = generateDefinition(groups)
    }

    return { groups: groups!, definition }
}

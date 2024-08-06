import { Definition, Group, Problem } from "../types";

function generateBoard(length: number, width: number): Group[] {
    return []
}

function generateDefinition(groups: Group[]): Definition {
    return []
}

export default function generate(length: number, width: number): Problem {
    const groups = generateBoard(length, width)
    return { groups, definition: generateDefinition(groups) }
}

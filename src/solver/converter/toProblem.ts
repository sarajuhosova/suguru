import { Definition, Group, Problem, Solution } from "../../types";
import { PartialSolution } from "../types";

export function getGroups(solution: PartialSolution): Group[] {
    const checked: boolean[][] = new Array(solution.tiles.length)
        .fill(new Array(solution.tiles[0].length).fill(false))

    const groups: Group[] = []
    for (var row = 0; row < solution.tiles.length; row++) {
        for (var column = 0; column < solution.tiles[0].length; column++) {
            if (checked[row][column]) continue

            const group = solution.tiles[row][column].group
            group.push({ row, column })

            for (const { row, column } of group) {
                checked[row][column] = true
            }

            groups.push(group)
        }
    }

    return groups
}

export function getDefinition(solution: Solution): Definition {
    const definition: Definition = []

    for (var row = 0; row < solution.length; row++) {
        for (var column = 0; column < solution[0].length; column++) {
            const entry = solution[row][column].entry
            if (entry !== undefined) {
                definition.push({
                    key: { row, column },
                    value: entry
                })
            }   
        }
    }

    return definition
}

export default function toProblem(partialSolution: PartialSolution): Problem {
    return {
        groups: getGroups(partialSolution),
        definition: getDefinition(partialSolution.tiles)
    }
}
import { deepCopyPositionMap } from "../helper/position"
import { isUnique } from "../helper/problem"
import { Group, Definition } from "../types"

function reduceToMinimal(groups: Group[], definition: Definition, target: number) {
    for (var i = 0; i < definition.length; i++) {
        const removed = definition.pop()!

        if (isUnique({groups, definition})) {
            reduceToMinimal(groups, definition, target)

            if (definition.length < target) return
        }

        definition.unshift(removed)
    }
}

export default function generateDefinition(
    solved: Definition, groups: Group[], target: number = solved.length / 2
): Definition | undefined {
    const definition = deepCopyPositionMap(solved, n => n)
    reduceToMinimal(groups, definition, target)
    return definition
}

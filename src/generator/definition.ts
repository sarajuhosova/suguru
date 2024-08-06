import { deepCopyPositionMap, subsetPositionMap } from "../helper/position"
import { isUnique } from "../helper/problem"
import { getSmallest } from "../helper/util"
import solve from "../solver"
import { getDefinition } from "../solver/converter/toProblem"
import { Group, Definition } from "../types"

function findAllMinimalDefinitions(groups: Group[], definition: Definition): Definition[] {
    const valid: Definition[] = []

    var minimal = true
    
    for (var i = 0; i < definition.length; i++) {
        const removed = definition.pop()!

        if (valid.some(v => subsetPositionMap(v, definition))) {
            minimal = false
        }
        if (isUnique({ groups, definition })) {
            minimal = false
            valid.push(...findAllMinimalDefinitions(groups, definition))
        }

        definition.unshift(removed)
    }

    if (minimal)
        valid.push(deepCopyPositionMap(definition, n => n))

    return valid
}

export default function generateDefinition(groups: Group[]): Definition | undefined {
    const solution = solve({ groups, definition: [] })

    if (!solution) return undefined

    return getSmallest(findAllMinimalDefinitions(groups, getDefinition(solution)))
}

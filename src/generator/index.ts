import solve from '../solver';
import fromProblem from '../solver/converter/fromProblem';
import { getDefinition } from '../solver/converter/toProblem';
import { Game, Problem } from '../types';
import generateBoard from './board';
import generateDefinition from './definition';

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

    const problem: Problem = { groups: groups!, definition }

    return { start: fromProblem(problem).tiles, solution: solution! }
}

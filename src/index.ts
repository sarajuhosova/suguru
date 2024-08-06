import visualise from './visualise'
import * as BASIC from './examples/basic'
import * as DIFFICULT from './examples/difficult'
import * as EMPTY from './examples/empty'
import * as TINY from './examples/tiny'
import solve, { countSolutions } from './solver'
import { Problem } from './types'

console.log('Hello, Suguru!')

function puzzle(problem: Problem) {
    console.log(countSolutions(problem))

    const solution = solve(problem)

    if (solution !== undefined) visualise(solution)
    else console.log('Failed to solve!')
}

puzzle(TINY.problem)

console.log()

puzzle(BASIC.problem)

console.log()

puzzle(DIFFICULT.problem)

console.log()

puzzle(EMPTY.problem)

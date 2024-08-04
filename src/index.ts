import visualise from './visualise'
import * as TINY from './examples/tiny'
import * as BASIC from './examples/basic'
import solve from './solver'
import { Problem } from './types'

console.log('Hello, Suguru!')

function puzzle(problem: Problem) {
    const solution = solve(problem)

    if (solution !== undefined) visualise(solution)
    else console.log('Failed to solve!')
}

puzzle(TINY.problem)

console.log()

puzzle(BASIC.problem)

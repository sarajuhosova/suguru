import visualise from './visualise'
import * as EX1 from './examples/ex1'
import solve from './solver'

console.log('Hello, Suguru!')

const solution = solve(EX1.problem)
visualise(solution)

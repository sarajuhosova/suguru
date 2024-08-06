import generate from './generator'
import fromProblem from './solver/converter/fromProblem'
import visualise from './visualise'

console.log('Hello, Suguru!')

const { problem, solution} = generate(4, 5)

visualise(fromProblem(problem).tiles)
console.log()
visualise(solution)

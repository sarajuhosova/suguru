import { Problem, Solution } from '../types';
import fromProblem from './preprocessor';

export default function solve(problem: Problem): Solution {
    const partialSolution = fromProblem(problem)

    return partialSolution.tiles
}


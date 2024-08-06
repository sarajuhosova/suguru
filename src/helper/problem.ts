import { countSolutions } from "../solver";
import { Problem } from "../types";

export function isUnique(problem: Problem): boolean {
    return countSolutions(problem) === 1
}

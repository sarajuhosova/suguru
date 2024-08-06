import { Problem } from "../../types";
import { PartialSolution } from "../types";

export default function toProblem(partialSolution: PartialSolution): Problem {
    return {
        groups: [],
        definition: []
    }
}
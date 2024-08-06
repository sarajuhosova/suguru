import { Group, Problem } from '../types';

/*
    EMPTY

    +---+---+---+
    | _ | _   _ |
    +   +   +   +
    | _ | _   _ |
    +---+---+---+

*/

const groups: Group[] = [
    [
        { row: 0, column: 0 },
        { row: 1, column: 0 }
    ],
    [
        { row: 0, column: 1 },
        { row: 0, column: 2 },
        { row: 1, column: 1 },
        { row: 1, column: 2 },
    ]
]

export const problem: Problem = { groups, definition: [] }

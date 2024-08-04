import { positionEntry } from '../helper/position';
import { Definition, Group, Problem } from '../types';

/*
    TINY EXAMPLE

    +---+---+---+
    | 2   _ | _ |
    +   +   +   +
    | _   3 | 1 |
    +---+---+---+

    +---+---+---+
    | 2   4 | 2 |
    +   +   +   +
    | 1   3 | 1 |
    +---+---+---+
*/

const groups: Group[] = [
    [
        { row: 0, column: 0 },
        { row: 1, column: 0 },
        { row: 0, column: 1 },
        { row: 1, column: 1 }
    ],
    [
        { row: 0, column: 2 },
        { row: 1, column: 2 },
    ]
]

const definition: Definition = [
    positionEntry(0, 0, 2),
    positionEntry(1, 1, 3),
    positionEntry(1, 2, 1)
]

export const problem: Problem = { groups, definition }

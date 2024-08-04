import { positionEntry } from '../helper/position';
import { Definition, Group, Problem } from '../types';

/*
    BASIC

    +---+---+---+---+     +---+---+---+---+
    | _   _ | _ | _ |     | 1   4 | 1 | 2 |
    +   +   +---+   +     +   +   +---+   +
    | 3   _ | _   5 |     | 3   5 | 3   5 |
    +---+   +   +   +     +---+   +   +   +
    | _ | _ | 4   _ | ==> | 4 | 2 | 4   1 |
    +   +---+---+---+     +   +---+---+---+
    | 1   _   _ | _ |     | 1   3   5 | 3 |
    +   +---+---+   +     +   +---+---+   +
    | _ | _   _   1 |     | 2 | 4   2   1 |
    +---+---+---+---+     +---+---+---+---+
*/

const groups: Group[] = [
    [
        { row: 0, column: 0 },
        { row: 0, column: 1 },
        { row: 1, column: 0 },
        { row: 1, column: 1 },
        { row: 2, column: 1 }
    ],
    [
        { row: 0, column: 2 }
    ],
    [
        { row: 0, column: 3 },
        { row: 1, column: 2 },
        { row: 1, column: 3 },
        { row: 2, column: 2 },
        { row: 2, column: 3 }
    ],
    [
        { row: 2, column: 0 },
        { row: 3, column: 0 },
        { row: 3, column: 1 },
        { row: 3, column: 2 },
        { row: 4, column: 0 }
    ],
    [
        { row: 3, column: 3 },
        { row: 4, column: 1 },
        { row: 4, column: 2 },
        { row: 4, column: 3 }
    ]
]

const definition: Definition = [
    positionEntry(1, 0, 3),
    positionEntry(1, 3, 5),
    positionEntry(2, 2, 4),
    positionEntry(3, 0, 1),
    positionEntry(4, 3, 1)
]

export const problem: Problem = { groups, definition }

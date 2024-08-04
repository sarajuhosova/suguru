import { positionEntry } from '../helper/position';
import { Definition, Group, Problem } from '../types';

/*
    DIFFICULT

    +---+---+---+---+     +---+---+---+---+
    | _   4   _   1 |     | 2   4   3   1 |
    +---+---+---+---+     +---+---+---+---+
    | _   _   _   _ |     | 1   5   2   4 |
    +---+---+---+   +     +---+---+---+   +
    | _ | _ | _ | _ | ==> | 2 | 4 | 1 | 3 |
    +   +   +   +---+     +   +   +   +---+
    | _ | 3 | _   _ |     | 1 | 3 | 2   4 |
    +---+   +---+   +     +---+   +---+   +
    | _   _   _ | _ |     | 2   5   1 | 3 |
    +---+---+---+---+     +---+---+---+---+
*/

const groups: Group[] = [
    [
        { row: 0, column: 0 },
        { row: 0, column: 1 },
        { row: 0, column: 2 },
        { row: 0, column: 3 }
    ],
    [
        { row: 1, column: 0 },
        { row: 1, column: 1 },
        { row: 1, column: 2 },
        { row: 1, column: 3 },
        { row: 2, column: 3 }
    ],
    [
        { row: 2, column: 0 },
        { row: 3, column: 0 }
    ],
    [
        { row: 2, column: 1 },
        { row: 3, column: 1 },
        { row: 4, column: 0 },
        { row: 4, column: 1 },
        { row: 4, column: 2 }
    ],
    [
        { row: 2, column: 2 },
        { row: 3, column: 2 },
        { row: 3, column: 3 },
        { row: 4, column: 3 }
    ]
]

const definition: Definition = [
    positionEntry(0, 1, 4),
    positionEntry(0, 3, 1),
    positionEntry(3, 1, 3)
]

export const problem: Problem = { groups, definition }

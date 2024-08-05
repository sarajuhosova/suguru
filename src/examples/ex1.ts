import { positionEntry } from '../helper/position';
import { Definition, Group, Problem } from '../types';

/*
    EXAMPLE 1

    +---+---+---+---+---+     +---+---+---+---+---+
    | 3   _ | 6   _ | 2 |     | 3   2 | 6   3 | 2 |
    +   +   +---+   +   +     +   +   +---+   +   +
    | _   _ | _ | 5 | _ |     | 1   4 | 1 | 5 | 1 |
    +---+---+   +   +---+ ==> +---+---+   +   +---+
    | _ | _   _ | _   _ |     | 2 | 5   6 | 4   2 |
    +   +   +   +---+   +     +   +   +   +---+   +
    | 1 | _   2   3 | _ |     | 1 | 4   2   3 | 1 |
    +---+---+---+---+---+     +---+---+---+---+---+
*/

const groups: Group[] = [
    [{ row: 0, column: 0 }, { row: 1, column: 0 }, { row: 0, column: 1 }, { row: 1, column: 1 }],
    [{ row: 2, column: 0 }, { row: 3, column: 0 }],
    [{ row: 2, column: 1 }, { row: 3, column: 1 }, { row: 1, column: 2 }, { row: 2, column: 2 }, { row: 3, column: 2 }, { row: 3, column: 3 }],
    [{ row: 0, column: 2 }, { row: 0, column: 3 }, { row: 1, column: 3 }, { row: 2, column: 3 }, { row: 2, column: 4 }, { row: 3, column: 4 }],
    [{ row: 0, column: 4 }, { row: 1, column: 4 }],
]

const definition: Definition = [
    positionEntry(0, 0, 3),
    positionEntry(0, 2, 6),
    positionEntry(0, 4, 2),
    positionEntry(1, 3, 5),
    positionEntry(3, 0, 1),
    positionEntry(3, 2, 2),
    positionEntry(3, 3, 3)
]

export const problem: Problem = { groups, definition }

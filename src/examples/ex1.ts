import { Definition, Group, Problem } from '../types';

/*
    EXAMPLE 1
*/

const groups: Group[] = [
    [{ row: 0, column: 0 }, { row: 1, column: 0 }, { row: 0, column: 1 }, { row: 1, column: 1 }],
    [{ row: 2, column: 0 }, { row: 3, column: 0 }],
    [{ row: 2, column: 1 }, { row: 3, column: 1 }, { row: 1, column: 2 }, { row: 2, column: 2 }, { row: 3, column: 2 }, { row: 3, column: 3 }],
    [{ row: 0, column: 2 }, { row: 0, column: 3 }, { row: 1, column: 3 }, { row: 2, column: 3 }, { row: 2, column: 4 }, { row: 3, column: 4 }],
    [{ row: 0, column: 4 }, { row: 1, column: 4 }],
]

const definition: Definition = {
    0: { 0: 3, 2: 6, 4: 2 },
    1: { 3: 5 },
    3: { 0: 1, 2: 2, 3: 3 },
}

export const problem: Problem = { groups, definition }

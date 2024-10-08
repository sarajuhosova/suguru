import { Group } from '../types';

export default function generateBoard(length: number, width: number): Group[] {
    return [
        [
            { row: 0, column: 0 },
            { row: 1, column: 0 },
            { row: 2, column: 0 },
            { row: 3, column: 0 }
        ],
        [
            { row: 0, column: 1 },
            { row: 1, column: 1 },
            { row: 2, column: 1 },
            { row: 3, column: 1 },
            { row: 3, column: 2 }
        ],
        [
            { row: 0, column: 2 },
            { row: 0, column: 3 }
        ],
        [
            { row: 1, column: 2 },
            { row: 1, column: 3 },
            { row: 0, column: 4 },
            { row: 1, column: 4 },
            { row: 2, column: 4 }
        ],
        [
            { row: 2, column: 2 },
            { row: 2, column: 3 },
            { row: 3, column: 3 },
            { row: 3, column: 4 }
        ]
    ]
}

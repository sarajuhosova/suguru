import { Group } from "../types";

export default function generateBoard(length: number, width: number): Group[] {
    return [
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
}

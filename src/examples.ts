import { Board, Position } from "./types";


export const smallBoard: Board<Position> = [
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0, 2], [0, 3]],
    [[1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 3]],
    [[2, 0], [3, 0], [3, 1], [3, 2], [4, 2], [4, 3]],
    [[4, 0], [4, 1]]
]

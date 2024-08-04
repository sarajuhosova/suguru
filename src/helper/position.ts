import { Position, PositionEntry, PositionMap } from "../types"

// POSITION -------------------------------------------

export function equalPosition(first: Position, second: Position): boolean {
    return first.row === second.row && first.column === second.column
}

export function unify(first: Position[], second: Position[]): Position[] {
    const filtered = second.filter(({row, column}) => 
        !first.some(p => row === p.row && column === p.column)
    )
    return first.concat(filtered)
}

export function north(position: Position): Position {
    return { row: position.row - 1, column: position.column}
}

export function west(position: Position): Position {
    return { row: position.row, column: position.column - 1}
}

export function south(position: Position): Position {
    return { row: position.row + 1, column: position.column}
}

export function east(position: Position): Position {
    return { row: position.row, column: position.column + 1}
}

export function getSurroundingPositions(position: Position, length: number, width: number): Position[] {
    const minRow = Math.max(position.row - 1, 0)
    const maxRow = Math.min(position.row + 1, length - 1)
    const minCol = Math.max(position.column - 1, 0)
    const maxCol = Math.min(position.column + 1, width - 1)
    
    const surrounding: Position[] = []

    for (var row = minRow; row <= maxRow; row++) {
        for (var column = minCol; column <= maxCol; column++) {
            if (!(row === position.row && column === position.column)) {
                surrounding.push({ row, column })
            }
        }
    }

    return surrounding
}

// POSITION MAP ---------------------------------------

export function positionEntry<T>(row: number, column: number, value: T): PositionEntry<T> {
    return { key: { row, column }, value }
}

export function findByPosition<T>(position: Position, map: PositionMap<T>): T | undefined {
    for (const { key, value } of map) {
        if (equalPosition(position, key)) return value
    }
    return undefined
}

export function updateEntry<T>(position: Position, value: T, map: PositionMap<T>) {
    for (var i = 0; i < map.length; i++) {
        const { key } = map[i]
        if (equalPosition(position, key)) {
            map[i] = { key, value }
            return
        }
    }
    // if it wasn't present yet, add it
    map.push({ key: position, value })
}

export function sortByValue<T>(
    map: PositionMap<T>, 
    comparator: ((left: T, right: T) => number)
) {
    map.sort(({ value: left }, { value: right }) => comparator(left, right))
}

// OTHER ----------------------------------------------

export function getByPosition<T>(position: Position, grid: T[][]): T {
    return grid[position.row][position.column]
}



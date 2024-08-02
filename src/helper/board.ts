import { Frame, Group, Position } from '../types'
import { max } from './util'

export function calculateDimensions(groups: Group[]): [number, number] {
    const length = max(groups.map(g => max(g.map(p => p.row)))) + 1
    const width = max(groups.map(g => max(g.map(p => p.column)))) + 1

    return [length, width]
}

// POSITION -------------------------------------------

function equalPosition(first: Position, second: Position): boolean {
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

// GROUP ----------------------------------------------

export function findGroup(position: Position, groups: Group[]): Group | undefined {
    for (const group of groups) {
        if (group.some(p => equalPosition(position, p))) return group
    }
    return undefined
}

export function fromSameGroup(
    first: Position,
    second: Position,
    groups: Group[]
): boolean {
    const group = findGroup(first, groups)
    return (!group) ? false : group.some(p => equalPosition(second, p))
}

// FRAME ----------------------------------------------

export function calculateFrame(position: Position, groups: Group[]): Frame {
    const [length, width] = calculateDimensions(groups)
    return {
        up:    position.row === 0            || !fromSameGroup(position, north(position), groups),
        left:  position.column === 0         || !fromSameGroup(position, west(position), groups),
        down:  position.row === length - 1   || !fromSameGroup(position, south(position), groups),
        right: position.column === width - 1 || !fromSameGroup(position, east(position), groups)
    }
}

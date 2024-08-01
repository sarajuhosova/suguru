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

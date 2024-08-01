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

function above(position: Position): Position {
    return { row: position.row - 1, column: position.column}
}

function left(position: Position): Position {
    return { row: position.row, column: position.column - 1}
}

function below(position: Position): Position {
    return { row: position.row + 1, column: position.column}
}

function right(position: Position): Position {
    return { row: position.row, column: position.column + 1}
}

// GROUP ----------------------------------------------

function findGroup(position: Position, groups: Group[]): Group | undefined {
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
        up:    position.row === 0            || !fromSameGroup(position, above(position), groups),
        left:  position.column === 0         || !fromSameGroup(position, left(position), groups),
        down:  position.row === length - 1   || !fromSameGroup(position, below(position), groups),
        right: position.column === width - 1 || !fromSameGroup(position, right(position), groups)
    }
}

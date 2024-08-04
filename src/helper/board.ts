import { Frame, Group, Position } from '../types'
import { equalPosition, north, west, south, east } from './position'
import { max } from './util'

export function calculateDimensions(groups: Group[]): [number, number] {
    const length = max(groups.map(g => max(g.map(p => p.row)))) + 1
    const width = max(groups.map(g => max(g.map(p => p.column)))) + 1

    return [length, width]
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

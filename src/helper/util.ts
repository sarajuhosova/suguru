export function max(arr: number[]): number {
    return Math.max(...arr)
}

export function compareListsBySize<T>(left: T[], right: T[]): number {
    const L = left.length
    const R = right.length
    return (L === R) ? 0 : ((L < R) ? -1 : 1)
}

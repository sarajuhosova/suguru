export function max(arr: number[]): number {
    return Math.max(...arr)
}

export function getSmallest<T>(lists: T[][]): T[] | undefined {
    if (lists.length < 1) return undefined

    var smallest = lists[0]
    for (const list of lists) {
        if (list.length < smallest.length) smallest = list
    }

    return smallest
}

export function compareListsBySize<T>(left: T[], right: T[]): number {
    const L = left.length
    const R = right.length
    return (L === R) ? 0 : ((L < R) ? -1 : 1)
}

export function contains<T>(
    element: T, list: T[], equalFn: (left: T, right: T) => boolean
): boolean {
    return list.some(e => equalFn(element, e))
}

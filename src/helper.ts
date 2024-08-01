import { Entry, Solution } from "./types"

export function max(arr: number[]): number {
    return Math.max(...arr)
}

export function generateSolution(length: number, width: number): Solution {
    const result: Solution = []
    for (var i = 0; i < length; i++) {
        const row: Entry[] = []
        for (var j = 0; j < width; j++) {
            row.push('empty')
        }
        result.push(row)
    }
    return result
}

export function nextChar(c: string): string {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

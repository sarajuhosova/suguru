export function max(arr: number[]): number {
    return Math.max(...arr)
}

export function generateGrid(width: number, length: number): string[][] {
    const result: string[][] = []
    for (var i = 0; i < length; i++) {
        const row: string[] = []
        for (var j = 0; j < width; j++) {
            row.push("")
        }
        result.push(row)
    }
    return result
}

export function nextChar(c: string): string {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

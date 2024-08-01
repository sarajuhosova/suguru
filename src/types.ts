export type Position = [number, number]

export type Tile = {
    position: Position
    value: number
    revealed: boolean
    preset: boolean
}

export type Board<T> = T[][]

export type Row = number
export type Column = number

export type Position = [Row, Column]

export type Board = Position[][]

export type Problem = {
    board: Board
    definition: Record<Row, Record<Column, number>>
}

export type Entry = number | 'empty'

export type Solution = Entry[][]

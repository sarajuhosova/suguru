export type Row = number
export type Column = number

export type Position = {
    row: Row,
    column: Column
}

// BOARD ----------------------------------------------

export type Group = Position[]

export type Frame = {
    up: boolean,
    left: boolean,
    down: boolean,
    right: boolean
}

export type Board = Frame[][]

// PROBLEM --------------------------------------------

export type Definition = Record<Row, Record<Column, number>>

export type Problem = {
    groups: Group[]
    definition: Definition
}

// SOLUTION -------------------------------------------

export type Entry = number | undefined

export type Tile = {
    defined: boolean
    frame: Frame
    entry: Entry
}

export type Solution = Tile[][]

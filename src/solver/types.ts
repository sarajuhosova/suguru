import { Tile, Position, Group } from '../types';

export type PartialTile = Tile & {
    options?: number[]
    group: Group
}

export type PartialSolution = {
    tiles: PartialTile[][]
    remaining: Position[]
}

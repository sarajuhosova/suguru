import { Tile, Position, Group } from '../types';

export type PartialTile = Tile & {
    options?: Set<number>
    group: Group
}

export type PartialSolution = {
    tiles: PartialTile[][]
    remaining: Position[]
}

import { Tile, Group, PositionMap } from '../types';

export type PartialTile = Tile & { group: Group }

export type PartialSolution = {
    tiles: PartialTile[][]
    remaining: PositionMap<number[]>
}

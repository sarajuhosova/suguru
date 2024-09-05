import { Position } from "../types";

export function getCellPosition(cell: HTMLTableCellElement): Position {
    return {
        row : (cell.parentElement as HTMLTableRowElement).rowIndex,
        column: cell.cellIndex
    }
}
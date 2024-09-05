import { Classes } from "../constants"

function as<S, T>(input: S | undefined): T | undefined {
    return (!input) ? undefined : input as T
}

export function getSuguruTable(): HTMLTableElement | undefined {
    return as(document.getElementById('suguru'))
}

export function getSelectedTile(): HTMLTableCellElement | undefined {
    return as(document.getElementsByClassName(Classes.TILE.SELECTED).item(0))
}

import { Classes } from "../constants"

export function getSuguruTable(): HTMLTableElement {
    return document.getElementById('suguru')! as HTMLTableElement
}

export function getSelectedTile(): HTMLTableCellElement {
    return document.getElementsByClassName(Classes.TILE.SELECTED)
        .item(0)! as HTMLTableCellElement
}

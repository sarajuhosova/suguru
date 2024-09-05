import { Classes } from "../constants";
import { getSelectedTile } from "../reactions/getters";

export default function onTileClick(this: HTMLTableCellElement) {
    getSelectedTile()?.classList.remove(Classes.TILE.SELECTED)
    this.classList.add(Classes.TILE.SELECTED)
}

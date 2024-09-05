import { Classes } from "../constants";
import { getSelectedTile, getSuguruTable } from "./getters";

export default function end() {
    getSuguruTable()?.classList.add(Classes.SUGURU.SOLVED)

    getSelectedTile()?.classList.remove(Classes.TILE.SELECTED)
}
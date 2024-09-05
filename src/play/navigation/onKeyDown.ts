import { Classes } from "../constants"
import { getSelectedTile } from "../operation/getters"
import { checkInput } from "../operation/solution"
import { getCellPosition } from "../util"

function onArrowKey(direction: string) {
    const selected = getSelectedTile()

    if (!selected) return

    const parent = selected.parentElement as HTMLTableRowElement
    let next: Element | null = null

    if (direction === 'Right') {
        next = selected.nextElementSibling
        if (!next) {
            next = parent.firstElementChild!
        }
    }
    else if (direction === 'Left') {
        next = selected.previousElementSibling
        if (!next) {
            next = parent.lastElementChild!
        }
    } else {
        const index = selected.cellIndex

        let nextParent = null
        if (direction === 'Down') {
            nextParent = parent.nextElementSibling
            if (!nextParent) {
                nextParent = parent.parentElement?.firstElementChild
            }
        } else if (direction === 'Up') {
            nextParent = parent.previousElementSibling
            if (!nextParent) {
                nextParent = parent.parentElement?.lastElementChild
            }
        }

        next = nextParent!.childNodes.item(index) as Element | null
    }

    if (next !== null) {
        selected.classList.remove(Classes.TILE.SELECTED, Classes.TILE.ERROR)
        next.classList.add(Classes.TILE.SELECTED)
    }
}

function onNumberInput(num: number) {
    const selected = getSelectedTile()

    if (!selected || selected.classList.contains(Classes.TILE.FILLED)) return

    if (checkInput(num, getCellPosition(selected))) {
        selected.appendChild(document.createTextNode(`${num}`));
        selected.classList.add(Classes.TILE.FILLED)
    } else {
        selected.classList.add(Classes.TILE.ERROR)
    }
}

export default function onKeyDown(event: KeyboardEvent) {
    if (event.key.startsWith('Arrow')) onArrowKey(event.key.substring(5))

    const number = parseInt(event.key)
    if (!isNaN(number) && 1 <= number && number <= 9) onNumberInput(number)
}

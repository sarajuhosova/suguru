import { Frame, Solution } from '../types';

function setFrame(td: HTMLTableCellElement, frame: Frame) {
    if (frame.up) td.style.borderTop = 'black solid medium'
    if (frame.right) td.style.borderRight = 'black solid medium'
    if (frame.down) td.style.borderBottom = 'black solid medium'
    if (frame.left) td.style.borderLeft = 'black solid medium'
}

export default function visualise(solution: Solution, table: HTMLTableElement) {
    for (const row of solution) {
        const tr = table.insertRow()

        for (const tile of row) {
            const td = tr.insertCell()
            td.className = 'tile'

            if (tile.entry !== undefined) {
                if (tile.defined) {
                    td.classList.add('defined') 
                }
                td.appendChild(document.createTextNode(`${tile.entry}`));
            }

            setFrame(td, tile.frame)
        }
    }
}

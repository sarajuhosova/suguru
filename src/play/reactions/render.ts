import { Classes } from '../constants';
import { Frame, Solution } from '../../types';
import { getSuguruTable } from './getters';
import onTileClick from '../actions/onClick';

export function prettyPrint(solution: Solution) {
    console.log('+' + solution[0].map(_ => '---').join('+') + '+')

    for (const row of solution) {
        let data = '|'
        let line = '+'

        for (const tile of row) {
            data += ' ' + ((!tile.entry) ? '_' : tile.entry) + ' ' + ((tile.frame.right) ? '|' : ' ')
            line += ((tile.frame.down) ? '---' : '   ') + '+'
        }

        console.log(data)
        console.log(line)
    }
}

function setFrame(td: HTMLTableCellElement, frame: Frame) {
    if (frame.up) td.style.borderTop = 'black solid medium'
    if (frame.right) td.style.borderRight = 'black solid medium'
    if (frame.down) td.style.borderBottom = 'black solid medium'
    if (frame.left) td.style.borderLeft = 'black solid medium'
}

export default function render(solution: Solution) {
    const table = getSuguruTable()

    if (!table) return

    let selected: HTMLTableCellElement | undefined = undefined

    for (const row of solution) {
        const tr = table.insertRow()

        for (const tile of row) {
            const td = tr.insertCell()
            td.className = Classes.TILE.CLASS
            td.addEventListener('click', onTileClick)

            if (tile.entry !== undefined) {
                td.classList.add(Classes.TILE.FILLED)
                if (tile.defined) {
                    td.classList.add(Classes.TILE.DEFINED) 
                }
                td.appendChild(document.createTextNode(`${tile.entry}`));
            } else if (!selected) selected = td

            setFrame(td, tile.frame)
        }
    }

    if (selected !== undefined) selected.classList.add(Classes.TILE.SELECTED)
}

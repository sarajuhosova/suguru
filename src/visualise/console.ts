import {  Solution } from '../types'

export default function prettyPrint(solution: Solution) {
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

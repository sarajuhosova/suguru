import play from './play';
import { getSuguruTable } from './play/reactions/getters';

document.getElementById('new-game')?.addEventListener('click', () => {
    getSuguruTable()!.innerHTML = ''
    play()
})

import onKeyDown from "./onKeyDown";
import onClick from "./onClick";

export default function playNavigation() {
    document.addEventListener('animationend', () => {
        const all = document.getElementsByClassName('error')
        for (var i = 0; i < all.length; i++) {
            all.item(i)?.classList.remove('error')
        }
    })

    document.onkeydown = onKeyDown
    document.onclick = onClick
}

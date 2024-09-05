import { Game, Solution } from "../types";
import onKeyDown from "./operation/onKeyDown";
import render from "./operation/render";

let solution: Solution | undefined = undefined

export default function play(game: Game) {
    solution = game.solution

    render(game.start)

    document.onkeydown = onKeyDown
}
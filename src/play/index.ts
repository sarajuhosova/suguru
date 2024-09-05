import { Game } from "../types";
import onKeyDown from "./operation/onKeyDown";
import render from "./operation/render";
import { setSolution } from "./solution";

export default function play(game: Game) {
    // set the solution to a new state
    setSolution(game.solution)

    // render the starting board
    render(game.start)

    // make sure the keys start moving the board around
    document.onkeydown = onKeyDown
}

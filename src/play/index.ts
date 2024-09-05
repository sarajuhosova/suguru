import { Game } from "../types";
import playNavigation from "./navigation";
import render from "./operation/render";
import { setSolution } from "./operation/solution";

export default function play(game: Game) {
    // set the solution to a new state
    setSolution(game.solution)

    // render the starting board
    render(game.start)

    // make sure the navigation works
    playNavigation()
}

import generate from "../generator";
import playNavigation from "./actions";
import render from "./reactions/render";
import { setSolution } from "./reactions/state";

export default function play() {
    const game = generate(4, 5)

    // set the solution to a new state
    setSolution(game)

    // render the starting board
    render(game.start)

    // make sure the navigation works
    playNavigation()
}

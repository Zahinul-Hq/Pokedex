import { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
    console.log("Your Pokedex:");
    Object.keys(state.pokedex).forEach((pokemonName) => {
        console.log(` - ${pokemonName}`);
    });
}

import { State } from "./state.js";
export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    if (args[0] === undefined) {
        console.log("Please provide a Pokemon name to catch\n Usage: catch <pokemon_name>");
        return;
    }

    console.log("Throwing a Pokeball at " + args[0] + "...");

    const pokemonName = args[0];
    const pokemonData = await state.pokeapi.fetchPokemon(pokemonName);
    const number = Math.floor(Math.random() * 100) + 1; 
    if (number >= 30 && number <= 70 && pokemonData) {
        state.pokedex[pokemonData.name] = pokemonData;
        console.log(`${pokemonData.name} was caught!`);
        console.log("You may now inspect it with the inspect command.");
    } else {
        console.log(`${pokemonName} escaped!`);
    }
}
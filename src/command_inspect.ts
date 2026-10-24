import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    const pokemonName = args[0];
    if (pokemonName === undefined) {
        console.log("Please provide a Pokemon name to inspect\n Usage: inspect <pokemon_name>");
        return;
    }

    const pokemon = state.pokedex[pokemonName];
    if (pokemon === undefined) {
        console.log("you have not caught that pokemon");
        return;
    }

    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log("Stats:");
    pokemon.stats.forEach((stat) => {
        console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
    });
    console.log("Types:");
    pokemon.types.forEach((type) => {
        console.log(`  - ${type.type.name}`);
    });
}

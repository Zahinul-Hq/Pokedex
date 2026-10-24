import {State} from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    if (args[0] === undefined) {
        console.log("Please provide an area name to explore\n Usage: explore <area_name>");
        return;
    }

    const locationData = await state.pokeapi.fetchLocation(args[0]);
    console.log(`Exploring ${args[0]}...`);
    console.log("Found Pokemon:");
    locationData.pokemon_encounters.forEach((encounter) => {
        console.log(` - ${encounter.pokemon.name}`);
    });
} 
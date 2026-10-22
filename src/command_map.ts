import { State } from "./state.js";
export async function commandMap(state: State): Promise<void> {
    const locations = await state.pokeapi.fetchLocations(state.nextLocationsURL || undefined);
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    locations.results.forEach((location) => {
        console.log(location.name);
    });
}
export async function mapBack(state: State): Promise<void> {
    if (state.prevLocationsURL === null) {
        console.log("you're on the first page");
        return;
    }
    const locations = await state.pokeapi.fetchLocations(state.prevLocationsURL || undefined);
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    locations.results.forEach((location) => {
        console.log(location.name);
    });
}
export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const response = await fetch(pageURL || `${PokeAPI.baseURL}/location-area`);
        if(!response.ok){
          throw new Error(`Failed to fetch Locations: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }

    //async fetchLocation(locationName: string): Promise<Location> {
    // implement this
    //}
}

export type ShallowLocations = {
    count : number;
    next : string | null;
    previous : string | null;
    results : Array<{
      name: string,
      url: string
    }>;
};

export type Location = {
  // add properties here
    
};
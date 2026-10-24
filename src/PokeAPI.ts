import {Cache, CacheEntry} from "./pokecache.js";
export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private readonly cache: Cache;

    constructor() {
        this.cache = new Cache();
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const cached = this.cache.get<ShallowLocations>(pageURL || `${PokeAPI.baseURL}/location-area`);
        if(cached) {
            return cached;
        }
        const response = await fetch(pageURL || `${PokeAPI.baseURL}/location-area`);
        if(!response.ok){
          throw new Error(`Failed to fetch Locations: ${response.status} ${response.statusText}`);
        }
        const locations = await response.json();
        this.cache.add(pageURL || `${PokeAPI.baseURL}/location-area`, locations);
        return locations;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const cached = this.cache.get<Location>(`${PokeAPI.baseURL}/location-area/${locationName}`);
        if(cached) {
            return cached;
        }
        const response = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`);
        if(!response.ok){
          throw new Error(`Failed to fetch Location: ${response.status} ${response.statusText}`);
        }
        const location = await response.json();
        this.cache.add(`${PokeAPI.baseURL}/location-area/${locationName}`, location);
        return location;
    }
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
    id: number;
    name: string;
    pokemon_encounters: Array<{
      pokemon: {
        name: string;
        url: string;
      };
    }>;
};

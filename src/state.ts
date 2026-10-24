import {createInterface, type Interface } from "readline";
import { getCommands } from "./get_command.js";
import {  PokeAPI, Pokemon} from "./PokeAPI.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => void;
};
export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    pokeapi : PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
    pokedex: Record<string, Pokemon>;
};
export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const commands = getCommands();
  const pokeAPI = new PokeAPI();
  const nextLocationsURL = "https://pokeapi.co/api/v2/location-area/";
  const prevLocationsURL = null;


  return {
    rl,
    commands,
    pokeapi: pokeAPI,
    nextLocationsURL,
    prevLocationsURL,
    pokedex: {},
  };
}
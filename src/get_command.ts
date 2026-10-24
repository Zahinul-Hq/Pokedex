import {State, CLICommand} from "./state.js";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, mapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        help:{
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map:{
            name: "map",
            description: "Displays the map of the Pokedex",
            callback: commandMap,
        },
        mapb:{
            name: "mapb",
            description: "Displays the previous map of the Pokedex",
            callback: mapBack,
        },
        explore:{
            name: "explore",
            description: "Explore the area",
            callback: commandExplore,

        },
        catch:{
            name: "catch",
            description: "Catch a Pokemon",
            callback: commandCatch,
        },
        inspect:{
            name: "inspect",
            description: "Inspect a caught Pokemon",
            callback: commandInspect,
        },
        pokedex:{
            name: "pokedex",
            description: "List caught Pokemon",
            callback: commandPokedex,
        }
    };
}
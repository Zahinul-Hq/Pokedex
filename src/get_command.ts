import {State, CLICommand} from "./state.js";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, mapBack } from "./command_map.js";

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
        }
    };
}
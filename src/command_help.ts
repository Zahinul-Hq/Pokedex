import { State} from "./state.js";
export function commandHelp(state: State): void {
    console.log("Welcome to the Pokedex!\nUsage:");
    for (const commandName in state.commands) {
        const command = state.commands[commandName];
        console.log(`- ${command.name}: ${command.description}`);
    }            
}
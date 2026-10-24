import { getCommands } from "./get_command.js";
import { State } from "./state.js";
export function cleanInput(input: string): string[] {
  let cleanedInput: string = input.trim().toLowerCase();
    let inputArray: string[] = cleanedInput.split(/\s+/);
    return inputArray;
}
export async function startREPL(state: State): Promise<void> {


    state.rl.prompt();
    
    state.rl.on("line", async (line) => {
        const cleanedInput = cleanInput(line);
        if(cleanedInput.length > 0) {
            const commands = getCommands();
            const commandName = cleanedInput[0];
            const command = commands[commandName];
            if(commandName === "explore" && cleanedInput.length > 1) {
                const areaName = cleanedInput[1];
                await command.callback(state, areaName);
            }else if(commandName === "catch" && cleanedInput.length > 1) {
                const pokemonName = cleanedInput[1];
                await command.callback(state, pokemonName);
            }
            else if(commandName === "inspect" && cleanedInput.length > 1) {
                const pokemonName = cleanedInput[1];
                await command.callback(state, pokemonName);
            }
            else if (command) {
                await command.callback(state);
            } else {
                console.log(`Unknown command: ${commandName}`);
            }
        }
        state.rl.prompt();
    });
}

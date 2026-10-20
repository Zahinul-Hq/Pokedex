import { createInterface } from "node:readline";
import { getCommands } from "./get_command.js";
import { State } from "./state.js";
export function cleanInput(input: string): string[] {
  let cleanedInput: string = input.trim().toLowerCase();
    let inputArray: string[] = cleanedInput.split(/\s+/);
    return inputArray;
}
export function startREPL(state: State): void {


    state.rl.prompt();
    
    state.rl.on("line", (line) => {
        const cleanedInput = cleanInput(line);
        if(cleanedInput.length > 0) {
            const commands = getCommands();
            const commandName = cleanedInput[0];
            const command = commands[commandName];
            if (command) {
                command.callback(state);
            } else {
                console.log(`Unknown command: ${commandName}`);
            }
        }
        state.rl.prompt();
    });
}

import { Command } from './command';
export class DummyCommand implements Command {
    execute(gameInstance: any): any {
        throw new Error("Not command found. Executing dummy command");
    }
    parsedMessage: any;
    public constructor(parsedMessage: any) {
        this.parsedMessage = parsedMessage;
    }
}
import { Command } from './command';
export class DummyCommand implements Command {
    execute(gameInstance: any): any {
        throw new Error("Method not implemented.");
    }
    parsedMessage: any;
    public constructor(parsedMessage: any) {
        this.parsedMessage = parsedMessage;
    }
}
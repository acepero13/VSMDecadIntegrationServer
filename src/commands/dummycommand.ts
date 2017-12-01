import { Command } from './command';
export class DummyCommand implements Command {
    parsedMessage: any;
    public constructor(parsedMessage: any) {
        this.parsedMessage = parsedMessage;
    }
}
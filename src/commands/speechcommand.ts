import { Command } from './command';
export class SpeechCommand implements Command {
    parsedMessage: any;
    public constructor(parsedMessage: any) {
        this.parsedMessage = parsedMessage;
    }
}
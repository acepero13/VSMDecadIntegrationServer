
import { Command } from './../../commands/command';
import { CommandFactory } from '../../factories/commandfactory';

export class JsonParser {
    event: any;
    private isEventPresent: boolean;

    public shouldFireEvent(): boolean {
        return this.isEventPresent;
    }

    public getEvent(): string {
        return this.event;
    }
    commandFactory: CommandFactory;
    public constructor() {
        this.commandFactory = new CommandFactory();
    }

    public parseMessage(message: string): Command {
        let parsedMessage = this.tryToParseJsonMessage(message);
        this.updateEventInformation(parsedMessage);
        return this.commandFactory.create(parsedMessage);
    }


    private updateEventInformation(parsedMessage: any) {
        if (parsedMessage !== null && parsedMessage.hasOwnProperty('event') && parsedMessage.event !== null) {
            this.isEventPresent = true;
            this.event = parsedMessage.event;
        } else {
            this.isEventPresent = false;
            this.event = '';
        }
    }

    private tryToParseJsonMessage(message: string) {
        this.isEmptyMessage(message);
        return JSON.parse(message);
    }

    private isEmptyMessage(message: string) {
        if (!message) {
            throw new Error('Cannot parse empty message');
        }
    }
}
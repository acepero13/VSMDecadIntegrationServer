
import { Command } from './../../commands/command';
import { CommandFactory } from '../../factories/commandfactory';

export class JsonParser {
    commandFactory: CommandFactory;
    public constructor() {
        this.commandFactory = new CommandFactory();

    }

    public parseMessage(message: string): Command {
        let parsedMessage = this.tryToParseJsonMessage(message);
        return this.commandFactory.create(parsedMessage);
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
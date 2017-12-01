import { Command } from './command';
export class AnimationCommand implements Command {
    parsedMessage: any;
    public constructor(parsedMessage: any) {
        this.parsedMessage = parsedMessage;
    }
}
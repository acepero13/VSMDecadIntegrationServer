import { Command } from './command';
export class CameraCommand implements Command {
    parsedMessage: any;
    public constructor(parsedMessage: any) {
        this.parsedMessage = parsedMessage;
    }
}
import { Command } from './command';
export class CameraCommand implements Command {
    execute(gameInstance: any): any {
        throw new Error("Method not implemented.");
    }
    parsedMessage: any;
    public constructor(parsedMessage: any) {
        this.parsedMessage = parsedMessage;
    }
}
import { Command } from './command';
export class SpeechCommand implements Command {
    
    parsedMessage: any;
    public constructor(parsedMessage: any) {
        this.parsedMessage = parsedMessage;
    }

    execute(gameInstance: any): void {
        let msg = this.parsedMessage.speech;
        gameInstance.SendMessage('AnnaMesh', 'MaryTTSspeak', msg);
    }
}
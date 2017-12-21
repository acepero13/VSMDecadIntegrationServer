import { Command } from './command';
import {App} from '../constants';
export class SpeechCommand implements Command {
    
    parsedMessage: any;
    public constructor(parsedMessage: any) {
        this.parsedMessage = parsedMessage;
    }

    execute(gameInstance: any): any {
        let msg = this.parsedMessage.speech;
        gameInstance.SendMessage(App.AVATAR, App.COMMAND_SPEAK, msg);
        return true;
    }
}
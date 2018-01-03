import { Command } from './command';
import {App} from '../constants';
import { ServiceLocator } from './../utils/servicelocator';
export class IsSpeakingCommand implements Command {
    isSpeaking: any;
    
    parsedMessage: any;
    public constructor(parsedMessage: any) {
        this.parsedMessage = parsedMessage;
        this.isSpeaking = ServiceLocator.getInstance().resolve('isMaryTtsSpeaking');
    }

    execute(gameInstance: any): any {
        let msg = this.parsedMessage.speech;
        return this.isSpeaking();
    }
}
import { CommandHandler } from "./commandhandler";
import {CameraCommand} from './../commands/cameracommand';
import { Command } from "./../commands/command";
import { SpeechCommand } from "./../commands/speechcommand";

export class SpeechHandler extends CommandHandler{
    protected process(parsedMessage: any): Command {
        return new SpeechCommand(parsedMessage);
    }
    protected canProcess(parsedMessage: any): boolean {
        return parsedMessage.type === 'speech';
    }
    
}
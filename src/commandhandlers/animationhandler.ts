import { CommandHandler } from "./commandhandler";
import {AnimationCommand} from './../commands/animationcommand';
import { Command } from "./../commands/command";
export class AnimationHandler extends CommandHandler{
    protected process(parsedMessage: any): Command {
        return new AnimationCommand(parsedMessage);
    }
    protected canProcess(parsedMessage: any): boolean {
        return parsedMessage.type === 'animation';
    }
    
}
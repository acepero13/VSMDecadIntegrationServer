import { CommandHandler } from "./commandhandler";
import {AnimationCommand} from './../commands/animationcommand';
import { Command } from "./../commands/command";
import {App} from '../constants';
export class AnimationHandler extends CommandHandler{
    protected process(parsedMessage: any): Command {
        return new AnimationCommand(parsedMessage);
    }
    protected canProcess(parsedMessage: any): boolean {
         console.log(parsedMessage);
        return parsedMessage.type === App.TYPE_ANIMATION;
    }
    
}
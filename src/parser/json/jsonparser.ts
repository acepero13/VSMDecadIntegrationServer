import {AnimationCommand} from '../../commands/animationcommand';
import { CameraCommand } from '../../commands/cameracommand';
import { DummyCommand } from '../../commands/dummycommand';
import { CommandHandler } from './../../commandhandlers/commandhandler';
import { AnimationHandler } from './../../commandhandlers/animationhandler';
import { CameraHandler } from './../../commandhandlers/camerahandler';
import { Command } from './../../commands/command';
import { DummyHandler } from './../../commandhandlers/dummyhandler';
export class JsonParser {
    private commandHandler: CommandHandler;
    public constructor(){
        let animationHandler = new AnimationHandler();
        let cameraHandler = new CameraHandler(); 
        let dummyHandler = new DummyHandler();
        animationHandler.setNext(cameraHandler);
        cameraHandler.setNext(dummyHandler);
        this.commandHandler = animationHandler;


    }
    public  parseMessage(message :string):Command {
        let parsedMessage = this.tryToParse(message);
        return this.commandHandler.handleMessage(parsedMessage);
    }


    private tryToParse(message: string) {
        this.isEmptyMessage(message);
        return JSON.parse(message);
    }

    private isEmptyMessage(message: string) {
        if(!message){
            throw new Error('Cannot parse empty message');
        }
    }
}
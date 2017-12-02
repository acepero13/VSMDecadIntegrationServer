import {AnimationCommand} from '../../commands/animationcommand';
import { CameraCommand } from '../../commands/cameracommand';
import { DummyCommand } from '../../commands/dummycommand';
import { CommandHandler } from './../../commandhandlers/commandhandler';
import { AnimationHandler } from './../../commandhandlers/animationhandler';
import { CameraHandler } from './../../commandhandlers/camerahandler';
import { Command } from './../../commands/command';
import { DummyHandler } from './../../commandhandlers/dummyhandler';
import { SpeechHandler } from './../../commandhandlers/speechhandler';

export class JsonParser {
    private commandHandler: CommandHandler;
    public constructor(){
        let animationHandler = new AnimationHandler();
        let cameraHandler = new CameraHandler(); 
        let speechHandler = new SpeechHandler();
        let dummyHandler = new DummyHandler();
        animationHandler.setNext(cameraHandler);
        cameraHandler.setNext(speechHandler);
        speechHandler.setNext(dummyHandler);
        this.commandHandler = animationHandler;

    }
    public  parseMessage(message :string):Command {
        let parsedMessage = this.tryToParseJsonMessage(message);
        return this.commandHandler.handleMessage(parsedMessage);
    }


    private tryToParseJsonMessage(message: string) {
        this.isEmptyMessage(message);
        return JSON.parse(message);
    }

    private isEmptyMessage(message: string) {
        if(!message){
            throw new Error('Cannot parse empty message');
        }
    }
}
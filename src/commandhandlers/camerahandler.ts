import { CommandHandler } from "./commandhandler";
import {CameraCommand} from './../commands/cameracommand';
import { Command } from "./../commands/command";
import {App} from '../constants';
export class CameraHandler extends CommandHandler{
    protected process(parsedMessage: any): Command {
        return new CameraCommand(parsedMessage);
    }
    protected canProcess(parsedMessage: any): boolean {
        return parsedMessage.type === App.TYPE_CAMERA;
    }
    
}
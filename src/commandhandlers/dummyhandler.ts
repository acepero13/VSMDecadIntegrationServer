import { CommandHandler } from "./commandhandler";
import {DummyCommand} from './../commands/dummycommand';
import { Command } from "./../commands/command";

export class DummyHandler extends CommandHandler{

    protected process(parsedMessage: any): Command{
        return new DummyCommand(parsedMessage);
    }
    protected canProcess(parsedMessage: any): boolean {
        return true;
    }
    
}
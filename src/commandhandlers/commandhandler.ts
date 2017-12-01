import {DummyHandler} from './dummyhandler';
import { Command } from './../commands/command';
export abstract class CommandHandler {
    private successor: any;

    public constructor(){
        
    }
    
    public setNext(nextHandler: CommandHandler): void {
        this.successor = nextHandler;
    }
    public handleMessage(parsedMessage: any): Command {
        if (this.canProcess(parsedMessage)) {
            return this.process(parsedMessage);
        } else {
            return this.successor.handleMessage(parsedMessage);
        }
    }
    protected abstract process(parsedMessage: any): Command;

    protected abstract canProcess(parsedMessage: any): boolean;


}
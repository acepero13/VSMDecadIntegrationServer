import { Command } from "./command";
import { ServiceLocator } from "../utils/servicelocator";

export class ListAnimationCommand implements Command{
    availableAnimations: any;
    parsedMessage: any;
    public constructor(parsedMessage: any){
        this.parsedMessage = parsedMessage;
    }
    execute(gameInstance: any): void {
        this.availableAnimations = ServiceLocator.getInstance().resolve('listAvailableAnimations');
        let animations = this.availableAnimations();
    }

    

}
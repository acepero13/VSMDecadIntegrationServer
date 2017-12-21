import { Command } from './command';
import { ServiceLocator } from './../utils/servicelocator';
export class AnimationCommand implements Command {
    play: any;
    parsedAnimation: any;
    public constructor(parsedMessage: any) {
        this.parsedAnimation = parsedMessage;
        this.play = ServiceLocator.getInstance().resolve('playAnimation');
    }
    execute(gameInstance: any): void {
        console.log(this.parsedAnimation);
        console.log('Alvaro')
        let animation = this.parsedAnimation.name;
        this.play(animation);
    }
    
}
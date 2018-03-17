import { Command } from '../commands/command';
import { AnimationCommand } from '../commands/animationcommand';
import { CameraCommand } from '../commands/cameracommand';
import { SpeechCommand } from '../commands/speechcommand';
import { DummyCommand } from '../commands/dummycommand';
import { ListAnimationCommand } from '../commands/listanimationcommand';
import { IsSpeakingCommand } from '../commands/isspeakingcommand';
import { App } from '../constants';
export class CommandFactory {
    public constructor() {

    }

    public create(parsedMessage: any): Command {
        let command: Command;
        switch (parsedMessage.type) {
            case App.TYPE_ANIMATION:
                command = new AnimationCommand(parsedMessage);
                break;
            case App.TYPE_CAMERA:
                command = new CameraCommand(parsedMessage);
                break;
            case App.TYPE_SPEECH:
                command = new SpeechCommand(parsedMessage);
                break;
            case App.TYPE_LIST_ANIMATION:
                command = new ListAnimationCommand(parsedMessage);
                break;
            case App.TYPE_IS_SPEAKING:
                command = new IsSpeakingCommand(parsedMessage);
                break;
            default:
                command = new DummyCommand(parsedMessage);
                break;
        }
        return command;

    }
}
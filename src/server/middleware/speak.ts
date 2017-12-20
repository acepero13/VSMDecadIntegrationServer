import {Middleware} from './middleware';
import { Emitter } from './../../../src/server/utils/emitter';
export class Speak implements Middleware{
    emitter: Emitter;
    speak(req: any, res: any): any {
        let messageToSend = '{"type": "speech", "speech": "' + req.params.text + '"}';
        this.emitter.emit(messageToSend);
        res.send('Speaking...');
    }
    register(app: any, emitter: Emitter): void {
        this.emitter = emitter;
        app.get('/speak/:text', this.speak.bind(this));
    }

}
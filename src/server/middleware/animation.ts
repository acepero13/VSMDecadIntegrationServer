import {Middleware} from './middleware';
import { Emitter } from '../utils/emitter';
export class Animation implements Middleware{
    emitter: Emitter;
    register(app: any, emitter: Emitter): void {
        this.emitter = emitter;
        app.get('/animate/:text', this.animate.bind(this));
    }

    animate(req: any, res: any): any {
        let messageToSend = '{"type": "animation", "name": "' + req.params.text + '"}';
        this.emitter.emit(messageToSend);
        res.send('Animating...');
    }

}
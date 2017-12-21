import {Middleware} from './middleware';
import { Emitter } from '../utils/emitter';
export class Animation implements Middleware{
    emitter: Emitter;
    register(app: any, emitter: Emitter): void {
        this.emitter = emitter;
        app.get('/animation/animate/:text', this.animate.bind(this));
        app.get('/animation/list', this.listAnimations.bind(this));

    }

    animate(req: any, res: any): any {
        let messageToSend = '{"type": "animation", "name": "' + req.params.text + '"}';
        this.emitter.emit(messageToSend);
        res.send('Animating...');
    }

    listAnimations(req: any, res: any): void{
        let messageToSend = '{"type": "list", "name": "animations"}';
        this.emitter.emit(messageToSend);
        this.emitter.waitFor('on List Animations', this.sendResponse.bind(this, res));
        
    }

    sendResponse(res: any, response: string){
        res.send(response);
    }

}
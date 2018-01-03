import { Middleware } from './middleware';
import { Emitter } from './../../../src/server/utils/emitter';
const onIsSpeakingEvent: string = 'onIsSpeaking';
export class Speak implements Middleware {
    emitter: Emitter;
    speak(req: any, res: any): any {
        let messageToSend = '{"type": "speech", "speech": "' + req.params.text + '"}';
        this.emitter.emit(messageToSend);
        res.send('Speaking...');
    }
    register(app: any, emitter: Emitter): void {
        this.emitter = emitter;
        app.get('/speech/speak/:text', this.speak.bind(this));
        app.post('/speech/speak', this.postSpeak.bind(this));
        app.get('/speech/isSpeaking', this.isSpeaking.bind(this));
    }

    postSpeak(req: any, res: any): any {
        console.log('POST SPEAKING')
        let messageToSend = '{"type": "speech", "speech": "' + req.body.text + '"}';
        this.emitter.emit(messageToSend);
        res.send('Speaking...');
    }

    isSpeaking(req: any, res: any): any{
        let messageToSend = '{"type": "isSpeaking", "event": "' + onIsSpeakingEvent + '"}';
        this.emitter.emit(messageToSend);
        this.emitter.waitFor(onIsSpeakingEvent, this.sendResponse.bind(this, res));
        return;
    }

    sendResponse(res: any, response: string){
        console.log(response);
        res.send('' + response + '');
        this.emitter.removeEvent(onIsSpeakingEvent);
        return;
        
    }

}
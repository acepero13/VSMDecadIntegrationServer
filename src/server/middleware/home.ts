import { Middleware } from "./middleware";
import { Emitter } from "./../../../src/server/utils/emitter";

var path = require('path');
export class Home implements Middleware {
    emitter: Emitter;

    register(app: any, emitter: Emitter): void {
        this.emitter = emitter;
        app.get('/', this.home);
    }


    home(req: any, res: any) {
        res.sendFile(path.join(__dirname + '/../../../../index.html'));
    }
}
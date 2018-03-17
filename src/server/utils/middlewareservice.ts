import { Middleware } from '../middleware/middleware';
import { Home } from '../middleware/home';
import { Assets } from '../middleware/assets';
import { Speak } from '../middleware/speak';
import { Emitter } from './../../../src/server/utils/emitter';
import { Animation } from '../middleware/animation';
export class MiddlewareInitializator {
    emitter: Emitter;
    app: any;
    middlewares: Array<Middleware>;
    constructor(app: any, emitter: Emitter) {
        this.app = app;
        this.middlewares = new Array();
        this.emitter = emitter;

    }

    private addMiddlewares() {
        this.middlewares.push(new Home());
        this.middlewares.push(new Assets());
        this.middlewares.push(new Speak());
        this.middlewares.push(new Animation());
    }

    public initialize() {
        this.addMiddlewares();
        this.registerMiddlewares();
    }

    private registerMiddlewares() {
        this.middlewares.forEach((middleware: Middleware) => {
            middleware.register(this.app, this.emitter);
        });
    }
}
import {Middleware} from '../middleware/middleware';
import {Home} from '../middleware/home';
import {Assets} from '../middleware/assets';
export class MiddlewareInitializator {
    app: any;
    middlewares: Array<Middleware>;
    constructor(app: any){
        this.app = app;
        this.middlewares = new Array();
        
    }

    private addMiddlewares() {
        this.middlewares.push(new Home());
        this.middlewares.push(new Assets());
    }

    public initialize(){
        this.addMiddlewares();
        this.registerMiddlewares();
    }

    private registerMiddlewares() {
        this.middlewares.forEach((middleware: Middleware) => {
            middleware.register(this.app);
        });
    }
}
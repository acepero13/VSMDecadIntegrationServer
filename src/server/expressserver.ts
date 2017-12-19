var path = require('path');
var express = require('express');
import {Home} from './middleware/home';
import {Assets} from './middleware/assets';
import {MiddlewareInitializator} from './utils/middlewareservice';

export class ExpressServer {
    
    express: any;
    private app: any;
    private port: number;
    private middlewareInitializer: MiddlewareInitializator;

    public constructor(port?: number){
        this.initilizePort(port);
        this.app = express();
        
    }
    

    private initilizePort(port: number) {
        if (!port) {
            port = 8080;
        }
        this.port = port;
    }

    public setExpress(expressDependency: any){
        this.app = expressDependency;
    }

    
    start(): any {   
        this.app.listen(this.port);
        this.initializeMiddlewares();
        
    
    }

    private initializeMiddlewares() {
        this.middlewareInitializer = new MiddlewareInitializator(this.app);
        this.middlewareInitializer.initialize();
    }

    public getPort() {
        return this.port;
    }

}
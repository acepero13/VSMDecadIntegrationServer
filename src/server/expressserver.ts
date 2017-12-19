var path = require('path');
var express = require('express');
import { Home } from './middleware/home';
import { Assets } from './middleware/assets';
import { MiddlewareInitializator } from './utils/middlewareservice';
import {Emitter} from './utils/emitter';
export class ExpressServer {
    server: any;
    emitter: any;

    express: any;
    private app: any;
    private port: number;
    private middlewareInitializer: MiddlewareInitializator;

    public constructor(port?: number) {
        this.initilizePort(port);
        this.app = express();
        this.server  = require('http').Server(this.app);
        this.initializeEmitter();
        
    }


    private initilizePort(port: number) {
        if (!port) {
            port = 8080;
        }
        this.port = port;
    }


    public setServer(server: any, app: any) {
        this.server = server;
        this.app = app;
    }

    public setEmitter(emitter: Emitter){
        this.emitter = emitter;
    }

    start(): any {
        this.server.listen(this.port);
        this.initializeMiddlewares();
        
    }

    private initializeEmitter() {
        this.emitter = new Emitter(this.server);
        this.emitter.registerConnectionEvent();
    }

    private initializeMiddlewares() {
        this.middlewareInitializer = new MiddlewareInitializator(this.app);
        this.middlewareInitializer.initialize();
    }

    public getPort() {
        return this.port;
    }

}
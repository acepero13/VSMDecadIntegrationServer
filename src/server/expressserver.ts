var path = require('path');
var express = require('express');
import { Home } from './middleware/home';
import { Assets } from './middleware/assets';
import { MiddlewareInitializator } from './utils/middlewareservice';
import {Emitter} from './utils/emitter';
import { App } from '../../src/constants';
var bodyParser     =        require("body-parser");
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
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.server  = require('http').Server(this.app);
        this.initializeEmitter();
        
    }


    private initilizePort(port: number) {
        if (!port) {
            port = App.PORT;
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
        this.middlewareInitializer = new MiddlewareInitializator(this.app, this.emitter);
        this.middlewareInitializer.initialize();
    }

    public getPort() {
        return this.port;
    }

}
var path = require('path');
var express = require('express');


export class ExpressServer {
    
    express: any;
    private app: any;
    private port: number;

    public constructor(port?: number){
        this.initilizePort(port);
        this.app = express();
        this.loadAssets();
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
        this.app.get('/', function (req: any, res: any) {
            console.log('AAAAAAAA');
            res.sendFile(path.join(__dirname + '/../../../index.html'));
        });
    }

    public getPort() {
        return this.port;
    }

    loadAssets(): any {
        this.app.use("/public", express.static(__dirname + '/../../../'));
        this.app.use("/code",   express.static(__dirname + '/../../../out/src/'));
    }





}
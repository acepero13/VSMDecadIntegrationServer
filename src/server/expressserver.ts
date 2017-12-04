var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);  


export class ExpressServer{

    private io: any; 
    private client :any; //At the moment only one client is supported
    connect(): any {
        console.log(__dirname);
        this.loadPage();
        this.loadAssets();
        server.listen(8080);
        this.registerConnectionEvent();
    }
    public constructor(){
        this.io = require('socket.io')(server);
        this.connect();
    }

    private registerConnectionEvent() {
        let that = this;
        this.io.on('connection', function (client: any) {
            console.log('Client connected');
            that.client = client;
            client.emit('ready', 'Hello from server');
        });
    }

    public sendMessageToClient(message: string){
        console.log('Emitting...');
        this.client.emit('new message', message);
    }

    private loadAssets() {
        app.use("/public", express.static(__dirname + '/../../../'));
        app.use("/code",   express.static(__dirname + '/../../../out/src/'));
    }

    private loadPage() {
        app.get('/', function (req: any, res: any) {
            res.sendFile(path.join(__dirname + '/../../../index.html'));
        });
    }
}
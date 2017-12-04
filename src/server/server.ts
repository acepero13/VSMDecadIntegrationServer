/// <reference path="./../../node_modules/@types/node/index.d.ts" />
var dgram = require('dgram');
import { UDPSend } from "./udpsend";
import {WebServer} from './webserver';
import {ExpressServer} from './expressserver';
import { JsonParser } from "./../parser/json/jsonparser";
import { Executor } from "./../executors/executor";

export class Server{
    executor: Executor;
    parser: JsonParser;
    sender: UDPSend;
    
    static readonly PORT = 15000;                           
    static readonly HOST = '0.0.0.0';   
    private server: any;
    private webserver: ExpressServer;
    
    public constructor(){
        this.server = dgram.createSocket('udp4');
        this.sender = new UDPSend(Server.PORT);
        this.webserver = new ExpressServer(); 
        
    }
    public connect() :void{
        this.server.bind(Server.PORT, Server.HOST);  
        this.startListening();
        this.startReceiving();
    }                   
     
    startListening(): void {
        this.server.on('listening', function () {
            console.log('UDP Server listening....');
        });
    }
       
     
    startReceiving(): void {
        let webserver = this.webserver;
        
        this.server.on('message', function (message: string, remote: any) {
            console.log('UDP message: '+ message);
            message = message.toString().replace(/(\r\n|\n|\r)/gm,"");
            let messageToSend = '{"type": "speech", "speech": "' + message + '"}';
            console.log(messageToSend);
            webserver.sendMessageToClient(messageToSend);
            
            //sender.send(message, remote.address);
        });
    }
    
       
}

let server = new Server();
server.connect();

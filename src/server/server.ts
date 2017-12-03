/// <reference path="./../../node_modules/@types/node/index.d.ts" />
var dgram = require('dgram');
import { UDPSend } from "./udpsend";

export class Server{
    sender: UDPSend;
    
    static readonly PORT = 15000;                           
    static readonly HOST = '0.0.0.0';   
    private server: any;
    
    public constructor(){
        this.server = dgram.createSocket('udp4');
        this.sender = new UDPSend(Server.PORT); 
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
        let sender = this.sender;
        this.server.on('message', function (message: string, remote: any) {
            console.log(remote.address + ':' + remote.port +' - ' + message);
            //sender.send(message, remote.address);
        });
    }
    
       
}

let server = new Server();
server.connect();

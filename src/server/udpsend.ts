/// <reference path="./../../node_modules/@types/node/index.d.ts" />
var dgram = require('dgram');
export class UDPSend {
    private port: number;

    public constructor(port: number){
        this.port = port;
    }
    public send(message: string, address: string){
        let client = dgram.createSocket('udp4'); // Neuen Socket zum Client aufbauen
        let messageToSend = new Buffer(message);
        client.send(messageToSend, 0, message.length, this.port, address, function(err: any, bytes: any) 
        {
            console.log('UDP message sent to ' + this.port +':'+ address); // Ausgabe der Nachricht
            client.close(); // Bei erfolgreichen Senden, die Verbindung zum CLient schließen
        });
    }
}
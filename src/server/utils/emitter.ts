import { App } from '../../constants';
export class Emitter {
    io: any;
    client: any;
    clients: Array<any>;
    events: Array<string>;

    private server: any;


    constructor(server: any) {
        this.server = server;
        this.clients = new Array();
        this.events = new Array();
        this.initIO();

    }

    protected initIO() {
        this.io = require('socket.io')(this.server);
    }
    setClient(client: any): void {
        this.client = client;
        this.clients.push(client);
    }


    emit(message: string): void {
        console.log('Emitting...' + message);
        this.client.emit(App.IO_REQUEST_NOTIFICATION, message);
    }

    setIO(io: any): any {
        this.io = io;
    }

    public registerConnectionEvent() {
        this.io.on(App.IO_CONNECTED_NOTIFICATION, this.notifyConnection.bind(this));
    }

    private notifyConnection(client: any) {
        this.client = client;
        this.clients.push(client);
    }

    public waitFor(event: string, callback: any): void {
        this.events.push(event);
        this.client.on(event, this.callEvent.bind(this, callback));
    }

    private callEvent(callback: any, message: string): any {
        return callback(message);
    }

    public removeEvent(event: any): void {
        this.client.removeAllListeners(event);
    }



}
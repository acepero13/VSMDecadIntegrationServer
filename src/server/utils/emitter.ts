export class Emitter{          
    io: any;
    client: any;
    clients: Array<any>;

    private server: any;
  
    
    constructor(server: any){
        this.server = server;
        this.clients = new Array();
        this.initIO();
        
    }

    protected initIO(){
        this.io = require('socket.io')(this.server);
    }
    setClient(client: any): void {
        this.client = client;
        this.clients.push(client);
    }

    
    emit(message: string): void {
        console.log('Emitting...'+ message);
        this.clients.forEach(function(client: any, index: number){
            client.emit('new request', message);
        })
    }

    setIO(io: any): any {
        this.io = io;
    }

    public registerConnectionEvent() {
        this.io.on('connection', this.notifyConnection.bind(this));
    }

    private notifyConnection(client: any){
        this.client = client;
        this.clients.push(client);
    }



}
export class Emitter{          
    io: any;
    client: any;

    private server: any;
  
    
    constructor(server: any){
        this.server = server;
        this.initIO();
        
    }

    protected initIO(){
        this.io = require('socket.io')(this.server);
    }
    setClient(client: any): void {
        this.client = client;
    }

    
    emit(message: string): void {
        this.client.emit('new request', message);
    }

    setIO(io: any): any {
        this.io = io;
    }

    public registerConnectionEvent() {
        this.io.on('connection', this.notifyConnection);
    }

    private notifyConnection(client: any){
        this.client = client;
        console.log('Hola mundo')
        client.emit('ready', 'Hello from server');
    }



}
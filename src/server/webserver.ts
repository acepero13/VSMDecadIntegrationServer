var http = require('http');

var fs = require('fs');

export class WebServer {

    private server: any;
    private io: any;



    public constructor() {
        console.log('AAA');
        this.server = http.createServer(this.createServer);
        this.io = require('socket.io').listen(this.server);
        this.startListening();
    }

    createServer(req: any, res: any): any {
        console.log('Creating web server... ');
        fs.readFile('/home/alvaro/Documents/Projects/Hiwi/AnnaServer/index.html', 'utf-8', function (error: any, content: any) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content);

        });
    }

    startListening(): any {
        this.io.sockets.on('connection', function (socket:any) {

            console.log('A client is connected!');

        });
        this.server.listen(8080);
        console.log('listening');

    }





    
}
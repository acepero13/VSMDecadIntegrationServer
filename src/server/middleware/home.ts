import { Middleware } from "./middleware";

var path = require('path');
export class Home implements Middleware {
    
    register(app: any) {
        app.get('/', this.home);
    }
    

    home(req: any, res: any) {
        res.sendFile(path.join(__dirname + '/../../../../index.html'));
    }
}
import {ExpressServer} from './expressserver';
import {App} from './../../src/constants';
let server = new ExpressServer(App.PORT);
server.start();
import { Middleware } from "./middleware";
var express = require('express');
export class Assets implements Middleware{
    register(app: any) {
        app.use("/public", express.static(__dirname + '/../../../../'));
        app.use("/code",   express.static(__dirname + '/../../../../out/src/'));
    }
    
}
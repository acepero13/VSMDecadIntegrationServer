import { Middleware } from "./middleware";
import { Emitter } from "./../../../src/server/utils/emitter";
import { emit } from "cluster";
var express = require('express');

export class Assets implements Middleware {
    emitter: Emitter;
    register(app: any, emitter: Emitter) {
        this.emitter = emitter;
        app.use("/public", express.static(__dirname + '/../../../../'));
        app.use("/code", express.static(__dirname + '/../../../../out/src/'));
    }

}
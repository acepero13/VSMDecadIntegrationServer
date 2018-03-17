import { Emitter } from "./../../../src/server/utils/emitter";

export interface Middleware {
    emitter: Emitter;
    register(app: any, emitter: Emitter): void;
}
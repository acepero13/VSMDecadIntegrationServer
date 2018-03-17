import { Emitter } from "./../../src/server/utils/emitter";

export class FakeEmitter extends Emitter {
    public constructor(app: any) {
        super(app);
    }
    protected initIO() {
    }
}
import { expect } from 'chai';
import * as chai from 'chai';
import 'mocha';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

import { Emitter } from './../../../src/server/utils/emitter';
import { FakeEmitter } from './../../fakes/fakeEmitter';
import { App } from '../../../src/constants';


chai.should();
chai.use(sinonChai);
let spyClient: any;
let fakeClient: any;
let spyOn: any;
let fakeIO: any;

describe('Test emitter', () => {

    beforeEach(() => {
        spyClient = sinon.spy();
        spyOn = sinon.spy();
        fakeClient = {
            emit: spyClient
        };
        fakeIO = {
            on: spyOn
        }
    });

    it('should emit connected notification', () => {
        const message: string = 'Hello world';
        let fakeServer = sinon.stub();
        let emitter = new FakeEmitter(fakeServer);
        emitter.setClient(fakeClient);
        emitter.emit(message);
        spyClient.should.have.been.calledWith(App.IO_REQUEST_NOTIFICATION, message);
    });


    it('should register on connection', () => {

        const message: string = 'Hello world';
        let fakeServer = sinon.stub();
        let emitter = new FakeEmitter(fakeServer);
        emitter.setClient(fakeClient);
        emitter.setIO(fakeIO);
        emitter.registerConnectionEvent();
        emitter.emit(message);
        spyOn.should.have.been.calledWith(App.IO_CONNECTED_NOTIFICATION);

    });
});
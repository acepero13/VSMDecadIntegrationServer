import { expect } from 'chai';
import * as chai from 'chai';
import 'mocha';
import 'sinon';
import * as sinonChai from 'sinon-chai';
import { ExpressServer } from './../../src/server/expressserver';
import * as sinon from 'sinon';
import { FakeEmitter } from '../fakes/fakeEmitter';
import { App } from '../../src/constants';

const fakeHttpServer = {};
let server: any;
let spyExpressGet: any;
let spyExpressPost: any;
let stubExpressListen: any;
let fakeExpress: any;
let stubExpress: any;
let spyExpressUse: any;
let port: number;
chai.should();
chai.use(sinonChai);

describe('Mocked server', () => {
    beforeEach(function () {
        stubExpressListen = sinon.stub();
        spyExpressGet = sinon.spy();
        spyExpressPost = sinon.spy();
        spyExpressUse = sinon.spy();
        server = new ExpressServer();
        fakeExpress = {
            get: spyExpressGet,
            listen: stubExpressListen,
            use: spyExpressUse,
            post: spyExpressPost
        };

        stubExpressListen.returns(fakeHttpServer);

    })


    it('should listen on default port 5005', () => {
        startServer();
        stubExpressListen.should.have.been.calledWithExactly(App.PORT);
    });

    it('should listen on specified port 5000', () => {
        port = 5000;
        startServer(port);
        stubExpressListen.should.have.been.calledWithExactly(port);
    });

    it('should load index page', () => {
        startServer();
        spyExpressGet.should.have.been.calledWith('/');
    });

    it('should load index page', () => {
        startServer();
        spyExpressGet.should.have.been.calledWith('/speech/speak/:text');
    });

    it('should load assets', () => {
        startServer();
        spyExpressUse.should.have.been.calledWith('/public');
        spyExpressUse.should.have.been.calledWith('/code');
    });
});

function startServer(port?: any) {
    server = new ExpressServer(port);
    server.setServer(fakeExpress, fakeExpress);
    server.setEmitter(new FakeEmitter(fakeExpress));
    let returnedServer = server.start();
}

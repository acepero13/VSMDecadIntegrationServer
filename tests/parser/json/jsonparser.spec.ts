import {expect} from 'chai';
import 'mocha';
import { JsonParser } from './../../../src/parser/json/jsonparser';
import { AnimationCommand } from './../../../src/commands/animationcommand';
import { CameraCommand } from './../../../src/commands/cameracommand';
import { DummyCommand } from './../../../src/commands/dummycommand';

describe('Parser without json data', () => {
    it('on parseMessage  should not be null on parse with valid json', () => {
       let parser = new JsonParser();
       expect(() => {parser.parseMessage('')}).to.throw('Cannot parse empty message');
    });
});

describe('Parser with valid data', () => {
    it('on parseMessage with type animation should return AnimationCommand instance ', () => {
        let parser = new JsonParser();
        let res = parser.parseMessage('{"type": "animation", "name": "angry"}');
        expect(res).to.be.instanceof(AnimationCommand);
    });

    it('on parseMessage with type camera should return CameraCommand instance', () => {
        let parser = new JsonParser();
        let res = parser.parseMessage('{"type": "camera", "name": "closeUp"}')
        expect(res).to.be.instanceof(CameraCommand);
    });

    it('on parseMessage without type should return DummyCommand instance', () => {
        let parser = new JsonParser();
        let res = parser.parseMessage('{"name": "InvalidCommand"}');
        expect(res).to.be.instanceof(DummyCommand);
    });
});


import {expect} from 'chai';
import 'mocha';

import { JsonParser } from './/../../src/parser/json/jsonparser';
import { SpeechCommand } from './../../src/commands/speechcommand';
import { Executor } from '../../src/executors/executor';
import { ServiceLocator } from '../../src/utils/servicelocator';
import { FakeGameInstance } from '../fakes/fakegame';
import {App} from '../../src/constants';


describe('Test Speak command', () => {
    it('on execute without service locator should return false', () => {
        let executor = makeExecutor();
        let res = executor.execute('{"type": "speech", "speech": "Hello, sample text"}');
        expect(res).to.be.false;
    });

    it('on execute with service locator should return true', () => {
        ServiceLocator.getInstance().register('gameInstance', new FakeGameInstance());
        let executor = makeExecutor();
        let res = executor.execute('{"type": "speech", "speech": "Hello, sample text"}');
        expect(res).to.be.true;
    });

    it('on execute with service locatorshould return true', () => {
        let fakeGame = new FakeGameInstance();
        let expectedText = 'Hello, my name is Anna';
        ServiceLocator.getInstance().register(App.GAME_INSTANCE, fakeGame);
        let executor = makeExecutor();
        let res = executor.execute('{"type": "speech", "speech": "' + expectedText+ '"}');
        expect(fakeGame.params).to.be.equals(expectedText);
    });
});

function makeExecutor() {
    let parser = new JsonParser();
    return new Executor(parser);
}

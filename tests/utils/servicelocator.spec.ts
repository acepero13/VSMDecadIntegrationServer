import {expect} from 'chai';
import 'mocha';
import { ServiceLocator } from "../../src/utils/servicelocator";


describe('Test service locator', () => {
    it('on register should add new instance', () => {
        let expected = new String('Hello'); 
        ServiceLocator.getInstance().register('myString', expected);
        let res = ServiceLocator.getInstance().resolve('myString');
        expect(res).to.be.equals(expected);
    });

    it('on register two instances with the same key should return the latest', () => {
        let expected = new String('Hello'); 
        ServiceLocator.getInstance().register('myString', new String('First Object'));
        ServiceLocator.getInstance().register('myString', expected);
        let res = ServiceLocator.getInstance().resolve('myString');
        expect(res).to.be.equals(expected);
    });

    it('on resolve non existing instance should return error', () => {
        ServiceLocator.getInstance().register('myString', new String('randomObject'));
        expect(() => {ServiceLocator.getInstance().resolve('nonExistingService')}).to.throw('Could not locate service');
    });
});
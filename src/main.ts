import {JsonParser} from './parser/json/jsonparser';
import {Executor} from './executors/executor';
import { ServiceLocator } from './utils/servicelocator';
import {App} from './constants';
export class Main{


    public static process(message: string, gameInstance: any){
        console.log('Processing:' + message);
        ServiceLocator.getInstance().register(App.GAME_INSTANCE, gameInstance);
        let parser = new JsonParser();
        let executor = new Executor(parser);
        executor.execute(message);
    }
}
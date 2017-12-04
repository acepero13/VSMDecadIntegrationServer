import {JsonParser} from './parser/json/jsonparser';
import {Executor} from './executors/executor';
import { ServiceLocator } from './utils/servicelocator';
export class Main{


    public static process(message: string, gameInstance: any){
        ServiceLocator.getInstance().register('gameInstance', gameInstance);
        let parser = new JsonParser();
        let executor = new Executor(parser);
        executor.execute(message);
    }
}
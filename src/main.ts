import {JsonParser} from './parser/json/jsonparser';
import {Executor} from './executors/executor';
import { ServiceLocator } from './utils/servicelocator';
import {App} from './constants';
export class Main{
    
    static module: any = null;


    public static process(message: string, gameInstance: any){
       
        
        ServiceLocator.getInstance().register(App.GAME_INSTANCE, gameInstance);
        let parser = new JsonParser();
        let executor = new Executor(parser);
        executor.execute(message);
    }

    private static getModule(gameInstance: any){
        if(Main.module === null){
            Main.module = gameInstance.Module;
        }
        return Main.module;
    }
    public static getHost(){
        return App.HOST;
    }

    public static register(name: string, func: any){
        console.log('registering...');
            console.log("Setup Public API: Wrapping functions...");
            ServiceLocator.getInstance().register(name, func);
          
    }
}
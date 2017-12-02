import { ServiceLocator } from "../utils/servicelocator";
import { JsonParser } from "../parser/json/jsonparser";

export class Executor{
    parser: JsonParser;
        
    public constructor(parser: JsonParser){
        this.parser = parser;
    }
    
    public execute(message: string): boolean {
        try{
            let gameInstance = this.getGameInstance();
            let commandMessage = this.parser.parseMessage(message);
            commandMessage.execute(gameInstance);
        }catch(err){
            return false;
        }
        return true;
    }



    private getGameInstance():any {
        return ServiceLocator.getInstance().resolve('gameInstance');
    }
}
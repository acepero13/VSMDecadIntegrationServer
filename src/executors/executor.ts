import { ServiceLocator } from "../utils/servicelocator";
import { JsonParser } from "../parser/json/jsonparser";

export class Executor{
    parser: JsonParser;
        
    public constructor(parser: JsonParser){
        this.parser = parser;
    }
    
    public execute(message: string): boolean {
        try{
            this.tryToExecute(message);
        }catch(err){
            console.log(err);
            return false;
        }
        return true;
    }

    private tryToExecute(message: string) {
        let gameInstance = this.getGameInstance();
        let commandMessage = this.parser.parseMessage(message);
        commandMessage.execute(gameInstance);
    }

    private getGameInstance():any {
        return ServiceLocator.getInstance().resolve('gameInstance');
    }
}
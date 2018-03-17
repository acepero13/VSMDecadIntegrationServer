export class FakeGameInstance {
    animationObj: string;
    functionName: string;
    public params = '';

    public SendMessage(animationObj: string, functionName: string, params: any) {
        this.params = params;
        this.functionName = functionName;
        this.animationObj = animationObj;
    }
}
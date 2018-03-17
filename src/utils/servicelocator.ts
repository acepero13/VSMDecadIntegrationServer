export class ServiceLocator {

    private static instance: ServiceLocator = null;
    private services: Map<string, any>;
    private constructor() {
        this.services = new Map();
    }

    static getInstance(): ServiceLocator {
        if (ServiceLocator.instance === null) {
            ServiceLocator.instance = new ServiceLocator();
        }
        return ServiceLocator.instance;
    }

    public register(serviceName: string, newObject: any) {
        this.services.set(serviceName, newObject);
    }

    public resolve(serviceName: string): any {
        if (this.serviceDoesNotExists(serviceName)) {
            throw new Error('Could not locate service');
        }
        return this.services.get(serviceName);
    }

    private serviceDoesNotExists(serviceName: string) {
        return !this.services.has(serviceName);
    }
}
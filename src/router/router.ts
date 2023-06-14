

export class Router {
    private routes: {path: string; component: new () => any}[];

    constructor() {
        this.routes = [];
    }

    get getAllRoutes() {
        return this.routes;
    }

    addRoute(path: string, component: new () => any): void {
        this.routes.push({path, component});
    }

    navigate(path: string): void {
        const route = this.routes.find(r => r.path === path);

        if(route) {
            const component = new route.component();
            component.render();

        }else {
            console.error("Route not found")
        }

    }

    



}
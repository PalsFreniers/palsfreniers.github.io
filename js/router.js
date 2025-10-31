"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
class Router {
    constructor() {
        this.routes = new Map();
    }
    add(route, page) {
        this.routes[route] = page;
    }
    handleRoute() {
        const route = window.location.pathname;
        if (!this.routes.has(route)) {
            console.warn(`unable to find route ${route}`);
            this.warp('/404');
        }
        const DOM = this.routes[route].make();
        const app = document.getElementById('app');
        if (app == null)
            return;
        app.innerHTML = DOM;
    }
    warp(route = null) {
        if (route)
            history.pushState(null, '', route);
        this.handleRoute();
    }
}
exports.Router = Router;

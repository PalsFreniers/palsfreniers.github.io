import { Page } from './page.js';

export class Router {
        routes: Map<string, Page> = new Map();

        constructor() {

        }

        public add(route: string, page: Page): void {
                this.routes[route] = page;
        }

        handleRoute(): void {
                const route: string = window.location.pathname;
                if(!this.routes.has(route)) {
                        console.warn(`unable to find route ${route}`);
                        this.warp('/404');
                }
                const DOM: string = this.routes[route].make();
                const app: HTMLElement | null = document.getElementById('app');
                if(app == null) return;
                app.innerHTML = DOM;
        }

        public warp(route: string): void {
                history.pushState(null, '', route);
                this.handleRoute();
        }
}

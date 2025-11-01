var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Router {
    constructor() {
        this.routes = new Map();
    }
    add(route, page) {
        this.routes[route] = page;
    }
    handleRoute() {
        return __awaiter(this, void 0, void 0, function* () {
            const route = window.location.pathname;
            if (!(route in this.routes)) {
                console.warn(`unable to find route ${route}`);
                this.warp('/404');
            }
            const DOM = yield this.routes[route].make();
            const app = document.getElementById('app');
            if (app == null)
                return;
            app.innerHTML = DOM;
        });
    }
    warp() {
        return __awaiter(this, arguments, void 0, function* (route = null) {
            if (route)
                history.pushState(null, '', route);
            this.handleRoute();
        });
    }
}

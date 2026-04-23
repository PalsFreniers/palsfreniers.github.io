var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Router {
    constructor() {
        this.routes = new Map();
        window.addEventListener('popstate', (e) => {
            var _a, _b, _c;
            const route = (_b = (_a = e.state) === null || _a === void 0 ? void 0 : _a.route) !== null && _b !== void 0 ? _b : '/';
            const arg = (_c = e.state) === null || _c === void 0 ? void 0 : _c.arg;
            this.warp(route, arg, false);
        });
    }
    add(route, page) {
        this.routes[route] = page;
    }
    warp() {
        return __awaiter(this, arguments, void 0, function* (route = null, arg, pushState = true) {
            if (!route) {
                this.warp('/');
                return;
            }
            if (!(route in this.routes)) {
                console.warn(`unable to find route ${route}`);
                this.warp('/404');
            }
            if (pushState) {
                history.pushState({ route, arg }, '', route);
            }
            const DOM = yield this.routes[route].make(arg);
            const app = document.getElementById('app');
            if (app == null)
                return;
            app.innerHTML = DOM;
            const links = document.getElementsByTagName('a');
            for (let i = 0; i < links.length; i++) {
                const val = links[i];
                const href = val.getAttribute('href');
                if (href === null || href === void 0 ? void 0 : href.startsWith('https://'))
                    continue;
                if (href === null || href === void 0 ? void 0 : href.startsWith('mailto:'))
                    continue;
                if (href === null || href === void 0 ? void 0 : href.startsWith('tel:'))
                    continue;
                val.addEventListener('click', (e) => {
                    e.preventDefault();
                    const url = val.getAttribute('href');
                    if (url) {
                        this.warp(url);
                    }
                });
            }
            yield this.routes[route].postMake(arg);
        });
    }
}
export default Router;

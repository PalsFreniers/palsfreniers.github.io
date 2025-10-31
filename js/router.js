"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.prototype.add = function (route, page) {
        this.routes[route] = page;
    };
    Router.prototype.handleRoute = function () {
        var route = window.location.pathname;
        if (!this.routes.has(route)) {
            console.warn("unable to find route ".concat(route));
            this.warp('/404');
        }
        var DOM = this.routes[route].make();
        var app = document.getElementById('app');
        if (app == null)
            return;
        app.innerHTML = DOM;
    };
    Router.prototype.warp = function (route) {
        history.pushState(null, '', route);
        this.handleRoute();
    };
    return Router;
}());
exports.Router = Router;

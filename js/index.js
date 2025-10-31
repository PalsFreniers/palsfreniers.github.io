define("page", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Page = void 0;
    class Page {
        constructor(maker) {
            this.dom = maker;
        }
        make() {
            return this.dom();
        }
    }
    exports.Page = Page;
});
define("router", ["require", "exports"], function (require, exports) {
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
});
define("pages/index", ["require", "exports", "page"], function (require, exports, page_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Index = void 0;
    exports.Index = new page_js_1.Page(() => {
        return `
        <p>Hello You!</p>
        `;
    });
});
define("pages/errors", ["require", "exports", "page"], function (require, exports, page_js_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.E404 = void 0;
    exports.E404 = new page_js_2.Page(() => {
        return `
        <h1>404 not founded</h1>
        `;
    });
});
define("index", ["require", "exports", "router", "pages/index", "pages/errors"], function (require, exports, router_js_1, index_js_1, errors_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.start = start;
    const nav = new router_js_1.Router();
    function start() {
        nav.add('/', index_js_1.Index);
        nav.add('/home', index_js_1.Index);
        nav.add('/404', errors_js_1.E404);
        window.addEventListener('DOMContentLoaded', async () => {
            document.body.addEventListener('click', (e) => {
                const target = e.target;
                if (target.matches('a[data-link]')) {
                    e.preventDefault();
                    const url = target.getAttribute('href');
                    if (url) {
                        nav.warp(url);
                    }
                }
            });
            window.addEventListener('popstate', () => {
                nav.warp();
            });
            nav.warp();
        });
    }
});

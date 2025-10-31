define(["require", "exports", "./router.js", "./pages/index.js", "./pages/errors.js"], function (require, exports, router_js_1, index_js_1, errors_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const nav = new router_js_1.Router();
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
});

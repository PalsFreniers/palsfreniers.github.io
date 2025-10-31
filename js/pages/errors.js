define(["require", "exports", "../page.js"], function (require, exports, page_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.E404 = void 0;
    exports.E404 = new page_js_1.Page(() => {
        return `
        <h1>404 not founded</h1>
        `;
    });
});

define(["require", "exports"], function (require, exports) {
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

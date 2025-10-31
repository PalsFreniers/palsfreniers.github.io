"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var Page = /** @class */ (function () {
    function Page(maker) {
        this.dom = maker;
    }
    Page.prototype.make = function () {
        return this.dom();
    };
    return Page;
}());
exports.Page = Page;

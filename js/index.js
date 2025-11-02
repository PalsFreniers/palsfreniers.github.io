var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from './router.js';
import { Index } from './pages/index.js';
import { E404 } from './pages/errors.js';
const nav = new Router();
nav.add('/', Index);
nav.add('/home', Index);
nav.add('/404', E404);
window.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    document.getElementsByName('a').forEach((val) => {
        val.addEventListener('click', (e) => {
            e.preventDefault();
            const url = val.getAttribute('href');
            if (url) {
                nav.warp(url);
            }
        });
    });
    window.addEventListener('popstate', () => {
        nav.warp();
    });
    nav.warp();
}));

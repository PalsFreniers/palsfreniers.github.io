import { Router } from './router.js';
import { Index } from './pages/index.js';
import { E404 } from './pages/errors.js';
const nav = new Router();
nav.add('/', Index);
nav.add('/home', Index);
nav.add('/404', E404);
document.getElementsByName('a').forEach((val) => {
    console.log(val);
    val.addEventListener('click', (e) => {
        e.preventDefault();
        const url = val.getAttribute('href');
        if (url) {
            nav.warp(url);
        }
    });
});
nav.warp();

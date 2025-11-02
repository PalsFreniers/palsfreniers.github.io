import Router from './router.js';
import Index from './pages/index.js';
import * as Errors from './pages/errors.js';
import Contact from './pages/contact.js';
const nav = new Router();
nav.add('/', Index);
nav.add('/home', Index);
nav.add('/404', Errors.E404);
nav.add('/contact', Contact);
if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "fr");
}
nav.warp();

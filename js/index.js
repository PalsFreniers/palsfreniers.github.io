import Router from './router.js';
import Index from './pages/index.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';
import * as Errors from './pages/errors.js';
export const nav = new Router();
nav.add('/', Index);
nav.add('/home', Index);
nav.add('/404', Errors.E404);
nav.add('/contact', Contact);
nav.add('/projects', Projects);
if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "fr");
}
nav.warp();

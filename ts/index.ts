import Router from './router.js';
import Index from './pages/index.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';
import Project from './pages/project.js';
import * as Errors from './pages/errors.js';

export const nav: Router = new Router();

nav.add('/', Index);
nav.add('/home', Index);
nav.add('/contact', Contact);
nav.add('/projects', Projects);
nav.add('/project', Project);
nav.add('/404', Errors.E404);
nav.add('/403', Errors.E403);
nav.add('/500', Errors.E500);

if(!localStorage.getItem("lang")) {
	localStorage.setItem("lang", "fr");
}

requestAnimationFrame(() => {
	nav.warp(document.location.pathname);
});

import { Router } from './router.js';
import { Index } from './pages/index.js';
import { E404 } from './pages/errors.js';

const nav: Router = new Router();

nav.add('/', Index);
nav.add('/home', Index);
nav.add('/404', E404);

nav.warp('/');

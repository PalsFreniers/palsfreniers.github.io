import Page from './page.js';
import { toggleTheme } from './component/theme.js';

class Router {
	routes: Map<string, Page> = new Map();

	constructor() {
		window.addEventListener('popstate', (e: PopStateEvent) => {
			const route: string = e.state?.route ?? '/';
			const arg: any = e.state?.arg;
			this.warp(route, arg, false);
		});
	}

	public add(route: string, page: Page): void {
		this.routes[route] = page;
	}

	public async warp(route: string | null = null, arg?: any, pushState: boolean = true): Promise<void> {
		if(!route) {
			this.warp('/');
			return;
		}
		if(!(route in this.routes)) {
			console.warn(`unable to find route ${route}`);
			this.warp('/404');
		}

		if(pushState) {
			history.pushState({ route, arg }, '', route);
		}

		try {
			const DOM: string = await this.routes[route].make(arg);
			const app: HTMLElement | null = document.getElementById('app');
			if(app == null) return;
			app.innerHTML = DOM;
			window.scrollTo(0, 0);
			const themeBtn = document.getElementById('theme-toggle');
			if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
		} catch(e: any) {
			console.warn(`error occured inside a warp`);
			this.warp('/404');
			return;
		}
		const links: HTMLCollection = document.getElementsByTagName('a');

		for(let i: number = 0; i < links.length; i++) {
			const val: HTMLElement = links[i] as HTMLElement;
			const href = val.getAttribute('href');
			if(href?.startsWith('https://')) continue;
			if(href?.startsWith('mailto:')) continue;
			if(href?.startsWith('tel:')) continue;
			val.addEventListener('click', (e: PointerEvent) => {
				e.preventDefault();
				const url: string | null = val.getAttribute('href');
				if (url) {
					this.warp(url);
				}
			});
		}

		await this.routes[route].postMake(arg);
	}
}

export default Router;

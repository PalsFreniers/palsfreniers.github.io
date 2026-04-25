import Page from '../page.js';
import {
	PageMake,
	PostMake
} from '../page.js';
import { nav } from '../index.js';
import * as textContent from "../content/texts.js";
import { toggleTheme } from './theme.js';

const Header: Page = new Page(async (): Promise<string> => {
	const lang: string = localStorage.getItem("lang") || "fr";
	return `
	<header class="nav-bar">
		<a href="/"><span class="nav-brand">Tidian DELAGE</span></a>
		<ul>
			<a href="/home"><li>${textContent.home[lang]}</li></a>
			<a href="/projects"><li>${textContent.projects[lang]}</li></a>
			<a href="/contact"><li>${textContent.contact[lang]}</li></a>
		</ul>
		<button class="theme-toggle" id="theme-toggle">◑</button>
		<select id="lang-select">
			<option value="fr" ${lang === "fr" ? "selected" : ""}>🇫🇷 FR</option>
			<option value="en" ${lang === "en" ? "selected" : ""}>🇬🇧 EN</option></select>
		</select>
	</header>
	`;
});

export function withHeader(maker: PageMake, postMake?: PostMake) {
	return new Page(
		maker,
		async (arg?: any): Promise<void> => {
			if(postMake) postMake(arg);
			const selector: HTMLSelectElement | null = document.getElementById("lang-select") as HTMLSelectElement;
			if(!selector) return;
			selector.addEventListener("change", () => {
				const lang: string = selector.value;
				localStorage.setItem("lang", lang);
				const state: { route: string, arg: any } = history.state;
				nav.warp(state.route, state.arg);
			});
		}
	);
}

export default Header;

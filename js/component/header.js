var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Page from '../page.js';
import { nav } from '../index.js';
import * as textContent from "../content/texts.js";
const Header = new Page(() => __awaiter(void 0, void 0, void 0, function* () {
    const lang = localStorage.getItem("lang") || "fr";
    return `
	<header class="nav-bar">
		<a href="/"><span class="nav-brand">Tidian DELAGE</span></a>
		<ul>
			<a href="/home"><li>${textContent.home[lang]}</li></a>
			<a href="/projects"><li>${textContent.projects[lang]}</li></a>
			<a href="/contact"><li>${textContent.contact[lang]}</li></a>
		</ul>
		<select id="lang-select">
			<option value="fr" ${lang === "fr" ? "selected" : ""}>🇫🇷 FR</option>
			<option value="en" ${lang === "en" ? "selected" : ""}>🇬🇧 EN</option></select>
		</select>
	</header>
	`;
}));
export function withHeader(maker, postMake) {
    return new Page(maker, (arg) => __awaiter(this, void 0, void 0, function* () {
        if (postMake)
            postMake(arg);
        const selector = document.getElementById("lang-select");
        if (!selector)
            return;
        selector.addEventListener("change", () => {
            const lang = selector.value;
            localStorage.setItem("lang", lang);
            const state = history.state;
            nav.warp(state.route, state.arg);
        });
    }));
}
export default Header;

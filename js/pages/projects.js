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
import Header from '../component/header.js';
import * as textContent from '../content/texts.js';
const projectsURL = 'https://raw.githubusercontent.com/PalsFreniers/webfolio-projects/refs/heads/master/';
const Projects = new Page(() => __awaiter(void 0, void 0, void 0, function* () {
    const lang = localStorage.getItem("lang") || "fr";
    const test = yield fetch(`${projectsURL}progs.json`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return `
        ${yield Header.make()}
        <h1 class="projects-header">${textContent.projectsHeader[lang]}</h1>
        <p>${test}</p>
        `;
}));
export default Projects;

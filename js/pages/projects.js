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
import { nav } from '../index.js';
const projectsURL = 'https://raw.githubusercontent.com/PalsFreniers/webfolio-projects/refs/heads/master';
const projectsFilesURL = `${projectsURL}/progs`;
function makeProjectList(lang) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${projectsURL}/progs.json`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(res);
        const projects = yield res.json();
        let ret = '<div class="project-list">';
        for (let proj of projects.projects) {
            ret += `
                <hr />
                <div class="project" id="${proj.file}">
                        <div class="project-header">
                                <img src="${projectsFilesURL}/${proj.file}/miniature.png" />
                                <h3 class="project-name">${proj.name}</h3>
                        </div>
                        <p class="project-brief">${proj.desc[lang]}</p>
                </div>
                `;
        }
        ret += '<hr /></div>';
        return ret;
    });
}
const Projects = new Page(() => __awaiter(void 0, void 0, void 0, function* () {
    const lang = localStorage.getItem("lang") || "fr";
    return `
        ${yield Header.make()}
        <h1 class="projects-header">${textContent.projectsHeader[lang]}</h1>
        ${yield makeProjectList(lang)}
        `;
}), () => __awaiter(void 0, void 0, void 0, function* () {
    const projs = document.getElementsByClassName('project');
    for (let pr of projs) {
        const p = pr;
        p.addEventListener('click', () => {
            nav.warp('/project', p.id);
        });
    }
}));
export default Projects;

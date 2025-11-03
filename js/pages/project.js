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
import * as urls from './urls.js';
function makeProjectTitle(lang, prog) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${urls.projectsFilesURL}/${prog}/info.json`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const project = yield res.json();
        return `
        <div class="project-entry-header">
                <img alt="miniature of the project ${prog}" src="${urls.githubProjectsFilesURL}/${prog}/miniature.png" />
                <h1 class="project-entry-title">${project.name}</h1>
        </div>
        `;
    });
}
function makeCarousel(project, prog) {
    return __awaiter(this, void 0, void 0, function* () {
        let ret = `
        <div class="project-entry-carousel">
                <h3 class="project-entry-carousel">Images</h3>
                <div class="project-entry-carousel-imgs">`;
        for (let i = 0; i < project.images.length; i++) {
            ret += `
                <div class="slide">
                        <img alt="${project.images[i]}" src="${urls.githubProjectsFilesURL}/${prog}/images/${i + 1}.png" />
                </div>
                `;
        }
        ret += '</div></div>';
        return ret;
    });
}
function makeDescription(lang, prog) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`${urls.projectsFilesURL}/${prog}/info.json`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const project = yield res.json();
        return `
        <div class="project-entry-description">
                ${project.text[lang]}
        </div>
        ${yield makeCarousel(project, prog)}
        `;
    });
}
const Project = new Page((arg) => __awaiter(void 0, void 0, void 0, function* () {
    const lang = localStorage.getItem("lang") || "fr";
    return `
        ${yield Header.make()}
        <div class="project-entry">
                ${yield makeProjectTitle(lang, arg)}
                ${yield makeDescription(lang, arg)}
        </div>
        `;
}));
export default Project;

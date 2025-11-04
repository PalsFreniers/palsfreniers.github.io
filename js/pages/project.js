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
function makeProjectTitle(prog) {
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
    return `
        <div class="project-entry-carousel" id="carousel">
                <h3 class="project-entry-carousel-title">Images</h3>
                <div class="project-entry-carousel-imgs">
                        <button id="prev-slide" class="prev-slide slide-btn"><</button>
                        <div id="slide" data-slidenum="0">
                                <img id="carousel-img" alt="${project.images[0]}" src="${urls.githubProjectsFilesURL}/${prog}/images/1.png" />
                        </div>
                        <button id="next-slide" class="next-slide slide-btn">></button>
                </div>
        </div>`;
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
        ${makeCarousel(project, prog)}
        `;
    });
}
const Project = new Page((arg) => __awaiter(void 0, void 0, void 0, function* () {
    const lang = localStorage.getItem("lang") || "fr";
    return `
        ${yield Header.make()}
        <div class="project-entry">
                ${yield makeProjectTitle(arg)}
                ${yield makeDescription(lang, arg)}
        </div>
        `;
}), (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch(`${urls.projectsFilesURL}/${arg}/info.json`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });
    const project = yield res.json();
    const prevBtn = document.getElementById('prev-slide');
    if (!prevBtn) {
        console.error('unable to find prev Button');
        return;
    }
    const nextBtn = document.getElementById('next-slide');
    if (!nextBtn) {
        console.error('unable to find next Button');
        return;
    }
    const slide = document.getElementById('slide');
    if (!slide) {
        console.error('unable to find slide div');
        return;
    }
    const img = document.getElementById('carousel-img');
    if (!img) {
        console.error('unable to find carousel image');
        return;
    }
    prevBtn.addEventListener('click', () => {
        const count = project.images.length;
        let currentSlide = parseInt(slide.getAttribute("data-slidenum") || '0');
        if (currentSlide == 0)
            currentSlide = count;
        currentSlide--;
        img.setAttribute('src', `${urls.githubProjectsFilesURL}/${arg}/images/${currentSlide + 1}.png`);
        img.setAttribute('alt', `${project.images[currentSlide]}`);
        slide.setAttribute('data-slidenum', `${currentSlide}`);
    });
    nextBtn.addEventListener('click', () => {
        const count = project.images.length;
        let currentSlide = parseInt(slide.getAttribute("data-slidenum") || '0');
        currentSlide++;
        if (currentSlide == count)
            currentSlide = 0;
        img.setAttribute('src', `${urls.githubProjectsFilesURL}/${arg}/images/${currentSlide + 1}.png`);
        img.setAttribute('alt', `${project.images[currentSlide]}`);
        slide.setAttribute('data-slidenum', `${currentSlide}`);
    });
}));
export default Project;

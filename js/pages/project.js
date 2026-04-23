var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Header from '../component/header.js';
import { withHeader } from '../component/header.js';
import * as textContent from '../content/texts.js';
import * as urls from './urls.js';
function makeProjectTitle(prog, project) {
    return __awaiter(this, void 0, void 0, function* () {
        return `
	<div class="project-entry-header">
		<div class="project-entry-breadcrumb"></div>
		<div class="project-entry-meta">
			<img alt="miniature of the project ${prog}" src="${urls.getFileUrl(`progs/${prog}/miniature.png`)}" />
			<a href="${project.url}" target="_blank"><h1 class="project-entry-title">${project.name}</h1></a>
		</div>
	</div>
	`;
    });
}
function makeCarousel(project, prog) {
    return `
	<div class="project-entry-carousel" id="carousel">
		<h3 class="project-entry-carousel-title">Images</h3>
		<span class="carousel-counter">1 / ${project.images.length}</span>
		<div class="project-entry-carousel-imgs">
			<button id="prev-slide" class="prev-slide slide-btn"><</button>
			<div id="slide" data-slidenum="0">
				<img id="carousel-img" alt="${project.images[0]}" src="${urls.getFileUrl(`progs/${prog}/images/1.png`)}" />
			</div>
			<button id="next-slide" class="next-slide slide-btn">></button>
		</div>
	</div>

	<div id="lightbox" class="lightbox">
		<div class="lightbox-overlay"></div>
		<div class="lightbox-content">
			<button class="lightbox-close">✕</button>
			<img id="lightbox-img" src="" alt="" />
		</div>
	</div>`;
}
function makeSkills(lang, project) {
    let ret = `<ul class="project-entry-skills">`;
    for (let skill of project.learnings) {
        console.log(skill);
        ret += `<li class="project-entry-skill-item">${skill[lang]}</li>`;
    }
    return ret + '</ul>';
}
function makeDescription(lang, prog, project) {
    return __awaiter(this, void 0, void 0, function* () {
        return `
	<div class="project-entry-description">
		<h3 class="desc-title">${textContent.projectDescTitle[lang]}</h3>
		${project.text[lang]}
	</div>
	<div>
		<h3 class="skill-title">${textContent.projectSkillTitle[lang]}</h3>
		${makeSkills(lang, project)}
	</div>
	${makeCarousel(project, prog)}
	`;
    });
}
const Project = withHeader((arg) => __awaiter(void 0, void 0, void 0, function* () {
    const lang = localStorage.getItem("lang") || "fr";
    const project = yield urls.getJsonGithub('progs/' + arg + '/info.json');
    return `
	${yield Header.make()}
	<button class="back-btn" onclick="history.back()">${textContent.backBtn[lang]}</button>
	<div class="project-entry">
		${yield makeProjectTitle(arg, project)}
		${yield makeDescription(lang, arg, project)}
	</div>
	`;
}), (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield urls.getJsonGithub('progs/' + arg + '/info.json');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const slide = document.getElementById('slide');
    const img = document.getElementById('carousel-img');
    const counter = document.querySelector('.carousel-counter');
    prevBtn.addEventListener('click', () => {
        const count = project.images.length;
        let currentSlide = parseInt(slide.getAttribute("data-slidenum") || '0');
        if (currentSlide == 0)
            currentSlide = count;
        currentSlide--;
        img.setAttribute('src', urls.getFileUrl(`progs/${arg}/images/${currentSlide + 1}.png`));
        img.setAttribute('alt', project.images[currentSlide]);
        slide.setAttribute('data-slidenum', `${currentSlide}`);
        counter.textContent = `${currentSlide + 1} / ${count}`;
    });
    nextBtn.addEventListener('click', () => {
        const count = project.images.length;
        let currentSlide = parseInt(slide.getAttribute("data-slidenum") || '0');
        currentSlide++;
        if (currentSlide == count)
            currentSlide = 0;
        img.setAttribute('src', urls.getFileUrl(`progs/${arg}/images/${currentSlide + 1}.png`));
        img.setAttribute('alt', project.images[currentSlide]);
        slide.setAttribute('data-slidenum', `${currentSlide}`);
        counter.textContent = `${currentSlide + 1} / ${count}`;
    });
    const carouselImg = document.getElementById('carousel-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxOverlay = lightbox.querySelector('.lightbox-overlay');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    carouselImg.addEventListener('click', () => {
        lightboxImg.src = carouselImg.src;
        lightboxImg.alt = carouselImg.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxClose.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape')
            closeLightbox();
    });
}));
export default Project;

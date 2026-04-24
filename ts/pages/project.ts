import Page from '../page.js';
import Header from '../component/header.js';
import { withHeader } from '../component/header.js';
import { nav } from '../index.js';
import * as textContent from '../content/texts.js';
import * as urls from './urls.js';

interface Project {
	name: string;
	url: string;
	brief: textContent.LangText;
	text: textContent.LangText;
	learnings: textContent.LangText[];
	images: string[];
}

async function makeProjectTitle(prog: string, project: Project): Promise<string> {
	return `
	<div class="project-entry-header">
		<img alt="miniature of the project ${prog}" src="${urls.getFileUrl(`progs/${prog}/miniature.png`)}" />
		<div class="project-entry-meta">
			<a href="${project.url}" target="_blank"><span class="project-entry-title">${project.name}</span></a>
		</div>
	</div>
	`;
}

function makeCarousel(project: Project, prog: string): string {
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

function makeSkills(lang: string, project: Project) {
	let ret: string = `<ul class="project-entry-skills">`;
	for(let skill of project.learnings) {
		console.log(skill);
		ret += `<li class="project-entry-skill-item">${skill[lang]}</li>`;
	}
	return ret + '</ul>';
}

async function makeDescription(lang: string, prog: string, project: Project): Promise<string> {
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
}

const Project: Page = withHeader(async (arg: string): Promise<string> => {
	const lang: string = localStorage.getItem("lang") || "fr";
	let project: Project = await urls.getJsonGithub('progs/' + arg + '/info.json');
	return `
	${await Header.make()}
	<button class="back-btn" onclick="history.back()">${textContent.backBtn[lang]}</button>
	<div class="project-entry">
		${await makeProjectTitle(arg, project)}
		${await makeDescription(lang, arg, project)}
	</div>
	`;
}, async (arg: string): Promise<void> => {
	const project: Project = await urls.getJsonGithub('progs/' + arg + '/info.json');
	const prevBtn: HTMLButtonElement = document.getElementById('prev-slide') as HTMLButtonElement;
	const nextBtn: HTMLButtonElement = document.getElementById('next-slide') as HTMLButtonElement;
	const slide: HTMLElement = document.getElementById('slide') as HTMLElement;
	const img: HTMLImageElement = document.getElementById('carousel-img') as HTMLImageElement;
	const counter: HTMLElement = document.querySelector('.carousel-counter') as HTMLElement;
	prevBtn.addEventListener('click', () => {
		const count: number = project.images.length;
		let currentSlide: number = parseInt(slide.getAttribute("data-slidenum") || '0');
		if(currentSlide == 0) currentSlide = count;
		currentSlide--;
		img.setAttribute('src', urls.getFileUrl(`progs/${arg}/images/${currentSlide + 1}.png`));
		img.setAttribute('alt', project.images[currentSlide]);
		slide.setAttribute('data-slidenum', `${currentSlide}`);
		counter.textContent = `${currentSlide + 1} / ${count}`;
	});
	nextBtn.addEventListener('click', () => {
		const count: number = project.images.length;
		let currentSlide: number = parseInt(slide.getAttribute("data-slidenum") || '0');
		currentSlide++;
		if(currentSlide == count) currentSlide = 0;
		img.setAttribute('src', urls.getFileUrl(`progs/${arg}/images/${currentSlide + 1}.png`));
		img.setAttribute('alt', project.images[currentSlide]);
		slide.setAttribute('data-slidenum', `${currentSlide}`);
		counter.textContent = `${currentSlide + 1} / ${count}`;
	});
	const carouselImg = document.getElementById('carousel-img') as HTMLImageElement;
	const lightbox = document.getElementById('lightbox') as HTMLDivElement;
	const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement;
	const lightboxOverlay = lightbox.querySelector('.lightbox-overlay') as HTMLElement;
	const lightboxClose = lightbox.querySelector('.lightbox-close') as HTMLButtonElement;

	carouselImg.addEventListener('click', () => {
		lightboxImg.src = carouselImg.src;
		lightboxImg.alt = carouselImg.alt;
		lightbox.classList.add('active');
		document.body.style.overflow = 'hidden';
	});

	function closeLightbox(): void {
		lightbox.classList.remove('active');
		document.body.style.overflow = '';
	}

	lightboxOverlay.addEventListener('click', closeLightbox);
	lightboxClose.addEventListener('click', closeLightbox);

	document.addEventListener('keydown', (e: KeyboardEvent) => {
		if (e.key === 'Escape') closeLightbox();
	});
});

export default Project;

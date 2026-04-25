import { nav } from '../index.js';
import Page from '../page.js';
import Header from '../component/header.js';
import { withHeader } from '../component/header.js';
import * as urls from './urls.js';
import * as textContent from '../content/texts.js';

interface Project {
	name: string,
	desc: textContent.LangText,
	file: string,
	wip: boolean,
}

interface ProjectList {
	projects: Project[],
}

async function makeProjectList(lang: string): Promise<string> {
	const projects: ProjectList = await urls.getJsonGithub('progs.json');
	console.log(projects);
	let ret: string = '<div class="project-list">';
	let i: number = 0;
	for(let proj of projects.projects) {
		ret += `
		<hr />
		<div data-index="${i}" class="project " id="${proj.file}">
			<div class="project-header">
				<span class="${proj.wip ? "project-wip" : ""}"></span>
				<img src="${urls.getFileUrl(`progs/${proj.file}/miniature.png`)}" />
				<h3 class="project-name">${proj.name}</h3>
			</div>
			<p class="project-brief">${proj.desc[lang]}</p>
		</div>
		`;
		i += 1;
	}
	ret += '<hr /></div>'
	return ret;
}

const Projects: Page = withHeader(async (): Promise<string> => {
	const lang: string = localStorage.getItem("lang") || "fr";
	return `
	${await Header.make()}
	<div class="page-header">
		<h1 class="page-header-title">
			<span class="page-header-prompt">~ ❯</span>
			${textContent.projects[lang]}
		</h1>
		<p class="page-header-sub">${textContent.projectsSub[lang]}</p>
	</div>
	${await makeProjectList(lang)}
	`;
}, async (): Promise<void> => { 
	const projs: HTMLCollectionOf<Element> = document.getElementsByClassName('project');
	for(let pr of projs) {
		const p: HTMLElement = pr as HTMLElement;
		p.addEventListener('click', () => {
			nav.warp('/project', p.id);
		});
	}
});

export default Projects;

const projectsURL: string = 'https://api.github.com/repos/PalsFreniers/webfolio-projects/contents/';
const JSDELIVR = 'https://cdn.jsdelivr.net/gh/PalsFreniers/webfolio-projects@master/';

export async function getJsonGithub(name: string) {
	const url: string = projectsURL + name;
	const res = await fetch(url);
	const data = await res.json();
	const cleaned = data.content.replace(/[\s\n\r]/g, '');
	const binary = atob(cleaned);
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
    const text = new TextDecoder('utf-8').decode(bytes);
	return JSON.parse(text);
}

export function getFileUrl(path: string) {
	return JSDELIVR + path;
}

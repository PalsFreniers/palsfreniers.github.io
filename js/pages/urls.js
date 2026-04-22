var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const projectsURL = 'https://api.github.com/repos/PalsFreniers/webfolio-projects/contents/';
const JSDELIVR = 'https://cdn.jsdelivr.net/gh/PalsFreniers/webfolio-projects@master/';
export function getJsonGithub(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = projectsURL + name;
        const res = yield fetch(url);
        const data = yield res.json();
        const cleaned = data.content.replace(/[\s\n\r]/g, '');
        const binary = atob(cleaned);
        const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
        const text = new TextDecoder('utf-8').decode(bytes);
        return JSON.parse(text);
    });
}
export function getFileUrl(path) {
    return JSDELIVR + path;
}

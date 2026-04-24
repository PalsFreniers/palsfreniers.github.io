import Page from '../page.js';
import Header from '../component/header.js';
import { withHeader } from '../component/header.js';
import FaceNameTitle from '../component/face-name.js';
import * as textContent from '../content/texts.js';

const Index: Page = withHeader(async (): Promise<string> => {
	const lang: string = localStorage.getItem("lang") || "fr";
	return `
	${await Header.make()}
	${await FaceNameTitle.make()}
	<h3 class="me-title">${textContent.whoamiTitle[lang]}</h3>
	<p class="context-text whoami">${textContent.whoami_intro[lang]}</p>
	<p class="context-text whoami">${textContent.whoami_background[lang]}</p>
	<p class="context-text whoami">${textContent.whoami_passion[lang]}</p>
	<p class="context-text whoami">${textContent.whoami_now[lang]}</p>
	<h3 class="me-title">${textContent.myabilityTitle[lang]}</h3>
	<p class="context-text whoami">${textContent.myability[lang]}</p>
	<h3 class="me-title">${textContent.myfutureTitle[lang]}</h3>
	<p class="context-text whoami">${textContent.myfuture[lang]}</p>
	`;
});

export default Index;

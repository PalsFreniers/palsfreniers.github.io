import Page from '../page.js';
import * as textContent from '../content/texts.js';

const FaceNameTitle: Page = new Page(async (): Promise<string> => {
	const lang: string = localStorage.getItem("lang") || "fr";
	return `
	<div class="face-name-title">
		<img class="portrait" alt="Tidian DELAGE" src="images/photo.png" />
		<h1 class="name-title">
			<span class="terminal-prompt">
				tidian-delage<span class="at">@</span>workspace:~$
				<span class="caret"></span>
			</span>
			<span class="name">${textContent.name[lang]}</span>
		</h1>
	</div>
	`;
});

export default FaceNameTitle;

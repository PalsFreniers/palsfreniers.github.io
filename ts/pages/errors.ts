import Page from '../page.js';
import Header from '../component/header.js';
import { withHeader } from '../component/header.js';

export const E404: Page = withHeader(async (): Promise<string> => {
	return `
	${await Header.make()}
	<div class="error-block">
		<span class="error-code">404</span>
		<span class="error-msg">Not Found</span>
	</div>`;
});

export const E403: Page = withHeader(async (): Promise<string> => {
	return `
	${await Header.make()}
	<div class="error-block">
		<span class="error-code">403</span>
		<span class="error-msg">Forbidden</span>
	</div>`;
});

export const E500: Page = withHeader(async (): Promise<string> => {
	return `
	${await Header.make()}
	<div class="error-block">
		<span class="error-code">500</span>
		<span class="error-msg">Server Error</span>
	</div>`;
});

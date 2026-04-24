import Page from '../page.js';

export const E404: Page = new Page(async (): Promise<string> => {
	return `
	<div class="error-block">
		<span class="error-code">404</span>
		<span class="error-msg">Not Found</span>
	</div>`;
});

export const E403: Page = new Page(async (): Promise<string> => {
	return `
	<div class="error-block">
		<span class="error-code">403</span>
		<span class="error-msg">Not Authorized</span>
	</div>`;
});

export const E500: Page = new Page(async (): Promise<string> => {
	return `
	<div class="error-block">
		<span class="error-code">500</span>
		<span class="error-msg">Server Error</span>
	</div>`;
});

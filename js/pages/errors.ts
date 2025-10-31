import { Page } from '../page.js';

export const E404: Page = new Page((): string => {
        return `
        <h1>404 not founded</h1>
        `;
});

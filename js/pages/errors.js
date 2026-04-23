var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Page from '../page.js';
export const E404 = new Page(() => __awaiter(void 0, void 0, void 0, function* () {
    return `
	<div class="error-block">
		<span class="error-code">404</span>
		<span class="error-msg">Not Found</span>
	</div>`;
}));
export const E403 = new Page(() => __awaiter(void 0, void 0, void 0, function* () {
    return `
	<div class="error-block">
		<span class="error-code">403</span>
		<span class="error-msg">Not Authorized</span>
	</div>`;
}));
export const E500 = new Page(() => __awaiter(void 0, void 0, void 0, function* () {
    return `
	<div class="error-block">
		<span class="error-code">500</span>
		<span class="error-msg">Server Error</span>
	</div>`;
}));

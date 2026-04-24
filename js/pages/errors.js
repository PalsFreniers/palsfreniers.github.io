var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Header from '../component/header.js';
import { withHeader } from '../component/header.js';
export const E404 = withHeader(() => __awaiter(void 0, void 0, void 0, function* () {
    return `
	${yield Header.make()}
	<div class="error-block">
		<span class="error-code">404</span>
		<span class="error-msg">Not Found</span>
	</div>`;
}));
export const E403 = withHeader(() => __awaiter(void 0, void 0, void 0, function* () {
    return `
	${yield Header.make()}
	<div class="error-block">
		<span class="error-code">403</span>
		<span class="error-msg">Forbidden</span>
	</div>`;
}));
export const E500 = withHeader(() => __awaiter(void 0, void 0, void 0, function* () {
    return `
	${yield Header.make()}
	<div class="error-block">
		<span class="error-code">500</span>
		<span class="error-msg">Server Error</span>
	</div>`;
}));

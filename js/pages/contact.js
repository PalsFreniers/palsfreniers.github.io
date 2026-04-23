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
import FaceNameTitle from '../component/face-name.js';
import * as textContent from '../content/texts.js';
const Contact = withHeader(() => __awaiter(void 0, void 0, void 0, function* () {
    const lang = localStorage.getItem("lang") || "fr";
    return `
	${yield Header.make()}
	${yield FaceNameTitle.make()}
	<p class="context-text whoami">${textContent.whoami_intro[lang]}</p>
	<p class="context-text phone contact-block">
		<span class="contact-label">${textContent.phoneLabel[lang]}</span>
		<span class="contact-value">${textContent.phone[lang]}</span>
	</p>
	<p class="context-text mail contact-block">
		<span class="contact-label">${textContent.mailLabel[lang]}</span>
		<span class="contact-value">${textContent.mail[lang]}</span>
	</p>
	<p class="context-text address contact-block">
		<span class="contact-label">${textContent.addressLabel[lang]}</span>
		<span class="contact-value">${textContent.address[lang]}</span>
	</p>
	`;
}));
export default Contact;

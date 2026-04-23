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
import * as textContent from '../content/texts.js';
const Contact = withHeader(() => __awaiter(void 0, void 0, void 0, function* () {
    const lang = localStorage.getItem("lang") || "fr";
    return `
	${yield Header.make()}
	<div class="page-header">
		<h1 class="page-header-title">
			<span class="page-header-prompt">~ ❯</span>
			${textContent.contact[lang]}
		</h1>
		<p class="page-header-sub">${textContent.contactSub[lang]}</p>
	</div>
	<dl class="contact-list">
		<a href="mailto:${textContent.mail[lang]}">
			<div class="contact-block">
				<dt class="contact-label">${textContent.mailLabel[lang]}</dt>
				<dd class="contact-value">${textContent.mail[lang]}</dd>
			</div>
		</a>
		<a href="tel:${textContent.phone[lang]}">
			<div class="contact-block">
				<dt class="contact-label">${textContent.phoneLabel[lang]}</dt>
				<dd class="contact-value">${textContent.phone[lang]}</dd>
			</div>
		</a>
		<a href="${textContent.codeberg[lang]}" target="_blank">
			<div class="contact-block">
				<dt class="contact-label">${textContent.codebergLabel[lang]}</dt>
				<dd class="contact-value">${textContent.codeberg[lang]}</dd>
			</div>
		</a>
		<a href="${textContent.pls42[lang]}" target="_blank">
			<div class="contact-block">
				<dt class="contact-label">${textContent.pls42Label[lang]}</dt>
				<dd class="contact-value">${textContent.pls42[lang]}</dd>
			</div>
		</a>
		<a href="${textContent.linkedin[lang]}" target="_blank">
			<div class="contact-block">
				<dt class="contact-label">${textContent.linkedinLabel[lang]}</dt>
				<dd class="contact-value">${textContent.linkedin[lang]}</dd>
			</div>
		</a>
		<div class="contact-block">
			<dt class="contact-label">${textContent.addressLabel[lang]}</dt>
			<dd class="contact-value">${textContent.address[lang]}</dd>
		</div>
	</dl>
	`;
}));
export default Contact;

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Page } from '../page.js';
import { Header } from '../component/header.js';
export const Index = new Page(() => __awaiter(void 0, void 0, void 0, function* () {
    return `
        ${yield Header.make()}
        <img class="portrait" alt="image visage" src="images/photo.png" />
        <h1 class="name-title">Tidian DELAGE</h1>
        `;
}));

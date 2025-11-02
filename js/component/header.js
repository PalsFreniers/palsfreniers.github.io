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
import * as textContent from "../content/texts.js";
const Header = new Page(() => __awaiter(void 0, void 0, void 0, function* () {
    const lang = localStorage.getItem("lang") || "fr";
    return `
        <header class="nav-bar">
                <ul>
                        <a href="/home"><li>${textContent.home[lang]}</li></a>
                        <a href="/projects"><li>${textContent.projects[lang]}</li></a>
                        <a href="/contact"><li>${textContent.contact[lang]}</li></a>
                </ul>
        </header>
        `;
}));
export default Header;
/*
 * <script>
function abc(selectedguy) {
  var x = document.getElementById("mySelect");
alert(x.options[selectedguy].text);
}
</script>

<select id="mySelect" onchange="abc(this.selectedIndex);">
<option>option one</option>
<option>option two</option>
</select>*/

function makeLangText(fr_, en_) {
    if (en_ == null)
        en_ = fr_;
    return {
        fr: fr_,
        en: en_,
    };
}
export const name = makeLangText("Tidian DELAGE");
export const phone = makeLangText("0766564819");
export const mail = makeLangText("tidian.delage@protonmail.ch");
export const address = makeLangText("131 rue de périgueux 16000 Angoulême");
export const whoami = makeLangText("je suis un étudiant en informatique", "I am a student in computer science");
export const home = makeLangText("Accueil", "Home");
export const projects = makeLangText("Mes Projets", "My Projects");
export const contact = makeLangText("Me Contacter", "Contact Me");

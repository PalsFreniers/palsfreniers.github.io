function makeLangText(fr_, en_) {
    if (en_ == null)
        en_ = fr_;
    return {
        fr: fr_,
        en: en_,
    };
}
// misc
export const name = makeLangText("Tidian DELAGE");
// index
export const whoami = makeLangText("je suis un étudiant en informatique", "I am a student in computer science");
// contact
export const phoneLabel = makeLangText("Numéro de Téléphone", "Phone Number");
export const phone = makeLangText("0766564819");
export const mailLabel = makeLangText("Adresse E-mail", "E-mail address");
export const mail = makeLangText("tidian.delage@protonmail.ch");
export const addressLabel = makeLangText("Adresse Postale", "Postal Address");
export const address = makeLangText("131 rue de périgueux 16000 Angoulême");
// nav-bar
export const home = makeLangText("Accueil", "Home");
export const projects = makeLangText("Mes Projets", "My Projects");
export const contact = makeLangText("Me Contacter", "Contact Me");

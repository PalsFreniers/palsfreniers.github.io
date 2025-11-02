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
export const whoami = makeLangText("Bonjour, je suis Tidian Delage et je suis en train de suivre des études en informatique à l'école 42.<br />Mon parcours scolaire a été plutôt conventionnel. J'ai débuté par des études générales, puis j'ai obtenu mon baccalauréat avec la mention européenne Mathématique - Anglais, comprenant les spécialités : Mathématique, Science de l'Ingénieur, Physique - Chimie.<br />J'ai débuté la programmation informatique à l'âge de 8 ans, devenu une passion, j'ai fini par me lancer dans des études d'informatique à l'école 42.", "Hello, I am Tidian Delage and I am studying computer science at school 42.<br />My school journey has been rather conventional. I started with general studies, then I obtained my baccalaureate with the European distinction in Mathematics - English, including specialties: Mathematics, Engineering Science, Physics - Chemistry.<br />I started computer programming at the age of 8, became a passion, I ended up embarking on computer science studies at school 42.");
// contact
export const phoneLabel = makeLangText("Numéro de Téléphone", "Phone Number");
export const phone = makeLangText("0766564819");
export const mailLabel = makeLangText("Adresse E-mail", "E-mail Address");
export const mail = makeLangText("tidian.delage@protonmail.ch");
export const addressLabel = makeLangText("Adresse Postale", "Postal Address");
export const address = makeLangText("131 rue de périgueux 16000 Angoulême");
// nav-bar
export const home = makeLangText("Accueil", "Home");
export const projects = makeLangText("Mes Projets", "My Projects");
export const contact = makeLangText("Me Contacter", "Contact Me");

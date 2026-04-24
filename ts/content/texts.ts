export interface LangText {
	fr: string;
	en: string;
}

function makeLangText(fr_: string, en_?: string): LangText {
	if(en_ == null) en_ = fr_;
	return {
		fr: fr_,
		en: en_,
	}
}

// misc
export const name: LangText = makeLangText("Tidian DELAGE");

// index
// --- WHOAMI : découpé en plusieurs parties ---

export const whoami_intro: LangText = makeLangText(
    "Je suis Tidian Delage, étudiant à l'école 42 d'Angoulême, spécialisé en programmation système, réseaux et cybersécurité.",
    "I am Tidian Delage, a student at École 42 in Angoulême, specialising in systems programming, networking and cybersecurity."
);

export const whoami_background: LangText = makeLangText(
    "Mon parcours scolaire s'est construit autour des sciences : j'ai obtenu mon baccalauréat avec mention européenne Mathématiques - Anglais, avec les spécialités Mathématiques, Sciences de l'Ingénieur et Physique-Chimie.",
    "My academic background is rooted in science: I graduated with a European distinction in Mathematics and English, with specialisations in Mathematics, Engineering Science and Physics-Chemistry."
);

export const whoami_passion: LangText = makeLangText(
    "J'ai écrit mon premier programme en C à 8 ans, avant de suivre mes premiers cours formels sur OpenClassrooms à 9 ans. Ce qui a commencé comme une curiosité est devenu une passion profonde pour les couches basses de l'informatique : systèmes d'exploitation, compilation, matériel.",
    "I wrote my first C program at 8 years old, before taking my first formal courses on OpenClassrooms at 9. What started as curiosity grew into a deep passion for the lower layers of computing: operating systems, compilation, hardware."
);

export const whoami_now: LangText = makeLangText(
    "Aujourd'hui, je travaille sur des projets allant du ray tracing en C à l'écriture d'un noyau from scratch, en passant par de l'assembleur x86_64, de la gestion mémoire et des interfaces systèmes bas niveau.",
    "Today I work on projects ranging from ray tracing in C to writing a kernel from scratch, including x86_64 assembly, memory management and low-level system interfaces."
);

// --- MYABILITY ---

export const myability: LangText = makeLangText(
    "C, C++, Python, Ada, x86_64 ASM · Linux/POSIX, Windows · Système, Réseaux, Cybersécurité · LaTeX, Markdown, Doxygen · Anglais C1",
    "C, C++, Python, Ada, x86_64 ASM · Linux/POSIX, Windows · Systems, Networking, Cybersecurity · LaTeX, Markdown, Doxygen · English C1"
);

// --- MYFUTURE ---

export const myfuture: LangText = makeLangText(
    "Contribuer à des projets open-source ambitieux, participer à la recherche en informatique fondamentale , systèmes, compilation, sécurité , et œuvrer pour une informatique plus transparente, souveraine et compréhensible.",
    "Contributing to ambitious open-source projects, engaging in fundamental computer science research , systems, compilation, security , and working toward a more transparent, sovereign and comprehensible computing world."
);

export const whoamiTitle: LangText = makeLangText(
    "~ ❯ whoami",
    "~ ❯ whoami"
);

export const myabilityTitle: LangText = makeLangText(
    "~ ❯ compétences --list",
    "~ ❯ skills --list"
);

export const myfutureTitle: LangText = makeLangText(
    "~ ❯ cat avenir.md",
    "~ ❯ cat future.md"
);

//projects
export const projectsHeader: LangText = makeLangText(
	"Mes Projets",
	"My Projects"
);

export const projectDescTitle: LangText = makeLangText("Description");
export const projectSkillTitle: LangText = makeLangText(
	"Compétences",
	"Skills"
);

// contact
export const phoneLabel: LangText = makeLangText("Numéro de Téléphone", "Phone Number");
export const phone: LangText = makeLangText("0766564819");
export const mailLabel: LangText = makeLangText("Adresse E-mail", "E-mail Address");
export const mail: LangText = makeLangText("tidian.delage@protonmail.ch");
export const addressLabel: LangText = makeLangText("Adresse Postale", "Postal Address");
export const address: LangText = makeLangText("Parthenay, France");
export const codebergLabel = makeLangText("Codeberg");
export const codeberg = makeLangText("https://codeberg.org/PalsFreniers");
export const linkedinLabel = makeLangText("LinkedIn");
export const linkedin = makeLangText("https://www.linkedin.com/in/tidian-delage-0866712ba/");
export const pls42Label = makeLangText("PLS42 (projets École 42)", "PLS42 (École 42 projects)");
export const pls42 = makeLangText("https://codeberg.org/PLS42");

// nav-bar
export const home: LangText = makeLangText("Accueil", "Home");
export const projects: LangText = makeLangText("Mes Projets", "My Projects");
export const contact: LangText = makeLangText("Me Contacter", "Contact Me");

export const backBtn: LangText = makeLangText("Retour aux projets", "Back to projects");
export const contactSub: LangText = makeLangText(
  "Étudiant passionné, ouvert à tout échange autour de l'informatique fondamentale.",
  "Passionate student, open to any exchange around fundamental computer science."
);
export const projectsSub: LangText = makeLangText(
  "Chaque projet est une occasion d'explorer les couches basses: du silicium à l'algorithme.",
  "Each project is an opportunity to explore the lower layers: from silicon to algorithm."
);

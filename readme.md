# webfolioSrcs

Sources TypeScript, SCSS et HTML de mon webfolio personnel — [palsfreniers.github.io](https://palsfreniers.github.io).

## Aperçu

SPA (Single Page Application) sans framework, construite entièrement à la main avec un routeur client-side maison, un système de composants en TypeScript et des styles modulaires en SCSS.

Les contenus des projets sont hébergés séparément dans le dépôt [`webfolio-projects`](https://github.com/PalsFreniers/webfolio-projects) et chargés dynamiquement via l'API GitHub + jsDelivr CDN.

## Stack

| Technologie | Usage |
|-------------|-------|
| **TypeScript** (ES6 modules) | Routeur, pages, composants, logique |
| **SCSS** | Styles modulaires avec tokens, variables et mixins |
| **HTML** | Shell minimal (`index.html`, `404.html`) |
| **Shell** | Scripts de build et déploiement |

## Structure

```
webfolioSrcs/
├── ts/
│   ├── index.ts              # Point d'entrée — enregistrement des routes
│   ├── router.ts             # Routeur SPA (History API)
│   ├── page.ts               # Classe de base Page (make + postMake)
│   ├── component/
│   │   ├── header.ts         # Navbar + sélecteur de langue
│   │   └── face-name.ts      # Composant hero (nom + photo)
│   ├── content/
│   │   └── texts.ts          # Tous les textes bilingues FR/EN
│   └── pages/
│       ├── index.ts          # Page d'accueil (whoami, compétences, avenir)
│       ├── projects.ts       # Liste des projets (chargée depuis GitHub)
│       ├── project.ts        # Page de détail d'un projet
│       ├── contact.ts        # Page de contact
│       ├── errors.ts         # Pages d'erreur (404, 403, 500)
│       └── urls.ts           # Helpers pour l'API GitHub et jsDelivr
├── scss/
│   ├── index.scss            # Point d'entrée SCSS
│   ├── _tokens.scss          # Agrégateur (variables + mixins)
│   ├── _variables.scss       # Variables CSS / SCSS
│   ├── _mixins.scss          # Mixins réutilisables
│   ├── _base.scss            # Reset et styles globaux
│   ├── _nav.scss             # Navbar
│   ├── _hero.scss            # Section hero
│   ├── _projects.scss        # Liste des projets
│   ├── _project-entry.scss   # Détail d'un projet
│   └── _media.scss           # Media queries (responsive)
├── images/                   # Favicon et photo de profil
├── index.html                # Shell HTML (SPA)
├── 404.html                  # Page d'erreur serveur
├── tsconfig.json             # Config TypeScript (target ES6, outDir ./js)
├── deploy.sh                 # Build + commit + push
└── test.sh                   # Build + serveur local
```

## Architecture

Le routeur intercepte les clics sur les liens internes et navigue sans rechargement via `history.pushState`. Chaque route est associée à une instance de `Page`, qui expose deux méthodes async : `make()` (rendu HTML) et `postMake()` (attachement des listeners après injection dans le DOM).

La langue (`fr` / `en`) est persistée dans `localStorage` et lue par chaque page au moment du rendu. Le sélecteur dans la navbar recharge la page courante à la volée en cas de changement.

## Prérequis

- [Node.js](https://nodejs.org/)
- TypeScript : `npm install -g typescript`
- Sass : `npm install -g sass`
- `npx` (inclus avec Node.js, utilisé par `test.sh` pour `serve`)

## Développement local

```bash
bash test.sh
```

Ce script :
1. Supprime les dossiers `css/` et `js/` générés
2. Compile le SCSS → `css/`
3. Compile le TypeScript → `js/`
4. Lance un serveur local via `npx serve .`

## Déploiement

```bash
bash deploy.sh
```

Ce script compile le SCSS et le TypeScript puis effectue un `git add . && git commit && git push` pour déployer sur GitHub Pages.

## Internationalisation

Tous les textes sont centralisés dans `ts/content/texts.ts` sous forme d'objets `LangText { fr: string, en: string }`. Aucune librairie externe n'est utilisée.

## Données projets

La liste et les détails des projets sont chargés depuis le dépôt GitHub [`PalsFreniers/webfolio-projects`](https://github.com/PalsFreniers/webfolio-projects) :
- Métadonnées JSON via l'API GitHub
- Assets (miniatures, etc.) via jsDelivr CDN

## Contact

- Email : [tidian.delage@protonmail.ch](mailto:tidian.delage@protonmail.ch)
- Codeberg : [codeberg.org/PalsFreniers](https://codeberg.org/PalsFreniers)
- LinkedIn : [linkedin.com/in/tidian-delage-0866712ba](https://www.linkedin.com/in/tidian-delage-0866712ba/)
- École 42 projets : [codeberg.org/PLS42](https://codeberg.org/PLS42)
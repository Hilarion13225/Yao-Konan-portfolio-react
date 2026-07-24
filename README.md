# Portfolio — KONAN Yao

Portfolio React (Vite) de KONAN Yao Serge-Hilarion Boigny, étudiant en Big Data & Intelligence Artificielle.

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm run dev
```

Puis ouvrez l'URL affichée (généralement http://localhost:5173).

## Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## Structure du projet

```
src/
  components/
    Header.jsx       Barre de navigation + logo + menu mobile
    Hero.jsx          Section d'accueil + bloc "terminal" animé
    About.jsx         Section À propos
    Experience.jsx     Timeline des expériences + illustration
    Skills.jsx        Carrousel de compétences (icônes en défilement)
    Projects.jsx       Grille de projets
    Education.jsx      Timeline des formations + illustration
    Contact.jsx        Formulaire de contact
    Footer.jsx         Pied de page
    Reveal.jsx         Composant utilitaire (animation d'apparition au scroll)
  data.js              Toutes les données du portfolio (profil, compétences, projets, expériences, formations)
  index.css            Styles globaux
  App.jsx              Assemble tous les composants
  main.jsx             Point d'entrée React
```

## Modifier le contenu

Tout le contenu (nom, compétences, projets, expériences, formations) se trouve dans **`src/data.js`** —
un seul fichier à modifier, pas besoin de toucher aux composants.

Pour ajouter une image à un projet, renseignez le champ `thumb` dans `data.js` avec l'URL de l'image
(par exemple une image placée dans `public/images/mon-projet.png` → `thumb: '/images/mon-projet.png'`).

## Icônes

Les icônes utilisent [Font Awesome 6](https://fontawesome.com/) (chargé via CDN dans `index.html`).

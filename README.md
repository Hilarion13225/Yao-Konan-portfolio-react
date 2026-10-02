# Portfolio — Yao Konan

Portfolio de **KONAN Yao Serge-Hilarion Boigny** — Full-Stack Developer · Data & AI,
Master 1 Big Data & IA (BIHAR) à l'ESATIC.

**Stack :** React 19 · Vite · Tailwind CSS 4 · React Router · Framer Motion · Lucide ·
React Hook Form + Zod. JavaScript uniquement, aucun backend.

## Commandes

```bash
npm install
npm run dev       # développement — http://localhost:5173
npm run build     # build de production dans dist/ (régénère aussi le sitemap)
npm run preview   # sert le build localement
npm run images    # régénère les images optimisées (WebP), l'image Open Graph et l'icône Apple
```

## Modifier le contenu

Tout le contenu est séparé des composants, dans `src/data/` et `src/config/` :

| Fichier | Contenu |
|---|---|
| `config/site.js` | identité, coordonnées, réseaux, navigation |
| `data/projects.js` | projets (cartes + pages `/projects/:slug`) |
| `data/skills.js` | axes « What I build », domaines, bande défilante, « Currently exploring » |
| `data/experience.js` | expériences professionnelles |
| `data/education.js` | formations |
| `data/achievements.js` | distinctions et certificats (triés automatiquement par date) |
| `data/approach.js` | « How I build », « More than code », pipeline Data & AI |
| `data/interests.js` | « Beyond the code » — la section reste masquée tant que la liste est vide |
| `i18n/ui.js` | textes d'interface FR / EN (dont le texte « About ») |

Les champs bilingues s'écrivent `{ fr: '…', en: '…' }`. Un champ vide (`null` ou `[]`)
est simplement masqué : on n'affiche jamais de contenu inventé.

**Ajouter une capture à un projet :** placer le PNG dans `public/images/`, l'ajouter à la
liste `screenshots` de `scripts/optimize-images.mjs`, lancer `npm run images`, puis référencer
`/images/opt/<nom>.webp` dans `data/projects.js`.

## Structure

```
src/
  components/  common/ (curseur, scroll, diagramme…) · layout/ · navigation/ · ui/ (Button, SectionHeader…)
  sections/    hero · about · skills · projects · engineering · data-ai · experience · education · exploring · github · personal · contact
  pages/       HomePage · ProjectPage · NotFound
  data/ config/ hooks/ services/ utils/ i18n/ styles/
```

## Déploiement

Vercel : `vercel.json` redirige toutes les routes vers `index.html` (routing côté client).

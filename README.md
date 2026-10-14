# Tate McRae — Site de fan (non officiel)

MVP d'un site de fan construit avec **Next.js (App Router) + TypeScript + Tailwind CSS**.
Direction visuelle « old money méditerranéen » : fond chaud, grain argentique,
rouge en couleur signature.

> ⚠️ Projet de fan non officiel. Aucun contenu audio/visuel officiel n'est
> hébergé : tout passe par les lecteurs officiels (Spotify, etc.). Voir la page
> « À propos » et le pied de page.

## Lancer en local

Prérequis : Node.js 18.18+ (recommandé : 20+).

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000.

## Build de production

```bash
npm run build
npm start
```

## Déploiement (Vercel)

1. Pousse le projet sur GitHub.
2. Sur [vercel.com](https://vercel.com), « New Project » → importe le repo.
3. Vercel détecte Next.js automatiquement — rien à configurer. Déploie.

(Alternative : Cloudflare Pages, Netlify — tous gèrent Next.js.)

## Structure

```
app/
  layout.tsx          Layout racine (polices, Nav, Footer, grain)
  page.tsx            Accueil
  actu/page.tsx       Actu & agenda
  discographie/page.tsx
  a-propos/page.tsx
  components/         Nav, Footer, Hero, SpotifyEmbed, AlbumCard, ...
  globals.css         Thème (variables de couleur + grain)
data/
  site.ts             Nom, liens officiels, mention légale
  discography.ts      Albums / EP / singles
  news.ts             Fil d'actualité (entrées d'exemple)
  shows.ts            Dates de concert (entrées d'exemple)
  format.ts           Formatage des dates en français
tailwind.config.ts    Couleurs / polices du thème
```

## Ce qu'il te reste à faire (contenu)

Le code est prêt ; il faut maintenant le remplir avec de vraies données.

- **Lecteurs Spotify** : dans `data/discography.ts`, renseigne `spotifyId` pour
  chaque sortie. Sur Spotify : album → `...` → Partager → « Copier le lien »,
  l'ID est la partie après `/album/`. Tant que c'est vide, un placeholder propre
  s'affiche (pas d'embed cassé).
- **Actu & dates** : remplace les entrées d'exemple dans `data/news.ts` et
  `data/shows.ts` par de vraies infos. Les dates passées sont filtrées
  automatiquement dans l'agenda.
- **Liens officiels** : vérifie les IDs Spotify / Apple Music dans `data/site.ts`
  (marqués « à vérifier »).
- **Visuels** : ne mets **pas** la pochette officielle. Utilise tes propres
  créations (pose-les dans `/public` et renseigne `cover` dans
  `data/discography.ts`), des visuels libres de droits, ou laisse vide (un
  dégradé chaud s'affiche).
- **Direction visuelle** : à reconfirmer quand la nouvelle ère est officialisée.
  Toutes les couleurs sont des variables CSS dans `app/globals.css` — facile à
  ajuster.
- **Contact / retrait** : ajoute une adresse de contact sur la page « À propos ».

## Rappels légaux (résumé)

- Mention « non officiel » visible (déjà en place : footer + À propos).
- Pas de fichiers audio hébergés → embeds officiels uniquement.
- Pas de paroles intégrales recopiées.
- Pas de pochettes/photos officielles rapatriées sans droits.
- Éviter pub et vente de produits dérivés.

Ceci est un repère pratique, pas un avis juridique.

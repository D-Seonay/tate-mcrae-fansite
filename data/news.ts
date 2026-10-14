import type { Localized } from "./format";

/**
 * Fil d'actualité. Ce sont des ENTRÉES D'EXEMPLE à remplacer par de vraies
 * actus (sorties, annonces). Garde-les courtes et datées.
 *
 * `date` au format "YYYY-MM-DD" pour le tri automatique (plus récent en haut).
 * `title` / `body` : contenu bilingue { en, fr }.
 * `tag` : clé traduite via le namespace `tags` des messages.
 * `link` : optionnel, vers la source officielle.
 */
export type NewsTag = "release" | "tour" | "media" | "announcement";

export type NewsItem = {
  date: string;
  title: Localized;
  body: Localized;
  link?: string;
  tag?: NewsTag;
};

export const news: NewsItem[] = [
  {
    date: "2026-08-01",
    title: {
      fr: "Nouvelle direction visuelle à Osheaga",
      en: "New visual direction at Osheaga",
    },
    body: {
      fr: "Lors de son set à Osheaga (Montréal), de nouveaux visuels de scène ont été dévoilés, marquant un virage par rapport aux ères précédentes. [Entrée d'exemple — à remplacer.]",
      en: "During her set at Osheaga (Montréal), new stage visuals were revealed, marking a shift from previous eras. [Sample entry — to be replaced.]",
    },
    tag: "announcement",
  },
  {
    date: "2025-02-21",
    title: {
      fr: "Sortie de l'album « So Close to What »",
      en: "Release of the album “So Close to What”",
    },
    body: {
      fr: "Troisième album studio de Tate McRae. [Entrée d'exemple — vérifie la date exacte et adapte.]",
      en: "Tate McRae's third studio album. [Sample entry — check the exact date and adapt.]",
    },
    tag: "release",
  },
];

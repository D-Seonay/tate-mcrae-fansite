import type { Localized } from "./format";

/**
 * Discographie. Les dates/années sont à vérifier avant mise en ligne.
 *
 * `spotifyId` : l'ID de l'album sur Spotify.
 *   Sur Spotify : album > ... > Partager > "Copier le lien de l'album",
 *   l'ID est la partie après /album/ (ex. open.spotify.com/album/XXXX -> "XXXX").
 *   Laisse vide ("") tant que tu n'as pas collé le vrai ID : le lecteur
 *   affichera un placeholder propre au lieu d'un embed cassé.
 *
 * `title` : nom propre (chaîne) ou bilingue { en, fr } si descriptif.
 * `note` : contenu bilingue { en, fr }.
 * `cover` : chemin vers TON visuel (dans /public). N'héberge pas la pochette
 *   officielle — utilise un visuel libre de droits, le tien, ou laisse vide
 *   (un dégradé est affiché à la place).
 */
export type Release = {
  slug: string;
  title: Localized;
  type: "Album" | "EP" | "Single";
  year: number;
  note?: Localized;
  spotifyId?: string;
  cover?: string;
  current?: boolean;
};

export const releases: Release[] = [
  {
    slug: "nouvelle-ere",
    title: { fr: "Nouvelle ère (2026)", en: "New era (2026)" },
    type: "Single",
    year: 2026,
    note: {
      fr: "Virage old-money méditerranéen, argentique et chaud. Détails à compléter dès l'officialisation.",
      en: "A warm, old-money Mediterranean turn, shot on film. Details to come once it's official.",
    },
    spotifyId: "",
    current: true,
  },
  {
    slug: "so-close-to-what",
    title: "So Close to What",
    type: "Album",
    year: 2025,
    note: {
      fr: "Troisième album studio. Une édition deluxe est également sortie.",
      en: "Third studio album. A deluxe edition was also released.",
    },
    spotifyId: "",
  },
  {
    slug: "think-later",
    title: "Think Later",
    type: "Album",
    year: 2023,
    note: {
      fr: "Deuxième album studio, porté par le succès de « Greedy ».",
      en: "Second studio album, carried by the success of “Greedy”.",
    },
    spotifyId: "",
  },
  {
    slug: "i-used-to-think-i-could-fly",
    title: "I Used to Think I Could Fly",
    type: "Album",
    year: 2022,
    note: { fr: "Premier album studio.", en: "Debut studio album." },
    spotifyId: "",
  },
  {
    slug: "too-young-to-be-sad",
    title: "Too Young to Be Sad",
    type: "EP",
    year: 2021,
    note: {
      fr: "EP incluant « You Broke Me First ».",
      en: "EP including “You Broke Me First”.",
    },
    spotifyId: "",
  },
  {
    slug: "all-the-things-i-never-said",
    title: "All the Things I Never Said",
    type: "EP",
    year: 2020,
    note: { fr: "EP de débuts.", en: "Debut EP." },
    spotifyId: "",
  },
];

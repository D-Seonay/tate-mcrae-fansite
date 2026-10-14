/**
 * Discographie. Les dates/années sont à vérifier avant mise en ligne.
 *
 * `spotifyId` : l'ID de l'album sur Spotify.
 *   Sur Spotify : album > ... > Partager > "Copier le lien de l'album",
 *   l'ID est la partie après /album/ (ex. open.spotify.com/album/XXXX -> "XXXX").
 *   Laisse vide ("") tant que tu n'as pas collé le vrai ID : le lecteur
 *   affichera un placeholder propre au lieu d'un embed cassé.
 *
 * `cover` : chemin vers TON visuel (dans /public). N'héberge pas la pochette
 *   officielle — utilise un visuel libre de droits, le tien, ou laisse vide
 *   (un dégradé est affiché à la place).
 */
export type Release = {
  slug: string;
  title: string;
  type: "Album" | "EP" | "Single";
  year: number;
  note?: string;
  spotifyId?: string;
  cover?: string;
  current?: boolean;
};

export const releases: Release[] = [
  {
    slug: "nouvelle-ere",
    title: "Nouvelle ère (2026)",
    type: "Single",
    year: 2026,
    note:
      "Virage old-money méditerranéen, argentique et chaud. Détails à compléter dès l'officialisation.",
    spotifyId: "",
    current: true,
  },
  {
    slug: "so-close-to-what",
    title: "So Close to What",
    type: "Album",
    year: 2025,
    note: "Troisième album studio. Une édition deluxe est également sortie.",
    spotifyId: "",
  },
  {
    slug: "think-later",
    title: "Think Later",
    type: "Album",
    year: 2023,
    note: "Deuxième album studio, porté par le succès de « Greedy ».",
    spotifyId: "",
  },
  {
    slug: "i-used-to-think-i-could-fly",
    title: "I Used to Think I Could Fly",
    type: "Album",
    year: 2022,
    note: "Premier album studio.",
    spotifyId: "",
  },
  {
    slug: "too-young-to-be-sad",
    title: "Too Young to Be Sad",
    type: "EP",
    year: 2021,
    note: "EP incluant « You Broke Me First ».",
    spotifyId: "",
  },
  {
    slug: "all-the-things-i-never-said",
    title: "All the Things I Never Said",
    type: "EP",
    year: 2020,
    note: "EP de débuts.",
    spotifyId: "",
  },
];

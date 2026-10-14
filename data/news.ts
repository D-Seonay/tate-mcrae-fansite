/**
 * Fil d'actualité. Ce sont des ENTRÉES D'EXEMPLE à remplacer par de vraies
 * actus (sorties, annonces). Garde-les courtes et datées.
 *
 * `date` au format "YYYY-MM-DD" pour le tri automatique (plus récent en haut).
 * `link` : optionnel, vers la source officielle.
 */
export type NewsItem = {
  date: string;
  title: string;
  body: string;
  link?: string;
  tag?: "Sortie" | "Tournée" | "Média" | "Annonce";
};

export const news: NewsItem[] = [
  {
    date: "2026-08-01",
    title: "Nouvelle direction visuelle à Osheaga",
    body:
      "Lors de son set à Osheaga (Montréal), de nouveaux visuels de scène ont été dévoilés, marquant un virage par rapport aux ères précédentes. [Entrée d'exemple — à remplacer.]",
    tag: "Annonce",
  },
  {
    date: "2025-02-21",
    title: "Sortie de l'album « So Close to What »",
    body:
      "Troisième album studio de Tate McRae. [Entrée d'exemple — vérifie la date exacte et adapte.]",
    tag: "Sortie",
  },
];

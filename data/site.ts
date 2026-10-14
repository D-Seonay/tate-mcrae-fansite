/**
 * Infos globales du site. Édite ici le nom, les liens sociaux et la mention
 * légale. Rien d'officiel : ce site est un projet de fan.
 */
export const site = {
  artist: "Tate McRae",
  // Le slogan et la description sont traduits dans messages/{en,fr}.json
  // (namespace `site`). Édite-les là plutôt qu'ici.
  // Liens officiels à faire pointer vers les vrais comptes (embeds / sorties).
  // NB : vérifie les IDs Spotify / Apple Music ci-dessous avant la mise en ligne.
  links: {
    spotify: "https://open.spotify.com/artist/45dkTj5sMRSjrmBSBeiHym", // à vérifier
    appleMusic: "https://music.apple.com/artist/tate-mcrae/1120463640", // à vérifier
    youtube: "https://www.youtube.com/@tatemcrae",
    instagram: "https://www.instagram.com/tatemcrae/",
    tiktok: "https://www.tiktok.com/@tatemcrae",
    official: "https://www.tatemcrae.com/",
  },
  // Lien communauté (à créer / remplacer par le tien).
  community: {
    discord: "", // ex. "https://discord.gg/xxxx" — laissé vide pour l'instant
  },
};

export type SiteConfig = typeof site;

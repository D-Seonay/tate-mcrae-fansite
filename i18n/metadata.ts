import { routing, type AppPathname } from "./routing";
import { getPathname } from "./navigation";

/**
 * Construit les alternates `hreflang` d'une page pour chaque langue, en
 * s'appuyant sur les chemins localisés (ex. /en/discography, /fr/discographie).
 */
export function languageAlternates(href: AppPathname) {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = getPathname({ href, locale });
  }
  return languages;
}

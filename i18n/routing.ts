import { defineRouting } from "next-intl/routing";

/**
 * Configuration i18n centrale.
 * - Anglais par défaut, français en seconde langue.
 * - URLs préfixées par la langue (/en, /fr).
 * - Chemins localisés : le même segment interne mène à des URLs adaptées
 *   (ex. interne "/news" → /en/news et /fr/actu).
 */
export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/news": {
      en: "/news",
      fr: "/actu",
    },
    "/discography": {
      en: "/discography",
      fr: "/discographie",
    },
    "/about": {
      en: "/about",
      fr: "/a-propos",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;

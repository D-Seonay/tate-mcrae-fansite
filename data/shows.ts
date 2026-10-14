import type { Localized } from "./format";

/**
 * Dates de concert. ENTRÉES D'EXEMPLE à remplacer par les vraies dates (ou à
 * alimenter depuis une source comme le site officiel / un billetteur).
 *
 * `date` au format "YYYY-MM-DD". Les dates passées sont filtrées automatiquement
 * côté affichage (voir la page Actu et le Hero).
 * `city` / `country` : bilingues { en, fr } (ex. Londres / London).
 * `venue` : nom propre, non traduit.
 */
export type Show = {
  date: string;
  city: Localized;
  venue: string;
  country: Localized;
  ticketUrl?: string;
};

export const shows: Show[] = [
  {
    date: "2026-11-12",
    city: "Paris",
    venue: "Accor Arena",
    country: { fr: "France", en: "France" },
    ticketUrl: "",
  },
  {
    date: "2026-11-15",
    city: { fr: "Londres", en: "London" },
    venue: "The O2",
    country: { fr: "Royaume-Uni", en: "United Kingdom" },
    ticketUrl: "",
  },
  {
    date: "2026-11-20",
    city: { fr: "Berlin", en: "Berlin" },
    venue: "Uber Arena",
    country: { fr: "Allemagne", en: "Germany" },
    ticketUrl: "",
  },
];

/** Retourne les concerts à venir, triés du plus proche au plus lointain. */
export function upcomingShows(from: Date = new Date()): Show[] {
  const today = new Date(from.toISOString().slice(0, 10));
  return shows
    .filter((s) => new Date(s.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

import type { Locale } from "@/i18n/routing";

/**
 * Champ de contenu bilingue. Une valeur peut être :
 * - une simple chaîne (identique dans toutes les langues, ex. un nom propre) ;
 * - un objet { en, fr } pour un contenu traduit.
 */
export type Localized<T = string> = T | { en: T; fr: T };

/** Choisit la bonne langue d'un champ localisé (repli sur l'anglais). */
export function localize<T>(value: Localized<T>, locale: Locale): T {
  if (value && typeof value === "object" && "en" in value && "fr" in value) {
    return (value as { en: T; fr: T })[locale] ?? (value as { en: T }).en;
  }
  return value as T;
}

/** Formate une date "YYYY-MM-DD" lisible selon la langue (ex. "12 novembre 2026" / "November 12, 2026"). */
export function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso + "T00:00:00");
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

/** Version courte (ex. "12 nov." / "Nov 12"). */
export function formatDateShort(iso: string, locale: Locale): string {
  const d = new Date(iso + "T00:00:00");
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
  }).format(d);
}

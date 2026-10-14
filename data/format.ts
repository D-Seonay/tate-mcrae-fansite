/** Formate une date "YYYY-MM-DD" en français lisible (ex. "12 novembre 2026"). */
export function formatDateFr(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

/** Version courte (ex. "12 nov."). */
export function formatDateShortFr(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
  }).format(d);
}

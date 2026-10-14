"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

/**
 * Bascule de langue : conserve la page courante et change uniquement la
 * locale (l'URL localisée est régénérée par next-intl).
 */
export default function LocaleSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const active = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: Locale) {
    if (next === active) return;
    // `pathname` est le chemin interne (canonique) ; on réémet dans l'autre langue.
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      className={`inline-flex items-center gap-1 text-xs font-medium ${className}`}
      role="group"
      aria-label="Langue"
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && <span className="mx-1 text-stone">/</span>}
          <button
            type="button"
            onClick={() => switchTo(loc)}
            aria-current={loc === active ? "true" : undefined}
            className={`uppercase tracking-wider transition-colors ${
              loc === active
                ? "text-signal"
                : "text-muted hover:text-ink"
            }`}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}

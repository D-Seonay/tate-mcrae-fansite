import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  const socials: { label: string; href: string }[] = [
    { label: "Spotify", href: site.links.spotify },
    { label: "YouTube", href: site.links.youtube },
    { label: "Instagram", href: site.links.instagram },
    { label: "TikTok", href: site.links.tiktok },
    { label: t("officialSite"), href: site.links.official },
  ];

  return (
    <footer className="mt-24 border-t border-stone/60 bg-sand/50">
      {/* Bandeau défilant — nom de l'artiste à la façon d'une marquee éditoriale. */}
      <div className="overflow-hidden border-b border-stone/60 py-6">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex items-center" aria-hidden={i === 1}>
              {Array.from({ length: 6 }).map((_, j) => (
                <span
                  key={j}
                  className="mx-6 font-display text-3xl italic text-ink/30"
                >
                  {site.artist}
                  <span className="ml-6 text-signal/50">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-content px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg text-ink">{site.artist}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {tSite("description")}
            </p>
          </div>
          <nav aria-label={t("linksLabel")}>
            <p className="overline mb-3 text-muted">{t("official")}</p>
            <ul className="space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink transition-colors hover:text-signal"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mention légale — indispensable pour un site de fan. */}
        <div className="mt-10 border-t border-stone/60 pt-6 text-xs leading-relaxed text-muted">
          <p>{t("legal")}</p>
          <p className="mt-3">
            {t("copyright", { year: new Date().getFullYear() })}{" "}
            <Link href="/about" className="underline hover:text-ink">
              {t("learnMore")}
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

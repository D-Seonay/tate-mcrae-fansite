import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Reveal from "@/app/components/Reveal";
import SectionHeading from "@/app/components/SectionHeading";
import { news } from "@/data/news";
import { upcomingShows } from "@/data/shows";
import { formatDate, localize } from "@/data/format";
import type { Locale } from "@/i18n/routing";
import { languageAlternates } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.news" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { languages: languageAlternates("/news") },
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  setRequestLocale(localeParam);
  const locale = localeParam as Locale;
  const t = await getTranslations("newsPage");
  const tTags = await getTranslations("tags");

  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const shows = upcomingShows();

  return (
    <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading overline={t("overline")} title={t("title")} />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Fil d'actualité */}
        <section>
          <h3 className="mb-6 font-display text-2xl text-ink">
            {t("newsHeading")}
          </h3>
          {sortedNews.length === 0 ? (
            <p className="text-sm text-muted">{t("noNews")}</p>
          ) : (
            <ul className="space-y-8">
              {sortedNews.map((n, i) => (
                <Reveal
                  as="li"
                  key={n.date + localize(n.title, locale)}
                  delay={i * 0.06}
                  y={18}
                  className="border-l-2 border-signal pl-5"
                >
                  <p className="overline text-muted">
                    {formatDate(n.date, locale)}
                    {n.tag ? ` · ${tTags(n.tag)}` : ""}
                  </p>
                  <h4 className="mt-1 font-display text-xl text-ink">
                    {localize(n.title, locale)}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {localize(n.body, locale)}
                  </p>
                  {n.link && (
                    <a
                      href={n.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-signal underline-offset-4 hover:underline"
                    >
                      {t("readMore")}
                    </a>
                  )}
                </Reveal>
              ))}
            </ul>
          )}
        </section>

        {/* Agenda */}
        <section>
          <h3 className="mb-6 font-display text-2xl text-ink">
            {t("datesHeading")}
          </h3>
          {shows.length === 0 ? (
            <p className="text-sm text-muted">{t("noDates")}</p>
          ) : (
            <ul className="space-y-4">
              {shows.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.date}
                  delay={i * 0.06}
                  y={16}
                  className="rounded-2xl border border-stone/60 bg-sand/40 p-4 transition-colors hover:border-signal/50"
                >
                  <p className="font-display text-lg text-ink">
                    {localize(s.city, locale)}
                  </p>
                  <p className="text-sm text-muted">
                    {s.venue}, {localize(s.country, locale)}
                  </p>
                  <p className="mt-1 text-sm text-ink">
                    {formatDate(s.date, locale)}
                  </p>
                  {s.ticketUrl && (
                    <a
                      href={s.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-signal underline-offset-4 hover:underline"
                    >
                      {t("tickets")}
                    </a>
                  )}
                </Reveal>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

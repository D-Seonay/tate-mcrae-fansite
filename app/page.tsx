import Link from "next/link";
import Hero from "./components/Hero";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import SpotifyEmbed from "./components/SpotifyEmbed";
import AlbumCard from "./components/AlbumCard";
import { releases } from "@/data/discography";
import { upcomingShows } from "@/data/shows";
import { news } from "@/data/news";
import { formatDateFr } from "@/data/format";

export default function Home() {
  const shows = upcomingShows();
  const nextShow = shows[0];
  const current = releases.find((r) => r.current) ?? releases[0];
  const latestNews = [...news]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <Hero nextShow={nextShow} />

      {/* Dernier single / nouvelle ère */}
      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading overline="À écouter" title="La nouvelle ère" />
        </Reveal>
        <div className="mt-10 grid items-start gap-8 md:grid-cols-[1fr_1.2fr]">
          <Reveal delay={0.05} className="space-y-4">
            <p className="font-display text-2xl italic text-ink">
              {current.title}
            </p>
            {current.note && (
              <p className="text-sm leading-relaxed text-muted">
                {current.note}
              </p>
            )}
            <Link
              href="/discographie"
              className="inline-block text-sm font-medium text-signal underline-offset-4 hover:underline"
            >
              Toute la discographie →
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <SpotifyEmbed albumId={current.spotifyId} title={current.title} />
          </Reveal>
        </div>
      </section>

      {/* Prochaines dates */}
      {shows.length > 0 && (
        <section className="border-y border-stone/60 bg-sand/40">
          <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
            <Reveal>
              <SectionHeading overline="En concert" title="Prochaines dates" />
            </Reveal>
            <ul className="mt-10 divide-y divide-stone/60">
              {shows.map((s, i) => (
                <Reveal
                  as="li"
                  key={`${s.date}-${s.city}`}
                  delay={i * 0.06}
                  y={18}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 py-5">
                    <div>
                      <p className="font-display text-xl text-ink">
                        {s.city}
                        <span className="ml-2 align-middle text-sm font-sans text-muted">
                          {s.venue}, {s.country}
                        </span>
                      </p>
                      <p className="text-sm text-muted">{formatDateFr(s.date)}</p>
                    </div>
                    {s.ticketUrl ? (
                      <a
                        href={s.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-ink/20 px-4 py-2 text-sm text-ink transition-colors hover:border-signal hover:text-signal"
                      >
                        Billets
                      </a>
                    ) : (
                      <span className="overline text-muted">Bientôt</span>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>
            <Link
              href="/actu"
              className="mt-8 inline-block text-sm font-medium text-signal underline-offset-4 hover:underline"
            >
              Agenda complet →
            </Link>
          </div>
        </section>
      )}

      {/* Discographie — aperçu */}
      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading overline="Albums & EP" title="Discographie" />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {releases.slice(0, 3).map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.08} y={22}>
              <AlbumCard release={r} />
            </Reveal>
          ))}
        </div>
        <Link
          href="/discographie"
          className="mt-10 inline-block text-sm font-medium text-signal underline-offset-4 hover:underline"
        >
          Voir toute la discographie →
        </Link>
      </section>

      {/* Actu — aperçu */}
      {latestNews.length > 0 && (
        <section className="border-t border-stone/60 bg-sand/40">
          <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
            <Reveal>
              <SectionHeading overline="Dernières infos" title="Actu" />
            </Reveal>
            <ul className="mt-10 space-y-6">
              {latestNews.map((n, i) => (
                <Reveal
                  as="li"
                  key={n.date}
                  delay={i * 0.07}
                  y={18}
                  className="border-l-2 border-stone pl-4"
                >
                  <p className="overline text-muted">
                    {formatDateFr(n.date)}
                    {n.tag ? ` · ${n.tag}` : ""}
                  </p>
                  <p className="mt-1 font-display text-lg text-ink">{n.title}</p>
                </Reveal>
              ))}
            </ul>
            <Link
              href="/actu"
              className="mt-8 inline-block text-sm font-medium text-signal underline-offset-4 hover:underline"
            >
              Toute l&apos;actu →
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

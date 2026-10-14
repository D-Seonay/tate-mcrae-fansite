import type { Metadata } from "next";
import SectionHeading from "../components/SectionHeading";
import { news } from "@/data/news";
import { upcomingShows } from "@/data/shows";
import { formatDateFr } from "@/data/format";

export const metadata: Metadata = {
  title: "Actu & agenda",
  description: "Les dernières actualités et les prochaines dates de concert.",
};

export default function ActuPage() {
  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const shows = upcomingShows();

  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8">
      <SectionHeading overline="Actu & agenda" title="Quoi de neuf" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Fil d'actualité */}
        <section>
          <h3 className="mb-6 font-display text-2xl text-ink">Actualité</h3>
          {sortedNews.length === 0 ? (
            <p className="text-sm text-muted">Rien à signaler pour l&apos;instant.</p>
          ) : (
            <ul className="space-y-8">
              {sortedNews.map((n) => (
                <li
                  key={n.date + n.title}
                  className="border-l-2 border-signal pl-5"
                >
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {formatDateFr(n.date)}
                    {n.tag ? ` · ${n.tag}` : ""}
                  </p>
                  <h4 className="mt-1 font-display text-xl text-ink">
                    {n.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {n.body}
                  </p>
                  {n.link && (
                    <a
                      href={n.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-signal underline-offset-4 hover:underline"
                    >
                      En savoir plus →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Agenda */}
        <section>
          <h3 className="mb-6 font-display text-2xl text-ink">Prochaines dates</h3>
          {shows.length === 0 ? (
            <p className="text-sm text-muted">Aucune date annoncée pour le moment.</p>
          ) : (
            <ul className="space-y-4">
              {shows.map((s) => (
                <li
                  key={`${s.date}-${s.city}`}
                  className="rounded-lg border border-stone/60 bg-sand/40 p-4"
                >
                  <p className="font-display text-lg text-ink">{s.city}</p>
                  <p className="text-sm text-muted">
                    {s.venue}, {s.country}
                  </p>
                  <p className="mt-1 text-sm text-ink">{formatDateFr(s.date)}</p>
                  {s.ticketUrl && (
                    <a
                      href={s.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-signal underline-offset-4 hover:underline"
                    >
                      Billets →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

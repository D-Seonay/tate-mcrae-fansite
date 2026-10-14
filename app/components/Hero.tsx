import Link from "next/link";
import { site } from "@/data/site";
import { formatDateFr } from "@/data/format";
import type { Show } from "@/data/shows";

/**
 * Hero plein écran. En l'absence de visuel officiel (droits), on s'appuie sur
 * une composition typographique chaude. Si tu as un visuel dont tu as les
 * droits, pose-le dans /public et renseigne `heroImage` dans data/site.ts
 * (puis décommente l'<img> ci-dessous).
 */
export default function Hero({ nextShow }: { nextShow?: Show }) {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Fond chaud « méditerranéen » en dégradé, avec un halo rouge discret. */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-sand to-stone"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-1/4 -z-10 h-96 w-96 rounded-full bg-signal/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-content px-5 py-20 md:px-8">
        <p className="animate-fade-up text-xs uppercase tracking-[0.3em] text-signal">
          {site.tagline}
        </p>
        <h1 className="animate-fade-up mt-4 font-display text-5xl leading-[1.05] text-ink md:text-7xl lg:text-8xl">
          {site.artist}
        </h1>
        <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Actualité, dates de concert, discographie et clips — tout l&apos;univers
          de sa nouvelle ère, réuni au même endroit.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/discographie"
            className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-signal-dark"
          >
            Écouter la discographie
          </Link>
          <Link
            href="/actu"
            className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Voir l&apos;actu
          </Link>
        </div>

        {nextShow && (
          <div className="animate-fade-up mt-12 inline-flex flex-col gap-1 border-l-2 border-signal pl-4">
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Prochain concert
            </span>
            <span className="font-display text-lg text-ink">
              {nextShow.city} — {formatDateFr(nextShow.date)}
            </span>
            <span className="text-sm text-muted">
              {nextShow.venue}, {nextShow.country}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

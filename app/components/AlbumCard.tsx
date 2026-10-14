import SpotifyEmbed from "./SpotifyEmbed";
import type { Release } from "@/data/discography";

export default function AlbumCard({ release }: { release: Release }) {
  return (
    <article
      className="group overflow-hidden rounded-xl border border-stone/60 bg-sand/40"
      id={release.slug}
    >
      {/* Visuel : ton image si fournie, sinon un dégradé chaud en placeholder. */}
      <div className="relative aspect-square w-full overflow-hidden">
        {release.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={release.cover}
            alt={`Visuel — ${release.title}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-end bg-gradient-to-br from-sand via-stone to-olive/60 p-4"
            aria-hidden="true"
          >
            <span className="font-display text-2xl text-ink/70">
              {release.title}
            </span>
          </div>
        )}
        {release.current && (
          <span className="absolute left-3 top-3 rounded-full bg-signal px-3 py-1 text-xs font-medium uppercase tracking-wider text-cream">
            Nouvelle ère
          </span>
        )}
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl text-ink">{release.title}</h3>
          <span className="whitespace-nowrap text-xs uppercase tracking-wider text-muted">
            {release.type} · {release.year}
          </span>
        </div>
        {release.note && (
          <p className="text-sm leading-relaxed text-muted">{release.note}</p>
        )}
        <SpotifyEmbed albumId={release.spotifyId} title={release.title} />
      </div>
    </article>
  );
}

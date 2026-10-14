"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import SpotifyEmbed from "./SpotifyEmbed";
import type { Release } from "@/data/discography";

export default function AlbumCard({ release }: { release: Release }) {
  const reduce = useReducedMotion();
  const t = useTranslations("albumCard");

  return (
    <motion.article
      id={release.slug}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group overflow-hidden rounded-2xl border border-stone/60 bg-sand/40 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10"
    >
      {/* Visuel : ton image si fournie, sinon un dégradé chaud en placeholder. */}
      <div className="relative aspect-square w-full overflow-hidden">
        {release.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={release.cover}
            alt={`Visuel — ${release.title}`}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-end bg-gradient-to-br from-sand via-stone to-olive/60 p-4 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            aria-hidden="true"
          >
            <span className="font-display text-2xl italic text-ink/70">
              {release.title}
            </span>
          </div>
        )}
        {release.current && (
          <span className="absolute left-3 top-3 rounded-full bg-signal px-3 py-1 text-xs font-medium uppercase tracking-wider text-cream shadow-sm">
            {t("currentBadge")}
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
    </motion.article>
  );
}

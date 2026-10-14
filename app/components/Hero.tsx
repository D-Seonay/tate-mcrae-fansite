"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { formatDate, localize } from "@/data/format";
import type { Show } from "@/data/shows";
import type { Locale } from "@/i18n/routing";

/**
 * Hero plein écran, direction « Riviera argentique ». Lumière chaude, halo
 * rouge pellicule, et une entrée orchestrée au chargement (le titre se révèle
 * ligne par ligne, le halo infuse). Parallax doux au scroll. En l'absence de
 * visuel officiel (droits), on s'appuie sur une composition typographique.
 */
export default function Hero({ nextShow }: { nextShow?: Show }) {
  const reduce = useReducedMotion();
  const t = useTranslations("hero");
  const tSite = useTranslations("site");
  const locale = useLocale() as Locale;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax : le fond et le titre glissent à des vitesses différentes.
  const haloY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* Fond chaud en dégradé, lent panoramique façon prise de vue argentique. */}
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-br from-cream via-sand to-stone"
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 -z-20 bg-[radial-gradient(130%_100%_at_80%_-10%,rgba(201,168,120,0.55),transparent_60%)] ${
          reduce ? "" : "animate-slow-pan"
        }`}
        aria-hidden="true"
      />

      {/* Halo rouge signature (maillot / landau de la pochette). */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduce ? undefined : haloY }}
        className="absolute -right-24 top-16 -z-10 h-[32rem] w-[32rem] rounded-full bg-signal/25 blur-3xl md:top-1/4"
      >
        <div className="h-full w-full animate-halo-pulse rounded-full bg-signal/20 blur-2xl" />
      </motion.div>

      <motion.div
        style={{ y: reduce ? undefined : titleY, opacity: reduce ? undefined : fade }}
        className="mx-auto w-full max-w-content px-5 py-20 md:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="overline text-signal"
        >
          {tSite("tagline")}
        </motion.p>

        {/* Titre révélé en remontant derrière un masque (clip éditorial). */}
        <h1 className="mt-5 overflow-hidden font-display text-hero text-ink">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.95, ease, delay: 0.1 }}
            className="block"
          >
            Tate
          </motion.span>
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.95, ease, delay: 0.22 }}
            className="block italic text-signal"
          >
            McRae
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          {t("intro")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.62 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/discography"
            className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-cream transition-transform duration-200 hover:bg-signal-dark active:scale-95"
          >
            {t("listen")}
          </Link>
          <Link
            href="/news"
            className="rounded-full border border-ink/25 px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink hover:bg-ink/5"
          >
            {t("seeNews")}
          </Link>
        </motion.div>

        {nextShow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.78 }}
            className="mt-14 inline-flex flex-col gap-1 border-l-2 border-signal pl-4"
          >
            <span className="overline text-muted">{t("nextShow")}</span>
            <span className="font-display text-lg text-ink">
              {localize(nextShow.city, locale)} —{" "}
              {formatDate(nextShow.date, locale)}
            </span>
            <span className="text-sm text-muted">
              {nextShow.venue}, {localize(nextShow.country, locale)}
            </span>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

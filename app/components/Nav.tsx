"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/data/site";

const links = [
  { href: "/", key: "home" },
  { href: "/news", key: "news" },
  { href: "/discography", key: "discography" },
  { href: "/about", key: "about" },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const tSite = useTranslations("site");

  // Ferme le menu à chaque changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloque le scroll du fond quand le menu plein écran est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-stone/60 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink"
          aria-label={`${site.artist} — ${t("home")}`}
        >
          {site.artist}
          <span className="ml-2 align-middle text-[0.6rem] uppercase tracking-[0.2em] text-signal">
            {t("fan")}
          </span>
        </Link>

        {/* Navigation desktop */}
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative transition-colors hover:text-ink ${
                    active ? "text-ink" : "text-muted"
                  }`}
                >
                  {t(l.key)}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-signal"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t("close") : t("open")}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">{t("menu")}</span>
          <div className="flex w-6 flex-col items-end gap-1.5">
            <motion.span
              animate={open ? { rotate: 45, y: 6, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="block h-0.5 w-full bg-ink"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1, width: "70%" }}
              className="block h-0.5 w-3/4 bg-ink"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="block h-0.5 w-full bg-ink"
            />
          </div>
        </button>
      </nav>

      {/* Menu plein écran (mobile) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-cream/98 backdrop-blur-xl md:hidden"
          >
            <ul className="mt-24 flex flex-col gap-2 px-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-stone/50"
                >
                  <Link
                    href={l.href}
                    className="block py-5 font-display text-4xl text-ink"
                  >
                    {t(l.key)}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <p className="mt-auto px-6 pb-10 text-xs text-muted">
              {tSite("tagline")}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

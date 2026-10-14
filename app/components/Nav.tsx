import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/actu", label: "Actu" },
  { href: "/discographie", label: "Discographie" },
  { href: "/a-propos", label: "À propos" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone/60 bg-cream/85 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink"
        >
          {site.artist}
          <span className="ml-2 align-middle text-[0.6rem] uppercase tracking-[0.2em] text-signal">
            fan
          </span>
        </Link>
        <ul className="flex items-center gap-5 text-sm md:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

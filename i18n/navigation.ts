import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Wrappers de navigation conscients de la langue. Utilise ces `Link`,
 * `usePathname`, `useRouter`… à la place de ceux de `next/*` pour que les
 * URLs localisées (/en/news, /fr/actu) soient générées automatiquement.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/** Négocie la langue et redirige vers l'URL préfixée adéquate. */
export default createMiddleware(routing);

export const config = {
  // Tout sauf les API, les fichiers internes Next et les fichiers statiques.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

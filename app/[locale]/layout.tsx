import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import "../globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Grain from "../components/Grain";
import { routing } from "@/i18n/routing";
import { site } from "@/data/site";

/* Fraunces : serif éditoriale « mode / Riviera », chaleureuse et optique.
   Space Grotesk : grotesque moderne au contraste net pour l'UI et le texte. */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.artist} — ${site.tagline}`,
    template: `%s — ${site.artist}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.artist} — ${site.tagline}`,
    description: site.description,
    type: "website",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-cream text-ink antialiased">
        <NextIntlClientProvider>
          <Grain />
          <Nav />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

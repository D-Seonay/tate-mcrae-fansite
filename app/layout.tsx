import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Grain from "./components/Grain";
import { site } from "@/data/site";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Polices chargées via Google Fonts (serif éditoriale + sans propre).
            Les noms correspondent aux variables --font-display / --font-sans
            définies dans globals.css. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-cream text-ink antialiased">
        <Grain />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

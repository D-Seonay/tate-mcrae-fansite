import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Grain from "./components/Grain";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-cream text-ink antialiased">
        <Grain />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

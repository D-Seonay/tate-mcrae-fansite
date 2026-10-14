import type { Metadata } from "next";
import SectionHeading from "../components/SectionHeading";
import AlbumCard from "../components/AlbumCard";
import { releases } from "@/data/discography";

export const metadata: Metadata = {
  title: "Discographie",
  description: "Albums, EP et singles — avec lecteurs officiels intégrés.",
};

export default function DiscographiePage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8">
      <SectionHeading overline="Albums & EP" title="Discographie" />
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
        Chaque sortie est accompagnée du lecteur Spotify officiel. Clique sur
        un titre pour écouter directement — rien n&apos;est hébergé ici, tout
        passe par les plateformes officielles.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {releases.map((r) => (
          <AlbumCard key={r.slug} release={r} />
        ))}
      </div>
    </div>
  );
}

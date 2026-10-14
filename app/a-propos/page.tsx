import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos",
  description: "Ce qu'est ce site, et ce qu'il n'est pas.",
};

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading overline="À propos" title="Un site de fan" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-muted">
          <p>
            Ce site est un projet de fan dédié à {site.artist} : un endroit
            soigné pour suivre son actualité, retrouver sa discographie et ses
            clips, et ne rien manquer de sa nouvelle ère.
          </p>

          <div className="rounded-2xl border border-signal/30 bg-signal/5 p-5 text-sm text-ink">
            <p className="font-medium">Ce site n&apos;est pas officiel.</p>
            <p className="mt-2 text-muted">
              Il n&apos;a aucun lien avec {site.artist}, son management ou son
              label. Aucun fichier audio ou visuel officiel n&apos;y est hébergé :
              les écoutes passent par les lecteurs officiels (Spotify, Apple
              Music, YouTube). Les paroles, pochettes, photos et marques
              appartiennent à leurs ayants droit respectifs.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-display text-xl text-ink">
              Une demande de retrait ?
            </h3>
            <p>
              Si tu es ayant droit et souhaites qu&apos;un contenu soit modifié
              ou retiré, contacte-nous et nous donnerons suite rapidement.
              (Ajoute ici une adresse de contact.)
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-display text-xl text-ink">Crédits</h3>
            <p>
              Conçu et développé par un fan. Design et intégration :{" "}
              <span className="text-ink">à compléter</span>. Musique et visuels
              officiels : © {site.artist} et ses ayants droit.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

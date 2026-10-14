import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Reveal from "@/app/components/Reveal";
import SectionHeading from "@/app/components/SectionHeading";
import AlbumCard from "@/app/components/AlbumCard";
import { releases } from "@/data/discography";
import { languageAlternates } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.discography" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { languages: languageAlternates("/discography") },
  };
}

export default async function DiscographyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("discographyPage");

  return (
    <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading overline={t("overline")} title={t("title")} />
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          {t("intro")}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {releases.map((r, i) => (
          <Reveal key={r.slug} delay={(i % 3) * 0.08} y={22}>
            <AlbumCard release={r} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

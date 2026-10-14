import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Reveal from "@/app/components/Reveal";
import SectionHeading from "@/app/components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos",
  description: "Ce qu'est ce site, et ce qu'il n'est pas.",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading overline={t("overline")} title={t("title")} />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-muted">
          <p>{t("intro", { artist: site.artist })}</p>

          <div className="rounded-2xl border border-signal/30 bg-signal/5 p-5 text-sm text-ink">
            <p className="font-medium">{t("notOfficialTitle")}</p>
            <p className="mt-2 text-muted">
              {t("notOfficialBody", { artist: site.artist })}
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-display text-xl text-ink">
              {t("takedownTitle")}
            </h3>
            <p>{t("takedownBody")}</p>
          </div>

          <div>
            <h3 className="mb-2 font-display text-xl text-ink">
              {t("creditsTitle")}
            </h3>
            <p>
              {t("creditsBody", {
                artist: site.artist,
                placeholder: t("creditsPlaceholder"),
              })}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

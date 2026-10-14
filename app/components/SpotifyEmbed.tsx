import { useTranslations } from "next-intl";
import { site } from "@/data/site";

type Props = {
  /** ID d'album Spotify (partie après /album/). Vide = placeholder propre. */
  albumId?: string;
  /** ID de track Spotify (partie après /track/). Prioritaire sur albumId. */
  trackId?: string;
  title?: string;
};

/**
 * Lecteur Spotify officiel (iframe). Si aucun ID n'est fourni, affiche un
 * placeholder élégant au lieu d'un embed cassé — pratique tant que tu n'as pas
 * collé les vrais IDs.
 */
export default function SpotifyEmbed({ albumId, trackId, title }: Props) {
  const t = useTranslations("spotify");
  const kind = trackId ? "track" : albumId ? "album" : null;
  const id = trackId || albumId;

  if (!kind || !id) {
    return (
      <div className="flex flex-col items-start gap-2 rounded-lg border border-dashed border-stone bg-sand/40 p-5 text-sm text-muted">
        <span className="text-xs uppercase tracking-[0.2em] text-signal">
          {t("label")}
        </span>
        <p>
          {t("placeholder", {
            title: title ? t("placeholderTitle", { title }) : "",
          })}
        </p>
        <a
          href={site.links.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-ink underline hover:text-signal"
        >
          {t("listenOn")}
        </a>
      </div>
    );
  }

  return (
    <iframe
      title={title ? `${t("label")} — ${title}` : t("label")}
      src={`https://open.spotify.com/embed/${kind}/${id}?utm_source=generator`}
      width="100%"
      height={kind === "track" ? 152 : 352}
      frameBorder={0}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      className="rounded-lg"
    />
  );
}

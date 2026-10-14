import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Autorise les visuels distants que TU ajoutes (ex. tes propres uploads, un CDN).
    // Ajoute ici les domaines dont tu as le droit d'utiliser les images.
    remotePatterns: [],
  },
};

// Branche next-intl (lecture de i18n/request.ts).
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);

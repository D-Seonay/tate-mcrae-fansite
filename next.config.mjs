/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Autorise les visuels distants que TU ajoutes (ex. tes propres uploads, un CDN).
    // Ajoute ici les domaines dont tu as le droit d'utiliser les images.
    remotePatterns: [],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    return [
      { source: "/onderhoud-nl", destination: "/over-ons#onderhoud-nl", permanent: true },
      { source: "/schilderscool", destination: "/over-ons#schilderscool", permanent: true },
      { source: "/projecten/:path+", destination: "/projecten", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
    ];
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;

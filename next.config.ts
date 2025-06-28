import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "k.top4top.io",
      },
    ],
  },
};

export default nextConfig;

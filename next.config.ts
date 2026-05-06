import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-next-app',
  assetPrefix: '/my-next-app/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

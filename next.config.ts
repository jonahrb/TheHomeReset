import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/TheHomeReset',
  assetPrefix: '/TheHomeReset/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

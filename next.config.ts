import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Serve app from root; redirect legacy path `/TheHomeReset` to `/`
  async redirects() {
    return [
      {
        source: '/TheHomeReset',
        destination: '/',
        permanent: true,
      },
      {
        source: '/TheHomeReset/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

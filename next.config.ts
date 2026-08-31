/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig: NextConfig = {
  basePath: '/srirangam',
  images: {
    unoptimized: true,
  },
  output: process.env.BUILD_FOR_PAGES === 'true' ? 'export' : 'standalone',
  turbopack: {},
};

export default withPWA(nextConfig);

import type { NextConfig } from "next";
import { createContentlayerPlugin } from "next-contentlayer2";

const withContentlayer = createContentlayerPlugin();

const nextConfig: NextConfig = {
  transpilePackages: ['fatcn-ui'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@fatcn-ui': 'fatcn-ui'
    }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      }
    ],
  },
  experimental: {
    esmExternals: true // This might help with ESM-related issues
  }
};

export default withContentlayer(nextConfig);

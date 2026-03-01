/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    deviceSizes: [640, 768, 1024, 1280, 1536],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "asset.leetekwoo.com",
        port: "",
      },
    ],
    minimumCacheTTL: 300000,
  },

  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    BASE_URL: process.env.BASE_URL,
  },
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

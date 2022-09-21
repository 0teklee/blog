/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
    minimumCacheTTL: 300000,
  },
  env: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  compress: true,
};

module.exports = nextConfig;

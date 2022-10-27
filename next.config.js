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
    TWITTER_TOKEN: process.env.TWITTER_TOKEN,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    TW_ACCESS_TOKEN: process.env.TW_ACCESS_TOKEN,
    TW_ACCESS_TOKEN_SECRET: process.env.TW_ACCESS_TOKEN_SECRET,
    TW_API_KEY: process.env.TW_API_KEY,
    TW_API_KEY_SECRET: process.env.TW_API_KEY_SECRET,
    NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
  },
  compress: true,
};

module.exports = nextConfig;

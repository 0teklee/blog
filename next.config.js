/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    CLOUD_NAME: "dolziw8fv",
    GA_TRACKING_ID: "G-6R2HEL045P",
  },
};

module.exports = nextConfig;

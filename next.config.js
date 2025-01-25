/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
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
    GUESTBOOK_GAUTH_CLIENT_ID: process.env.GUESTBOOK_GAUTH_CLIENT_ID,
    GUESTBOOK_GAUTH_CLIENTPW: process.env.GUESTBOOK_GAUTH_CLIENTPW,
    ADMIN_GUESTBOOK_TOKEN: process.env.ADMIN_GUESTBOOK_TOKEN,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_NAME: process.env.ADMIN_NAME,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    BASE_URL: process.env.BASE_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  },
  compress: true,
};

module.exports = nextConfig;

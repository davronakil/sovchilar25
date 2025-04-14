/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru', 'uz'],
    defaultLocale: 'en',
    localeDetection: false
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'],
  }
};

module.exports = nextConfig;

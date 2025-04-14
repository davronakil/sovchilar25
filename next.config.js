/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React's strict mode for better development experience
  reactStrictMode: true,

  // Configure image domains for Next.js Image component
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;

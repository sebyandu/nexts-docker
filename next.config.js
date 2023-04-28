/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  presets: ["next/babel"],
  plugins: [["styled-components", { ssr: true }]],
};

module.exports = nextConfig;

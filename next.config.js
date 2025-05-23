/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
   images: {
      domains: ['avatars.githubusercontent.com'],
    },
  eslint: {
    dirs: ["pages/", "src/"],
  },
};

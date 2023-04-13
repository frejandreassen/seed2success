/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
    images: {
      domains: ['storage.googleapis.com'],
    },
}

module.exports = nextConfig

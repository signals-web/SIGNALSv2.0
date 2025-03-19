/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add your image domains here
    unoptimized: true // This allows static exports to work with images
  },
}

module.exports = nextConfig 
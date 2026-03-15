/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'zen.com',
      },
      {
        protocol: 'https',
        hostname: 'www.worldfirst.com',
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
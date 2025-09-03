/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/schoolImages/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/schoolImages/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/schoolImages/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
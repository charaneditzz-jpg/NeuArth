/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services1',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/home-1',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blank-1',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


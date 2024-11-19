/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.30',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;

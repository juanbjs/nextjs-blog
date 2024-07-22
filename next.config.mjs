/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.conmebol.com',
      }
    ]
  }
};

export default nextConfig;

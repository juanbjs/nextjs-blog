/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.conmebol.com',
      },
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk',
      }
    ]
  }
};

export default nextConfig;

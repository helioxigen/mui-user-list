/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/contact/:id*",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;

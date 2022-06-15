const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? "/mui-user-list/" : "",
  basePath: isProd ? "/mui-user-list/" : "",
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

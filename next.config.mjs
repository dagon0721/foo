/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  distDir: "out",
  basePath: isProd ? "/" : undefined,
  assetPrefix: isProd ? "https://dagon0721.github.io/foo/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

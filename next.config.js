const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // basePath: "_next/",
  // assetPrefix: "https://www.oit.ac.jp/rd/labs/kobayashi-lab/~endo/",
  // assetPrefix: "",
  assetPrefix: isProd ? "https://www.oit.ac.jp/rd/labs/kobayashi-lab/~endo/" : "",
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "https:/storage.googleapis.com/xesque-dev/challenge-images/",
  },
};

module.exports = nextConfig;

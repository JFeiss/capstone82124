/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
     remotePatterns: [
      {
        protocol: "https",
        hostname: "capstone82124.onrender.com/graphql",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;

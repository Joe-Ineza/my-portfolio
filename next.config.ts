import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from external sources (update domains as needed)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;

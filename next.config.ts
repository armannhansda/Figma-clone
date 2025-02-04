import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  image: [
    {
      protocol: 'https',
      hostname: 'image.unsplash.com', 
    }
  ]
};

export default nextConfig;

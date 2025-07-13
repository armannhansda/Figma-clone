import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{ 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.unsplash.com',
        port:  '' 
      }
   ] 
  }  
};

export default nextConfig;

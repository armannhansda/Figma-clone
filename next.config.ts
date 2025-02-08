import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  image:{ 
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

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: [],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
          },
        ],
      }
  
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/png", "image/webp"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
            port: "",
            pathname: "/mycompany-data-bucket-dev/**",
          },
        ],
      }
  
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/png", "image/webp"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "s3-eu-central-1.amazonaws.com",
            port: "",
            pathname: "/mycompany-data-bucket-dev/**",
          },
        ],
      }
  
};

export default nextConfig;

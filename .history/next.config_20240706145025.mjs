/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: [],
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

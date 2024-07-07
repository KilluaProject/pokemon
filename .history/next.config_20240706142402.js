/** @type {import('next').NextConfig} */
const nextConfig = {
images:{
    remotePatterns:[
        {
            protocol:"https",
            hostname:"iraw.githubusercontent.com",
            port:'',
            pathname:''
        }
    ]
}
  
};

export default nextConfig;

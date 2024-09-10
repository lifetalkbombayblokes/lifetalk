/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'img.daisyui.com'
            },
            {
                hostname: 'tsuahomfkoxepnrgbjcu.supabase.co'
            },
            {
                protocol: "http",
                hostname: "*",
              },
              {
                protocol: "https",
                hostname: "*",
              },
        ]
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'img.daisyui.com'
            },
            {
                hostname: 'tsuahomfkoxepnrgbjcu.supabase.co'
            }
        ]
    }
};

export default nextConfig;

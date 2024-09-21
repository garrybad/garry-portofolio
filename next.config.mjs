/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.daisyui.com',
                pathname: '**'
            },
        ]
    }
};

export default nextConfig;

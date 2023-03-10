const withExportImages = require('next-export-optimize-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.gravatar.com',
                port: '',
                pathname: '/avatar/**',
            },
        ],
    },

    // !!! Do we need this if not using Static export
    async exportPathMap() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/gallery': { page: '/gallery' },
            '/contact': { page: '/contact' },
        };
    },
};

module.exports = withExportImages(nextConfig);


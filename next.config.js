const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n,
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

module.exports = nextConfig;

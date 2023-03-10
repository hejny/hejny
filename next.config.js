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

/**
 * TODO: Solve warning during export:
 *     > warn  - Statically exporting a Next.js application via `next export`
 * disables API routes.
 * TODO: Remove or keep basePath: 'https://prototyping.hejny.org/'
 * TODO: Go through all option @see
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 */

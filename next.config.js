/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true ,
    },
    images: {
        unoptimized: true /* <- TODO: Optimize images, all images should be in some modern format like webp/svg */,
    },

    async exportPathMap() {
        return {
            '/': { page: '/' },
        };
    },
};

module.exports = nextConfig;

/**
 * TODO: Solve warning during export:
 *     > warn  - Statically exporting a Next.js application via `next export` disables API routes.
 * TODO: Remove or keep basePath: 'https://prototyping.hejny.org/'
 * TODO: Go through all option @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */

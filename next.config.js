/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // !!! Remove or keep basePath: 'https://prototyping.hejny.org/' /* <- !!! */,

    // TODO: !!! Go through all option @see https://nextjs.org/docs/api-reference/next.config.js/introduction

    images: {
        unoptimized: true /* <- TODO: Optimize images, all images should be in some modern format like webp/svg */,
    },

    async exportPathMap(/* defaultPathMap, { dev, dir, outDir, distDir, buildId } */) {
        return {
            '/': { page: '/' },
        };
    },
};

module.exports = nextConfig;

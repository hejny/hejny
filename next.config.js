/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // !!! Remove or keep basePath: 'https://prototyping.hejny.org/' /* <- !!! */,

    // TODO: !!! Go through all option @see https://nextjs.org/docs/api-reference/next.config.js/introduction

    async exportPathMap(/* defaultPathMap, { dev, dir, outDir, distDir, buildId } */) {
        return {
            '/': { page: '/' },
        };
    },
};

module.exports = nextConfig;

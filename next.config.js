/** @type {import('next').NextConfig} */

const pathPrefix = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

const nextConfig = {
    env: { pathPrefix },
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: '/portfolio',
    assetPrefix: pathPrefix,
}

module.exports = nextConfig;

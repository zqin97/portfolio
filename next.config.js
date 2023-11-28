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
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig

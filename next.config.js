/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: '/portfolio',
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig

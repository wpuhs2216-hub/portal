import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    optimizeFonts: false,
    images: {
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;

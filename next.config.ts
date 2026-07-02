import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    typescript: {
        // grind Day1: error ignore を外して実際の型エラーを可視化（0エラーなら false 維持）
        ignoreBuildErrors: false,
    },
    // 注(grind Day1): Next16 は NextConfig から `eslint` オプションを削除（`next lint` 廃止）。
    // 本リポは eslint 依存・設定ファイルも未導入のため eslint ゲートは対象外。
};

export default nextConfig;

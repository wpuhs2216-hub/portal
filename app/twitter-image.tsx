/**
 * Twitter Card 画像は OG 画像と同一にする（summary_large_image）
 * opengraph-image.tsx を再エクスポート（dynamic は静的解析が必要なので直接宣言）
 */
export const dynamic = 'force-static'
export { default, alt, size, contentType } from './opengraph-image'

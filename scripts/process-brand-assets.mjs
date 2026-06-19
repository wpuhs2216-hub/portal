// ロックアップ / ワードマーク画像を trim で余白カットして portal/public/ に配置
// 使い方: node scripts/process-brand-assets.mjs

import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const sourceDir = join(root, '..', '..', '..', 'image-library', 'by-project', 'egshugy-lab', 'final')
const publicDir = join(root, 'public')

const tasks = [
  {
    src: join(sourceDir, 'egshugy-lab-lockup.png'),
    dest: join(publicDir, 'lockup.png'),
    label: 'lockup',
  },
  {
    src: join(sourceDir, 'egshugy-lab-wordmark.png'),
    dest: join(publicDir, 'wordmark.png'),
    label: 'wordmark',
  },
]

// Codex image_gen は透過 PNG を出さないため、後処理で #0d0d0d 近傍ピクセルを alpha=0 にする
// 単純な閾値判定: R/G/B 全てが BG_THRESHOLD 未満なら背景とみなして透過
const BG_THRESHOLD = 24

for (const task of tasks) {
  // 1. trim で余白カット + 軽い再パディング
  // 2. raw データを取り出して背景ピクセルを透過に変換
  const trimmed = await sharp(task.src)
    .trim({ background: '#0d0d0d', threshold: 30 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const buf = Buffer.from(trimmed.data)
  let transparentCount = 0
  for (let i = 0; i < buf.length; i += 4) {
    const r = buf[i]
    const g = buf[i + 1]
    const b = buf[i + 2]
    if (r < BG_THRESHOLD && g < BG_THRESHOLD && b < BG_THRESHOLD) {
      buf[i + 3] = 0
      transparentCount++
    }
  }

  await sharp(buf, {
    raw: { width: trimmed.info.width, height: trimmed.info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toFile(task.dest)

  const totalPixels = trimmed.info.width * trimmed.info.height
  const transparentPct = ((transparentCount / totalPixels) * 100).toFixed(1)
  console.log(
    `✓ ${task.label.padEnd(10)} ${trimmed.info.width}x${trimmed.info.height} ` +
      `transparent=${transparentPct}% → ${task.dest}`
  )
}

console.log('\nBrand assets processed.')

// EGSHUGY LAB アイコン派生サイズ生成スクリプト
// 1024 マスターから 512 / 192 / 180 / 64 / 32 / 16 を sharp で派生
// 使い方: node scripts/generate-icons.mjs

import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const masterPath = join(root, '..', '..', '..', 'image-library', 'by-project', 'egshugy-lab', 'final', 'egshugy-lab-icon-1024.png')
const publicDir = join(root, 'public')
const appDir = join(root, 'app')

const sizes = [
  { size: 512, dest: join(publicDir, 'icon-512.png') },
  { size: 192, dest: join(publicDir, 'icon-192.png') },
  { size: 180, dest: join(appDir, 'apple-icon.png') },
  { size: 256, dest: join(appDir, 'icon.png') },
  { size: 32, dest: join(publicDir, 'favicon-32.png') },
  { size: 16, dest: join(publicDir, 'favicon-16.png') },
]

console.log(`Master: ${masterPath}`)

await Promise.all(
  sizes.map(async ({ size, dest }) => {
    await sharp(masterPath).resize(size, size).png({ compressionLevel: 9 }).toFile(dest)
    console.log(`✓ ${size}x${size} → ${dest}`)
  })
)

console.log('\nAll icon derivatives generated.')

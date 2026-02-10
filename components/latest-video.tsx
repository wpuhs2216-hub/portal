"use client"

import { useEffect } from 'react'
import { ChevronRight } from "lucide-react"

const TIKTOK_USERNAME = "diva_egshugy"
const TIKTOK_PROFILE_URL = `https://www.tiktok.com/@${TIKTOK_USERNAME}`

export function LatestVideo() {
  useEffect(() => {
    // TikTok埋め込みスクリプトを動的に読み込み
    if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) return
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className="py-6 px-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <span>🎬</span>
          <span>Latest</span>
        </h2>
        <a
          href={TIKTOK_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary flex items-center gap-1 transition-colors hover:text-primary/80 active:scale-95"
        >
          See more
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      {/* TikTok クリエイター埋め込み */}
      <div className="rounded-xl overflow-hidden">
        <blockquote
          className="tiktok-embed"
          cite={TIKTOK_PROFILE_URL}
          data-unique-id={TIKTOK_USERNAME}
          data-embed-type="creator"
          style={{ maxWidth: '100%', minWidth: '288px' }}
        >
          {/* スクリプト読み込み前のフォールバック */}
          <section>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={TIKTOK_PROFILE_URL}
              className="group flex items-center gap-4 w-full p-4 rounded-xl bg-secondary transition-all duration-150 active:scale-[0.98] hover:bg-secondary/80"
            >
              <span className="text-3xl">🎵</span>
              <div className="flex-1">
                <span className="text-foreground font-medium block">@{TIKTOK_USERNAME}</span>
                <span className="text-muted-foreground text-xs block">TikTokで見る</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </a>
          </section>
        </blockquote>
      </div>
    </section>
  )
}

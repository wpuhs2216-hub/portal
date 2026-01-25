"use client"

import Link from "next/link"
import { ChevronRight, Play } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "AI制作の裏側",
    platform: "TikTok",
    thumbnail: null,
  },
  {
    id: 2,
    title: "新アプリ紹介",
    platform: "Instagram",
    thumbnail: null,
  },
]

export function LatestVideo() {
  return (
    <section className="py-6 px-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <span>🎬</span>
          <span>Latest</span>
        </h2>
        <Link 
          href="#" 
          className="text-sm text-primary flex items-center gap-1 transition-colors hover:text-primary/80 active:scale-95"
        >
          See more
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Video Cards */}
      <div className="flex flex-col gap-3">
        {videos.map((video) => (
          <a
            key={video.id}
            href="#"
            className="group relative aspect-video rounded-xl bg-card overflow-hidden transition-all duration-150 active:scale-[0.98] hover:ring-2 hover:ring-primary/50"
          >
            {/* Placeholder Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
              </div>
            </div>
            
            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
              <p className="text-foreground text-sm font-medium truncate">{video.title}</p>
              <p className="text-muted-foreground text-xs">{video.platform}</p>
            </div>
            
            {/* Border */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
          </a>
        ))}
      </div>
    </section>
  )
}

"use client"

import { ShoppingCart, ShoppingBag, Monitor, Newspaper, ExternalLink } from "lucide-react"

const links = [
  {
    icon: ShoppingCart,
    emoji: "🛒",
    label: "LINE スタンプ",
    href: "/stamps/",
    description: "オリジナルスタンプ",
    comingSoon: false
  },
  {
    icon: ShoppingBag,
    emoji: "🛍️",
    label: "グッズショップ",
    href: "#",
    description: "オフィシャルグッズ",
    comingSoon: true
  },
  {
    icon: Monitor,
    emoji: "🍻",
    label: "のみしゅぎ",
    href: "#",
    description: "飲み会アプリ",
    comingSoon: true
  },
  {
    icon: Newspaper,
    emoji: "📰",
    label: "Blog / News",
    href: "#",
    description: "最新情報",
    comingSoon: true
  },
]

export function LinksSection() {
  return (
    <section className="py-6 px-4">
      {/* Section Header */}
      <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
        <span>🔗</span>
        <span>Links</span>
      </h2>

      {/* Link Buttons */}
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.comingSoon ? undefined : link.href}
            target={link.comingSoon ? undefined : "_blank"}
            rel={link.comingSoon ? undefined : "noopener noreferrer"}
            className={`group flex items-center gap-4 w-full p-4 rounded-xl bg-secondary transition-all duration-150 ${link.comingSoon
                ? "cursor-not-allowed opacity-60"
                : "active:scale-[0.98] hover:bg-secondary/80 hover:ring-1 hover:ring-primary/30"
              } focus:outline-none focus:ring-2 focus:ring-primary/50`}
            onClick={link.comingSoon ? (e) => e.preventDefault() : undefined}
          >
            {/* Emoji Icon */}
            <span className="text-xl flex-shrink-0">{link.emoji}</span>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <span className="text-foreground font-medium block truncate">
                {link.label}
              </span>
              <span className="text-muted-foreground text-xs block truncate">
                {link.description}
              </span>
            </div>

            {/* Coming Soon Badge or External Link Icon */}
            {link.comingSoon ? (
              <span className="text-xs bg-gray-600 text-gray-200 px-2 py-1 rounded-full flex-shrink-0">
                Coming Soon
              </span>
            ) : (
              <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </a>
        ))}
      </div>
    </section>
  )
}

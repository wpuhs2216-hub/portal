"use client"

import Link from "next/link"
import { ChevronRight, Dice5, Dog, Crown, Ban, Flame, Train, Spade, Users } from "lucide-react"

const apps = [
  {
    name: "チンチロ",
    icon: Dice5,
    color: "from-purple-500 to-pink-500",
    href: "/chinchiro/",
    comingSoon: false
  },
  {
    name: "ワードウルフ",
    icon: Dog,
    color: "from-cyan-500 to-blue-500",
    href: "/word-wolf/",
    comingSoon: false
  },
  {
    name: "キングスカップ",
    icon: Crown,
    color: "from-amber-500 to-orange-500",
    href: "/kingscup/",
    comingSoon: false
  },
  {
    name: "NGワード",
    icon: Ban,
    color: "from-red-500 to-rose-500",
    href: "/ng-word/",
    comingSoon: false
  },
  {
    name: "真実か挑戦か",
    icon: Flame,
    color: "from-yellow-500 to-amber-500",
    href: "/truth-or-dare/",
    comingSoon: false
  },
  {
    name: "山手線ゲーム",
    icon: Train,
    color: "from-emerald-500 to-green-500",
    href: "/yamanote/",
    comingSoon: false
  },
  {
    name: "ブラックジャック",
    icon: Spade,
    color: "from-indigo-500 to-violet-500",
    href: "/blackjack/",
    comingSoon: false
  },
  {
    name: "パーティー",
    icon: Users,
    color: "from-violet-500 to-fuchsia-500",
    href: "/party/",
    comingSoon: false
  },
]

export function FeaturedApps() {
  return (
    <section className="py-6 px-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <span>🎮</span>
          <span>Apps</span>
        </h2>
        <div
          className="text-sm text-muted-foreground/60 flex items-center gap-1 cursor-not-allowed"
          title="Coming Soon"
        >
          See all
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {apps.map((app) => (
          <a
            key={app.name}
            href={app.comingSoon ? undefined : app.href}
            className={`flex-shrink-0 w-[140px] group ${app.comingSoon ? "cursor-not-allowed" : ""}`}
            onClick={app.comingSoon ? (e) => e.preventDefault() : undefined}
          >
            <div className={`relative aspect-square rounded-2xl bg-card overflow-hidden transition-all duration-150 ${app.comingSoon
                ? "opacity-60 grayscale"
                : "active:scale-95 group-hover:ring-2 group-hover:ring-primary/50"
              }`}>
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 ${app.comingSoon ? "" : "group-hover:opacity-10"} blur-xl transition-opacity`} />

              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <app.icon className="w-12 h-12 text-foreground/80" />
              </div>

              {/* Coming Soon Overlay */}
              {app.comingSoon && (
                <div className="absolute top-2 right-2">
                  <span className="text-[10px] bg-black/60 text-white px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                    Soon
                  </span>
                </div>
              )}

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>

            {/* App Name */}
            <p className="mt-2 text-sm text-center text-foreground/90 font-medium truncate">
              {app.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

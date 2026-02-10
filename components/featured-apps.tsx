"use client"

import { ChevronRight, Dice5, Dog, Crown, Ban, Flame, Train, Spade, Users, Heart, Shuffle, Brain, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface AppItem {
  name: string
  icon: LucideIcon
  color: string
  href: string
  comingSoon: boolean
}

interface AppCategory {
  label: string
  emoji: string
  apps: AppItem[]
}

const categories: AppCategory[] = [
  {
    label: "ゲーム",
    emoji: "🎮",
    apps: [
      { name: "チンチロ", icon: Dice5, color: "from-purple-500 to-pink-500", href: "/chinchiro/", comingSoon: false },
      { name: "ワードウルフ", icon: Dog, color: "from-cyan-500 to-blue-500", href: "/word-wolf/", comingSoon: false },
      { name: "キングスカップ", icon: Crown, color: "from-amber-500 to-orange-500", href: "/kingscup/", comingSoon: false },
      { name: "NGワード", icon: Ban, color: "from-red-500 to-rose-500", href: "/ng-word/", comingSoon: false },
      { name: "真実か挑戦か", icon: Flame, color: "from-yellow-500 to-amber-500", href: "/truth-or-dare/", comingSoon: false },
      { name: "山手線ゲーム", icon: Train, color: "from-emerald-500 to-green-500", href: "/yamanote/", comingSoon: false },
      { name: "ブラックジャック", icon: Spade, color: "from-indigo-500 to-violet-500", href: "/blackjack/", comingSoon: false },
      { name: "パーティー", icon: Users, color: "from-violet-500 to-fuchsia-500", href: "/party/", comingSoon: false },
    ],
  },
  {
    label: "ツール & 診断",
    emoji: "🔧",
    apps: [
      { name: "相性診断", icon: Heart, color: "from-pink-500 to-red-500", href: "/compatibility/", comingSoon: false },
      { name: "チーム分け", icon: Shuffle, color: "from-teal-500 to-cyan-500", href: "/team-maker/", comingSoon: false },
      { name: "性格診断", icon: Brain, color: "from-purple-500 to-indigo-500", href: "/personality/", comingSoon: false },
      { name: "あだ名メーカー", icon: Sparkles, color: "from-amber-500 to-yellow-500", href: "/nickname-gen/", comingSoon: false },
    ],
  },
]

function AppCard({ app }: { app: AppItem }) {
  return (
    <a
      key={app.name}
      href={app.comingSoon ? undefined : app.href}
      className={`flex-shrink-0 w-[120px] group ${app.comingSoon ? "cursor-not-allowed" : ""}`}
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
          <app.icon className="w-10 h-10 text-foreground/80" />
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
      <p className="mt-1.5 text-xs text-center text-foreground/90 font-medium truncate">
        {app.name}
      </p>
    </a>
  )
}

export function FeaturedApps() {
  return (
    <section className="py-4 px-4">
      {categories.map((category) => (
        <div key={category.label} className="mb-5">
          {/* Category Header */}
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <span>{category.emoji}</span>
              <span>{category.label}</span>
            </h2>
          </div>

          {/* Horizontal Scrollable Cards */}
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {category.apps.map((app) => (
              <AppCard key={app.name} app={app} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

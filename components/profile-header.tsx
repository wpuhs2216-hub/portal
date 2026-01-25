"use client"

import { Instagram, Youtube } from "lucide-react"
import { Twitter } from "lucide-react" // Import Twitter icon

// X (formerly Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// TikTok icon component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  )
}

const socialLinks = [
  { icon: XIcon, href: "https://x.com/Egshugy", label: "X" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@diva_egshugy", label: "TikTok" },
  { icon: Instagram, href: "https://www.instagram.com/gently.diva_shu/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@diva_shu", label: "YouTube" },
]

export function ProfileHeader() {
  return (
    <header className="flex flex-col items-center pt-12 pb-8 px-4">
      {/* Avatar */}
      <div className="relative w-24 h-24 mb-4">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent p-[3px]">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
            <span className="text-4xl font-bold text-primary">え</span>
          </div>
        </div>
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10" />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold text-foreground mb-1">えぐしゅぎ ラボ</h1>

      {/* Tagline */}
      <p className="text-muted-foreground text-sm mb-6">AI Creator / Developer</p>

      {/* Social Icons */}
      <nav className="flex items-center gap-4" aria-label="Social media links">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-secondary text-foreground transition-all duration-150 active:scale-95 hover:bg-primary/20 hover:text-primary active:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </nav>
    </header>
  )
}

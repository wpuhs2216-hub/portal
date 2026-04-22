"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

/**
 * えぐしゅぎ・ラボ — Phosphor Terminal portal
 *
 * デザインシステム: ~/.gstack/projects/egshugy-lab/designs/.../portal.html
 * - ベース: 深黒 #07090B / 蛍光緑アクセント #7CFF7C
 * - フォント: Space Grotesk (英数) + IBM Plex Sans JP (日本語) + IBM Plex Mono (ラベル)
 * - レイアウト: editorial terminal（flat edges、mono 強調、// コメント装飾）
 */

interface Experiment {
  id: string
  number: string
  ja: string
  en: string
  category: string
  status: "active" | "beta" | "soon"
  href?: string
}

const EXPERIMENTS: Experiment[] = [
  { id: "egtype", number: "// 001", ja: "エグタイプ診断", en: "EGTYPE — Personality Assessment", category: "Diagnostic", status: "active", href: "/egtype/" },
  { id: "wordwolf", number: "// 002", ja: "ワードウルフ", en: "WORD WOLF — Party Game", category: "Game", status: "active", href: "/word-wolf/" },
  { id: "chinchiro", number: "// 003", ja: "チンチロ", en: "CHINCHIRO — Dice Game", category: "Game", status: "active", href: "/chinchiro/" },
  { id: "kingscup", number: "// 004", ja: "キングスカップ", en: "KINGS CUP — Drinking Game", category: "Game", status: "active", href: "/kingscup/" },
  { id: "compat", number: "// 005", ja: "相性診断", en: "COMPATIBILITY — Relation Analyzer", category: "Diagnostic", status: "active", href: "/compatibility/" },
  { id: "nickname", number: "// 006", ja: "あだ名メーカー", en: "NICKNAME GEN — Identity Tool", category: "Tool", status: "active", href: "/nickname-gen/" },
  { id: "puzzle", number: "// 007", ja: "6 ボールパズル", en: "6-BALL PUZZLE — Logic Game", category: "Game", status: "beta", href: "/puzzle/" },
  { id: "yamanote", number: "// 008", ja: "山手線ゲーム", en: "YAMANOTE — Word Challenge", category: "Game", status: "soon" },
]

const DATA = [
  { label: "EXPERIMENTS", value: "8+", delta: "THIS MONTH" },
  { label: "DIAGNOSTIC RUNS", value: "12.4K", delta: "+28% MoM" },
  { label: "ACTIVE NOW", value: "LIVE", delta: "STATUS OK" },
  { label: "PRODUCTS", value: "3", delta: "1 LIVE · 2 SOON" },
]

function usePad(n: number): string {
  return String(n).padStart(2, "0")
}

function Clock() {
  const [time, setTime] = useState("--:--:-- JST")
  useEffect(() => {
    const update = () => {
      const now = new Date()
      const jst = new Date(now.getTime() + (9 * 60 + now.getTimezoneOffset()) * 60000)
      setTime(`${usePad(jst.getHours())}:${usePad(jst.getMinutes())}:${usePad(jst.getSeconds())} JST`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return <span className="font-mono">{time}</span>
}

export default function Home() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#07090B] text-[#D6DFD6] font-[var(--font-ibm-plex-sans-jp),sans-serif]">
      {/* Status bar */}
      <div className="border-b border-[#1F2824] px-4 md:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#7F8A7F] font-[var(--font-ibm-plex-mono),monospace]">
        <div className="flex items-center gap-4 md:gap-5 flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#7CFF7C] animate-pulse" style={{ boxShadow: "0 0 6px #7CFF7C" }} />
            LAB.STATUS = OPERATIONAL
          </span>
          <span>LOC: OSAKA/MINAMI</span>
        </div>
        <Clock />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 backdrop-blur bg-[#07090B]/90 border-b border-[#1F2824]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2.5 font-[var(--font-ibm-plex-sans-jp),sans-serif] font-bold text-[15px] tracking-[0.1em]">
            <div className="w-7 h-7 border-[1.5px] border-[#7CFF7C] grid place-items-center text-[#7CFF7C] font-[var(--font-ibm-plex-mono),monospace] text-xs font-semibold">
              え
            </div>
            <span>えぐしゅぎ・ラボ</span>
          </div>
          <ul className="hidden md:flex gap-7 text-[13px] font-[var(--font-ibm-plex-mono),monospace] uppercase tracking-wide">
            <li><a href="#experiments" className="hover:text-[#7CFF7C] text-[#7F8A7F] transition-colors">// experiments</a></li>
            <li><a href="#products" className="hover:text-[#7CFF7C] text-[#7F8A7F] transition-colors">// products</a></li>
            <li><a href="#shop" className="hover:text-[#7CFF7C] text-[#7F8A7F] transition-colors">// shop</a></li>
          </ul>
          <button
            className="md:hidden border border-[#1F2824] px-3 py-2 text-[12px] font-[var(--font-ibm-plex-mono),monospace] hover:bg-[#7CFF7C] hover:text-[#07090B] active:bg-[#7CFF7C] active:text-[#07090B] transition"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="メニュー"
          >
            {navOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-[#1F2824] px-4 py-4 flex flex-col gap-4 text-[13px] font-[var(--font-ibm-plex-mono),monospace] uppercase tracking-wide bg-[#07090B]">
            <a href="#experiments" onClick={() => setNavOpen(false)} className="text-[#7F8A7F] hover:text-[#7CFF7C]">// experiments</a>
            <a href="#products" onClick={() => setNavOpen(false)} className="text-[#7F8A7F] hover:text-[#7CFF7C]">// products</a>
            <a href="#shop" onClick={() => setNavOpen(false)} className="text-[#7F8A7F] hover:text-[#7CFF7C]">// shop</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="flex gap-4 items-center mb-6 text-[11px] text-[#7F8A7F] font-[var(--font-ibm-plex-mono),monospace] flex-wrap">
          <span>001 / CREATIVE LAB / 2026</span>
          <span className="flex-1 min-w-6 border-t border-dashed border-[#1F2824]" />
          <span>株式会社EGS</span>
        </div>
        <h1 className="font-[var(--font-ibm-plex-sans-jp),sans-serif] font-bold text-[clamp(44px,11vw,128px)] leading-[0.95] tracking-[-0.04em] mb-6">
          えぐしゅぎ<span className="text-[#7CFF7C] relative inline-block px-1">・</span>ラボ
        </h1>
        <p className="max-w-xl text-[clamp(14px,1.6vw,17px)] leading-[1.7] text-[#7F8A7F] mb-10">
          <strong className="text-[#D6DFD6] font-medium">夜の街から生まれる実験的コンテンツ。</strong>
          <br />
          診断・ゲーム・ツールで、人と人が出会う瞬間を再設計する研究室。
        </p>
        <a
          href="#experiments"
          className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#D6DFD6] text-[#07090B] border border-[#D6DFD6] font-[var(--font-ibm-plex-mono),monospace] text-[13px] uppercase tracking-wider font-semibold hover:bg-[#7CFF7C] hover:border-[#7CFF7C] hover:shadow-[0_0_16px_rgba(124,255,124,0.25)] transition-all"
        >
          実験をみる / EXPLORE
          <span>→</span>
        </a>
      </section>

      {/* Data strip */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-6 md:mt-10">
        <div className="border-y border-[#1F2824] py-6 md:py-7 grid grid-cols-2 md:grid-cols-4">
          {DATA.map((cell, i) => (
            <div
              key={i}
              className={`px-5 md:px-8 ${i < DATA.length - 1 ? "md:border-r md:border-dashed md:border-[#1F2824]" : ""} ${i % 2 === 0 ? "border-r border-dashed border-[#1F2824] md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0 border-dashed border-[#1F2824] pb-5 md:pb-0" : i < 4 ? "pt-5 md:pt-0" : ""}`}
            >
              <div className="text-[10px] text-[#7F8A7F] uppercase tracking-wider mb-2 font-[var(--font-ibm-plex-mono),monospace]">
                {cell.label}
              </div>
              <div className="font-[var(--font-space-grotesk),sans-serif] font-semibold text-[clamp(22px,3.5vw,32px)] tracking-tight leading-none">
                {cell.value}
              </div>
              <div className="mt-1.5 text-[10px] text-[#7CFF7C] font-[var(--font-ibm-plex-mono),monospace]">
                {cell.delta}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <section id="products" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t border-[#1F2824]">
        <div className="flex items-end justify-between gap-6 mb-9 flex-col sm:flex-row">
          <div>
            <div className="mb-3 text-[11px] text-[#7F8A7F] uppercase tracking-wider font-[var(--font-ibm-plex-mono),monospace] flex items-center gap-2">
              <span className="w-6 h-px bg-[#7CFF7C]" />
              FEATURED
            </div>
            <h2 className="font-[var(--font-ibm-plex-sans-jp),sans-serif] font-bold text-[clamp(28px,5.5vw,52px)] tracking-[-0.03em] leading-tight">
              主力プロダクト <span className="text-[#7F8A7F] font-medium text-[0.6em] tracking-tight font-[var(--font-space-grotesk),sans-serif]">/ Products</span>
            </h2>
          </div>
          <div className="text-[13px] text-[#7F8A7F] font-[var(--font-ibm-plex-mono),monospace]">
            <strong className="text-[#7CFF7C] font-medium">3</strong> TOTAL
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6">
          <a
            href="https://nomishugy.vercel.app/waitlist"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0E1214] border border-[#1F2824] p-7 md:p-9 flex flex-col justify-between min-h-[340px] relative overflow-hidden hover:border-[#7CFF7C] hover:bg-[#151A1D] transition-colors group"
          >
            <div>
              <span className="absolute top-5 right-5 text-[10px] text-[#5A6460] font-[var(--font-ibm-plex-mono),monospace]">// 01</span>
              <span className="text-[10px] text-[#FF9E3B] uppercase tracking-wider mb-4 inline-flex items-center gap-1.5 font-[var(--font-ibm-plex-mono),monospace]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9E3B]" style={{ boxShadow: "0 0 6px #FF9E3B" }} />
                COMING SOON · 事前登録受付中
              </span>
              <h3 className="font-[var(--font-ibm-plex-sans-jp),sans-serif] font-bold text-[clamp(26px,4vw,36px)] leading-tight mb-3 tracking-tight">のみしゅぎ</h3>
              <p className="text-[#7F8A7F] text-sm leading-relaxed mb-6">
                大阪ミナミのバーを探し、飲み仲間とマッチングする。夜の街のための新しいポータル&マッチングアプリ。
              </p>
            </div>
            <div className="flex gap-5 md:gap-6 pt-5 border-t border-dashed border-[#1F2824] flex-wrap text-[11px] text-[#7F8A7F] font-[var(--font-ibm-plex-mono),monospace]">
              <div><span>AREA</span><strong className="block text-[#D6DFD6] font-medium text-base mt-0.5">大阪ミナミ</strong></div>
              <div><span>LAUNCH</span><strong className="block text-[#D6DFD6] font-medium text-base mt-0.5">2026 Q2</strong></div>
              <div><span>STATUS</span><strong className="block text-[#FF9E3B] font-medium text-base mt-0.5">PRE-REG</strong></div>
            </div>
          </a>
          <div className="flex flex-col gap-6">
            <a
              href="https://yorulog.vercel.app/waitlist"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0E1214] border border-[#1F2824] p-5 flex items-start justify-between gap-4 min-h-[135px] hover:border-[#7CFF7C] hover:bg-[#151A1D] transition-colors"
            >
              <div>
                <div className="text-[10px] text-[#FF9E3B] uppercase tracking-wider mb-2 font-[var(--font-ibm-plex-mono),monospace]">// 02 · COMING SOON</div>
                <h4 className="font-[var(--font-ibm-plex-sans-jp),sans-serif] font-semibold text-lg mb-1 tracking-tight">ヨルログ</h4>
                <p className="text-xs text-[#7F8A7F] leading-snug">夜職向け売上・顧客管理 CRM<br />事前登録受付中</p>
              </div>
              <div className="w-10 h-10 border border-[#1F2824] grid place-items-center text-[#7CFF7C] font-[var(--font-ibm-plex-mono),monospace] text-lg font-semibold flex-shrink-0">¥</div>
            </a>
            <Link
              href="/egtype/"
              className="bg-[#0E1214] border border-[#1F2824] p-5 flex items-start justify-between gap-4 min-h-[135px] hover:border-[#7CFF7C] hover:bg-[#151A1D] transition-colors"
            >
              <div>
                <div className="text-[10px] text-[#7CFF7C] uppercase tracking-wider mb-2 font-[var(--font-ibm-plex-mono),monospace]">// 03 · LIVE</div>
                <h4 className="font-[var(--font-ibm-plex-sans-jp),sans-serif] font-semibold text-lg mb-1 tracking-tight">エグタイプ診断</h4>
                <p className="text-xs text-[#7F8A7F] leading-snug">4 軸 16 タイプ性格診断</p>
              </div>
              <div className="w-10 h-10 border border-[#1F2824] grid place-items-center text-[#7CFF7C] font-[var(--font-ibm-plex-mono),monospace] text-lg font-semibold flex-shrink-0">◎</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Experiments index */}
      <section id="experiments" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t border-[#1F2824]">
        <div className="flex items-end justify-between gap-6 mb-9 flex-col sm:flex-row">
          <div>
            <div className="mb-3 text-[11px] text-[#7F8A7F] uppercase tracking-wider font-[var(--font-ibm-plex-mono),monospace] flex items-center gap-2">
              <span className="w-6 h-px bg-[#7CFF7C]" />
              INDEX
            </div>
            <h2 className="font-[var(--font-ibm-plex-sans-jp),sans-serif] font-bold text-[clamp(28px,5.5vw,52px)] tracking-[-0.03em] leading-tight">
              実験一覧 <span className="text-[#7F8A7F] font-medium text-[0.6em] tracking-tight font-[var(--font-space-grotesk),sans-serif]">/ Experiments</span>
            </h2>
          </div>
          <div className="text-[13px] text-[#7F8A7F] font-[var(--font-ibm-plex-mono),monospace]">
            TOTAL: <strong className="text-[#7CFF7C] font-medium">{EXPERIMENTS.length}</strong>
          </div>
        </div>
        <div className="border-t border-[#1F2824]">
          {EXPERIMENTS.map((exp) => {
            const content = (
              <>
                <span className="text-[11px] text-[#7F8A7F] font-[var(--font-ibm-plex-mono),monospace]">{exp.number}</span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-[var(--font-ibm-plex-sans-jp),sans-serif] font-medium text-[15px] md:text-[17px] tracking-tight truncate">{exp.ja}</span>
                  <span className="text-[10px] md:text-[11px] text-[#7F8A7F] uppercase tracking-wider font-[var(--font-ibm-plex-mono),monospace] truncate">{exp.en}</span>
                </div>
                <span className="hidden md:block text-[11px] text-[#7F8A7F] uppercase tracking-wider font-[var(--font-ibm-plex-mono),monospace]">{exp.category}</span>
                <span className={`text-[11px] font-[var(--font-ibm-plex-mono),monospace] flex items-center gap-1.5 ${
                  exp.status === "active" ? "text-[#7CFF7C]" : exp.status === "beta" ? "text-[#F4E04D]" : "text-[#7F8A7F]"
                }`}>
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-current ${exp.status === "active" ? "animate-pulse" : ""}`}
                    style={exp.status === "active" ? { boxShadow: "0 0 6px currentColor" } : undefined}
                  />
                  {exp.status === "active" ? "ACTIVE" : exp.status === "beta" ? "BETA" : "SOON"}
                </span>
                <span className="text-[#7F8A7F] font-[var(--font-ibm-plex-mono),monospace] text-right">→</span>
              </>
            )
            const gridCls = "grid grid-cols-[48px_1fr_auto_16px] md:grid-cols-[56px_1fr_100px_88px_20px] gap-3 md:gap-5 py-4 md:py-5 border-b border-[#1F2824] items-center hover:bg-[#0E1214] hover:px-3 transition-all"
            return exp.href ? (
              <a key={exp.id} href={exp.href} className={gridCls + " text-[#D6DFD6]"}>{content}</a>
            ) : (
              <div key={exp.id} className={gridCls + " text-[#D6DFD6] cursor-not-allowed opacity-70"}>{content}</div>
            )
          })}
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t border-[#1F2824]">
        <div className="mb-9">
          <div className="mb-3 text-[11px] text-[#7F8A7F] uppercase tracking-wider font-[var(--font-ibm-plex-mono),monospace] flex items-center gap-2">
            <span className="w-6 h-px bg-[#7CFF7C]" />
            SHOP
          </div>
          <h2 className="font-[var(--font-ibm-plex-sans-jp),sans-serif] font-bold text-[clamp(28px,5.5vw,52px)] tracking-[-0.03em] leading-tight">
            スタンプショップ <span className="text-[#7F8A7F] font-medium text-[0.6em] tracking-tight font-[var(--font-space-grotesk),sans-serif]">/ Shop</span>
          </h2>
        </div>
        <Link
          href="/stamps/"
          className="bg-[#0E1214] border border-[#1F2824] p-6 md:p-7 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center hover:border-[#7CFF7C] hover:bg-[#151A1D] transition-colors group"
        >
          <div>
            <div className="text-[10px] text-[#7CFF7C] uppercase tracking-wider mb-2 font-[var(--font-ibm-plex-mono),monospace]">▲ LINE STAMP</div>
            <h3 className="font-[var(--font-ibm-plex-sans-jp),sans-serif] font-semibold text-[22px] mb-1.5 tracking-tight">LINE スタンプ</h3>
            <p className="text-sm text-[#7F8A7F] leading-snug">えぐしゅぎラボ キャラクターのオリジナル LINE スタンプを販売中。</p>
          </div>
          <span className="justify-self-start md:justify-self-auto inline-block px-4 py-2.5 border border-[#2A3632] text-[12px] uppercase tracking-wider font-[var(--font-ibm-plex-mono),monospace] group-hover:bg-[#7CFF7C] group-hover:text-[#07090B] group-hover:border-[#7CFF7C] transition-colors">
            購入する →
          </span>
        </Link>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 md:px-6 pt-12 pb-8 border-t border-[#1F2824] mt-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-10 pb-10 border-b border-[#1F2824]">
          <div>
            <h4 className="font-[var(--font-ibm-plex-sans-jp),sans-serif] font-bold text-lg mb-2.5 tracking-tight">えぐしゅぎ・ラボ</h4>
            <p className="text-xs text-[#7F8A7F] leading-relaxed max-w-xs">株式会社 EGS / えぐしゅぎ。大阪ミナミで、夜の街から生まれる実験的コンテンツを設計する研究室です。</p>
          </div>
          <div>
            <h5 className="text-[11px] text-[#7F8A7F] uppercase tracking-wider font-[var(--font-ibm-plex-mono),monospace] mb-3.5">// PRODUCTS</h5>
            <a href="https://nomishugy.vercel.app/waitlist" target="_blank" rel="noopener noreferrer" className="block text-[13px] mb-2 hover:text-[#7CFF7C] transition-colors">のみしゅぎ</a>
            <a href="https://yorulog.vercel.app/waitlist" target="_blank" rel="noopener noreferrer" className="block text-[13px] mb-2 hover:text-[#7CFF7C] transition-colors">ヨルログ</a>
            <Link href="/egtype/" className="block text-[13px] mb-2 hover:text-[#7CFF7C] transition-colors">エグタイプ診断</Link>
          </div>
          <div>
            <h5 className="text-[11px] text-[#7F8A7F] uppercase tracking-wider font-[var(--font-ibm-plex-mono),monospace] mb-3.5">// LAB</h5>
            <a href="#experiments" className="block text-[13px] mb-2 hover:text-[#7CFF7C] transition-colors">実験一覧</a>
            <Link href="/stamps/" className="block text-[13px] mb-2 hover:text-[#7CFF7C] transition-colors">スタンプショップ</Link>
          </div>
          <div>
            <h5 className="text-[11px] text-[#7F8A7F] uppercase tracking-wider font-[var(--font-ibm-plex-mono),monospace] mb-3.5">// SOCIAL</h5>
            <a href="https://x.com/egshugy" target="_blank" rel="noopener noreferrer" className="block text-[13px] mb-2 hover:text-[#7CFF7C] transition-colors">X / Twitter</a>
            <a href="https://instagram.com/egshugy" target="_blank" rel="noopener noreferrer" className="block text-[13px] mb-2 hover:text-[#7CFF7C] transition-colors">Instagram</a>
            <a href="https://tiktok.com/@diva_egshugy" target="_blank" rel="noopener noreferrer" className="block text-[13px] mb-2 hover:text-[#7CFF7C] transition-colors">TikTok</a>
          </div>
        </div>
        <div className="pt-5 flex flex-wrap justify-between items-center gap-3 text-[11px] text-[#7F8A7F] font-[var(--font-ibm-plex-mono),monospace]">
          <span>© 2026 株式会社 EGS · ALL RIGHTS RESERVED</span>
          <span>// MADE IN OSAKA</span>
        </div>
      </footer>
    </div>
  )
}

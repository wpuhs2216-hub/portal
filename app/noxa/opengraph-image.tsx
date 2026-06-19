import { ImageResponse } from "next/og"
import fs from "fs"
import path from "path"

/**
 * Noxa OG 画像（1200x630）
 *
 * 構成: 左に実ロゴ画像（noxa-logo-512.png）、右にコピー + プロダクトチップ
 * カラー: Noxa 公式 #6D4FE8（Primary）+ #A89BFF（Accent Soft）+ #0d0d0d（背景）
 */

export const dynamic = "force-static"

export const alt = "NOXA — 夜職 DX プラットフォーム"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const OG_TEXT = "夜職DXプラットフォームヨルログのみしゅぎ店舗データキャスト記録コンプラ統合NOXA2026egshugycom田口修平"

async function loadGoogleFont(family: string, weight: number, text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}&display=swap`
    const css = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    }).then((r) => r.text())
    const match = css.match(/src:\s*url\((https:\/\/[^)]+\.woff2)\)/)
    if (!match) return null
    const fontUrl = match[1]
    return await fetch(fontUrl).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

export default async function NoxaOGImage() {
  const [black, bold, regular, mono] = await Promise.all([
    loadGoogleFont("Noto Sans JP", 900, OG_TEXT),
    loadGoogleFont("Noto Sans JP", 700, OG_TEXT),
    loadGoogleFont("Noto Sans JP", 400, OG_TEXT),
    loadGoogleFont("Geist Mono", 700, "NOXA2026egshugycomEGSHUGYLAB"),
  ])

  // Noxa ロゴを base64 で埋め込む
  const logoBuffer = fs.readFileSync(path.join(process.cwd(), "public", "noxa-logo-512.png"))
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`

  const fonts = [
    black && { name: "Noto Sans JP", data: black, style: "normal" as const, weight: 900 as const },
    bold && { name: "Noto Sans JP", data: bold, style: "normal" as const, weight: 700 as const },
    regular && { name: "Noto Sans JP", data: regular, style: "normal" as const, weight: 400 as const },
    mono && { name: "Geist Mono", data: mono, style: "normal" as const, weight: 700 as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; style: "normal"; weight: 400 | 700 | 900 }[]

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0d0d0d",
          color: "#f5f5f5",
          padding: "64px 72px",
          position: "relative",
          fontFamily: '"Noto Sans JP"',
        }}
      >
        {/* 紫グラデの円光（右上） */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-180px",
            width: "680px",
            height: "680px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #6D4FE8 0%, transparent 65%)",
            opacity: 0.45,
            display: "flex",
          }}
        />
        {/* Accent Soft 円光（左下） */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "440px",
            height: "440px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #A89BFF 0%, transparent 70%)",
            opacity: 0.2,
            display: "flex",
          }}
        />

        {/* Top: パスくず */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            color: "#9ca3af",
            fontWeight: 400,
            fontFamily: '"Geist Mono"',
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex" }}>EGSHUGY LAB</div>
          <div style={{ display: "flex", color: "#666" }}>/</div>
          <div style={{ display: "flex", color: "#6D4FE8", fontWeight: 700 }}>NOXA</div>
          <div style={{ flex: 1, display: "flex" }} />
          <div style={{ display: "flex", color: "#A89BFF" }}>// 2026</div>
        </div>

        {/* メイン: ロゴ + NOXA テキスト */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: "40px",
            zIndex: 1,
            marginTop: "20px",
          }}
        >
          <img
            src={logoSrc}
            width={240}
            height={240}
            style={{
              borderRadius: "44px",
              display: "flex",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: "26px",
                color: "#6D4FE8",
                fontWeight: 700,
                letterSpacing: "0.18em",
                display: "flex",
              }}
            >
              夜職 DX プラットフォーム — 構想
            </div>
            <div
              style={{
                fontSize: "180px",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.05em",
                color: "#f5f5f5",
                fontFamily: '"Geist Mono"',
                display: "flex",
              }}
            >
              NOXA
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f5f5",
                marginTop: "16px",
                letterSpacing: "-0.02em",
                display: "flex",
              }}
            >
              Concept,
              <span style={{ color: "#A89BFF", marginLeft: "10px", display: "flex" }}>not launched yet.</span>
            </div>
          </div>
        </div>

        {/* Bottom: プロダクトチップ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "22px",
                color: "#6D4FE8",
                fontWeight: 700,
                padding: "10px 18px",
                border: "1px solid #6D4FE8",
                borderRadius: "10px",
                display: "flex",
              }}
            >
              YoruLog
            </div>
            <div
              style={{
                fontSize: "22px",
                color: "#FF9E3B",
                fontWeight: 700,
                padding: "10px 18px",
                border: "1px solid #FF9E3B",
                borderRadius: "10px",
                display: "flex",
              }}
            >
              nomishugy
            </div>
            <div
              style={{
                fontSize: "22px",
                color: "#9ca3af",
                fontWeight: 400,
                padding: "10px 18px",
                border: "1px dashed #555",
                borderRadius: "10px",
                display: "flex",
              }}
            >
              Noxa Core — 構想中
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              paddingTop: "16px",
              borderTop: "1px dashed #333333",
              fontFamily: '"Geist Mono"',
            }}
          >
            <div style={{ fontSize: "22px", color: "#9ca3af", display: "flex" }}>
              EGSHUGY LAB
            </div>
            <div style={{ flex: 1, display: "flex" }} />
            <div
              style={{
                fontSize: "22px",
                color: "#A89BFF",
                fontWeight: 400,
                display: "flex",
              }}
            >
              // egshugy.com/noxa
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    }
  )
}

import type { Metadata } from "next"

/**
 * /noxa/ サブルート用の metadata
 * 親レイアウト (app/layout.tsx) を継承しつつ、OG / Twitter / タイトルを Noxa 用に上書きする
 */
export const metadata: Metadata = {
  title: "NOXA — 夜職 DX プラットフォームの構想",
  description:
    "Noxa（ノクサ）は、夜職 DX プラットフォームの構想。AI・顧客/キャスト/求人/発注データ管理・税金/給与計算など、現場の希望機能をできるだけ実装する方針で設計中。独立サービスはまだ未着手、複数アプリのアカウント共有ブランド名として運用中。EGSHUGY LAB 傘下。",
  alternates: {
    canonical: "https://egshugy.com/noxa/",
  },
  openGraph: {
    title: "NOXA — 夜職 DX プラットフォームの構想",
    description:
      "まだ完成していません。これは構想です。アカウント共有ブランド名として運用中、独立サービスは未着手。",
    type: "website",
    locale: "ja_JP",
    url: "https://egshugy.com/noxa/",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOXA — 夜職 DX プラットフォームの構想",
    description:
      "Concept, not launched yet. EGSHUGY LAB 傘下、共有ブランド名として運用中。",
  },
}

export default function NoxaLayout({ children }: { children: React.ReactNode }) {
  return children
}

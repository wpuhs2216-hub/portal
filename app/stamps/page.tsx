import Link from "next/link"
import { ArrowLeft, ExternalLink, ShoppingCart } from "lucide-react"

export const metadata = {
    title: "LINE Stamps | えぐしゅぎ ラボ",
    description: "えぐしゅぎオリジナルのLINEスタンプ一覧",
    openGraph: {
        title: "LINE Stamps | えぐしゅぎ ラボ",
        description: "えぐしゅぎオリジナルのLINEスタンプ一覧",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "LINE Stamps | えぐしゅぎ ラボ",
        description: "えぐしゅぎオリジナルのLINEスタンプ一覧",
        images: ["/og-image.png"],
    },
}

const stamps = [
    {
        id: "32133217",
        title: "えぐしゅぎスタンプ Vol.1",
        url: "https://store.line.me/stickershop/product/32133217/ja",
        image: "https://stickershop.line-scdn.net/stickershop/v1/product/32133217/LINEStorePC/main.png",
    },
    {
        id: "32211488",
        title: "えぐしゅぎスタンプ Vol.2",
        url: "https://store.line.me/stickershop/product/32211488/ja",
        image: "https://stickershop.line-scdn.net/stickershop/v1/product/32211488/LINEStorePC/main.png",
    },
]

export default function StampsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground pb-20">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 px-4 py-3 flex items-center gap-3">
                <Link
                    href="/"
                    className="p-2 -ml-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-lg font-bold">LINE スタンプ</h1>
            </header>

            <main className="container max-w-md mx-auto p-4 space-y-6">
                <div className="text-center py-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
                        <ShoppingCart className="w-8 h-8 text-[#06C755]" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Original Stickers</h2>
                    <p className="text-sm text-muted-foreground">
                        会話を盛り上げるオリジナルスタンプ販売中！
                    </p>
                </div>

                <div className="grid gap-4">
                    {stamps.map((stamp) => (
                        <div
                            key={stamp.id}
                            className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-[#06C755]/50 transition-colors shadow-sm"
                        >
                            <div className="aspect-[4/3] bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={stamp.image}
                                    alt={stamp.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-1">{stamp.title}</h3>
                                <p className="text-xs text-muted-foreground mb-4 font-mono">ID: {stamp.id}</p>

                                <a
                                    href={stamp.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#06C755]/90 text-white font-bold py-3 px-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-green-500/20"
                                >
                                    <span>LINE STOREで見る</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

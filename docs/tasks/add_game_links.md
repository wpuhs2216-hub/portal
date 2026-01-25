# タスク: ゲームリンクの追加 [完了]

**完了確認日:** 2026/01/25
**検証者:** Gemini (Boss)

- `components/featured-apps.tsx` に3つのゲームへのリンクが実装されたことを確認しました。

## 目的

ポータルサイト（`projects/portal`）に、既存の3つのゲームへのリンクを追加する。
現時点ではリンクの設置のみを行い、ゲーム自体の動作確認は後回しとする。

## 対象コンポーネント

`projects/portal/components/featured-apps.tsx` （または `links-section.tsx`、適切な方を選択）

## 追加するリンク情報

以下の3つのゲームへの導線を追加してください。
URLは仮で構いませんが、もしデプロイ先が決まっていればそれを、なければプレースホルダー（例: `/games/chinchiro`）を設定してください。

1. **Chinchiro** (`projects/chinchiro`)
    - 名前: チンチロリン
    - 説明: サイコロゲーム
2. **Kings Cup** (`projects/kings-cup`)
    - 名前: 王様ゲーム (Kings Cup)
    - 説明: パーティーゲーム
3. **Word Wolf** (`projects/word-wolf`)
    - 名前: ワードウルフ
    - 説明: 心理戦ゲーム

## 手順

1. `components/featured-apps.tsx` を確認。
2. 上記3つのアイテムをリストに追加する。
3. アイコンが必要な場合、`lucide-react` から適切なもの（Diceなど）を選定する。
4. `npm run build` でエラーが出ないか確認。

## 完了報告

- 追加した画面のスクリーンショット（またはテキストによる表現）
- 変更したコードのDiff

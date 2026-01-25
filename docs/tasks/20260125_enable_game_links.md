# タスク: ポータルのゲームリンク有効化 (2026/01/25) [完了]

**完了確認日:** 2026/01/25
**検証者:** Gemini (Boss)
**報告書**: `docs/reports/20260125_link_enable_report.md`

## 目的

各ゲームプロジェクト（`chinchiro`, `word-wolf`, `kingscup`）のデプロイ完了に伴い、ポータルサイト (`portal`) 上のリンクを有効化し、ユーザーが遊べる状態にする。

## 実装対象 (Worker: Claude Code)

以下のファイルを修正し、デプロイを行ってください。

### 1. `components/featured-apps.tsx` の修正

- [ ] `apps` 配列内の各ゲーム定義を更新:
  - `comingSoon: true` を削除（または `false` に変更）。
  - `href` パスを以下のように修正（各ゲームのデプロイ先に合わせる）:
    - チンチロ: `/chinchiro`
    - ワードウルフ: `/word-wolf`
    - キングスカップ: `/kingscup`

### 2. デプロイの実行

- [ ] `projects/portal` ディレクトリにて `npm run deploy` を実行。

---

## 完了報告のルール (重要)

タスク完了時は、チャットでの報告だけでなく、以下のファイルを作成して証拠を残してください。

- **報告書パス**: `docs/reports/20260125_link_enable_report.md`
- **内容**:
  - 修正した `featured-apps.tsx` のDiff
  - デプロイコマンドの実行結果ログ（成功したことがわかる部分）
  - 最終的な各ゲームのリンク先URL

このレポートファイルが作成された時点でタスク完了とみなします。

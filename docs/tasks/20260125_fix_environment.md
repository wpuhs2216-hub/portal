# タスク: 開発環境の正常化 (Fix Environment) [完了]

**完了確認日:** 2026/01/25
**検証者:** Gemini (Boss)

- `next.config.mjs`, `pnpm-lock.yaml` の削除を確認しました。
- `out` ディレクトリの生成を確認しました。

## 目的

重複した設定ファイルやロックファイルを整理し、正常にビルド・Lintができる状態にする。

## 対象ディレクトリ

`C:\Users\wpuhs\projects\portal`

## 作業手順

### 1. 不要ファイルの削除 (Cleanup)

以下のファイルを削除してください。

- [ ] `next.config.mjs` ( `next.config.ts` を正とするため)
- [ ] `pnpm-lock.yaml` ( `package-lock.json` を正とするため)

### 2. 依存関係のインストール (Install)

クリーンインストールを行ってください。

- [ ] ターミナルで `npm ci` または `npm install` を実行。

### 3. 動作確認 (Verification)

以下のコマンドが成功することを確認してください。

- [ ] `npm run lint` (エラーが出た場合は `npm run lint -- --fix` を試行し、それでも残る場合は報告すること)
- [ ] `npm run build`

## 完了条件

- 不要なファイルが削除されている。
- `npm run build` がエラーなく通る。

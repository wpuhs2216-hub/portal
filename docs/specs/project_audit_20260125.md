# プロジェクト現状調査報告書 (2026/01/25)

## 1. 概要

- **プロジェクト**: Next.js 16 + React 19 + Tailwind CSS v4 (最新技術スタック)
- **状態**: 構成ファイルやパッケージ管理に重複が見られ、不安定な状態。

## 2. 検出された問題点

### A. 設定ファイルの重複 (Critical)

以下の2つのファイルが存在し、競合の恐れがあります。

1. `next.config.mjs` (内容: シンプル、TypeScript無視設定あり)
2. `next.config.ts` (内容: **詳細設定あり**。`output: "export"`, `trailingSlash: true` など、こちらが本命と思われる)

**判定**: `next.config.mjs` は不要であり、削除すべきです。

### B. パッケージ管理の混在 (Warning)

- `package-lock.json` (143KB): npm用。依存関係がしっかり記録されています。
- `pnpm-lock.yaml` (92B): pnpm用。サイズが小さすぎ、初期化のみで実質使われていません。

**判定**: 現状は `npm` が実質的な管理ツールとなっています。混乱を避けるため `pnpm-lock.yaml` は削除すべきです。

### C. 実行環境の不備

- `npm run lint` が `eslint` コマンドを見つけられず失敗しました。
- 原因: `npm install` が正しく完了していないか、パスが通っていません。

## 3. 改善提案 (Refactoring Plan)

以下の手順で環境を正常化することを提案します。

1. **不要ファイルの削除**: `next.config.mjs`, `pnpm-lock.yaml`
2. **依存関係の再インストール**: `npm ci` (Clean Install)
3. **Lint実行と修正**: `npm run lint -- --fix`

この作業を行うための指示書を `docs/tasks/20260125_fix_environment.md` に作成します。

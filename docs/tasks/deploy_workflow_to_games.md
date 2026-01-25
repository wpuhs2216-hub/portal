# タスク: Anti-Gravity Workflowの全社展開 (Chinchiro & WordWolf)

## 目的

既存のゲームプロジェクト `chinchiro` と `word-wolf` に、標準化された開発ワークフロー（Boss/Worker分離）を適用する。

## 対象

1. `c:\Users\wpuhs\projects\chinchiro`
2. `c:\Users\wpuhs\projects\word-wolf`
3. (`kings-cup` はフォルダが見つからなかったためスキップ)

## 手順

各プロジェクトのルートに `.gemini/antigravity/roles/` ディレクトリを作成し、現在使用しているロール定義ファイルをコピーしてください。

### 1. chinchiro への適用

- [ ] `chinchiro/.gemini/antigravity/roles/` を作成。
- [ ] 以下のファイルをコピー:
  - `C:\Users\wpuhs\.gemini\antigravity\roles\GEMINI_BOSS_PROMPT.md`
  - `C:\Users\wpuhs\.gemini\antigravity\roles\CLAUDE_WORKER_PROMPT.md`
  - `C:\Users\wpuhs\.gemini\antigravity\roles\README_WORKFLOW.md`

### 2. word-wolf への適用

- [ ] `word-wolf/.gemini/antigravity/roles/` を作成。
- [ ] 同様に3つのファイルをコピー。

### 3. ドキュメントフォルダの整備

- [ ] 各プロジェクト直下に `docs/tasks/` フォルダを作成する。

## 完了条件

それぞれのプロジェクトで、`docs/tasks/` が存在し、ロール定義ファイルが配置されていること。

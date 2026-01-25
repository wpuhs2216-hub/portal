# タスク: Gitリポジトリ整備とGitHub連携

## 目的

4つのプロジェクト全てをGitで管理し、GitHub（およびローカルサーバー）へプッシュできるようにする。
また、ドキュメント類（`docs/`）はGit管理から除外する。

## 手順

### 1. .gitignore の整備 (全プロジェクト共通)

全てのプロジェクト (`portal`, `chinchiro`, `kings(cup)`, `word-wolf`) の `.gitignore` に以下が記述されているか確認し、なければ追加する。

```
docs/
.gemini/
.env.local
node_modules/
```

※既に追跡されている `docs/` ファイルがある場合は `git rm --cached -r docs/` で除外する。

### 2. ポータル (Portal) の初期化

パス: `projects/portal`

- [ ] `git init`
- [ ] `git add .`
- [ ] `git commit -m "Initial commit"`
- [ ] ローカルリモート追加: `z:\Coding\Git\portal.git` (なければ作成)
- [ ] GitHubリモート追加: ユーザーにGitHubリポジトリ作成を依頼し、URLを設定する。
  - コマンド: `gh repo create portal --public --source=. --remote=github` (ghコマンドが使える場合)

### 3. Word-Wolf の初期化

パス: `projects/word-wolf`

- [ ] `git init`
- [ ] `git add .`
- [ ] `git commit -m "Initial commit"`
- [ ] GitHubリモート追加: `gh repo create word-wolf --public --source=. --remote=github`

### 4. 既存リポジトリ (Chinchiro, Kings-Cup) の更新

- [ ] `docs/` の除外設定を反映してコミット。
- [ ] GitHubへのプッシュ（リモート `github` を追加してプッシュ）。

## 完了条件

- 全プロジェクトで `git status` がクリーンであること（`docs/` が無視されていること）。
- GitHubへプッシュされていること。

# タスク: SFTPデプロイスクリプトの実装

## 目的

Claude Code上での変更もコマンド一つでWebサーバーへアップロードできるようにする。

## 実装内容

### 1. 必要なパッケージのインストール

- [ ] `npm install --save-dev ssh2-sftp-client dotenv`

### 2. 環境変数の設定 (`.env.local`)

プロジェクト直下に `.env.local` を作成し、以下の内容を記述してください。
（`sftp.json` の内容を参考にしています）

```env
# デプロイ先サーバー情報
SFTP_HOST=192.168.0.77
SFTP_USER=root
SFTP_PORT=22
SFTP_PRIVATE_KEY_PATH="C:\Users\wpuhs\.ssh\id_ed25519"
SFTP_REMOTE_PATH=/var/www/portal
```

### 3. デプロイスクリプトの作成 (`scripts/deploy.js`)

以下の機能を持つスクリプトを作成します。

- `out/` ディレクトリの中身を、サーバーの `SFTP_REMOTE_PATH` へアップロードする。
- アップロード前に `npm run build` を実行する（オプション）。

### 4. `package.json` へのコマンド追加

```json
"scripts": {
  ...
  "deploy": "node scripts/deploy.js"
}
```

## 注意点

- **重要**: `.env.local` や秘密鍵は絶対にコミットしないこと（`.gitignore` に追加済みか確認）。

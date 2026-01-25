# SFTPデプロイ計画

## 概要

ビルド成果物（`out/` ディレクトリ）をSFTP経由でWebサーバーにアップロードするための手順を整備します。
セキュリティを考慮し、パスワードやホスト情報はコードに直書きせず、環境変数を使用します。

## 必要情報 (ユーザー入力)

以下の情報を `.env.local` ファイル（Git管理外）に設定していただく必要があります。

- HOST: サーバーアドレス
- USER: ユーザー名
- PORT: ポート（通常22）
- REMOTE_DIR: アップロード先ディレクトリ（例: `/var/www/html/`）
- PASSWORD: 接続パスワード

## 実行ツール案

Node.jsスクリプトを作成し、`npm run deploy` で実行できるようにします。
使用ライブラリ: `ssh2-sftp-client` (実績があり安定しているため)

## 今後の手順

1. `npm install ssh2-sftp-client dotenv`
2. `scripts/deploy.js` の作成
3. `package.json` にコマンド追加
4. `.env.local` の作成依頼

この計画でよろしいでしょうか？

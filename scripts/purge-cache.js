const https = require('https');
require('dotenv').config({ path: '.env.local' });

async function purgeCloudflareCache() {
  try {
    // 環境変数の検証
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;
    const zoneId = process.env.CLOUDFLARE_ZONE_ID;

    if (!apiToken || !zoneId) {
      console.log('⚠️  Cloudflare設定が見つかりません。キャッシュパージをスキップします。');
      return;
    }

    console.log('========================================');
    console.log('Cloudflareキャッシュをパージ中...');
    console.log('========================================');

    const data = JSON.stringify({ purge_everything: true });

    const options = {
      hostname: 'api.cloudflare.com',
      port: 443,
      path: `/client/v4/zones/${zoneId}/purge_cache`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
          responseData += chunk;
        });

        res.on('end', () => {
          try {
            const result = JSON.parse(responseData);

            if (result.success) {
              console.log('✅ Cloudflareキャッシュのパージが完了しました！');
              console.log('========================================');
              resolve();
            } else {
              console.error('❌ キャッシュパージに失敗しました:');
              console.error(result.errors);
              reject(new Error('Cache purge failed'));
            }
          } catch (error) {
            console.error('❌ レスポンスの解析に失敗しました:', error.message);
            reject(error);
          }
        });
      });

      req.on('error', (error) => {
        console.error('❌ リクエストエラー:', error.message);
        reject(error);
      });

      req.write(data);
      req.end();
    });

  } catch (error) {
    console.error('❌ キャッシュパージ中にエラーが発生しました:');
    console.error(error.message);
    throw error;
  }
}

// スクリプトとして直接実行された場合
if (require.main === module) {
  purgeCloudflareCache()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

module.exports = purgeCloudflareCache;

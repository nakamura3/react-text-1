# learn-webpack
Webpack (バンドラー) を試す

## シンプルなビルド
2 つの JavaScript ファイルをバンドルして public/main.js を出力する。
```
echo "{}" > package.json
npm i -D webpack webpack-cli webpack-dev-server
npx webpack
``

ローカルサーバーを実行して確認する
```
npx webpack-dev-sever
```

# learn-bootstrap
React Bootstrap を試す

## Webpack を直接設定するシンプルなプロジェクト
```
echo "{}" > package.json
npm i -D webpack webpack-cli webpack-dev-server
npm i -D babel-loader @babel/core @babel/preset-react
npm i react react-dom
npm i react-bootstrap
```
バンドルして public/main.js を出力する。
```
npx webpack
```

ローカルサーバーを実行して確認する
```
npx webpack-dev-sever
```

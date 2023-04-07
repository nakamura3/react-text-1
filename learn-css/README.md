# learn-css
CSS in JS を試す

## CSS in JS の基本
style プロパティに css オブジェクトを指定する

```
echo "{}" > package.json
npm i -D webpack webpack-cli webpack-dev-server
npm i -D babel-loader @babel/core @babel/preset-react
npm i react react-dom
npx webpack
```
ローカルサーバーを実行して確認する
```
npx webpack-dev-sever
```

## CSS modules
style-loader, css-loader を使って、css をモジュールとして扱う
```
npm -i -D style-loader css-loader
npx webpack
```

https://velopert.com/814

react 환경세팅
 1.초기
$ npm install -g npm

2.프로젝트 생성
$ mkdir react-tutorial && cd react-tutorial
$ npm init

3.Dependecy 및 Plugin 설치
// 의존 패키지들 추가
$ npm install --save react react-dom
//plugin
$ npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 webpack webpack-dev-server

5. webpack.config.js
module.exports = {
    entry: './src/index.js',
 
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
 
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },
 
    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
};
// package.json의 경우 script 수정
  "scripts": {
    "start": "webpack-dev-server --hot --host 0.0.0.0"
  },

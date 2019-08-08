const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin');
//const assetsPublicPath = '/zgdk/'
//const assetsSubcPath = '/zgdk/'
module.exports = {
  publicPath:"/zgdk",
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        favicon: ('favicon.png'),
        // title: ''
        title: ''
      }),
      new CompressionPlugin({
        filename: '[path].gz[query]',// 目标文件名
        algorithm: 'gzip',// 使用gzip压缩
        test: new RegExp(
          '\\.(js|css)$' // 压缩 js 与 css
        ),
        threshold: 10240,// 资源文件大于10240B=10kB时会被压缩
        minRatio: 0.8 // 最小压缩比达到0.8时才会被压缩
      }),
    ],
  },
  devServer: {
      open:false,
      port: 5200,
      host: '0.0.0.0',
      disableHostCheck: true,
      proxy: {
        '/api': {
          target: 'http://api.local.ant.com',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'
          }
        },
      }
    },
 
}

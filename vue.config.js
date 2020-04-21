module.exports = {
  // Webpack的配置
  configureWebpack: {
    resolve: {
      extensions: ['.vue', '.js'],
      alias: {
        // '@': path.resolve(__dirname, 'src'),
        'common': '@/common',
        'network': '@/network',
        'assets': '@/assets',
        'router': '@/router',
        'store': '@/store',
        'views': '@/views',
        'components': '@/components'
      }
    }   
  }
}

// 其它配置
// publicPath: './'     //相对路径， 默认'/'
// outputDir: 'dist'    //默认dist，目标目录在构建前会被清除 --no-clean可关闭该行为
// indexPath: 'index.html' //生成index.html的输出路径（相对于outputDir）
// // 多页配置，这里还是不齐全的
// pages: {
//   index: {
//     entry: 'src/index/main.js'    //必需
//     template: 'public/index.html'
//     filename: 'index.html' // 在dist/index.html的输出文件
//   }
// }
// lintOnSave: true //是否使用eslint-loader检查
// runtimeCompiler: false //是否包含template选项，会额外增加10kb左右

// devServer: {
//   //port host https可能会被命令行参数覆写
//   port: 8085, // 端口号
//   host: 'localhost',
//   https: false, // https:{type:Boolean}
//   open: true, //配置自动启动浏览器
//   //前端和后端API没有运行在同一个主机上，需要在开发环境下将API请求代理到API服务器
//   // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
//   proxy: {
//       '/api': {
//           target: '<url>',
//           ws: true,
//           changeOrigin: true
//       },
//       '/foo': {
//           target: '<other_url>'
//       }
//   },  // 配置多个代理
// }
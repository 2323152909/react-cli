const proxy = require('http-proxy-middleware')

// 配置代理
module.exports = function (app) {
  app.use(
    proxy('/api1',{
        target:'http://localhost:5000',
        changeOrigin:true,
        pathRewrite:{'^/api1':''}
      }
    )
  )
}
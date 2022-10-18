const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{ //遇見/api1前綴的請求,就會觸發該代理配置
            target: 'https://search.books.com.tw', //請求轉發給誰
            changeOrigin: true, //控制伺服器收到的請求頭中Host的值
            pathRewrite: {'^/api1':''} //重寫請求路徑(必須)
        })
    )
}
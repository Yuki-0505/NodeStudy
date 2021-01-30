const http = require('http')

const query = require('./middlewares/query')
const postBody = require('./middlewares/post-body')
const cookie = require('./middlewares/cookie')
const session = require('./middlewares/session')
const template = require('./middlewares/template')

const server = http.createServer(function (req, res) {
  /**
   * 手动配置中间件
   * 为req和res配置属性和方法
   * 在路由设置时就能调用
   * 相当于express中的app.use(callback(res, req, next) {})
   */
  // 解析get参数
  query(req, res, next)
  // 解析post参数
  postBody(req, res, next)
  // 解析cookie
  cookie(req, res, next)
  // 配置session
  session(req, res, next)
  // 配置模板引擎
  template(req, res, next)

  /**
   * 路由设置
   */
  if (req.url === '/') {
    // ...
  } else if(req.url === '/login') {
    // ...
  }

})

server.listen(8000, function () {
  console.log('listening on port 8000...')
})

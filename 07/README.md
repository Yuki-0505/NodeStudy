# `Express`中间件`MiddleWares`
```javascript
const http = require('http')

const server = http.createServer(function (req, res) {
  /**
   * 手动配置中间件
   */
  // 解析get参数
  const urlObj = url.parse(req.url, true)
  req.query = urlObj.query
  // 解析post参数
  req.body = {}
  // 解析cookie
  req.cookies = {}
  // 配置session
  req.session = {}
  // 配置模板引擎
  res.render = function () {}

})

server.listen(8000, function () {
  console.log('listening on port 8000...')
})
```

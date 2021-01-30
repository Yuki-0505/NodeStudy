const http = require('http')

const app = express()

/**
 * bodyParser.json()执行完后会返回一个函数作为参数callback
 * app.use(callback)匹配成功后会执行回调函数callback
 */
app.use(bodyParser.json())

/**
 * 中间件的执行是有顺序的
 * 规则：按顺序匹配路径，不匹配则继续向下执行，如果匹配需要next()交出执行权
 */

// 不关心请求路径的中间件
app.use(function (req, res, next) {
  console.log(1)
  // 交出执行权，匹配下一个中间件
  next()
})

// 匹配请求路径的中间件
app.use('/login', function (req, res, next) {
  // ...
  next()
})
// 匹配请求路径和请求方法的中间件
app.get('/login', function (req, res, next) {
  // ...
  next()
})
app.post('/login', function (req, res, next) {
  // ...
  fs.readFile('./app.js', function(err, data) {
    if(err) {
      // 调用next带参数时，会直接找到后面带四个参数的中间件
      return next(err)
    }
    // ...
  })
  next()
})

/**
 * 挂载路由
 */
app.use(router)

// 配置一个处理404的中间件
app.use(function(req, res, next) {
  res.send('404.html')
})

// 配置一个全局错误处理中间件
app.use(function (err, req, res, next) {
  console.log("app error handler")
  res.status(500).json({
    err_code: 500,
    message: err.message
  })
})

/**
 * 如果没有匹配的中间件，express默认会输出Cannot GET xxx / Cannot POST xxx
 */

app.listen(8000, function () {
  console.log('listening on port 8000...')
})

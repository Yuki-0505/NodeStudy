const express = require("express")

// 创建服务器应用程序
// 类似http.createServer()
const app = express()

// 收到get请求 / 时，执行回调函数
app.get('/', (req, res) => {
  // 获取客户端传递的参数
  console.log(req.query)

  res.send('你好，世界！')
})

// 收到post请求 / 时，执行回调函数
app.post('/', (req, res) => {
  res.send("hello express")
})

// 公开指定目录，参数：(url,本地目录)
app.use('/public/', express.static('./public/'))

// 省略第一个参数时，默认为 /
app.use(app.static('./public/'))

app.listen(8000, () => {
  console.log('app is running at port 8000...')
})

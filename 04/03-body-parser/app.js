const express = require('express')
// 引包
const bodyParser = require('body-parser')

const app = express()

app.engine('html', require('express-art-template'))

// 配置表单解析插件body-parser，配置后req会有body属性
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

app
  .get('/', (req, res) => {
    res.render('index.html')
  })
  .post('/post', (req, res) => {
    // 获取post请求数据
    const comment = req.body

    console.log(comment)
    res.send(JSON.stringify(req.body, null, 2))
  })
  .listen(8000, () => {
    console.log('app is listening on port 8000...')
  })

const express = require('express')
const bodyParser = require('body-parser')

const router = require('./router')

const app = express()


// 开放文件夹
app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('../../node_modules/'))

// 配置模板引擎和body-parser一定要在挂载路由之前
// 设置模板引擎
app.engine('html', require('express-art-template'))
// 配置body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 方式一
// 设置路由
// router(app)
// 方式二
// 把路由容器挂载到app服务中
app.use(router)

// 在最后处理不存在的请求
app.use((req, res) => {
  res.render('404.html')
})

// 监听端口
app.listen(8000, () => {
    console.log('listening on http://localhost:8000')
  })

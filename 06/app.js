const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')

const router = require('./routers/router')

const app = express()

// 公开文件夹
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, '../node_modules/')))

// 配置模块引擎
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))

// 配置post表单解析插件
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 在挂在路由之前设置
app.use(session({
  // session加密字符串
  secret: 'key',
  resave: false,
  // true 无论是否使用了session，都默认分配钥匙
  // false 当session中存数据时，分配钥匙
  saveUninitialized: true
}))

// 挂载路由
app.use(router)

// 监听
app.listen(8000, function () {
  console.log('listening on port 8000...')
})

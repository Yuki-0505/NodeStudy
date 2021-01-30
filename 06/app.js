const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const router = require('./router')

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

// 挂载路由
app.use(router)

// 监听
app.listen(8000, function () {
  console.log('listening on port 8000...')
})

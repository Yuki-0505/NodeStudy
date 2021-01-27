const express = require('express')

const app = express()

const comments = []

// 使用express-art-template必须安装art-template
// 配置art-template，参数(需要渲染的文件的后缀, 模板对象)
// 配置后才可使用res.render()
app.engine('html', require('express-art-template'))

// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认在views中查找
// 修改views路径
// app.set('views', './myViews/')
// app.set('views', './views/admin/')

app
  .get('/', (req, res) => {
    res.render('index.html', {
      comments: comments
    })
  })
  .get('/comments', (req, res) => {
    // req.query只能拿到get参数
    comments.push(req.query)
    // 重定向
    res.redirect('/')
  })
  .get('/admin/', (req, res) => {
    res.render('admin/index.html', {
      title: '管理系统'
    })
  })
  .get('/comments', (req, res) => {

  })
  .use('/public/', express.static('./public/'))
  .listen(8000, () => {
    console.log('app is running at port 8000...')
  })

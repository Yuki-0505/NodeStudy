const express = require('express')

const app = express()

// 使用express-art-template必须安装art-template
// 配置art-template，参数(需要渲染的文件的后缀, 模板对象)
app.engine('html', require('express-art-template'))

app
  .use('/public/', express.static('./public/'))
  .get('/', (req, res) => {
    // res.render('html模板名', {模板数据})
    // 第一个参数不能写路径，默认在views中查找
    // 修改views路径
    // app.set('views', './myViews/')
    res.render('index.html')
  })
  .get('/admin/', (req, res) => {
    res.render('admin/index.html', {
      title: '管理系统'
    })
  })
  .listen(8000, () => {
    console.log('app is running at port 8000...')
  })

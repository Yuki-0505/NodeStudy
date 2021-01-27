const http = require('http')
const fs = require('fs')
const url = require('url')
const template = require('art-template')

const comments = []

http
  .createServer((req, res) => {
    // 将url解析为对象
    const parseObj = url.parse(req.url, true)
    // 获取pathname
    const pathname = parseObj.pathname
    if (pathname === '/') {
      fs.readFile('./index.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found.')
        }
        // 模板替换
        const html = template.render(data.toString(), {
          comments: comments
        })
        res.end(html)
      })
    } else if(pathname === '/getAction') {
      // 将json数据返回给客户端
      // // 设置json格式类型
      // res.setHeader('Content-Type', 'application/json; charset=utf-8')
      // // 获取get提交的数据parseObj.query
      // res.end(JSON.stringify(parseObj.query))

      // 将客户端传来的数据添加到数组中
      comments.push(parseObj.query)
      // 设置重定向码302
      res.statusCode = 302
      // 设置重定向的地址
      res.setHeader('Location', '/')
      // 响应结束
      res.end()
    } else {
      fs.readFile('./404.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found.')
        }
        res.end(data)
      })
    }
  })
  .listen(8000, () => {
    console.log('listening on http 8000...')
  })

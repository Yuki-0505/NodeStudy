// 服务器js代码
const http = require('http')
const fs = require('fs')

http
  .createServer((req, res) => {
    const url = req.url

    if (url === '/') {
      fs.readFile('./views/index.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found.')
        }
        res.end(data)
      })
    } else if (url.indexOf('/public/') === 0) {
      // 服务器开放/public路径，客户端请求资源时使用url，不使用相对路径
      fs.readFile('.' + url, (err, data) => {
        if (err) {
          return res.end('404 Not Found.')
        }
        console.log(url)
        res.end(data)
      })
    } else {
      fs.readFile('./views/404.html', (err, data) => {
        if (err) {
          return res.end('404 Not Found.')
        }
        console.log(url)
        res.end(data)
      })
    }
  })
  .listen(8000, function () {
    console.log('listening on http 8000...')
  })

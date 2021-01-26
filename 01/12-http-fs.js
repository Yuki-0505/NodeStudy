const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url

  if (url === '/' || url === '/index.html') {
    fs.readFile('./resource/index.html', (err, data) => {
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      if (err) {
        res.end('read file error')
      } else {
        res.end(data)
      }
    })
  } else if (url === '/image') {
    fs.readFile('./resource/yui.jpg', (err, data) => {
      if (err) {
        res.end("read file error")
      } else {
        // 为图片指定content-type
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  } else {
    res.end('404 Not Found')
  }
})

server.listen(8000, function () {
  console.log('Server listening on port 8000...')
})

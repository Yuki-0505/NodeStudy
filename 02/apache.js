const http = require('http')
const fs = require('fs')

const server = http.createServer()

const wwwDir = '.'

server.on('request', (req, res) => {
  const url = req.url

  let filePath = '/index.html'
  if(url !== '/') {
    filePath = url
  }
  fs.readFile(wwwDir + filePath, (err, data) => {
    if(err) {
      return res.end('404 Not Found')
    } else {
      res.end(data)
    }
  })
})

server.listen(8000, function () {
  console.log('listening on http 8000...')
})

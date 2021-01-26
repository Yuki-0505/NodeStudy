// http 创建服务器模块
const http = require('http')

// http.createServer() 创建Server实例
const server = http.createServer()

// 接收客户端请求
server.on('request', (req, res) => {
  console.log("接收到客户端请求,addr =", req.socket.remoteAddress, ",port =", req.socket.remotePort, ",url =", req.url)

  // // 响应
  // res.write("hello\n")
  // // write可以使用多次，最后需要使用end()结束响应
  // res.end()

  // 设置浏览器编码,text/plain为普通文本
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.write('<h1>hello，世界</h1>')

  const url = req.url
  if (url === '/' || url === '/index') {
    res.end('index page')
  } else if (url === '/login') {
    res.end('login page')
  } else if (url === '/products') {
    const products = [{
        name: 'John',
        age: 18
      },
      {
        name: 'miss',
        age: 16
      },
      {
        name: 'jake',
        age: 20
      }
    ]
    res.end(JSON.stringify(products))
  } else {
    res.end('404 NOT FOUND')
  }
})

// 绑定端口号，启动服务器，浏览器默认请求端口为80
server.listen(8000, function () {
  console.log('Server is running... localhost:8000/')
})

const mysql = require('mysql')

// 创建连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mcmusic'
})

// 连接数据库
connection.connect()

// 执行数据操作
connection.query('select * from user;', (err, ret, fields) => {
  if(err) {
    console.log('error.')
  } else {
    console.log(ret)
  }
})

// connection.query('insert into user values(null, ...);', (err, ret, fields) => {
//   if(err) {
//     console.log('error.')
//   } else {
//     console.log(ret)
//   }
// })

// 关闭连接
connection.end()

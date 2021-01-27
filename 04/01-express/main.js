// 链式语法
const express = require('express')

const app = express()

app
  .get('/get/', (req, res) => {
    res.send('get')
  })
  .post('/post/', (req, res) => {
    res.send('post')
  })
  .use('/public/', express.static('./public/'))
  .listen(8000, () => {
    console.log('app is running at port 8000...')
  })

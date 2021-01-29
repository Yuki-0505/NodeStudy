const mongoose = require('mongoose')

// 连接mongodb数据库test，该数据库不需要存在，插入第一条数据后创建
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
// mongoose5.x后不再需要useMongoClient选项
mongoose.connect('mongodb://localhost/test')

// mongoose.Promise = global.Promise

// 设计数据库中集合Cat结构
const Cat = mongoose.model('Cat', {
  name: String
})

// 实例化一个Cat
const kitty = new Cat({
  name: 'miss'
})

// 持久化保存
kitty.save(err => {
  if (err) {
    console.log(err)
  } else {
    console.log('successful.')
  }
})

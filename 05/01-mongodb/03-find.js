const mongoose = require('mongoose')

const Schema = mongoose.Schema

// 连接数据库
mongoose.connect('mongodb://localhost/test')

// 文档结构
const userSchema = new Schema({
  username: {
    type: String,
    // 为true时表示该属性必须有
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})

// 发布模型
const User = mongoose.model('User', userSchema)

/**
 * 查询数据
 */

// 查询所有
// User.find((err, ret) => {
//   if(err) {
//     console.log('error.')
//   } else {
//     console.log(ret)
//   }
// })

// 按条件查询
// User.find({
//   username: 'miss'
// }, (err, ret) => {
// if(err) {
//     console.log('error.')
//   } else {
//     console.log(ret)
//   }
// })

// 查询一个，按条件查询
User.findOne({
  username: 'admin',
  password: '123456'
}, (err, ret) => {
  if (err) {
    console.log('error.')
  } else {
    console.log(ret)
  }
})

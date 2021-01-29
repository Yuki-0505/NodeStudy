const mongoose = require('mongoose')

const Schema = mongoose.Schema

// 连接数据库
mongoose.connect('mongodb://localhost/test')

// 设计集合文档结构
// 约束的目的是为了保证数据的完整性，不要有脏数据
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

// 将集合结构发布为模型
// 传入一大写名词单数作为集合名称，mongoose会自动生成小写复数的集合名称
// 例如 Use => users
// 返回值：模型构造函数
const User = mongoose.model('User', userSchema)


/**
 * 新增数据
 */
// 实例化
const admin = new User({
  username: 'miss',
  password: '123456',
  email: 'miss@miss.com'
})
// 保存数据
admin.save((err, ret) => {
  if (err) {
    console.log('error.')
  } else {
    console.log('success')
    console.log(ret)
  }
})

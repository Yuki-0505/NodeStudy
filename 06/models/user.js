const mongoose = require('mongoose')

const Schema = mongoose.Schema

// 连接数据库
mongoose.connect('mongodb://localhost/blog')

const userSchema = new Schema({
  // 邮箱
  email: {
    type: String,
    required: true
  },
  // 昵称
  nickname: {
    type: String,
    required: true
  },
  // 密码
  password: {
    type: String,
    required: true
  },
  // 创建时间
  created_time: {
    type: Date,
    // 不能写Data.now()，这样会直接调用方法
    default: Date.now
  },
  // 最后修改时间
  last_modified_time: {
    type: Date,
    // 不能写Date.now()，这样会直接调用方法
    default: Date.now
  },
  // 头像
  avatar: {
    type: String,
    default: '/public/img/avatar-default.jpg'
  },
  // 简介
  bio: {
    type: String,
    default: ''
  },
  // 性别
  gender: {
    type: Number,
    // [保密, 女, 男]
    enum: [-1, 0, 1],
    default: -1
  },
  // 生日
  birthday: {
    type: Date
  },
  // 账号状态
  status: {
    type: Number,
    // [无限制, 不可评论, 不可登陆]
    enum: [0, 1, 2],
    default: 0
  }
})

module.exports = mongoose.model('User', userSchema)

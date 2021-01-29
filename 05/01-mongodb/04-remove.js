const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

const userSchema = new Schema({
  username: {
    type: String,
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

const User = mongoose.model('User', userSchema)


/**
 * 删除数据
 */

// 删除所有
// User.remove({
//   username: 'miss'
// }, (err, ret) => {
//   if(err) {
//     console.log('error.')
//   } else {
//     console.log('success.')
//     console.log(ret)
//   }
// })

// 删除一个
User.deleteOne({
  username: 'admin'
}, (err, ret) => {
  if (err) {
    console.log('error.')
  } else {
    console.log('success.')
    console.log(ret)
  }
})

// 删除所有
// User.deleteMany({
//   username: 'miss'
// }, (err, ret) => {
//   if (err) {
//     console.log('error.')
//   } else {
//     console.log('success.')
//     console.log(ret)
//   }
// })

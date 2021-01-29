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
 * 更新数据
 */

// User.findByIdAndUpdate('6013d693b7cf723af4a50be8', {
//   password: '123'
// }, (err, ret) => {
//   if (err) {
//     console.log('error.')
//   } else {
//     console.log('success.')
//     console.log(ret)
//   }
// })

// User.updateOne({
//   password: '123'
// }, {
//   password: '123123'
// }, (err, ret) => {
//   if (err) {
//     console.log('error.')
//   } else {
//     console.log('success.')
//     console.log(ret)
//   }
// })


User.updateMany({
  username: 'miss'
}, {
  password: '654321'
}, (err, ret) => {
  if (err) {
    console.log('error.')
  } else {
    console.log('success.')
    console.log(ret)
  }
})

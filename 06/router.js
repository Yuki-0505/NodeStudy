const express = require('express')
const User = require('./models/user')
const md5 = require('blueimp-md5')

const router = express.Router()

// 渲染首页
router.get('/', function (req, res) {
  res.render('index.html')
})

// 渲染登陆页
router.get('/login', function (req, res) {
  res.render('login.html')
})

// 渲染注册页
router.get('/register', function (req, res) {
  res.render('register.html')
})

// 处理注册请求
// router.post('/register', function (req, res) {
//   const body = req.body
//   User.findOne({
//     // 判断邮箱或昵称是否重复
//     $or: [{
//       email: body.email
//     }, {
//       nickname: body.nickname
//     }]
//   }, function (err, user) {
//     if (err) {
//       return res.status(500).json({
//         err_code: 500,
//         message: 'Internal error.'
//       })
//     }
//     if (user) {
//       // 邮箱或昵称已存在
//       // res.json()方法接收一个对象，转成json字符串并发送
//       return res.status(200).json({
//         err_code: 1,
//         message: 'Email or nickname already exists.'
//       })
//     }

//     new User(body).save(function (err, user) {
//       if (err) {
//         return res.status(500).json({
//           err_code: 500,
//           message: 'Internal error.'
//         })
//       }
//       res.status(200).json({
//         err_code: 0,
//         message: 'Ok'
//       })
//     })
//   })
// })
// async异步 await等待
router.post('/register', async function(req, res) {
  const body = req.body
  try {
    // 判断邮箱是否存在
    if(await User.findOne({ email: body.email })) {
      return res.status(200).json({
        err_code: 1,
        message: 'Email already exists.'
      })
    }

    // 判断昵称是否存在
    if(await User.findOne({ nickname: body.nickname })) {
      return res.status(200).json({
        err_code: 2,
        message: 'Nickname already exists.'
      })
    }

    // 对密码重复加密
    body.password = md5(md5(body.password))
    // 创建用户，注册
    await new User(body).save()

    res.status(200).json({
      err_code: 0,
      message: 'Ok'
    })

  } catch (err) {
    res.status(500).json({
      err_code: 500,
      message: err.message
    })
  }
})

module.exports = router

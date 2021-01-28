/**
 * router.js
 * 路由模块
 * 针对不同请求作出不同响应
 */

/**
 * 方式一
 */
// const fs = require('fs')
// module.exports = function (app) {
//   app
//     .get('/', (req, res) => {
//       // 第二个参数为可选参数，data将会直接是字符串。也可以使用data.toString()
//       fs.readFile('./db.json', 'utf-8', (err, data) => {
//         if (err) {
//           return res.status(500).send('Server error.')
//         }
//         // console.log(data)
//         // JSON.stringify()将数组，对象转换成字符串，JSON.parse()将字符串转换成json对象
//         const students = JSON.parse(data).students
//         res.render('index.html', {
//           students: students
//         })
//         // res.send(students)
//       })
//       // res.render('index.html')
//     })
//     .post('/', (req, res) => {

//     })
// }




/**
 * 方式二
 */
const express = require('express')

// 创建router容器
const router = express.Router()

// 获取Student对象
const Student = require('./student')

// 显示所有学生数据
router.get('/students/', (req, res) => {
  // 回调函数，封装异步API
  Student.find((err, students) => {
    if (err) {
      // 链式语法
      return res.status(500).send('Server error.')
    }
    res.render('index.html', {
      students: students
    })
  })
})

// 渲染添加学生页面
router.get('/students/new/', (req, res) => {
  res.render('new.html')
})

// 处理添加学生请求
router.post('/students/new/', (req, res) => {
  // 1. 获取表单数据
  // console.log(req.body)
  // 2. 处理数据
  Student.save(req.body, err => {
    if (err) {
      return res.status(500).send('Server error.')
    }
  })
  // 3. 发送响应，重定向到首页
  res.redirect('/students')
})

// 渲染编辑页面
router.get('/students/edit/', (req, res) => {

})

// 处理编辑请求
router.post('/students/edit/', (req, res) => {

})

// 处理删除请求
router.get('/students/delete/', (req, res) => {

})

// 导出router
module.exports = router

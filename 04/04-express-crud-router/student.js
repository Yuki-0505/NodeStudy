/**
 * student.js
 * 文件数据操作模板
 * 操作文件中的数据
 */

// 导入文件模块
const fs = require('fs')
// 设置文件路径
const dbPath = './db.json'

/**
 * 获取所有学生列表
 * 回调函数，封装异步API
 * 将JSON.parse(data).students传到回调函数中处理
 */
exports.find = function(callback) {
  fs.readFile(dbPath, 'utf-8', (err, data) => {
    if(err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}


/**
 * 添加学生
 */
exports.save = function(stu, callback) {
  fs.readFile(dbPath, 'utf-8', (err, data) => {
    if(err) {
      return callback(err)
    }
    // 获取students和count
    const students = JSON.parse(data).students
    const count = JSON.parse(data).count
    // 为学生添加id
    stu.id = count
    // 将学生添加到数组
    students.push(stu)
    // 重构json对象，并转为字符串
    const studentsStr = JSON.stringify({
      students: students,
      count: count + 1
    })
    // 将json对象写入文件
    fs.writeFile(dbPath, studentsStr, err => {
      if(err) {
        return callback(err)
      }
      callback(null)
    })
  })
}

/**
 * 更新学生
 */
exports.update = function() {

}

/**
 * 删除学生
 */
exports.delete = function() {

}

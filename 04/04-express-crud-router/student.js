/**
 * student.js
 * 文件数据操作模板
 * 操作文件中的数据
 */

// 导入json文件操作模块
const JsonFs = require('./jsonFs')

/**
 * 获取所有学生列表
 * 回调函数，封装异步API
 * 将JSON.parse(data).students传到回调函数中处理
 * @param callback function (err, studentsArr)
 */
exports.find = function (callback) {
  JsonFs.readJson((err, jsonObj) => {
    if(err) {
      return callback(err)
    }
    callback(null, jsonObj.students)
  })
}

/**
 * 通过id获取单个学生
 * 将JSON.parse(data).students传到回调函数中处理
 * @param id
 * @param callback function (err, studentObj)
 */
exports.findById = function (id, callback) {
  JsonFs.readJson((err, jsonObj) => {
    if(err) {
      return callback(err)
    }
    const stu = jsonObj.students.find(item => item.id === parseInt(id))
    callback(null, stu)
  })
}


/**
 * 添加学生
 * @param stu json格式的学生信息
 * @param callback function (err)
 */
exports.save = function (stu, callback) {
  JsonFs.readJson((err, jsonObj) => {
    if (err) {
      return callback(err)
    }
    // 获取students,count
    const students = jsonObj.students
    const count = jsonObj.count
    // 原数组长度
    const len = students.length
    // 为学生添加id
    stu.id = count
    // 将学生添加到数组
    students.push(stu)
    // 重构json对象
    jsonObj = {
      students: students,
      count: count + students.length - len
    }
    // 将json对象写入文件
    JsonFs.writeJson(jsonObj, callback)
  })
}

/**
 * 更新学生
 * @param stu json格式的学生信息
 * @param callback function (err)
 */
exports.updateById = function (stu, callback) {
  JsonFs.readJson((err, jsonObj) => {
    if (err) {
      return callback(err)
    }
    // 获取students
    let students = jsonObj.students

    // 将id转换为数字类型
    stu.id = parseInt(stu.id)

    // 更新students对象
    // ES6语法，find() filter() map() reduce()
    students = students.map(item => item.id === stu.id ? stu : item)

    // 重构json对象，并转为字符串
    jsonObj = {
      students: students,
      count: jsonObj.count
    }
    // 将json对象写入文件
    JsonFs.writeJson(jsonObj, callback)
  })
}

/**
 * 删除学生
 * @param id
 * @param callback function (err)
 */
exports.deleteById = function (id, callback) {
  JsonFs.readJson((err, jsonObj) => {
    if(err) {
      return callback(err)
    }
    let students = jsonObj.students
    const len = students.length

    students = students.filter(item => item.id !== parseInt(id))

    jsonObj = {
      students: students,
      count: jsonObj.count + students.length - len
    }

    JsonFs.writeJson(jsonObj, callback)
  })
}

/**
 * jsonFs.js
 * json文件读取写入操作
 */

// 导入文件模块
const fs = require('fs')
// 设置文件路径
const dbPath = './db.json'

/**
 * 读取操作
 * @param callback function (err, jsonObj)
 */
exports.readJson = function (callback) {
  fs.readFile(dbPath, 'utf-8', (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data))
  })
}

/**
 * 写入操作
 * 将json格式对象保存到文件
 * @param jsonObj 需要保存的json对象
 * @param callback function (err)
 */
exports.writeJson = function (jsonObj, callback) {
  fs.writeFile(dbPath, JSON.stringify(jsonObj), callback)
}

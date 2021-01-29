const fs = require('fs')

/**
 * EcmaScript 6新增API Promise
 * Promise 是一个构造函数
 * 目的：解决callback hell回调地狱问题，使代码格式美观
 * Promise 容器中异步任务的状态 pending(即将发生的) Resolved(已成功) Rejected(已失败)
 */

// 创建 Promise 容器，返回一个承诺
const p1 = new Promise((resolve, reject) => {
  fs.readFile('./public/a.txt', 'utf-8', (err, data) => {
    if (err) {
      // reject 实际上就是 p1.then(callback1, callback2) 中的回调函数callback2
      reject(err)
    } else {
      // resolve 实际上就是 p1.then(callback1, callback2) 中的回调函数callback1
      resolve(data)
    }
  })
})
const p2 = new Promise((resolve, reject) => {
  fs.readFile('./public/b.txt', 'utf-8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
const p3 = new Promise((resolve, reject) => {
  fs.readFile('./public/c.txt', 'utf-8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})


// then（然后）
// then(resolve, reject)
p1
  .then(data => {
    console.log(data)
    // 返回一个Promise对象，后续的then会使用p2，即p2.then
    return p2
  }, err => {
    console.log(err)
    // 返回一个Promise对象，后续的then会使用p2，即p2.then
    return p2
  })
  .then(data => {
    console.log(data)
    return p3
  }, err => {
    console.log(err)
  })
  .then(data => {
    console.log(data)
  }, err => {
    console.log(err)
  })

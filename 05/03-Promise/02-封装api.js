const fs = require('fs')

function promiseReadFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

promiseReadFile('./public/a.txt')
  .then(data => {
    console.log(data)
    return promiseReadFile('./public/b.txt')
  }, err => {
    console.log(err)
  })
  .then(data => {
    console.log(data)
    return promiseReadFile('./public/c.txt')
  }, err => {
    console.log(err)
  })
  .then(data => {
    console.log(data)
  }, err => {
    console.log(err)
  })

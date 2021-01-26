// fs file-system

// require方法加载fs核心模块，浏览器不能使用require
const fs = require('fs');

// 参数：路径、回调函数
// data默认为二进制数据
fs.readFile('./data/readHello.txt', (err, data) => {
  if (!err) {
    console.log(data.toString());
  }
});

// 写入文件
fs.writeFile('./data/writeHello.txt', 'hello node', err => {
  console.log(err);
});

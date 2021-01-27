// 优先从缓存加载，只会加载一次
require('./load.js')
require('./load.js')
// .js后缀可省略
const load = require('./load')

load.say()

// 非路径形式的模块标识符
// 核心模块文件已经被编译为二进制文件，按名加载即可使用
require('http')
require('fs')

// 第三方模块需要npm下载，按包名加载。第三方包不会和核心模块重名
// 在当前目录下找到node_modules
// node_modules/art-template/package.json中main的值(index.js)为模块入口
const template = require('art-template')
// 若package.json不存在或main未指定，则默认加载index.js
// 若上述情况都不满足，则返回上一级寻找node_modules...
// 直到磁盘根目录还没找到，则报错：can not find module xxx

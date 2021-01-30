# `path`路径操作

## 1. 获取一个路径中的文件名部分

> `path.basename('/usr/local/index.js')`

```javascript
"index.js"
```

### 自动去除后缀名

> `path.basename('/usr/local/index.js', '.js')`

```javascript
"index"
```

## 2. 获取一个路径中的目录部分

> `path.dirname('/usr/local/index.js')`

```javascript
"/usr/local"
```

## 3. 获取一个路径中文件的后缀

> `path.extname('/usr/local/index.js')`

```javascript
".js"
```

## 4. 判断一个路径是否是绝对路径

> `path.isAbsolute('/usr/local/index.js')`

```javascript
true
```

## 5. 将一个路径解析为对象

> `path.parse('/usr/local/index.js')`

```javascript
{
  root: '/',
  dir: '/usr/local',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
```

## 6. 将路径进行拼接
> `path.join('/usr/', '../local/', './index.js')`
```javascript
'/local/index.js'
```

# `node`中的除`require` `exports` `module`等模块相关API之外的其他成员

> `__dirname`: 当前文件模块所属目录的绝对路径

> `__filename`: 当前文件的绝对路径

## 示例
> `C:\Users\HUAWEI\Document> node ./Code/node/app.js`
```javascript
/**
 * app.js
 */
const fs = require('fs')
const path = require('path')
/**
 * node中相对路径都是相对node命令执行时的路径的，不是相对于当前文件
 * 即C:\Users\HUAWEI\Document\hello.txt
 * 而实际要操作的路径是C:\Users\HUAWEI\Document\Code\node\hello.txt
 */
fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    throw err
  }
  console.log(data)
})
/**
 * 方式二
 */
fs.readFile(path.join(__dirname, './hello.txt'), (err, data) => {
  if (err) {
    throw err
  }
  console.log(data)
})
```

## 补充
> `模块中的路径表示是相对于当前文件模块的`
```javascript
require('./router.js')
```

# 密码加密
> `npm install --save blueimp-md5`

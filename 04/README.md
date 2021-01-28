# 1. `express`

## 1.1. 安装

```
npm install express --save
```

# 2. `nodemon`修改完文件自动重启

## 2.1. 安装

```
npm install --global nodemon
```

## 2.2. 检测版本

```
nodemon --version
```

# 2. `Express`中使用`art-template`

## 2.1. 安装

```
npm install --save express-art-template
```

# 3. 使用`body-parser`获取 POST 请求数据

## 3.1. 安装

```
npm install --save body-parser
```

# 4. `crud`
## 4.1.`bootstrap`
### 4.1.1. 安装
```
npm install --save bootstrap@3
```

## 4.2. `JSON`
### 4.2.1. `Array`/`Object` => `String`
```javascript
const jsonStr = JSON.stringify(data)
```
### 4.2.2. `二进制数据`/`String` => `JSON`
```javascript
const jsonObj = JSON.parse(data)
```

# 5. 路由设计

| 请求方法 | 请求路径          | get参数 | post参数                   | 备注             |
| -------- | ----------------- | ------- | -------------------------- | ---------------- |
| GET      | /students/        |         |                            | 渲染首页         |
| GET      | /students/new/    |         |                            | 渲染添加学生页面 |
| POST     | /students/        |         | name,age,gender,hobbies    | 处理添加学生请求 |
| GET      | /students/edit/   | id      |                            | 渲染编辑页面     |
| POST     | /students/edit/   |         | id,name,age,gender,hobbies | 处理编辑请求     |
| GET      | /students/delete/ | id      |                            | 处理删除请求     |

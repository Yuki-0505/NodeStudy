# `Mongodb`

## 官网

> <https://www.mongodb.com/>

## 配置环境变量

> `C:\Program Files\MongoDB\Server\4.4\bin`

## 启动

> `mongod`

```
该命令默认使用当前盘符下的`/data/db/`作为存储目录
第一次执行该命令前应手动创建 /data/db/目录
```

> `mongod --dppath=myPath`

```
该命令可修改默认数据存储目录
```

## 停止

> 在开启服务的命令行 `Ctrl + C` 即可停止

## 连接

> `mongo`

## 退出

> `exit`

## 基本命令

- 显示所有数据库
  > `show dbs`
- 查看当前操作的数据库，默认为 test
  > `db`
- 切换到指定数据库
  > `use myDbName`
- 显示当前数据库的所有集合
  > `show collections`
- 查询集合中的所有数据
  > `db.students.find()`
- 插入数据
  > `db.students.insertOne({"name":"Jack"})`

## 基本概念

- 数据库 `qq` `baidu`
- 集合(表) `users` `products`
- 文档(表记录) `{name: 'miss'}` `{name: 'jack', age: 18}`

```javascript
{
  qq: {
    users: [
      {name: 'miss'}
      {name: 'jack', age: 18}
    ],
    products: [

    ]
  },
  baidu: {

  }
}
```

# `node`中使用`mongodb`

## 安装`mongoose`

> `npm install --save mongoose`

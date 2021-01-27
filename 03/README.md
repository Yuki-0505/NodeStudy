# 1. 状态码

## 1.1. 301 永久重定向

- 浏览器第一次访问 a 会向服务器请求 a
- 浏览器得到 a 后发现需要重定向到 b
- 于是向服务器请求 b
- 第二次访问 a 会直接向服务器请求 b

## 1.2. 302 临时重定向

- 浏览器访问 a 会向服务器请求 a
- 浏览器得到 a 后发现需要重定向到 b
- 于是向服务器请求 b

# 2. 包说明文件`package.json`

## 2.1. 通常项目不提交`node_modules`文件夹，项目中包含`package.json`文件即可，通过`npm`命令即可下载

```
npm install
```

## 2.2. `npm`命令中添加`--save`参数即可在`package.json`中保存记录，初始`package.json`文件需要包含`{}`

## `2.3. package.json`文件可以通过以下命令创建

```
npm init
```

# 3. `npm`

## 3.1. `npm` 官网 <https://www.npmjs.com>，可以下载和发布自己的包

## 3.2. 升级

```
npm install --global npm
```

## 3.3. 常用命令

- `npm init -y`
  - 跳过向导，快速生成
- `npm install --save xxx`
  - `npm i -S xxx`
  - 下载并保存依赖项(`package.json`中的 dependencies 选项)
- `npm uninstall xxx`
  - `npm un xxx`
  - 只删除，保存依赖项
- `npm uninstall --save xxx`
  - `npm un -S xxx`
  - 删除同时去除依赖项
- `npm xxx --help`
  - 查看使用命令

# 4. `cnpm`

## 4.1. 安装`cnpm`

```
npm install --global cnpm
```

## 4.2. 使用

```
cnpm install jquery
```

## 4.3. 不使用`cnpm`但是通过淘宝服务器下载

### 4.3.1. 手动添加参数

```
npm install jquery --registry=https://registry.npm.taobao.org
```

### 4.3.2. 或直接添加到配置文件中

```
npm config set registry https://registry.npm.taobao.org
```

### 4.3.3. 查看`npm`配置信息
```
npm config list
```

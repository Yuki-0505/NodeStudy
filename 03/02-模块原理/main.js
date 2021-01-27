// 在node中，每个模块内部都有module对象
// 在module对象中，有一个exports对象

const module = {
  exports: {

  }
  // ...
}

// 方式一
module.exports.message = 'hello'
module.exports.sum = function (x, y) {
  return x + y;
}

// 在模块中有一句代码
const exports = module.exports

// 方式二
exports.message = 'hello'
exports.sum = function (x, y) {
  return x + y
}

// 方式三
// 返回单个对象
// 错误用法，直接给exports赋值，并不会返回，exports只是引用
exports = {
  message: 'hello',
  sum: function(x, y) {
    return x + y
  }
}

// 直接给module.exports赋值才能正确返回
module.exports = {
  message: 'hello',
  sum: function (x, y) {
    return x + y
  }
}
// 此时会重建关联
exports = module.exports


// 默认在最后有一句
return module.exports

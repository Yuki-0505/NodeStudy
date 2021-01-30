module.exports = function (req, res, next) {
  res.render = function (filePath, callback) {
    // ...
  }
  // ...
  next()
}

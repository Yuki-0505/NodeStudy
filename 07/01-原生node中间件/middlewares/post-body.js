module.exports = function (req, res, next) {
  req.body = {}
  // ...
  next()
}

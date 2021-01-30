module.exports = function (req, res, next) {
  req.cookie = {}
  // ...
  next()
}

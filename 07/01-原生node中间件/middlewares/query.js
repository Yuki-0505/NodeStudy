module.exports = function (req, res) {
  const urlObj = url.parse(req.url, true)
  req.query = urlObj.query
}

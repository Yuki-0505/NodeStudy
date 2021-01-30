const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(req.query)
  console.log(typeof req.query)
})

app.listen(8000, () => {
  console.log('listening on port 8000...')
})

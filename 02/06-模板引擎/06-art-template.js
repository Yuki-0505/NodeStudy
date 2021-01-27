const template = require('art-template')
const fs = require('fs')

const comments = [{
  name: 'miss',
  message: 'hello',
  dataTime: '2020-12-21'
},
{
  name: 'jack',
  message: 'hello',
  dataTime: '2020-12-21'
},
{
  name: 'john',
  message: 'hello',
  dataTime: '2020-12-21'
}
]

fs.readFile('./art-template.html', (err, data) => {
  if (err) {
    return res.end('404 Not Found.')
  }
  const result = template.render(data.toString(), {
    comments: comments,
    name: 'John'
  })

  console.log(result)
})

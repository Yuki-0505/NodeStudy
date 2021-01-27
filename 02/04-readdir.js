fs.readdir('./', (err, files) => {
  if (err) {
    console.log('read dir error')
  } else {
    console.log(files)
  }
})

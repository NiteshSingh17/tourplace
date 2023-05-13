const express = require('express')
const app = express()
const port = 3000;


console.log('pro', process.env)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

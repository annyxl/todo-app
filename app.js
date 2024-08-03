const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// add 4 routes at /todo: get, post, put, delete

// const todo = app.route('/todo')

//get

//post
app.post('/todo', (req, res) => {
  // console.log(req.body)
  res.send('Post works!')
})

//put

//delete

app.listen(port, () => {
  console.log(`Example app listening on port ${port}. http://localhost:${port}`)
})
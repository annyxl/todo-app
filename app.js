const express = require('express');
const app = express();
const port = 3000;

const db = require('./src/db/db')

const todoRouter = require('./src/routes/todo')

app.use(express.json()) // puts on req.body
app.use('/api', todoRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}. http://localhost:${port}`)
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Shutting down the server.')
    db.close()
  })
})